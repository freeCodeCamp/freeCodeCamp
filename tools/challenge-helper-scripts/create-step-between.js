const {
  reorderSteps,
  createStepFile,
  getChallengeSeed,
  padWithLeadingZeros,
  getExistingStepNums,
  getProjectPath
} = require('./utils');

const allStepsExist = (steps, stepsToFind) =>
  stepsToFind.every(num => steps.includes(num));

const projectPath = getProjectPath();
const argValuePairs = process.argv.slice(2);

const args = argValuePairs.reduce((argsObj, arg) => {
  const [argument, value] = arg.replace(/\s/g, '').split('=');
  if (!argument || !value) {
    throw `Invalid argument/value specified: ${arg}`;
  }
  return { ...argsObj, [argument]: value };
}, {});

let { start, end } = args;
start = parseInt(start, 10);
end = parseInt(end, 10);

if (
  !Number.isInteger(start) ||
  !Number.isInteger(end) ||
  start < 1 ||
  start !== end - 1
) {
  throw 'Step not created. Steps specified must be' +
    ' consecutive numbers and start step must be greater than 0.';
}

const existingSteps = getExistingStepNums(projectPath);
if (!allStepsExist(existingSteps, [start, end])) {
  throw 'Step not created. At least one of the steps specified does not exist.';
}

const challengeSeed = getChallengeSeed(
  `${projectPath}part-${padWithLeadingZeros(start)}.md`
);
createStepFile({
  stepNum: start,
  projectPath,
  challengeSeed,
  stepBetween: true
});
console.log(`Sucessfully added step between step #${start} and step #${end}`);
reorderSteps();
