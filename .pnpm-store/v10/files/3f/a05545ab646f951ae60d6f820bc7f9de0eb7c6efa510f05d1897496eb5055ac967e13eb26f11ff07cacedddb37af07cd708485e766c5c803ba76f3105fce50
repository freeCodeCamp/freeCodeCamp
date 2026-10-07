"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var invariant = require("./invariant");
/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */


function toArray(obj) {
  var length = obj.length; // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
  // in old versions of Safari).

  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== "production" ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;
  !(typeof length === 'number') ? process.env.NODE_ENV !== "production" ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;
  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== "production" ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;
  !(typeof obj.callee !== 'function') ? process.env.NODE_ENV !== "production" ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0; // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
  // without method will throw during the slice call and skip straight to the
  // fallback.

  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {// IE < 9 does not support Array#slice on collections objects
    }
  } // Fall back to copying key by key. This assumes all keys have a value,
  // so will not preserve sparsely populated inputs.


  var ret = Array(length);

  for (var ii = 0; ii < length; ii++) {
    ret[ii] = obj[ii];
  }

  return ret;
}
/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */


function hasArrayNature(obj) {
  return (// not null/false
    !!obj && ( // arrays are objects, NodeLists are functions in Safari
    typeof obj == 'object' || typeof obj == 'function') && // quacks like an array
    'length' in obj && // not window
    !('setInterval' in obj) && // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    typeof obj.nodeType != 'number' && ( // a real array
    Array.isArray(obj) || // arguments
    'callee' in obj || // HTMLCollection/NodeList
    'item' in obj)
  );
}
/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */


function createArrayFromMixed(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray(obj);
  }
}

module.exports = createArrayFromMixed;