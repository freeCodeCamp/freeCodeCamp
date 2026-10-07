import { MaxLengthUpperBound } from '../helpers/MaxLengthFromMinLength.js';
import { safeJoin, Error } from '../../../utils/globals.js';
import { tokenizeString } from '../helpers/TokenizeString.js';
export function patternsToStringMapper(tab) {
    return safeJoin(tab, '');
}
function minLengthFrom(constraints) {
    return constraints.minLength !== undefined ? constraints.minLength : 0;
}
function maxLengthFrom(constraints) {
    return constraints.maxLength !== undefined ? constraints.maxLength : MaxLengthUpperBound;
}
export function patternsToStringUnmapperIsValidLength(tokens, constraints) {
    return minLengthFrom(constraints) <= tokens.length && tokens.length <= maxLengthFrom(constraints);
}
export function patternsToStringUnmapperFor(patternsArb, constraints) {
    return function patternsToStringUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported value');
        }
        const tokens = tokenizeString(patternsArb, value, minLengthFrom(constraints), maxLengthFrom(constraints));
        if (tokens === undefined) {
            throw new Error('Unable to unmap received string');
        }
        return tokens;
    };
}
