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

var invariant = require('invariant');

var _require = require('./ConvertToExecuteFunction'),
    convertFetch = _require.convertFetch;

/**
 * Creates an implementation of the `Network` interface defined in
 * `RelayNetworkTypes` given `fetch` and `subscribe` functions.
 */
function create(fetchFn, subscribe) {
  // Convert to functions that returns RelayObservable.
  var observeFetch = convertFetch(fetchFn);

  function execute(request, variables, cacheConfig, uploadables, logRequestInfo) {
    if (request.operationKind === 'subscription') {
      !subscribe ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayNetwork: This network layer does not support Subscriptions. ' + 'To use Subscriptions, provide a custom network layer.') : invariant(false) : void 0;
      !!uploadables ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayNetwork: Cannot provide uploadables while subscribing.') : invariant(false) : void 0;
      return subscribe(request, variables, cacheConfig);
    }

    var pollInterval = cacheConfig.poll;

    if (pollInterval != null) {
      !!uploadables ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayNetwork: Cannot provide uploadables while polling.') : invariant(false) : void 0;
      return observeFetch(request, variables, {
        force: true
      }).poll(pollInterval);
    }

    return observeFetch(request, variables, cacheConfig, uploadables, logRequestInfo);
  }

  return {
    execute: execute
  };
}

module.exports = {
  create: create
};