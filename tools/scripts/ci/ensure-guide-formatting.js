const readdirp = require('readdirp-walk');
const { has } = require('lodash');
const ora = require('ora');

const {
  guideRoot,
  checkGuideFile,
  checkFrontmatter,
  extractLangFromFileName
} = require('./md-testing-utils');

const spinner = ora('Checking guide markdown formatting').start();

const guideFrontmatterValidator = file => frontmatter => {
  const hasLocale =
    extractLangFromFileName(file) === 'english'
      ? true
      : has(frontmatter, 'localeTitle');
  const hasTitle = has(frontmatter, 'title');
  return hasLocale && hasTitle;
};

readdirp({ root: guideRoot })
  .on('data', file =>
    Promise.all([
      checkGuideFile(file),
      checkFrontmatter(file, { validator: guideFrontmatterValidator(file) })
    ]).catch(err => {
      console.error(err);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    })
  )
  .on('end', () => spinner.stop());
