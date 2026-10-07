# Maintaining the Nano Banana 2.1 collection

A source-attributed prompt data repository for the existing [ReelDance](https://reeldance.ai)
image prompt gallery. The reviewed catalog contains **59 independent works by 33 creators**,
with complete original prompts, author-stated model evidence and original post links.
59 output previews and 3 optional input references are kept separate. Media is served
through ReelDance's existing CDN, using 154 content-addressed WebP objects with
responsive sizes. These are archived source previews, not claimed full-resolution exports.

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
sources/                      # Curated proof excerpts only; full collector data stays private
schema/entry.schema.json      # Manifest structure; semantic constraints in validator
scripts/community-image-gallery/
scripts/validate-catalog.mjs
config/model-policy.json
export/catalog.json           # 59 reviewed independent works
```

There are no placeholder community works. Source proof files contain curated excerpts,
not full collection responses. Same-post independent works have distinct work IDs. Synthetic fixtures are explicitly
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
and the review requirements. CI tests the importer and validates the reviewed catalog on every push.

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

## Interpreting the examples

Model labels reflect explicit creator statements, not independently verified generation
backends. Five multi-model composites clearly identify the Nano Banana 2.1 region;
other panels are not attributed to 2.1. An editing attempt that did not move a banana
to the ear remains labeled unsuccessful. Generated historical reconstructions, launch
posters and football tables are examples of image output, not independently verified facts.

Collection used the parent workflow’s authorized X-source collection and visual/source
review. This repository contains curated source excerpts only, with no collector
credentials, profiles, engagement payloads or private audit. Complete prompt hashes
are preserved from the supplied reviewed manifest.

## Portfolio documentation

English and Chinese READMEs are generated from the existing catalog plus the
presentation-only `docs/readme-intro.*.md`, `docs/readme-footer.*.md` and
`docs/readme-presentation.json`. Featured ordering and descriptions affect the
README only. Full original prompts remain separate from translations or editorial
adaptations. Never edit prompt bytes, creator/source bindings, model statements,
media provenance or work counts as part of a documentation refresh.

README images, posters, linked videos and input-reference previews use corresponding
ReelDance CDN assets. The original media URLs remain in the source catalog.
The presentation media map must be updated from a reviewed matching CDN asset
when a new work is added; do not substitute another work's media. Preview sizes
are not claimed to be full-resolution source exports.

Authored external anchors carry `rel="nofollow noreferrer"` and
`referrerpolicy="no-referrer"`. No links request a new tab. GitHub sanitizes rendered
README HTML and controls its final attributes; these authored attributes are not
a guarantee of GitHub's referrer behavior or SEO treatment. Confirm the rendered
links on GitHub when publishing. A GitHub GFM API check on 2026-10-07 retained `rel="nofollow"` and removed `noreferrer` and `referrerpolicy`; custom anchor IDs received the `user-content-` prefix. See [GitHub's markup pipeline](https://github.com/github/markup#github-markup).
Prompt code blocks are excluded from link conversion and remain literal source text.

The README structure draws on the browsing and attribution conventions of
[YouMind's image collections](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts).
ReelDance maintains this collection independently; editorial copy is original.

Run `python3 scripts/generate-readme.py`, then the same command with `--check`, after changing presentation sources.

## Website synchronization

A documentation commit does not deploy ReelDance. Keep catalog and schema hashes
unchanged for a documentation-only release. The GPT gallery resolves main and
imports its catalog at a pinned commit for each build; Kling and Nano use reviewed
source locks. Any future data change requires the website's separate import,
validation and publication workflow. Do not update website source locks just to
point them at a README-only commit.
