const readdirp = require('readdirp-walk');
const { has } = require('lodash');

const {
  guideRoot,
  checkGuideFile,
  checkFrontmatter,
  extractLangFromFileName
} = require('./md-testing-utils');

const guideFrontmatterValidator = file => frontmatter =>
  extractLangFromFileName(file) === 'english'
    ? true
    : has(frontmatter, 'localeTitle');

readdirp({ root: guideRoot }).on('data', file =>
  Promise.all([
    checkGuideFile(file),
    checkFrontmatter(file, { validator: guideFrontmatterValidator(file) })
  ]).catch(err => {
    console.error(err);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  })
);
