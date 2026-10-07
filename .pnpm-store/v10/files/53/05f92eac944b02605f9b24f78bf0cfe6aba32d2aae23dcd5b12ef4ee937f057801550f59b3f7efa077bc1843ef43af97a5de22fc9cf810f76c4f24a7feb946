import { array } from './array.js';
import { base64 } from './base64.js';
import { MaxLengthUpperBound } from './_internals/helpers/MaxLengthFromMinLength.js';
import { codePointsToStringMapper, codePointsToStringUnmapper } from './_internals/mappers/CodePointsToString.js';
import { stringToBase64Mapper, stringToBase64Unmapper } from './_internals/mappers/StringToBase64.js';
import { createSlicesForStringLegacy } from './_internals/helpers/SlicesForStringBuilder.js';
function base64String(constraints = {}) {
    const { minLength: unscaledMinLength = 0, maxLength: unscaledMaxLength = MaxLengthUpperBound, size } = constraints;
    const minLength = unscaledMinLength + 3 - ((unscaledMinLength + 3) % 4);
    const maxLength = unscaledMaxLength - (unscaledMaxLength % 4);
    const requestedSize = constraints.maxLength === undefined && size === undefined ? '=' : size;
    if (minLength > maxLength)
        throw new Error('Minimal length should be inferior or equal to maximal length');
    if (minLength % 4 !== 0)
        throw new Error('Minimal length of base64 strings must be a multiple of 4');
    if (maxLength % 4 !== 0)
        throw new Error('Maximal length of base64 strings must be a multiple of 4');
    const charArbitrary = base64();
    const experimentalCustomSlices = createSlicesForStringLegacy(charArbitrary, codePointsToStringUnmapper);
    const enrichedConstraints = {
        minLength,
        maxLength,
        size: requestedSize,
        experimentalCustomSlices,
    };
    return array(charArbitrary, enrichedConstraints)
        .map(codePointsToStringMapper, codePointsToStringUnmapper)
        .map(stringToBase64Mapper, stringToBase64Unmapper);
}
export { base64String };
