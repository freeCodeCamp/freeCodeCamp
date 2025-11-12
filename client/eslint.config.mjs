import { configTypeChecked } from '@freecodecamp/eslint-config/base';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import babelParser from '@babel/eslint-parser'; // TODO: can we get away from using babel?
import reactPlugin from 'eslint-plugin-react';
import jsxAllyPlugin from 'eslint-plugin-jsx-a11y';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';

import testingLibraryPlugin from 'eslint-plugin-testing-library';
import { defineConfig } from 'eslint/config';

const __dirname = import.meta.dirname;

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default defineConfig(
  { ignores: ['static', '.cache', 'public'] },
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.ts?(x)'],
    extends: [importPlugin.flatConfigs['typescript']]
  },
  ...fixupConfigRules(
    compat.extends(
      'plugin:react-hooks/recommended' // Note: at time of testing, upgrading to v5 creates false positives
    )
  ),
  reactPlugin.configs['flat'].recommended,
  jsxAllyPlugin.flatConfigs.recommended,
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
