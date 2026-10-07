"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var clone_deep_1 = __importDefault(require("clone-deep"));
var merge_with_1 = __importDefault(require("./merge-with"));
var utils_1 = require("./utils");
var isArray = Array.isArray;
function joinArrays(_a) {
    var _b = _a === void 0 ? {} : _a, customizeArray = _b.customizeArray, customizeObject = _b.customizeObject, key = _b.key;
    return function _joinArrays(a, b, k) {
        var newKey = key ? key + "." + k : k;
        if (utils_1.isFunction(a) && utils_1.isFunction(b)) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _joinArrays(a.apply(void 0, __spreadArray([], __read(args))), b.apply(void 0, __spreadArray([], __read(args))), k);
            };
        }
        if (isArray(a) && isArray(b)) {
            var customResult = customizeArray && customizeArray(a, b, newKey);
            return customResult || __spreadArray(__spreadArray([], __read(a)), __read(b));
        }
        if (utils_1.isRegex(b)) {
            return b;
        }
        if (utils_1.isPlainObject(a) && utils_1.isPlainObject(b)) {
            var customResult = customizeObject && customizeObject(a, b, newKey);
            return (customResult ||
                merge_with_1["default"]([a, b], joinArrays({
                    customizeArray: customizeArray,
                    customizeObject: customizeObject,
                    key: newKey
                })));
        }
        if (utils_1.isPlainObject(b)) {
            return clone_deep_1["default"](b);
        }
        if (isArray(b)) {
            return __spreadArray([], __read(b));
        }
        return b;
    };
}
exports["default"] = joinArrays;
//# sourceMappingURL=join-arrays.js.map