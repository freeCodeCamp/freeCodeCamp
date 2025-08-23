import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { input, select } from '@inquirer/prompts';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import {
  SuperBlocks,
  superBlockToFolderMap
} from '../../shared/config/curriculum';
import { createQuizFile, validateBlockName } from './utils';
import { getBaseMeta } from './helpers/get-base-meta';
import { createIntroMD } from './helpers/create-intro';

const helpCategories = [
  'HTML-CSS',
  'JavaScript',
  'Backend Development',
  'Python'
] as const;

type BlockInfo = {
  title: string;
  intro: string[];
};

type SuperBlockInfo = {
  blocks: Record<string, BlockInfo>;
};

type IntroJson = Record<SuperBlocks, SuperBlockInfo>;

interface CreateQuizArgs {
  superBlock: SuperBlocks;
  block: string;
  helpCategory: string;
  title?: string;
  questionCount: number;
}

async function createQuiz(
  superBlock: SuperBlocks,
  block: string,
  helpCategory: string,
  questionCount: number,
  title?: string
) {
  if (!title) {
    title = block;
  }
  await updateIntroJson(superBlock, block, title);

  const challengeId = await createQuizChallenge(
    superBlock,
    block,
    title,
    questionCount
  );
  await createMetaJson(superBlock, block, title, helpCategory, challengeId);
  // TODO: remove once we stop relying on markdown in the client.
  await createIntroMD(superBlock, block, title);
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
  const newMeta = getBaseMeta('Quiz');
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

async function createQuizChallenge(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  questionCount: number
): Promise<ObjectID> {
  const superBlockSubPath = superBlockToFolderMap[superBlock];
  const newChallengeDir = path.resolve(
    __dirname,
    `../../curriculum/challenges/english/${superBlockSubPath}/${block}`
  );
  if (!existsSync(newChallengeDir)) {
    await withTrace(fs.mkdir, newChallengeDir);
  }
  return createQuizFile({
    projectPath: newChallengeDir + '/',
    title: title,
    dashedName: block,
    questionCount: questionCount
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

void (async () => {
  try {
    const answers: CreateQuizArgs = {
      superBlock: await select({
        message: 'Which certification does this belong to?',
        choices: Object.values(SuperBlocks),
        default: SuperBlocks.FullStackDeveloper
      }),

      block: await input({
        message: 'What is the dashed name (in kebab-case) for this quiz?',
        validate: validateBlockName,
        transformer: (b: string) => b.toLowerCase().trim()
      }),

      title: undefined, // will set after block
      helpCategory: await select({
        message: 'Choose a help category',
        choices: helpCategories,
        default: 'HTML-CSS'
      }),

      questionCount: 0 // temporary, will set below
    };

    // Set title after block is known
    answers.title = await input({
      message: 'What is the title of the quiz?',
      default: answers.block
    });

    // Prompt question count as string, convert to number
    const questionCountStr = await select({
      message: 'Should this quiz have either ten or twenty questions?',
      choices: ['20', '10'],
      default: '20'
    });
    answers.questionCount = Number(questionCountStr);

    await createQuiz(
      answers.superBlock,
      answers.block,
      answers.helpCategory,
      answers.questionCount,
      answers.title
    );

    console.log(
      'All set. Now use pnpm run clean:client in the root and it should be good to go.'
    );
  } catch (err) {
    console.error('Error creating quiz:', err);
  }
})();
