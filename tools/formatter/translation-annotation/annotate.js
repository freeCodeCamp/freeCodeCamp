const { getText } = require('./get-challenge-text');
const { challengeToString } = require('./create-challenge-string');
const { parseMD } = require('../../challenge-md-parser/mdx');

module.exports.annotate = async function annotate(filePath) {
  return generateTranscribableChallenge(filePath)
    .then(challengeToString)
    .catch(err => {
      console.log('Error transforming');
      console.log(filePath);
      console.log(err);
    });
};

async function generateTranscribableChallenge(fullPath) {
  return Promise.all([parseMD(fullPath), getText(fullPath)]).then(results => ({
    ...results[0],
    ...results[1]
  }));
}
