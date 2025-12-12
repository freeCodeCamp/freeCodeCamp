import fs from 'fs';
import path from 'path';
import { ObjectId } from 'bson';
import matter from 'gray-matter';
import { uniq } from 'lodash';

import { challengeTypes } from '../../shared-dist/config/challenge-types.js';
import { parseCurriculumStructure } from '../../curriculum/src/build-curriculum.js';
import { parseMDSync } from '../challenge-parser/parser/index.js';
import { getMetaData, updateMetaData } from './helpers/project-metadata.js';
import { getProjectPath } from './helpers/get-project-info.js';
import { ChallengeSeed, getStepTemplate } from './helpers/get-step-template.js';
import {
  isTaskChallenge,
  getTaskNumberFromTitle
} from './helpers/task-helpers.js';
import { getTemplate } from './helpers/get-challenge-template.js';

interface Options {
  stepNum: number;
  challengeType?: number;
  projectPath?: string;
  challengeSeeds?: ChallengeSeed[];
  isFirstChallenge?: boolean;
  challengeLang?: string;
}

interface QuizOptions {
  projectPath?: string;
  title: string;
  dashedName: string;
  questionCount: number;
  challengeLang?: string;
}

export async function getAllBlocks() {
  const { fullSuperblockList } = (await parseCurriculumStructure()) as {
    fullSuperblockList: {
      blocks: { dashedName: string }[];
    }[];
  };
  const existingBlocks = fullSuperblockList.flatMap(({ blocks }) =>
    blocks.map(({ dashedName }) => dashedName)
  );

  return uniq(existingBlocks);
}

const createStepFile = ({
  stepNum,
  challengeType,
  projectPath = getProjectPath(),
  challengeSeeds = [],
  isFirstChallenge = false,
  challengeLang
}: Options): ObjectId => {
  const challengeId = new ObjectId();

  const template = getStepTemplate({
    challengeId,
    challengeSeeds,
    stepNum,
    challengeType,
    isFirstChallenge,
    challengeLang
  });

  fs.writeFileSync(`${projectPath}${challengeId.toString()}.md`, template);

  return challengeId;
};

const createChallengeFile = (
  filename: string,
  template: string,
  path = getProjectPath()
): void => {
  fs.writeFileSync(`${path}${filename}.md`, template);
};

const createQuizFile = ({
  projectPath = getProjectPath(),
  title,
  dashedName,
  questionCount,
  challengeLang
}: QuizOptions): ObjectId => {
  const challengeId = new ObjectId();
  const challengeType = challengeTypes.quiz.toString();
  const template = getTemplate(challengeType);

  const quizText = template({
    challengeId,
    challengeType,
    title,
    dashedName,
    questionCount,
    challengeLang
  });

  fs.writeFileSync(`${projectPath}${challengeId.toString()}.md`, quizText);
  return challengeId;
};

const createDialogueFile = ({
  projectPath,
  challengeLang
}: {
  projectPath: string;
  challengeLang: string;
}): ObjectId => {
  const challengeId = new ObjectId();
  const challengeType = challengeTypes.dialogue.toString();
  const template = getTemplate(challengeType);

  const dialogueText = template({
    challengeId,
    challengeType,
    title: "Dialogue 1: I'm Tom",
    dashedName: 'dialogue-1-im-tom',
    challengeLang
  });

  fs.writeFileSync(`${projectPath}${challengeId.toString()}.md`, dialogueText);
  return challengeId;
};

interface InsertOptions {
  stepNum: number;
  stepId: ObjectId;
}

interface InsertChallengeOptions {
  index: number;
  id: ObjectId;
  title: string;
}

async function insertChallengeIntoMeta({
  index,
  id,
  title
}: InsertChallengeOptions) {
  const existingMeta = getMetaData();
  const challengeOrder = [...existingMeta.challengeOrder];

  challengeOrder.splice(index, 0, { id: id.toString(), title });
  await updateMetaData({ ...existingMeta, challengeOrder });
}

async function insertStepIntoMeta({ stepNum, stepId }: InsertOptions) {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];

  oldOrder.splice(stepNum - 1, 0, { id: stepId.toString(), title: '' });
  // rename all the files in challengeOrder
  const challengeOrder = oldOrder.map(({ id }, index) => ({
    id,
    title: `Step ${index + 1}`
  }));

  await updateMetaData({ ...existingMeta, challengeOrder });
}

async function deleteStepFromMeta({ stepNum }: { stepNum: number }) {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];
  oldOrder.splice(stepNum - 1, 1);
  // rename all the files in challengeOrder
  const challengeOrder = oldOrder.map(({ id }, index) => ({
    id,
    title: `Step ${index + 1}`
  }));

  await updateMetaData({ ...existingMeta, challengeOrder });
}

async function deleteChallengeFromMeta(challengeIndex: number) {
  const existingMeta = getMetaData();
  const challengeOrder = [...existingMeta.challengeOrder];
  challengeOrder.splice(challengeIndex, 1);
  await updateMetaData({ ...existingMeta, challengeOrder });
}

async function updateTaskMeta() {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];

  let currentTaskNumber = 1;

  const challengeOrder = oldOrder.map(challenge => {
    if (isTaskChallenge(challenge.title)) {
      return {
        id: challenge.id,
        title: `Task ${currentTaskNumber++}`
      };
    } else {
      return challenge;
    }
  });

  await updateMetaData({ ...existingMeta, challengeOrder });
}

const updateStepTitles = (): void => {
  const meta = getMetaData();

  const fileNames: string[] = [];
  fs.readdirSync(getProjectPath()).forEach(fileName => {
    if (path.extname(fileName).toLowerCase() === '.md') {
      fileNames.push(fileName);
    }
  });

  fileNames.forEach(fileName => {
    const filePath = `${getProjectPath()}${fileName}`;
    const frontMatter = matter.read(filePath);
    const newStepNum =
      meta.challengeOrder.findIndex(({ id }) => id === frontMatter.data.id) + 1;
    const title = `Step ${newStepNum}`;
    const dashedName = `step-${newStepNum}`;
    const newData = {
      ...frontMatter.data,
      title,
      dashedName
    };
    fs.writeFileSync(filePath, matter.stringify(frontMatter.content, newData));
  });
};

const updateTaskMarkdownFiles = (): void => {
  const meta = getMetaData();

  const fileNames: string[] = [];
  fs.readdirSync(getProjectPath()).forEach(fileName => {
    if (path.extname(fileName).toLowerCase() === '.md') {
      fileNames.push(fileName);
    }
  });

  fileNames.forEach(fileName => {
    const filePath = `${getProjectPath()}${fileName}`;
    const frontMatter = matter.read(filePath);

    const challenge = meta.challengeOrder.find(
      ({ id }) => id === frontMatter.data.id
    );

    if (!challenge || !challenge.title) {
      throw new Error(
        `Challenge id from ${fileName} not found in meta.json file.`
      );
    }

    // only update task challenges, dialogue challenges shouldn't change
    if (isTaskChallenge(challenge.title)) {
      const newTaskNumber = getTaskNumberFromTitle(challenge.title);

      const title = `Task ${newTaskNumber}`;
      const dashedName = `task-${newTaskNumber}`;
      const newData = {
        ...frontMatter.data,
        title,
        dashedName
      };
      fs.writeFileSync(
        filePath,
        matter.stringify(frontMatter.content, newData)
      );
    }
  });
};

type Challenge = {
  challengeType: number;
  challengeFiles: ChallengeSeed[];
  lang?: string;
};

const getChallenge = (challengeId: string): Challenge => {
  const challengePath = path.join(getProjectPath(), `${challengeId}.md`);
  const challenge = parseMDSync(challengePath) as Challenge;
  return challenge;
};

const validateBlockName = (
  block: string,
  existingBlocks: string[]
): true | string => {
  if (existingBlocks.includes(block.trim())) {
    return 'a block with this name already exists';
  }
  if (!block.trim().length) {
    return 'please enter a dashed name';
  }
  if (/[^a-z0-9-]/.test(block.trim())) {
    return 'please use alphanumerical characters and kebab case';
  }
  return true;
};

export {
  createStepFile,
  createDialogueFile,
  createChallengeFile,
  updateStepTitles,
  updateTaskMeta,
  updateTaskMarkdownFiles,
  getChallenge,
  insertChallengeIntoMeta,
  insertStepIntoMeta,
  deleteChallengeFromMeta,
  deleteStepFromMeta,
  validateBlockName,
  createQuizFile
};
