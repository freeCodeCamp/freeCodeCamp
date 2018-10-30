'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _constants;

function _load_constants() {
  return _constants = require('../constants');
}

var _default_reporter;

function _load_default_reporter() {
  return _default_reporter = _interopRequireDefault(require('./default_reporter'));
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

class VerboseReporter extends (_default_reporter || _load_default_reporter()).default {

  constructor(globalConfig) {
    super(globalConfig);
    this._globalConfig = globalConfig;
  }

  static filterTestResults(testResults) {
    return testResults.filter((_ref) => {
      let status = _ref.status;
      return status !== 'pending';
    });
  }

  static groupTestsBySuites(testResults) {
    const root = { suites: [], tests: [], title: '' };
    testResults.forEach(testResult => {
      let targetSuite = root;

      // Find the target suite for this test,
      // creating nested suites as necessary.
      for (const title of testResult.ancestorTitles) {
        let matchingSuite = targetSuite.suites.find(s => s.title === title);
        if (!matchingSuite) {
          matchingSuite = { suites: [], tests: [], title };
          targetSuite.suites.push(matchingSuite);
        }
        targetSuite = matchingSuite;
      }

      targetSuite.tests.push(testResult);
    });
    return root;
  }

  onTestResult(test, result, aggregatedResults) {
    super.testFinished(test.context.config, result, aggregatedResults);
    if (!result.skipped) {
      this.printTestFileHeader(result.testFilePath, test.context.config, result);
      if (!result.testExecError && !result.skipped) {
        this._logTestResults(result.testResults);
      }
      this.printTestFileFailureMessage(result.testFilePath, test.context.config, result);
    }
    super.forceFlushBufferedOutput();
  }

  _logTestResults(testResults) {
    this._logSuite(VerboseReporter.groupTestsBySuites(testResults), 0);
    this._logLine();
  }

  _logSuite(suite, indentLevel) {
    if (suite.title) {
      this._logLine(suite.title, indentLevel);
    }

    this._logTests(suite.tests, indentLevel + 1);

    suite.suites.forEach(suite => this._logSuite(suite, indentLevel + 1));
  }

  _getIcon(status) {
    if (status === 'failed') {
      return (_chalk || _load_chalk()).default.red((_constants || _load_constants()).ICONS.failed);
    } else if (status === 'pending') {
      return (_chalk || _load_chalk()).default.yellow((_constants || _load_constants()).ICONS.pending);
    } else {
      return (_chalk || _load_chalk()).default.green((_constants || _load_constants()).ICONS.success);
    }
  }

  _logTest(test, indentLevel) {
    const status = this._getIcon(test.status);
    const time = test.duration ? ` (${test.duration.toFixed(0)}ms)` : '';
    this._logLine(status + ' ' + (_chalk || _load_chalk()).default.dim(test.title + time), indentLevel);
  }

  _logTests(tests, indentLevel) {
    if (this._globalConfig.expand) {
      tests.forEach(test => this._logTest(test, indentLevel));
    } else {
      const skippedCount = tests.reduce((result, test) => {
        if (test.status === 'pending') {
          result += 1;
        } else {
          this._logTest(test, indentLevel);
        }

        return result;
      }, 0);

      if (skippedCount > 0) {
        this._logSkippedTests(skippedCount, indentLevel);
      }
    }
  }

  _logSkippedTests(count, indentLevel) {
    const icon = this._getIcon('pending');
    const text = (_chalk || _load_chalk()).default.dim(`skipped ${count} test${count === 1 ? '' : 's'}`);

    this._logLine(`${icon} ${text}`, indentLevel);
  }

  _logLine(str, indentLevel) {
    const indentation = '  '.repeat(indentLevel || 0);
    this.log(indentation + (str || ''));
  }
}
exports.default = VerboseReporter;