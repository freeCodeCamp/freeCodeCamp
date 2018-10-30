'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _prettyFormat;

function _load_prettyFormat() {
  return _prettyFormat = _interopRequireDefault(require('pretty-format'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const format = value => (0, (_prettyFormat || _load_prettyFormat()).default)(value, { min: true });

exports.default = {
  mapCoverage: () => `  Option ${(_chalk || _load_chalk()).default.bold('"mapCoverage"')} has been removed, as it's no longer necessary.

  Please update your configuration.`,

  preprocessorIgnorePatterns: options => `  Option ${(_chalk || _load_chalk()).default.bold('"preprocessorIgnorePatterns"')} was replaced by ${(_chalk || _load_chalk()).default.bold('"transformIgnorePatterns"')}, which support multiple preprocessors.

  Jest now treats your current configuration as:
  {
    ${(_chalk || _load_chalk()).default.bold('"transformIgnorePatterns"')}: ${(_chalk || _load_chalk()).default.bold(format(options.preprocessorIgnorePatterns))}
  }

  Please update your configuration.`,

  scriptPreprocessor: options => `  Option ${(_chalk || _load_chalk()).default.bold('"scriptPreprocessor"')} was replaced by ${(_chalk || _load_chalk()).default.bold('"transform"')}, which support multiple preprocessors.

  Jest now treats your current configuration as:
  {
    ${(_chalk || _load_chalk()).default.bold('"transform"')}: ${(_chalk || _load_chalk()).default.bold(`{".*": ${format(options.scriptPreprocessor)}}`)}
  }

  Please update your configuration.`,

  testPathDirs: options => `  Option ${(_chalk || _load_chalk()).default.bold('"testPathDirs"')} was replaced by ${(_chalk || _load_chalk()).default.bold('"roots"')}.

  Jest now treats your current configuration as:
  {
    ${(_chalk || _load_chalk()).default.bold('"roots"')}: ${(_chalk || _load_chalk()).default.bold(format(options.testPathDirs))}
  }

  Please update your configuration.
  `
};