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

var RelayDeclarativeMutationConfig = require('./RelayDeclarativeMutationConfig');

var invariant = require('invariant');

var isRelayModernEnvironment = require('../store/isRelayModernEnvironment');

var _require = require('../query/GraphQLTag'),
    getRequest = _require.getRequest;

var _require2 = require('../store/RelayModernOperationDescriptor'),
    createOperationDescriptor = _require2.createOperationDescriptor;

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function applyOptimisticMutation(environment, config) {
  !isRelayModernEnvironment(environment) ? process.env.NODE_ENV !== "production" ? invariant(false, 'commitMutation: expected `environment` to be an instance of ' + '`RelayModernEnvironment`.') : invariant(false) : void 0;
  var mutation = getRequest(config.mutation);

  if (mutation.params.operationKind !== 'mutation') {
    throw new Error('commitMutation: Expected mutation operation');
  }

  var optimisticUpdater = config.optimisticUpdater;
  var configs = config.configs,
      optimisticResponse = config.optimisticResponse,
      variables = config.variables;
  var operation = createOperationDescriptor(mutation, variables);

  if (configs) {
    var _RelayDeclarativeMuta = RelayDeclarativeMutationConfig.convert(configs, mutation, optimisticUpdater);

    optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
  }

  return environment.applyMutation({
    operation: operation,
    response: optimisticResponse,
    updater: optimisticUpdater
  });
}

module.exports = applyOptimisticMutation;