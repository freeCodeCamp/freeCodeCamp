const readdirp = require('readdirp-walk');

const { parseMarkdown } = require('../../challenge-md-parser');
const { challengeRoot } = require('./md-testing-utils');

readdirp({ root: challengeRoot }).on('data', file =>
  Promise.all([isChallengeParseable(file)]).catch(err => {
    console.info(`
  the following error occured when testing

    ${file.fullPath}

    `);
    console.error(err);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  })
);

function isChallengeParseable(file) {
  const { stat, fullPath } = file;
  if (!stat.isFile() || (/_meta/).test(fullPath)) {
    return Promise.resolve(true);
  }
  return parseMarkdown(fullPath);
}
