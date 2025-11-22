/* eslint-disable filenames-simple/naming-convention */
import { createLintStagedConfig } from '@freecodecamp/eslint-config/lintstaged';

export default {
  ...createLintStagedConfig(import.meta.dirname),
  './challenges/**/*.md': files =>
    files.map(filename => `node ../tools/scripts/lint/index.js '${filename}'`)
};
