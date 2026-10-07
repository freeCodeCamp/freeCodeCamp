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
exports.unique = exports.mergeWithRules = exports.mergeWithCustomize = exports["default"] = exports.merge = exports.CustomizeRule = exports.customizeObject = exports.customizeArray = void 0;
var wildcard_1 = __importDefault(require("wildcard"));
var merge_with_1 = __importDefault(require("./merge-with"));
var join_arrays_1 = __importDefault(require("./join-arrays"));
var unique_1 = __importDefault(require("./unique"));
exports.unique = unique_1["default"];
var types_1 = require("./types");
exports.CustomizeRule = types_1.CustomizeRule;
var utils_1 = require("./utils");
function merge(firstConfiguration) {
    var configurations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        configurations[_i - 1] = arguments[_i];
    }
    return mergeWithCustomize({}).apply(void 0, __spreadArray([firstConfiguration], __read(configurations)));
}
exports.merge = merge;
exports["default"] = merge;
function mergeWithCustomize(options) {
    return function mergeWithOptions(firstConfiguration) {
        var configurations = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            configurations[_i - 1] = arguments[_i];
        }
        if (utils_1.isUndefined(firstConfiguration) || configurations.some(utils_1.isUndefined)) {
            throw new TypeError("Merging undefined is not supported");
        }
        // @ts-ignore
        if (firstConfiguration.then) {
            throw new TypeError("Promises are not supported");
        }
        // No configuration at all
        if (!firstConfiguration) {
            return {};
        }
        if (configurations.length === 0) {
            if (Array.isArray(firstConfiguration)) {
                // Empty array
                if (firstConfiguration.length === 0) {
                    return {};
                }
                if (firstConfiguration.some(utils_1.isUndefined)) {
                    throw new TypeError("Merging undefined is not supported");
                }
                // @ts-ignore
                if (firstConfiguration[0].then) {
                    throw new TypeError("Promises are not supported");
                }
                return merge_with_1["default"](firstConfiguration, join_arrays_1["default"](options));
            }
            return firstConfiguration;
        }
        return merge_with_1["default"]([firstConfiguration].concat(configurations), join_arrays_1["default"](options));
    };
}
exports.mergeWithCustomize = mergeWithCustomize;
function customizeArray(rules) {
    return function (a, b, key) {
        var matchedRule = Object.keys(rules).find(function (rule) { return wildcard_1["default"](rule, key); }) || "";
        if (matchedRule) {
            switch (rules[matchedRule]) {
                case types_1.CustomizeRule.Prepend:
                    return __spreadArray(__spreadArray([], __read(b)), __read(a));
                case types_1.CustomizeRule.Replace:
                    return b;
                case types_1.CustomizeRule.Append:
                default:
                    return __spreadArray(__spreadArray([], __read(a)), __read(b));
            }
        }
    };
}
exports.customizeArray = customizeArray;
function mergeWithRules(rules) {
    return mergeWithCustomize({
        customizeArray: function (a, b, key) {
            var currentRule = rules;
            key.split(".").forEach(function (k) {
                if (!currentRule) {
                    return;
                }
                currentRule = currentRule[k];
            });
            if (utils_1.isPlainObject(currentRule)) {
                return mergeWithRule({ currentRule: currentRule, a: a, b: b });
            }
            if (typeof currentRule === "string") {
                return mergeIndividualRule({ currentRule: currentRule, a: a, b: b });
            }
            return undefined;
        }
    });
}
exports.mergeWithRules = mergeWithRules;
var isArray = Array.isArray;
function mergeWithRule(_a) {
    var currentRule = _a.currentRule, a = _a.a, b = _a.b;
    if (!isArray(a)) {
        return a;
    }
    var bAllMatches = [];
    var ret = a.map(function (ao) {
        if (!utils_1.isPlainObject(currentRule)) {
            return ao;
        }
        var ret = {};
        var rulesToMatch = [];
        var operations = {};
        Object.entries(currentRule).forEach(function (_a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            if (v === types_1.CustomizeRule.Match) {
                rulesToMatch.push(k);
            }
            else {
                operations[k] = v;
            }
        });
        var bMatches = b.filter(function (o) {
            var matches = rulesToMatch.every(function (rule) { var _a, _b; return ((_a = ao[rule]) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = o[rule]) === null || _b === void 0 ? void 0 : _b.toString()); });
            if (matches) {
                bAllMatches.push(o);
            }
            return matches;
        });
        if (!utils_1.isPlainObject(ao)) {
            return ao;
        }
        Object.entries(ao).forEach(function (_a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            var rule = currentRule;
            switch (currentRule[k]) {
                case types_1.CustomizeRule.Match:
                    ret[k] = v;
                    Object.entries(rule).forEach(function (_a) {
                        var _b = __read(_a, 2), k = _b[0], v = _b[1];
                        if (v === types_1.CustomizeRule.Replace && bMatches.length > 0) {
                            var val = last(bMatches)[k];
                            if (typeof val !== "undefined") {
                                ret[k] = val;
                            }
                        }
                    });
                    break;
                case types_1.CustomizeRule.Append:
                    if (!bMatches.length) {
                        ret[k] = v;
                        break;
                    }
                    var appendValue = last(bMatches)[k];
                    if (!isArray(v) || !isArray(appendValue)) {
                        throw new TypeError("Trying to append non-arrays");
                    }
                    ret[k] = v.concat(appendValue);
                    break;
                case types_1.CustomizeRule.Merge:
                    if (!bMatches.length) {
                        ret[k] = v;
                        break;
                    }
                    var lastValue = last(bMatches)[k];
                    if (!utils_1.isPlainObject(v) || !utils_1.isPlainObject(lastValue)) {
                        throw new TypeError("Trying to merge non-objects");
                    }
                    // deep merge
                    ret[k] = merge(v, lastValue);
                    break;
                case types_1.CustomizeRule.Prepend:
                    if (!bMatches.length) {
                        ret[k] = v;
                        break;
                    }
                    var prependValue = last(bMatches)[k];
                    if (!isArray(v) || !isArray(prependValue)) {
                        throw new TypeError("Trying to prepend non-arrays");
                    }
                    ret[k] = prependValue.concat(v);
                    break;
                case types_1.CustomizeRule.Replace:
                    ret[k] = bMatches.length > 0 ? last(bMatches)[k] : v;
                    break;
                default:
                    var currentRule_1 = operations[k];
                    // Use .flat(); starting from Node 12
                    var b_1 = bMatches
                        .map(function (o) { return o[k]; })
                        .reduce(function (acc, val) {
                        return isArray(acc) && isArray(val) ? __spreadArray(__spreadArray([], __read(acc)), __read(val)) : acc;
                    }, []);
                    ret[k] = mergeWithRule({ currentRule: currentRule_1, a: v, b: b_1 });
                    break;
            }
        });
        return ret;
    });
    return ret.concat(b.filter(function (o) { return !bAllMatches.includes(o); }));
}
function mergeIndividualRule(_a) {
    var currentRule = _a.currentRule, a = _a.a, b = _a.b;
    // What if there's no match?
    switch (currentRule) {
        case types_1.CustomizeRule.Append:
            return a.concat(b);
        case types_1.CustomizeRule.Prepend:
            return b.concat(a);
        case types_1.CustomizeRule.Replace:
            return b;
    }
    return a;
}
function last(arr) {
    return arr[arr.length - 1];
}
function customizeObject(rules) {
    return function (a, b, key) {
        switch (rules[key]) {
            case types_1.CustomizeRule.Prepend:
                return merge_with_1["default"]([b, a], join_arrays_1["default"]());
            case types_1.CustomizeRule.Replace:
                return b;
            case types_1.CustomizeRule.Append:
                return merge_with_1["default"]([a, b], join_arrays_1["default"]());
        }
    };
}
exports.customizeObject = customizeObject;
//# sourceMappingURL=index.js.map