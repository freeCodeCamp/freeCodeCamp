import fs from 'fs';
import { getProjectPath } from './helpers/get-project-info.js';
import { getMetaData } from './helpers/project-metadata.js';
import {
  createStepFile,
  deleteStepFromMeta,
  getChallenge,
  insertStepIntoMeta,
  updateStepTitles
} from './utils.js';

async function deleteStep(stepNum: number): Promise<void> {
  if (stepNum < 1) {
    throw Error('Step not deleted. Step num must be a number greater than 0.');
  }

  const challengeOrder = getMetaData().challengeOrder;

  if (stepNum > challengeOrder.length)
    throw Error(
      `Step # ${stepNum} not deleted. Largest step number is ${challengeOrder.length}.`
    );

  const stepId = challengeOrder[stepNum - 1].id;

  fs.unlinkSync(`${getProjectPath()}${stepId}.md`);
  await deleteStepFromMeta({ stepNum });
  updateStepTitles();

  console.log(`Successfully deleted step #${stepNum}`);
}

async function insertStep(stepNum: number): Promise<void> {
  if (stepNum < 1) {
    throw Error('Step not inserted. New step number must be greater than 0.');
  }
  const challengeOrder = getMetaData().challengeOrder;

  if (stepNum > challengeOrder.length + 1)
    throw Error(
      `Step not inserted. New step number must be less than ${
        challengeOrder.length + 2
      }.`
    );

  const previousChallenge =
    stepNum > 1 ? getChallenge(challengeOrder[stepNum - 2].id) : null;
  const nextChallenge =
    stepNum <= challengeOrder.length
      ? getChallenge(challengeOrder[stepNum - 1].id)
      : null;

  const challengeSeeds = previousChallenge?.challengeFiles ?? [];
  const challengeType =
    previousChallenge?.challengeType ?? nextChallenge?.challengeType;

  const stepId = createStepFile({
    stepNum,
    challengeType,
    challengeSeeds
  });

  await insertStepIntoMeta({ stepNum, stepId });
  updateStepTitles();
  console.log(`Successfully inserted new step #${stepNum}`);
}

async function createEmptySteps(num: number): Promise<void> {
  if (num < 1 || num > 1000) {
    throw Error(
      `No steps created. arg 'num' must be between 1 and 1000 inclusive`
    );
  }

  const nextStepNum = getMetaData().challengeOrder.length + 1;
  for (let stepNum = nextStepNum; stepNum < nextStepNum + num; stepNum++) {
    const stepId = createStepFile({ stepNum });
    await insertStepIntoMeta({ stepNum, stepId });
  }
  console.log(`Successfully added ${num} steps`);
}

export { deleteStep, insertStep, createEmptySteps };
