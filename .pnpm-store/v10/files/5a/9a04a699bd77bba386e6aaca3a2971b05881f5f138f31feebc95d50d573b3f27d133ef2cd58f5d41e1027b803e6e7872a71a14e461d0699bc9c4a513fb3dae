"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexa = hexa;
const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
function hexaMapper(v) {
    return v < 10
        ? v + 48
        : v + 97 - 10;
}
function hexaUnmapper(v) {
    return v < 58
        ? v - 48
        : v >= 97 && v < 103
            ? v - 97 + 10
            : -1;
}
function hexa() {
    return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0, 15, hexaMapper, hexaUnmapper);
}
