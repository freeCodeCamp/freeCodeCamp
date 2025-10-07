const { ESLint } = require('eslint');

const cli = new ESLint();
// if a lot of files are changed, it's faster to run prettier/eslint on the
// whole project than to run them on each file separately
module.exports = {
  '*.(js|ts|tsx)': async files => {
    const ignoredIds = await Promise.all(
      files.map(file => cli.isPathIgnored(file))
    );
    const lintableFiles = files.filter((_, i) => !ignoredIds[i]);

    return [
      'eslint --max-warnings=0 --cache --fix ' + lintableFiles.join(' '),
      ...files.map(filename => `prettier --write '${filename}'`)
    ];
  },
  '*.!(js|ts|tsx|css)': files =>
    files.map(filename => `prettier --write --ignore-unknown '${filename}'`),

  './curriculum/challenges/**/*.md': files =>
    files.map(filename => `node ./tools/scripts/lint/index.js '${filename}'`),
  '*.css': files => files.map(filename => `stylelint --fix '${filename}'`)
};
