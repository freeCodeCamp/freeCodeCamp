import { BigInt } from '../utils/globals.js';
import { BigIntArbitrary } from './_internals/BigIntArbitrary.js';
function buildCompleteBigIntConstraints(constraints) {
    const DefaultPow = 256;
    const DefaultMin = BigInt(-1) << BigInt(DefaultPow - 1);
    const DefaultMax = (BigInt(1) << BigInt(DefaultPow - 1)) - BigInt(1);
    const min = constraints.min;
    const max = constraints.max;
    return {
        min: min !== undefined ? min : DefaultMin - (max !== undefined && max < BigInt(0) ? max * max : BigInt(0)),
        max: max !== undefined ? max : DefaultMax + (min !== undefined && min > BigInt(0) ? min * min : BigInt(0)),
    };
}
function extractBigIntConstraints(args) {
    if (args[0] === undefined) {
        return {};
    }
    if (args[1] === undefined) {
        const constraints = args[0];
        return constraints;
    }
    return { min: args[0], max: args[1] };
}
function bigInt(...args) {
    const constraints = buildCompleteBigIntConstraints(extractBigIntConstraints(args));
    if (constraints.min > constraints.max) {
        throw new Error('fc.bigInt expects max to be greater than or equal to min');
    }
    return new BigIntArbitrary(constraints.min, constraints.max);
}
export { bigInt };
