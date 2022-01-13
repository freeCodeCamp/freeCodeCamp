import fs from 'fs';
import { getArgValues } from './helpers/get-arg-values';
import { getExistingStepNums } from './helpers/get-existing-step-nums';
import { getProjectPath } from './helpers/get-project-info';
import { padWithLeadingZeros } from './helpers/pad-with-leading-zeros';
import { renameSteps } from './utils';

const projectPath = getProjectPath();
const args = getArgValues(process.argv);

const num = parseInt(args.num, 10);

if (!Number.isInteger(num) || num < 1) {
  throw 'Step not deleted. Step num must be a number greater than 0.';
}

const existingSteps = getExistingStepNums(projectPath);
if (!existingSteps.includes(num)) {
  throw `Step # ${num} not deleted because it does not exist.`;
}

const stepFileToDelete = `${projectPath}step-${padWithLeadingZeros(num)}.md`;
try {
  fs.unlinkSync(stepFileToDelete);
  console.log(`Sucessfully deleted step #${num}`);
  renameSteps();
} catch (err) {
  console.error(err);
}
