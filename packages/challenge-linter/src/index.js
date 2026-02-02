import { readFileSync } from 'node:fs';
import YAML from 'js-yaml';
import glob from 'glob';

import linter from './linter';

export const configure = ({ configPath }) => {
  const lintRules = readFileSync(configPath, 'utf8');
  const lint = linter(YAML.load(lintRules));
  const lintAll = pattern => {
    glob(pattern, (err, files) => {
      if (!files.length) throw Error('No files found');
      files.forEach(file => lint({ path: file }));
    });
  };

  return { lint, lintAll };
};
