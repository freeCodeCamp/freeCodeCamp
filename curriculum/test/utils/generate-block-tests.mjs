import fs from 'node:fs';
import path from 'node:path';

import _ from 'lodash';

import { parseCurriculumStructure } from '../../build-curriculum.js';

const __dirname = import.meta.dirname;

const testFilter = {
  block: process.env.FCC_BLOCK ? process.env.FCC_BLOCK.trim() : undefined,
  challengeId: process.env.FCC_CHALLENGE_ID
    ? process.env.FCC_CHALLENGE_ID.trim()
    : undefined,
  superBlock: process.env.FCC_SUPERBLOCK
    ? process.env.FCC_SUPERBLOCK.trim()
    : undefined
};

const GENERATED_DIR = path.resolve(__dirname, '../blocks-generated');

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

  const { fullSuperblockList } = await parseCurriculumStructure(testFilter);

  const blocks = _.uniq(
    fullSuperblockList.flatMap(({ blocks }) => blocks).map(b => b.dashedName)
  );

  for (const block of blocks) {
    const filePath = path.join(GENERATED_DIR, `${block}.test.js`);
    const contents = generateSingleBlockFile({ block });
    await fs.promises.writeFile(filePath, contents, 'utf8');
  }

  console.log(`Generated ${blocks.length} block test file(s).`);
}

function generateSingleBlockFile({ block }) {
  return `import { defineTestsForBlock } from '../test-challenges.js';

await defineTestsForBlock({ block: ${JSON.stringify(block)} });
`;
}

main();
