import fs from 'fs';
import { getArgValues } from './helpers/get-arg-values';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData } from './helpers/project-metadata';
import { deleteStepFromMeta, renameSteps } from './utils';

const projectPath = getProjectPath();
const args = getArgValues(process.argv);

const stepNum = parseInt(args.num, 10);

if (!Number.isInteger(stepNum) || stepNum < 1) {
  throw 'Step not deleted. Step num must be a number greater than 0.';
}

const challengeOrder = getMetaData().challengeOrder;

if (stepNum > challengeOrder.length)
  throw `Step # ${stepNum} not deleted. Largest step number is ${challengeOrder.length}.`;

const stepId = challengeOrder[stepNum - 1][0];

fs.unlinkSync(`${projectPath}${stepId}.md`);
deleteStepFromMeta({ stepNum });
renameSteps();

console.log(`Sucessfully deleted step #${stepNum}`);
