/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var invariant = require('invariant');

var _require = require('./RelayDefaultHandleKey'),
    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;
/**
 * @internal
 *
 * Helper to create a unique name for a handle field based on the handle name, handle key and
 * source field.
 */


function getRelayHandleKey(handleName, key, fieldName) {
  if (key && key !== DEFAULT_HANDLE_KEY) {
    return "__".concat(key, "_").concat(handleName);
  }

  !(fieldName != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'getRelayHandleKey: Expected either `fieldName` or `key` in `handle` to be provided') : invariant(false) : void 0;
  return "__".concat(fieldName, "_").concat(handleName);
}

module.exports = getRelayHandleKey;