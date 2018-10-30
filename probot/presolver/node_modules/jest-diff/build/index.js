'use strict';

var _prettyFormat = require('pretty-format');

var _prettyFormat2 = _interopRequireDefault(_prettyFormat);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _jestGetType = require('jest-get-type');

var _jestGetType2 = _interopRequireDefault(_jestGetType);

var _diff_strings = require('./diff_strings');

var _diff_strings2 = _interopRequireDefault(_diff_strings);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var _prettyFormat$plugins = _prettyFormat2.default.plugins;
const AsymmetricMatcher = _prettyFormat$plugins.AsymmetricMatcher,
      DOMCollection = _prettyFormat$plugins.DOMCollection,
      DOMElement = _prettyFormat$plugins.DOMElement,
      Immutable = _prettyFormat$plugins.Immutable,
      ReactElement = _prettyFormat$plugins.ReactElement,
      ReactTestComponent = _prettyFormat$plugins.ReactTestComponent;


const PLUGINS = [ReactTestComponent, ReactElement, DOMElement, DOMCollection, Immutable, AsymmetricMatcher];
const FORMAT_OPTIONS = {
  plugins: PLUGINS
};
const FORMAT_OPTIONS_0 = Object.assign({}, FORMAT_OPTIONS, {
  indent: 0
});
const FALLBACK_FORMAT_OPTIONS = {
  callToJSON: false,
  maxDepth: 10,
  plugins: PLUGINS
};
const FALLBACK_FORMAT_OPTIONS_0 = Object.assign({}, FALLBACK_FORMAT_OPTIONS, {
  indent: 0
});

const MULTILINE_REGEXP = /[\r\n]/;

// Generate a string that will highlight the difference between two values
// with green and red. (similar to how github does code diffing)
function diff(a, b, options) {
  if (a === b) {
    return _constants.NO_DIFF_MESSAGE;
  }

  const aType = (0, _jestGetType2.default)(a);
  let expectedType = aType;
  let omitDifference = false;
  if (aType === 'object' && typeof a.asymmetricMatch === 'function') {
    if (a.$$typeof !== Symbol.for('jest.asymmetricMatcher')) {
      // Do not know expected type of user-defined asymmetric matcher.
      return null;
    }
    if (typeof a.getExpectedType !== 'function') {
      // For example, expect.anything() matches either null or undefined
      return null;
    }
    expectedType = a.getExpectedType();
    // Primitive types boolean and number omit difference below.
    // For example, omit difference for expect.stringMatching(regexp)
    omitDifference = expectedType === 'string';
  }

  if (expectedType !== (0, _jestGetType2.default)(b)) {
    return '  Comparing two different types of values.' + ` Expected ${_chalk2.default.green(expectedType)} but ` + `received ${_chalk2.default.red((0, _jestGetType2.default)(b))}.`;
  }

  if (omitDifference) {
    return null;
  }

  switch (aType) {
    case 'string':
      const multiline = MULTILINE_REGEXP.test(a) && b.indexOf('\n') !== -1;
      if (multiline) {
        return (0, _diff_strings2.default)(a, b, options);
      }
      return null;
    case 'number':
    case 'boolean':
      return null;
    case 'map':
      return compareObjects(sortMap(a), sortMap(b), options);
    case 'set':
      return compareObjects(sortSet(a), sortSet(b), options);
    default:
      return compareObjects(a, b, options);
  }
}

function sortMap(map) {
  return new Map(Array.from(map.entries()).sort());
}

function sortSet(set) {
  return new Set(Array.from(set.values()).sort());
}

function compareObjects(a, b, options) {
  let diffMessage;
  let hasThrown = false;

  try {
    diffMessage = (0, _diff_strings2.default)((0, _prettyFormat2.default)(a, FORMAT_OPTIONS_0), (0, _prettyFormat2.default)(b, FORMAT_OPTIONS_0), options, {
      a: (0, _prettyFormat2.default)(a, FORMAT_OPTIONS),
      b: (0, _prettyFormat2.default)(b, FORMAT_OPTIONS)
    });
  } catch (e) {
    hasThrown = true;
  }

  // If the comparison yields no results, compare again but this time
  // without calling `toJSON`. It's also possible that toJSON might throw.
  if (!diffMessage || diffMessage === _constants.NO_DIFF_MESSAGE) {
    diffMessage = (0, _diff_strings2.default)((0, _prettyFormat2.default)(a, FALLBACK_FORMAT_OPTIONS_0), (0, _prettyFormat2.default)(b, FALLBACK_FORMAT_OPTIONS_0), options, {
      a: (0, _prettyFormat2.default)(a, FALLBACK_FORMAT_OPTIONS),
      b: (0, _prettyFormat2.default)(b, FALLBACK_FORMAT_OPTIONS)
    });
    if (diffMessage !== _constants.NO_DIFF_MESSAGE && !hasThrown) {
      diffMessage = _constants.SIMILAR_MESSAGE + '\n\n' + diffMessage;
    }
  }

  return diffMessage;
}

module.exports = diff;