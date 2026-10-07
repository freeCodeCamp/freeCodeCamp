/// <reference types="node" />
/**
 * Grab bag of utility functions used across the code.
 */
import { FileSystem, BFSOneArgCallback, FileSystemConstructor } from './file_system';
export declare function deprecationMessage(print: boolean, fsName: string, opts: any): void;
/**
 * Checks for any IE version, including IE11 which removed MSIE from the
 * userAgent string.
 * @hidden
 */
export declare const isIE: boolean;
/**
 * Check if we're in a web worker.
 * @hidden
 */
export declare const isWebWorker: boolean;
/**
 * @hidden
 */
export interface Arrayish<T> {
    [idx: number]: T;
    length: number;
}
/**
 * Throws an exception. Called on code paths that should be impossible.
 * @hidden
 */
export declare function fail(): void;
/**
 * Synchronous recursive makedir.
 * @hidden
 */
export declare function mkdirpSync(p: string, mode: number, fs: FileSystem): void;
/**
 * Converts a buffer into an array buffer. Attempts to do so in a
 * zero-copy manner, e.g. the array references the same memory.
 * @hidden
 */
export declare function buffer2ArrayBuffer(buff: Buffer): ArrayBuffer | SharedArrayBuffer;
/**
 * Converts a buffer into a Uint8Array. Attempts to do so in a
 * zero-copy manner, e.g. the array references the same memory.
 * @hidden
 */
export declare function buffer2Uint8array(buff: Buffer): Uint8Array;
/**
 * Converts the given arrayish object into a Buffer. Attempts to
 * be zero-copy.
 * @hidden
 */
export declare function arrayish2Buffer(arr: Arrayish<number>): Buffer;
/**
 * Converts the given Uint8Array into a Buffer. Attempts to be zero-copy.
 * @hidden
 */
export declare function uint8Array2Buffer(u8: Uint8Array): Buffer;
/**
 * Converts the given array buffer into a Buffer. Attempts to be
 * zero-copy.
 * @hidden
 */
export declare function arrayBuffer2Buffer(ab: ArrayBuffer | SharedArrayBuffer): Buffer;
/**
 * Copies a slice of the given buffer
 * @hidden
 */
export declare function copyingSlice(buff: Buffer, start?: number, end?: number): Buffer;
/**
 * Returns an empty buffer.
 * @hidden
 */
export declare function emptyBuffer(): Buffer;
/**
 * Option validator for a Buffer file system option.
 * @hidden
 */
export declare function bufferValidator(v: object, cb: BFSOneArgCallback): void;
/**
 * Checks that the given options object is valid for the file system options.
 * @hidden
 */
export declare function checkOptions(fsType: FileSystemConstructor, opts: any, cb: BFSOneArgCallback): void;
