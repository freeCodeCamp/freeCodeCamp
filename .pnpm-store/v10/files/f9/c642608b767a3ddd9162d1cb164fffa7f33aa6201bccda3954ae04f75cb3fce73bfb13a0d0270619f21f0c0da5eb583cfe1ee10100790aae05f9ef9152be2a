"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
const quote_1 = require("./quote");
const object_1 = require("./object");
const function_1 = require("./function");
/**
 * Stringify primitive values.
 */
const PRIMITIVE_TYPES = {
    string: quote_1.quoteString,
    number: (value) => (Object.is(value, -0) ? "-0" : String(value)),
    boolean: String,
    symbol: (value, space, next) => {
        const key = Symbol.keyFor(value);
        if (key !== undefined)
            return `Symbol.for(${next(key)})`;
        // ES2018 `Symbol.description`.
        return `Symbol(${next(value.description)})`;
    },
    bigint: (value, space, next) => {
        return `BigInt(${next(String(value))})`;
    },
    undefined: String,
    object: object_1.objectToString,
    function: function_1.functionToString,
};
/**
 * Stringify a value recursively.
 */
const toString = (value, space, next, key) => {
    if (value === null)
        return "null";
    return PRIMITIVE_TYPES[typeof value](value, space, next, key);
};
exports.toString = toString;
//# sourceMappingURL=stringify.js.map