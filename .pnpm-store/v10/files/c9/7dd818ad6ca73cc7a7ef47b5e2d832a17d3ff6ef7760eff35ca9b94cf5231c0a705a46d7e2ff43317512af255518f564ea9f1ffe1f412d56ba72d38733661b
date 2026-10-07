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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var invariant = require('invariant');

var _require = require('./RelayStoreUtils'),
    getArgumentValues = _require.getArgumentValues;

/**
 * Determines the variables that are in scope for a fragment given the variables
 * in scope at the root query as well as any arguments applied at the fragment
 * spread via `@arguments`.
 *
 * Note that this is analagous to determining function arguments given a function call.
 */
function getFragmentVariables(fragment, rootVariables, argumentVariables) {
  var variables;
  fragment.argumentDefinitions.forEach(function (definition) {
    if (argumentVariables.hasOwnProperty(definition.name)) {
      return;
    } // $FlowFixMe[cannot-spread-interface]


    variables = variables || (0, _objectSpread2["default"])({}, argumentVariables);

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
        } // $FlowFixMe[incompatible-use]
        // $FlowFixMe[cannot-write]


        variables[definition.name] = rootVariables[definition.name];
        break;

      default:
        definition;
        !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayConcreteVariables: Unexpected node kind `%s` in fragment `%s`.', definition.kind, fragment.name) : invariant(false) : void 0;
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


function getOperationVariables(operation, variables) {
  var operationVariables = {};
  operation.argumentDefinitions.forEach(function (def) {
    var value = def.defaultValue; // $FlowFixMe[cannot-write]

    if (variables[def.name] != null) {
      value = variables[def.name];
    }

    operationVariables[def.name] = value;
  });
  return operationVariables;
}

function getLocalVariables(currentVariables, argumentDefinitions, args) {
  if (argumentDefinitions == null) {
    return currentVariables;
  }

  var nextVariables = (0, _objectSpread2["default"])({}, currentVariables);
  var nextArgs = args ? getArgumentValues(args, currentVariables) : {};
  argumentDefinitions.forEach(function (def) {
    var _nextArgs$def$name;

    // $FlowFixMe[cannot-write]
    var value = (_nextArgs$def$name = nextArgs[def.name]) !== null && _nextArgs$def$name !== void 0 ? _nextArgs$def$name : def.defaultValue;
    nextVariables[def.name] = value;
  });
  return nextVariables;
}

module.exports = {
  getLocalVariables: getLocalVariables,
  getFragmentVariables: getFragmentVariables,
  getOperationVariables: getOperationVariables
};