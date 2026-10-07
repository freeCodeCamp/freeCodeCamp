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

var areEqual = require("fbjs/lib/areEqual");

var invariant = require('invariant');

var _require = require('../util/RelayConcreteNode'),
    SCALAR_FIELD = _require.SCALAR_FIELD;

var _require2 = require('./RelayStoreUtils'),
    getHandleStorageKey = _require2.getHandleStorageKey;

/**
 * @private
 *
 * Creates a clone of the supplied `handleField` by finding the original scalar
 * field (on which the handle was declared) among the sibling `selections`.
 */
function cloneRelayScalarHandleSourceField(handleField, selections, variables) {
  var sourceField = selections.find(function (source) {
    return source.kind === SCALAR_FIELD && source.name === handleField.name && source.alias === handleField.alias && areEqual(source.args, handleField.args);
  });
  !(sourceField && sourceField.kind === SCALAR_FIELD) ? process.env.NODE_ENV !== "production" ? invariant(false, 'cloneRelayScalarHandleSourceField: Expected a corresponding source field for ' + 'handle `%s`.', handleField.handle) : invariant(false) : void 0;
  var handleKey = getHandleStorageKey(handleField, variables);
  return {
    kind: 'ScalarField',
    alias: sourceField.alias,
    name: handleKey,
    storageKey: handleKey,
    args: null
  };
}

module.exports = cloneRelayScalarHandleSourceField;