"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxLetterValue = exports.bitsPerByte = exports.bitsPerLetter = exports.alphabetByValue = exports.alphabetByEncoding = void 0;
const alphabetByEncoding = {};
exports.alphabetByEncoding = alphabetByEncoding;
const alphabetByValue = new Array(64);
exports.alphabetByValue = alphabetByValue;
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
    const char = String.fromCharCode(i + start);
    alphabetByEncoding[char] = i;
    alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
    const char = String.fromCharCode(i + start);
    const index = i + 26;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
    alphabetByEncoding[i.toString(10)] = i + 52;
    const char = i.toString(10);
    const index = i + 52;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
const bitsPerLetter = 6;
exports.bitsPerLetter = bitsPerLetter;
const bitsPerByte = 8;
exports.bitsPerByte = bitsPerByte;
const maxLetterValue = 0b111111;
exports.maxLetterValue = maxLetterValue;
