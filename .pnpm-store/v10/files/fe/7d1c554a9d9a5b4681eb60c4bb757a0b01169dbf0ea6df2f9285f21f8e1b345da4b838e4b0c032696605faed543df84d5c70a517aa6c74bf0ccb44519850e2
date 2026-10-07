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

var isPromise = require('../util/isPromise');
/**
 * A Subscription object is returned from .subscribe(), which can be
 * unsubscribed or checked to see if the resulting subscription has closed.
 */


var hostReportError = swallowError;
/**
 * Limited implementation of ESObservable, providing the limited set of behavior
 * Relay networking requires.
 *
 * Observables retain the benefit of callbacks which can be called
 * synchronously, avoiding any UI jitter, while providing a compositional API,
 * which simplifies logic and prevents mishandling of errors compared to
 * the direct use of callback functions.
 *
 * ESObservable: https://github.com/tc39/proposal-observable
 */

var RelayObservable = /*#__PURE__*/function () {
  RelayObservable.create = function create(source) {
    return new RelayObservable(source);
  } // Use RelayObservable.create()
  ;

  function RelayObservable(source) {
    if (process.env.NODE_ENV !== "production") {
      // Early runtime errors for ill-formed sources.
      if (!source || typeof source !== 'function') {
        throw new Error('Source must be a Function: ' + String(source));
      }
    }

    this._source = source;
  }
  /**
   * When an emitted error event is not handled by an Observer, it is reported
   * to the host environment (what the ESObservable spec refers to as
   * "HostReportErrors()").
   *
   * The default implementation in development rethrows thrown errors, and
   * logs emitted error events to the console, while in production does nothing
   * (swallowing unhandled errors).
   *
   * Called during application initialization, this method allows
   * application-specific handling of unhandled errors. Allowing, for example,
   * integration with error logging or developer tools.
   *
   * A second parameter `isUncaughtThrownError` is true when the unhandled error
   * was thrown within an Observer handler, and false when the unhandled error
   * was an unhandled emitted event.
   *
   *  - Uncaught thrown errors typically represent avoidable errors thrown from
   *    application code, which should be handled with a try/catch block, and
   *    usually have useful stack traces.
   *
   *  - Unhandled emitted event errors typically represent unavoidable events in
   *    application flow such as network failure, and may not have useful
   *    stack traces.
   */


  RelayObservable.onUnhandledError = function onUnhandledError(callback) {
    hostReportError = callback;
  }
  /**
   * Accepts various kinds of data sources, and always returns a RelayObservable
   * useful for accepting the result of a user-provided FetchFunction.
   */
  ;

  RelayObservable.from = function from(obj) {
    return isObservable(obj) ? fromObservable(obj) : isPromise(obj) ? fromPromise(obj) : fromValue(obj);
  }
  /**
   * Similar to promise.catch(), observable.catch() handles error events, and
   * provides an alternative observable to use in it's place.
   *
   * If the catch handler throws a new error, it will appear as an error event
   * on the resulting Observable.
   */
  ;

  var _proto = RelayObservable.prototype;

  _proto["catch"] = function _catch(fn) {
    var _this = this;

    return RelayObservable.create(function (sink) {
      var subscription;

      _this.subscribe({
        start: function start(sub) {
          subscription = sub;
        },
        next: sink.next,
        complete: sink.complete,
        error: function error(_error2) {
          try {
            fn(_error2).subscribe({
              start: function start(sub) {
                subscription = sub;
              },
              next: sink.next,
              complete: sink.complete,
              error: sink.error
            });
          } catch (error2) {
            sink.error(error2, true
            /* isUncaughtThrownError */
            );
          }
        }
      });

      return function () {
        return subscription.unsubscribe();
      };
    });
  }
  /**
   * Returns a new Observable which first yields values from this Observable,
   * then yields values from the next Observable. This is useful for chaining
   * together Observables of finite length.
   */
  ;

  _proto.concat = function concat(next) {
    var _this2 = this;

    return RelayObservable.create(function (sink) {
      var current;

      _this2.subscribe({
        start: function start(subscription) {
          current = subscription;
        },
        next: sink.next,
        error: sink.error,
        complete: function complete() {
          current = next.subscribe(sink);
        }
      });

      return function () {
        current && current.unsubscribe();
      };
    });
  }
  /**
   * Returns a new Observable which returns the same values as this one, but
   * modified so that the provided Observer is called to perform a side-effects
   * for all events emitted by the source.
   *
   * Any errors that are thrown in the side-effect Observer are unhandled, and
   * do not affect the source Observable or its Observer.
   *
   * This is useful for when debugging your Observables or performing other
   * side-effects such as logging or performance monitoring.
   */
  ;

  _proto["do"] = function _do(observer) {
    var _this3 = this;

    return RelayObservable.create(function (sink) {
      var both = function both(action) {
        return function () {
          try {
            observer[action] && observer[action].apply(observer, arguments);
          } catch (error) {
            hostReportError(error, true
            /* isUncaughtThrownError */
            );
          }

          sink[action] && sink[action].apply(sink, arguments);
        };
      };

      return _this3.subscribe({
        start: both('start'),
        next: both('next'),
        error: both('error'),
        complete: both('complete'),
        unsubscribe: both('unsubscribe')
      });
    });
  }
  /**
   * Returns a new Observable which returns the same values as this one, but
   * modified so that the finally callback is performed after completion,
   * whether normal or due to error or unsubscription.
   *
   * This is useful for cleanup such as resource finalization.
   */
  ;

  _proto["finally"] = function _finally(fn) {
    var _this4 = this;

    return RelayObservable.create(function (sink) {
      var subscription = _this4.subscribe(sink);

      return function () {
        subscription.unsubscribe();
        fn();
      };
    });
  }
  /**
   * Returns a new Observable which is identical to this one, unless this
   * Observable completes before yielding any values, in which case the new
   * Observable will yield the values from the alternate Observable.
   *
   * If this Observable does yield values, the alternate is never subscribed to.
   *
   * This is useful for scenarios where values may come from multiple sources
   * which should be tried in order, i.e. from a cache before a network.
   */
  ;

  _proto.ifEmpty = function ifEmpty(alternate) {
    var _this5 = this;

    return RelayObservable.create(function (sink) {
      var hasValue = false;

      var current = _this5.subscribe({
        next: function next(value) {
          hasValue = true;
          sink.next(value);
        },
        error: sink.error,
        complete: function complete() {
          if (hasValue) {
            sink.complete();
          } else {
            current = alternate.subscribe(sink);
          }
        }
      });

      return function () {
        current.unsubscribe();
      };
    });
  }
  /**
   * Observable's primary API: returns an unsubscribable Subscription to the
   * source of this Observable.
   *
   * Note: A sink may be passed directly to .subscribe() as its observer,
   * allowing for easily composing Observables.
   */
  ;

  _proto.subscribe = function subscribe(observer) {
    if (process.env.NODE_ENV !== "production") {
      // Early runtime errors for ill-formed observers.
      if (!observer || typeof observer !== 'object') {
        throw new Error('Observer must be an Object with callbacks: ' + String(observer));
      }
    }

    return _subscribe(this._source, observer);
  }
  /**
   * Returns a new Observerable where each value has been transformed by
   * the mapping function.
   */
  ;

  _proto.map = function map(fn) {
    var _this6 = this;

    return RelayObservable.create(function (sink) {
      var subscription = _this6.subscribe({
        complete: sink.complete,
        error: sink.error,
        next: function next(value) {
          try {
            var mapValue = fn(value);
            sink.next(mapValue);
          } catch (error) {
            sink.error(error, true
            /* isUncaughtThrownError */
            );
          }
        }
      });

      return function () {
        subscription.unsubscribe();
      };
    });
  }
  /**
   * Returns a new Observable where each value is replaced with a new Observable
   * by the mapping function, the results of which returned as a single
   * merged Observable.
   */
  ;

  _proto.mergeMap = function mergeMap(fn) {
    var _this7 = this;

    return RelayObservable.create(function (sink) {
      var subscriptions = [];

      function start(subscription) {
        this._sub = subscription;
        subscriptions.push(subscription);
      }

      function complete() {
        subscriptions.splice(subscriptions.indexOf(this._sub), 1);

        if (subscriptions.length === 0) {
          sink.complete();
        }
      } // $FlowFixMe[incompatible-call]


      _this7.subscribe({
        start: start,
        next: function next(value) {
          try {
            if (!sink.closed) {
              // $FlowFixMe[incompatible-call]
              RelayObservable.from(fn(value)).subscribe({
                start: start,
                next: sink.next,
                error: sink.error,
                complete: complete
              });
            }
          } catch (error) {
            sink.error(error, true
            /* isUncaughtThrownError */
            );
          }
        },
        error: sink.error,
        complete: complete
      });

      return function () {
        subscriptions.forEach(function (sub) {
          return sub.unsubscribe();
        });
        subscriptions.length = 0;
      };
    });
  }
  /**
   * Returns a new Observable which first mirrors this Observable, then when it
   * completes, waits for `pollInterval` milliseconds before re-subscribing to
   * this Observable again, looping in this manner until unsubscribed.
   *
   * The returned Observable never completes.
   */
  ;

  _proto.poll = function poll(pollInterval) {
    var _this8 = this;

    if (process.env.NODE_ENV !== "production") {
      if (typeof pollInterval !== 'number' || pollInterval <= 0) {
        throw new Error('RelayObservable: Expected pollInterval to be positive, got: ' + pollInterval);
      }
    }

    return RelayObservable.create(function (sink) {
      var subscription;
      var timeout;

      var poll = function poll() {
        subscription = _this8.subscribe({
          next: sink.next,
          error: sink.error,
          complete: function complete() {
            timeout = setTimeout(poll, pollInterval);
          }
        });
      };

      poll();
      return function () {
        clearTimeout(timeout);
        subscription.unsubscribe();
      };
    });
  }
  /**
   * Returns a Promise which resolves when this Observable yields a first value
   * or when it completes with no value.
   *
   * NOTE: The source Observable is *NOT* canceled when the returned Promise
   * resolves. The Observable is always run to completion.
   */
  ;

  _proto.toPromise = function toPromise() {
    var _this9 = this;

    return new Promise(function (resolve, reject) {
      var resolved = false;

      _this9.subscribe({
        next: function next(val) {
          if (!resolved) {
            resolved = true;
            resolve(val);
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };

  return RelayObservable;
}(); // Use declarations to teach Flow how to check isObservable.


function isObservable(obj) {
  return typeof obj === 'object' && obj !== null && typeof obj.subscribe === 'function';
}

function fromObservable(obj) {
  return obj instanceof RelayObservable ? obj : RelayObservable.create(function (sink) {
    return obj.subscribe(sink);
  });
}

function fromPromise(promise) {
  return RelayObservable.create(function (sink) {
    // Since sink methods do not throw, the resulting Promise can be ignored.
    promise.then(function (value) {
      sink.next(value);
      sink.complete();
    }, sink.error);
  });
}

function fromValue(value) {
  return RelayObservable.create(function (sink) {
    sink.next(value);
    sink.complete();
  });
}

function _subscribe(source, observer) {
  var closed = false;
  var cleanup; // Ideally we would simply describe a `get closed()` method on the Sink and
  // Subscription objects below, however not all flow environments we expect
  // Relay to be used within will support property getters, and many minifier
  // tools still do not support ES5 syntax. Instead, we can use defineProperty.

  var withClosed = function withClosed(obj) {
    return Object.defineProperty(obj, 'closed', {
      get: function get() {
        return closed;
      }
    });
  };

  function doCleanup() {
    if (cleanup) {
      if (cleanup.unsubscribe) {
        cleanup.unsubscribe();
      } else {
        try {
          cleanup();
        } catch (error) {
          hostReportError(error, true
          /* isUncaughtThrownError */
          );
        }
      }

      cleanup = undefined;
    }
  } // Create a Subscription.


  var subscription = withClosed({
    unsubscribe: function unsubscribe() {
      if (!closed) {
        closed = true; // Tell Observer that unsubscribe was called.

        try {
          observer.unsubscribe && observer.unsubscribe(subscription);
        } catch (error) {
          hostReportError(error, true
          /* isUncaughtThrownError */
          );
        } finally {
          doCleanup();
        }
      }
    }
  }); // Tell Observer that observation is about to begin.

  try {
    observer.start && observer.start(subscription);
  } catch (error) {
    hostReportError(error, true
    /* isUncaughtThrownError */
    );
  } // If closed already, don't bother creating a Sink.


  if (closed) {
    return subscription;
  } // Create a Sink respecting subscription state and cleanup.


  var sink = withClosed({
    next: function next(value) {
      if (!closed && observer.next) {
        try {
          observer.next(value);
        } catch (error) {
          hostReportError(error, true
          /* isUncaughtThrownError */
          );
        }
      }
    },
    error: function error(_error3, isUncaughtThrownError) {
      if (closed || !observer.error) {
        closed = true;
        hostReportError(_error3, isUncaughtThrownError || false);
        doCleanup();
      } else {
        closed = true;

        try {
          observer.error(_error3);
        } catch (error2) {
          hostReportError(error2, true
          /* isUncaughtThrownError */
          );
        } finally {
          doCleanup();
        }
      }
    },
    complete: function complete() {
      if (!closed) {
        closed = true;

        try {
          observer.complete && observer.complete();
        } catch (error) {
          hostReportError(error, true
          /* isUncaughtThrownError */
          );
        } finally {
          doCleanup();
        }
      }
    }
  }); // If anything goes wrong during observing the source, handle the error.

  try {
    cleanup = source(sink);
  } catch (error) {
    sink.error(error, true
    /* isUncaughtThrownError */
    );
  }

  if (process.env.NODE_ENV !== "production") {
    // Early runtime errors for ill-formed returned cleanup.
    if (cleanup !== undefined && typeof cleanup !== 'function' && (!cleanup || typeof cleanup.unsubscribe !== 'function')) {
      throw new Error('Returned cleanup function which cannot be called: ' + String(cleanup));
    }
  } // If closed before the source function existed, cleanup now.


  if (closed) {
    doCleanup();
  }

  return subscription;
}

function swallowError(_error, _isUncaughtThrownError) {// do nothing.
}

if (process.env.NODE_ENV !== "production") {
  // Default implementation of HostReportErrors() in development builds.
  // Can be replaced by the host application environment.
  RelayObservable.onUnhandledError(function (error, isUncaughtThrownError) {
    if (typeof fail === 'function') {
      // In test environments (Jest), fail() immediately fails the current test.
      fail(String(error));
    } else if (isUncaughtThrownError) {
      // Rethrow uncaught thrown errors on the next frame to avoid breaking
      // current logic.
      setTimeout(function () {
        throw error;
      });
    } else if (typeof console !== 'undefined') {
      // Otherwise, log the unhandled error for visibility.
      // eslint-disable-next-line no-console
      console.error('RelayObservable: Unhandled Error', error);
    }
  });
}

module.exports = RelayObservable;