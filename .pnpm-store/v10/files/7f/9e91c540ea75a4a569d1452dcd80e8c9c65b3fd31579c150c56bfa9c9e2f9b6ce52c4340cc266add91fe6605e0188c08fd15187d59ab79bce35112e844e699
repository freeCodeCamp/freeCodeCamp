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

var Observable = require('../network/RelayObservable');

var RelayReplaySubject = require('../util/RelayReplaySubject');

var invariant = require('invariant');

var WEAKMAP_SUPPORTED = typeof WeakMap === 'function';
var requestCachesByEnvironment = WEAKMAP_SUPPORTED ? new WeakMap() : new Map();
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

function fetchQuery(environment, operation) {
  return fetchQueryDeduped(environment, operation.request.identifier, function () {
    return environment.execute({
      operation: operation
    });
  });
}
/**
 * Low-level implementation details of `fetchQuery`.
 *
 * `fetchQueryDeduped` can also be used to share a single cache for
 * requests that aren't using `fetchQuery` directly (e.g. because they don't
 * have an `OperationDescriptor` when they are called).
 */


function fetchQueryDeduped(environment, identifier, fetchFn) {
  return Observable.create(function (sink) {
    var requestCache = getRequestCache(environment);
    var cachedRequest = requestCache.get(identifier);

    if (!cachedRequest) {
      fetchFn()["finally"](function () {
        return requestCache["delete"](identifier);
      }).subscribe({
        start: function start(subscription) {
          cachedRequest = {
            identifier: identifier,
            subject: new RelayReplaySubject(),
            subjectForInFlightStatus: new RelayReplaySubject(),
            subscription: subscription
          };
          requestCache.set(identifier, cachedRequest);
        },
        next: function next(response) {
          var cachedReq = getCachedRequest(requestCache, identifier);
          cachedReq.subject.next(response);
          cachedReq.subjectForInFlightStatus.next(response);
        },
        error: function error(_error) {
          var cachedReq = getCachedRequest(requestCache, identifier);
          cachedReq.subject.error(_error);
          cachedReq.subjectForInFlightStatus.error(_error);
        },
        complete: function complete() {
          var cachedReq = getCachedRequest(requestCache, identifier);
          cachedReq.subject.complete();
          cachedReq.subjectForInFlightStatus.complete();
        },
        unsubscribe: function unsubscribe(subscription) {
          var cachedReq = getCachedRequest(requestCache, identifier);
          cachedReq.subject.unsubscribe();
          cachedReq.subjectForInFlightStatus.unsubscribe();
        }
      });
    }

    !(cachedRequest != null) ? process.env.NODE_ENV !== "production" ? invariant(false, '[fetchQueryInternal] fetchQueryDeduped: Expected `start` to be ' + 'called synchronously') : invariant(false) : void 0;
    return getObservableForCachedRequest(requestCache, cachedRequest).subscribe(sink);
  });
}
/**
 * @private
 */


function getObservableForCachedRequest(requestCache, cachedRequest) {
  return Observable.create(function (sink) {
    var subscription = cachedRequest.subject.subscribe(sink);
    return function () {
      subscription.unsubscribe();
      var cachedRequestInstance = requestCache.get(cachedRequest.identifier);

      if (cachedRequestInstance) {
        var requestSubscription = cachedRequestInstance.subscription;

        if (requestSubscription != null && cachedRequestInstance.subject.getObserverCount() === 0) {
          requestSubscription.unsubscribe();
          requestCache["delete"](cachedRequest.identifier);
        }
      }
    };
  });
}
/**
 * @private
 */


function getActiveStatusObservableForCachedRequest(environment, requestCache, cachedRequest) {
  return Observable.create(function (sink) {
    var subscription = cachedRequest.subjectForInFlightStatus.subscribe({
      error: sink.error,
      next: function next(response) {
        if (!environment.isRequestActive(cachedRequest.identifier)) {
          sink.complete();
          return;
        }

        sink.next();
      },
      complete: sink.complete,
      unsubscribe: sink.complete
    });
    return function () {
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


function getPromiseForActiveRequest(environment, request) {
  var requestCache = getRequestCache(environment);
  var cachedRequest = requestCache.get(request.identifier);

  if (!cachedRequest) {
    return null;
  }

  if (!environment.isRequestActive(cachedRequest.identifier)) {
    return null;
  }

  return new Promise(function (resolve, reject) {
    var resolveOnNext = false;
    getActiveStatusObservableForCachedRequest(environment, requestCache, cachedRequest).subscribe({
      complete: resolve,
      error: reject,
      next: function next(response) {
        /*
         * The underlying `RelayReplaySubject` will synchronously replay events
         * as soon as we subscribe, but since we want the *next* asynchronous
         * one, we'll ignore them until the replay finishes.
         */
        if (resolveOnNext) {
          resolve(response);
        }
      }
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


function getObservableForActiveRequest(environment, request) {
  var requestCache = getRequestCache(environment);
  var cachedRequest = requestCache.get(request.identifier);

  if (!cachedRequest) {
    return null;
  }

  if (!environment.isRequestActive(cachedRequest.identifier)) {
    return null;
  }

  return getActiveStatusObservableForCachedRequest(environment, requestCache, cachedRequest);
}
/**
 * @private
 */


function getRequestCache(environment) {
  var cached = requestCachesByEnvironment.get(environment);

  if (cached != null) {
    return cached;
  }

  var requestCache = new Map();
  requestCachesByEnvironment.set(environment, requestCache);
  return requestCache;
}
/**
 * @private
 */


function getCachedRequest(requestCache, identifier) {
  var cached = requestCache.get(identifier);
  !(cached != null) ? process.env.NODE_ENV !== "production" ? invariant(false, '[fetchQueryInternal] getCachedRequest: Expected request to be cached') : invariant(false) : void 0;
  return cached;
}

module.exports = {
  fetchQuery: fetchQuery,
  fetchQueryDeduped: fetchQueryDeduped,
  getPromiseForActiveRequest: getPromiseForActiveRequest,
  getObservableForActiveRequest: getObservableForActiveRequest
};