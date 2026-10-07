// @flow strict-local

export class DefaultMap<K, V> extends Map<K, V> {
  _getDefault: K => V;

  constructor(getDefault: K => V, entries?: Iterable<[K, V]>) {
    super(entries);
    this._getDefault = getDefault;
  }

  get(key: K): V {
    let ret;
    if (this.has(key)) {
      ret = super.get(key);
    } else {
      ret = this._getDefault(key);
      this.set(key, ret);
    }

    // $FlowFixMe
    return ret;
  }
}

// Duplicated from DefaultMap implementation for Flow
// Roughly mirrors https://github.com/facebook/flow/blob/2eb5a78d92c167117ba9caae070afd2b9f598599/lib/core.js#L617
export class DefaultWeakMap<K: interface {}, V> extends WeakMap<K, V> {
  _getDefault: K => V;

  constructor(getDefault: K => V, entries?: Iterable<[K, V]>) {
    super(entries);
    this._getDefault = getDefault;
  }

  get(key: K): V {
    let ret;
    if (this.has(key)) {
      ret = super.get(key);
    } else {
      ret = this._getDefault(key);
      this.set(key, ret);
    }

    // $FlowFixMe
    return ret;
  }
}
