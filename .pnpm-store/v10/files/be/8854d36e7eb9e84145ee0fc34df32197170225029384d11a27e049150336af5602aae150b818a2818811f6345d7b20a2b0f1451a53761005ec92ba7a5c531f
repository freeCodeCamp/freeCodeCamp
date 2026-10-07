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

var RelayDeclarativeMutationConfig = require('../mutations/RelayDeclarativeMutationConfig');

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var warning = require("fbjs/lib/warning");

var _require = require('../query/GraphQLTag'),
    getRequest = _require.getRequest;

var _require2 = require('../store/RelayModernOperationDescriptor'),
    createOperationDescriptor = _require2.createOperationDescriptor;

var _require3 = require('../store/RelayModernSelector'),
    createReaderSelector = _require3.createReaderSelector;

function requestSubscription(environment, config) {
  var subscription = getRequest(config.subscription);

  if (subscription.params.operationKind !== 'subscription') {
    throw new Error('requestSubscription: Must use Subscription operation');
  }

  var configs = config.configs,
      onCompleted = config.onCompleted,
      onError = config.onError,
      onNext = config.onNext,
      variables = config.variables,
      cacheConfig = config.cacheConfig;
  var operation = createOperationDescriptor(subscription, variables, cacheConfig);
  process.env.NODE_ENV !== "production" ? warning(!(config.updater && configs), 'requestSubscription: Expected only one of `updater` and `configs` to be provided') : void 0;

  var _ref = configs ? RelayDeclarativeMutationConfig.convert(configs, subscription, null
  /* optimisticUpdater */
  ,
  /* optimisticUpdater */
  config.updater) : config,
      updater = _ref.updater;

  var sub = environment.execute({
    operation: operation,
    updater: updater
  }).subscribe({
    next: function next(responses) {
      if (onNext != null) {
        var selector = operation.fragment;
        var nextID;

        if (Array.isArray(responses)) {
          var _responses$, _responses$$extension;

          nextID = (_responses$ = responses[0]) === null || _responses$ === void 0 ? void 0 : (_responses$$extension = _responses$.extensions) === null || _responses$$extension === void 0 ? void 0 : _responses$$extension.__relay_subscription_root_id;
        } else {
          var _responses$extensions;

          nextID = (_responses$extensions = responses.extensions) === null || _responses$extensions === void 0 ? void 0 : _responses$extensions.__relay_subscription_root_id;
        }

        if (typeof nextID === 'string') {
          selector = createReaderSelector(selector.node, nextID, selector.variables, selector.owner);
        }

        var data = environment.lookup(selector).data; // $FlowFixMe[incompatible-cast]

        onNext(data);
      }
    },
    error: onError,
    complete: onCompleted
  });
  return {
    dispose: sub.unsubscribe
  };
}

module.exports = requestSubscription;