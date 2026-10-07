/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

const {REQUEST, SPLIT_OPERATION} = require('./RelayConcreteNode');

import type {
  NormalizationOperation,
  NormalizationRootNode,
  NormalizationSplitOperation,
} from './NormalizationNode';

/**
 * OperationLoaders can return either a NormalizationSplitOperation or
 * ConcreteRequest.
 */
function getOperation(
  node: NormalizationRootNode,
): NormalizationSplitOperation | NormalizationOperation {
  switch (node.kind) {
    case REQUEST:
      return node.operation;
    case SPLIT_OPERATION:
    default:
      return node;
  }
}

module.exports = getOperation;
