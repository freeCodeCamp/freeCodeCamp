// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

const nodeTrustedToolProfile = require('decoupled-local-node-rig/profiles/default/includes/eslint/flat/profile/node-trusted-tool');
const friendlyLocalsMixin = require('decoupled-local-node-rig/profiles/default/includes/eslint/flat/mixins/friendly-locals');
const tsdocMixin = require('decoupled-local-node-rig/profiles/default/includes/eslint/flat/mixins/tsdoc');

module.exports = [
  ...nodeTrustedToolProfile,
  ...friendlyLocalsMixin,
  ...tsdocMixin,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      'no-console': 'off'
    }
  }
];
