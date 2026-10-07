/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const IRTransformer = require('../core/IRTransformer');

import type CompilerContext from '../core/CompilerContext';

function skipNode() {
  return null;
}

/**
 * A transform that removes field `splitOperations`. Intended for use when e.g.
 * printing queries to send to a GraphQL server.
 */
function skipSplitOperationTransform(
  context: CompilerContext,
): CompilerContext {
  return IRTransformer.transform(context, {
    SplitOperation: skipNode,
  });
}

module.exports = {
  transform: skipSplitOperationTransform,
};
