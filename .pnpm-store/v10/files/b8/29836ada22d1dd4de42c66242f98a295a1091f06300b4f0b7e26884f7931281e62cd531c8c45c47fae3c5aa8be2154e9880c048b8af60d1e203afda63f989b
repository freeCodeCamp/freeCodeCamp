/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');

export type {StrictMap};

class StrictMap<K, V> {
  _map: Map<K, V>;

  constructor(iterable: ?Iterable<[K, V]>): StrictMap<K, V> {
    this._map = new Map<K, V>(iterable);
    return this;
  }

  clear(): void {
    this._map.clear();
  }

  delete(key: K): boolean {
    return this._map.delete(key);
  }

  entries(): Iterator<[K, V]> {
    return this._map.entries();
  }

  forEach(
    callbackfn: (value: V, index: K, map: Map<K, V>) => mixed,
    thisArg?: mixed,
  ): void {
    this._map.forEach(callbackfn, thisArg);
  }

  map<V2>(
    f: (value: V, index: K, map: StrictMap<K, V>) => V2,
  ): StrictMap<K, V2> {
    const result = new StrictMap();
    for (const [key, val] of this._map) {
      result.set(key, f(val, key, this));
    }
    return result;
  }

  async asyncMap<V2>(
    f: (value: V, index: K, map: StrictMap<K, V>) => Promise<V2>,
  ): Promise<StrictMap<K, V2>> {
    const entryPromises: Array<Promise<[K, V2]>> = [];
    for (const [key, val] of this._map) {
      entryPromises.push(f(val, key, this).then(resultVal => [key, resultVal]));
    }
    const entries = await Promise.all(entryPromises);
    return new StrictMap(entries);
  }

  get(key: K): V {
    invariant(
      this.has(key),
      'StrictMap: trying to read non-existent key `%s`.',
      String(key),
    );
    // $FlowFixMe[incompatible-return] - we checked the key exists
    return this._map.get(key);
  }

  has(key: K): boolean {
    return this._map.has(key);
  }

  keys(): Iterator<K> {
    return this._map.keys();
  }

  set(key: K, value: V): StrictMap<K, V> {
    this._map.set(key, value);
    return this;
  }

  values(): Iterator<V> {
    return this._map.values();
  }
}

module.exports = StrictMap;
