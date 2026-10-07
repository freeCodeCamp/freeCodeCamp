import { IntegerArbitrary } from './_internals/IntegerArbitrary.js';
const safeNumberIsInteger = Number.isInteger;
function buildCompleteIntegerConstraints(constraints) {
    const min = constraints.min !== undefined ? constraints.min : -0x80000000;
    const max = constraints.max !== undefined ? constraints.max : 0x7fffffff;
    return { min, max };
}
export function integer(constraints = {}) {
    const fullConstraints = buildCompleteIntegerConstraints(constraints);
    if (fullConstraints.min > fullConstraints.max) {
        throw new Error('fc.integer maximum value should be equal or greater than the minimum one');
    }
    if (!safeNumberIsInteger(fullConstraints.min)) {
        throw new Error('fc.integer minimum value should be an integer');
    }
    if (!safeNumberIsInteger(fullConstraints.max)) {
        throw new Error('fc.integer maximum value should be an integer');
    }
    return new IntegerArbitrary(fullConstraints.min, fullConstraints.max);
}
