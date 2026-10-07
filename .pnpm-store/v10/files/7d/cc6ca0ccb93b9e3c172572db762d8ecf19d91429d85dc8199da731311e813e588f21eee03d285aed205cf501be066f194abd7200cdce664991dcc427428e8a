"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uriDecode = void 0;
const HEX = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
};
const UTF8 = {
    accept: 12,
    reject: 0,
    data: [
        // Maps bytes to character to a transition
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        // Maps a state to a new state when adding a transition
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
        // Maps the current transition to a mask that needs to apply to the byte
        0x7f, 0x3f, 0x3f, 0x3f, 0x00, 0x1f, 0x0f, 0x0f, 0x0f, 0x07, 0x07, 0x07
    ]
};
/**
 * Faster version of decodeURIComponent() that does not throw.
 *
 * @param string - the URL string to decode.
 *
 * @returns the decoded string or null if invalid.
 */
function uriDecode(string) {
    let percentPos = string.indexOf('%');
    if (percentPos === -1) {
        return string;
    }
    let decoded = '';
    let last = 0;
    let codepoint = 0;
    let startOfOctets = percentPos;
    let state = UTF8.accept;
    while (percentPos > -1 && percentPos < string.length) {
        const high = resolveHex(string[percentPos + 1], 4);
        const low = resolveHex(string[percentPos + 2], 0);
        const byte = high | low;
        const type = UTF8.data[byte];
        state = UTF8.data[256 + state + type];
        codepoint = (codepoint << 6) | (byte & UTF8.data[364 + type]);
        if (state === UTF8.accept) {
            decoded += string.slice(last, startOfOctets);
            decoded +=
                codepoint <= 0xffff
                    ? String.fromCharCode(codepoint)
                    : String.fromCharCode(0xd7c0 + (codepoint >> 10), 0xdc00 + (codepoint & 0x3ff));
            codepoint = 0;
            last = percentPos + 3;
            percentPos = string.indexOf('%', last);
            startOfOctets = percentPos;
            continue;
        }
        if (state === UTF8.reject) {
            return null;
        }
        percentPos += 3;
        if (percentPos >= string.length || string[percentPos] !== '%') {
            return null;
        }
    }
    return decoded + string.slice(last);
}
exports.uriDecode = uriDecode;
function resolveHex(char, shift) {
    const i = HEX[char];
    return i === undefined ? 255 : i << shift;
}
// Adapted from:
// Copyright (c) 2017-2019 Justin Ridgewell, MIT Licensed, https://github.com/jridgewell/safe-decode-string-component
// Copyright (c) 2008-2009 Bjoern Hoehrmann <bjoern@hoehrmann.de>, MIT Licensed, http://bjoern.hoehrmann.de/utf-8/decoder/dfa/
//# sourceMappingURL=decode.js.map