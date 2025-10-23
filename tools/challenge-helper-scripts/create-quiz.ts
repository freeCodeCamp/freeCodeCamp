import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import ObjectID from 'bson-objectid';

import { SuperBlocks } from '../../shared/config/curriculum';
import {
  getContentConfig,
  writeBlockStructure
} from '../../curriculum/src/file-handler';
import { superBlockToFilename } from '../../curriculum/src/build-curriculum';
import { createQuizFile, getAllBlocks, validateBlockName } from './utils';
import { getBaseMeta } from './helpers/get-base-meta';
import { createIntroMD } from './helpers/create-intro';
import { updateSimpleSuperblockStructure } from './helpers/create-project';
import { updateIntroJson } from './helpers/update-intro';

const helpCategories = [
  'HTML-CSS',
  'JavaScript',
  'Backend Development',
  'Python'
] as const;

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
  await updateIntroJson(block, title);

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

async function createMetaJson(
  block: string,
  title: string,
  helpCategory: string,
  challengeId: ObjectID
) {
  const newMeta = getBaseMeta('Quiz');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  newMeta.challengeOrder = [{ id: challengeId.toString(), title: title }];

  await writeBlockStructure(block, newMeta);
}

async function createQuizChallenge(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  questionCount: number
): Promise<ObjectID> {
  const { blockContentDir } = getContentConfig('english') as {
    blockContentDir: string;
  };

  const newChallengeDir = path.resolve(blockContentDir, block);
  await fs.mkdir(newChallengeDir, { recursive: true });

  return createQuizFile({
    projectPath: newChallengeDir + '/',
    title: title,
    dashedName: block,
    questionCount: questionCount
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
