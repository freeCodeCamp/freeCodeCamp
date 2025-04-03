import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';
import { SuperBlocks } from '../../shared/config/superblocks'; // Fixed import
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

interface QuizAnswers {
  superBlock: SuperBlocks;
  quizName: string;
  dashedName: string;
  helpCategory: typeof helpCategories[number];
}

async function createQuizIntroJson(
  superBlock: SuperBlocks,
  dashedName: string,
  title: string
) {
  const introJsonPath = path.resolve(
    __dirname,
    '../../client/i18n/locales/english/intro.json'
  );
  const introContent = JSON.parse(await fs.readFile(introJsonPath, 'utf-8'));
  
  // Handle new superBlocks
  if (!introContent[superBlock]) {
    introContent[superBlock] = { blocks: {} };
  }

  introContent[superBlock].blocks[dashedName] = {
    title,
    intro: ['', '']
  };

  await fs.writeFile(
    introJsonPath,
    await format(JSON.stringify(introContent, null, 2), { parser: 'json' })
  );
}

async function createQuizMeta(
  superBlock: SuperBlocks,
  dashedName: string,
  title: string,
  helpCategory: string,
  challengeId: string
) {
  const metaDir = path.resolve(__dirname, '../../curriculum/challenges/_meta');
  const baseMeta = await fs.readFile(
    path.resolve(__dirname, './base-meta.json'),
    'utf-8'
  );
  const metaContent: Meta = JSON.parse(baseMeta);

  const quizMeta = {
    ...metaContent,
    name: title,
    dashedName,
    helpCategory,
    superBlock,
    blockType: 'quiz',
    blockLayout: 'link',
    isUpcomingChange: false, // Production-ready
    challengeOrder: [{ id: challengeId, title }]
  };

  const quizMetaDir = path.join(metaDir, dashedName);
  await fs.mkdir(quizMetaDir, { recursive: true });
  
  await fs.writeFile(
    path.join(quizMetaDir, 'meta.json'),
    await format(JSON.stringify(quizMeta, null, 2), { parser: 'json' })
  );
}

async function createQuizIndexMD(
  superBlock: SuperBlocks,
  dashedName: string,
  title: string
) {
  const content = `---
title: Introduction to the ${title}
block: ${dashedName}
superBlock: ${superBlock}
---

## Introduction to the ${title}

This page contains the quiz for ${title}.`;

  const dirPath = path.resolve(
    __dirname,
    `../../client/src/pages/learn/${superBlock}/${dashedName}`
  );
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(path.join(dirPath, 'index.md'), content);
}

async function createQuizChallengeFile(
  superBlock: SuperBlocks,
  dashedName: string,
  challengeId: string,
  title: string
) {
  const content = `---
id: ${challengeId}
title: ${title}
challengeType: 8
dashedName: ${dashedName}
---

# --description--

To pass this quiz, you must correctly answer at least 80% of the questions.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is the correct syntax for creating a function in JavaScript?

#### --distractors--

function = myFunction() {}

---

function:myFunction() {}

---

func myFunction() {}

#### --answer--

function myFunction() {}`;

  const superBlockSubPath = getSuperBlockSubPath(superBlock);
  const challengeDir = path.resolve(
    __dirname,
    `../../curriculum/challenges/english/${superBlockSubPath}/${dashedName}`
  );
  await fs.mkdir(challengeDir, { recursive: true });
  await fs.writeFile(path.join(challengeDir, `${challengeId}.md`), content);
}

async function createNewQuiz() {
  try {
    const {
      superBlock,
      quizName,
      dashedName,
      helpCategory
    } = await prompt<QuizAnswers>([
      {
        type: 'list',
        name: 'superBlock',
        message: 'Select the certification superBlock:',
        choices: Object.values(SuperBlocks).filter(
          sb => sb !== SuperBlocks.Upcoming
        )
      },
      {
        name: 'quizName',
        message: 'Enter the quiz name (e.g. "CSS Basics"):',
        validate: (input: string) => 
          input.trim().length > 0 || 'Please enter a quiz name'
      },
      {
        name: 'dashedName',
        message: 'Enter the dashed name (must start with "quiz-"):',
        validate: (input: string) => 
          input.startsWith('quiz-') || 'Must start with "quiz-"'
      },
      {
        type: 'list',
        name: 'helpCategory',
        message: 'Select the help category:',
        choices: helpCategories
      }
    ]);

    const title = `${quizName} Quiz`;
    const challengeId = new ObjectID().toString();

    await Promise.all([
      createQuizIntroJson(superBlock, dashedName, title),
      createQuizMeta(superBlock, dashedName, title, helpCategory, challengeId),
      createQuizIndexMD(superBlock, dashedName, title),
      createQuizChallengeFile(superBlock, dashedName, challengeId, title)
    ]);

    console.log(`
✅ Quiz created successfully!
Run "pnpm run clean:client" to see your changes.
Files created:
- curriculum/challenges/english/${getSuperBlockSubPath(superBlock)}/${dashedName}/${challengeId}.md
- client/src/pages/learn/${superBlock}/${dashedName}/index.md
- curriculum/challenges/_meta/${dashedName}/meta.json
`);
  } catch (error) {
    console.error('❌ Error creating quiz:');
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

void createNewQuiz();
