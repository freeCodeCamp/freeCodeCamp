import fs from 'fs/promises';
import path, { join } from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';

import { IntroJson, parseJson } from './helpers/parse-json';
import { withTrace } from './helpers/utils';
import { getAllBlocks, validateBlockName } from './utils';
import {
  getBlockStructure,
  getBlockStructurePath,
  getSuperblockStructure,
  writeBlockStructure,
  writeSuperblockStructure,
  getContentConfig,
  getCurriculumStructure
} from '@freecodecamp/curriculum/file-handler';
import matter from 'gray-matter';

interface RenameBlockArgs {
  newBlock: string;
  oldBlock: string;
  newName: string;
}

async function renameBlock({ newBlock, newName, oldBlock }: RenameBlockArgs) {
  const blockStructure = getBlockStructure(oldBlock);
  const blockStructurePath = getBlockStructurePath(oldBlock);
  blockStructure.dashedName = newBlock;
  blockStructure.name = newName;
  await writeBlockStructure(newBlock, blockStructure);
  await fs.rm(blockStructurePath);
  console.log('New block structure .json written.');

  const { blockContentDir } = getContentConfig('english');
  const oldBlockContentDir = join(blockContentDir, oldBlock);
  const newBlockContentDir = join(blockContentDir, newBlock);
  await fs.rename(oldBlockContentDir, newBlockContentDir);
  console.log('Block challenges moved to new directory.');

  const { superblocks } = getCurriculumStructure();
  console.log('Updating superblocks containing renamed block.');
  for (const superblock of superblocks) {
    const superblockStructure = getSuperblockStructure(superblock);
    const { chapters = [] } = superblockStructure;
    for (const chapter of chapters) {
      for (const module of chapter.modules) {
        const { blocks } = module;
        const blockIndex = blocks.findIndex(block => block === oldBlock);
        if (blockIndex !== -1) {
          module.blocks[blockIndex] = newBlock;
          await writeSuperblockStructure(superblock, superblockStructure);
          console.log(
            `Updated superblock .json file written for ${superblock}.`
          );

          const superblockPagesDir = path.resolve(
            __dirname,
            `../../client/src/pages/learn/${superblock}/`
          );
          const blockPagesDir = join(superblockPagesDir, oldBlock);
          const indexMdPath = join(blockPagesDir, 'index.md');
          const frontMatter = matter.read(indexMdPath);
          const newData = {
            ...frontMatter.data,
            block: newBlock
          };

          await fs.writeFile(
            indexMdPath,
            matter.stringify(frontMatter.content, newData)
          );
          const newBlockClientDir = join(superblockPagesDir, newBlock);
          await fs.rename(blockPagesDir, newBlockClientDir);
          console.log("Updated block's index.md file written.");

          const introJsonPath = path.resolve(
            __dirname,
            `../../client/i18n/locales/english/intro.json`
          );
          const newIntro = await parseJson<IntroJson>(introJsonPath);
          const introBlocks = Object.entries(newIntro[superblock].blocks);
          const blockIntroIndex = introBlocks.findIndex(
            ([block]) => block === oldBlock
          );
          introBlocks[blockIntroIndex] = [
            newBlock,
            { ...introBlocks[blockIntroIndex][1], title: newName }
          ];
          newIntro[superblock].blocks = Object.fromEntries(introBlocks);

          await withTrace(
            fs.writeFile,
            introJsonPath,
            await format(JSON.stringify(newIntro), { parser: 'json' })
          );
          console.log('Updated locale intro.json file written.');
        }
      }
    }
  }
}

void getAllBlocks()
  .then(existingBlocks =>
    prompt([
      {
        name: 'oldBlock',
        message: 'What is the dashed name of block to rename?',
        type: 'input',
        validate: (block: string) => existingBlocks.includes(block)
      },
      {
        name: 'newName',
        message: 'What is the new name?',
        type: 'input',
        default: ({ oldBlock }: RenameBlockArgs) =>
          getBlockStructure(oldBlock).name
      },
      {
        name: 'newBlock',
        message: 'What is the new dashed name (in kebab-case)?',
        validate: (newBlock: string) =>
          validateBlockName(newBlock, existingBlocks)
      }
    ])
  )
  .then(
    async ({ newBlock, newName, oldBlock }: RenameBlockArgs) =>
      await renameBlock({ newBlock, newName, oldBlock })
  )
  .then(() =>
    console.log(
      'All set. Now use pnpm run clean:client in the root and it should be good to go'
    )
  );
