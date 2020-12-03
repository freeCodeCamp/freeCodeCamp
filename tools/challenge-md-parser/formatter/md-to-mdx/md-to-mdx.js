const readDirP = require('readdirp-walk');
const fs = require('fs');
const path = require('path');
const { getText } = require('./transform-to-mdx');
const { challengeToString } = require('./create-mdx');
const { parseMD } = require('./../../mdx');

const challengeDir = '../../../../curriculum/challenges/english';

readDirP(path.resolve(__dirname, challengeDir), { fileFilter: ['*.md'] }).on(
  'data',
  entry => {
    if (entry.dirent.isFile()) {
      generateTranscribableChallenge(entry.fullPath)
        .then(challengeToString)
        .then(text => fs.writeFileSync(entry.fullPath + 'x', text))
        .catch(err => {
          console.log('Error transforming');
          console.log(entry.path);
          console.log('mdx version not created.');
          console.log(err);
        });
    }
  }
);

function generateTranscribableChallenge(fullPath) {
  return Promise.all([parseMD(fullPath), getText(fullPath)]).then(results => ({
    ...results[0],
    ...results[1]
  }));
}
