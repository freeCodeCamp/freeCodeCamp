const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const ObjectID = require('bson-objectid');
const { parseMDSync } = require('../challenge-parser/parser');
const {
  getMetaData
} = require('../challenge-helper-scripts/helpers/get-project-path-metadata');
const { getStepTemplate } = require('./helpers/get-step-template');
const { getProjectMetaPath } = require('./helpers/get-project-meta-path');
const { getProjectPath } = require('./helpers/get-project-path');
const { padWithLeadingZeros } = require('./helpers/pad-with-leading-zeros');

const createStepFile = ({
  projectPath,
  stepNum,
  challengeSeeds = {},
  stepBetween = false
}) => {
  const challengeId = ObjectID();

  let finalStepNum = padWithLeadingZeros(stepNum);
  finalStepNum += stepBetween ? 'a' : '';

  const template = getStepTemplate({
    challengeId,
    challengeSeeds,
    stepBetween,
    stepNum
  });

  fs.writeFileSync(`${projectPath}part-${finalStepNum}.md`, template);

  return challengeId;
};

const reorderSteps = () => {
  const projectPath = getProjectPath();

  const projectName = process.env.CALLING_DIR
    ? process.env.CALLING_DIR.split(path.sep).slice(-1).toString()
    : process.cwd().split(path.sep).slice(-1).toString();

  const curriculumPath = process.env.CALLING_DIR
    ? ''
    : path.join(__dirname, '../');

  const projectMetaPath = getProjectMetaPath(curriculumPath, projectName);

  const parsedData = getMetaData(projectMetaPath);

  let foundFinal = false;
  const filesArr = [];
  fs.readdirSync(projectPath).forEach(fileName => {
    if (path.extname(fileName).toLowerCase() === '.md') {
      if (!fileName.endsWith('final.md')) {
        filesArr.push(fileName);
      } else {
        foundFinal = true;
      }
    }
  });

  if (foundFinal) {
    filesArr.push('final.md');
  }

  const filesToReorder = filesArr.map((fileName, i) => {
    const newStepNum = i + 1;
    const newFileName =
      fileName !== 'final.md'
        ? `part-${padWithLeadingZeros(newStepNum)}.md`
        : 'final.md';
    return {
      oldFileName: fileName,
      newFileName,
      newStepNum
    };
  });

  const challengeOrder = [];

  filesToReorder.forEach(({ oldFileName, newFileName, newStepNum }) => {
    fs.renameSync(
      `${projectPath}${oldFileName}`,
      `${projectPath}${newFileName}.tmp`
    );
    const filePath = `${projectPath}${newFileName}.tmp`;
    const frontMatter = matter.read(filePath);
    const challengeID = frontMatter.data.id || ObjectID();
    const title =
      newFileName === 'final.md' ? 'Final Prototype' : `Part ${newStepNum}`;
    const dashedName = `part-${newStepNum}`;
    challengeOrder.push(['' + challengeID, title]);
    const newData = {
      ...frontMatter.data,
      id: challengeID,
      title,
      dashedName
    };
    fs.writeFileSync(filePath, frontMatter.stringify(newData));
  });

  filesToReorder.forEach(({ newFileName }) => {
    fs.renameSync(
      `${projectPath}${newFileName}.tmp`,
      `${projectPath}${newFileName}`
    );
  });

  const newMeta = { ...parsedData, challengeOrder };
  fs.writeFileSync(projectMetaPath, JSON.stringify(newMeta, null, 2));
};

const getChallengeSeeds = challengeFilePath => {
  return parseMDSync(challengeFilePath).files;
};

module.exports = {
  createStepFile,
  getChallengeSeeds,
  reorderSteps
};
