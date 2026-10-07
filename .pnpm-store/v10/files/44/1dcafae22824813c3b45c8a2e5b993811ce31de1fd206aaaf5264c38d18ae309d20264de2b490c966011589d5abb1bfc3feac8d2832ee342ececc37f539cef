/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks
 */
'use strict';
/**
 * The everySet() method tests whether all elements in the given Set pass the
 * test implemented by the provided function.
 */

function everySet(set, callback, context) {
  var iterator = set.entries();
  var current = iterator.next();

  while (!current.done) {
    var entry = current.value;

    if (!callback.call(context, entry[1], entry[0], set)) {
      return false;
    }

    current = iterator.next();
  }

  return true;
}

module.exports = everySet;