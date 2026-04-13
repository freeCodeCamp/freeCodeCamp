import markdownlint from 'markdownlint';

import * as lintPrism from './markdown-prism.js';
import * as lintYAML from './markdown-yaml.js';
import * as fencedCodeBlock from './fenced-code-block.js';

export function linter(rules) {
  const lint = async files => {
    const options = {
      files,
      config: rules,
      customRules: [lintYAML, lintPrism, fencedCodeBlock]
    };

    return await markdownlint.promises.markdownlint(options);
  };
  return lint;
}
