"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMethod = void 0;
exports.hasCloneMethod = hasCloneMethod;
exports.cloneIfNeeded = cloneIfNeeded;
exports.cloneMethod = Symbol.for('fast-check/cloneMethod');
function hasCloneMethod(instance) {
    return (instance !== null &&
        (typeof instance === 'object' || typeof instance === 'function') &&
        exports.cloneMethod in instance &&
        typeof instance[exports.cloneMethod] === 'function');
}
function cloneIfNeeded(instance) {
    return hasCloneMethod(instance) ? instance[exports.cloneMethod]() : instance;
}
