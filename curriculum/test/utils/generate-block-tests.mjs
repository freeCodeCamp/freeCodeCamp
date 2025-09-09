#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const {
  getCurriculumStructure,
  getSuperblockStructure
} = require('../../file-handler');
const { superBlockToFilename } = require('../../build-curriculum');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GENERATED_DIR = path.resolve(__dirname, '../superblocks-generated');

async function main() {
  await fs.promises.mkdir(GENERATED_DIR, { recursive: true });
  // clean directory
  const existing = await fs.promises.readdir(GENERATED_DIR);
  await Promise.all(
    existing.map(f =>
      fs.promises.rm(path.join(GENERATED_DIR, f), {
        force: true,
        recursive: true
      })
    )
  );

  console.log('Generating superblock tests (one file per superblock)...');

  // Build a lightweight structure to identify all block/superblock pairs
  const curriculum = getCurriculumStructure();
  const superblockFilenames = curriculum.superblocks;
  // Invert exported mapping: name -> filename to filename -> name
  const filenameToName = Object.fromEntries(
    Object.entries(superBlockToFilename).map(([name, filename]) => [
      filename,
      name
    ])
  );

  const pairs = [];
  for (const superblockFilename of superblockFilenames) {
    const superBlockName = filenameToName[superblockFilename];
    if (!superBlockName) continue;
    const superblockStructure = getSuperblockStructure(superblockFilename);
    const blocks = superblockStructure.blocks || [];
    pairs.push({ superBlock: superBlockName, blockCount: blocks.length });
  }
  // dedupe superblocks by name
  const seen = new Set();
  const uniquePairs = pairs.filter(p => {
    if (seen.has(p.superBlock)) return false;
    seen.add(p.superBlock);
    return true;
  });

  let count = 0;
  for (const { superBlock } of uniquePairs) {
    const dir = GENERATED_DIR;
    await fs.promises.mkdir(dir, { recursive: true });
    const filePath = path.join(dir, `${safe(superBlock)}.test.js`);
    const contents = generateSingleSuperBlockFile({ superBlock });
    await fs.promises.writeFile(filePath, contents, 'utf8');
    count++;
  }

  console.log(`Generated ${count} superblock test file(s).`);
}

function safe(name) {
  return String(name)
    .toLowerCase()
    .replace(/[/.]/g, '-')
    .replace(/[^a-z0-9-_]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function generateSingleSuperBlockFile({ superBlock }) {
  return `import { defineTestsForSuperBlock } from '../test-challenges.js';

await defineTestsForSuperBlock({ superBlock: ${JSON.stringify(superBlock)} });
`;
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
