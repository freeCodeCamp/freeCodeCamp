// Type definitions for sonic-boom 0.7
// Definitions by: Alex Ferrando <https://github.com/alferpal>
//                 Igor Savin <https://github.com/kibertoad>
/// <reference types="node"/>

import { EventEmitter } from 'events';

export default SonicBoom;
export type SonicBoomOpts = {
    fd?: number | string | symbol
    dest?: string | number
    maxLength?: number
    minLength?: number
    maxWrite?: number
    periodicFlush?: number
    sync?: boolean
    fsync?: boolean
    append?: boolean
    mode?: string | number
    mkdir?: boolean
    contentMode?: 'buffer' | 'utf8'
    retryEAGAIN?: (err: Error, writeBufferLen: number, remainingBufferLen: number) => boolean
}

export class SonicBoom extends EventEmitter {
    /**
     * @param [fileDescriptor] File path or numerical file descriptor
     * relative protocol is enabled. Default: process.stdout
     * @returns a new sonic-boom instance
     */
    constructor(opts: SonicBoomOpts)

    /**
     * Writes the string to the file. It will return false to signal the producer to slow down.
     */
    write(string: string): boolean;

    /**
     * Writes the current buffer to the file if a write was not in progress.
     * Do nothing if minLength is zero or if it is already writing.
     */
    flush(cb?: (err?: Error) => unknown): void;

    /**
     * Reopen the file in place, useful for log rotation.
     */
    reopen(fileDescriptor?: string | number): void;

    /**
     * Flushes the buffered data synchronously. This is a costly operation.
     */
    flushSync(): void;

    /**
     * Closes the stream, the data will be flushed down asynchronously
     */
    end(): void;

    /**
     * Closes the stream immediately, the data is not flushed.
     */
    destroy(): void;
}
