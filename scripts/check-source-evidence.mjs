import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { sha256 } from './community-image-gallery/catalog.mjs';
const catalog = JSON.parse(await readFile('export/catalog.json', 'utf8'));
for (const entry of catalog.entries) {
  const raw = await readFile(entry.verification.evidencePath, 'utf8');
  assert.equal(sha256(raw), entry.verification.evidenceSha256);
  const proof = JSON.parse(raw);
  assert.equal(proof.originalPrompt, entry.originalPrompt);
  assert.equal(proof.modelEvidence, entry.modelClaim.quote);
  assert.equal(proof.promptSourceUrl, entry.promptSourceUrl);
  assert.equal(proof.modelEvidenceSourceUrl, entry.modelClaim.sourceUrl);
}
console.log(`Source excerpts and full prompt hashes verified: ${catalog.count}`);
