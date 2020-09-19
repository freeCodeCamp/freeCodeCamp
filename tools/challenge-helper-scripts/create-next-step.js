const fs = require('fs');
const path = require('path');

const {
  reorderSteps,
  createStepFile,
  getChallengeSeed,
  getProjectPath
} = require('./utils');

const getLastStepFileContent = () => {
  const filesArr = [];
  fs.readdirSync(projectPath).forEach(fileName => {
    if (
      path.extname(fileName).toLowerCase() === '.md' &&
      !fileName.endsWith('final.md')
    ) {
      filesArr.push(fileName);
    }
  });

  const fileName = filesArr[filesArr.length - 1];
  let lastStepFileNum = fileName.split('.')[0].split('-')[1];
  lastStepFileNum = parseInt(lastStepFileNum, 10);
  if (filesArr.length !== lastStepFileNum) {
    throw `Error: The last file step is ${lastStepFileNum} and there are ${filesArr.length} files.`;
  }

  return {
    nextStepNum: lastStepFileNum + 1,
    challengeSeed: getChallengeSeed(projectPath + fileName)
  };
};

const projectPath = getProjectPath();

const { nextStepNum, challengeSeed } = getLastStepFileContent();

createStepFile({ stepNum: nextStepNum, projectPath, challengeSeed });
console.log(`Sucessfully added step #${nextStepNum}`);
reorderSteps();
