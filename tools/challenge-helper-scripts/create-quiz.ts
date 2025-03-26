import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import { SuperBlocks } from '../../shared/config/curriculum';
import { validateBlockName } from './utils';
import { getSuperBlockSubPath } from './fs-utils';
import { Meta } from './helpers/project-metadata';

const helpCategories = [
  'HTML-CSS',
  'JavaScript',
  'Backend Development',
  'Python',
  'English',
  'Odin',
  'Euler',
  'Rosetta'
] as const;

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
  title?: string;
}

async function createProject(
  superBlock: SuperBlocks,
  block: string,
  helpCategory: string,
  title?: string
) {
  if (!title) {
    title = block;
  }
  void updateIntroJson(superBlock, block, title);

  const challengeId = await createFirstChallenge(superBlock, block);
  void createMetaJson(
    superBlock,
    block,
    title,
    helpCategory,
    challengeId
  );
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
    await format(JSON.stringify(newIntro), { parser: 'json' })
  );
}

async function createMetaJson(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  helpCategory: string,
  challengeId: ObjectID
) {
  const metaDir = path.resolve(__dirname, '../../curriculum/challenges/_meta');
  const newMeta = await parseJson<Meta>('./base-meta.json');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
  newMeta.superBlock = superBlock;
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  newMeta.challengeOrder = [{ id: challengeId.toString(), title: title }];
  const newMetaDir = path.resolve(metaDir, block);
  if (!existsSync(newMetaDir)) {
    await withTrace(fs.mkdir, newMetaDir);
  }

  void withTrace(
    fs.writeFile,
    path.resolve(metaDir, `${block}/meta.json`),
    await format(JSON.stringify(newMeta), { parser: 'json' })
  );
}

async function createIntroMD(superBlock: string, block: string, title: string) {
  const introMD = `---
title: Introduction to the ${title}
block: ${block}
superBlock: ${superBlock}
---

## Introduction to the ${title}

This page is for the ${title}.
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

async function createFirstChallenge( //ignore the naming, I only left it as it is to prevent bugs. Let's call this thing createQuiz, shall we?
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
  
  return `---
          id: ${challengeId}
          title: ${title}
          challengeType: 8
          dashedName: ${dashedName}
          ---
          
          # --description--
          
          To pass the quiz, you must correctly answer at least 18 of the 20 questions below.
          
          # --quizzes--
          
          ## --quiz--
          
          ### --question--
          
          #### --text--
          
          Question goes here
          
          #### --distractors--
          
          Distractor 1 goes here 
          
          ---
          
          Distractor 2 goes here 
          
          ---
          
          Distractor 3 goes here 
          
          #### --answer--
          
          answer goes here`;
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
    message: 'What is the dashed name (in kebab-case) for this project?',
    validate: validateBlockName,
    filter: (block: string) => {
      return block.toLowerCase().trim();
    }
  },
  {
    name: 'title',
    default: ({ block }: { block: string }) => block
  },
  {
    name: 'helpCategory',
    message: 'Choose a help category',
    default: 'HTML-CSS',
    type: 'list',
    choices: helpCategories
  }
])
  .then(
    async ({
      superBlock,
      block,
      title,
      helpCategory
    }: CreateProjectArgs) =>
      await createProject(superBlock, block, helpCategory, 42, title)
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
