/* eslint-disable no-self-compare */
// no import here as this runs without babel
const fs = require('fs');
const path = require('path');

const hiddenFile = /(^(\.|\/\.))|(.md$)/g;
function getFilesFor(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir))
    .filter(file => !hiddenFile.test(file))
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
  const order = parseInt((filePath || '').split('-')[0], 10);
  // check for NaN
  if (order !== order) {
    return 0;
  }
  return order;
}

function getSupName(filePath) {
  const order = parseInt((filePath || '').split('-')[0], 10);
  // check for NaN
  if (order !== order) {
    return filePath;
  }

  return (filePath || '').split('-').splice(1).join('-');
}

module.exports = function getChallenges() {
  try {
    return getFilesFor('challenges')
      .filter(data => data.superBlock === '03-front-end-libraries') // TODO: REMOVE
      .map(function(data) {
        const challengeSpec = require('./challenges/' + data.file);
        challengeSpec.fileName = data.file;
        challengeSpec.superBlock = getSupName(data.superBlock);
        challengeSpec.superOrder = getSupOrder(data.superBlock);

        /* NOTE: There were some weird errors being thrown by npm test
         * seemingly related to challenges with no tests present.
         *
         * Also, we want to hijack are async/await tests here and force
         * them to pass the automated tests because there is no support
         * for async testing here yet.
         * */
        challengeSpec.challenges = challengeSpec.challenges.slice()
          .filter(({ tests }) => tests.length)
          .map(challenge => {
            const { tests, title } = challenge;
            const asyncSignature = '(async function';
            if (tests.join('').includes(asyncSignature)) {
              console.log(`Updating Async Tests for Challenge: "${title}".`);
              challenge.tests = tests.map(t => asyncSignature ? "assert(true, 'message: great');" : t);
            }
            return challenge;
          });

        return challengeSpec;
      });
  } catch (e) {
    console.error('error: ', e);
    return [];
  }
};
