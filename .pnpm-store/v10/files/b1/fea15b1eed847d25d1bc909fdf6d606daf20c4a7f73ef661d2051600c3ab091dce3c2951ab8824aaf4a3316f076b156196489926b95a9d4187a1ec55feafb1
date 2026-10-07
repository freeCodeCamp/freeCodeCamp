/// <reference types="filesystem" />
/// <reference types="node" />
import PreloadFile from '../generic/preload_file';
import { BaseFileSystem, FileSystem as IFileSystem, BFSOneArgCallback, BFSCallback, FileSystemOptions } from '../core/file_system';
import { FileFlag } from '../core/file_flag';
import { default as Stats } from '../core/node_fs_stats';
import { File as IFile } from '../core/file';
export declare class HTML5FSFile extends PreloadFile<HTML5FS> implements IFile {
    private _entry;
    constructor(fs: HTML5FS, entry: FileEntry, path: string, flag: FileFlag, stat: Stats, contents?: Buffer);
    sync(cb: BFSOneArgCallback): void;
    close(cb: BFSOneArgCallback): void;
}
export interface HTML5FSOptions {
    size?: number;
    type?: number;
}
/**
 * A read-write filesystem backed by the HTML5 FileSystem API.
 *
 * As the HTML5 FileSystem is only implemented in Blink, this interface is
 * only available in Chrome.
 */
export default class HTML5FS extends BaseFileSystem implements IFileSystem {
    static readonly Name = "HTML5FS";
    static readonly Options: FileSystemOptions;
    /**
     * Creates an HTML5FS instance with the given options.
     */
    static Create(opts: HTML5FSOptions, cb: BFSCallback<HTML5FS>): void;
    static isAvailable(): boolean;
    fs: FileSystem;
    private size;
    private type;
    /**
     * @param size storage quota to request, in megabytes. Allocated value may be less.
     * @param type window.PERSISTENT or window.TEMPORARY. Defaults to PERSISTENT.
     */
    private constructor();
    getName(): string;
    isReadOnly(): boolean;
    supportsSymlinks(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    /**
     * Deletes everything in the FS. Used for testing.
     * Karma clears the storage after you quit it but not between runs of the test
     * suite, and the tests expect an empty FS every time.
     */
    empty(mainCb: BFSOneArgCallback): void;
    rename(oldPath: string, newPath: string, cb: BFSOneArgCallback): void;
    stat(path: string, isLstat: boolean, cb: BFSCallback<Stats>): void;
    open(p: string, flags: FileFlag, mode: number, cb: BFSCallback<IFile>): void;
    unlink(path: string, cb: BFSOneArgCallback): void;
    rmdir(path: string, cb: BFSOneArgCallback): void;
    mkdir(path: string, mode: number, cb: BFSOneArgCallback): void;
    /**
     * Map _readdir's list of `FileEntry`s to their names and return that.
     */
    readdir(path: string, cb: BFSCallback<string[]>): void;
    /**
     * Returns a BrowserFS object representing a File.
     */
    private _makeFile;
    /**
     * Returns an array of `FileEntry`s. Used internally by empty and readdir.
     */
    private _readdir;
    /**
     * Requests a storage quota from the browser to back this FS.
     */
    private _allocate;
    /**
     * Delete a file or directory from the file system
     * isFile should reflect which call was made to remove the it (`unlink` or
     * `rmdir`). If this doesn't match what's actually at `path`, an error will be
     * returned
     */
    private _remove;
}
