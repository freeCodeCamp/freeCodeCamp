import { createLintStagedConfig } from '@freecodecamp/eslint-config/lintstaged';

export default {
  ...createLintStagedConfig(import.meta.dirname),
  './curriculum/challenges/**/*.md': files =>
    files.map(filename => `node ./tools/scripts/lint/index.js '${filename}'`)
};
