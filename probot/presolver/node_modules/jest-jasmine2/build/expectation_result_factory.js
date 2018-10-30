'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expectationResultFactory;
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function messageFormatter(_ref) {
  let error = _ref.error,
      message = _ref.message,
      passed = _ref.passed;

  if (passed) {
    return 'Passed.';
  }
  if (message) {
    return message;
  }
  if (!error) {
    return '';
  }
  return error.message && error.name ? `${error.name}: ${error.message}` : `${error.toString()} thrown`;
}

function stackFormatter(options, errorMessage) {
  if (options.passed) {
    return '';
  }

  var _ref2 = options.error || new Error(errorMessage);

  const stack = _ref2.stack;

  return stack;
}

function expectationResultFactory(options) {
  const message = messageFormatter(options);
  const stack = stackFormatter(options, message);

  if (options.passed) {
    return {
      error: options.error,
      matcherName: options.matcherName,
      message,
      passed: options.passed,
      stack
    };
  }

  return {
    actual: options.actual,
    error: options.error,
    expected: options.expected,
    matcherName: options.matcherName,
    message,
    passed: options.passed,
    stack
  };
}