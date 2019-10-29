const lintRules = require('./.markdownlintrc');
const linter = require('./linter');
const argv = require('yargs').argv;

const isMDRE = /.*\.md$/;

const lint = linter(lintRules);

const files = argv._.filter(arg => isMDRE.test(arg));
files.forEach(path => lint({ path: path }));

module.exports = lint;
