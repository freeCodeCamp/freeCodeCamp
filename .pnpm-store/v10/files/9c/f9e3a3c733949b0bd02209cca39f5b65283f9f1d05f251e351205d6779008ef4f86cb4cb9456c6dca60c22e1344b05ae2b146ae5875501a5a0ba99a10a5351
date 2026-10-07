"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var compareNumber = function compareNumber(a, b) {
  return a - b;
};
/**
 * Returns the minimum element as measured by a scoring function f. Returns the
 * first such element if there are ties.
 */


function minBy(as, f, compare) {
  compare = compare || compareNumber;
  var minA = undefined;
  var minB = undefined;
  var seenFirst = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = as[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var a = _step.value;
      var b = f(a);

      if (!seenFirst || compare(b, minB) < 0) {
        minA = a;
        minB = b;
        seenFirst = true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return minA;
}

module.exports = minBy;