"use strict";
const getCodePoint = (character) => character.codePointAt(0);
const first = (x) => x[0];
const last = (x) => x[x.length - 1];
function toCodePoints(input) {
    const codepoints = [];
    const size = input.length;
    for (let i = 0; i < size; i += 1) {
        const before = input.charCodeAt(i);
        if (before >= 0xd800 && before <= 0xdbff && size > i + 1) {
            const next = input.charCodeAt(i + 1);
            if (next >= 0xdc00 && next <= 0xdfff) {
                codepoints.push((before - 0xd800) * 0x400 + next - 0xdc00 + 0x10000);
                i += 1;
                continue;
            }
        }
        codepoints.push(before);
    }
    return codepoints;
}
function saslprep({ unassigned_code_points, commonly_mapped_to_nothing, non_ASCII_space_characters, prohibited_characters, bidirectional_r_al, bidirectional_l, }, input, opts = {}) {
    const mapping2space = non_ASCII_space_characters;
    const mapping2nothing = commonly_mapped_to_nothing;
    if (typeof input !== 'string') {
        throw new TypeError('Expected string.');
    }
    if (input.length === 0) {
        return '';
    }
    const mapped_input = toCodePoints(input)
        .map((character) => (mapping2space.get(character) ? 0x20 : character))
        .filter((character) => !mapping2nothing.get(character));
    const normalized_input = String.fromCodePoint
        .apply(null, mapped_input)
        .normalize('NFKC');
    const normalized_map = toCodePoints(normalized_input);
    const hasProhibited = normalized_map.some((character) => prohibited_characters.get(character));
    if (hasProhibited) {
        throw new Error('Prohibited character, see https://tools.ietf.org/html/rfc4013#section-2.3');
    }
    if (opts.allowUnassigned !== true) {
        const hasUnassigned = normalized_map.some((character) => unassigned_code_points.get(character));
        if (hasUnassigned) {
            throw new Error('Unassigned code point, see https://tools.ietf.org/html/rfc4013#section-2.5');
        }
    }
    const hasBidiRAL = normalized_map.some((character) => bidirectional_r_al.get(character));
    const hasBidiL = normalized_map.some((character) => bidirectional_l.get(character));
    if (hasBidiRAL && hasBidiL) {
        throw new Error('String must not contain RandALCat and LCat at the same time,' +
            ' see https://tools.ietf.org/html/rfc3454#section-6');
    }
    const isFirstBidiRAL = bidirectional_r_al.get(getCodePoint(first(normalized_input)));
    const isLastBidiRAL = bidirectional_r_al.get(getCodePoint(last(normalized_input)));
    if (hasBidiRAL && !(isFirstBidiRAL && isLastBidiRAL)) {
        throw new Error('Bidirectional RandALCat character must be the first and the last' +
            ' character of the string, see https://tools.ietf.org/html/rfc3454#section-6');
    }
    return normalized_input;
}
saslprep.saslprep = saslprep;
saslprep.default = saslprep;
module.exports = saslprep;
//# sourceMappingURL=index.js.map