import { FileSystem, BaseFileSystem, BFSOneArgCallback, BFSCallback, FileSystemOptions } from '../core/file_system';
import { FileFlag } from '../core/file_flag';
import { File } from '../core/file';
import { default as Stats } from '../core/node_fs_stats';
import PreloadFile from '../generic/preload_file';
import LockedFS from '../generic/locked_fs';
/**
 * *INTERNAL, DO NOT USE DIRECTLY!*
 *
 * Core OverlayFS class that contains no locking whatsoever. We wrap these objects
 * in a LockedFS to prevent races.
 */
export declare class UnlockedOverlayFS extends BaseFileSystem implements FileSystem {
    static isAvailable(): boolean;
    private _writable;
    private _readable;
    private _isInitialized;
    private _initializeCallbacks;
    private _deletedFiles;
    private _deleteLog;
    private _deleteLogUpdatePending;
    private _deleteLogUpdateNeeded;
    private _deleteLogError;
    constructor(writable: FileSystem, readable: FileSystem);
    getOverlayedFileSystems(): {
        readable: FileSystem;
        writable: FileSystem;
    };
    _syncAsync(file: PreloadFile<UnlockedOverlayFS>, cb: BFSOneArgCallback): void;
    _syncSync(file: PreloadFile<UnlockedOverlayFS>): void;
    getName(): string;
    /**
     * **INTERNAL METHOD**
     *
     * Called once to load up metadata stored on the writable file system.
     */
    _initialize(cb: BFSOneArgCallback): void;
    isReadOnly(): boolean;
    supportsSynch(): boolean;
    supportsLinks(): boolean;
    supportsProps(): boolean;
    getDeletionLog(): string;
    restoreDeletionLog(log: string): void;
    rename(oldPath: string, newPath: string, cb: BFSOneArgCallback): void;
    renameSync(oldPath: string, newPath: string): void;
    stat(p: string, isLstat: boolean, cb: BFSCallback<Stats>): void;
    statSync(p: string, isLstat: boolean): Stats;
    open(p: string, flag: FileFlag, mode: number, cb: BFSCallback<File>): void;
    openSync(p: string, flag: FileFlag, mode: number): File;
    unlink(p: string, cb: BFSOneArgCallback): void;
    unlinkSync(p: string): void;
    rmdir(p: string, cb: BFSOneArgCallback): void;
    rmdirSync(p: string): void;
    mkdir(p: string, mode: number, cb: BFSCallback<Stats>): void;
    mkdirSync(p: string, mode: number): void;
    readdir(p: string, cb: BFSCallback<string[]>): void;
    readdirSync(p: string): string[];
    exists(p: string, cb: (exists: boolean) => void): void;
    existsSync(p: string): boolean;
    chmod(p: string, isLchmod: boolean, mode: number, cb: BFSOneArgCallback): void;
    chmodSync(p: string, isLchmod: boolean, mode: number): void;
    chown(p: string, isLchmod: boolean, uid: number, gid: number, cb: BFSOneArgCallback): void;
    chownSync(p: string, isLchown: boolean, uid: number, gid: number): void;
    utimes(p: string, atime: Date, mtime: Date, cb: BFSOneArgCallback): void;
    utimesSync(p: string, atime: Date, mtime: Date): void;
    private deletePath;
    private updateLog;
    private _reparseDeletionLog;
    private checkInitialized;
    private checkInitAsync;
    private checkPath;
    private checkPathAsync;
    private createParentDirectoriesAsync;
    /**
     * With the given path, create the needed parent directories on the writable storage
     * should they not exist. Use modes from the read-only storage.
     */
    private createParentDirectories;
    /**
     * Helper function:
     * - Ensures p is on writable before proceeding. Throws an error if it doesn't exist.
     * - Calls f to perform operation on writable.
     */
    private operateOnWritable;
    private operateOnWritableAsync;
    /**
     * Copy from readable to writable storage.
     * PRECONDITION: File does not exist on writable storage.
     */
    private copyToWritable;
    private copyToWritableAsync;
}
/**
 * Configuration options for OverlayFS instances.
 */
export interface OverlayFSOptions {
    writable: FileSystem;
    readable: FileSystem;
}
/**
 * OverlayFS makes a read-only filesystem writable by storing writes on a second,
 * writable file system. Deletes are persisted via metadata stored on the writable
 * file system.
 */
export default class OverlayFS extends LockedFS<UnlockedOverlayFS> {
    static readonly Name = "OverlayFS";
    static readonly Options: FileSystemOptions;
    /**
     * Constructs and initializes an OverlayFS instance with the given options.
     */
    static Create(opts: OverlayFSOptions, cb: BFSCallback<OverlayFS>): void;
    static isAvailable(): boolean;
    /**
     * @param writable The file system to write modified files to.
     * @param readable The file system that initially populates this file system.
     */
    constructor(writable: FileSystem, readable: FileSystem);
    getOverlayedFileSystems(): {
        readable: FileSystem;
        writable: FileSystem;
    };
    unwrap(): UnlockedOverlayFS;
    private _initialize;
}
