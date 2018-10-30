'use strict';

var _jestMatcherUtils = require('jest-matcher-utils');

var utils = _interopRequireWildcard(_jestMatcherUtils);

var _matchers = require('./matchers');

var _matchers2 = _interopRequireDefault(_matchers);

var _spy_matchers = require('./spy_matchers');

var _spy_matchers2 = _interopRequireDefault(_spy_matchers);

var _to_throw_matchers = require('./to_throw_matchers');

var _to_throw_matchers2 = _interopRequireDefault(_to_throw_matchers);

var _jasmine_utils = require('./jasmine_utils');

var _asymmetric_matchers = require('./asymmetric_matchers');

var _jest_matchers_object = require('./jest_matchers_object');

var _extract_expected_assertions_errors = require('./extract_expected_assertions_errors');

var _extract_expected_assertions_errors2 = _interopRequireDefault(_extract_expected_assertions_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class JestAssertionError extends Error {} /**
                                           * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                           *
                                           * This source code is licensed under the MIT license found in the
                                           * LICENSE file in the root directory of this source tree.
                                           *
                                           * 
                                           */

const isPromise = obj => {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

const createToThrowErrorMatchingSnapshotMatcher = function (matcher) {
  return function (received, testName) {
    return matcher.apply(this, [received, testName, true]);
  };
};

const getPromiseMatcher = (name, matcher) => {
  if (name === 'toThrow' || name === 'toThrowError') {
    return (0, _to_throw_matchers.createMatcher)('.' + name, true);
  } else if (name === 'toThrowErrorMatchingSnapshot') {
    return createToThrowErrorMatchingSnapshotMatcher(matcher);
  }

  return null;
};

const expect = function (actual) {
  if ((arguments.length <= 1 ? 0 : arguments.length - 1) !== 0) {
    throw new Error('Expect takes at most one argument.');
  }

  const allMatchers = (0, _jest_matchers_object.getMatchers)();
  const expectation = {
    not: {},
    rejects: { not: {} },
    resolves: { not: {} }
  };

  Object.keys(allMatchers).forEach(name => {
    const matcher = allMatchers[name];
    const promiseMatcher = getPromiseMatcher(name, matcher) || matcher;
    expectation[name] = makeThrowingMatcher(matcher, false, actual);
    expectation.not[name] = makeThrowingMatcher(matcher, true, actual);

    expectation.resolves[name] = makeResolveMatcher(name, promiseMatcher, false, actual);
    expectation.resolves.not[name] = makeResolveMatcher(name, promiseMatcher, true, actual);

    expectation.rejects[name] = makeRejectMatcher(name, promiseMatcher, false, actual);
    expectation.rejects.not[name] = makeRejectMatcher(name, matcher, true, actual);
  });

  return expectation;
};

const getMessage = message => {
  return message && message() || utils.RECEIVED_COLOR('No message was specified for this matcher.');
};

const makeResolveMatcher = (matcherName, matcher, isNot, actual) => function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  const matcherStatement = `.resolves.${isNot ? 'not.' : ''}${matcherName}`;
  if (!isPromise(actual)) {
    throw new JestAssertionError(utils.matcherHint(matcherStatement, 'received', '') + '\n\n' + `${utils.RECEIVED_COLOR('received')} value must be a Promise.\n` + utils.printWithType('Received', actual, utils.printReceived));
  }

  return actual.then(result => makeThrowingMatcher(matcher, isNot, result).apply(null, args), reason => {
    const err = new JestAssertionError(utils.matcherHint(matcherStatement, 'received', '') + '\n\n' + `Expected ${utils.RECEIVED_COLOR('received')} Promise to resolve, ` + 'instead it rejected to value\n' + `  ${utils.printReceived(reason)}`);
    return Promise.reject(err);
  });
};

const makeRejectMatcher = (matcherName, matcher, isNot, actual) => function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  const matcherStatement = `.rejects.${isNot ? 'not.' : ''}${matcherName}`;
  if (!isPromise(actual)) {
    throw new JestAssertionError(utils.matcherHint(matcherStatement, 'received', '') + '\n\n' + `${utils.RECEIVED_COLOR('received')} value must be a Promise.\n` + utils.printWithType('Received', actual, utils.printReceived));
  }

  return actual.then(result => {
    const err = new JestAssertionError(utils.matcherHint(matcherStatement, 'received', '') + '\n\n' + `Expected ${utils.RECEIVED_COLOR('received')} Promise to reject, ` + 'instead it resolved to value\n' + `  ${utils.printReceived(result)}`);
    return Promise.reject(err);
  }, reason => makeThrowingMatcher(matcher, isNot, reason).apply(null, args));
};

const makeThrowingMatcher = (matcher, isNot, actual) => {
  return function throwingMatcher() {
    let throws = true;
    const matcherContext = Object.assign(
    // When throws is disabled, the matcher will not throw errors during test
    // execution but instead add them to the global matcher state. If a
    // matcher throws, test execution is normally stopped immediately. The
    // snapshot matcher uses it because we want to log all snapshot
    // failures in a test.
    { dontThrow: () => throws = false }, (0, _jest_matchers_object.getState)(), {
      equals: _jasmine_utils.equals,
      isNot,
      utils
    });
    let result;

    try {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      result = matcher.apply(matcherContext, [actual].concat(args));
    } catch (error) {
      if (matcher[_jest_matchers_object.INTERNAL_MATCHER_FLAG] === true && !(error instanceof JestAssertionError) && error.name !== 'PrettyFormatPluginError' &&
      // Guard for some environments (browsers) that do not support this feature.
      Error.captureStackTrace) {
        // Try to remove this and deeper functions from the stack trace frame.
        Error.captureStackTrace(error, throwingMatcher);
      }
      throw error;
    }

    _validateResult(result);

    (0, _jest_matchers_object.getState)().assertionCalls++;

    if (result.pass && isNot || !result.pass && !isNot) {
      // XOR
      const message = getMessage(result.message);
      const error = new JestAssertionError(message);
      // Passing the result of the matcher with the error so that a custom
      // reporter could access the actual and expected objects of the result
      // for example in order to display a custom visual diff
      error.matcherResult = result;
      // Try to remove this function from the stack trace frame.
      // Guard for some environments (browsers) that do not support this feature.
      if (Error.captureStackTrace) {
        Error.captureStackTrace(error, throwingMatcher);
      }

      if (throws) {
        throw error;
      } else {
        (0, _jest_matchers_object.getState)().suppressedErrors.push(error);
      }
    }
  };
};

expect.extend = matchers => (0, _jest_matchers_object.setMatchers)(matchers, false);

expect.anything = _asymmetric_matchers.anything;
expect.any = _asymmetric_matchers.any;
expect.objectContaining = _asymmetric_matchers.objectContaining;
expect.arrayContaining = _asymmetric_matchers.arrayContaining;
expect.stringContaining = _asymmetric_matchers.stringContaining;
expect.stringMatching = _asymmetric_matchers.stringMatching;

const _validateResult = result => {
  if (typeof result !== 'object' || typeof result.pass !== 'boolean' || result.message && typeof result.message !== 'string' && typeof result.message !== 'function') {
    throw new Error('Unexpected return from a matcher function.\n' + 'Matcher functions should ' + 'return an object in the following format:\n' + '  {message?: string | function, pass: boolean}\n' + `'${utils.stringify(result)}' was returned`);
  }
};

// add default jest matchers
(0, _jest_matchers_object.setMatchers)(_matchers2.default, true);
(0, _jest_matchers_object.setMatchers)(_spy_matchers2.default, true);
(0, _jest_matchers_object.setMatchers)(_to_throw_matchers2.default, true);

expect.addSnapshotSerializer = () => void 0;
expect.assertions = expected => {
  (0, _jest_matchers_object.getState)().expectedAssertionsNumber = expected;
};
expect.hasAssertions = expected => {
  utils.ensureNoExpected(expected, '.hasAssertions');
  (0, _jest_matchers_object.getState)().isExpectingAssertions = true;
};
expect.getState = _jest_matchers_object.getState;
expect.setState = _jest_matchers_object.setState;
expect.extractExpectedAssertionsErrors = _extract_expected_assertions_errors2.default;

module.exports = expect;