import { buildCharacterArbitrary } from './_internals/builders/CharacterArbitraryBuilder.js';
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
export function hexa() {
    return buildCharacterArbitrary(0, 15, hexaMapper, hexaUnmapper);
}
