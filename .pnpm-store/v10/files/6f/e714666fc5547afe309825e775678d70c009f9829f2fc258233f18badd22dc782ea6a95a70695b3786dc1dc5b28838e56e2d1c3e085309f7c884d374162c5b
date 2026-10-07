/// <reference types="node" />
import { BaseFileSystem, FileSystem, BFSCallback, FileSystemOptions } from '../core/file_system';
import { FileFlag } from '../core/file_flag';
import { File } from '../core/file';
import Stats from '../core/node_fs_stats';
/**
 * Configuration options for a HTTPRequest file system.
 */
export interface HTTPRequestOptions {
    index?: string | object;
    bundle?: string | object;
    baseUrl?: string;
    preferXHR?: boolean;
    logReads?: boolean;
}
/**
 * A simple filesystem backed by HTTP downloads. You must create a directory listing using the
 * `make_http_index` tool provided by BrowserFS.
 *
 * If you install BrowserFS globally with `npm i -g browserfs`, you can generate a listing by
 * running `make_http_index` in your terminal in the directory you would like to index:
 *
 * ```
 * make_http_index > index.json
 * ```
 *
 * Listings objects look like the following:
 *
 * ```json
 * {
 *   "home": {
 *     "jvilk": {
 *       "someFile.txt": null,
 *       "someDir": {
 *         // Empty directory
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * *This example has the folder `/home/jvilk` with subfile `someFile.txt` and subfolder `someDir`.*
 */
export default class BundledHTTPRequest extends BaseFileSystem implements FileSystem {
    static readonly Name = "BundledHTTPRequest";
    static readonly Options: FileSystemOptions;
    /**
     * Construct an HTTPRequest file system backend with the given options.
     */
    static Create(opts: HTTPRequestOptions, cb: BFSCallback<BundledHTTPRequest>): void;
    static isAvailable(): boolean;
    readonly prefixUrl: string;
    private _logReads;
    private _index;
    private _requestFileAsyncInternal;
    private _requestFileSizeAsyncInternal;
    private _requestFileSyncInternal;
    private _requestFileSizeSyncInternal;
    private constructor();
    empty(): void;
    getName(): string;
    diskSpace(path: string, cb: (total: number, free: number) => void): void;
    isReadOnly(): boolean;
    supportsLinks(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    private logRead;
    /**
     * Special HTTPFS function: Preload the given file into the index.
     * @param [String] path
     * @param [BrowserFS.Buffer] buffer
     */
    preloadFile(path: string, buffer: Buffer): void;
    stat(path: string, isLstat: boolean, cb: BFSCallback<Stats>): void;
    statSync(path: string, isLstat: boolean): Stats;
    open(path: string, flags: FileFlag, mode: number, cb: BFSCallback<File>): void;
    openSync(path: string, flags: FileFlag, mode: number): File;
    readdir(path: string, cb: BFSCallback<string[]>): void;
    readdirSync(path: string): string[];
    /**
     * We have the entire file as a buffer; optimize readFile.
     */
    readFile(fname: string, encoding: string, flag: FileFlag, cb: BFSCallback<string | Buffer>): void;
    /**
     * Specially-optimized readfile.
     */
    readFileSync(fname: string, encoding: string, flag: FileFlag): any;
    private _getHTTPPath;
    /**
     * Asynchronously download the given file.
     */
    private _requestFileAsync;
    /**
     * Synchronously download the given file.
     */
    private _requestFileSync;
    /**
     * Only requests the HEAD content, for the file size.
     */
    private _requestFileSizeAsync;
    private _requestFileSizeSync;
}
