import { AbstractTokenizer } from './AbstractTokenizer';
import { IFileInfo, IReadChunkOptions } from './types';
export declare class FileTokenizer extends AbstractTokenizer {
    private fd;
    constructor(fd: number, fileInfo: IFileInfo);
    /**
     * Read buffer from file
     * @param uint8Array - Uint8Array to write result to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    readBuffer(uint8Array: Uint8Array, options?: IReadChunkOptions): Promise<number>;
    /**
     * Peek buffer from file
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    peekBuffer(uint8Array: Uint8Array, options?: IReadChunkOptions): Promise<number>;
    close(): Promise<void>;
}
export declare function fromFile(sourceFilePath: string): Promise<FileTokenizer>;
