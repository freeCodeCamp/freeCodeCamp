import {
  configTypeChecked,
  configReact
} from '@freecodecamp/eslint-config/base';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import babelParser from '@babel/eslint-parser'; // TODO: can we get away from using babel?

import testingLibraryPlugin from 'eslint-plugin-testing-library';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  configReact,
  { ignores: ['static', '.cache', 'public', 'node_modules'] },
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.ts?(x)'],
    extends: [importPlugin.flatConfigs['typescript']]
  },
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
  {
    files: ['**/*.test.[jt]s?(x)'],

    extends: [testingLibraryPlugin.configs['flat/react']]
  },
  ...configTypeChecked
);
