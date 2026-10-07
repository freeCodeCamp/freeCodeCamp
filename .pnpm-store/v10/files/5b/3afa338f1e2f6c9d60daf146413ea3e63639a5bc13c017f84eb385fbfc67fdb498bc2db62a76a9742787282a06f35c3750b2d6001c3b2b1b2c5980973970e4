"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeakableMap {
    constructor() {
        this.weakMap = new WeakMap();
        this.map = new Map();
    }
    set(key, value) {
        if (typeof key === 'object') {
            this.weakMap.set(key, value);
        }
        else {
            this.map.set(key, value);
        }
    }
    get(key) {
        if (typeof key === 'object') {
            return this.weakMap.get(key);
        }
        return this.map.get(key);
    }
    has(key) {
        if (typeof key === 'object') {
            return this.weakMap.has(key);
        }
        return this.map.has(key);
    }
}
exports.default = WeakableMap;
