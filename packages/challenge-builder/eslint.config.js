import { configTypeChecked } from '@freecodecamp/eslint-config/base';
import globals from 'globals';

import { defineConfig } from 'eslint/config';

const baseLanguageOptions = {
  globals: {
    ...globals.browser,
    ...globals.node // TODO: necessary?
  }
};

export default defineConfig({
  extends: [configTypeChecked],
  languageOptions: {
    ...baseLanguageOptions
  }
});
