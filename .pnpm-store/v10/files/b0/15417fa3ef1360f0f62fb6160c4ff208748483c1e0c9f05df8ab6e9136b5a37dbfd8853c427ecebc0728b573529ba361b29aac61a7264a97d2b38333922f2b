"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/**
 * Returns a flattened array that represents the DFS traversal of the supplied
 * input array. For example:
 *
 *   var deep = ["a", ["b", "c"], "d", {"e": [1, 2]}, [["f"], "g"]];
 *   var flat = flattenArray(deep);
 *   console.log(flat);
 *   > ["a", "b", "c", "d", {"e": [1, 2]}, "f", "g"];
 *
 * @see https://github.com/jonschlinkert/arr-flatten
 * @copyright 2014-2015 Jon Schlinkert
 * @license MIT
 */
function flattenArray(array) {
  var result = [];
  flatten(array, result);
  return result;
}

function flatten(array, result) {
  var length = array.length;
  var ii = 0;

  while (length--) {
    var current = array[ii++];

    if (Array.isArray(current)) {
      flatten(current, result);
    } else {
      result.push(current);
    }
  }
}

module.exports = flattenArray;