import markdownlint from 'markdownlint';

import * as lintPrism from './markdown-prism.js';
import * as lintYAML from './markdown-yaml.js';
import * as fencedCodeBlock from './fenced-code-block.js';

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
      if (err) {
        process.exitCode = 1;
        console.error(err);
      }
      if (next) next(err, file);
    });
  };
  return lint;
}
