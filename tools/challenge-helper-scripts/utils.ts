import fs from 'fs';
import path from 'path';
import ObjectID from 'bson-objectid';
import * as matter from 'gray-matter';
import { parseMDSync } from '../challenge-parser/parser';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { getProjectPath } from './helpers/get-project-info';
import { ChallengeSeed, getStepTemplate } from './helpers/get-step-template';
import { padWithLeadingZeros } from './helpers/pad-with-leading-zeros';

interface Options {
  projectPath: string;
  stepNum: number;
  challengeSeeds?: Record<string, ChallengeSeed>;
  isExtraStep?: boolean;
}

const createStepFile = ({
  projectPath,
  stepNum,
  challengeSeeds = {},
  isExtraStep = false
}: Options) => {
  const challengeId = new ObjectID();

  const template = getStepTemplate({
    challengeId,
    challengeSeeds,
    isExtraStep,
    stepNum
  });

  fs.writeFileSync(`${projectPath}${challengeId.toString()}.md`, template);

  return challengeId;
};

interface InsertOptions {
  stepNum: number;
  stepId: string;
}

function insertStepIntoMeta({ stepNum, stepId }: InsertOptions) {
  const existingMeta = getMetaData();
  const oldOrder = [...existingMeta.challengeOrder];
  oldOrder.splice(stepNum - 1, 0, [stepId]);
  // rename all the files in challengeOrder
  const challengeOrder = oldOrder.map(([id], index) => [
    id,
    `Step ${index + 1}`
  ]);

  updateMetaData({ ...existingMeta, challengeOrder });
}

const reorderSteps = () => {
  const projectPath = getProjectPath();

  const parsedData = getMetaData();

  let foundFinal = false;
  const filesArr = [];
  fs.readdirSync(projectPath).forEach(fileName => {
    if (path.extname(fileName).toLowerCase() === '.md') {
      if (!fileName.endsWith('final.md')) {
        filesArr.push(fileName);
      } else {
        foundFinal = true;
      }
    }
  });

  if (foundFinal) {
    filesArr.push('final.md');
  }

  const filesToReorder = filesArr.map((fileName, i) => {
    const newStepNum = i + 1;
    const newFileName =
      fileName !== 'final.md'
        ? `step-${padWithLeadingZeros(newStepNum)}.md`
        : 'final.md';
    return {
      oldFileName: fileName,
      newFileName,
      newStepNum
    };
  });

  const challengeOrder: string[][] = [];

  filesToReorder.forEach(({ oldFileName, newFileName, newStepNum }) => {
    fs.renameSync(
      `${projectPath}${oldFileName}`,
      `${projectPath}${newFileName}.tmp`
    );
    const filePath = `${projectPath}${newFileName}.tmp`;
    const frontMatter = matter.read(filePath);
    const challengeID =
      (frontMatter.data.id as string) || new ObjectID().toString();
    const title =
      newFileName === 'final.md' ? 'Final Prototype' : `Step ${newStepNum}`;
    const dashedName = `step-${newStepNum}`;
    challengeOrder.push(['' + challengeID, title]);
    const newData = {
      ...frontMatter.data,
      id: challengeID,
      title,
      dashedName
    };
    fs.writeFileSync(filePath, matter.stringify(frontMatter.content, newData));
  });

  filesToReorder.forEach(({ newFileName }) => {
    fs.renameSync(
      `${projectPath}${newFileName}.tmp`,
      `${projectPath}${newFileName}`
    );
  });

  updateMetaData({ ...parsedData, challengeOrder });
};

const getChallengeSeeds = (
  challengeFilePath: string
): Record<string, ChallengeSeed> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return parseMDSync(challengeFilePath).challengeFiles;
};

export { createStepFile, reorderSteps, getChallengeSeeds, insertStepIntoMeta };
