function identity(t) {
    return t;
}
/**
 * Uses a LRU cache to make a given parametrized function cached.
 * Caches just the last key/value.
*/
class LRUCachedFunction {
    constructor(arg1, arg2) {
        this.lastCache = undefined;
        this.lastArgKey = undefined;
        if (typeof arg1 === 'function') {
            this._fn = arg1;
            this._computeKey = identity;
        }
        else {
            this._fn = arg2;
            this._computeKey = arg1.getCacheKey;
        }
    }
    get(arg) {
        const key = this._computeKey(arg);
        if (this.lastArgKey !== key) {
            this.lastArgKey = key;
            this.lastCache = this._fn(arg);
        }
        return this.lastCache;
    }
}
/**
 * Uses an unbounded cache to memoize the results of the given function.
*/
class CachedFunction {
    get cachedValues() {
        return this._map;
    }
    constructor(arg1, arg2) {
        this._map = new Map();
        this._map2 = new Map();
        if (typeof arg1 === 'function') {
            this._fn = arg1;
            this._computeKey = identity;
        }
        else {
            this._fn = arg2;
            this._computeKey = arg1.getCacheKey;
        }
    }
    get(arg) {
        const key = this._computeKey(arg);
        if (this._map2.has(key)) {
            return this._map2.get(key);
        }
        const value = this._fn(arg);
        this._map.set(arg, value);
        this._map2.set(key, value);
        return value;
    }
}

export { CachedFunction, LRUCachedFunction, identity };
