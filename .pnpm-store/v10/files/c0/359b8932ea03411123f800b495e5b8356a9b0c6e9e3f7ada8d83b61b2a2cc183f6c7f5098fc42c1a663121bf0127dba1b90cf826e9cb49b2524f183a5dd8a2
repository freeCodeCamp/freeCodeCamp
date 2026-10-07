import { isArbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import { safeMap, safeSlice } from '../utils/globals.js';
import { FrequencyArbitrary } from './_internals/FrequencyArbitrary.js';
function isOneOfContraints(param) {
    return (param != null &&
        typeof param === 'object' &&
        !('generate' in param) &&
        !('arbitrary' in param) &&
        !('weight' in param));
}
function toWeightedArbitrary(maybeWeightedArbitrary) {
    if (isArbitrary(maybeWeightedArbitrary)) {
        return { arbitrary: maybeWeightedArbitrary, weight: 1 };
    }
    return maybeWeightedArbitrary;
}
function oneof(...args) {
    const constraints = args[0];
    if (isOneOfContraints(constraints)) {
        const weightedArbs = safeMap(safeSlice(args, 1), toWeightedArbitrary);
        return FrequencyArbitrary.from(weightedArbs, constraints, 'fc.oneof');
    }
    const weightedArbs = safeMap(args, toWeightedArbitrary);
    return FrequencyArbitrary.from(weightedArbs, {}, 'fc.oneof');
}
export { oneof };
