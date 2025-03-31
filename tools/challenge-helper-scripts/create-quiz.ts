import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';
import { SuperBlocks } from '../../shared/config/curriculum';
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
  helpCategory: string;
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
  
  introContent[superBlock].blocks[dashedName] = {
    title,
    intro: ['', '']
  };

  await fs.writeFile(
    introJsonPath,
    await format(JSON.stringify(introContent), { parser: 'json' })
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
    isUpcomingChange: true,
    challengeOrder: [{ id: challengeId, title }]
  };

  const quizMetaDir = path.join(metaDir, dashedName);
  await fs.mkdir(quizMetaDir, { recursive: true });
  
  await fs.writeFile(
    path.join(quizMetaDir, 'meta.json'),
    await format(JSON.stringify(quizMeta), { parser: 'json' })
  );
}

async function createQuizIndexMD(
  superBlock: string,
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
        name: 'superBlock',
        message: 'What superBlock does this belong to?',
        type: 'list',
        choices: Object.values(SuperBlocks)
      },
      {
        name: 'quizName',
        message: 'What is the quiz name? (e.g. CSS Basics)',
        validate: (input: string) => !!input.trim() || 'Required field'
      },
      {
        name: 'dashedName',
        message: 'What is the dashed name? (must start with "quiz-")',
        validate: (input: string) => 
          input.startsWith('quiz-') || 'Must start with "quiz-"'
      },
      {
        name: 'helpCategory',
        message: 'Select help category:',
        type: 'list',
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

Run "pnpm run clean:client" to see your changes.
    `);
  } catch (error) {
    console.error('Error creating quiz:', error);
    process.exit(1);
  }
}

void createNewQuiz();
