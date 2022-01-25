import { getArgValues } from './helpers/get-arg-values';
import { getExistingStepNums } from './helpers/get-existing-step-nums';
import { getProjectPath } from './helpers/get-project-path';
import { createStepFile, reorderSteps } from './utils';

const anyStepExists = (steps: number[], stepsToFind: number[]) =>
  stepsToFind.some(num => steps.includes(num));

const projectPath = getProjectPath();
const args = getArgValues(process.argv);

const { num: numString, start: startString } = args;
if (!startString) {
  throw `No steps created. start arg val must be specified.`;
}
if (!numString) {
  throw `No steps created. num arg val must be specified.`;
}
const num = parseInt(numString, 10);
const stepStart = parseInt(startString, 10);

if (num < 1 || num > 1000) {
  throw `No steps created. arg 'num' must be between 1 and 1000 inclusive`;
}

const maxStepNum = stepStart + num - 1;

const existingSteps = getExistingStepNums(projectPath);

if (anyStepExists(existingSteps, [stepStart, maxStepNum])) {
  throw `Step not created. At least one of the steps specified between ${startString} and ${maxStepNum} already exists.`;
}

for (let stepNum = stepStart; stepNum <= maxStepNum; stepNum++) {
  createStepFile({ stepNum, projectPath });
}
console.log(`Sucessfully added ${numString} steps`);
reorderSteps();
