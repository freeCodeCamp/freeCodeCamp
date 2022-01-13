import { getLastStepFileContent } from './helpers/get-last-step-file-content';
import { getProjectPath } from './helpers/get-project-info';
import { createStepFile, insertStepIntoMeta } from './utils';

const projectPath = getProjectPath();
const { nextStepNum: stepNum, challengeSeeds } = getLastStepFileContent();

const stepId = createStepFile({
  stepNum,
  projectPath,
  challengeSeeds
});
insertStepIntoMeta({ stepNum, stepId });
console.log(`Sucessfully added step #${stepNum}`);
