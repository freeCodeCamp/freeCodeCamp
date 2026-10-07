/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var RelayObservable = require('../network/RelayObservable');

var fetchQueryInternal = require('./fetchQueryInternal');

var invariant = require('invariant');

var reportMissingRequiredFields = require('../util/reportMissingRequiredFields');

var _require = require('../store/RelayModernOperationDescriptor'),
    createOperationDescriptor = _require.createOperationDescriptor;

var _require2 = require('./GraphQLTag'),
    getRequest = _require2.getRequest;

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
function fetchQuery(environment, query, variables, options) {
  var _options$fetchPolicy;

  var queryNode = getRequest(query);
  !(queryNode.params.operationKind === 'query') ? process.env.NODE_ENV !== "production" ? invariant(false, 'fetchQuery: Expected query operation') : invariant(false) : void 0;
  var networkCacheConfig = (0, _objectSpread2["default"])({
    force: true
  }, options === null || options === void 0 ? void 0 : options.networkCacheConfig);
  var operation = createOperationDescriptor(queryNode, variables, networkCacheConfig);
  var fetchPolicy = (_options$fetchPolicy = options === null || options === void 0 ? void 0 : options.fetchPolicy) !== null && _options$fetchPolicy !== void 0 ? _options$fetchPolicy : 'network-only';

  function readData(snapshot) {
    if (snapshot.missingRequiredFields != null) {
      reportMissingRequiredFields(environment, snapshot.missingRequiredFields);
    }

    return snapshot.data;
  }

  switch (fetchPolicy) {
    case 'network-only':
      {
        return getNetworkObservable(environment, operation).map(readData);
      }

    case 'store-or-network':
      {
        if (environment.check(operation).status === 'available') {
          return RelayObservable.from(environment.lookup(operation.fragment)).map(readData);
        }

        return getNetworkObservable(environment, operation).map(readData);
      }

    default:
      fetchPolicy;
      throw new Error('fetchQuery: Invalid fetchPolicy ' + fetchPolicy);
  }
}

function getNetworkObservable(environment, operation) {
  return fetchQueryInternal.fetchQuery(environment, operation).map(function () {
    return environment.lookup(operation.fragment);
  });
}

module.exports = fetchQuery;