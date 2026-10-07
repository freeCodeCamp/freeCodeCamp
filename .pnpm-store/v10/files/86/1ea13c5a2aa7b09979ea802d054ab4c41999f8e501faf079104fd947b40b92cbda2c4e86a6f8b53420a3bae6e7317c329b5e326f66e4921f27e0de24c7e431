/// <reference types="node" />
import { Readable } from 'stream';
export { EndOfStreamError } from './EndOfFileStream';
export declare class StreamReader {
    private s;
    /**
     * Deferred used for postponed read request (as not data is yet available to read)
     */
    private deferred;
    private endOfStream;
    /**
     * Store peeked data
     * @type {Array}
     */
    private peekQueue;
    constructor(s: Readable);
    /**
     * Read ahead (peek) from stream. Subsequent read or peeks will return the same data
     * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes peeked
     */
    peek(uint8Array: Uint8Array, offset: number, length: number): Promise<number>;
    /**
     * Read chunk from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes read
     */
    read(buffer: Uint8Array, offset: number, length: number): Promise<number>;
    /**
     * Read chunk from stream
     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset Offset target
     * @param length Number of bytes to read
     * @returns Number of bytes read
     */
    private readFromStream;
    /**
     * Process deferred read request
     * @param request Deferred read request
     */
    private readDeferred;
    private reject;
}
