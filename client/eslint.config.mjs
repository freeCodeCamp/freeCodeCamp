import {
  configTypeChecked,
  configReact,
  configImports,
  configTestingLibrary
} from '@freecodecamp/eslint-config/base';
import globals from 'globals';
import babelParser from '@babel/eslint-parser'; // TODO: can we get away from using babel?

import { defineConfig } from 'eslint/config';

// Order matters here; later configs can override settings in earlier ones.
export default defineConfig(
  { ignores: ['static', '.cache', 'public', 'node_modules'] },
  ...configReact,
  ...configImports,
  ...configTestingLibrary,
  {
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
      },
      parser: babelParser,

      parserOptions: {
        babelOptions: {
          presets: ['@babel/preset-react'],
          configFile: './.babelrc.js'
        }
      }
    },

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
  },
  ...configTypeChecked
);
