import { Parser, type Handler, type ParserOptions } from "./Parser.js";
/*
 * NOTE: If either of these two imports produces a type error,
 * please update your @types/node dependency!
 */
import { Writable } from "node:stream";
import { StringDecoder } from "node:string_decoder";

// Following the example in https://nodejs.org/api/stream.html#stream_decoding_buffers_in_a_writable_stream
function isBuffer(_chunk: string | Buffer, encoding: string): _chunk is Buffer {
    return encoding === "buffer";
}

/**
 * WritableStream makes the `Parser` interface available as a NodeJS stream.
 *
 * @see Parser
 */
export class WritableStream extends Writable {
    private readonly _parser: Parser;
    private readonly _decoder = new StringDecoder();

    constructor(cbs: Partial<Handler>, options?: ParserOptions) {
        super({ decodeStrings: false });
        this._parser = new Parser(cbs, options);
    }

    override _write(
        chunk: string | Buffer,
        encoding: string,
        callback: () => void,
    ): void {
        this._parser.write(
            isBuffer(chunk, encoding) ? this._decoder.write(chunk) : chunk,
        );
        callback();
    }

    override _final(callback: () => void): void {
        this._parser.end(this._decoder.end());
        callback();
    }
}
