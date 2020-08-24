const fs = require('fs');
const path = require('path');

const { reorderSteps, createStepFile } = require('./utils');

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
  const fileContent = fs.readFileSync(projectPath + fileName, 'utf8');
  const matchedSection = fileContent
    .toString()
    .match(/<section id='challengeSeed'>(?<challengeSeed>[\s\S]+)<\/section>/);
  let finalChallengeSeed;
  if (matchedSection) {
    let {
      groups: { challengeSeed }
    } = matchedSection;
    finalChallengeSeed = challengeSeed ? challengeSeed : '';
  }
  return {
    nextStepNum: lastStepFileNum + 1,
    challengeSeed: finalChallengeSeed
  };
};

const projectPath = (process.env.CALLING_DIR || process.cwd()) + path.sep;

const { nextStepNum, challengeSeed } = getLastStepFileContent();

createStepFile({ stepNum: nextStepNum, projectPath, challengeSeed });
console.log(`Sucessfully added step #${nextStepNum}`);
reorderSteps();
