import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import { ObjectId } from 'bson';

import { SuperBlocks } from '../../shared-dist/config/curriculum.js';
import {
  createBlockFolder,
  writeBlockStructure
} from '../../curriculum/src/file-handler.js';
import { superBlockToFilename } from '../../curriculum/src/build-curriculum.js';
import { createQuizFile, getAllBlocks, validateBlockName } from './utils.js';
import { getBaseMeta } from './helpers/get-base-meta.js';
import { createIntroMD } from './helpers/create-intro.js';
import { updateSimpleSuperblockStructure } from './helpers/create-project.js';

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
  await createMetaJson(block, title, helpCategory, challengeId);
  const superblockFilename = (
    superBlockToFilename as Record<SuperBlocks, string>
  )[superBlock];
  void updateSimpleSuperblockStructure(block, { order: 0 }, superblockFilename);
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
  block: string,
  title: string,
  helpCategory: string,
  challengeId: ObjectId
) {
  const newMeta = getBaseMeta('Quiz');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;

  newMeta.challengeOrder = [{ id: challengeId.toString(), title: title }];

  await writeBlockStructure(block, newMeta);
}

async function createQuizChallenge(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  questionCount: number
): Promise<ObjectId> {
  return createQuizFile({
    projectPath: await createBlockFolder(block),
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

void getAllBlocks()
  .then(existingBlocks =>
    prompt([
      {
        name: 'superBlock',
        message: 'Which certification does this belong to?',
        default: SuperBlocks.FullStackDeveloper,
        type: 'list',
        choices: Object.values(SuperBlocks)
      },
      {
        name: 'block',
        message: 'What is the dashed name (in kebab-case) for this quiz?',
        validate: (block: string) => validateBlockName(block, existingBlocks),
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
      },
      {
        name: 'questionCount',
        message: 'Should this quiz have either ten or twenty questions?',
        default: 20,
        type: 'list',
        choices: [20, 10]
      }
    ])
  )
  .then(
    async ({
      superBlock,
      block,
      title,
      helpCategory,
      questionCount
    }: CreateQuizArgs) =>
      await createQuiz(superBlock, block, helpCategory, questionCount, title)
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
