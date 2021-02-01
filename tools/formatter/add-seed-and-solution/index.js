const readdirp = require('readdirp');
const fs = require('fs');
const path = require('path');
const { getText } = require('./get-challenge-text');
const { challengeToString } = require('./create-challenge-string');
const { parseMD } = require('../../challenge-parser/mdx');

const challengeDir = '../../../curriculum/challenges/';
const enChalDir = path.resolve(__dirname, challengeDir, 'english');
const cnChalDir = path.resolve(__dirname, challengeDir, 'chinese');

module.exports.restore = async function restore(filePath) {
  return generateTranscribableChallenge(filePath)
    .then(challengeToString)
    .catch(err => {
      console.log('Error transforming');
      console.log(filePath);
      console.log(err);
    });
};

async function generateTranscribableChallenge(filePath) {
  const cnFullPath = path.resolve(cnChalDir, filePath);
  const enFullPath = path.resolve(enChalDir, filePath);
  const cnChal = await Promise.all([
    parseMD(cnFullPath),
    getText(cnFullPath)
  ]).then(results => ({
    ...results[0],
    ...results[1]
  }));
  const engChal = await parseMD(enFullPath);
  return {
    ...cnChal,
    files: engChal.files,
    solutions: engChal.solutions,
    dashedName: engChal.dashedName
  };
}

readdirp(cnChalDir, { fileFilter: ['*.md'], type: 'files' }).on(
  'data',
  ({ path: filePath }) => {
    const cnFullPath = path.resolve(cnChalDir, filePath);
    module.exports
      .restore(filePath)
      .then(text => fs.writeFileSync(cnFullPath, text))
      .catch(e => {
        console.log(filePath);
        console.log(e);
      });
  }
);
