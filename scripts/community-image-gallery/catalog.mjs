import assert from "node:assert/strict";
import { createHash, randomUUID } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

export const sha256 = (value) =>
  createHash("sha256").update(value).digest("hex");
const text = (value, label, max = 12000) =>
  assert(
    typeof value === "string" && value.trim() && value.length <= max,
    label,
  );
const digest = (value) => /^[a-f0-9]{64}$/.test(value);
const categories = [
  "portraits",
  "posters",
  "products",
  "edits",
  "styles",
  "storyboards",
];

export function sourcePost(value) {
  text(value, "Source URL missing", 500);
  const url = new URL(value);
  const match = url.pathname.match(
    /^\/([A-Za-z0-9_]{1,15})\/status\/(\d{15,22})$/,
  );
  assert(
    url.protocol === "https:" &&
      ["x.com", "twitter.com"].includes(url.hostname) &&
      !url.port &&
      !url.username &&
      !url.password &&
      !url.search &&
      !url.hash &&
      match,
    "Canonical creator post required",
  );
  return { id: match[2], handle: match[1].toLowerCase() };
}

function image(asset, source, role) {
  assert(asset.role === role, "Input and output media must be separate");
  const mediaSource = sourcePost(asset.sourceUrl);
  assert(
    mediaSource.id === source.id && mediaSource.handle === source.handle,
    "Media source mismatch",
  );
  const original = new URL(asset.url);
  assert(
    original.protocol === "https:" &&
      original.hostname === "pbs.twimg.com" &&
      original.pathname.startsWith("/media/") &&
      !original.username &&
      !original.password &&
      !original.port &&
      !original.hash,
    "Original X image source required",
  );
  text(asset.mediaKey, "X media key required", 200);
  text(asset.alt, "Media alt text required", 500);
  const cdn = asset.cdn;
  assert(
    cdn && digest(cdn.originalSha256),
    "CDN and original byte hash required",
  );
  const variant = (v) => {
    assert(
      v &&
        digest(v.sha256) &&
        v.url ===
          `https://media.reeldance.ai/galleries/assets/${v.sha256}.webp` &&
        v.mimeType === "image/webp" &&
        ["width", "height", "bytes"].every(
          (k) => Number.isSafeInteger(v[k]) && v[k] > 0,
        ),
      "Verified project CDN image metadata required",
    );
  };
  variant(cdn);
  assert(
    Array.isArray(cdn.variants) && cdn.variants.length > 0,
    "Responsive CDN variants required",
  );
  cdn.variants.forEach(variant);
}

/** Mechanical validation complements source and semantic review; it never verifies X by itself. */
export function validateCatalog(catalog, policy, baseline = null) {
  text(policy.model, "Model policy required", 200);
  assert(
    Array.isArray(policy.authorAliases) &&
      policy.authorAliases.length > 0 &&
      policy.authorAliases.every(
        (alias) => typeof alias === "string" && alias.trim(),
      ),
    "Reviewed exact-version author aliases required",
  );
  assert(
    Number.isSafeInteger(policy.minimumWorks) && policy.minimumWorks >= 50,
    "Minimum independent-work threshold must be at least 50",
  );
  assert(
    catalog?.schemaVersion === 1 && catalog.model === policy.model,
    "Wrong schema or model",
  );
  assert(
    Array.isArray(catalog.entries) &&
      catalog.count === catalog.entries.length &&
      catalog.count >= policy.minimumWorks &&
      catalog.count <= 1000,
    "Independent-work count mismatch",
  );
  const ids = new Set(),
    slugs = new Set(),
    groups = new Set(),
    prompts = new Set(),
    outputs = new Set();
  for (const entry of catalog.entries) {
    const source = sourcePost(entry.sourceUrl);
    const promptSource = sourcePost(entry.promptSourceUrl);
    const outputSource = sourcePost(entry.mediaSourceUrl);
    assert(
      entry.id === `x-${source.id}` &&
        promptSource.id === source.id &&
        promptSource.handle === source.handle &&
        entry.author?.handle?.toLowerCase() === source.handle &&
        outputSource.handle === source.handle,
      "Original creator and source binding mismatch",
    );
    text(entry.author.name, "Original author name required", 200);
    assert(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug) &&
        entry.slug.length <= 120 &&
        !ids.has(entry.id) &&
        !slugs.has(entry.slug),
      "Duplicate work ID or slug",
    );
    ids.add(entry.id);
    slugs.add(entry.slug);
    text(entry.originalPrompt, "Complete original prompt required");
    assert(
      entry.originalPromptSha256 === sha256(entry.originalPrompt),
      "Original prompt hash mismatch",
    );
    const normalized = sha256(
      entry.originalPrompt
        .normalize("NFKC")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase(),
    );
    assert(
      !prompts.has(normalized),
      "Repeated original prompt does not count as an independent work",
    );
    prompts.add(normalized);
    assert(
      entry.verification?.status === "reviewed" &&
        entry.verification.promptCompleteness === "full-original" &&
        entry.verification.modelAttribution === "explicit-author-statement",
      "Source review incomplete",
    );
    text(
      entry.verification.evidencePath,
      "Non-secret source evidence path required",
      1000,
    );
    assert(
      /^(evidence|sources)\/[a-zA-Z0-9_./-]+$/.test(
        entry.verification.evidencePath,
      ) && !entry.verification.evidencePath.split("/").includes(".."),
      "Evidence must use a repository-relative path",
    );
    assert(
      digest(entry.verification.evidenceSha256),
      "Raw evidence digest required",
    );
    text(entry.verification.reviewedAt, "Review timestamp required", 100);
    assert(
      Number.isFinite(Date.parse(entry.verification.reviewedAt)),
      "Invalid review timestamp",
    );
    text(
      entry.workIdentity?.semanticGroupId,
      "Reviewed semantic duplicate group required",
      200,
    );
    text(entry.workIdentity?.reviewNote, "Semantic review note required", 3000);
    assert(
      entry.workIdentity.reviewed === true &&
        !groups.has(entry.workIdentity.semanticGroupId),
      "Translations or semantic duplicate templates do not count as independent works",
    );
    groups.add(entry.workIdentity.semanticGroupId);
    assert(
      policy.authorAliases.some(
        (alias) =>
          alias.toLowerCase() === entry.modelClaim?.name?.toLowerCase(),
      ) && entry.modelClaim.independentlyVerified === false,
      "Exact-version author model statement required",
    );
    text(
      entry.modelClaim.quote,
      "Verbatim author model evidence required",
      3000,
    );
    assert(
      entry.modelClaim.quote
        .toLowerCase()
        .includes(entry.modelClaim.name.toLowerCase()) &&
        sourcePost(entry.modelClaim.sourceUrl).handle === source.handle &&
        [source.id, outputSource.id].includes(
          sourcePost(entry.modelClaim.sourceUrl).id,
        ),
      "Model evidence source mismatch",
    );
    assert(
      [
        "direct-source",
        "author-thread-output",
        "author-quoted-output",
      ].includes(entry.mediaBinding) &&
        (entry.mediaBinding === "direct-source") ===
          (source.id === outputSource.id),
      "Output pairing mismatch",
    );
    if (entry.mediaBinding !== "direct-source")
      text(
        entry.pairingEvidence,
        "Explicit output pairing evidence required",
        3000,
      );
    text(entry.title?.en, "Editorial title required", 300);
    text(entry.description?.en, "Editorial description required", 3000);
    assert(
      categories.includes(entry.category) &&
        Array.isArray(entry.tags) &&
        entry.tags.every((v) => typeof v === "string" && v.length <= 100),
      "Invalid categories or tags",
    );
    assert(
      ["en", "zh", "ja", "ko", "es", "fr", "de", "pt", "it", "ar"].includes(
        entry.originalLanguage,
      ),
      "Unsupported original language",
    );
    assert(
      ["text-to-image", "image-editing"].includes(entry.promptKind),
      "Unknown prompt kind",
    );
    text(entry.inputRequirement, "Reference requirement required", 3000);
    assert(
      Number.isFinite(Date.parse(entry.publishedAt)),
      "Original publication date required",
    );
    assert(
      entry.rights?.basis === "third-party-source",
      "Source attribution basis required",
    );
    text(
      entry.rights.note,
      "Rights and permitted-use review note required",
      3000,
    );
    assert(
      Array.isArray(entry.media) &&
        entry.media.length > 0 &&
        entry.media.length <= 20,
      "Corresponding output images required",
    );
    for (const asset of entry.media) {
      image(asset, outputSource, "output");
      for (const key of [asset.mediaKey, asset.cdn.originalSha256]) {
        assert(
          !outputs.has(key),
          "Repeated output cannot increase independent work count",
        );
        outputs.add(key);
      }
    }
    assert(
      Array.isArray(entry.referenceAssets) &&
        entry.referenceAssets.length <= 20,
      "Reference input array required even when no inputs were supplied",
    );
    for (const asset of entry.referenceAssets) {
      const referenceSource = sourcePost(asset.sourceUrl);
      assert(
        referenceSource.handle === source.handle,
        "Reference source author mismatch",
      );
      image(asset, referenceSource, "input");
      assert(
        !entry.media.some(
          (m) =>
            m.mediaKey === asset.mediaKey ||
            m.cdn.originalSha256 === asset.cdn.originalSha256,
        ),
        "Output mislabeled as input reference",
      );
    }
  }
  if (baseline) {
    assert(baseline.model === catalog.model, "Wrong protected baseline model");
    for (const old of baseline.entries) {
      const current = catalog.entries.find((e) => e.id === old.id);
      assert(
        current &&
          JSON.stringify(immutable(current)) === JSON.stringify(immutable(old)),
        `Protected source changed or removed: ${old.id}`,
      );
    }
  }
  return catalog;
}
const immutable = (e) => ({
  id: e.id,
  slug: e.slug,
  originalPrompt: e.originalPrompt,
  author: e.author,
  sourceUrl: e.sourceUrl,
  promptSourceUrl: e.promptSourceUrl,
  mediaSourceUrl: e.mediaSourceUrl,
  modelClaim: e.modelClaim,
  mediaBinding: e.mediaBinding,
  pairingEvidence: e.pairingEvidence,
  inputRequirement: e.inputRequirement,
  promptKind: e.promptKind,
  publishedAt: e.publishedAt,
  workIdentity: e.workIdentity,
  media: e.media.map((m) => ({
    url: m.url,
    sourceUrl: m.sourceUrl,
    mediaKey: m.mediaKey,
    originalSha256: m.cdn.originalSha256,
  })),
  references: e.referenceAssets.map((m) => ({
    url: m.url,
    sourceUrl: m.sourceUrl,
    mediaKey: m.mediaKey,
    originalSha256: m.cdn.originalSha256,
  })),
});

/** Existing PressEntry/GalleryMedia shape; references remain separate and no hotlink fallback exists. */
export function buildSnapshot(catalog, provenance) {
  const media = {},
    referenceAssets = {};
  const adapt = (m) => ({
    src: m.cdn.url,
    originalSrc: m.url,
    width: m.cdn.width,
    height: m.cdn.height,
    srcSet: m.cdn.variants.map((v) => `${v.url} ${v.width}w`).join(", "),
    alt: m.alt,
    sourcePostUrl: m.sourceUrl,
    role: m.role,
    provenance: {
      basis: "public-source-local-preview",
      evidence: "Reviewed source retained in catalog; see entry rights note.",
    },
  });
  const entries = catalog.entries.map((e) => {
    media[e.slug] = e.media.map(adapt);
    referenceAssets[e.slug] = e.referenceAssets.map(adapt);
    return {
      slug: e.slug,
      candidate: e.id,
      title: e.title.en,
      category: e.category,
      tags: e.tags,
      prompt: e.originalPrompt,
      note: e.description.en,
      guidance: { reference: e.inputRequirement },
      postUrl: e.sourceUrl,
      promptSourceUrl: e.promptSourceUrl,
      mediaSourceUrl: e.mediaSourceUrl,
      authorHandle: e.author.handle,
      authorDisplayName: e.author.name,
      modelReportedByAuthor: e.modelClaim.name,
      originalLanguage: e.originalLanguage,
      verifiedAt: e.verification.reviewedAt,
      publishedAt: e.publishedAt,
      officialEmbedHtml: "",
      referenceRequirement: e.inputRequirement,
      publicationStatus: "verified_x_original",
      textStatus: "original",
    };
  });
  return {
    schemaVersion: 1,
    model: catalog.model,
    ...provenance,
    catalogSha256: sha256(JSON.stringify(catalog)),
    count: entries.length,
    mediaCount: Object.values(media).flat().length,
    entries,
    media,
    referenceAssets,
  };
}

/** Explicit imports only; caller owns build wiring and publication authorization. */
export async function syncCatalog({
  lock,
  policy,
  output,
  baseline = null,
  input,
  fetcher = fetch,
}) {
  assert(
    /^BravoNeo\/[a-z0-9-]+$/.test(lock?.repository) &&
      /^[a-f0-9]{40}$/.test(lock.commit) &&
      digest(lock.catalogSha256),
    "Reviewed immutable source lock required",
  );
  text(output, "Explicit snapshot output path required", 2000);
  const url = `https://raw.githubusercontent.com/${lock.repository}/${lock.commit}/export/catalog.json`;
  let raw;
  if (input) raw = await readFile(input, "utf8");
  else {
    const response = await fetcher(url, {
      redirect: "error",
      signal: AbortSignal.timeout(15000),
    });
    assert(response.ok, `Catalog source HTTP ${response.status}`);
    assert(
      Number(response.headers.get("content-length") || 0) <= 8 * 1024 * 1024,
      "Source too large",
    );
    assert(response.body?.getReader, "Streaming source response required");
    const reader = response.body.getReader(),
      chunks = [];
    let bytes = 0;
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.length;
        assert(bytes <= 8 * 1024 * 1024, "Source too large");
        chunks.push(value);
      }
    } finally {
      await reader.cancel().catch(() => {});
    }
    raw = Buffer.concat(chunks).toString("utf8");
  }
  assert(
    Buffer.byteLength(raw) <= 8 * 1024 * 1024 &&
      sha256(raw) === lock.catalogSha256,
    "Pinned source catalog integrity mismatch",
  );
  const catalog = validateCatalog(JSON.parse(raw), policy, baseline);
  const snapshot = buildSnapshot(catalog, {
    sourceCommit: input ? null : lock.commit,
    resolvedSource: input ? null : url,
    sourceSha256: sha256(raw),
    repository: lock.repository,
  });
  const content = JSON.stringify(snapshot, null, 2) + "\n";
  if ((await readFile(output, "utf8").catch(() => "")) === content)
    return { changed: false, count: snapshot.count };
  await mkdir(path.dirname(output), { recursive: true });
  const temporary = `${output}.tmp-${process.pid}-${randomUUID()}`;
  try {
    await writeFile(temporary, content, { flag: "wx" });
    await rename(temporary, output);
  } finally {
    await unlink(temporary).catch(() => {});
  }
  return { changed: true, count: snapshot.count, media: snapshot.mediaCount };
}
