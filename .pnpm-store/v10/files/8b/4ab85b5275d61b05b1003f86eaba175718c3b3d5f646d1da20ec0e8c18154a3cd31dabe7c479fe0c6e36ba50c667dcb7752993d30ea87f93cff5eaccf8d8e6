/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// TODO: This is only used with `ArgumentValue` types, so it could be simpler.
// flowlint ambiguous-object-type:error
'use strict';

var aStackPool = [];
var bStackPool = [];
/**
 * Checks if two values are equal. Values may be primitives, arrays, or objects.
 * Returns true if both arguments have the same keys and values.
 *
 * @see http://underscorejs.org
 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * @license MIT
 */

function areEqualArgValues(a, b) {
  var aStack = aStackPool.length ? aStackPool.pop() : [];
  var bStack = bStackPool.length ? bStackPool.pop() : [];
  var result = eq(a, b, aStack, bStack);
  aStack.length = 0;
  bStack.length = 0;
  aStackPool.push(aStack);
  bStackPool.push(bStack);
  return result;
}

function eq(a, b, aStack, bStack) {
  if (a === b) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    return a !== 0 || 1 / a === 1 / b;
  }

  if (a == null || b == null) {
    // a or b can be `null` or `undefined`
    return false;
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  } // $FlowFixMe[method-unbinding] added when improving typing for this parameters


  var objToStr = Object.prototype.toString;
  var className = objToStr.call(a);

  if (className !== objToStr.call(b)) {
    return false;
  }

  switch (className) {
    case '[object String]':
      return a === String(b);

    case '[object Number]':
      return isNaN(a) || isNaN(b) ? false : a === Number(b);

    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;

    case '[object RegExp]':
      return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.ignoreCase === b.ignoreCase;
  } // Assume equality for cyclic structures.


  var length = aStack.length;

  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  }

  aStack.push(a);
  bStack.push(b);
  var size = 0; // Recursively compare objects and arrays.

  if (className === '[object Array]') {
    size = a.length;

    if (size !== b.length) {
      return false;
    } // Deep compare the contents, ignoring non-numeric properties.


    while (size--) {
      if (!eq(a[size], b[size], aStack, bStack)) {
        return false;
      }
    }
  } else {
    if (a.constructor !== b.constructor) {
      return false;
    }

    if (a.hasOwnProperty('valueOf') && b.hasOwnProperty('valueOf')) {
      return a.valueOf() === b.valueOf();
    }

    var keys = Object.keys(a);

    if (keys.length !== Object.keys(b).length) {
      return false;
    }

    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === '_owner') {
        // HACK: Comparing deeply nested React trees is slow since you end up
        // comparing the entire tree (all ancestors and all children) and
        // likely not what you want if you're comparing two elements with
        // areEqualArgValues. We bail out here for now.
        continue;
      }

      if (!b.hasOwnProperty(keys[i]) || !eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
        return false;
      }
    }
  }

  aStack.pop();
  bStack.pop();
  return true;
}

module.exports = areEqualArgValues;