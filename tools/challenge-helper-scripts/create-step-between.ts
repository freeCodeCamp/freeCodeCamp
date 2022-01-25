import { getArgValues } from './helpers/get-arg-values';
import { getExistingStepNums } from './helpers/get-existing-step-nums';
import { getProjectPath } from './helpers/get-project-path';
import { padWithLeadingZeros } from './helpers/pad-with-leading-zeros';
import { createStepFile, getChallengeSeeds, reorderSteps } from './utils';

const allStepsExist = (steps: number[], stepsToFind: number[]) =>
  stepsToFind.every(num => steps.includes(num));

const projectPath = getProjectPath();
const args = getArgValues(process.argv);

const start = parseInt(args.start, 10);

if (!Number.isInteger(start) || start < 1) {
  throw 'Step not created. Start step must be greater than 0.';
}

const end = start + 1;

const existingSteps = getExistingStepNums(projectPath);
if (!allStepsExist(existingSteps, [start, end])) {
  throw `Step not created. Both start step, ${start}, and end step, ${end}, must exist`;
}

const challengeSeeds = getChallengeSeeds(
  `${projectPath}step-${padWithLeadingZeros(start)}.md`
);
createStepFile({
  stepNum: start,
  projectPath,
  challengeSeeds,
  stepBetween: true
});
console.log(`Sucessfully added step between step #${start} and step #${end}`);
reorderSteps();
