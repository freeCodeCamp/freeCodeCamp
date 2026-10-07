"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWord = void 0;
const slice_ansi_1 = __importDefault(require("slice-ansi"));
const strip_ansi_1 = __importDefault(require("strip-ansi"));
const calculateStringLengths = (input, size) => {
    let subject = (0, strip_ansi_1.default)(input);
    const chunks = [];
    // https://regex101.com/r/gY5kZ1/1
    const re = new RegExp('(^.{1,' + String(Math.max(size, 1)) + '}(\\s+|$))|(^.{1,' + String(Math.max(size - 1, 1)) + '}(\\\\|/|_|\\.|,|;|-))');
    do {
        let chunk;
        const match = re.exec(subject);
        if (match) {
            chunk = match[0];
            subject = subject.slice(chunk.length);
            const trimmedLength = chunk.trim().length;
            const offset = chunk.length - trimmedLength;
            chunks.push([trimmedLength, offset]);
        }
        else {
            chunk = subject.slice(0, size);
            subject = subject.slice(size);
            chunks.push([chunk.length, 0]);
        }
    } while (subject.length);
    return chunks;
};
const wrapWord = (input, size) => {
    const result = [];
    let startIndex = 0;
    calculateStringLengths(input, size).forEach(([length, offset]) => {
        result.push((0, slice_ansi_1.default)(input, startIndex, startIndex + length));
        startIndex += length + offset;
    });
    return result;
};
exports.wrapWord = wrapWord;
//# sourceMappingURL=wrapWord.js.map