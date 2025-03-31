import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import { SuperBlocks } from '../../shared/config/curriculum';
import { createStepFile, validateBlockName } from './utils';
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
  order?: number;
  title?: string;
  isQuiz?: boolean;
}

async function createProject({
  superBlock,
  block,
  helpCategory,
  order,
  title,
  isQuiz = false
}: CreateProjectArgs) {
  if (!title) {
    title = block;
  }
  if (isQuiz) {
    title = `${title} Quiz`;
  }

  void updateIntroJson(superBlock, block, title, isQuiz);

  const challengeId = await createFirstChallenge(superBlock, block, isQuiz);
  void createMetaJson(
    superBlock,
    block,
    title,
    helpCategory,
    order,
    challengeId,
    isQuiz
  );
  void createIntroMD(superBlock, block, title, isQuiz);
}

async function updateIntroJson(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  isQuiz: boolean
) {
  const introJsonPath = path.resolve(
    __dirname,
    '../../client/i18n/locales/english/intro.json'
  );
  const newIntro = await parseJson<IntroJson>(introJsonPath);
  
  if (isQuiz) {
    // For quizzes, we add them directly under the certification
    newIntro[superBlock].blocks[block] = {
      title,
      intro: ['', '']
    };
  } else {
    // Original project behavior
    newIntro[superBlock].blocks[block] = {
      title,
      intro: ['', '']
    };
  }

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
  order: number | undefined,
  challengeId: ObjectID,
  isQuiz: boolean
) {
  const metaDir = path.resolve(__dirname, '../../curriculum/challenges/_meta');
  const newMeta = await parseJson<Meta>('./base-meta.json');
  
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
  if (!isQuiz && order) {
    newMeta.order = order;
  }
  newMeta.superBlock = superBlock;
  newMeta.blockType = isQuiz ? 'quiz' : 'project';
  newMeta.blockLayout = 'link';
  newMeta.isUpcomingChange = true;
  newMeta.challengeOrder = [{ id: challengeId.toString(), title: isQuiz ? title : 'Step 1' }];

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

async function createIntroMD(
  superBlock: string,
  block: string,
  title: string,
  isQuiz: boolean
) {
  const introMD = `---
title: Introduction to the ${title}
block: ${block}
superBlock: ${superBlock}
---

## Introduction to the ${title}

${isQuiz ? 'This is a quiz to test your knowledge.' : 'This is a test for the new project-based curriculum.'}
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
  block: string,
  isQuiz: boolean
): Promise<ObjectID> {
  const superBlockSubPath = getSuperBlockSubPath(superBlock);
  const newChallengeDir = path.resolve(
    __dirname,
    `../../curriculum/challenges/english/${superBlockSubPath}/${block}`
  );
  if (!existsSync(newChallengeDir)) {
    await withTrace(fs.mkdir, newChallengeDir);
  }

  if (isQuiz) {
    const quizContent = `---
id: {{id}}
title: ${block.replace('quiz-', '')} Quiz
challengeType: 8
dashedName: ${block}
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

    const challengeId = new ObjectID();
    const filePath = path.resolve(newChallengeDir, `${challengeId.toString()}.md`);
    await withTrace(fs.writeFile, filePath, quizContent, { encoding: 'utf8' });
    return challengeId;
  } else {
    // Original project challenge creation
    const challengeSeeds = {
      indexhtml: {
        contents: '',
        ext: 'html',
        editableRegionBoundaries: [0, 2]
      }
    };
    return createStepFile({
      projectPath: newChallengeDir + '/',
      stepNum: 1,
      challengeType: 0,
      challengeSeeds,
      isFirstChallenge: true
    });
  }
}

function parseJson<JsonSchema>(filePath: string) {
  return withTrace(fs.readFile, filePath, 'utf8').then(
    result => JSON.parse(result as string) as JsonSchema
  );
}

function withTrace<Args extends unknown[], Result>(
  fn: (...x: Args) => Promise<Result>,
  ...args: Args
): Promise<Result> {
  return fn(...args).catch((reason: Error) => {
    throw Error(reason.message);
  });
}

async function main() {
  const { creationType } = await prompt([
    {
      name: 'creationType',
      message: 'What do you want to create?',
      type: 'list',
      choices: [
        { name: 'Project', value: 'project' },
        { name: 'Quiz', value: 'quiz' }
      ]
    }
  ]);

  const isQuiz = creationType === 'quiz';

  const questions = [
    {
      name: 'superBlock',
      message: 'Which certification does this belong to?',
      default: SuperBlocks.RespWebDesign,
      type: 'list',
      choices: Object.values(SuperBlocks)
    },
    {
      name: 'block',
      message: `What is the dashed name (in kebab-case) for this ${isQuiz ? 'quiz' : 'project'}?`,
      validate: (input: string) => {
        if (!input) return 'Please enter a name';
        if (isQuiz && !input.startsWith('quiz-')) {
          return 'Quiz names must start with "quiz-"';
        }
        return validateBlockName(input);
      },
      filter: (block: string) => {
        return block.toLowerCase().trim();
      }
    },
    {
      name: 'title',
      default: ({ block }: { block: string }) => 
        isQuiz ? block.replace('quiz-', '') : block
    },
    {
      name: 'helpCategory',
      message: 'Choose a help category',
      default: 'HTML-CSS',
      type: 'list',
      choices: helpCategories
    }
  ];

  if (!isQuiz) {
    questions.push({
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
    });
  }

  const answers = await prompt(questions);

  await createProject({
    superBlock: answers.superBlock,
    block: answers.block,
    title: answers.title,
    helpCategory: answers.helpCategory,
    order: answers.order,
    isQuiz
  });

  console.log(
    'All set. Now use pnpm run clean:client in the root and it should be good to go.'
  );
}

void main();
