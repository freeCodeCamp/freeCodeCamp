export function isIterableObject(value) {
    return value != null && typeof value === 'object' && Symbol.iterator in value;
}
export function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
export function isPromise(value) {
    return isObjectLike(value) && typeof value['then'] === 'function';
}
export function promiseReduce(values, callbackFn, initialValue) {
    let accumulator = initialValue;
    for (const value of values) {
        accumulator = isPromise(accumulator)
            ? accumulator.then(resolved => callbackFn(resolved, value))
            : callbackFn(accumulator, value);
    }
    return accumulator;
}
export function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
