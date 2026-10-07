/// <reference types="node" />
import { AbstractTokenizer } from './AbstractTokenizer';
import { Readable } from 'stream';
import { IFileInfo, IReadChunkOptions } from './types';
export declare class ReadStreamTokenizer extends AbstractTokenizer {
    private streamReader;
    constructor(stream: Readable, fileInfo?: IFileInfo);
    /**
     * Get file information, an HTTP-client may implement this doing a HEAD request
     * @return Promise with file information
     */
    getFileInfo(): Promise<IFileInfo>;
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
     * @param options - Read behaviour options
     * @returns Promise with number of bytes read
     */
    readBuffer(uint8Array: Uint8Array, options?: IReadChunkOptions): Promise<number>;
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise with number of bytes peeked
     */
    peekBuffer(uint8Array: Uint8Array, options?: IReadChunkOptions): Promise<number>;
    ignore(length: number): Promise<number>;
}
