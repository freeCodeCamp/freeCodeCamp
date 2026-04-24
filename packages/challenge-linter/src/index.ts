import { readFileSync } from 'node:fs';
import YAML from 'js-yaml';

import { linter } from './linter/index.js';

interface LintResults {
  [key: string]: unknown[];
}

const configure = (
  configPath: string
): { lint: (files: string[]) => Promise<LintResults> } => {
  const lintRules = readFileSync(configPath, 'utf8');
  const lint = linter(YAML.load(lintRules));

  return { lint };
};

const processLintErrors = (results: LintResults) => {
  return Object.entries(results)
    .map(([file, errors]) => ({ file, errors }))
    .filter(({ errors }) => errors.length > 0);
};

export { configure, processLintErrors };
