import { lint as markdownlint } from 'markdownlint/promise';

import * as lintPrism from './markdown-prism.js';
import * as lintYAML from './markdown-yaml.js';
import * as fencedCodeBlock from './fenced-code-block.js';

const markdownItFactory = () =>
  import('markdown-it').then(module => module.default({ html: true }));

export function linter(rules) {
  const lint = async files => {
    const options = {
      files,
      config: rules,
      customRules: [lintYAML, lintPrism, fencedCodeBlock],
      markdownItFactory
    };

    return await markdownlint(options);
  };
  return lint;
}
