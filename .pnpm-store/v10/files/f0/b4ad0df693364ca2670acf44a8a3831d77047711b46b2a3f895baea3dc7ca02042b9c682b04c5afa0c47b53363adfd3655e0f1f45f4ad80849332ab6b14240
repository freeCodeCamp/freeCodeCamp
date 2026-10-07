/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const RelayObservable = require('../network/RelayObservable');

const fetchQueryInternal = require('./fetchQueryInternal');
const invariant = require('invariant');
const reportMissingRequiredFields = require('../util/reportMissingRequiredFields');

const {
  createOperationDescriptor,
} = require('../store/RelayModernOperationDescriptor');
const {getRequest} = require('./GraphQLTag');

import type {
  CacheConfig,
  FetchQueryFetchPolicy,
  GraphQLTaggedNode,
  IEnvironment,
  OperationDescriptor,
  OperationType,
  Snapshot,
  VariablesOf,
} from 'relay-runtime';

/**
 * Fetches the given query and variables on the provided environment,
 * and de-dupes identical in-flight requests.
 *
 * Observing a request:
 * ====================
 * fetchQuery returns an Observable which you can call .subscribe()
 * on. Subscribe optionally takes an Observer, which you can provide to
 * observe network events:
 *
 * ```
 * fetchQuery(environment, query, variables).subscribe({
 *   // Called when network requests starts
 *   start: (subsctiption) => {},
 *
 *   // Called after a payload is received and written to the local store
 *   next: (payload) => {},
 *
 *   // Called when network requests errors
 *   error: (error) => {},
 *
 *   // Called when network requests fully completes
 *   complete: () => {},
 *
 *   // Called when network request is unsubscribed
 *   unsubscribe: (subscription) => {},
 * });
 * ```
 *
 * Request Promise:
 * ================
 * The obervable can be converted to a Promise with .toPromise(), which will
 * resolve to a snapshot of the query data when the first response is received
 * from the server.
 *
 * ```
 * fetchQuery(environment, query, variables).toPromise().then((data) => {
 *   // ...
 * });
 * ```
 *
 * In-flight request de-duping:
 * ============================
 * By default, calling fetchQuery multiple times with the same
 * environment, query and variables will not initiate a new request if a request
 * for those same parameters is already in flight.
 *
 * A request is marked in-flight from the moment it starts until the moment it
 * fully completes, regardless of error or successful completion.
 *
 * NOTE: If the request completes _synchronously_, calling fetchQuery
 * a second time with the same arguments in the same tick will _NOT_ de-dupe
 * the request given that it will no longer be in-flight.
 *
 *
 * Data Retention:
 * ===============
 * This function will NOT retain query data, meaning that it is not guaranteed
 * that the fetched data will remain in the Relay store after the request has
 * completed.
 * If you need to retain the query data outside of the network request,
 * you need to use `environment.retain()`.
 *
 *
 * Cancelling requests:
 * ====================
 * If the disposable returned by subscribe is called while the
 * request is in-flight, the request will be cancelled.
 *
 * ```
 * const disposable = fetchQuery(...).subscribe(...);
 *
 * // This will cancel the request if it is in-flight.
 * disposable.dispose();
 * ```
 * NOTE: When using .toPromise(), the request cannot be cancelled.
 */
function fetchQuery<TQuery: OperationType>(
  environment: IEnvironment,
  query: GraphQLTaggedNode,
  variables: VariablesOf<TQuery>,
  options?: $ReadOnly<{|
    fetchPolicy?: FetchQueryFetchPolicy,
    networkCacheConfig?: CacheConfig,
  |}>,
): RelayObservable<$ElementType<TQuery, 'response'>> {
  const queryNode = getRequest(query);
  invariant(
    queryNode.params.operationKind === 'query',
    'fetchQuery: Expected query operation',
  );
  const networkCacheConfig = {
    force: true,
    ...options?.networkCacheConfig,
  };
  const operation = createOperationDescriptor(
    queryNode,
    variables,
    networkCacheConfig,
  );
  const fetchPolicy = options?.fetchPolicy ?? 'network-only';

  function readData(snapshot: Snapshot) {
    if (snapshot.missingRequiredFields != null) {
      reportMissingRequiredFields(environment, snapshot.missingRequiredFields);
    }
    return snapshot.data;
  }

  switch (fetchPolicy) {
    case 'network-only': {
      return getNetworkObservable(environment, operation).map(readData);
    }
    case 'store-or-network': {
      if (environment.check(operation).status === 'available') {
        return RelayObservable.from(environment.lookup(operation.fragment)).map(
          readData,
        );
      }
      return getNetworkObservable(environment, operation).map(readData);
    }
    default:
      (fetchPolicy: empty);
      throw new Error('fetchQuery: Invalid fetchPolicy ' + fetchPolicy);
  }
}

function getNetworkObservable<TQuery: OperationType>(
  environment: IEnvironment,
  operation: OperationDescriptor,
): RelayObservable<$ElementType<TQuery, 'response'>> {
  return fetchQueryInternal
    .fetchQuery(environment, operation)
    .map(() => environment.lookup(operation.fragment));
}

module.exports = fetchQuery;
