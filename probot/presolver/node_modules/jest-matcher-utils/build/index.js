'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcherHint = exports.pluralize = exports.ensureNumbers = exports.ensureExpectedIsNumber = exports.ensureActualIsNumber = exports.ensureNoExpected = exports.printWithType = exports.printExpected = exports.printReceived = exports.highlightTrailingWhitespace = exports.stringify = exports.SUGGEST_TO_EQUAL = exports.RECEIVED_COLOR = exports.EXPECTED_COLOR = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _jestGetType = require('jest-get-type');

var _jestGetType2 = _interopRequireDefault(_jestGetType);

var _prettyFormat = require('pretty-format');

var _prettyFormat2 = _interopRequireDefault(_prettyFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _prettyFormat$plugins = _prettyFormat2.default.plugins; /**
                                                             * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                             *
                                                             * This source code is licensed under the MIT license found in the
                                                             * LICENSE file in the root directory of this source tree.
                                                             *
                                                             * 
                                                             */

const AsymmetricMatcher = _prettyFormat$plugins.AsymmetricMatcher,
      DOMCollection = _prettyFormat$plugins.DOMCollection,
      DOMElement = _prettyFormat$plugins.DOMElement,
      Immutable = _prettyFormat$plugins.Immutable,
      ReactElement = _prettyFormat$plugins.ReactElement,
      ReactTestComponent = _prettyFormat$plugins.ReactTestComponent;


const PLUGINS = [ReactTestComponent, ReactElement, DOMElement, DOMCollection, Immutable, AsymmetricMatcher];

const EXPECTED_COLOR = exports.EXPECTED_COLOR = _chalk2.default.green;
const RECEIVED_COLOR = exports.RECEIVED_COLOR = _chalk2.default.red;

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];

const SUGGEST_TO_EQUAL = exports.SUGGEST_TO_EQUAL = _chalk2.default.dim('Looks like you wanted to test for object/array equality with strict `toBe` matcher. You probably need to use `toEqual` instead.');

const stringify = exports.stringify = function (object) {
  let maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  const MAX_LENGTH = 10000;
  let result;

  try {
    result = (0, _prettyFormat2.default)(object, {
      maxDepth,
      min: true,
      plugins: PLUGINS
    });
  } catch (e) {
    result = (0, _prettyFormat2.default)(object, {
      callToJSON: false,
      maxDepth,
      min: true,
      plugins: PLUGINS
    });
  }

  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object, Math.floor(maxDepth / 2)) : result;
};

const highlightTrailingWhitespace = exports.highlightTrailingWhitespace = text => text.replace(/\s+$/gm, _chalk2.default.inverse('$&'));

const printReceived = exports.printReceived = object => RECEIVED_COLOR(highlightTrailingWhitespace(stringify(object)));
const printExpected = exports.printExpected = value => EXPECTED_COLOR(highlightTrailingWhitespace(stringify(value)));

const printWithType = exports.printWithType = (name, received, print) => {
  const type = (0, _jestGetType2.default)(received);
  return name + ':' + (type !== 'null' && type !== 'undefined' ? '\n  ' + type + ': ' : ' ') + print(received);
};

const ensureNoExpected = exports.ensureNoExpected = (expected, matcherName) => {
  matcherName || (matcherName = 'This');
  if (typeof expected !== 'undefined') {
    throw new Error(matcherHint('[.not]' + matcherName, undefined, '') + '\n\n' + 'Matcher does not accept any arguments.\n' + printWithType('Got', expected, printExpected));
  }
};

const ensureActualIsNumber = exports.ensureActualIsNumber = (actual, matcherName) => {
  matcherName || (matcherName = 'This matcher');
  if (typeof actual !== 'number') {
    throw new Error(matcherHint('[.not]' + matcherName) + '\n\n' + `Received value must be a number.\n` + printWithType('Received', actual, printReceived));
  }
};

const ensureExpectedIsNumber = exports.ensureExpectedIsNumber = (expected, matcherName) => {
  matcherName || (matcherName = 'This matcher');
  if (typeof expected !== 'number') {
    throw new Error(matcherHint('[.not]' + matcherName) + '\n\n' + `Expected value must be a number.\n` + printWithType('Got', expected, printExpected));
  }
};

const ensureNumbers = exports.ensureNumbers = (actual, expected, matcherName) => {
  ensureActualIsNumber(actual, matcherName);
  ensureExpectedIsNumber(expected, matcherName);
};

const pluralize = exports.pluralize = (word, count) => (NUMBERS[count] || count) + ' ' + word + (count === 1 ? '' : 's');

const matcherHint = exports.matcherHint = function (matcherName) {
  let received = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'received';
  let expected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'expected';
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const comment = options.comment,
        isDirectExpectCall = options.isDirectExpectCall,
        secondArgument = options.secondArgument;

  return _chalk2.default.dim('expect' + (isDirectExpectCall ? '' : '(')) + RECEIVED_COLOR(received) + _chalk2.default.dim((isDirectExpectCall ? '' : ')') + matcherName + '(') + EXPECTED_COLOR(expected) + (secondArgument ? `${_chalk2.default.dim(', ')}${EXPECTED_COLOR(secondArgument)}` : '') + _chalk2.default.dim(`)${comment ? ` // ${comment}` : ''}`);
};