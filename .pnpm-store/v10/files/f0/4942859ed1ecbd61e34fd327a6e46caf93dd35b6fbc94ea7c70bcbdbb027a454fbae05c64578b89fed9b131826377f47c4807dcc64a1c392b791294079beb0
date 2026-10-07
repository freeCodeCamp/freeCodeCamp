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

const {
  createUserError,
  eachWithCombinedError,
} = require('../core/CompilerError');

import type CompilerContext from '../core/CompilerContext';
import type {ArgumentDefinition} from '../core/IR';

/**
 * Validates that all global variables used in operations are defined at the
 * root. This isn't a real transform as it returns the original context, but
 * has to happen before other transforms strip certain variable usages.
 */
function validateGlobalVariablesTransform(
  context: CompilerContext,
): CompilerContext {
  const contextWithUsedArguments = inferRootArgumentDefinitions(context);
  eachWithCombinedError(context.documents(), node => {
    if (node.kind !== 'Root') {
      return;
    }
    const nodeWithUsedArguments = contextWithUsedArguments.getRoot(node.name);
    const definedArguments = argumentDefinitionsToMap(node.argumentDefinitions);
    const usedArguments = argumentDefinitionsToMap(
      nodeWithUsedArguments.argumentDefinitions,
    );
    // All used arguments must be defined
    const undefinedVariables = [];
    for (const argDef of usedArguments.values()) {
      if (!definedArguments.has(argDef.name)) {
        undefinedVariables.push(argDef);
      }
    }
    if (undefinedVariables.length !== 0) {
      throw createUserError(
        `Operation '${
          node.name
        }' references undefined variable(s):\n${undefinedVariables
          .map(
            argDef =>
              `- \$${argDef.name}: ${context
                .getSchema()
                .getTypeString(argDef.type)}`,
          )
          .join('\n')}.`,
        undefinedVariables.map(argDef => argDef.loc),
      );
    }
  });
  return context;
}

function argumentDefinitionsToMap<T: ArgumentDefinition>(
  argDefs: $ReadOnlyArray<T>,
): Map<string, T> {
  const map = new Map();
  for (const argDef of argDefs) {
    map.set(argDef.name, argDef);
  }
  return map;
}

module.exports = {
  transform: validateGlobalVariablesTransform,
};
