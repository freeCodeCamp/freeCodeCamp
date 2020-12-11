const readDirP = require('readdirp-walk');
const { getText } = require('./transform-to-mdx');
const { challengeToString } = require('./create-mdx');
const { parseMD } = require('../../../challenge-md-parser/mdx/index');
const fs = require('fs');

const challengeDir = '../../../../curriculum/challenges/chinese';

readDirP({ root: challengeDir, fileFilter: ['*.md'] }).on('data', file => {
  if (file.stat.isFile()) {
    generateTranscribableChallenge(file.fullPath)
      .then(challengeToString)
      .then(text => fs.writeFileSync(file.fullPath + 'x', text))
      .catch(err => {
        console.log('Error transforming');
        console.log(file.path);
        console.log('mdx version not created.');
        console.log(err);
      });
  }
});

function generateTranscribableChallenge(fullPath) {
  return Promise.all([parseMD(fullPath), getText(fullPath)]).then(results => ({
    ...results[0],
    ...results[1]
  }));
}
