const { getText } = require('./get-challenge-text');
const { challengeToString } = require('./create-challenge-string');
const { parseMD } = require('../../challenge-md-parser/mdx');
const { readSync } = require('to-vfile');

// to create a vfile from a string simply use vfile({contents: 'your string'})
module.exports.annotate = async function annotate(vFileOrPath) {
  const file =
    typeof vFileOrPath === 'string' ? readSync(vFileOrPath) : vFileOrPath;
  return generateTranscribableChallenge(file)
    .then(challengeToString)
    .catch(err => {
      console.log('Error transforming');
      console.log(vFileOrPath);
      console.log(err);
    });
};

async function generateTranscribableChallenge(file) {
  // parseMD populates file.data, then getText overwrites file.data's
  // description, instructions etc.
  return parseMD(file).then(() => getText(file));
}
