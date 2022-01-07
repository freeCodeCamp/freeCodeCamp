import fs from 'fs';
import path from 'path';
import ObjectID from 'bson-objectid';
import * as matter from 'gray-matter';
import { getMetaData } from '../challenge-helper-scripts/helpers/get-project-path-metadata';
import { parseMDSync } from '../challenge-parser/parser';
import { getProjectMetaPath } from './helpers/get-project-meta-path';
import { getProjectPath } from './helpers/get-project-path';
import { getStepTemplate } from './helpers/get-step-template';
import { padWithLeadingZeros } from './helpers/pad-with-leading-zeros';

interface Options {
  projectPath: string;
  stepNum: number;
  challengeSeeds?: Record<string, unknown>;
  stepBetween?: boolean;
}

const createStepFile = ({
  projectPath,
  stepNum,
  challengeSeeds = {},
  stepBetween = false
}: Options) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const challengeId = new ObjectID();

  let finalStepNum = padWithLeadingZeros(stepNum);
  finalStepNum += stepBetween ? 'a' : '';

  const template = getStepTemplate({
    challengeId,
    challengeSeeds,
    stepBetween,
    stepNum
  });

  fs.writeFileSync(`${projectPath}step-${finalStepNum}.md`, template);

  return challengeId;
};

const reorderSteps = () => {
  const projectPath = getProjectPath();

  const projectName = process.env.CALLING_DIR
    ? process.env.CALLING_DIR.split(path.sep).slice(-1).toString()
    : process.cwd().split(path.sep).slice(-1).toString();

  const curriculumPath = process.env.CALLING_DIR
    ? ''
    : path.join(__dirname, '../');

  const projectMetaPath = getProjectMetaPath(curriculumPath, projectName);

  const parsedData = getMetaData(projectMetaPath);

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

  const challengeOrder = [];

  filesToReorder.forEach(({ oldFileName, newFileName, newStepNum }) => {
    fs.renameSync(
      `${projectPath}${oldFileName}`,
      `${projectPath}${newFileName}.tmp`
    );
    const filePath = `${projectPath}${newFileName}.tmp`;
    const frontMatter = matter.read(filePath);
    const challengeID = (frontMatter.data.id as string) || new ObjectID().id;
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

  const newMeta = { ...parsedData, challengeOrder };
  fs.writeFileSync(projectMetaPath, JSON.stringify(newMeta, null, 2));
};

const getChallengeSeeds = (
  challengeFilePath: string
): Record<string, unknown> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return parseMDSync(challengeFilePath).challengeFiles;
};

export { createStepFile, reorderSteps, getChallengeSeeds };
