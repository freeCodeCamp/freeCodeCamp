'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
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

const LONG_TEST_COLOR = (_chalk || _load_chalk()).default.reset.bold.bgRed;
// Explicitly reset for these messages since they can get written out in the
// middle of error logging
const FAIL_TEXT = 'FAIL';
const PASS_TEXT = 'PASS';

const FAIL = (_chalk || _load_chalk()).default.supportsColor ? (_chalk || _load_chalk()).default.reset.inverse.bold.red(` ${FAIL_TEXT} `) : FAIL_TEXT;

const PASS = (_chalk || _load_chalk()).default.supportsColor ? (_chalk || _load_chalk()).default.reset.inverse.bold.green(` ${PASS_TEXT} `) : PASS_TEXT;

exports.default = (result, globalConfig, projectConfig) => {
  const testPath = result.testFilePath;
  const status = result.numFailingTests > 0 || result.testExecError ? FAIL : PASS;

  const runTime = result.perfStats ? (result.perfStats.end - result.perfStats.start) / 1000 : null;

  const testDetail = [];
  if (runTime !== null && runTime > 5) {
    testDetail.push(LONG_TEST_COLOR(runTime + 's'));
  }

  if (result.memoryUsage) {
    const toMB = bytes => Math.floor(bytes / 1024 / 1024);
    testDetail.push(`${toMB(result.memoryUsage)} MB heap size`);
  }

  const projectDisplayName = projectConfig && projectConfig.displayName ? (0, (_utils || _load_utils()).printDisplayName)(projectConfig) + ' ' : '';

  return `${status} ${projectDisplayName}${(0, (_utils || _load_utils()).formatTestPath)(projectConfig ? projectConfig : globalConfig, testPath)}` + (testDetail.length ? ` (${testDetail.join(', ')})` : '');
};