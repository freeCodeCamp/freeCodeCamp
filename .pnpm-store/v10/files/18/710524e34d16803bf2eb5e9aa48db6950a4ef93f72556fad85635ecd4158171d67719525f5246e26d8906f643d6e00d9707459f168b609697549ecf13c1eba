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

const invariant = require('invariant');

const {getArgumentValues} = require('./RelayStoreUtils');

import type {
  NormalizationLocalArgumentDefinition,
  NormalizationArgument,
  NormalizationOperation,
} from '../util/NormalizationNode';
import type {ReaderFragment} from '../util/ReaderNode';
import type {Variables} from '../util/RelayRuntimeTypes';

/**
 * Determines the variables that are in scope for a fragment given the variables
 * in scope at the root query as well as any arguments applied at the fragment
 * spread via `@arguments`.
 *
 * Note that this is analagous to determining function arguments given a function call.
 */
function getFragmentVariables(
  fragment: ReaderFragment,
  rootVariables: Variables,
  argumentVariables: Variables,
): Variables {
  let variables;
  fragment.argumentDefinitions.forEach(definition => {
    if (argumentVariables.hasOwnProperty(definition.name)) {
      return;
    }
    // $FlowFixMe[cannot-spread-interface]
    variables = variables || {...argumentVariables};
    switch (definition.kind) {
      case 'LocalArgument':
        variables[definition.name] = definition.defaultValue;
        break;
      case 'RootArgument':
        if (!rootVariables.hasOwnProperty(definition.name)) {
          /*
           * Global variables passed as values of @arguments are not required to
           * be declared unless they are used by the callee fragment or a
           * descendant. In this case, the root variable may not be defined when
           * resolving the callee's variables. The value is explicitly set to
           * undefined to conform to the check in
           * RelayStoreUtils.getStableVariableValue() that variable keys are all
           * present.
           */
          // $FlowFixMe[incompatible-use]
          variables[definition.name] = undefined;
          break;
        }
        // $FlowFixMe[incompatible-use]
        // $FlowFixMe[cannot-write]
        variables[definition.name] = rootVariables[definition.name];
        break;
      default:
        (definition: empty);
        invariant(
          false,
          'RelayConcreteVariables: Unexpected node kind `%s` in fragment `%s`.',
          definition.kind,
          fragment.name,
        );
    }
  });
  return variables || argumentVariables;
}

/**
 * Determines the variables that are in scope for a given operation given values
 * for some/all of its arguments. Extraneous input variables are filtered from
 * the output, and missing variables are set to default values (if given in the
 * operation's definition).
 */
function getOperationVariables(
  operation: NormalizationOperation,
  variables: Variables,
): Variables {
  const operationVariables = {};
  operation.argumentDefinitions.forEach(def => {
    let value = def.defaultValue;
    // $FlowFixMe[cannot-write]
    if (variables[def.name] != null) {
      value = variables[def.name];
    }
    operationVariables[def.name] = value;
  });
  return operationVariables;
}

function getLocalVariables(
  currentVariables: Variables,
  argumentDefinitions: ?$ReadOnlyArray<NormalizationLocalArgumentDefinition>,
  args: ?$ReadOnlyArray<NormalizationArgument>,
): Variables {
  if (argumentDefinitions == null) {
    return currentVariables;
  }
  const nextVariables = {...currentVariables};
  const nextArgs = args ? getArgumentValues(args, currentVariables) : {};
  argumentDefinitions.forEach(def => {
    // $FlowFixMe[cannot-write]
    const value = nextArgs[def.name] ?? def.defaultValue;
    nextVariables[def.name] = value;
  });
  return nextVariables;
}

module.exports = {
  getLocalVariables,
  getFragmentVariables,
  getOperationVariables,
};
