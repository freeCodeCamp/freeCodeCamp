const { getProjectPath } = require('./helpers/get-project-path');
const {
  getLastStepFileContent
} = require('./helpers/get-last-step-file-content');
const { reorderSteps, createStepFile } = require('./utils');

const projectPath = getProjectPath();
const { nextStepNum, challengeSeeds } = getLastStepFileContent();

createStepFile({ stepNum: nextStepNum, projectPath, challengeSeeds });
console.log(`Sucessfully added step #${nextStepNum}`);
reorderSteps();
