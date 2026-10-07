/**
 * Contains utility methods using 'fetch'.
 */
/// <reference types="node" />
import { BFSCallback } from '../core/file_system';
export declare const fetchIsAvailable: boolean;
/**
 * Asynchronously download a file as a buffer or a JSON object.
 * Note that the third function signature with a non-specialized type is
 * invalid, but TypeScript requires it when you specialize string arguments to
 * constants.
 * @hidden
 */
export declare function fetchFileAsync(p: string, type: 'buffer', cb: BFSCallback<Buffer>): void;
export declare function fetchFileAsync(p: string, type: 'json', cb: BFSCallback<any>): void;
export declare function fetchFileAsync(p: string, type: string, cb: BFSCallback<any>): void;
/**
 * Asynchronously retrieves the size of the given file in bytes.
 * @hidden
 */
export declare function fetchFileSizeAsync(p: string, cb: BFSCallback<number>): void;
