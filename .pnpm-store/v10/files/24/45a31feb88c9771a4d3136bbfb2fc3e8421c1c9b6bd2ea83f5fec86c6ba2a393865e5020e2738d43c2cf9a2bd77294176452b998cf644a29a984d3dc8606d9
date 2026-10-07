/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 * @typechecks
 */
'use strict';

var invariant = require("./invariant");

/**
 * Constructs an enumeration with keys equal to their value. If the value is an
 * object, the method is run recursively, including the parent key as a suffix.
 * An optional prefix can be provided that will be prepended to each value, but
 * note that if a prefix is provided, the types the values of the object are
 * just strings, not string literals.
 *
 * For example:
 *
 *   var ACTIONS = keyMirror({FOO: '', BAR: { BAZ: '', BOZ: '' }}});
 *   ACTIONS.BAR.BAZ = 'BAR.BAZ';
 *
 *   Input:  {key1: '', key2: { nested1: '', nested2: '' }}}
 *   Output: {key1: key1, key2: { nested1: nested1, nested2: nested2 }}}
 *
 *   var CONSTANTS = keyMirror({FOO: {BAR: ''}}, 'NameSpace');
 *   console.log(CONSTANTS.FOO.BAR); // NameSpace.FOO.BAR
 */
var keyMirrorRecursive = function keyMirrorRecursive(obj, prefix) {
  var ret = {};
  !isObject(obj) ? process.env.NODE_ENV !== "production" ? invariant(false, 'keyMirrorRecursive(...): Argument must be an object.') : invariant(false) : void 0;

  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    var val = obj[key];
    var newPrefix = prefix != null && Boolean(prefix) ? prefix + '.' + key : key;

    if (isObject(val)) {
      val = keyMirrorRecursive(val, newPrefix);
    } else {
      val = newPrefix;
    }

    ret[key] = val;
  }

  return ret;
};

function isObject(obj) {
  return obj instanceof Object && !Array.isArray(obj);
}

module.exports = keyMirrorRecursive;