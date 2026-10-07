/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const isPromise = require('../util/isPromise');

/**
 * A Subscription object is returned from .subscribe(), which can be
 * unsubscribed or checked to see if the resulting subscription has closed.
 */
export type Subscription = {|
  +unsubscribe: () => void,
  +closed: boolean,
|};

type SubscriptionFn = {
  (): mixed,
  +unsubscribe?: void,
  +closed?: void,
  ...
};

/**
 * An Observer is an object of optional callback functions provided to
 * .subscribe(). Each callback function is invoked when that event occurs.
 */
export type Observer<-T> = {|
  +start?: ?(Subscription) => mixed,
  +next?: ?(T) => mixed,
  +error?: ?(Error) => mixed,
  +complete?: ?() => mixed,
  +unsubscribe?: ?(Subscription) => mixed,
|};

/**
 * A Sink is an object of methods provided by Observable during construction.
 * The methods are to be called to trigger each event. It also contains a closed
 * field to see if the resulting subscription has closed.
 */
export type Sink<-T> = {|
  +next: T => void,
  +error: (Error, isUncaughtThrownError?: boolean) => void,
  +complete: () => void,
  +closed: boolean,
|};

/**
 * A Source is the required argument when constructing a new Observable. Similar
 * to a Promise constructor, this is a function which is invoked with a Sink,
 * and may return either a cleanup function or a Subscription instance (for use
 * when composing Observables).
 */
export type Source<+T> = (Sink<T>) => void | Subscription | SubscriptionFn;

/**
 * A Subscribable is an interface describing any object which can be subscribed.
 *
 * Note: A sink may be passed directly to .subscribe() as its observer,
 * allowing for easily composing Subscribables.
 */
export interface Subscribable<+T> {
  subscribe(observer: Observer<T> | Sink<T>): Subscription;
}

// Note: This should accept Subscribable<T> instead of RelayObservable<T>,
// however Flow cannot yet distinguish it from T.
export type ObservableFromValue<+T> = RelayObservable<T> | Promise<T> | T;

let hostReportError = swallowError;

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
class RelayObservable<+T> implements Subscribable<T> {
  +_source: Source<T>;

  static create<V>(source: Source<V>): RelayObservable<V> {
    return new RelayObservable((source: any));
  }

  // Use RelayObservable.create()
  constructor(source: empty): void {
    if (__DEV__) {
      // Early runtime errors for ill-formed sources.
      if (!source || typeof source !== 'function') {
        throw new Error('Source must be a Function: ' + String(source));
      }
    }
    (this: any)._source = source;
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
  static onUnhandledError(
    callback: (Error, isUncaughtThrownError: boolean) => mixed,
  ): void {
    hostReportError = callback;
  }

  /**
   * Accepts various kinds of data sources, and always returns a RelayObservable
   * useful for accepting the result of a user-provided FetchFunction.
   */
  static from<V>(obj: ObservableFromValue<V>): RelayObservable<V> {
    return isObservable(obj)
      ? fromObservable(obj)
      : isPromise(obj)
      ? fromPromise(obj)
      : fromValue(obj);
  }

  /**
   * Similar to promise.catch(), observable.catch() handles error events, and
   * provides an alternative observable to use in it's place.
   *
   * If the catch handler throws a new error, it will appear as an error event
   * on the resulting Observable.
   */
  catch<U>(fn: Error => RelayObservable<U>): RelayObservable<T | U> {
    return RelayObservable.create(sink => {
      let subscription;
      this.subscribe({
        start: sub => {
          subscription = sub;
        },
        next: sink.next,
        complete: sink.complete,
        error(error) {
          try {
            fn(error).subscribe({
              start: sub => {
                subscription = sub;
              },
              next: sink.next,
              complete: sink.complete,
              error: sink.error,
            });
          } catch (error2) {
            sink.error(error2, true /* isUncaughtThrownError */);
          }
        },
      });
      return () => subscription.unsubscribe();
    });
  }

  /**
   * Returns a new Observable which first yields values from this Observable,
   * then yields values from the next Observable. This is useful for chaining
   * together Observables of finite length.
   */
  concat<U>(next: RelayObservable<U>): RelayObservable<T | U> {
    return RelayObservable.create(sink => {
      let current;
      this.subscribe({
        start(subscription) {
          current = subscription;
        },
        next: sink.next,
        error: sink.error,
        complete() {
          current = next.subscribe(sink);
        },
      });
      return () => {
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
  do(observer: Observer<T>): RelayObservable<T> {
    return RelayObservable.create(sink => {
      const both = (action: any) =>
        function() {
          try {
            observer[action] && observer[action].apply(observer, arguments);
          } catch (error) {
            hostReportError(error, true /* isUncaughtThrownError */);
          }
          sink[action] && sink[action].apply(sink, arguments);
        };
      return this.subscribe({
        start: both('start'),
        next: both('next'),
        error: both('error'),
        complete: both('complete'),
        unsubscribe: both('unsubscribe'),
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
  finally(fn: () => mixed): RelayObservable<T> {
    return RelayObservable.create(sink => {
      const subscription = this.subscribe(sink);
      return () => {
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
  ifEmpty<U>(alternate: RelayObservable<U>): RelayObservable<T | U> {
    return RelayObservable.create(sink => {
      let hasValue = false;
      let current = this.subscribe({
        next(value) {
          hasValue = true;
          sink.next(value);
        },
        error: sink.error,
        complete() {
          if (hasValue) {
            sink.complete();
          } else {
            current = alternate.subscribe(sink);
          }
        },
      });
      return () => {
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
  subscribe(observer: Observer<T> | Sink<T>): Subscription {
    if (__DEV__) {
      // Early runtime errors for ill-formed observers.
      if (!observer || typeof observer !== 'object') {
        throw new Error(
          'Observer must be an Object with callbacks: ' + String(observer),
        );
      }
    }
    return subscribe(this._source, observer);
  }

  /**
   * Returns a new Observerable where each value has been transformed by
   * the mapping function.
   */
  map<U>(fn: T => U): RelayObservable<U> {
    return RelayObservable.create(sink => {
      const subscription = this.subscribe({
        complete: sink.complete,
        error: sink.error,
        next: value => {
          try {
            const mapValue = fn(value);
            sink.next(mapValue);
          } catch (error) {
            sink.error(error, true /* isUncaughtThrownError */);
          }
        },
      });
      return () => {
        subscription.unsubscribe();
      };
    });
  }

  /**
   * Returns a new Observable where each value is replaced with a new Observable
   * by the mapping function, the results of which returned as a single
   * merged Observable.
   */
  mergeMap<U>(fn: T => ObservableFromValue<U>): RelayObservable<U> {
    return RelayObservable.create(sink => {
      const subscriptions = [];

      function start(subscription) {
        this._sub = subscription;
        subscriptions.push(subscription);
      }

      function complete() {
        subscriptions.splice(subscriptions.indexOf(this._sub), 1);
        if (subscriptions.length === 0) {
          sink.complete();
        }
      }

      // $FlowFixMe[incompatible-call]
      this.subscribe({
        start,
        next(value) {
          try {
            if (!sink.closed) {
              // $FlowFixMe[incompatible-call]
              RelayObservable.from(fn(value)).subscribe({
                start,
                next: sink.next,
                error: sink.error,
                complete,
              });
            }
          } catch (error) {
            sink.error(error, true /* isUncaughtThrownError */);
          }
        },
        error: sink.error,
        complete,
      });

      return () => {
        subscriptions.forEach(sub => sub.unsubscribe());
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
  poll(pollInterval: number): RelayObservable<T> {
    if (__DEV__) {
      if (typeof pollInterval !== 'number' || pollInterval <= 0) {
        throw new Error(
          'RelayObservable: Expected pollInterval to be positive, got: ' +
            pollInterval,
        );
      }
    }
    return RelayObservable.create(sink => {
      let subscription;
      let timeout;
      const poll = () => {
        subscription = this.subscribe({
          next: sink.next,
          error: sink.error,
          complete() {
            timeout = setTimeout(poll, pollInterval);
          },
        });
      };
      poll();
      return () => {
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
  toPromise(): Promise<T | void> {
    return new Promise((resolve, reject) => {
      let resolved = false;
      this.subscribe({
        next(val) {
          if (!resolved) {
            resolved = true;
            resolve(val);
          }
        },
        error: reject,
        complete: resolve,
      });
    });
  }
}

// Use declarations to teach Flow how to check isObservable.
declare function isObservable(p: mixed): boolean %checks(p instanceof
  RelayObservable);

function isObservable(obj) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.subscribe === 'function'
  );
}

function fromObservable<T>(obj: Subscribable<T>): RelayObservable<T> {
  return obj instanceof RelayObservable
    ? obj
    : RelayObservable.create(sink => obj.subscribe(sink));
}

function fromPromise<T>(promise: Promise<T>): RelayObservable<T> {
  return RelayObservable.create(sink => {
    // Since sink methods do not throw, the resulting Promise can be ignored.
    promise.then(value => {
      sink.next(value);
      sink.complete();
    }, sink.error);
  });
}

function fromValue<T>(value: T): RelayObservable<T> {
  return RelayObservable.create(sink => {
    sink.next(value);
    sink.complete();
  });
}

function subscribe<T>(
  source: Source<T>,
  observer: Observer<T> | Sink<T>,
): Subscription {
  let closed = false;
  let cleanup;

  // Ideally we would simply describe a `get closed()` method on the Sink and
  // Subscription objects below, however not all flow environments we expect
  // Relay to be used within will support property getters, and many minifier
  // tools still do not support ES5 syntax. Instead, we can use defineProperty.
  const withClosed: <O>(obj: O) => {|...O, +closed: boolean|} = (obj =>
    Object.defineProperty(obj, 'closed', ({get: () => closed}: any)): any);

  function doCleanup() {
    if (cleanup) {
      if (cleanup.unsubscribe) {
        cleanup.unsubscribe();
      } else {
        try {
          cleanup();
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        }
      }
      cleanup = undefined;
    }
  }

  // Create a Subscription.
  const subscription: Subscription = withClosed({
    unsubscribe() {
      if (!closed) {
        closed = true;

        // Tell Observer that unsubscribe was called.
        try {
          observer.unsubscribe && observer.unsubscribe(subscription);
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    },
  });

  // Tell Observer that observation is about to begin.
  try {
    observer.start && observer.start(subscription);
  } catch (error) {
    hostReportError(error, true /* isUncaughtThrownError */);
  }

  // If closed already, don't bother creating a Sink.
  if (closed) {
    return subscription;
  }

  // Create a Sink respecting subscription state and cleanup.
  const sink: Sink<T> = withClosed({
    next(value) {
      if (!closed && observer.next) {
        try {
          observer.next(value);
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        }
      }
    },
    error(error, isUncaughtThrownError) {
      if (closed || !observer.error) {
        closed = true;
        hostReportError(error, isUncaughtThrownError || false);
        doCleanup();
      } else {
        closed = true;
        try {
          observer.error(error);
        } catch (error2) {
          hostReportError(error2, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    },
    complete() {
      if (!closed) {
        closed = true;
        try {
          observer.complete && observer.complete();
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    },
  });

  // If anything goes wrong during observing the source, handle the error.
  try {
    cleanup = source(sink);
  } catch (error) {
    sink.error(error, true /* isUncaughtThrownError */);
  }

  if (__DEV__) {
    // Early runtime errors for ill-formed returned cleanup.
    if (
      cleanup !== undefined &&
      typeof cleanup !== 'function' &&
      (!cleanup || typeof cleanup.unsubscribe !== 'function')
    ) {
      throw new Error(
        'Returned cleanup function which cannot be called: ' + String(cleanup),
      );
    }
  }

  // If closed before the source function existed, cleanup now.
  if (closed) {
    doCleanup();
  }

  return subscription;
}

function swallowError(_error: Error, _isUncaughtThrownError: boolean): void {
  // do nothing.
}

if (__DEV__) {
  // Default implementation of HostReportErrors() in development builds.
  // Can be replaced by the host application environment.
  RelayObservable.onUnhandledError((error, isUncaughtThrownError) => {
    declare function fail(string): void;
    if (typeof fail === 'function') {
      // In test environments (Jest), fail() immediately fails the current test.
      fail(String(error));
    } else if (isUncaughtThrownError) {
      // Rethrow uncaught thrown errors on the next frame to avoid breaking
      // current logic.
      setTimeout(() => {
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
