import fs from 'fs/promises';
import path, { join } from 'path';
import { input } from '@inquirer/prompts';
import { format } from 'prettier';

import { IntroJson, parseIntroJson } from './helpers/parse-json';
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

interface RenameBlockArgs {
  newBlock: string;
  oldBlock: string;
  newName: string;
}

const introJsonPath = path.resolve(
  __dirname,
  '../../client/i18n/locales/english/intro.json'
);

function getBlockTitleFromIntro(intro: IntroJson, block: string) {
  for (const superBlockInfo of Object.values(intro)) {
    const blockInfo = superBlockInfo.blocks[block];
    if (blockInfo?.title) return blockInfo.title;
  }
}

function renameBlockInSimpleStructure(
  blocks: string[] | undefined,
  oldBlock: string,
  newBlock: string
) {
  if (!blocks) return false;
  const blockIndex = blocks.findIndex(block => block === oldBlock);
  if (blockIndex === -1) return false;
  blocks[blockIndex] = newBlock;
  return true;
}

function renameBlockInChapterStructure(
  chapters:
    | {
        modules: {
          blocks: string[];
        }[];
      }[]
    | undefined,
  oldBlock: string,
  newBlock: string
) {
  if (!chapters) return false;
  let updated = false;
  for (const chapter of chapters) {
    for (const module of chapter.modules) {
      const blockIndex = module.blocks.findIndex(block => block === oldBlock);
      if (blockIndex !== -1) {
        module.blocks[blockIndex] = newBlock;
        updated = true;
      }
    }
  }
  return updated;
}

function renameBlockInIntro(
  intro: IntroJson,
  superblock: string,
  oldBlock: string,
  newBlock: string,
  newName: string
) {
  const superBlockIntro = intro[superblock];
  if (!superBlockIntro) return false;

  const introBlocks = Object.entries(superBlockIntro.blocks);
  const blockIntroIndex = introBlocks.findIndex(
    ([block]) => block === oldBlock
  );
  if (blockIntroIndex === -1) return false;

  const currentBlockInfo = introBlocks[blockIntroIndex]?.[1];
  if (!currentBlockInfo) return false;

  introBlocks[blockIntroIndex] = [
    newBlock,
    { ...currentBlockInfo, title: newName }
  ];
  superBlockIntro.blocks = Object.fromEntries(introBlocks);

  return true;
}

async function renameBlock({ newBlock, newName, oldBlock }: RenameBlockArgs) {
  const blockStructure = getBlockStructure(oldBlock);
  const blockStructurePath = getBlockStructurePath(oldBlock);
  blockStructure.dashedName = newBlock;
  await writeBlockStructure(newBlock, blockStructure);
  await fs.rm(blockStructurePath);
  console.log('New block structure .json written.');

  const { blockContentDir } = getContentConfig('english');
  const oldBlockContentDir = join(blockContentDir, oldBlock);
  const newBlockContentDir = join(blockContentDir, newBlock);
  await fs.rename(oldBlockContentDir, newBlockContentDir);
  console.log('Block challenges moved to new directory.');

  const newIntro = await parseIntroJson(introJsonPath);
  let didUpdateIntro = false;

  const { superblocks } = getCurriculumStructure();
  console.log('Updating superblocks containing renamed block.');
  for (const superblock of superblocks) {
    const superblockStructure = getSuperblockStructure(superblock);
    const didUpdateSuperblock =
      renameBlockInSimpleStructure(
        superblockStructure.blocks,
        oldBlock,
        newBlock
      ) ||
      renameBlockInChapterStructure(
        superblockStructure.chapters,
        oldBlock,
        newBlock
      );

    if (didUpdateSuperblock) {
      await writeSuperblockStructure(superblock, superblockStructure);
      console.log(`Updated superblock .json file written for ${superblock}.`);

      didUpdateIntro =
        renameBlockInIntro(newIntro, superblock, oldBlock, newBlock, newName) ||
        didUpdateIntro;
    }
  }

  if (didUpdateIntro) {
    await withTrace(
      fs.writeFile,
      introJsonPath,
      await format(JSON.stringify(newIntro), { parser: 'json' })
    );
    console.log('Updated locale intro.json file written.');
  }
}

void getAllBlocks().then(async existingBlocks => {
  const intro = await parseIntroJson(introJsonPath);

  const oldBlock = await input({
    message: 'What is the dashed name of block to rename?',
    validate: (block: string) =>
      existingBlocks.includes(block) || 'Block not found in existing blocks.'
  });

  const newName = await input({
    message: 'What is the new name?',
    default: getBlockTitleFromIntro(intro, oldBlock) ?? oldBlock
  });

  const newBlock = await input({
    message: 'What is the new dashed name (in kebab-case)?',
    validate: (block: string) => validateBlockName(block, existingBlocks)
  });

  await renameBlock({ newBlock, newName, oldBlock });

  console.log('All set.  Refresh the page to see the changes.');
});
