import {
  config,
  configTypeChecked,
  configReact,
  configTestingLibrary,
  jsFiles,
  tsFiles
} from '@freecodecamp/eslint-config/base';
import globals from 'globals';

import { defineConfig, globalIgnores } from 'eslint/config';

const baseLanguageOptions = {
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
};

const baseConfig = {
  settings: {
    react: {
      version: '16.4.2'
    },

    'import/resolver': {
      typescript: true,
      node: true
    }
  },

  rules: {
    'import/no-cycle': [
      2,
      {
        maxDepth: 2
      }
    ],
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'error'
  }
};

// Order matters here; later configs can override settings in earlier ones.
export default defineConfig(
  globalIgnores(['static', '.cache', 'public']),
  {
    files: jsFiles,
    extends: [configReact, configTestingLibrary, config],
    ...baseConfig,
    languageOptions: {
      ...baseLanguageOptions,

      parserOptions: {
        babelOptions: {
          presets: ['@babel/preset-react'],
          configFile: './.babelrc.js'
        }
      }
    }
  },
  {
    files: tsFiles,
    extends: [configReact, configTestingLibrary, configTypeChecked],
    ...baseConfig,
    languageOptions: {
      ...baseLanguageOptions
    }
  }
);
