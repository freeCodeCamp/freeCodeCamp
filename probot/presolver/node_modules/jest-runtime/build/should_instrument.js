'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shouldInstrument;

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _jestRegexUtil;

function _load_jestRegexUtil() {
  return _jestRegexUtil = require('jest-regex-util');
}

var _micromatch;

function _load_micromatch() {
  return _micromatch = _interopRequireDefault(require('micromatch'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MOCKS_PATTERN = new RegExp((0, (_jestRegexUtil || _load_jestRegexUtil()).escapePathForRegex)((_path || _load_path()).default.sep + '__mocks__' + (_path || _load_path()).default.sep)); /**
                                                                                                                                                                                               * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                               *
                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                               *
                                                                                                                                                                                               * 
                                                                                                                                                                                               */

function shouldInstrument(filename, options, config) {
  if (!options.collectCoverage) {
    return false;
  }

  if (config.forceCoverageMatch && config.forceCoverageMatch.length && (_micromatch || _load_micromatch()).default.any(filename, config.forceCoverageMatch)) {
    return true;
  }

  if (config.testRegex && filename.match(config.testRegex)) {
    return false;
  }

  if (config.testMatch && config.testMatch.length && (_micromatch || _load_micromatch()).default.any(filename, config.testMatch)) {
    return false;
  }

  if (
  // This configuration field contains an object in the form of:
  // {'path/to/file.js': true}
  options.collectCoverageOnlyFrom && !options.collectCoverageOnlyFrom[filename]) {
    return false;
  }

  if (
  // still cover if `only` is specified
  !options.collectCoverageOnlyFrom && options.collectCoverageFrom && !(0, (_micromatch || _load_micromatch()).default)([(_path || _load_path()).default.relative(config.rootDir, filename)], options.collectCoverageFrom).length) {
    return false;
  }

  if (config.coveragePathIgnorePatterns && config.coveragePathIgnorePatterns.some(pattern => filename.match(pattern))) {
    return false;
  }

  if (MOCKS_PATTERN.test(filename)) {
    return false;
  }

  return true;
}