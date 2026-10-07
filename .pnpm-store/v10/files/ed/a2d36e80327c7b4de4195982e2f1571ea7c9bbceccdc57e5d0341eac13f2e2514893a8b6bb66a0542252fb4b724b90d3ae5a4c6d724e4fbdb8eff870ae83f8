"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyChar = exports.notWhitespace = exports.whitespace = exports.notInts = exports.ints = exports.notWords = exports.words = void 0;
const types_1 = require("./types");
const INTS = () => [{ type: types_1.types.RANGE, from: 48, to: 57 }];
const WORDS = () => [
    { type: types_1.types.CHAR, value: 95 },
    { type: types_1.types.RANGE, from: 97, to: 122 },
    { type: types_1.types.RANGE, from: 65, to: 90 },
    { type: types_1.types.RANGE, from: 48, to: 57 },
];
const WHITESPACE = () => [
    { type: types_1.types.CHAR, value: 9 },
    { type: types_1.types.CHAR, value: 10 },
    { type: types_1.types.CHAR, value: 11 },
    { type: types_1.types.CHAR, value: 12 },
    { type: types_1.types.CHAR, value: 13 },
    { type: types_1.types.CHAR, value: 32 },
    { type: types_1.types.CHAR, value: 160 },
    { type: types_1.types.CHAR, value: 5760 },
    { type: types_1.types.RANGE, from: 8192, to: 8202 },
    { type: types_1.types.CHAR, value: 8232 },
    { type: types_1.types.CHAR, value: 8233 },
    { type: types_1.types.CHAR, value: 8239 },
    { type: types_1.types.CHAR, value: 8287 },
    { type: types_1.types.CHAR, value: 12288 },
    { type: types_1.types.CHAR, value: 65279 },
];
const NOTANYCHAR = () => [
    { type: types_1.types.CHAR, value: 10 },
    { type: types_1.types.CHAR, value: 13 },
    { type: types_1.types.CHAR, value: 8232 },
    { type: types_1.types.CHAR, value: 8233 },
];
// Predefined class objects.
exports.words = () => ({ type: types_1.types.SET, set: WORDS(), not: false });
exports.notWords = () => ({ type: types_1.types.SET, set: WORDS(), not: true });
exports.ints = () => ({ type: types_1.types.SET, set: INTS(), not: false });
exports.notInts = () => ({ type: types_1.types.SET, set: INTS(), not: true });
exports.whitespace = () => ({ type: types_1.types.SET, set: WHITESPACE(), not: false });
exports.notWhitespace = () => ({ type: types_1.types.SET, set: WHITESPACE(), not: true });
exports.anyChar = () => ({ type: types_1.types.SET, set: NOTANYCHAR(), not: true });
//# sourceMappingURL=sets.js.map