import { getOrCreateAlphaNumericPercentArbitrary } from './_internals/builders/CharacterRangeArbitraryBuilder.js';
import { string } from './string.js';
export function webSegment(constraints = {}) {
    return string({ unit: getOrCreateAlphaNumericPercentArbitrary("-._~!$&'()*+,;=:@"), size: constraints.size });
}
