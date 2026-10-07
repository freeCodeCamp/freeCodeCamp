"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize2of4 = exports.memoize5 = exports.memoize4 = exports.memoize3 = exports.memoize2 = exports.memoize1 = void 0;
function memoize1(fn) {
    const memoize1cache = new WeakMap();
    return function memoized(a1) {
        const cachedValue = memoize1cache.get(a1);
        if (cachedValue === undefined) {
            const newValue = fn(a1);
            memoize1cache.set(a1, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
exports.memoize1 = memoize1;
function memoize2(fn) {
    const memoize2cache = new WeakMap();
    return function memoized(a1, a2) {
        let cache2 = memoize2cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize2cache.set(a1, cache2);
            const newValue = fn(a1, a2);
            cache2.set(a2, newValue);
            return newValue;
        }
        const cachedValue = cache2.get(a2);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2);
            cache2.set(a2, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
exports.memoize2 = memoize2;
function memoize3(fn) {
    const memoize3Cache = new WeakMap();
    return function memoized(a1, a2, a3) {
        let cache2 = memoize3Cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize3Cache.set(a1, cache2);
            const cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const newValue = fn(a1, a2, a3);
            cache3.set(a3, newValue);
            return newValue;
        }
        let cache3 = cache2.get(a2);
        if (!cache3) {
            cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const newValue = fn(a1, a2, a3);
            cache3.set(a3, newValue);
            return newValue;
        }
        const cachedValue = cache3.get(a3);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3);
            cache3.set(a3, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
exports.memoize3 = memoize3;
function memoize4(fn) {
    const memoize4Cache = new WeakMap();
    return function memoized(a1, a2, a3, a4) {
        let cache2 = memoize4Cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize4Cache.set(a1, cache2);
            const cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        let cache3 = cache2.get(a2);
        if (!cache3) {
            cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        const cache4 = cache3.get(a3);
        if (!cache4) {
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        const cachedValue = cache4.get(a4);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
exports.memoize4 = memoize4;
function memoize5(fn) {
    const memoize5Cache = new WeakMap();
    return function memoized(a1, a2, a3, a4, a5) {
        let cache2 = memoize5Cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize5Cache.set(a1, cache2);
            const cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        let cache3 = cache2.get(a2);
        if (!cache3) {
            cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        let cache4 = cache3.get(a3);
        if (!cache4) {
            cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        let cache5 = cache4.get(a4);
        if (!cache5) {
            cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        const cachedValue = cache5.get(a5);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
exports.memoize5 = memoize5;
const memoize2of4cache = new WeakMap();
function memoize2of4(fn) {
    return function memoized(a1, a2, a3, a4) {
        let cache2 = memoize2of4cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize2of4cache.set(a1, cache2);
            const newValue = fn(a1, a2, a3, a4);
            cache2.set(a2, newValue);
            return newValue;
        }
        const cachedValue = cache2.get(a2);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3, a4);
            cache2.set(a2, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
exports.memoize2of4 = memoize2of4;
