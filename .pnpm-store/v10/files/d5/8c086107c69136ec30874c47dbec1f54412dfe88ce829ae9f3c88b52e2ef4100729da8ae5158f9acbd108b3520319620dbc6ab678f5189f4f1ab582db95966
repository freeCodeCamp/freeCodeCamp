"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasOwnProperty = exports.promiseReduce = exports.isPromise = exports.isObjectLike = exports.isIterableObject = void 0;
function isIterableObject(value) {
    return value != null && typeof value === 'object' && Symbol.iterator in value;
}
exports.isIterableObject = isIterableObject;
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
exports.isObjectLike = isObjectLike;
function isPromise(value) {
    return isObjectLike(value) && typeof value['then'] === 'function';
}
exports.isPromise = isPromise;
function promiseReduce(values, callbackFn, initialValue) {
    let accumulator = initialValue;
    for (const value of values) {
        accumulator = isPromise(accumulator)
            ? accumulator.then(resolved => callbackFn(resolved, value))
            : callbackFn(accumulator, value);
    }
    return accumulator;
}
exports.promiseReduce = promiseReduce;
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
exports.hasOwnProperty = hasOwnProperty;
