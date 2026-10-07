/// <reference types="node" />
import PreloadFile from '../generic/preload_file';
import { BaseFileSystem, FileSystem, BFSOneArgCallback, BFSCallback, FileSystemOptions } from '../core/file_system';
import { FileFlag } from '../core/file_flag';
import { default as Stats } from '../core/node_fs_stats';
import { File } from '../core/file';
export declare class DropboxFile extends PreloadFile<DropboxFileSystem> implements File {
    constructor(_fs: DropboxFileSystem, _path: string, _flag: FileFlag, _stat: Stats, contents?: Buffer);
    sync(cb: BFSOneArgCallback): void;
    close(cb: BFSOneArgCallback): void;
}
/**
 * Options for the Dropbox file system.
 */
export interface DropboxFileSystemOptions {
    client: DropboxTypes.Dropbox;
}
/**
 * A read/write file system backed by Dropbox cloud storage.
 *
 * Uses the Dropbox V2 API, and the 2.x JS SDK.
 */
export default class DropboxFileSystem extends BaseFileSystem implements FileSystem {
    static readonly Name = "DropboxV2";
    static readonly Options: FileSystemOptions;
    /**
     * Creates a new DropboxFileSystem instance with the given options.
     * Must be given an *authenticated* Dropbox client from 2.x JS SDK.
     */
    static Create(opts: DropboxFileSystemOptions, cb: BFSCallback<DropboxFileSystem>): void;
    static isAvailable(): boolean;
    private _client;
    private constructor();
    getName(): string;
    isReadOnly(): boolean;
    supportsSymlinks(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    /**
     * Deletes *everything* in the file system. Mainly intended for unit testing!
     * @param mainCb Called when operation completes.
     */
    empty(mainCb: BFSOneArgCallback): void;
    rename(oldPath: string, newPath: string, cb: BFSOneArgCallback): void;
    stat(path: string, isLstat: boolean, cb: BFSCallback<Stats>): void;
    openFile(path: string, flags: FileFlag, cb: BFSCallback<File>): void;
    createFile(p: string, flags: FileFlag, mode: number, cb: BFSCallback<File>): void;
    /**
     * Delete a file
     */
    unlink(path: string, cb: BFSOneArgCallback): void;
    /**
     * Delete a directory
     */
    rmdir(path: string, cb: BFSOneArgCallback): void;
    /**
     * Create a directory
     */
    mkdir(p: string, mode: number, cb: BFSOneArgCallback): void;
    /**
     * Get the names of the files in a directory
     */
    readdir(path: string, cb: BFSCallback<string[]>): void;
    /**
     * (Internal) Syncs file to Dropbox.
     */
    _syncFile(p: string, d: Buffer, cb: BFSOneArgCallback): void;
}
