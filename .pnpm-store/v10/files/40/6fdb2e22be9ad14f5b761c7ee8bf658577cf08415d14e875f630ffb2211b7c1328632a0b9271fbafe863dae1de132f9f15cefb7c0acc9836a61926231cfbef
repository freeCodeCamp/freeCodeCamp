"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBuffer = exports.fromStream = exports.EndOfStreamError = void 0;
const ReadStreamTokenizer_1 = require("./ReadStreamTokenizer");
const BufferTokenizer_1 = require("./BufferTokenizer");
var peek_readable_1 = require("peek-readable");
Object.defineProperty(exports, "EndOfStreamError", { enumerable: true, get: function () { return peek_readable_1.EndOfStreamError; } });
/**
 * Construct ReadStreamTokenizer from given Stream.
 * Will set fileSize, if provided given Stream has set the .path property/
 * @param stream - Read from Node.js Stream.Readable
 * @param fileInfo - Pass the file information, like size and MIME-type of the corresponding stream.
 * @returns ReadStreamTokenizer
 */
function fromStream(stream, fileInfo) {
    fileInfo = fileInfo ? fileInfo : {};
    return new ReadStreamTokenizer_1.ReadStreamTokenizer(stream, fileInfo);
}
exports.fromStream = fromStream;
/**
 * Construct ReadStreamTokenizer from given Buffer.
 * @param uint8Array - Uint8Array to tokenize
 * @param fileInfo - Pass additional file information to the tokenizer
 * @returns BufferTokenizer
 */
function fromBuffer(uint8Array, fileInfo) {
    return new BufferTokenizer_1.BufferTokenizer(uint8Array, fileInfo);
}
exports.fromBuffer = fromBuffer;
