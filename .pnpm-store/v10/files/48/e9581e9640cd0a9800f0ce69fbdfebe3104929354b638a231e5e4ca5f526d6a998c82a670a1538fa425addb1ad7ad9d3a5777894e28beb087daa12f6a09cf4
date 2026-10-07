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

const RelayObservable = require('../network/RelayObservable');

const invariant = require('invariant');

import type {Observer, Sink, Subscription} from '../network/RelayObservable';

type Event<T> =
  | {
      kind: 'next',
      data: T,
      ...
    }
  | {
      kind: 'error',
      error: Error,
      ...
    }
  | {kind: 'complete', ...};

/**
 * An implementation of a `ReplaySubject` for Relay Observables.
 *
 * Records events provided and synchronously plays them back to new subscribers,
 * as well as forwarding new asynchronous events.
 */
class RelayReplaySubject<T> {
  _complete: boolean = false;
  _events: Array<Event<T>> = [];
  _sinks: Set<Sink<T>> = new Set();
  _observable: RelayObservable<T>;
  _subscription: Array<Subscription> = [];

  constructor() {
    this._observable = RelayObservable.create(sink => {
      this._sinks.add(sink);

      const events = this._events;
      for (let i = 0; i < events.length; i++) {
        if (sink.closed) {
          // Bail if an event made the observer unsubscribe.
          break;
        }
        const event = events[i];
        switch (event.kind) {
          case 'complete':
            sink.complete();
            break;
          case 'error':
            sink.error(event.error);
            break;
          case 'next':
            sink.next(event.data);
            break;
          default:
            (event.kind: empty);
            invariant(
              false,
              'RelayReplaySubject: Unknown event kind `%s`.',
              event.kind,
            );
        }
      }

      return () => {
        this._sinks.delete(sink);
      };
    });
  }

  complete(): void {
    if (this._complete === true) {
      return;
    }
    this._complete = true;
    this._events.push({
      kind: 'complete',
    });
    this._sinks.forEach(sink => sink.complete());
  }

  error(error: Error): void {
    if (this._complete === true) {
      return;
    }
    this._complete = true;
    this._events.push({
      kind: 'error',
      error,
    });
    this._sinks.forEach(sink => sink.error(error));
  }

  next(data: T): void {
    if (this._complete === true) {
      return;
    }
    this._events.push({
      kind: 'next',
      data,
    });
    this._sinks.forEach(sink => sink.next(data));
  }

  subscribe(observer: Observer<T> | Sink<T>): Subscription {
    const subscription = this._observable.subscribe(observer);
    this._subscription.push(subscription);
    return subscription;
  }

  unsubscribe() {
    for (const subscription of this._subscription) {
      subscription.unsubscribe();
    }
    this._subscription = [];
  }

  getObserverCount(): number {
    return this._sinks.size;
  }
}

module.exports = RelayReplaySubject;
