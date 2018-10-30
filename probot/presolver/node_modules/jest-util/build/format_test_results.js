'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatTestResults;


const formatResult = (testResult, codeCoverageFormatter, reporter) => {
  const now = Date.now();
  const output = {
    assertionResults: [],
    coverage: {},
    endTime: now,
    message: '',
    name: testResult.testFilePath,
    startTime: now,
    status: 'failed',
    summary: ''
  };

  if (testResult.testExecError) {
    output.message = testResult.testExecError.message;
    output.coverage = {};
  } else {
    const allTestsPassed = testResult.numFailingTests === 0;
    output.status = allTestsPassed ? 'passed' : 'failed';
    output.startTime = testResult.perfStats.start;
    output.endTime = testResult.perfStats.end;
    output.coverage = codeCoverageFormatter(testResult.coverage, reporter);
  }

  output.assertionResults = testResult.testResults.map(formatTestAssertion);

  if (testResult.failureMessage) {
    output.message = testResult.failureMessage;
  }

  return output;
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */

function formatTestAssertion(assertion) {
  const result = {
    ancestorTitles: assertion.ancestorTitles,
    failureMessages: null,
    fullName: assertion.fullName,
    location: assertion.location,
    status: assertion.status,
    title: assertion.title
  };
  if (assertion.failureMessages) {
    result.failureMessages = assertion.failureMessages;
  }
  return result;
}

function formatTestResults(results, codeCoverageFormatter, reporter) {
  const formatter = codeCoverageFormatter || (coverage => coverage);

  const testResults = results.testResults.map(testResult => formatResult(testResult, formatter, reporter));

  return Object.assign(Object.create(null), results, {
    testResults
  });
}