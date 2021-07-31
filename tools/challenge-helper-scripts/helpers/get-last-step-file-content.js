const fs = require('fs');
const path = require('path');
const { getChallengeSeeds } = require('../utils');
const { getProjectPath } = require('./get-project-path');

// Looks up the last file found with format `part-###.md` in a directory and
// returns associated information to it. At the same time validates that the
// number of files match the names used to name these.
function getLastStepFileContent() {
  const filesArr = [];
  const projectPath = getProjectPath();

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
    challengeSeeds: getChallengeSeeds(projectPath + fileName),
    nextStepNum: lastStepFileNum + 1
  };
}

exports.getLastStepFileContent = getLastStepFileContent;
