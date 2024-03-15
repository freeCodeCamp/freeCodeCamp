import fs from 'fs';
import path from 'path';
import ObjectID from 'bson-objectid';
import matter from 'gray-matter';
import { parseMDSync } from '../challenge-parser/parser';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { getProjectPath } from './helpers/get-project-info';
import { ChallengeSeed, getStepTemplate } from './helpers/get-step-template';
import {
  isTaskChallenge,
  getPreviousTaskNumber,
  getTaskNumberFromTitle
} from './helpers/task-helpers';

interface Options {
  stepNum: number;
  projectPath?: string;
  challengeSeeds?: Record<string, ChallengeSeed>;
}

const createStepFile = ({
  stepNum,
  projectPath = getProjectPath(),
  challengeSeeds = {}
}: Options): ObjectID => {
  const challengeId = new ObjectID();

  const template = getStepTemplate({
    challengeId,
    challengeSeeds,
    stepNum
  });

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
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

interface InsertOptions {
  stepNum: number;
  stepId: ObjectID;
}

interface InsertTaskOptions {
  indexToInsert: number;
  id: ObjectID;
  title: string;
}

function insertStepIntoMeta({ stepNum, stepId }: InsertOptions): void {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  oldOrder.splice(stepNum - 1, 0, { id: stepId.toString(), title: '' });
  // rename all the files in challengeOrder
  const challengeOrder = oldOrder.map(({ id }, index) => ({
    id,
    title: `Step ${index + 1}`
  }));

  updateMetaData({ ...existingMeta, challengeOrder });
}

function insertTaskIntoMeta({
  indexToInsert,
  id,
  title
}: InsertTaskOptions): void {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  oldOrder.splice(indexToInsert, 0, { id: id.toString(), title });

  const challengeOrder = oldOrder.map((challenge, index) => {
    if (isTaskChallenge(challenge.title)) {
      const previousTaskNumber = getPreviousTaskNumber(index);

      return {
        id: challenge.id,
        title: `Task ${previousTaskNumber + 1}`
      };
    } else {
      return challenge;
    }
  });

  updateMetaData({ ...existingMeta, challengeOrder });
}

function deleteStepFromMeta({ stepNum }: { stepNum: number }): void {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];
  oldOrder.splice(stepNum - 1, 1);
  // rename all the files in challengeOrder
  const challengeOrder = oldOrder.map(({ id }, index) => ({
    id,
    title: `Step ${index + 1}`
  }));

  updateMetaData({ ...existingMeta, challengeOrder });
}

function deleteChallengeFromMeta(challengeIndex: number): void {
  const existingMeta = getMetaData();
  const challengeOrder = [...existingMeta.challengeOrder];
  challengeOrder.splice(challengeIndex, 1);
  updateMetaData({ ...existingMeta, challengeOrder });
}

function updateTaskMeta() {
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

  updateMetaData({ ...existingMeta, challengeOrder });
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

const getChallengeSeeds = (
  challengeFilePath: string
): Record<string, ChallengeSeed> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return parseMDSync(challengeFilePath).challengeFiles;
};

export {
  createStepFile,
  createChallengeFile,
  updateStepTitles,
  updateTaskMeta,
  updateTaskMarkdownFiles,
  getChallengeSeeds,
  insertStepIntoMeta,
  insertTaskIntoMeta,
  deleteChallengeFromMeta,
  deleteStepFromMeta
};
