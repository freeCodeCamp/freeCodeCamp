import { buildCharacterArbitrary } from './_internals/builders/CharacterArbitraryBuilder.js';
import { indexToPrintableIndexMapper, indexToPrintableIndexUnmapper } from './_internals/mappers/IndexToPrintableIndex.js';
export function char16bits() {
    return buildCharacterArbitrary(0x0000, 0xffff, indexToPrintableIndexMapper, indexToPrintableIndexUnmapper);
}
