'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _base_reporter;

function _load_base_reporter() {
  return _base_reporter = _interopRequireDefault(require('./base_reporter'));
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

var _get_result_header;

function _load_get_result_header() {
  return _get_result_header = _interopRequireDefault(require('./get_result_header'));
}

var _get_snapshot_summary;

function _load_get_snapshot_summary() {
  return _get_snapshot_summary = _interopRequireDefault(require('./get_snapshot_summary'));
}

var _test_path_pattern_to_regexp;

function _load_test_path_pattern_to_regexp() {
  return _test_path_pattern_to_regexp = _interopRequireDefault(require('../test_path_pattern_to_regexp'));
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

const TEST_SUMMARY_THRESHOLD = 20;

const NPM_EVENTS = new Set(['prepublish', 'publish', 'postpublish', 'preinstall', 'install', 'postinstall', 'preuninstall', 'uninstall', 'postuninstall', 'preversion', 'version', 'postversion', 'pretest', 'test', 'posttest', 'prestop', 'stop', 'poststop', 'prestart', 'start', 'poststart', 'prerestart', 'restart', 'postrestart']);

class SummaryReporter extends (_base_reporter || _load_base_reporter()).default {

  constructor(globalConfig) {
    super();
    this._globalConfig = globalConfig;
    this._estimatedTime = 0;
  }

  // If we write more than one character at a time it is possible that
  // Node.js exits in the middle of printing the result. This was first observed
  // in Node.js 0.10 and still persists in Node.js 6.7+.
  // Let's print the test failure summary character by character which is safer
  // when hundreds of tests are failing.
  _write(string) {
    for (let i = 0; i < string.length; i++) {
      process.stderr.write(string.charAt(i));
    }
  }

  onRunStart(aggregatedResults, options) {
    super.onRunStart(aggregatedResults, options);
    this._estimatedTime = options.estimatedTime;
  }

  onRunComplete(contexts, aggregatedResults) {
    const numTotalTestSuites = aggregatedResults.numTotalTestSuites,
          testResults = aggregatedResults.testResults,
          wasInterrupted = aggregatedResults.wasInterrupted;

    if (numTotalTestSuites) {
      const lastResult = testResults[testResults.length - 1];
      // Print a newline if the last test did not fail to line up newlines
      // similar to when an error would have been thrown in the test.
      if (!this._globalConfig.verbose && lastResult && !lastResult.numFailingTests && !lastResult.testExecError) {
        this.log('');
      }

      this._printSummary(aggregatedResults, this._globalConfig);
      this._printSnapshotSummary(aggregatedResults.snapshot, this._globalConfig);

      if (numTotalTestSuites) {
        let message = (0, (_utils || _load_utils()).getSummary)(aggregatedResults, {
          estimatedTime: this._estimatedTime
        });

        if (!this._globalConfig.silent) {
          message += '\n' + (wasInterrupted ? (_chalk || _load_chalk()).default.bold.red('Test run was interrupted.') : this._getTestSummary(contexts, this._globalConfig));
        }
        this.log(message);
      }
    }
  }

  _printSnapshotSummary(snapshots, globalConfig) {
    if (snapshots.added || snapshots.filesRemoved || snapshots.unchecked || snapshots.unmatched || snapshots.updated) {
      let updateCommand;
      const event = process.env.npm_lifecycle_event;
      const prefix = NPM_EVENTS.has(event) ? '' : 'run ';
      const isYarn = typeof process.env.npm_config_user_agent === 'string' && process.env.npm_config_user_agent.match('yarn') !== null;
      const client = isYarn ? 'yarn' : 'npm';
      const scriptUsesJest = typeof process.env.npm_lifecycle_script === 'string' && process.env.npm_lifecycle_script.indexOf('jest') !== -1;

      if (globalConfig.watch) {
        updateCommand = 'press `u`';
      } else if (event && scriptUsesJest) {
        updateCommand = `run \`${client + ' ' + prefix + event + (isYarn ? '' : ' --')} -u\``;
      } else {
        updateCommand = 're-run jest with `-u`';
      }

      const snapshotSummary = (0, (_get_snapshot_summary || _load_get_snapshot_summary()).default)(snapshots, updateCommand);
      snapshotSummary.forEach(this.log);

      this.log(''); // print empty line
    }
  }

  _printSummary(aggregatedResults, globalConfig) {
    // If there were any failing tests and there was a large number of tests
    // executed, re-print the failing results at the end of execution output.
    const failedTests = aggregatedResults.numFailedTests;
    const runtimeErrors = aggregatedResults.numRuntimeErrorTestSuites;
    if (failedTests + runtimeErrors > 0 && aggregatedResults.numTotalTestSuites > TEST_SUMMARY_THRESHOLD) {
      this.log((_chalk || _load_chalk()).default.bold('Summary of all failing tests'));
      aggregatedResults.testResults.forEach(testResult => {
        const failureMessage = testResult.failureMessage;

        if (failureMessage) {
          this._write((0, (_get_result_header || _load_get_result_header()).default)(testResult, globalConfig) + '\n' + failureMessage + '\n');
        }
      });
      this.log(''); // print empty line
    }
  }

  _getTestSummary(contexts, globalConfig) {
    const getMatchingTestsInfo = () => {
      const prefix = globalConfig.findRelatedTests ? ' related to files matching ' : ' matching ';

      return (_chalk || _load_chalk()).default.dim(prefix) + (0, (_test_path_pattern_to_regexp || _load_test_path_pattern_to_regexp()).default)(globalConfig.testPathPattern).toString();
    };

    let testInfo = '';

    if (globalConfig.runTestsByPath) {
      testInfo = (_chalk || _load_chalk()).default.dim(' within paths');
    } else if (globalConfig.onlyChanged) {
      testInfo = (_chalk || _load_chalk()).default.dim(' related to changed files');
    } else if (globalConfig.testPathPattern) {
      testInfo = getMatchingTestsInfo();
    }

    let nameInfo = '';

    if (globalConfig.runTestsByPath) {
      nameInfo = ' ' + globalConfig.nonFlagArgs.map(p => `"${p}"`).join(', ');
    } else if (globalConfig.testNamePattern) {
      nameInfo = (_chalk || _load_chalk()).default.dim(' with tests matching ') + `"${globalConfig.testNamePattern}"`;
    }

    const contextInfo = contexts.size > 1 ? (_chalk || _load_chalk()).default.dim(' in ') + contexts.size + (_chalk || _load_chalk()).default.dim(' projects') : '';

    return (_chalk || _load_chalk()).default.dim('Ran all test suites') + testInfo + nameInfo + contextInfo + (_chalk || _load_chalk()).default.dim('.');
  }
}
exports.default = SummaryReporter;