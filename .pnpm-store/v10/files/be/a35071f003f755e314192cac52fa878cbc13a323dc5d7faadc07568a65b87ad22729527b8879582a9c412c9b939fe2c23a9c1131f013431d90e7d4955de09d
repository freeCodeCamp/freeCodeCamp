import { buildCharacterArbitrary } from './_internals/builders/CharacterArbitraryBuilder.js';
import { indexToPrintableIndexMapper, indexToPrintableIndexUnmapper } from './_internals/mappers/IndexToPrintableIndex.js';
const gapSize = 0xdfff + 1 - 0xd800;
function unicodeMapper(v) {
    if (v < 0xd800)
        return indexToPrintableIndexMapper(v);
    return v + gapSize;
}
function unicodeUnmapper(v) {
    if (v < 0xd800)
        return indexToPrintableIndexUnmapper(v);
    if (v <= 0xdfff)
        return -1;
    return v - gapSize;
}
export function unicode() {
    return buildCharacterArbitrary(0x0000, 0xffff - gapSize, unicodeMapper, unicodeUnmapper);
}
