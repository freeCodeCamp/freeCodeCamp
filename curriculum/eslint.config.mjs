import { config } from '@freecodecamp/eslint-config/base';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default defineConfig(
  globalIgnores([
    './src/test/stubs/js',
    './src/test/blocks-generated',
    './challenges',
    './structure'
  ]),
  {
    extends: [config],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
        ...globals.node,
        Promise: true,
        window: true,
        $: true,
        ga: true,
        jQuery: true,
        router: true,
        globalThis: true
      }
    }
  }
);
