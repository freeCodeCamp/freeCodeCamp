/// <reference types="node" />
/// <reference types="node" />
import { Readable, ReadableOptions } from "stream";
export interface ReadFromBuffersOptions extends ReadableOptions {
    buffers: Buffer[];
    errorAfter?: number;
}
export declare class ReadFromBuffers extends Readable {
    private buffersToRead;
    private numBuffersRead;
    private errorAfter;
    constructor(options: ReadFromBuffersOptions);
    _read(): boolean | undefined;
}
