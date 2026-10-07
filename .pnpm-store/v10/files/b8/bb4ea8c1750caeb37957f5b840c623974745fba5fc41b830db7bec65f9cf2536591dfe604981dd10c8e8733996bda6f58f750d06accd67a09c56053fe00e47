import { boolean } from '../../boolean.js';
import { constant } from '../../constant.js';
import { double } from '../../double.js';
export function jsonConstraintsBuilder(stringArbitrary, constraints) {
    const { depthSize, maxDepth } = constraints;
    const key = stringArbitrary;
    const values = [
        boolean(),
        double({ noDefaultInfinity: true, noNaN: true }),
        stringArbitrary,
        constant(null),
    ];
    return { key, values, depthSize, maxDepth };
}
