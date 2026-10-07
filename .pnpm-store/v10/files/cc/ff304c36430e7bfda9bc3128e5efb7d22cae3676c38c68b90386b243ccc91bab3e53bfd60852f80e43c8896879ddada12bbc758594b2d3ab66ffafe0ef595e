/// <reference types="node" />
import { Handler, ParserOptions } from "./Parser";
import { Writable } from "stream";
/**
 * WritableStream makes the `Parser` interface available as a NodeJS stream.
 *
 * @see Parser
 */
export declare class WritableStream extends Writable {
    private readonly _parser;
    private readonly _decoder;
    constructor(cbs: Partial<Handler>, options?: ParserOptions);
    _write(chunk: string | Buffer, encoding: string, cb: () => void): void;
    _final(cb: () => void): void;
}
//# sourceMappingURL=WritableStream.d.ts.map