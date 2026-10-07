import { ArrayArbitrary } from './_internals/ArrayArbitrary.js';
import { MaxLengthUpperBound, maxGeneratedLengthFromSizeForArbitrary, } from './_internals/helpers/MaxLengthFromMinLength.js';
function array(arb, constraints = {}) {
    const size = constraints.size;
    const minLength = constraints.minLength || 0;
    const maxLengthOrUnset = constraints.maxLength;
    const depthIdentifier = constraints.depthIdentifier;
    const maxLength = maxLengthOrUnset !== undefined ? maxLengthOrUnset : MaxLengthUpperBound;
    const specifiedMaxLength = maxLengthOrUnset !== undefined;
    const maxGeneratedLength = maxGeneratedLengthFromSizeForArbitrary(size, minLength, maxLength, specifiedMaxLength);
    const customSlices = constraints.experimentalCustomSlices || [];
    return new ArrayArbitrary(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, undefined, customSlices);
}
export { array };
