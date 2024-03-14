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
  getTaskNumber
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

const createTaskFile = (
  id: string,
  template: string,
  path = getProjectPath()
): void => {
  fs.writeFileSync(`${path}${id}.md`, template);
  console.log(`Finished creating new task file: '${id}.md'`);
};

const createChallengeFile = (
  title: string,
  template: string,
  path = getProjectPath()
): void => {
  fs.writeFileSync(`${path}${title}.md`, template);
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

  console.log(
    `Finished inserting new task and updating titles in 'meta.json'.`
  );
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

const updateTaskTitles = (): void => {
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

    // need to update dashedName and title
    // find in the meta, where the id === challenge id
    const challenge = meta.challengeOrder.find(
      ({ id }) => id === frontMatter.data.id
    );

    if (!challenge || !challenge.title) {
      throw new Error(
        `Challenge id from ${fileName} not found in meta.json file.`
      );
    }

    // if dialogue challenge -> don't do anything, you can only insert task
    // challenges, so dialogue challenge files shouldn't ever change
    if (isTaskChallenge(challenge.title)) {
      const newTaskNumber = getTaskNumber(challenge?.title);

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

  console.log(
    `Finished updating all task markdown files with new 'title' and 'dashedName'.`
  );
};

const getChallengeSeeds = (
  challengeFilePath: string
): Record<string, ChallengeSeed> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return parseMDSync(challengeFilePath).challengeFiles;
};

export {
  createStepFile,
  createTaskFile,
  createChallengeFile,
  updateStepTitles,
  updateTaskTitles,
  getChallengeSeeds,
  insertStepIntoMeta,
  insertTaskIntoMeta,
  deleteStepFromMeta
};
