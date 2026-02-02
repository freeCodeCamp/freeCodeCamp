/* eslint-disable filenames-simple/naming-convention */
import path from 'node:path';

import { createLintStagedConfig } from '@freecodecamp/eslint-config/lintstaged';

const linterConfigPath = path.resolve(
  import.meta.dirname,
  './challenges/.markdownlint.yaml'
);

export default {
  ...createLintStagedConfig(import.meta.dirname),
  './challenges/**/*.md': files =>
    files.map(
      filename =>
        `pnpm challenge-linter --config=${linterConfigPath} '${filename}'`
    )
};
