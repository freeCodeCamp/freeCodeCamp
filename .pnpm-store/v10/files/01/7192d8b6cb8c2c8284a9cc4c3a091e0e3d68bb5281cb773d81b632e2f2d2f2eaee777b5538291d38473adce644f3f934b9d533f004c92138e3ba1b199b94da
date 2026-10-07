import { IFileInfo, IReadChunkOptions } from './types';
import { AbstractTokenizer } from './AbstractTokenizer';
export declare class BufferTokenizer extends AbstractTokenizer {
    private uint8Array;
    /**
     * Construct BufferTokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param fileInfo - Pass additional file information to the tokenizer
     */
    constructor(uint8Array: Uint8Array, fileInfo?: IFileInfo);
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */
    readBuffer(uint8Array: Uint8Array, options?: IReadChunkOptions): Promise<number>;
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */
    peekBuffer(uint8Array: Uint8Array, options?: IReadChunkOptions): Promise<number>;
    close(): Promise<void>;
}
