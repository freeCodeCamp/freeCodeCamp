"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToFP = void 0;
function convertToFP(fn, arity, curriedArgs = []) {
    if (curriedArgs.length >= arity) {
        return fn(...curriedArgs.slice(0, arity).reverse());
    }
    return function (...args) {
        return convertToFP(fn, arity, curriedArgs.concat(args));
    };
}
exports.convertToFP = convertToFP;
