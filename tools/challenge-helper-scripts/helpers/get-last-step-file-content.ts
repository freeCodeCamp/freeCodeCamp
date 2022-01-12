import fs from 'fs';
import path from 'path';
import { last } from 'lodash';
import { getChallengeSeeds } from '../utils';
import { getMetaData } from './project-metadata';
import { getProjectName, getProjectPath } from './get-project-info';
import { ChallengeSeed } from './get-step-template';

// Looks up the last file found with format `step-###.md` in a directory and
// returns associated information to it. At the same time validates that the
// number of files match the names used to name these.
function getLastStepFileContent(): {
  challengeSeeds: Record<string, ChallengeSeed>;
  nextStepNum: number;
} {
  const projectPath = getProjectPath();
  const { stepId, stepNum } = getLastStep();
  const stepCount = getProjectFiles(projectPath).length;

  const stepFileName = `${stepId}.md`;

  if (stepCount !== stepNum) {
    throw `Error: The last file step is ${stepNum} and there are ${stepCount} files.`;
  }

  return {
    challengeSeeds: getChallengeSeeds(projectPath + stepFileName),
    nextStepNum: stepNum + 1
  };
}

function getLastStep(): { stepId: string; stepNum: number } {
  const meta = getMetaData(getProjectName());
  const challengeOrder: string[][] = meta.challengeOrder;
  const step = last(challengeOrder);
  if (!step) throw new Error('No steps found');

  return { stepId: step[0], stepNum: challengeOrder.length };
}

function getProjectFiles(projectPath: string) {
  const filesArr: string[] = [];
  fs.readdirSync(projectPath).forEach(fileName => {
    if (path.extname(fileName).toLowerCase() === '.md') {
      filesArr.push(fileName);
    }
  });

  return filesArr;
}

export { getLastStepFileContent };
