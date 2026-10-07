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

const inferRootArgumentDefinitions = require('../core/inferRootArgumentDefinitions');

import type CompilerContext from '../core/CompilerContext';
import type {Root} from '../core/IR';

/**
 * Refines the argument definitions for operations to remove unused arguments
 * due to statically pruned conditional branches (e.g. because of overriding
 * a variable used in `@include()` to be false).
 */
function skipUnusedVariablesTransform(
  context: CompilerContext,
): CompilerContext {
  const contextWithUsedArguments = inferRootArgumentDefinitions(context);
  return context.withMutations(ctx => {
    let nextContext = ctx;
    for (const node of nextContext.documents()) {
      if (node.kind !== 'Root') {
        continue;
      }
      const usedArguments = new Set(
        contextWithUsedArguments
          .getRoot(node.name)
          .argumentDefinitions.map(argDef => argDef.name),
      );
      // Remove unused argument definitions
      const usedArgumentDefinitions = node.argumentDefinitions.filter(argDef =>
        usedArguments.has(argDef.name),
      );
      if (usedArgumentDefinitions.length !== node.argumentDefinitions.length) {
        nextContext = nextContext.replace(
          ({
            ...node,
            argumentDefinitions: usedArgumentDefinitions,
          }: Root),
        );
      }
    }
    return nextContext;
  });
}

module.exports = {
  transform: skipUnusedVariablesTransform,
};
