'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jestMatcherUtils = require('jest-matcher-utils');

var _jasmine_utils = require('./jasmine_utils');

var _utils = require('./utils');

const CALL_PRINT_LIMIT = 3; /**
                             * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                             *
                             * This source code is licensed under the MIT license found in the
                             * LICENSE file in the root directory of this source tree.
                             *
                             * 
                             */

const LAST_CALL_PRINT_LIMIT = 1;


const createToBeCalledMatcher = matcherName => (received, expected) => {
  (0, _jestMatcherUtils.ensureNoExpected)(expected, matcherName);
  ensureMock(received, matcherName);

  const receivedIsSpy = isSpy(received);
  const type = receivedIsSpy ? 'spy' : 'mock function';
  const receivedName = receivedIsSpy ? 'spy' : received.getMockName();
  const count = receivedIsSpy ? received.calls.count() : received.mock.calls.length;
  const calls = receivedIsSpy ? received.calls.all().map(x => x.args) : received.mock.calls;
  const pass = count > 0;
  const message = pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + matcherName, receivedName, '') + '\n\n' + `Expected ${type} not to be called ` + formatReceivedCalls(calls, CALL_PRINT_LIMIT, { sameSentence: true }) : () => (0, _jestMatcherUtils.matcherHint)(matcherName, receivedName, '') + '\n\n' + `Expected ${type} to have been called.`;

  return { message, pass };
};

const createToBeCalledWithMatcher = matcherName => function (received) {
  for (var _len = arguments.length, expected = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expected[_key - 1] = arguments[_key];
  }

  ensureMock(received, matcherName);

  const receivedIsSpy = isSpy(received);
  const type = receivedIsSpy ? 'spy' : 'mock function';
  const receivedName = receivedIsSpy ? 'spy' : received.getMockName();
  const calls = receivedIsSpy ? received.calls.all().map(x => x.args) : received.mock.calls;

  var _partition = (0, _utils.partition)(calls, call => (0, _jasmine_utils.equals)(call, expected, [_utils.iterableEquality])),
      _partition2 = _slicedToArray(_partition, 2);

  const match = _partition2[0],
        fail = _partition2[1];

  const pass = match.length > 0;

  const message = pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + matcherName, receivedName) + '\n\n' + `Expected ${type} not to have been called with:\n` + `  ${(0, _jestMatcherUtils.printExpected)(expected)}` : () => (0, _jestMatcherUtils.matcherHint)(matcherName, receivedName) + '\n\n' + `Expected ${type} to have been called with:\n` + formatMismatchedCalls(fail, expected, CALL_PRINT_LIMIT);

  return { message, pass };
};

const createLastCalledWithMatcher = matcherName => function (received) {
  for (var _len2 = arguments.length, expected = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    expected[_key2 - 1] = arguments[_key2];
  }

  ensureMock(received, matcherName);

  const receivedIsSpy = isSpy(received);
  const type = receivedIsSpy ? 'spy' : 'mock function';
  const receivedName = receivedIsSpy ? 'spy' : received.getMockName();
  const calls = receivedIsSpy ? received.calls.all().map(x => x.args) : received.mock.calls;
  const pass = (0, _jasmine_utils.equals)(calls[calls.length - 1], expected, [_utils.iterableEquality]);

  const message = pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + matcherName, receivedName) + '\n\n' + `Expected ${type} to not have been last called with:\n` + `  ${(0, _jestMatcherUtils.printExpected)(expected)}` : () => (0, _jestMatcherUtils.matcherHint)(matcherName, receivedName) + '\n\n' + `Expected ${type} to have been last called with:\n` + formatMismatchedCalls(calls, expected, LAST_CALL_PRINT_LIMIT);

  return { message, pass };
};

const spyMatchers = {
  lastCalledWith: createLastCalledWithMatcher('.lastCalledWith'),
  toBeCalled: createToBeCalledMatcher('.toBeCalled'),
  toBeCalledWith: createToBeCalledWithMatcher('.toBeCalledWith'),
  toHaveBeenCalled: createToBeCalledMatcher('.toHaveBeenCalled'),
  toHaveBeenCalledTimes(received, expected) {
    const matcherName = '.toHaveBeenCalledTimes';
    (0, _jestMatcherUtils.ensureExpectedIsNumber)(expected, matcherName);
    ensureMock(received, matcherName);

    const receivedIsSpy = isSpy(received);
    const type = receivedIsSpy ? 'spy' : 'mock function';
    const receivedName = receivedIsSpy ? 'spy' : received.getMockName();
    const count = receivedIsSpy ? received.calls.count() : received.mock.calls.length;
    const pass = count === expected;
    const message = pass ? () => (0, _jestMatcherUtils.matcherHint)('.not' + matcherName, receivedName, String(expected)) + `\n\n` + `Expected ${type} not to be called ` + `${(0, _jestMatcherUtils.EXPECTED_COLOR)((0, _jestMatcherUtils.pluralize)('time', expected))}, but it was` + ` called exactly ${(0, _jestMatcherUtils.RECEIVED_COLOR)((0, _jestMatcherUtils.pluralize)('time', count))}.` : () => (0, _jestMatcherUtils.matcherHint)(matcherName, receivedName, String(expected)) + '\n\n' + `Expected ${type} to have been called ` + `${(0, _jestMatcherUtils.EXPECTED_COLOR)((0, _jestMatcherUtils.pluralize)('time', expected))},` + ` but it was called ${(0, _jestMatcherUtils.RECEIVED_COLOR)((0, _jestMatcherUtils.pluralize)('time', count))}.`;

    return { message, pass };
  },
  toHaveBeenCalledWith: createToBeCalledWithMatcher('.toHaveBeenCalledWith'),
  toHaveBeenLastCalledWith: createLastCalledWithMatcher('.toHaveBeenLastCalledWith')
};

const isSpy = spy => spy.calls && typeof spy.calls.count === 'function';

const ensureMock = (mockOrSpy, matcherName) => {
  if (!mockOrSpy || (mockOrSpy.calls === undefined || mockOrSpy.calls.all === undefined) && mockOrSpy._isMockFunction !== true) {
    throw new Error((0, _jestMatcherUtils.matcherHint)('[.not]' + matcherName, 'jest.fn()', '') + '\n\n' + `${(0, _jestMatcherUtils.RECEIVED_COLOR)('jest.fn()')} value must be a mock function ` + `or spy.\n` + (0, _jestMatcherUtils.printWithType)('Received', mockOrSpy, _jestMatcherUtils.printReceived));
  }
};

const getPrintedCalls = (calls, limit, sep, fn) => {
  const result = [];
  let i = calls.length;

  while (--i >= 0 && --limit >= 0) {
    result.push(fn(calls[i]));
  }

  return result.join(sep);
};

const formatReceivedCalls = (calls, limit, options) => {
  if (calls.length) {
    const but = options && options.sameSentence ? 'but' : 'But';
    const count = calls.length - limit;
    const printedCalls = getPrintedCalls(calls, limit, ', ', _jestMatcherUtils.printReceived);
    return `${but} it was ${options && options.isLast ? 'last ' : ''}called ` + `with:\n  ` + printedCalls + (count > 0 ? '\nand ' + (0, _jestMatcherUtils.RECEIVED_COLOR)((0, _jestMatcherUtils.pluralize)('more call', count)) + '.' : '');
  } else {
    return `But it was ${(0, _jestMatcherUtils.RECEIVED_COLOR)('not called')}.`;
  }
};

const formatMismatchedCalls = (calls, expected, limit) => {
  if (calls.length) {
    return getPrintedCalls(calls, limit, '\n\n', formatMismatchedArgs.bind(null, expected));
  } else {
    return `  ${(0, _jestMatcherUtils.printExpected)(expected)}\n` + `But it was ${(0, _jestMatcherUtils.RECEIVED_COLOR)('not called')}.`;
  }
};

const formatMismatchedArgs = (expected, received) => {
  const length = Math.max(expected.length, received.length);

  const printedArgs = [];
  for (let i = 0; i < length; i++) {
    if (!(0, _jasmine_utils.equals)(expected[i], received[i], [_utils.iterableEquality])) {
      printedArgs.push(`  ${(0, _jestMatcherUtils.printExpected)(expected[i])} as argument ${i + 1}, ` + `but it was called with ${(0, _jestMatcherUtils.printReceived)(received[i])}.`);
    } else if (i >= expected.length) {
      printedArgs.push(`  Did not expect argument ${i + 1} ` + `but it was called with ${(0, _jestMatcherUtils.printReceived)(received[i])}.`);
    }
  }

  return printedArgs.join('\n');
};

exports.default = spyMatchers;