'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestMessageUtil = require('jest-message-util');

// Try getting the real promise object from the context, if available. Someone
// could have overridden it in a test.
const Promise = global[Symbol.for('jest-native-promise')] || global.Promise; /**
                                                                              * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                              *
                                                                              * This source code is licensed under the MIT license found in the
                                                                              * LICENSE file in the root directory of this source tree.
                                                                              *
                                                                              * 
                                                                              */

class Jasmine2Reporter {

  constructor(globalConfig, config, environment, testPath) {
    this._globalConfig = globalConfig;
    this._config = config;
    this._testPath = testPath;
    this._testResults = [];
    this._currentSuites = [];
    this._resolve = null;
    this._resultsPromise = new Promise(resolve => this._resolve = resolve);
    this._startTimes = new Map();
  }

  specStarted(spec) {
    this._startTimes.set(spec.id, Date.now());
  }

  specDone(result) {
    this._testResults.push(this._extractSpecResults(result, this._currentSuites.slice(0)));
  }

  suiteStarted(suite) {
    this._currentSuites.push(suite.description);
  }

  suiteDone() {
    this._currentSuites.pop();
  }

  jasmineDone() {
    let numFailingTests = 0;
    let numPassingTests = 0;
    let numPendingTests = 0;
    const testResults = this._testResults;
    testResults.forEach(testResult => {
      if (testResult.status === 'failed') {
        numFailingTests++;
      } else if (testResult.status === 'pending') {
        numPendingTests++;
      } else {
        numPassingTests++;
      }
    });

    const testResult = {
      console: null,
      failureMessage: (0, _jestMessageUtil.formatResultsErrors)(testResults, this._config, this._globalConfig, this._testPath),
      numFailingTests,
      numPassingTests,
      numPendingTests,
      perfStats: {
        end: 0,
        start: 0
      },
      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unchecked: 0,
        unmatched: 0,
        updated: 0
      },
      testFilePath: this._testPath,
      testResults
    };

    this._resolve(testResult);
  }

  getResults() {
    return this._resultsPromise;
  }

  _addMissingMessageToStack(stack, message) {
    // Some errors (e.g. Angular injection error) don't prepend error.message
    // to stack, instead the first line of the stack is just plain 'Error'
    const ERROR_REGEX = /^Error\s*\n/;
    if (stack && message && ERROR_REGEX.test(stack) && stack.indexOf(message) === -1) {
      return message + stack.replace(ERROR_REGEX, '\n');
    }
    return stack;
  }

  _extractSpecResults(specResult, ancestorTitles) {
    const start = this._startTimes.get(specResult.id);
    const duration = start ? Date.now() - start : undefined;
    const status = specResult.status === 'disabled' ? 'pending' : specResult.status;
    const location = specResult.__callsite ? {
      column: specResult.__callsite.getColumnNumber(),
      // $FlowFixMe: https://github.com/facebook/flow/issues/5213
      line: specResult.__callsite.getLineNumber()
    } : null;
    const results = {
      ancestorTitles,
      duration,
      failureMessages: [],
      fullName: specResult.fullName,
      location,
      numPassingAsserts: 0, // Jasmine2 only returns an array of failed asserts.
      status,
      title: specResult.description
    };

    specResult.failedExpectations.forEach(failed => {
      const message = !failed.matcherName && failed.stack ? this._addMissingMessageToStack(failed.stack, failed.message) : failed.message || '';
      results.failureMessages.push(message);
    });

    return results;
  }
}
exports.default = Jasmine2Reporter;