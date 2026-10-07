'use strict';

// Adapted from:
// Copyright (c) 2017-2019 Justin Ridgewell, MIT Licensed, https://github.com/jridgewell/safe-decode-string-component
// Copyright (c) 2008-2009 Bjoern Hoehrmann <bjoern@hoehrmann.de>, MIT Licensed, http://bjoern.hoehrmann.de/utf-8/decoder/dfa/


const internals = {};


exports.decode = function (string) {

    let percentPos = string.indexOf('%');
    if (percentPos === -1) {
        return string;
    }

    let decoded = '';
    let last = 0;
    let codepoint = 0;
    let startOfOctets = percentPos;
    let state = internals.utf8.accept;

    while (percentPos > -1 &&
        percentPos < string.length) {

        const high = internals.resolveHex(string[percentPos + 1], 4);
        const low = internals.resolveHex(string[percentPos + 2], 0);
        const byte = high | low;
        const type = internals.utf8.data[byte];
        state = internals.utf8.data[256 + state + type];
        codepoint = (codepoint << 6) | (byte & internals.utf8.data[364 + type]);

        if (state === internals.utf8.accept) {
            decoded += string.slice(last, startOfOctets);
            decoded += codepoint <= 0xFFFF
                ? String.fromCharCode(codepoint)
                : String.fromCharCode(0xD7C0 + (codepoint >> 10), 0xDC00 + (codepoint & 0x3FF));

            codepoint = 0;
            last = percentPos + 3;
            percentPos = string.indexOf('%', last);
            startOfOctets = percentPos;
            continue;
        }

        if (state === internals.utf8.reject) {
            return null;
        }

        percentPos += 3;

        if (percentPos >= string.length ||
            string[percentPos] !== '%') {

            return null;
        }
    }

    return decoded + string.slice(last);
};


internals.resolveHex = function (char, shift) {

    const i = internals.hex[char];
    return i === undefined ? 255 : i << shift;
};


internals.hex = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    'a': 10, 'A': 10, 'b': 11, 'B': 11, 'c': 12,
    'C': 12, 'd': 13, 'D': 13, 'e': 14, 'E': 14,
    'f': 15, 'F': 15
};


internals.utf8 = {
    accept: 12,
    reject: 0,
    data: [

        // Maps bytes to character to a transition

        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7,
        10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,

        // Maps a state to a new state when adding a transition

        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96,
        0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

        // Maps the current transition to a mask that needs to apply to the byte

        0x7F, 0x3F, 0x3F, 0x3F, 0x00, 0x1F, 0x0F, 0x0F, 0x0F, 0x07, 0x07, 0x07
    ]
};
