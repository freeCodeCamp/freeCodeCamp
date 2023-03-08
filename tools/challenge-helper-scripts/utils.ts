import fs from 'fs';
import path from 'path';
import ObjectID from 'bson-objectid';
import * as matter from 'gray-matter';
import { parseMDSync } from '../challenge-parser/parser';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { getProjectPath } from './helpers/get-project-info';
import { ChallengeSeed, getStepTemplate } from './helpers/get-step-template';

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

  fs.writeFileSync(`${projectPath}${challengeId.toString()}.md`, template);

  return challengeId;
};

interface InsertOptions {
  stepNum: number;
  stepId: ObjectID;
}

function insertStepIntoMeta({ stepNum, stepId }: InsertOptions): void {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];
  oldOrder.splice(stepNum - 1, 0, [stepId.toString()]);
  // rename all the files in challengeOrder
  const challengeOrder = oldOrder.map(([id], index) => [
    id,
    `Step ${index + 1}`
  ]);

  updateMetaData({ ...existingMeta, challengeOrder });
}

function deleteStepFromMeta({ stepNum }: { stepNum: number }): void {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];
  oldOrder.splice(stepNum - 1, 1);
  // rename all the files in challengeOrder
  const challengeOrder = oldOrder.map(([id], index) => [
    id,
    `Step ${index + 1}`
  ]);

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
      meta.challengeOrder.findIndex(elem => elem[0] === frontMatter.data.id) +
      1;
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

const getChallengeSeeds = (
  challengeFilePath: string
): Record<string, ChallengeSeed> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return parseMDSync(challengeFilePath).challengeFiles;
};

export {
  createStepFile,
  updateStepTitles,
  getChallengeSeeds,
  insertStepIntoMeta,
  deleteStepFromMeta
};
