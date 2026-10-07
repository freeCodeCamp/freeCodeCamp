'use strict';

const plugin = require('..');

const legacyConfig = plugin.configs['jsx-runtime'];

module.exports = {
  plugins: { react: plugin },
  rules: legacyConfig.rules,
  languageOptions: { parserOptions: legacyConfig.parserOptions },
};

Object.defineProperty(module.exports, 'languageOptions', { enumerable: false });
