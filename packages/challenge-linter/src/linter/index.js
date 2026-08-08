import { lint as markdownlint } from 'markdownlint/promise';

import * as lintPrism from './markdown-prism.js';
import * as lintYAML from './markdown-yaml.js';
import * as fencedCodeBlock from './fenced-code-block.js';

const markdownItFactory = () =>
  import('markdown-it').then(module => module.default({ html: true }));

export function linter(rules) {
  // markdownlint's LintResults type lives behind a path its exports map does
  // not expose, so it cannot be named here. Deriving it from the imported
  // function keeps the annotation portable.
  /** @type {(files: string[]) => ReturnType<typeof markdownlint>} */
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
