import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';

import ObjectID from 'bson-objectid';
import { SuperBlocks } from '../../config/certification-settings';
import { blockNameify } from '../../utils/block-nameify';
import { createStepFile } from './utils';
import { getSuperBlockSubPath } from './fs-utils';
import { Meta } from './helpers/project-metadata';

const helpCategories = ['HTML-CSS', 'JavaScript', 'Python'] as const;

type BlockInfo = {
  title: string;
  intro: string[];
};

type SuperBlockInfo = {
  blocks: Record<string, BlockInfo>;
};

type IntroJson = Record<SuperBlocks, SuperBlockInfo>;

interface CreateProjectArgs {
  superBlock: SuperBlocks;
  block: string;
  helpCategory: string;
  order: number;
  title?: string;
}

async function createProject(
  superBlock: SuperBlocks,
  block: string,
  helpCategory: string,
  order: number,
  title?: string
) {
  if (!title) {
    title = blockNameify(block);
  } else if (title !== blockNameify(block)) {
    void updateBlockNames(block, title);
  }
  void updateIntroJson(superBlock, block, title);
  void updateHelpCategoryMap(block, helpCategory);

  const challengeId = await createFirstChallenge(superBlock, block);
  void createMetaJson(superBlock, block, title, order, challengeId);
  // TODO: remove once we stop relying on markdown in the client.
  void createIntroMD(superBlock, block, title);
}

async function updateIntroJson(
  superBlock: SuperBlocks,
  block: string,
  title: string
) {
  const introJsonPath = path.resolve(
    __dirname,
    '../../client/i18n/locales/english/intro.json'
  );
  const newIntro = await parseJson<IntroJson>(introJsonPath);
  newIntro[superBlock].blocks[block] = {
    title,
    intro: ['', '']
  };
  void withTrace(
    fs.writeFile,
    introJsonPath,
    format(JSON.stringify(newIntro), { parser: 'json' })
  );
}

async function updateHelpCategoryMap(block: string, helpCategory: string) {
  const helpCategoryPath = path.resolve(
    __dirname,
    '../../client/utils/help-category-map.json'
  );
  const helpMap = await parseJson<Record<string, string>>(helpCategoryPath);
  helpMap[block] = helpCategory;
  void withTrace(
    fs.writeFile,
    helpCategoryPath,
    format(JSON.stringify(helpMap), { parser: 'json' })
  );
}

async function updateBlockNames(block: string, title: string) {
  const blockNamesPath = path.resolve(
    __dirname,
    '../../utils/preformatted-block-names.json'
  );
  const blockNames = await parseJson<Record<string, string>>(blockNamesPath);
  blockNames[block] = title;
  void withTrace(
    fs.writeFile,
    blockNamesPath,
    format(JSON.stringify(blockNames), { parser: 'json' })
  );
}

async function createMetaJson(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  order: number,
  challengeId: ObjectID
) {
  const metaDir = path.resolve(__dirname, '../../curriculum/challenges/_meta');
  const newMeta = await parseJson<Meta>('./base-meta.json');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.order = order;
  newMeta.superOrder = Object.values(SuperBlocks).indexOf(superBlock) + 1;
  newMeta.superBlock = superBlock;
  newMeta.challengeOrder = [[challengeId.toString(), 'Step 1']];
  const newMetaDir = path.resolve(metaDir, block);
  if (!existsSync(newMetaDir)) {
    await withTrace(fs.mkdir, newMetaDir);
  }

  void withTrace(
    fs.writeFile,
    path.resolve(metaDir, `${block}/meta.json`),
    format(JSON.stringify(newMeta), { parser: 'json' })
  );
}

async function createIntroMD(superBlock: string, block: string, title: string) {
  const introMD = `---
title: Introduction to the ${title}
block: ${block}
superBlock: Responsive Web Design
isBeta: true
---

## Introduction to the ${title}

This is a test for the new project-based curriculum.
`;
  const dirPath = path.resolve(
    __dirname,
    `../../client/src/pages/learn/${superBlock}/${block}/`
  );
  const filePath = path.resolve(dirPath, 'index.md');
  if (!existsSync(dirPath)) {
    await withTrace(fs.mkdir, dirPath);
  }
  void withTrace(fs.writeFile, filePath, introMD, { encoding: 'utf8' });
}

async function createFirstChallenge(
  superBlock: SuperBlocks,
  block: string
): Promise<ObjectID> {
  const superBlockSubPath = getSuperBlockSubPath(superBlock);
  const newChallengeDir = path.resolve(
    __dirname,
    `../../curriculum/challenges/english/${superBlockSubPath}/${block}`
  );
  if (!existsSync(newChallengeDir)) {
    await withTrace(fs.mkdir, newChallengeDir);
  }
  // TODO: would be nice if the extension made sense for the challenge, but, at
  // least until react I think they're all going to be html anyway.
  const challengeSeeds = {
    indexhtml: {
      contents: '',
      ext: 'html',
      editableRegionBoundaries: [0, 2]
    }
  };
  // including trailing slash for compatibility with createStepFile
  return createStepFile({
    projectPath: newChallengeDir + '/',
    stepNum: 1,
    challengeSeeds
  });
}

function parseJson<JsonSchema>(filePath: string) {
  return withTrace(fs.readFile, filePath, 'utf8').then(
    // unfortunately, withTrace does not correctly infer that the third argument
    // is a string, so it uses the (path, options?) overload and we have to cast
    // result to string.
    result => JSON.parse(result as string) as JsonSchema
  );
}

// fs Promise functions return errors, but no stack trace.  This adds back in
// the stack trace.
function withTrace<Args extends unknown[], Result>(
  fn: (...x: Args) => Promise<Result>,
  ...args: Args
): Promise<Result> {
  return fn(...args).catch((reason: Error) => {
    throw Error(reason.message);
  });
}

void prompt([
  {
    name: 'superBlock',
    message: 'Which certification does this belong to?',
    default: SuperBlocks.RespWebDesign,
    type: 'list',
    choices: Object.values(SuperBlocks)
  },
  {
    name: 'block',
    message: 'What is the short name (in kebab-case) for this project?',
    validate: (block: string) => {
      if (!block.length) {
        return 'please enter a short name';
      }
      if (/[^a-z0-9-]/.test(block)) {
        return 'please use alphanumerical characters and kebab case';
      }
      return true;
    },
    filter: (block: string) => {
      return block.toLowerCase();
    }
  },
  {
    name: 'title',
    default: ({ block }: { block: string }) => blockNameify(block)
  },
  {
    name: 'helpCategory',
    message: 'Choose a help category',
    default: 'HTML-CSS',
    type: 'list',
    choices: helpCategories
  },
  {
    name: 'order',
    message: 'Which position does this appear in the certificate?',
    default: 42,
    validate: (order: string) => {
      return parseInt(order, 10) > 0
        ? true
        : 'Order must be an number greater than zero.';
    },
    filter: (order: string) => {
      return parseInt(order, 10);
    }
  }
])
  .then(
    async ({
      superBlock,
      block,
      title,
      helpCategory,
      order
    }: CreateProjectArgs) =>
      await createProject(superBlock, block, helpCategory, order, title)
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
