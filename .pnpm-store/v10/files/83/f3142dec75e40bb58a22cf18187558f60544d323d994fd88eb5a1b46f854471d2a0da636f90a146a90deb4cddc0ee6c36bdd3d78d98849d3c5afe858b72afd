import { array } from './array.js';
import { patternsToStringMapper, patternsToStringUnmapperFor } from './_internals/mappers/PatternsToString.js';
import { createSlicesForStringLegacy } from './_internals/helpers/SlicesForStringBuilder.js';
const safeObjectAssign = Object.assign;
export function stringOf(charArb, constraints = {}) {
    const unmapper = patternsToStringUnmapperFor(charArb, constraints);
    const experimentalCustomSlices = createSlicesForStringLegacy(charArb, unmapper);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return array(charArb, enrichedConstraints).map(patternsToStringMapper, unmapper);
}
