import { integer } from '../../integer.js';
import { indexToCharStringMapper, indexToCharStringUnmapper } from '../mappers/IndexToCharString.js';
export function buildCharacterArbitrary(min, max, mapToCode, unmapFromCode) {
    return integer({ min, max }).map((n) => indexToCharStringMapper(mapToCode(n)), (c) => unmapFromCode(indexToCharStringUnmapper(c)));
}
