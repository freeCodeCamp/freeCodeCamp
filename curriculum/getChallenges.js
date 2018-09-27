/* eslint-disable no-self-compare */
// no import here as this runs without babel
const fs = require('fs');
const path = require('path');
const omit = require('lodash/omit');

const hiddenFile = /(^(\.|\/\.))|(.md$)/g;

function getFilesFor(dir) {
  let targetDir = path.join(__dirname, dir);
  return fs
    .readdirSync(targetDir)
    .filter(file => !hiddenFile.test(file))
    .map(function(file) {
      let superBlock;
      if (fs.statSync(path.join(targetDir, file)).isFile()) {
        return { file: file };
      }
      superBlock = file;
      return getFilesFor(path.join(dir, superBlock)).map(function(data) {
        return {
          file: path.join(superBlock, data.file),
          superBlock: superBlock
        };
      });
    })
    .reduce(function(files, entry) {
      return files.concat(entry);
    }, []);
}

function superblockInfo(filePath) {
  let parts = (filePath || '').split('-');
  let order = parseInt(parts[0], 10);
  if (isNaN(order)) {
    return { order: 0, name: filePath };
  } else {
    return {
      order: order,
      name: parts.splice(1).join('-')
    };
  }
}

// unpackFlag is an argument passed by the unpack script in unpack.js
// which allows us to conditionall omit translations when running
// the test suite and prevent schema related errors in the main fCC branch
module.exports = function getChallenges(challengesDir, unpackFlag) {
  if (!challengesDir) {
    challengesDir = 'challenges';
  }
  return getFilesFor(challengesDir).map(function(data) {
    const challengeSpec = require('./' + challengesDir + '/' + data.file);
    let superInfo = superblockInfo(data.superBlock);
    challengeSpec.fileName = data.file;
    challengeSpec.superBlock = superInfo.name;
    challengeSpec.superOrder = superInfo.order;
    challengeSpec.challenges = challengeSpec.challenges.map(challenge =>
      omit(challenge, [
        'betaSolutions',
        'betaTests',
        'hints',
        'MDNlinks',
        'null',
        'rawSolutions',
        'react',
        'reactRedux',
        'redux',
        'releasedOn',
        unpackFlag ? undefined : 'translations',
        'type'
      ])
    );
    return challengeSpec;
  });
};
