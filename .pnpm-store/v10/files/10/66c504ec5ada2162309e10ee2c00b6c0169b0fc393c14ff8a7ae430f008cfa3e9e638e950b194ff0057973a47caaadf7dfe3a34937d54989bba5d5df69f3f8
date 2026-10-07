/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var invariant = require('invariant');

function getValueAtPath(data, path) {
  var result = data;

  var _iterator = (0, _createForOfIteratorHelper2["default"])(path),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (result == null) {
        return null;
      }

      if (typeof key === 'number') {
        !Array.isArray(result) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: Expected an array when extracting value at path. ' + "If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
        result = result[key];
      } else {
        !(typeof result === 'object' && !Array.isArray(result)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Relay: Expected an object when extracting value at path. ' + "If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
        result = result[key];
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

module.exports = getValueAtPath;