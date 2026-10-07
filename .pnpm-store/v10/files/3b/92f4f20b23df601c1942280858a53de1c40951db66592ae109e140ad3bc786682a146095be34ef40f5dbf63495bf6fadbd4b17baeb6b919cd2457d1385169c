"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var isNode = require("./isNode");
/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */


function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;