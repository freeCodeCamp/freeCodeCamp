"use strict";

/* @minVersion 7.22.0 */

function _using(stack, value, isAwait) {
    if (value === null || value === void 0) return value;
    if (Object(value) !== value) {
        throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
    }
    // core-js-pure uses Symbol.for for polyfilling well-known symbols
    if (isAwait) {
        var dispose = value[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
    }
    if (dispose === null || dispose === void 0) {
        dispose = value[Symbol.dispose || Symbol.for("Symbol.dispose")];
    }
    if (typeof dispose !== "function") {
        throw new TypeError(`Property [Symbol.dispose] is not a function.`);
    }
    stack.push({ v: value, d: dispose, a: isAwait });
    return value;
}

exports._ = _using;
