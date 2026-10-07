"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullUnicode = fullUnicode;
const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
const IndexToPrintableIndex_1 = require("./_internals/mappers/IndexToPrintableIndex");
const gapSize = 0xdfff + 1 - 0xd800;
function unicodeMapper(v) {
    if (v < 0xd800)
        return (0, IndexToPrintableIndex_1.indexToPrintableIndexMapper)(v);
    return v + gapSize;
}
function unicodeUnmapper(v) {
    if (v < 0xd800)
        return (0, IndexToPrintableIndex_1.indexToPrintableIndexUnmapper)(v);
    if (v <= 0xdfff)
        return -1;
    return v - gapSize;
}
function fullUnicode() {
    return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0x0000, 0x10ffff - gapSize, unicodeMapper, unicodeUnmapper);
}
