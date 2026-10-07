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
// flowlint ambiguous-object-type:error
'use strict';

var _require = require('./RelayConcreteNode'),
    REQUEST = _require.REQUEST,
    SPLIT_OPERATION = _require.SPLIT_OPERATION;

/**
 * OperationLoaders can return either a NormalizationSplitOperation or
 * ConcreteRequest.
 */
function getOperation(node) {
  switch (node.kind) {
    case REQUEST:
      return node.operation;

    case SPLIT_OPERATION:
    default:
      return node;
  }
}

module.exports = getOperation;