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

const Observable = require('../network/RelayObservable');
const RelayReplaySubject = require('../util/RelayReplaySubject');

const invariant = require('invariant');

import type {GraphQLResponse} from '../network/RelayNetworkTypes';
import type {Subscription} from '../network/RelayObservable';
import type {
  IEnvironment,
  OperationDescriptor,
  RequestDescriptor,
} from '../store/RelayStoreTypes';
import type {RequestIdentifier} from '../util/getRequestIdentifier';

type RequestCacheEntry = {|
  +identifier: RequestIdentifier,
  +subject: RelayReplaySubject<GraphQLResponse>,
  +subjectForInFlightStatus: RelayReplaySubject<GraphQLResponse>,
  +subscription: Subscription,
|};

const WEAKMAP_SUPPORTED = typeof WeakMap === 'function';

const requestCachesByEnvironment = WEAKMAP_SUPPORTED
  ? new WeakMap()
  : new Map();

/**
 * Fetches the given query and variables on the provided environment,
 * and de-dupes identical in-flight requests.
 *
 * Observing a request:
 * ====================
 * fetchQuery returns an Observable which you can call .subscribe()
 * on. subscribe() takes an Observer, which you can provide to
 * observe network events:
 *
 * ```
 * fetchQuery(environment, query, variables).subscribe({
 *   // Called when network requests starts
 *   start: (subscription) => {},
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
 * This function will not retain any query data outside the scope of the
 * request, which means it is not guaranteed that it won't be garbage
 * collected after the request completes.
 * If you need to retain data, you can do so manually with environment.retain().
 *
 * Cancelling requests:
 * ====================
 * If the subscription returned by subscribe is called while the
 * request is in-flight, the request will be cancelled.
 *
 * ```
 * const subscription = fetchQuery(...).subscribe(...);
 *
 * // This will cancel the request if it is in-flight.
 * subscription.unsubscribe();
 * ```
 */
function fetchQuery(
  environment: IEnvironment,
  operation: OperationDescriptor,
): Observable<GraphQLResponse> {
  return fetchQueryDeduped(environment, operation.request.identifier, () =>
    environment.execute({
      operation,
    }),
  );
}

/**
 * Low-level implementation details of `fetchQuery`.
 *
 * `fetchQueryDeduped` can also be used to share a single cache for
 * requests that aren't using `fetchQuery` directly (e.g. because they don't
 * have an `OperationDescriptor` when they are called).
 */
function fetchQueryDeduped(
  environment: IEnvironment,
  identifier: RequestIdentifier,
  fetchFn: () => Observable<GraphQLResponse>,
): Observable<GraphQLResponse> {
  return Observable.create(sink => {
    const requestCache = getRequestCache(environment);
    let cachedRequest = requestCache.get(identifier);

    if (!cachedRequest) {
      fetchFn()
        .finally(() => requestCache.delete(identifier))
        .subscribe({
          start: subscription => {
            cachedRequest = {
              identifier,
              subject: new RelayReplaySubject(),
              subjectForInFlightStatus: new RelayReplaySubject(),
              subscription: subscription,
            };
            requestCache.set(identifier, cachedRequest);
          },
          next: response => {
            const cachedReq = getCachedRequest(requestCache, identifier);
            cachedReq.subject.next(response);
            cachedReq.subjectForInFlightStatus.next(response);
          },
          error: error => {
            const cachedReq = getCachedRequest(requestCache, identifier);
            cachedReq.subject.error(error);
            cachedReq.subjectForInFlightStatus.error(error);
          },
          complete: () => {
            const cachedReq = getCachedRequest(requestCache, identifier);
            cachedReq.subject.complete();
            cachedReq.subjectForInFlightStatus.complete();
          },
          unsubscribe: subscription => {
            const cachedReq = getCachedRequest(requestCache, identifier);
            cachedReq.subject.unsubscribe();
            cachedReq.subjectForInFlightStatus.unsubscribe();
          },
        });
    }

    invariant(
      cachedRequest != null,
      '[fetchQueryInternal] fetchQueryDeduped: Expected `start` to be ' +
        'called synchronously',
    );
    return getObservableForCachedRequest(requestCache, cachedRequest).subscribe(
      sink,
    );
  });
}

/**
 * @private
 */
function getObservableForCachedRequest(
  requestCache: Map<RequestIdentifier, RequestCacheEntry>,
  cachedRequest: RequestCacheEntry,
): Observable<GraphQLResponse> {
  return Observable.create(sink => {
    const subscription = cachedRequest.subject.subscribe(sink);

    return () => {
      subscription.unsubscribe();
      const cachedRequestInstance = requestCache.get(cachedRequest.identifier);
      if (cachedRequestInstance) {
        const requestSubscription = cachedRequestInstance.subscription;
        if (
          requestSubscription != null &&
          cachedRequestInstance.subject.getObserverCount() === 0
        ) {
          requestSubscription.unsubscribe();
          requestCache.delete(cachedRequest.identifier);
        }
      }
    };
  });
}

/**
 * @private
 */
function getActiveStatusObservableForCachedRequest(
  environment: IEnvironment,
  requestCache: Map<RequestIdentifier, RequestCacheEntry>,
  cachedRequest: RequestCacheEntry,
): Observable<void> {
  return Observable.create(sink => {
    const subscription = cachedRequest.subjectForInFlightStatus.subscribe({
      error: sink.error,
      next: response => {
        if (!environment.isRequestActive(cachedRequest.identifier)) {
          sink.complete();
          return;
        }
        sink.next();
      },
      complete: sink.complete,
      unsubscribe: sink.complete,
    });

    return () => {
      subscription.unsubscribe();
    };
  });
}

/**
 * If a request is active for the given query, variables and environment,
 * this function will return a Promise that will resolve when that request
 * stops being active (receives a final payload), and the data has been saved
 * to the store.
 * If no request is active, null will be returned
 */
function getPromiseForActiveRequest(
  environment: IEnvironment,
  request: RequestDescriptor,
): Promise<void> | null {
  const requestCache = getRequestCache(environment);
  const cachedRequest = requestCache.get(request.identifier);
  if (!cachedRequest) {
    return null;
  }
  if (!environment.isRequestActive(cachedRequest.identifier)) {
    return null;
  }

  return new Promise((resolve, reject) => {
    let resolveOnNext = false;
    getActiveStatusObservableForCachedRequest(
      environment,
      requestCache,
      cachedRequest,
    ).subscribe({
      complete: resolve,
      error: reject,
      next: response => {
        /*
         * The underlying `RelayReplaySubject` will synchronously replay events
         * as soon as we subscribe, but since we want the *next* asynchronous
         * one, we'll ignore them until the replay finishes.
         */
        if (resolveOnNext) {
          resolve(response);
        }
      },
    });
    resolveOnNext = true;
  });
}

/**
 * If there is a pending request for the given query, returns an Observable of
 * *all* its responses. Existing responses are published synchronously and
 * subsequent responses are published asynchronously. Returns null if there is
 * no pending request. This is similar to fetchQuery() except that it will not
 * issue a fetch if there isn't already one pending.
 */
function getObservableForActiveRequest(
  environment: IEnvironment,
  request: RequestDescriptor,
): Observable<void> | null {
  const requestCache = getRequestCache(environment);
  const cachedRequest = requestCache.get(request.identifier);
  if (!cachedRequest) {
    return null;
  }
  if (!environment.isRequestActive(cachedRequest.identifier)) {
    return null;
  }

  return getActiveStatusObservableForCachedRequest(
    environment,
    requestCache,
    cachedRequest,
  );
}

/**
 * @private
 */
function getRequestCache(
  environment: IEnvironment,
): Map<RequestIdentifier, RequestCacheEntry> {
  const cached: ?Map<
    RequestIdentifier,
    RequestCacheEntry,
  > = requestCachesByEnvironment.get(environment);
  if (cached != null) {
    return cached;
  }
  const requestCache: Map<RequestIdentifier, RequestCacheEntry> = new Map();
  requestCachesByEnvironment.set(environment, requestCache);
  return requestCache;
}

/**
 * @private
 */
function getCachedRequest(
  requestCache: Map<RequestIdentifier, RequestCacheEntry>,
  identifier: RequestIdentifier,
) {
  const cached = requestCache.get(identifier);
  invariant(
    cached != null,
    '[fetchQueryInternal] getCachedRequest: Expected request to be cached',
  );
  return cached;
}

module.exports = {
  fetchQuery,
  fetchQueryDeduped,
  getPromiseForActiveRequest,
  getObservableForActiveRequest,
};
