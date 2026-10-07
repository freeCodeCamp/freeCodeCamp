"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAll = exports.hasOwn = void 0;
/* eslint-disable @typescript-eslint/unbound-method */
exports.hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
const objToString = Function.prototype.call.bind(Object.prototype.toString);
/* eslint-enable @typescript-eslint/unbound-method */
function isPlainObject(obj) {
    return objToString(obj) === '[object Object]';
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function merge(target, source, options) {
    for (const key of Object.keys(source)) {
        const newValue = source[key];
        if ((0, exports.hasOwn)(target, key)) {
            if (Array.isArray(target[key]) && Array.isArray(newValue)) {
                if (options.mergeArrays) {
                    target[key].push(...newValue);
                    continue;
                }
            }
            else if (isPlainObject(target[key]) && isPlainObject(newValue)) {
                target[key] = merge(target[key], newValue, options);
                continue;
            }
        }
        target[key] = newValue;
    }
    return target;
}
/**
 * Merges multiple objects. Doesn't care about cloning non-primitives, as we load all these objects fresh from a file.
 */
function mergeAll(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
objects, options) {
    return objects.reduce((target, source) => merge(target, source, options), {});
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=merge.js.map