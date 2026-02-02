import markdownlint from 'markdownlint';

import lintPrism from './markdown-prism.js';
import lintYAML from './markdown-yaml.js';
import fencedCodeBlock from './fenced-code-block.js';

export function linter(rules) {
  const lint = (file, next) => {
    const options = {
      files: [file.path],
      config: rules,
      customRules: [lintYAML, lintPrism, fencedCodeBlock]
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
