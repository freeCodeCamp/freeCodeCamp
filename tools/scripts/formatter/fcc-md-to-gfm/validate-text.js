const { insertSpaces, checkCodeToBackticks } = require('./transformChallenges');
const readDirP = require('readdirp-walk');

const challengeDir = '../../../../curriculum/challenges/english';

readDirP({ root: challengeDir, fileFilter: ['*.md'] }).on('data', file => {
  if (file.stat.isFile()) {
    insertSpaces(file.fullPath, true)
      .then(checkCodeToBackticks)
      .catch(() => {
        console.log(file.path);
      });
  }
});
