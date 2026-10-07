/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
'use strict';
/**
 * Groups all items in the array using the specified function. An object will
 * be returned where the keys are the group names, and the values are arrays of
 * all the items in that group.
 *
 * @param {array} array
 * @param {function} fn Should return a string with a group name
 * @return {object} items grouped using fn
 */

function groupArray(array, fn) {
  var ret = {};

  for (var ii = 0; ii < array.length; ii++) {
    var result = fn.call(array, array[ii], ii);

    if (!ret[result]) {
      ret[result] = [];
    }

    ret[result].push(array[ii]);
  }

  return ret;
}

module.exports = groupArray;