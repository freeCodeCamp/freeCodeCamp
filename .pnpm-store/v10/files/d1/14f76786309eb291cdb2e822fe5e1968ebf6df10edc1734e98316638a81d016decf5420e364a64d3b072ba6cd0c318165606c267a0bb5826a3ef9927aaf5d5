"use strict";
exports.__esModule = true;
exports.isUndefined = exports.isPlainObject = exports.isFunction = exports.isRegex = void 0;
function isRegex(o) {
    return o instanceof RegExp;
}
exports.isRegex = isRegex;
// https://stackoverflow.com/a/7356528/228885
function isFunction(functionToCheck) {
    return (functionToCheck && {}.toString.call(functionToCheck) === "[object Function]");
}
exports.isFunction = isFunction;
function isPlainObject(a) {
    if (a === null || Array.isArray(a)) {
        return false;
    }
    return typeof a === "object";
}
exports.isPlainObject = isPlainObject;
function isUndefined(a) {
    return typeof a === "undefined";
}
exports.isUndefined = isUndefined;
//# sourceMappingURL=utils.js.map