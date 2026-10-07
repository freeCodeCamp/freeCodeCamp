"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToString = void 0;
const quote_1 = require("./quote");
const function_1 = require("./function");
const array_1 = require("./array");
/**
 * Transform an object into a string.
 */
const objectToString = (value, space, next, key) => {
    // Support buffer in all environments.
    if (typeof Buffer === "function" && Buffer.isBuffer(value)) {
        return `Buffer.from(${next(value.toString("base64"))}, 'base64')`;
    }
    // Support `global` under test environments that don't print `[object global]`.
    if (typeof global === "object" && value === global) {
        return globalToString(value, space, next, key);
    }
    // Use the internal object string to select stringify method.
    const toString = OBJECT_TYPES[Object.prototype.toString.call(value)];
    return toString ? toString(value, space, next, key) : undefined;
};
exports.objectToString = objectToString;
/**
 * Stringify an object of keys and values.
 */
const rawObjectToString = (obj, indent, next, key) => {
    const eol = indent ? "\n" : "";
    const space = indent ? " " : "";
    // Iterate over object keys and concat string together.
    const values = Object.keys(obj)
        .reduce(function (values, key) {
        const fn = obj[key];
        const result = next(fn, key);
        // Omit `undefined` object entries.
        if (result === undefined)
            return values;
        // String format the value data.
        const value = result.split("\n").join(`\n${indent}`);
        // Skip `key` prefix for function parser.
        if (function_1.USED_METHOD_KEY.has(fn)) {
            values.push(`${indent}${value}`);
            return values;
        }
        values.push(`${indent}${quote_1.quoteKey(key, next)}:${space}${value}`);
        return values;
    }, [])
        .join(`,${eol}`);
    // Avoid new lines in an empty object.
    if (values === "")
        return "{}";
    return `{${eol}${values}${eol}}`;
};
/**
 * Stringify global variable access.
 */
const globalToString = (value, space, next) => {
    return `Function(${next("return this")})()`;
};
/**
 * Convert JavaScript objects into strings.
 */
const OBJECT_TYPES = {
    "[object Array]": array_1.arrayToString,
    "[object Object]": rawObjectToString,
    "[object Error]": (error, space, next) => {
        return `new Error(${next(error.message)})`;
    },
    "[object Date]": (date) => {
        return `new Date(${date.getTime()})`;
    },
    "[object String]": (str, space, next) => {
        return `new String(${next(str.toString())})`;
    },
    "[object Number]": (num) => {
        return `new Number(${num})`;
    },
    "[object Boolean]": (bool) => {
        return `new Boolean(${bool})`;
    },
    "[object Set]": (set, space, next) => {
        return `new Set(${next(Array.from(set))})`;
    },
    "[object Map]": (map, space, next) => {
        return `new Map(${next(Array.from(map))})`;
    },
    "[object RegExp]": String,
    "[object global]": globalToString,
    "[object Window]": globalToString,
};
//# sourceMappingURL=object.js.map