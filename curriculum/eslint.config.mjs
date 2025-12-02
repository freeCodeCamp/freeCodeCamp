import { config } from '@freecodecamp/eslint-config/base';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default defineConfig({
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
});
