import { FileSystem } from './core/file_system';
/**
 * We use typedoc in 'file' mode to avoid many issues.
 * Unfortunately, it does not process export statements properly in some circumstances.
 * Here, we redefine the main BrowserFS object for documentation purposes.
 */
import { FileSystem as Backends, BFSRequire } from './index';
/**
 * BrowserFS's main interface.
 *
 * In the browser, this is exposed as the `BrowserFS` global.
 *
 * In node, this is the object you receive when you `require('browserfs')`.
 */
export interface BrowserFS {
    /**
     * Exposes all of the file system backends available in BrowserFS.
     */
    FileSystem: typeof Backends;
    /**
     * Emulates Node's `require()` function for filesystem-related modules (`'fs'`, `'path'`, `'buffer'`, etc).
     */
    BFSRequire: typeof BFSRequire;
    /**
     * You must call this function with a properly-instantiated root file system
     * before using any file system API method.
     * @param rootFS The root filesystem to use for the
     *   entire BrowserFS file system.
     */
    initialize(rootFS: FileSystem): void;
    /**
     * Installs BrowserFS onto the given object.
     * We recommend that you run install with the 'window' object to make things
     * global, as in Node.
     *
     * Properties installed:
     *
     * * Buffer
     * * process
     * * require (we monkey-patch it)
     *
     * This allows you to write code as if you were running inside Node.
     * @param obj The object to install things onto (e.g. window)
     */
    install(obj: any): void;
}
