"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WritableStream = void 0;
const Parser_js_1 = require("./Parser.js");
/*
 * NOTE: If either of these two imports produces a type error,
 * please update your @types/node dependency!
 */
const node_stream_1 = require("node:stream");
const node_string_decoder_1 = require("node:string_decoder");
// Following the example in https://nodejs.org/api/stream.html#stream_decoding_buffers_in_a_writable_stream
function isBuffer(_chunk, encoding) {
    return encoding === "buffer";
}
/**
 * WritableStream makes the `Parser` interface available as a NodeJS stream.
 *
 * @see Parser
 */
class WritableStream extends node_stream_1.Writable {
    constructor(cbs, options) {
        super({ decodeStrings: false });
        this._decoder = new node_string_decoder_1.StringDecoder();
        this._parser = new Parser_js_1.Parser(cbs, options);
    }
    _write(chunk, encoding, callback) {
        this._parser.write(isBuffer(chunk, encoding) ? this._decoder.write(chunk) : chunk);
        callback();
    }
    _final(callback) {
        this._parser.end(this._decoder.end());
        callback();
    }
}
exports.WritableStream = WritableStream;
//# sourceMappingURL=WritableStream.js.map