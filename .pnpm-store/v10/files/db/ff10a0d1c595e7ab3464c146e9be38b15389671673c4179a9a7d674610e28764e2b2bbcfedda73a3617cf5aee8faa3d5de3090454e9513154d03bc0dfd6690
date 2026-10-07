"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = exports.isObject = exports.isString = void 0;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isObject(value) {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
}
exports.isObject = isObject;
function isFunction(value) {
    return !!(value &&
        value.constructor &&
        value.call &&
        typeof value === 'function' &&
        value.apply);
}
exports.isFunction = isFunction;
//# sourceMappingURL=is.js.map