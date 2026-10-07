/**
 *
 * utils
 *
 */
/** @private */
export function extendedTypeof(val) {
    if (val === null) {
        return 'null';
    }
    if (Array.isArray(val)) {
        return 'array';
    }
    return typeof val;
}
/** @private */
export function isObject(val) {
    return typeof val === 'object' && val !== null;
}
/** @private */
export function isExecutionResult(val) {
    return (isObject(val) &&
        ('data' in val || ('data' in val && val.data == null && 'errors' in val)));
}
/** @private */
export function isAsyncIterable(val) {
    return typeof Object(val)[Symbol.asyncIterator] === 'function';
}
