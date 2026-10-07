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

'use strict';

import type {ConcreteRequest, Disposable} from 'relay-runtime';

type Callback = (concreteRequest: ConcreteRequest) => void;

class PreloadableQueryRegistry {
  _preloadableQueries: Map<string, ConcreteRequest>;
  _callbacks: Map<string, Set<Callback>>;
  constructor() {
    this._preloadableQueries = new Map();
    this._callbacks = new Map();
  }

  set(key: string, value: ConcreteRequest) {
    this._preloadableQueries.set(key, value);
    const callbacks = this._callbacks.get(key);
    if (callbacks != null) {
      callbacks.forEach(cb => {
        try {
          cb(value);
        } catch (e) {
          // We do *not* want to throw in this tick, as this callback is executed
          // while a query is required for the very first time.
          setTimeout(() => {
            throw e;
          }, 0);
        }
      });
    }
  }

  get(key: string): ?ConcreteRequest {
    return this._preloadableQueries.get(key);
  }

  onLoad(key: string, callback: Callback): Disposable {
    const callbacks = this._callbacks.get(key) ?? new Set();
    callbacks.add(callback);
    const dispose = () => {
      callbacks.delete(callback);
    };
    this._callbacks.set(key, callbacks);
    return {dispose};
  }

  clear() {
    this._preloadableQueries.clear();
  }
}

const preloadableQueryRegistry: PreloadableQueryRegistry = new PreloadableQueryRegistry();

module.exports = preloadableQueryRegistry;
