/* eslint-disable no-self-compare */
var fs = require('fs');
var path = require('path');

function getFilesFor(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir))
    .map(function(file) {
      let superBlock;
      if (fs.statSync(path.join(__dirname, dir + '/' + file)).isFile()) {
        return { file: file };
      }
      superBlock = file;
      return getFilesFor(dir + '/' + superBlock)
        .map(function(data) {
          return {
            file: superBlock + '/' + data.file,
            superBlock: superBlock
          };
        });
    })
    .reduce(function(files, file) {
      if (!Array.isArray(file)) {
        files.push(file);
        return files;
      }
      return files.concat(file);
    }, []);
}

function getSupOrder(filePath) {
  var order = parseInt((filePath || '').split('-')[0], 10);
  // check for NaN
  if (order !== order) {
    return 0;
  }
  return order;
}

function getSupName(filePath) {
  var order = parseInt((filePath || '').split('-')[0], 10);
  // check for NaN
  if (order !== order) {
    return filePath;
  }

  return (filePath || '').split('-').splice(1).join('-');
}

module.exports = function getChallenges() {
  try {
    return getFilesFor('challenges')
      .map(function(data) {
        var challengeSpec = require('./challenges/' + data.file);
        challengeSpec.fileName = data.file;
        challengeSpec.superBlock = getSupName(data.superBlock);
        challengeSpec.superOrder = getSupOrder(data.superBlock);

        return challengeSpec;
      });
  } catch (e) {
    console.log('error', e);
    return [];
  }
};
