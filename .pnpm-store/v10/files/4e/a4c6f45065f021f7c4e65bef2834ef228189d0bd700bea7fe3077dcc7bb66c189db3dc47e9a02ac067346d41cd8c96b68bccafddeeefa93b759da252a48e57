/**
 * BrowserFS's main module. This is exposed in the browser via the BrowserFS global.
 * Due to limitations in typedoc, we document these functions in ./typedoc.ts.
 */
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as buffer from 'buffer';
import fs from './node_fs';
import * as path from 'path';
import { FileSystemConstructor, FileSystem, BFSOneArgCallback, BFSCallback } from './file_system';
import EmscriptenFS from '../generic/emscripten_fs';
import Backends from './backends';
import * as BFSUtils from './util';
import * as Errors from './api_error';
import setImmediate from '../generic/setImmediate';
/**
 * Installs BFSRequire as global `require`, a Node Buffer polyfill as the global `Buffer` variable,
 * and a Node process polyfill as the global `process` variable.
 */
export declare function install(obj: any): void;
/**
 * @hidden
 */
export declare function registerFileSystem(name: string, fs: FileSystemConstructor): void;
/**
 * Polyfill for CommonJS `require()`. For example, can call `BFSRequire('fs')` to get a 'fs' module polyfill.
 */
export declare function BFSRequire(module: 'fs'): typeof fs;
export declare function BFSRequire(module: 'path'): typeof path;
export declare function BFSRequire(module: 'buffer'): typeof buffer;
export declare function BFSRequire(module: 'process'): typeof process;
export declare function BFSRequire(module: 'bfs_utils'): typeof BFSUtils;
export declare function BFSRequire(module: string): any;
/**
 * Initializes BrowserFS with the given root file system.
 */
export declare function initialize(rootfs: FileSystem): FileSystem;
/**
 * Creates a file system with the given configuration, and initializes BrowserFS with it.
 * See the FileSystemConfiguration type for more info on the configuration object.
 */
export declare function configure(config: FileSystemConfiguration, cb: BFSOneArgCallback): void;
/**
 * Specifies a file system backend type and its options.
 *
 * Individual options can recursively contain FileSystemConfiguration objects for
 * option values that require file systems.
 *
 * For example, to mirror Dropbox to LocalStorage with AsyncMirror, use the following
 * object:
 *
 * ```javascript
 * var config = {
 *   fs: "AsyncMirror",
 *   options: {
 *     sync: {fs: "LocalStorage"},
 *     async: {fs: "Dropbox", options: {client: anAuthenticatedDropboxSDKClient }}
 *   }
 * };
 * ```
 *
 * The option object for each file system corresponds to that file system's option object passed to its `Create()` method.
 */
export interface FileSystemConfiguration {
    fs: string;
    options?: any;
}
/**
 * Retrieve a file system with the given configuration.
 * @param config A FileSystemConfiguration object. See FileSystemConfiguration for details.
 * @param cb Called when the file system is constructed, or when an error occurs.
 */
export declare function getFileSystem(config: FileSystemConfiguration, cb: BFSCallback<FileSystem>): void;
export { EmscriptenFS, Backends as FileSystem, Errors, setImmediate };
