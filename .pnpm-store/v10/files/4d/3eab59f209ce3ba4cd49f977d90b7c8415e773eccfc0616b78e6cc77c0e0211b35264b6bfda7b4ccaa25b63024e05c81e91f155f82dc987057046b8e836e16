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

const {convertFetch} = require('./ConvertToExecuteFunction');

import type {RequestParameters} from '../util/RelayConcreteNode';
import type {CacheConfig, Variables} from '../util/RelayRuntimeTypes';
import type {
  FetchFunction,
  GraphQLResponse,
  LogRequestInfoFunction,
  INetwork,
  SubscribeFunction,
  UploadableMap,
} from './RelayNetworkTypes';
import type RelayObservable from './RelayObservable';

/**
 * Creates an implementation of the `Network` interface defined in
 * `RelayNetworkTypes` given `fetch` and `subscribe` functions.
 */
function create(
  fetchFn: FetchFunction,
  subscribe?: SubscribeFunction,
): INetwork {
  // Convert to functions that returns RelayObservable.
  const observeFetch = convertFetch(fetchFn);

  function execute(
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: ?UploadableMap,
    logRequestInfo: ?LogRequestInfoFunction,
  ): RelayObservable<GraphQLResponse> {
    if (request.operationKind === 'subscription') {
      invariant(
        subscribe,
        'RelayNetwork: This network layer does not support Subscriptions. ' +
          'To use Subscriptions, provide a custom network layer.',
      );

      invariant(
        !uploadables,
        'RelayNetwork: Cannot provide uploadables while subscribing.',
      );
      return subscribe(request, variables, cacheConfig);
    }

    const pollInterval = cacheConfig.poll;
    if (pollInterval != null) {
      invariant(
        !uploadables,
        'RelayNetwork: Cannot provide uploadables while polling.',
      );
      return observeFetch(request, variables, {force: true}).poll(pollInterval);
    }

    return observeFetch(
      request,
      variables,
      cacheConfig,
      uploadables,
      logRequestInfo,
    );
  }

  return {execute};
}

module.exports = {create};
