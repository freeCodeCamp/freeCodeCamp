// @flow strict-local

import type {IDisposable} from './types';

import {AlreadyDisposedError} from './errors';

// Like an EventEmitter, but for only a single "event". This provides type-safety
// for the values emitted. Rather than passing predetermined strings (which can
// be misspelled), create an instance of ValueEmitter for every logical "event"
// to be dispatched, and type it according to the type of value emitted.
export default class ValueEmitter<TValue> implements IDisposable {
  // An array of listeners. One might think a Set would be better for O(1) removal,
  // but splicing a JS array gets pretty close, and copying the array (as is done
  // in emit) is far faster than a Set copy: https://github.com/atom/event-kit/pull/39
  _listeners: Array<(value: TValue) => mixed> = [];
  _disposed: boolean = false;

  addListener(listener: (value: TValue) => mixed): IDisposable {
    if (this._disposed) {
      throw new AlreadyDisposedError(
        'Cannot add a listener since this ValueEmitter has been disposed',
      );
    }

    this._listeners.push(listener);

    // Close over a reference to this emitter in the disposable below, rather
    // than referencing `this` directly. This allows us to set it to null after
    // slicing out the listener.
    // This prevents anyone holding onto the disposable after disposal from
    // unintentionally retaining a reference to this emitter.
    let emitter = this;
    return {
      dispose() {
        if (emitter == null) {
          return;
        }

        if (emitter._disposed) {
          emitter = null;
          return;
        }

        let listeners = emitter._listeners;
        let listenerIndex = listeners.indexOf(listener);
        if (listenerIndex > -1) {
          listeners.splice(listenerIndex, 1);
        }

        emitter = null;
      },
    };
  }

  emit(value: TValue): void {
    if (this._disposed) {
      throw new AlreadyDisposedError(
        'Cannot emit since this ValueEmitter has been disposed',
      );
    }

    // Iterate over a copy of listeners. This prevents the following cases:
    // * When a listener callback can itself register a new listener and be
    //   emitted as part of this iteration.
    // * When a listener callback disposes of this emitter mid-emit, preventing
    //   other listeners from receiving the event.
    let listeners = this._listeners.slice();
    for (let i = 0; i < listeners.length; i++) {
      listeners[i](value);
    }
  }

  dispose() {
    if (this._disposed) {
      return;
    }

    this._listeners = [];
    this._disposed = true;
  }
}
