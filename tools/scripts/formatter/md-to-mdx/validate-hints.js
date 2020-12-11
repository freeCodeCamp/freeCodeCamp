const readDirP = require('readdirp-walk');
const { getText } = require('./transform-to-mdx');
const { validateHints } = require('./create-mdx');

const challengeDir = '../../../../curriculum/challenges/english';

readDirP({
  root: challengeDir,
  fileFilter: ['*.md']
}).on('data', file => {
  if (file.stat.isFile()) {
    getText(file.fullPath)
      .then(validateHints)
      .catch(() => {
        console.log('invalid hint in');
        console.log(file.path);
      });
  }
});
