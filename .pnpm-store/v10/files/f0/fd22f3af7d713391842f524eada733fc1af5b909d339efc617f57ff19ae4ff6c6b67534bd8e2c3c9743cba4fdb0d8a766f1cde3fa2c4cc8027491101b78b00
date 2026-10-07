/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// This file contains the minimum ESLint configuration required for Create
// React App support, and is used as the `baseConfig` for `eslint-loader`
// to ensure that user-provided configs don't need this boilerplate.

module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
  },
};
