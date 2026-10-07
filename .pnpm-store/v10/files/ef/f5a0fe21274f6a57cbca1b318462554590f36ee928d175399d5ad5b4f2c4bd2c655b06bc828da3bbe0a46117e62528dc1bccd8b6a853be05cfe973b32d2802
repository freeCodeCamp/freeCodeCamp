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
import type {Field} from '../core/IR';

/**
 * A transform that removes field `handles`. Intended for use when e.g.
 * printing queries to send to a GraphQL server.
 */
function skipHandleFieldTransform(context: CompilerContext): CompilerContext {
  return IRTransformer.transform(context, {
    LinkedField: visitField,
    ScalarField: visitField,
  });
}

function visitField<F: Field>(field: F): ?F {
  // $FlowFixMe[incompatible-use]
  const transformedNode = this.traverse(field);
  if (transformedNode.handles) {
    return {
      ...transformedNode,
      handles: null,
    };
  }
  return transformedNode;
}

module.exports = {
  transform: skipHandleFieldTransform,
};
