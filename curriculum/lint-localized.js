var glob = require('glob');
const lint = require('../tools/scripts/lint');
const { testedLang } = require('./utils');

glob(`challenges/${testedLang()}/**/*.md`, (err, files) => {
  if (!files.length) throw Error('No files found');
  files.forEach(file => lint({ path: file }));
});
