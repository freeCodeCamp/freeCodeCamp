"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64 = base64;
const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
function base64Mapper(v) {
    if (v < 26)
        return v + 65;
    if (v < 52)
        return v + 97 - 26;
    if (v < 62)
        return v + 48 - 52;
    return v === 62 ? 43 : 47;
}
function base64Unmapper(v) {
    if (v >= 65 && v <= 90)
        return v - 65;
    if (v >= 97 && v <= 122)
        return v - 97 + 26;
    if (v >= 48 && v <= 57)
        return v - 48 + 52;
    return v === 43 ? 62 : v === 47 ? 63 : -1;
}
function base64() {
    return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0, 63, base64Mapper, base64Unmapper);
}
