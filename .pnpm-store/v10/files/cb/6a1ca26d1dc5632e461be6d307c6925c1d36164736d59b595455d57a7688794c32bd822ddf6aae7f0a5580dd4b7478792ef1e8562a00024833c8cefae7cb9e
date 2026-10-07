"use strict";
//https://github.com/acornjs/acorn/blob/master/acorn/src/whitespace.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineInfo = getLineInfo;
function isNewLine(code) {
    return code === 10 || code === 13 || code === 0x2028 || code === 0x2029;
}
function nextLineBreak(code, from, end = code.length) {
    for (let i = from; i < end; i++) {
        const next = code.charCodeAt(i);
        if (isNewLine(next))
            return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10
                ? i + 2
                : i + 1;
    }
    return -1;
}
function getLineInfo(input, offset) {
    for (let line = 1, cur = 0;;) {
        const nextBreak = nextLineBreak(input, cur, offset);
        if (nextBreak < 0)
            return { line, column: offset - cur };
        ++line;
        cur = nextBreak;
    }
}
