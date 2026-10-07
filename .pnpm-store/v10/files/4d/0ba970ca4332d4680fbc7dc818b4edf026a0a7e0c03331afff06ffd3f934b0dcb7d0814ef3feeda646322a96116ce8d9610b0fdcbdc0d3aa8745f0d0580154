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

const SCHEMA_EXTENSION =
  'directive @DEPRECATED__relay_ignore_unused_variables_error on QUERY | MUTATION | SUBSCRIPTION';

/**
 * Validates that there are no unused variables in the operation.
 * former `graphql-js`` NoUnusedVariablesRule
 */
function validateUnusedVariablesTransform(
  context: CompilerContext,
): CompilerContext {
  const contextWithUsedArguments = inferRootArgumentDefinitions(context);
  eachWithCombinedError(context.documents(), node => {
    if (node.kind !== 'Root') {
      return;
    }
    const rootArgumentLocations = new Map(
      node.argumentDefinitions.map(arg => [arg.name, arg.loc]),
    );
    const nodeWithUsedArguments = contextWithUsedArguments.getRoot(node.name);
    const usedArguments = argumentDefinitionsToMap(
      nodeWithUsedArguments.argumentDefinitions,
    );
    for (const usedArgumentName of usedArguments.keys()) {
      rootArgumentLocations.delete(usedArgumentName);
    }

    const ignoreErrorDirective = node.directives.find(
      ({name}) => name === 'DEPRECATED__relay_ignore_unused_variables_error',
    );
    if (rootArgumentLocations.size > 0 && !ignoreErrorDirective) {
      const isPlural = rootArgumentLocations.size > 1;
      throw createUserError(
        `Variable${isPlural ? 's' : ''} '$${Array.from(
          rootArgumentLocations.keys(),
        ).join("', '$")}' ${isPlural ? 'are' : 'is'} never used in operation '${
          node.name
        }'.`,
        Array.from(rootArgumentLocations.values()),
      );
    }
    if (rootArgumentLocations.size === 0 && ignoreErrorDirective) {
      throw createUserError(
        "Invalid usage of '@DEPRECATED__relay_ignore_unused_variables_error.'" +
          `No unused variables found in the query '${node.name}'`,
        [ignoreErrorDirective.loc],
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
  transform: validateUnusedVariablesTransform,
  SCHEMA_EXTENSION,
};
