# Shared image prompt catalog preparation

This module prepares the Nano Banana 2.1 gallery for the existing ReelDance
Prompt Press UI. It is not wired into build, navigation or production routes.
There is no real Nano Banana 2.1 catalog in this package. Test fixtures are
synthetic, explicitly marked and held only in memory or temporary directories.

## Entry points

- `validateCatalog(catalog, policy, baseline?)`: mechanical checks for at least
  50 independent reviewed source works, exact model, canonical author posts,
  full original prompt hashes, semantic review groups, output binding,
  separated inputs, CDN metadata and protected originals.
- `buildSnapshot(catalog, provenance)`: adapts to existing `PressEntry` and
  `GalleryMedia` fields. A separate `referenceAssets` map contains inputs.
  Rendering URLs always use project CDN; raw X URLs remain provenance only.
- `syncCatalog({ lock, policy, output, baseline?, input?, fetcher? })`: download
  a commit-pinned public `export/catalog.json` without authentication, validate
  its byte hash and contents, then atomically replace an explicit snapshot path.
  It does not run a build or publish. Failures leave prior bytes intact.
  An offline import has null source commit/resolved source and is not release evidence.

Run `node --test scripts/community-image-gallery/catalog.test.mjs` after placing
these files in ReelDance. The test uses mocked network responses; it does not
call X, download real media or invoke paid generation.

## Source manifest interface

Catalog fields: `schemaVersion: 1`, exact `model`, `count`, and `entries`.
The model policy supplies `model`, reviewed `authorAliases`, and `minimumWorks`
of at least 50. Aliases match case-insensitively but never include adjacent
versions such as Nano Banana 2 or Nano Banana Pro.

Each entry supplies:

| Field                                           | Required meaning                                                                                                                                       |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`, `slug`                                    | `x-{originalPromptPostId}`, unique stable URL slug                                                                                                     |
| `author`                                        | Original creator `name` and exact `handle`                                                                                                             |
| `sourceUrl`, `promptSourceUrl`                  | Canonical original prompt post; no query/hash                                                                                                          |
| `mediaSourceUrl`                                | Actual corresponding output post; original creator                                                                                                     |
| `originalPrompt`, `originalPromptSha256`        | Complete unmodified original, UTF-8 SHA-256                                                                                                            |
| `verification`                                  | `status: reviewed`, `promptCompleteness: full-original`, `modelAttribution: explicit-author-statement`, `evidencePath`, `evidenceSha256`, `reviewedAt` |
| `workIdentity`                                  | `semanticGroupId`, `reviewed: true`, source-based `reviewNote`                                                                                         |
| `modelClaim`                                    | Exact-version `name`, verbatim author `quote`, statement `sourceUrl`, `independentlyVerified: false`                                                   |
| `mediaBinding`                                  | `direct-source`, `author-thread-output`, or `author-quoted-output`; distinct posts also need `pairingEvidence`                                         |
| `title`, `description`                          | Reviewed editorial `en` text; preserve original separately                                                                                             |
| `category`, `tags`, `originalLanguage`          | Existing six Prompt Press categories; original language                                                                                                |
| `promptKind`, `inputRequirement`, `publishedAt` | Actual source mode/required input and original publication timestamp                                                                                   |
| `rights`                                        | `basis: third-party-source`, meaningful source/permitted-use review `note`                                                                             |
| `media`                                         | Nonempty corresponding output-image list; `role: output`                                                                                               |
| `referenceAssets`                               | Separate source input-image list; `role: input`; use `[]` when unavailable                                                                             |

Image fields: original X `url`, accurate `sourceUrl`, X `mediaKey`, descriptive
`alt`, and `cdn`. CDN fields: hashed project `url`, `sha256`, original byte
`originalSha256`, positive `width`, `height`, `bytes`, `mimeType: image/webp`,
and nonempty responsive `variants` with the same hosted-image metadata.
Project URLs use the existing `https://media.reeldance.ai/galleries/assets/{sha256}.webp`
path. Validation does not upload assets or prove their HTTP accessibility.

Mechanical checks cannot establish authenticity or detect all semantic
equivalence. The source collector/reviewer must compare full X API evidence,
long-form/note text, thread/media relationships, exact-version statement,
semantic duplicate clusters and permitted use before setting review fields.
Translation and template variants belong to the same semantic group and must
not be counted separately. Evidence paths are repository-relative non-secret
records, never credential files. No evidence response is fabricated here.

The current adapter handles images, matching GPT Prompt Press. A video output
needs a separately reviewed extension based on the existing Kling video schema;
never relabel video as an image or count unpaired media.

## Repository preparation after parent approval

Repository: `BravoNeo/awesome-nano-banana-2-1-prompts`, created as public with
the owner's approval. Structure reuses the existing data-repository convention:

```text
README.md                     # Source attribution, browse links, contribution rules
data/entries/*.json            # One reviewed independent work per record
sources/*.json                # Sanitized full X API evidence, no auth headers/tokens
evidence/*.json                # Pairing, completeness and duplicate-review decisions
schema/entry.schema.json       # Frozen manifest contract after real collector mapping
scripts/community-image-gallery/catalog.mjs
scripts/community-image-gallery/catalog.test.mjs
export/catalog.json           # Generated only from reviewed real records
```

Do not create an empty catalog or synthetic work export. The source repository
is data ownership; ReelDance remains the gallery/studio destination. Keep
creator/source links and do not claim third-party prompts/media are an owned
or permissively licensed collection merely because they are public.

After at least 50 real entries and all asset checks, pin the approved repository
commit and catalog SHA-256 in a reviewed source lock. Use a thin build-sync wrapper
to call this module before Vite, following Kling's explicit integrity lock.
Subsequent imports pass the protected source baseline. No scheduled publish,
cross-repository secret, GitHub event or automatic deployment is required.
