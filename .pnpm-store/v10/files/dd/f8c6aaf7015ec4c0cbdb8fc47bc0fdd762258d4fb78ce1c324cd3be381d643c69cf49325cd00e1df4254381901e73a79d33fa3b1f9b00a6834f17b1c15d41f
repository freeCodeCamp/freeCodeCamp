import { buildCharacterArbitrary } from './_internals/builders/CharacterArbitraryBuilder.js';
import { indexToPrintableIndexMapper, indexToPrintableIndexUnmapper } from './_internals/mappers/IndexToPrintableIndex.js';
export function ascii() {
    return buildCharacterArbitrary(0x00, 0x7f, indexToPrintableIndexMapper, indexToPrintableIndexUnmapper);
}
