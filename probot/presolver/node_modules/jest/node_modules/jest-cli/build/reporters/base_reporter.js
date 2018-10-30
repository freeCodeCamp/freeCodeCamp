'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pre_run_message;

function _load_pre_run_message() {
  return _pre_run_message = require('../pre_run_message');
}

class BaseReporter {

  log(message) {
    process.stderr.write(message + '\n');
  }

  onRunStart(results, options) {
    (0, (_pre_run_message || _load_pre_run_message()).remove)(process.stderr);
  }

  onTestResult(test, testResult, results) {}

  onTestStart(test) {}

  onRunComplete(contexts, aggregatedResults) {}

  _setError(error) {
    this._error = error;
  }

  // Return an error that occurred during reporting. This error will
  // define whether the test run was successful or failed.
  getLastError() {
    return this._error;
  }
}
exports.default = BaseReporter; /**
                                 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE file in the root directory of this source tree.
                                 *
                                 * 
                                 */