/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

function sortObjectByKey(obj) {
  if (obj == null) {
    return obj;
  }

  var result = {};

  var _iterator = (0, _createForOfIteratorHelper2["default"])(Object.keys(obj).sort()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _key = _step.value;
      result[_key] = obj[_key];
    } // $FlowFixMe[incompatible-return]

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

module.exports = sortObjectByKey;