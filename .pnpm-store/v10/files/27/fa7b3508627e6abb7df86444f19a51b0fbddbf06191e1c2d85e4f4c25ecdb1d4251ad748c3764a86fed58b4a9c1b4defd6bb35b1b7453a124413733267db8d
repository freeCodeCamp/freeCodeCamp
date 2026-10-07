export class ReadOnlyMap {
    constructor(parameters) {
        this._map = new Map(parameters);
    }
    get size() {
        return this._map.size;
    }
    entries() {
        return this._map.entries();
    }
    forEach(callback, thisArg = null) {
        return this._map.forEach((value, key) => callback.call(thisArg, value, key, this));
    }
    get(name) {
        return this._map.get(name);
    }
    has(name) {
        return this._map.has(name);
    }
    keys() {
        return this._map.keys();
    }
    values() {
        return this._map.values();
    }
}
//# sourceMappingURL=read-only-map.js.map