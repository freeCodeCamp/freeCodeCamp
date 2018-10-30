'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exit;

function _load_exit() {
  return _exit = _interopRequireDefault(require('exit'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _util;

function _load_util() {
  return _util = _interopRequireDefault(require('util'));
}

var _nodeNotifier;

function _load_nodeNotifier() {
  return _nodeNotifier = _interopRequireDefault(require('node-notifier'));
}

var _base_reporter;

function _load_base_reporter() {
  return _base_reporter = _interopRequireDefault(require('./base_reporter'));
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

const isDarwin = process.platform === 'darwin';

const icon = (_path || _load_path()).default.resolve(__dirname, '../assets/jest_logo.png');

class NotifyReporter extends (_base_reporter || _load_base_reporter()).default {
  constructor(globalConfig, startRun, context) {
    super();
    this._globalConfig = globalConfig;
    this._startRun = startRun;
    this._context = context;
  }

  onRunComplete(contexts, result) {
    const success = result.numFailedTests === 0 && result.numRuntimeErrorTestSuites === 0;

    const notifyMode = this._globalConfig.notifyMode;
    const statusChanged = this._context.previousSuccess !== success || this._context.firstRun;
    if (success && (notifyMode === 'always' || notifyMode === 'success' || notifyMode === 'success-change' || notifyMode === 'change' && statusChanged || notifyMode === 'failure-change' && statusChanged)) {
      const title = (_util || _load_util()).default.format('%d%% Passed', 100);
      const message = (_util || _load_util()).default.format((isDarwin ? '\u2705 ' : '') + '%d tests passed', result.numPassedTests);

      (_nodeNotifier || _load_nodeNotifier()).default.notify({ icon, message, title });
    } else if (!success && (notifyMode === 'always' || notifyMode === 'failure' || notifyMode === 'failure-change' || notifyMode === 'change' && statusChanged || notifyMode === 'success-change' && statusChanged)) {
      const failed = result.numFailedTests / result.numTotalTests;

      const title = (_util || _load_util()).default.format('%d%% Failed', Math.ceil(Number.isNaN(failed) ? 0 : failed * 100));
      const message = (_util || _load_util()).default.format((isDarwin ? '\u26D4\uFE0F ' : '') + '%d of %d tests failed', result.numFailedTests, result.numTotalTests);

      const restartAnswer = 'Run again';
      const quitAnswer = 'Exit tests';
      (_nodeNotifier || _load_nodeNotifier()).default.notify({
        actions: [restartAnswer, quitAnswer],
        closeLabel: 'Close',
        icon,
        message,
        title
      }, (err, _, metadata) => {
        if (err || !metadata) {
          return;
        }
        if (metadata.activationValue === quitAnswer) {
          (0, (_exit || _load_exit()).default)(0);
          return;
        }
        if (metadata.activationValue === restartAnswer) {
          this._startRun(this._globalConfig);
        }
      });
    }
    this._context.previousSuccess = success;
    this._context.firstRun = false;
  }
}
exports.default = NotifyReporter;