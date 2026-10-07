"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsyncIterable = void 0;
function isAsyncIterable(value) {
    return (typeof value === 'object' &&
        value != null &&
        Symbol.asyncIterator in value &&
        typeof value[Symbol.asyncIterator] === 'function');
}
exports.isAsyncIterable = isAsyncIterable;
