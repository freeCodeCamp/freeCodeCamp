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

var everySet = require("./everySet");
/**
 * Checks if two sets are equal
 */


function equalsSet(one, two) {
  if (one.size !== two.size) {
    return false;
  }

  return everySet(one, function (value) {
    return two.has(value);
  });
}

module.exports = equalsSet;