const markdownlint = require('markdownlint');

const lintYAML = require('./markdown-yaml');
const lintConfig = require('./.markdownlintrc');
const argv = require('yargs').argv;

const isMDRE = /.*\.md$/;

const files = argv._.filter(arg => isMDRE.test(arg));
files.forEach(path => lint({ path: path }));

function lint(file, next) {
  const options = {
    files: [file.path],
    config: lintConfig,
    customRules: [lintYAML]
  };
  markdownlint(options, function callback(err, result) {
    const resultString = (result || '').toString();
    if (resultString) {
      process.exitCode = 1;
      console.log(resultString);
    }
    if (next) next(err, file);
  });
}

module.exports = lint;
