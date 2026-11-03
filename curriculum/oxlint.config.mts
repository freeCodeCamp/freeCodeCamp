import { defineConfig } from 'oxlint';
import { config } from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [config],
  env: { node: true, browser: true, mocha: true },
  ignorePatterns: [
    'src/test/stubs/js',
    'src/test/blocks-generated',
    'challenges',
    'structure',
    'i18n-curriculum'
  ],
  globals: {
    Promise: true,
    window: true,
    $: true,
    ga: true,
    jQuery: true,
    router: true,
    globalThis: true
  }
});
