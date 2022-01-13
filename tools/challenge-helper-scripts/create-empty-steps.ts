import { getArgValues } from './helpers/get-arg-values';
import { getMetaData } from './helpers/project-metadata';
import { getProjectPath } from './helpers/get-project-info';
import { createStepFile, insertStepIntoMeta } from './utils';

const projectPath = getProjectPath();
const args = getArgValues(process.argv);

const { num: numString } = args;

if (!numString) {
  throw `No steps created. num arg val must be specified.`;
}
const num = parseInt(numString, 10);

if (num < 1 || num > 1000) {
  throw `No steps created. arg 'num' must be between 1 and 1000 inclusive`;
}

const nextStepNum = getMetaData().challengeOrder.length + 1;

for (let stepNum = nextStepNum; stepNum < nextStepNum + num; stepNum++) {
  const stepId = createStepFile({ stepNum, projectPath });
  insertStepIntoMeta({ stepNum, stepId });
}
console.log(`Sucessfully added ${numString} steps`);
