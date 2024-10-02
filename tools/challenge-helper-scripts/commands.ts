import fs from 'fs';
import { SuperBlocks } from '../../shared/config/curriculum';
import { challengeTypes } from '../../shared/config/challenge-types';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { getChallengeOrderFromFileTree } from './helpers/get-challenge-order';
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

  const stepId = challengeOrder[stepNum - 1].id;

  fs.unlinkSync(`${getProjectPath()}${stepId}.md`);
  deleteStepFromMeta({ stepNum });
  updateStepTitles();

  console.log(`Successfully deleted step #${stepNum}`);
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
  const challengeType = [
    SuperBlocks.SciCompPy,
    SuperBlocks.UpcomingPython
  ].includes(getMetaData().superBlock)
    ? challengeTypes.python
    : challengeTypes.html;

  const challengeSeeds =
    stepNum > 1
      ? getChallengeSeeds(
          `${getProjectPath()}${challengeOrder[stepNum - 2].id}.md`
        )
      : {};

  const stepId = createStepFile({
    stepNum,
    challengeType,
    challengeSeeds
  });

  insertStepIntoMeta({ stepNum, stepId });
  updateStepTitles();
  console.log(`Successfully inserted new step #${stepNum}`);
}

function createEmptySteps(num: number): void {
  if (num < 1 || num > 1000) {
    throw `No steps created. arg 'num' must be between 1 and 1000 inclusive`;
  }

  const nextStepNum = getMetaData().challengeOrder.length + 1;
  const challengeType = [
    SuperBlocks.SciCompPy,
    SuperBlocks.UpcomingPython
  ].includes(getMetaData().superBlock)
    ? challengeTypes.python
    : challengeTypes.html;

  for (let stepNum = nextStepNum; stepNum < nextStepNum + num; stepNum++) {
    const stepId = createStepFile({ stepNum, challengeType });
    insertStepIntoMeta({ stepNum, stepId });
  }
  console.log(`Successfully added ${num} steps`);
}

const repairMeta = async () => {
  const sortByStepNum = (a: string, b: string) =>
    parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1]);

  const challengeOrder = await getChallengeOrderFromFileTree();
  if (!challengeOrder.every(({ title }) => /Step \d+/.test(title))) {
    throw new Error(
      'You can only run this command on project-based blocks with step files.'
    );
  }
  const sortedChallengeOrder = challengeOrder.sort((a, b) =>
    sortByStepNum(a.title, b.title)
  );
  const meta = getMetaData();
  meta.challengeOrder = sortedChallengeOrder;
  updateMetaData(meta);
};

export { deleteStep, insertStep, createEmptySteps, repairMeta };
