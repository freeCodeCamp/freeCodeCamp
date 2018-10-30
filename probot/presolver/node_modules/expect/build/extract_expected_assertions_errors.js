'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestMatcherUtils = require('jest-matcher-utils');

var _jest_matchers_object = require('./jest_matchers_object');

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const resetAssertionsLocalState = () => {
  (0, _jest_matchers_object.setState)({
    assertionCalls: 0,
    expectedAssertionsNumber: null,
    isExpectingAssertions: false
  });
};

// Create and format all errors related to the mismatched number of `expect`
// calls and reset the matchers state.
const extractExpectedAssertionsErrors = () => {
  const result = [];

  var _getState = (0, _jest_matchers_object.getState)();

  const assertionCalls = _getState.assertionCalls,
        expectedAssertionsNumber = _getState.expectedAssertionsNumber,
        isExpectingAssertions = _getState.isExpectingAssertions;


  resetAssertionsLocalState();

  if (typeof expectedAssertionsNumber === 'number' && assertionCalls !== expectedAssertionsNumber) {
    const numOfAssertionsExpected = (0, _jestMatcherUtils.EXPECTED_COLOR)((0, _jestMatcherUtils.pluralize)('assertion', expectedAssertionsNumber));
    const error = new Error((0, _jestMatcherUtils.matcherHint)('.assertions', '', String(expectedAssertionsNumber), {
      isDirectExpectCall: true
    }) + '\n\n' + `Expected ${numOfAssertionsExpected} to be called but received ` + (0, _jestMatcherUtils.RECEIVED_COLOR)((0, _jestMatcherUtils.pluralize)('assertion call', assertionCalls || 0)) + '.');
    result.push({
      actual: assertionCalls,
      error,
      expected: expectedAssertionsNumber
    });
  }
  if (isExpectingAssertions && assertionCalls === 0) {
    const expected = (0, _jestMatcherUtils.EXPECTED_COLOR)('at least one assertion');
    const received = (0, _jestMatcherUtils.RECEIVED_COLOR)('received none');
    const error = new Error((0, _jestMatcherUtils.matcherHint)('.hasAssertions', '', '', {
      isDirectExpectCall: true
    }) + '\n\n' + `Expected ${expected} to be called but ${received}.`);
    result.push({
      actual: 'none',
      error,
      expected: 'at least one'
    });
  }

  return result;
};

exports.default = extractExpectedAssertionsErrors;