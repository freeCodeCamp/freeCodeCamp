import { getArgValues } from './helpers/get-arg-values';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData } from './helpers/project-metadata';
import {
  createStepFile,
  getChallengeSeeds,
  insertStepIntoMeta,
  renameSteps
} from './utils';

const projectPath = getProjectPath();
const args = getArgValues(process.argv);

const stepNum = parseInt(args.start, 10);

if (!Number.isInteger(stepNum) || stepNum < 1) {
  throw 'Step not inserted. New step number must be greater than 0.';
}

const challengeOrder = getMetaData().challengeOrder;

if (stepNum > challengeOrder.length + 1)
  throw `Step not inserted. New step number must be less than ${
    challengeOrder.length + 2
  }.`;

const challengeSeeds =
  stepNum > 1
    ? getChallengeSeeds(`${projectPath}${challengeOrder[stepNum - 2][0]}.md`)
    : {};

const stepId = createStepFile({
  stepNum,
  projectPath,
  challengeSeeds
});

insertStepIntoMeta({ stepNum, stepId });
renameSteps();
console.log(`Sucessfully inserted new step #${stepNum}`);
