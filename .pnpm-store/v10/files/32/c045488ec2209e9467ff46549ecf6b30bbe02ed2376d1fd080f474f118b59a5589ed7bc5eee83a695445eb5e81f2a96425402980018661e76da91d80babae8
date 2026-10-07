import { getOrCreateAlphaNumericPercentArbitrary } from './CharacterRangeArbitraryBuilder.js';
import { string } from '../../string.js';
export function buildUriQueryOrFragmentArbitrary(size) {
    return string({ unit: getOrCreateAlphaNumericPercentArbitrary("-._~!$&'()*+,;=:@/?"), size });
}
