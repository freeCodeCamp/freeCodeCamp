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

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var RelayDeclarativeMutationConfig = require('./RelayDeclarativeMutationConfig');

var invariant = require('invariant');

var isRelayModernEnvironment = require('../store/isRelayModernEnvironment');

var validateMutation = require('./validateMutation');

var warning = require("fbjs/lib/warning");

var _require = require('../query/GraphQLTag'),
    getRequest = _require.getRequest;

var _require2 = require('../store/ClientID'),
    generateUniqueClientID = _require2.generateUniqueClientID;

var _require3 = require('../store/RelayModernOperationDescriptor'),
    createOperationDescriptor = _require3.createOperationDescriptor;

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function commitMutation(environment, config) {
  !isRelayModernEnvironment(environment) ? process.env.NODE_ENV !== "production" ? invariant(false, 'commitMutation: expected `environment` to be an instance of ' + '`RelayModernEnvironment`.') : invariant(false) : void 0;
  var mutation = getRequest(config.mutation);

  if (mutation.params.operationKind !== 'mutation') {
    throw new Error('commitMutation: Expected mutation operation');
  }

  if (mutation.kind !== 'Request') {
    throw new Error('commitMutation: Expected mutation to be of type request');
  }

  var optimisticResponse = config.optimisticResponse,
      optimisticUpdater = config.optimisticUpdater,
      updater = config.updater;
  var configs = config.configs,
      cacheConfig = config.cacheConfig,
      onError = config.onError,
      onUnsubscribe = config.onUnsubscribe,
      variables = config.variables,
      uploadables = config.uploadables;
  var operation = createOperationDescriptor(mutation,
  /* $FlowFixMe[class-object-subtyping] added when improving typing for this
   * parameters */
  variables, cacheConfig, generateUniqueClientID()); // TODO: remove this check after we fix flow.

  if (typeof optimisticResponse === 'function') {
    optimisticResponse = optimisticResponse();
    process.env.NODE_ENV !== "production" ? warning(false, 'commitMutation: Expected `optimisticResponse` to be an object, ' + 'received a function.') : void 0;
  }

  if (process.env.NODE_ENV !== "production") {
    if (optimisticResponse instanceof Object) {
      validateMutation(optimisticResponse, mutation, variables);
    }
  }

  if (configs) {
    var _RelayDeclarativeMuta = RelayDeclarativeMutationConfig.convert(configs, mutation, optimisticUpdater, updater);

    optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
    updater = _RelayDeclarativeMuta.updater;
  }

  var errors = [];
  var subscription = environment.executeMutation({
    operation: operation,
    optimisticResponse: optimisticResponse,
    optimisticUpdater: optimisticUpdater,
    updater: updater,
    uploadables: uploadables
  }).subscribe({
    next: function next(payload) {
      if (Array.isArray(payload)) {
        payload.forEach(function (item) {
          if (item.errors) {
            errors.push.apply(errors, (0, _toConsumableArray2["default"])(item.errors));
          }
        });
      } else {
        if (payload.errors) {
          errors.push.apply(errors, (0, _toConsumableArray2["default"])(payload.errors));
        }
      }
    },
    complete: function complete() {
      var onCompleted = config.onCompleted;

      if (onCompleted) {
        var snapshot = environment.lookup(operation.fragment);
        onCompleted(snapshot.data, errors.length !== 0 ? errors : null);
      }
    },
    error: onError,
    unsubscribe: onUnsubscribe
  });
  return {
    dispose: subscription.unsubscribe
  };
}

module.exports = commitMutation;