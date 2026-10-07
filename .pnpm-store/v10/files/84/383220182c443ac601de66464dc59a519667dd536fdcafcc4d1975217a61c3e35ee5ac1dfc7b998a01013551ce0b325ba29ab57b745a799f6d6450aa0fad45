"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeToString = exports.objectToString = void 0;
exports.createPromiseCallback = createPromiseCallback;
exports.inOperator = inOperator;
/** Wrapped `Object.prototype.toString`, so that you don't need to remember to use `.call()`. */
const objectToString = (obj) => Object.prototype.toString.call(obj);
exports.objectToString = objectToString;
/**
 * Converts an array to string, safely handling symbols, null prototype objects, and recursive arrays.
 */
const safeArrayToString = (arr, seenArrays) => {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString#description
    if (typeof arr.join !== 'function')
        return (0, exports.objectToString)(arr);
    seenArrays.add(arr);
    const mapped = arr.map((val) => val === null || val === undefined || seenArrays.has(val)
        ? ''
        : safeToStringImpl(val, seenArrays));
    return mapped.join();
};
const safeToStringImpl = (val, seenArrays = new WeakSet()) => {
    // Using .toString() fails for null/undefined and implicit conversion (val + "") fails for symbols
    // and objects with null prototype
    if (typeof val !== 'object' || val === null) {
        return String(val);
    }
    else if (typeof val.toString === 'function') {
        return Array.isArray(val)
            ? // Arrays have a weird custom toString that we need to replicate
                safeArrayToString(val, seenArrays)
            : // eslint-disable-next-line @typescript-eslint/no-base-to-string
                String(val);
    }
    else {
        // This case should just be objects with null prototype, so we can just use Object#toString
        return (0, exports.objectToString)(val);
    }
};
/** Safely converts any value to string, using the value's own `toString` when available. */
const safeToString = (val) => safeToStringImpl(val);
exports.safeToString = safeToString;
/** Converts a callback into a utility object where either a callback or a promise can be used. */
function createPromiseCallback(cb) {
    let callback;
    let resolve;
    let reject;
    const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    if (typeof cb === 'function') {
        callback = (err, result) => {
            try {
                if (err)
                    cb(err);
                // If `err` is null, we know `result` must be `T`
                // The assertion isn't *strictly* correct, as `T` could be nullish, but, ehh, good enough...
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                else
                    cb(null, result);
            }
            catch (e) {
                reject(e instanceof Error ? e : new Error());
            }
        };
    }
    else {
        callback = (err, result) => {
            try {
                // If `err` is null, we know `result` must be `T`
                // The assertion isn't *strictly* correct, as `T` could be nullish, but, ehh, good enough...
                if (err)
                    reject(err);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                else
                    resolve(result);
            }
            catch (e) {
                reject(e instanceof Error ? e : new Error());
            }
        };
    }
    return {
        promise,
        callback,
        resolve: (value) => {
            callback(null, value);
            return promise;
        },
        reject: (error) => {
            callback(error);
            return promise;
        },
    };
}
function inOperator(k, o) {
    return k in o;
}
