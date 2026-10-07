import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import {
  buildSnapshot,
  sha256,
  syncCatalog,
  validateCatalog,
} from "./catalog.mjs";

// Synthetic fixtures exist only in test memory/temp dirs. Never publish as source material.
const policy = {
  model: "Nano Banana 2.1",
  authorAliases: ["Nano Banana 2.1"],
  minimumWorks: 50,
};
const fixture = () => ({
  schemaVersion: 1,
  model: policy.model,
  count: 50,
  entries: Array.from({ length: 50 }, (_, index) => {
    const post = `https://x.com/fixture_author/status/${2100000000000000000n + BigInt(index)}`;
    const hash = sha256(`synthetic image ${index}`);
    const variant = {
      url: `https://media.reeldance.ai/galleries/assets/${hash}.webp`,
      sha256: hash,
      mimeType: "image/webp",
      width: 800,
      height: 1000,
      bytes: 12345,
    };
    const prompt = `SYNTHETIC TEST ONLY: distinct fixture composition ${index}.`;
    return {
      id: `x-${2100000000000000000n + BigInt(index)}`,
      slug: `fixture-${index}`,
      author: { handle: "fixture_author", name: "Synthetic Fixture" },
      sourceUrl: post,
      promptSourceUrl: post,
      mediaSourceUrl: post,
      originalPrompt: prompt,
      originalPromptSha256: sha256(prompt),
      verification: {
        status: "reviewed",
        promptCompleteness: "full-original",
        modelAttribution: "explicit-author-statement",
        evidencePath: `evidence/fixture-${index}.json`,
        evidenceSha256: sha256(`synthetic evidence ${index}`),
        reviewedAt: "2026-10-07T00:00:00Z",
      },
      workIdentity: {
        semanticGroupId: `fixture-group-${index}`,
        reviewed: true,
        reviewNote: "Synthetic fixture, no real X source.",
      },
      modelClaim: {
        name: policy.model,
        quote: "Synthetic fixture says Nano Banana 2.1.",
        sourceUrl: post,
        independentlyVerified: false,
      },
      mediaBinding: "direct-source",
      title: { en: `Synthetic fixture ${index}` },
      description: { en: "Test only, never a published work." },
      category: "styles",
      tags: ["test"],
      originalLanguage: "en",
      promptKind: "text-to-image",
      inputRequirement: "No reference input supplied in test.",
      publishedAt: "2026-10-06T00:00:00Z",
      rights: {
        basis: "third-party-source",
        note: "Synthetic fixture; no actual media or reuse rights.",
      },
      media: [
        {
          url: `https://pbs.twimg.com/media/fixture-${index}.jpg`,
          sourceUrl: post,
          role: "output",
          mediaKey: `3_fixture_${index}`,
          alt: `Synthetic output ${index}`,
          cdn: {
            ...variant,
            originalSha256: sha256(`synthetic source ${index}`),
            variants: [variant],
          },
        },
      ],
      referenceAssets: [],
    };
  }),
});

test("50 reviewed distinct fixtures adapt to the existing gallery shape without hotlink fallback", () => {
  const catalog = fixture();
  const result = buildSnapshot(validateCatalog(catalog, policy), {
    sourceCommit: null,
  });
  assert.equal(result.count, 50);
  assert.equal(result.mediaCount, 50);
  assert.equal(result.entries[0].prompt, catalog.entries[0].originalPrompt);
  assert.equal(result.entries[0].authorHandle, "fixture_author");
  assert.equal(
    result.media["fixture-0"][0].src,
    catalog.entries[0].media[0].cdn.url,
  );
  assert.deepEqual(result.referenceAssets["fixture-0"], []);
});
for (const [name, mutate] of [
  [
    "under 50",
    (c) => {
      c.entries.pop();
      c.count--;
    },
  ],
  [
    "wrong model",
    (c) => {
      c.model = "Nano Banana 2";
    },
  ],
  [
    "wrong author model",
    (c) => {
      c.entries[0].modelClaim.name = "Nano Banana Pro";
    },
  ],
  [
    "missing full original",
    (c) => {
      c.entries[0].verification.promptCompleteness = "truncated";
    },
  ],
  [
    "changed prompt hash",
    (c) => {
      c.entries[0].originalPrompt += "changed";
    },
  ],
  [
    "model source author mismatch",
    (c) => {
      c.entries[0].modelClaim.sourceUrl = c.entries[0].sourceUrl.replace(
        "fixture_author",
        "someone_else",
      );
    },
  ],
  [
    "creator mismatch",
    (c) => {
      c.entries[0].author.handle = "someone_else";
    },
  ],
  [
    "prompt source creator mismatch",
    (c) => {
      c.entries[0].promptSourceUrl = c.entries[0].sourceUrl.replace(
        "fixture_author",
        "someone_else",
      );
    },
  ],
  [
    "media source creator mismatch",
    (c) => {
      c.entries[0].media[0].sourceUrl = c.entries[0].sourceUrl.replace(
        "fixture_author",
        "someone_else",
      );
    },
  ],
  [
    "noncanonical source",
    (c) => {
      c.entries[0].sourceUrl += "?utm_source=x";
    },
  ],
  [
    "semantic translation duplicate",
    (c) => {
      c.entries[1].workIdentity.semanticGroupId =
        c.entries[0].workIdentity.semanticGroupId;
    },
  ],
  [
    "normalized prompt duplicate",
    (c) => {
      c.entries[1].originalPrompt =
        " " + c.entries[0].originalPrompt.toLowerCase() + "\n";
      c.entries[1].originalPromptSha256 = sha256(c.entries[1].originalPrompt);
    },
  ],
  [
    "duplicate original output bytes",
    (c) => {
      c.entries[1].media[0].cdn.originalSha256 =
        c.entries[0].media[0].cdn.originalSha256;
    },
  ],
  [
    "missing CDN",
    (c) => {
      delete c.entries[0].media[0].cdn;
    },
  ],
  [
    "foreign CDN",
    (c) => {
      c.entries[0].media[0].cdn.url = "https://evil.example/file.webp";
    },
  ],
  [
    "output labeled reference",
    (c) => {
      c.entries[0].referenceAssets = [
        { ...c.entries[0].media[0], role: "input" },
      ];
    },
  ],
  [
    "evidence outside repo",
    (c) => {
      c.entries[0].verification.evidencePath = "evidence/../../private.json";
    },
  ],
  [
    "unsupported reference original",
    (c) => {
      const e = c.entries[0];
      e.referenceAssets = [
        { ...e.media[0], role: "input", url: "https://evil.example/file.jpg" },
      ];
    },
  ],
])
  test(`rejects ${name}`, () => {
    const c = fixture();
    mutate(c);
    assert.throws(() => validateCatalog(c, policy));
  });

test("distinct input references remain separate from outputs", () => {
  const c = fixture(),
    e = c.entries[0],
    hash = sha256("reference only");
  const variant = {
    ...e.media[0].cdn,
    sha256: hash,
    url: `https://media.reeldance.ai/galleries/assets/${hash}.webp`,
  };
  e.referenceAssets = [
    {
      ...e.media[0],
      role: "input",
      mediaKey: "3_reference_only",
      url: "https://pbs.twimg.com/media/reference-only.jpg",
      cdn: {
        ...variant,
        originalSha256: sha256("original reference"),
        variants: [variant],
      },
    },
  ];
  const s = buildSnapshot(validateCatalog(c, policy), {});
  assert.equal(s.mediaCount, 50);
  assert.equal(s.referenceAssets["fixture-0"][0].role, "input");
});

test("baseline blocks attribution, source, slug and original changes even with recomputed hashes", () => {
  const baseline = fixture(),
    c = fixture();
  c.entries[0].originalPrompt += " changed";
  c.entries[0].originalPromptSha256 = sha256(c.entries[0].originalPrompt);
  assert.throws(() => validateCatalog(c, policy, baseline), /Protected source/);
});

test("network sync is pinned, repeatable and leaves the last good snapshot intact on failure", async () => {
  const dir = await mkdtemp(path.join(tmpdir(), "community-gallery-test-"));
  try {
    const output = path.join(dir, "snapshot.json"),
      catalog = fixture(),
      raw = JSON.stringify(catalog);
    const lock = {
      repository: "BravoNeo/awesome-nano-banana-2-1-prompts",
      commit: "a".repeat(40),
      catalogSha256: sha256(raw),
    };
    const fetcher = async (url, options) => {
      assert.equal(
        url,
        `https://raw.githubusercontent.com/${lock.repository}/${lock.commit}/export/catalog.json`,
      );
      assert.equal(options.redirect, "error");
      return new Response(raw);
    };
    assert.equal(
      (await syncCatalog({ lock, policy, output, fetcher })).changed,
      true,
    );
    const saved = await readFile(output, "utf8");
    assert.equal(
      (await syncCatalog({ lock, policy, output, fetcher })).changed,
      false,
    );
    assert.equal(JSON.parse(saved).sourceCommit, lock.commit);
    await assert.rejects(
      syncCatalog({
        lock,
        policy,
        output,
        fetcher: async () => new Response("{}"),
      }),
      /integrity/,
    );
    assert.equal(await readFile(output, "utf8"), saved);
    const invalid = fixture();
    invalid.entries[0].media[0].role = "input";
    const bad = JSON.stringify(invalid);
    await assert.rejects(
      syncCatalog({
        lock: { ...lock, catalogSha256: sha256(bad) },
        policy,
        output,
        fetcher: async () => new Response(bad),
      }),
      /separate/,
    );
    assert.equal(await readFile(output, "utf8"), saved);
    const input = path.join(dir, "offline.json");
    await writeFile(input, raw);
    await syncCatalog({ lock, policy, output, input });
    assert.equal(JSON.parse(await readFile(output, "utf8")).sourceCommit, null);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
