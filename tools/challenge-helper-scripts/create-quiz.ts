import fs from 'fs/promises';
import path from 'path';
import { select, input } from '@inquirer/prompts';
import { format } from 'prettier';
import { ObjectId } from 'bson';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import {
  createBlockFolder,
  writeBlockStructure
} from '@freecodecamp/curriculum/file-handler';
import { superBlockToFilename } from '@freecodecamp/curriculum/build-curriculum';
import { createQuizFile, getAllBlocks, validateBlockName } from './utils.js';
import { getBaseMeta } from './helpers/get-base-meta.js';
import { updateSimpleSuperblockStructure } from './helpers/create-project.js';
import { parseIntroJson } from './helpers/parse-json.js';
import { withTrace } from './helpers/utils.js';

const helpCategories = [
  'HTML-CSS',
  'JavaScript',
  'Backend Development',
  'Python'
] as const;

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

  const challengeId = new ObjectId();
  await createMetaJson(block, title, helpCategory, challengeId);
  await createQuizChallenge({ challengeId, block, title, questionCount });
  const superblockFilename = (
    superBlockToFilename as Record<SuperBlocks, string>
  )[superBlock];
  void updateSimpleSuperblockStructure(block, { order: 0 }, superblockFilename);
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
  const newIntro = await parseIntroJson(introJsonPath);
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
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;

  newMeta.challengeOrder = [{ id: challengeId.toString(), title: title }];

  await writeBlockStructure(block, newMeta);
}

async function createQuizChallenge({
  block,
  challengeId,
  title,
  questionCount
}: {
  block: string;
  challengeId: ObjectId;
  title: string;
  questionCount: number;
}) {
  createQuizFile({
    challengeId,
    projectPath: await createBlockFolder(block),
    title: title,
    dashedName: block,
    questionCount: questionCount
  });
}
void getAllBlocks().then(async existingBlocks => {
  const superBlock = await select<SuperBlocks>({
    message: 'Which certification does this belong to?',
    default: SuperBlocks.RespWebDesignV9,
    choices: Object.values(SuperBlocks).map(value => ({
      name: value,
      value
    }))
  });

  const block = await input({
    message: 'What is the dashed name (in kebab-case) for this quiz?',
    validate: (block: string) => validateBlockName(block, existingBlocks)
  });

  const transformedBlock = block.toLowerCase().trim();

  const title = await input({
    message: 'What is the new name?',
    default: transformedBlock
  });

  const helpCategory = await select<string>({
    message: 'Choose a help category',
    default: 'HTML-CSS',
    choices: helpCategories.map(value => ({
      name: value,
      value
    }))
  });

  const questionCount = await select<number>({
    message: 'Should this quiz have either ten or twenty questions?',
    default: 20,
    choices: [
      { name: '20 questions', value: 20 },
      { name: '10 questions', value: 10 }
    ]
  });

  await createQuiz(
    superBlock,
    transformedBlock,
    helpCategory,
    questionCount,
    title
  );

  console.log('All set.  Refresh the page to see the changes.');
});
