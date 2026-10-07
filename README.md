# Nano Banana 2.1 Prompts

A source-attributed prompt data repository for the existing [ReelDance](https://reeldance.ai)
image prompt gallery. This repository currently contains collection rules,
validation tools and tests. **No source-reviewed community works are published yet.**
The collection target is at least 50 independent works; this is not a claim that
50 works have been collected.

Google's exact model is [Nano Banana 2.1](https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1?hl=en)
(`gemini-nano-banana-2.1`); see the [DeepMind model card](https://deepmind.google/models/model-cards/nano-banana-2-1/).
Do not relabel Nano Banana 2, Nano Banana Pro, GPT or Kling works as 2.1.

## What belongs in this collection

Each independent work must preserve the complete original prompt, original
author, accurate canonical post, explicit exact-version model statement and
corresponding output images. Keep optional input references separate from
outputs. Thread and quote relationships require explicit pairing evidence.
Translations and near-identical template variations count as one semantic
group. Multiple output images from one work do not increase work count.

Collect and review the actual public source response, including long-form
prompt text where available. Public records contain only curated prompt, creator name/handle, canonical source,
model statement, media hashes and necessary gallery/CDN fields. Full collector
responses, author profiles, engagement objects, tokens, headers and private data
stay outside this public repository. Reviewer fields and hashes are not
substitutes for reading the source. Existing author/source attribution is
retained; a public post does not itself grant unlimited reuse rights.

## Structure and validation

```text
data/entries/                 # Future reviewed source records, one work per file
sources/                      # Curated proof excerpts only; full collector data stays private
evidence/                     # Future completeness, pairing and deduplication reviews
schema/entry.schema.json      # Manifest structure; semantic constraints in validator
scripts/community-image-gallery/
scripts/validate-catalog.mjs
config/model-policy.json
export/catalog.json           # Only generated after real reviewed works exist
```

Directories without data and `export/catalog.json` are intentionally absent.
There are no placeholder community works. Synthetic fixtures are explicitly
marked inside tests and are never exported as source data.

With Node.js 22 or later, run:

```sh
npm test
node scripts/validate-catalog.mjs path/to/reviewed-catalog.json
```

The validator requires at least 50 works and checks exact-version attribution,
creator/post binding, complete prompt hashes, reviewed duplicate groups,
input/output separation and project CDN metadata. It does not prove source
authenticity, semantic independence, reuse permission or CDN availability.
See [the manifest contract](scripts/community-image-gallery/README.md) for fields
and the review requirements. CI tests tooling now and validates the real
catalog once `export/catalog.json` exists.

## ReelDance synchronization

The website consumes a catalog at an explicitly reviewed Git commit plus
SHA-256, validates it, and atomically builds a local SSR snapshot. It does not
fetch this repository from the visitor's browser. A failed import must preserve
the last good snapshot and block a new release. Source changes do not deploy
the website automatically. Production publication requires a separate review.

Media rendered on non-Blog ReelDance pages use the existing project CDN;
original media URLs and creator links remain source provenance. This repository
does not claim ownership of third-party prompts or artwork and does not grant
a blanket third-party media license.
