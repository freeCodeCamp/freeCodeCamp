import { defineConfig } from 'oxlint';
import {
  configTypeChecked,
  configReact,
  configTestingLibrary
} from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [configTypeChecked, configReact, configTestingLibrary],
  options: { typeAware: true },
  ignorePatterns: ['static', '.cache', 'public'],
  env: { browser: true, mocha: true, node: true },
  globals: {
    Promise: true,
    window: true,
    $: true,
    ga: true,
    jQuery: true,
    router: true,
    globalThis: true
  },
  overrides: [{ files: ['i18n/config.js'], globals: { preval: 'readonly' } }],
  settings: { react: { version: '16.4.2' } },
  rules: {
    'import/no-cycle': ['error', { maxDepth: 2 }],
    'react/jsx-no-useless-fragment': 'error'
  }
});
