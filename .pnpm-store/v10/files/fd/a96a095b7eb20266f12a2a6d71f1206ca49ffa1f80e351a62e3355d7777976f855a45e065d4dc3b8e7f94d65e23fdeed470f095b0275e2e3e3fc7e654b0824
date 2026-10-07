import { array } from './array.js';
import { char16bits } from './char16bits.js';
import { charsToStringMapper, charsToStringUnmapper } from './_internals/mappers/CharsToString.js';
import { createSlicesForStringLegacy } from './_internals/helpers/SlicesForStringBuilder.js';
const safeObjectAssign = Object.assign;
export function string16bits(constraints = {}) {
    const charArbitrary = char16bits();
    const experimentalCustomSlices = createSlicesForStringLegacy(charArbitrary, charsToStringUnmapper);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return array(charArbitrary, enrichedConstraints).map(charsToStringMapper, charsToStringUnmapper);
}
