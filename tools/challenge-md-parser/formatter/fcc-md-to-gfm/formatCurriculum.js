const {
  insertSpaces,
  codeToBackticks,
  prettify
} = require('./transformChallenges');
const readDirP = require('readdirp-walk');
const fs = require('fs');

const challengeDir = '../../../../curriculum/challenges/chinese';

readDirP({ root: challengeDir, fileFilter: ['*.md'] }).on('data', file => {
  if (file.stat.isFile()) {
    insertSpaces(file.fullPath, true)
      .then(codeToBackticks)
      .then(prettify)
      .then(text => fs.writeFileSync(file.fullPath, text))
      .catch(() => {
        console.log(file.path);
      });
  }
});
