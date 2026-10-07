import { array } from './array.js';
import { unicode } from './unicode.js';
import { codePointsToStringMapper, codePointsToStringUnmapper } from './_internals/mappers/CodePointsToString.js';
import { createSlicesForStringLegacy } from './_internals/helpers/SlicesForStringBuilder.js';
const safeObjectAssign = Object.assign;
export function unicodeString(constraints = {}) {
    const charArbitrary = unicode();
    const experimentalCustomSlices = createSlicesForStringLegacy(charArbitrary, codePointsToStringUnmapper);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return array(charArbitrary, enrichedConstraints).map(codePointsToStringMapper, codePointsToStringUnmapper);
}
