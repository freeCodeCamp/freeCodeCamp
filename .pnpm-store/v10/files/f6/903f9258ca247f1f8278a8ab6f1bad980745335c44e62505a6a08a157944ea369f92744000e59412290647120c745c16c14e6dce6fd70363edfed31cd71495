/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+relay
 */
'use strict'; // $FlowFixMe[method-unbinding] added when improving typing for this parameters

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmptyObject(obj) {
  for (var _key in obj) {
    if (hasOwnProperty.call(obj, _key)) {
      return false;
    }
  }

  return true;
}

module.exports = isEmptyObject;