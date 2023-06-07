import fs from 'fs';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData } from './helpers/project-metadata';
import {
  createStepFile,
  deleteStepFromMeta,
  getChallengeSeeds,
  insertStepIntoMeta,
  updateStepTitles
} from './utils';

function deleteStep(stepNum: number): void {
  if (stepNum < 1) {
    throw 'Step not deleted. Step num must be a number greater than 0.';
  }

  const challengeOrder = getMetaData().challengeOrder;

  if (stepNum > challengeOrder.length)
    throw `Step # ${stepNum} not deleted. Largest step number is ${challengeOrder.length}.`;

  const stepId = challengeOrder[stepNum - 1][0];

  fs.unlinkSync(`${getProjectPath()}${stepId}.md`);
  deleteStepFromMeta({ stepNum });
  updateStepTitles();

  console.log(`Sucessfully deleted step #${stepNum}`);
}

function insertStep(stepNum: number): void {
  if (stepNum < 1) {
    throw 'Step not inserted. New step number must be greater than 0.';
  }
  const challengeOrder = getMetaData().challengeOrder;

  if (stepNum > challengeOrder.length + 1)
    throw `Step not inserted. New step number must be less than ${
      challengeOrder.length + 2
    }.`;

  const challengeSeeds =
    stepNum > 1
      ? getChallengeSeeds(
          `${getProjectPath()}${challengeOrder[stepNum - 2][0]}.md`
        )
      : {};

  const stepId = createStepFile({
    stepNum,
    challengeSeeds
  });

  insertStepIntoMeta({ stepNum, stepId });
  updateStepTitles();
  console.log(`Sucessfully inserted new step #${stepNum}`);
}

function createEmptySteps(num: number): void {
  if (num < 1 || num > 1000) {
    throw `No steps created. arg 'num' must be between 1 and 1000 inclusive`;
  }

  const nextStepNum = getMetaData().challengeOrder.length + 1;

  for (let stepNum = nextStepNum; stepNum < nextStepNum + num; stepNum++) {
    const stepId = createStepFile({ stepNum });
    insertStepIntoMeta({ stepNum, stepId });
  }
  console.log(`Sucessfully added ${num} steps`);
}

export { deleteStep, insertStep, createEmptySteps };
