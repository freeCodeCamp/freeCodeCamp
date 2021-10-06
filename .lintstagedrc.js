const { ESLint } = require('eslint');

const cli = new ESLint();

module.exports = {
  '*.(js|ts|tsx)': files => [
    'eslint --max-warnings=0 --cache --fix ' +
      files.filter(file => !cli.isPathIgnored(file)).join(' '),
    ...files.map(filename => `prettier --write '${filename}'`)
  ],
  '*.!(js|ts|tsx)': files =>
    files.map(filename => `prettier --write --ignore-unknown '${filename}'`),
  './curriculum/challenges/**/*.md': files =>
    files.map(filename => `node ./tools/scripts/lint/index.js '${filename}'`)
};
