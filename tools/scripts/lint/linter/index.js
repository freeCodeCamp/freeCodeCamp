const markdownlint = require('markdownlint');

const lintPrism = require('./markdown-prism');
const lintYAML = require('./markdown-yaml');

function linter(rules) {
  const lint = (file, next) => {
    const options = {
      files: [file.path],
      config: rules,
      customRules: [lintYAML, lintPrism]
    };
    markdownlint(options, function callback(err, result) {
      const resultString = (result || '').toString();
      if (resultString) {
        process.exitCode = 1;
        console.log(resultString);
      }
      if (next) next(err, file);
    });
  };
  return lint;
}

module.exports = linter;
