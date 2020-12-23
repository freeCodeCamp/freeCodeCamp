const { getText } = require('./transform-to-mdx');
const { challengeToString } = require('./create-mdx');
const { parseMD } = require('./../../mdx');

module.exports.annotate = async function annotate(filePath) {
  return generateTranscribableChallenge(filePath)
    .then(challengeToString)
    .catch(err => {
      console.log('Error transforming');
      console.log(filePath);
      console.log('mdx version not created.');
      console.log(err);
    });
};

async function generateTranscribableChallenge(fullPath) {
  return Promise.all([parseMD(fullPath), getText(fullPath)]).then(results => ({
    ...results[0],
    ...results[1]
  }));
}
