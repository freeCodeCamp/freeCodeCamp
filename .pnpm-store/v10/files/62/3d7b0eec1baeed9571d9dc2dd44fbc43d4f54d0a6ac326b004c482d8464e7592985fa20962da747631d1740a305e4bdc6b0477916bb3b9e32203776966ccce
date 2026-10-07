export const cloneMethod = Symbol.for('fast-check/cloneMethod');
export function hasCloneMethod(instance) {
    return (instance !== null &&
        (typeof instance === 'object' || typeof instance === 'function') &&
        cloneMethod in instance &&
        typeof instance[cloneMethod] === 'function');
}
export function cloneIfNeeded(instance) {
    return hasCloneMethod(instance) ? instance[cloneMethod]() : instance;
}
