import { getLastStepFileContent } from './helpers/get-last-step-file-content';
import { getProjectPath } from './helpers/get-project-info';
import { createStepFile, insertStepIntoMeta } from './utils';

const projectPath = getProjectPath();
const { nextStepNum, challengeSeeds } = getLastStepFileContent();

const stepId = createStepFile({
  stepNum: nextStepNum,
  projectPath,
  challengeSeeds
});
insertStepIntoMeta({ stepNum: nextStepNum, stepId: stepId.toString() });
console.log(`Sucessfully added step #${nextStepNum}`);
