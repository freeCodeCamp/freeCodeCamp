import { getLastStepFileContent } from './helpers/get-last-step-file-content';
import { getProjectPath } from './helpers/get-project-path';
import { reorderSteps, createStepFile } from './utils';

const projectPath = getProjectPath();
const { nextStepNum, challengeSeeds } = getLastStepFileContent();

createStepFile({ stepNum: nextStepNum, projectPath, challengeSeeds });
console.log(`Sucessfully added step #${nextStepNum}`);
reorderSteps();
