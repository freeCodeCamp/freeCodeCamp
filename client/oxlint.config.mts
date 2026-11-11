import { defineConfig } from 'oxlint';
import {
  configTypeChecked,
  configReact,
  configTestingLibrary
} from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [configTypeChecked, configReact, configTestingLibrary],
  ignorePatterns: ['static', '.cache', 'public'],
  env: { browser: true, node: true },
  overrides: [{ files: ['i18n/config.js'], globals: { preval: 'readonly' } }],
  settings: { react: { version: '18.3.1' } },
  rules: {
    'import/no-cycle': ['error', { maxDepth: 2 }],
    'react/jsx-no-useless-fragment': 'error'
  }
});
