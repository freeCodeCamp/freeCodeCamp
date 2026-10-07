/**
 * Contains utility methods for performing a variety of tasks with
 * XmlHttpRequest across browsers.
 */
/// <reference types="node" />
import { ApiError } from '../core/api_error';
import { BFSCallback } from '../core/file_system';
export declare const xhrIsAvailable: boolean;
/**
 * Asynchronously download a file as a buffer or a JSON object.
 * Note that the third function signature with a non-specialized type is
 * invalid, but TypeScript requires it when you specialize string arguments to
 * constants.
 * @hidden
 */
export declare let asyncDownloadFile: {
    (p: string, type: 'buffer', cb: BFSCallback<Buffer>): void;
    (p: string, type: 'json', cb: BFSCallback<any>): void;
    (p: string, type: string, cb: BFSCallback<any>): void;
};
/**
 * Synchronously download a file as a buffer or a JSON object.
 * Note that the third function signature with a non-specialized type is
 * invalid, but TypeScript requires it when you specialize string arguments to
 * constants.
 * @hidden
 */
export declare let syncDownloadFile: {
    (p: string, type: 'buffer'): Buffer;
    (p: string, type: 'json'): any;
    (p: string, type: string): any;
};
/**
 * Synchronously retrieves the size of the given file in bytes.
 * @hidden
 */
export declare function getFileSizeSync(p: string): number;
/**
 * Asynchronously retrieves the size of the given file in bytes.
 * @hidden
 */
export declare function getFileSizeAsync(p: string, cb: (err: ApiError, size?: number) => void): void;
