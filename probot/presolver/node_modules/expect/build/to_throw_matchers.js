'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatcher = undefined;

var _jestGetType = require('jest-get-type');

var _jestGetType2 = _interopRequireDefault(_jestGetType);

var _jestRegexUtil = require('jest-regex-util');

var _jestMessageUtil = require('jest-message-util');

var _jestMatcherUtils = require('jest-matcher-utils');

var _jasmine_utils = require('./jasmine_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const createMatcher = exports.createMatcher = (matcherName, fromPromise) => (actual, expected) => {
  const value = expected;
  let error;

  if (fromPromise) {
    error = actual;
  } else {
    if (typeof actual !== 'function') {
      throw new Error((0, _jestMatcherUtils.matcherHint)(matcherName, 'function', (0, _jestGetType2.default)(value)) + '\n\n' + 'Received value must be a function, but instead ' + `"${(0, _jestGetType2.default)(actual)}" was found`);
    }
    try {
      actual();
    } catch (e) {
      error = e;
    }
  }

  if (typeof expected === 'string') {
    expected = new RegExp((0, _jestRegexUtil.escapeStrForRegex)(expected));
  }

  if (typeof expected === 'function') {
    return toThrowMatchingError(matcherName, error, expected);
  } else if (expected instanceof RegExp) {
    return toThrowMatchingStringOrRegexp(matcherName, error, expected, value);
  } else if (expected && typeof expected === 'object') {
    return toThrowMatchingErrorInstance(matcherName, error, expected);
  } else if (expected === undefined) {
    const pass = error !== undefined;
    return {
      message: pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + matcherName, 'function', '') + '\n\n' + 'Expected the function not to throw an error.\n' + printActualErrorMessage(error) : () => (0, _jestMatcherUtils.matcherHint)(matcherName, 'function', (0, _jestGetType2.default)(value)) + '\n\n' + 'Expected the function to throw an error.\n' + printActualErrorMessage(error),
      pass
    };
  } else {
    throw new Error((0, _jestMatcherUtils.matcherHint)('.not' + matcherName, 'function', (0, _jestGetType2.default)(value)) + '\n\n' + 'Unexpected argument passed.\nExpected: ' + `${(0, _jestMatcherUtils.printExpected)('string')}, ${(0, _jestMatcherUtils.printExpected)('Error (type)')} or ${(0, _jestMatcherUtils.printExpected)('regexp')}.\n` + (0, _jestMatcherUtils.printWithType)('Got', String(expected), _jestMatcherUtils.printExpected));
  }
};

const matchers = {
  toThrow: createMatcher('.toThrow'),
  toThrowError: createMatcher('.toThrowError')
};

const toThrowMatchingStringOrRegexp = (name, error, pattern, value) => {
  if (error && !error.message && !error.name) {
    error = new Error(error);
  }

  const pass = !!(error && error.message.match(pattern));
  const message = pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + name, 'function', (0, _jestGetType2.default)(value)) + '\n\n' + `Expected the function not to throw an error matching:\n` + `  ${(0, _jestMatcherUtils.printExpected)(value)}\n` + printActualErrorMessage(error) : () => (0, _jestMatcherUtils.matcherHint)(name, 'function', (0, _jestGetType2.default)(value)) + '\n\n' + `Expected the function to throw an error matching:\n` + `  ${(0, _jestMatcherUtils.printExpected)(value)}\n` + printActualErrorMessage(error);

  return { message, pass };
};

const toThrowMatchingErrorInstance = (name, error, expectedError) => {
  if (error && !error.message && !error.name) {
    error = new Error(error);
  }

  const pass = (0, _jasmine_utils.equals)(error, expectedError);
  const message = pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + name, 'function', 'error') + '\n\n' + `Expected the function not to throw an error matching:\n` + `  ${(0, _jestMatcherUtils.printExpected)(expectedError)}\n` + printActualErrorMessage(error) : () => (0, _jestMatcherUtils.matcherHint)(name, 'function', 'error') + '\n\n' + `Expected the function to throw an error matching:\n` + `  ${(0, _jestMatcherUtils.printExpected)(expectedError)}\n` + printActualErrorMessage(error);

  return { message, pass };
};

const toThrowMatchingError = (name, error, ErrorClass) => {
  const pass = !!(error && error instanceof ErrorClass);
  const message = pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + name, 'function', 'type') + '\n\n' + `Expected the function not to throw an error of type:\n` + `  ${(0, _jestMatcherUtils.printExpected)(ErrorClass.name)}\n` + printActualErrorMessage(error) : () => (0, _jestMatcherUtils.matcherHint)(name, 'function', 'type') + '\n\n' + `Expected the function to throw an error of type:\n` + `  ${(0, _jestMatcherUtils.printExpected)(ErrorClass.name)}\n` + printActualErrorMessage(error);

  return { message, pass };
};

const printActualErrorMessage = error => {
  if (error) {
    var _separateMessageFromS = (0, _jestMessageUtil.separateMessageFromStack)(error.stack);

    const message = _separateMessageFromS.message,
          stack = _separateMessageFromS.stack;

    return `Instead, it threw:\n` + (0, _jestMatcherUtils.RECEIVED_COLOR)('  ' + (0, _jestMatcherUtils.highlightTrailingWhitespace)(message) + (0, _jestMessageUtil.formatStackTrace)(stack, {
      rootDir: process.cwd(),
      testMatch: []
    }, {
      noStackTrace: false
    }));
  }

  return `But it didn't throw anything.`;
};

exports.default = matchers;