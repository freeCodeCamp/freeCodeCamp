const {
  reorderSteps,
  createStepFile,
  getExistingStepNums,
  getProjectPath
} = require('./utils');

const anyStepExists = (steps, stepsToFind) =>
  stepsToFind.some(num => steps.includes(num));

const projectPath = getProjectPath();
const argValuePairs = process.argv.slice(2);

const args = argValuePairs.reduce((argsObj, arg) => {
  const [argument, value] = arg.replace(/\s/g, '').split('=');
  if (!argument || !value) {
    throw `Invalid argument/value specified: ${arg}`;
  }
  return { ...argsObj, [argument]: value };
}, {});

let { num, start } = args;
if (!start) {
  throw `No steps created. start arg val must be specified.`;
}
if (!num) {
  throw `No steps created. num arg val must be specified.`;
}
num = parseInt(num, 10);
const stepStart = parseInt(start, 10);

if (num < 1 || num > 20) {
  throw `No steps created. arg 'num' must be between 1 and 20 inclusive`;
}

const maxStepNum = stepStart + num - 1;

const existingSteps = getExistingStepNums(projectPath);

if (anyStepExists(existingSteps, [start, maxStepNum])) {
  throw `Step not created. At least one of the steps specified between ${start} and ${maxStepNum} already exists.`;
}

for (let stepNum = stepStart; stepNum <= maxStepNum; stepNum++) {
  createStepFile({ stepNum, projectPath });
}
console.log(`Sucessfully added ${num} steps`);
reorderSteps();
