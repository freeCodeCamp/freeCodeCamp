import { defineConfig } from 'oxlint';
import { config } from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [config],
  env: { node: true, browser: true },
  ignorePatterns: [
    'src/test/stubs/js',
    'src/test/blocks-generated',
    'challenges',
    'structure',
    'i18n-curriculum'
  ]
});
