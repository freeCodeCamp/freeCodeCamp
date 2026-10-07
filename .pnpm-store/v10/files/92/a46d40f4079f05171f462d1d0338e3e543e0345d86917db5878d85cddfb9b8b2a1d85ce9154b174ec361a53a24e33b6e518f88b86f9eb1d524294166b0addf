/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { PathLike, symlink } from 'fs';
import { Node, Link, File } from './node';
import Stats from './Stats';
import Dirent from './Dirent';
import { TSetTimeout } from './setTimeoutUnref';
import { Readable, Writable } from 'stream';
import { constants } from './constants';
import { EventEmitter } from 'events';
import { TEncodingExtended, TDataOut } from './encoding';
export interface IError extends Error {
    code?: string;
}
export type TFileId = PathLike | number;
export type TData = TDataOut | Uint8Array;
export type TFlags = string | number;
export type TMode = string | number;
export type TTime = number | string | Date;
export type TCallback<TData> = (error?: IError | null, data?: TData) => void;
export declare enum FLAGS {
    r,
    'r+',
    rs,
    sr,
    'rs+',
    'sr+',
    w,
    wx,
    xw,
    'w+',
    'wx+',
    'xw+',
    a,
    ax,
    xa,
    'a+',
    'ax+',
    'xa+'
}
export type TFlagsCopy = typeof constants.COPYFILE_EXCL | typeof constants.COPYFILE_FICLONE | typeof constants.COPYFILE_FICLONE_FORCE;
export declare function flagsToNumber(flags: TFlags | undefined): number;
export interface IOptions {
    encoding?: BufferEncoding | TEncodingExtended;
}
export interface IFileOptions extends IOptions {
    mode?: TMode;
    flag?: TFlags;
}
export interface IReadFileOptions extends IOptions {
    flag?: string;
}
export interface IWriteFileOptions extends IFileOptions {
}
export interface IAppendFileOptions extends IFileOptions {
}
export interface IRealpathOptions {
    encoding?: TEncodingExtended;
}
export interface IWatchFileOptions {
    persistent?: boolean;
    interval?: number;
}
export interface IReadStreamOptions {
    flags?: TFlags;
    encoding?: BufferEncoding;
    fd?: number;
    mode?: TMode;
    autoClose?: boolean;
    start?: number;
    end?: number;
}
export interface IWriteStreamOptions {
    flags?: TFlags;
    defaultEncoding?: BufferEncoding;
    fd?: number;
    mode?: TMode;
    autoClose?: boolean;
    start?: number;
}
export interface IWatchOptions extends IOptions {
    persistent?: boolean;
    recursive?: boolean;
}
export interface IMkdirOptions {
    mode?: TMode;
    recursive?: boolean;
}
export interface IRmdirOptions {
    recursive?: boolean;
}
export interface IRmOptions {
    force?: boolean;
    maxRetries?: number;
    recursive?: boolean;
    retryDelay?: number;
}
export interface IReaddirOptions extends IOptions {
    withFileTypes?: boolean;
}
export interface IStatOptions {
    bigint?: boolean;
    throwIfNoEntry?: boolean;
}
export interface IFStatOptions {
    bigint?: boolean;
}
export declare function pathToFilename(path: PathLike): string;
export declare function filenameToSteps(filename: string, base?: string): string[];
export declare function pathToSteps(path: PathLike): string[];
export declare function dataToStr(data: TData, encoding?: string): string;
export declare function dataToBuffer(data: TData, encoding?: string): Buffer;
export declare function bufferToEncoding(buffer: Buffer, encoding?: TEncodingExtended): TDataOut;
export declare function toUnixTimestamp(time: any): any;
type DirectoryContent = string | null;
export interface DirectoryJSON {
    [key: string]: DirectoryContent;
}
export interface NestedDirectoryJSON {
    [key: string]: DirectoryContent | NestedDirectoryJSON;
}
/**
 * `Volume` represents a file system.
 */
export declare class Volume {
    static fromJSON(json: DirectoryJSON, cwd?: string): Volume;
    static fromNestedJSON(json: NestedDirectoryJSON, cwd?: string): Volume;
    /**
     * Global file descriptor counter. UNIX file descriptors start from 0 and go sequentially
     * up, so here, in order not to conflict with them, we choose some big number and descrease
     * the file descriptor of every new opened file.
     * @type {number}
     * @todo This should not be static, right?
     */
    static fd: number;
    root: Link;
    ino: number;
    inodes: {
        [ino: number]: Node;
    };
    releasedInos: number[];
    fds: {
        [fd: number]: File;
    };
    releasedFds: number[];
    maxFiles: number;
    openFiles: number;
    StatWatcher: new () => StatWatcher;
    ReadStream: new (...args: any[]) => IReadStream;
    WriteStream: new (...args: any[]) => IWriteStream;
    FSWatcher: new () => FSWatcher;
    props: {
        Node: new (...args: any[]) => Node;
        Link: new (...args: any[]) => Link;
        File: new (...args: any[]) => File;
    };
    private promisesApi;
    get promises(): import("./promises").IPromisesAPI;
    constructor(props?: {});
    createLink(): Link;
    createLink(parent: Link, name: string, isDirectory?: boolean, perm?: number): Link;
    deleteLink(link: Link): boolean;
    private newInoNumber;
    private newFdNumber;
    createNode(isDirectory?: boolean, perm?: number): Node;
    private getNode;
    private deleteNode;
    genRndStr(): any;
    getLink(steps: string[]): Link | null;
    getLinkOrThrow(filename: string, funcName?: string): Link;
    getResolvedLink(filenameOrSteps: string | string[]): Link | null;
    getResolvedLinkOrThrow(filename: string, funcName?: string): Link;
    resolveSymlinks(link: Link): Link | null;
    private getLinkAsDirOrThrow;
    private getLinkParent;
    private getLinkParentAsDirOrThrow;
    private getFileByFd;
    private getFileByFdOrThrow;
    /**
     * @todo This is not used anymore. Remove.
     */
    private wrapAsync;
    private _toJSON;
    toJSON(paths?: PathLike | PathLike[], json?: {}, isRelative?: boolean): DirectoryJSON;
    fromJSON(json: DirectoryJSON, cwd?: string): void;
    fromNestedJSON(json: NestedDirectoryJSON, cwd?: string): void;
    reset(): void;
    mountSync(mountpoint: string, json: DirectoryJSON): void;
    private openLink;
    private openFile;
    private openBase;
    openSync(path: PathLike, flags: TFlags, mode?: TMode): number;
    open(path: PathLike, flags: TFlags, /* ... */ callback: TCallback<number>): any;
    open(path: PathLike, flags: TFlags, mode: TMode, callback: TCallback<number>): any;
    private closeFile;
    closeSync(fd: number): void;
    close(fd: number, callback: TCallback<void>): void;
    private openFileOrGetById;
    private readBase;
    readSync(fd: number, buffer: Buffer | Uint8Array, offset: number, length: number, position: number): number;
    read(fd: number, buffer: Buffer | Uint8Array, offset: number, length: number, position: number, callback: (err?: Error | null, bytesRead?: number, buffer?: Buffer | Uint8Array) => void): void;
    private readFileBase;
    readFileSync(file: TFileId, options?: IReadFileOptions | string): TDataOut;
    readFile(id: TFileId, callback: TCallback<TDataOut>): any;
    readFile(id: TFileId, options: IReadFileOptions | string, callback: TCallback<TDataOut>): any;
    private writeBase;
    writeSync(fd: number, buffer: Buffer | Uint8Array, offset?: number, length?: number, position?: number): number;
    writeSync(fd: number, str: string, position?: number, encoding?: BufferEncoding): number;
    write(fd: number, buffer: Buffer | Uint8Array, callback: (...args: any[]) => void): any;
    write(fd: number, buffer: Buffer | Uint8Array, offset: number, callback: (...args: any[]) => void): any;
    write(fd: number, buffer: Buffer | Uint8Array, offset: number, length: number, callback: (...args: any[]) => void): any;
    write(fd: number, buffer: Buffer | Uint8Array, offset: number, length: number, position: number, callback: (...args: any[]) => void): any;
    write(fd: number, str: string, callback: (...args: any[]) => void): any;
    write(fd: number, str: string, position: number, callback: (...args: any[]) => void): any;
    write(fd: number, str: string, position: number, encoding: BufferEncoding, callback: (...args: any[]) => void): any;
    private writeFileBase;
    writeFileSync(id: TFileId, data: TData, options?: IWriteFileOptions): void;
    writeFile(id: TFileId, data: TData, callback: TCallback<void>): any;
    writeFile(id: TFileId, data: TData, options: IWriteFileOptions | string, callback: TCallback<void>): any;
    private linkBase;
    private copyFileBase;
    copyFileSync(src: PathLike, dest: PathLike, flags?: TFlagsCopy): void;
    copyFile(src: PathLike, dest: PathLike, callback: TCallback<void>): any;
    copyFile(src: PathLike, dest: PathLike, flags: TFlagsCopy, callback: TCallback<void>): any;
    linkSync(existingPath: PathLike, newPath: PathLike): void;
    link(existingPath: PathLike, newPath: PathLike, callback: TCallback<void>): void;
    private unlinkBase;
    unlinkSync(path: PathLike): void;
    unlink(path: PathLike, callback: TCallback<void>): void;
    private symlinkBase;
    symlinkSync(target: PathLike, path: PathLike, type?: symlink.Type): void;
    symlink(target: PathLike, path: PathLike, callback: TCallback<void>): any;
    symlink(target: PathLike, path: PathLike, type: symlink.Type, callback: TCallback<void>): any;
    private realpathBase;
    realpathSync(path: PathLike, options?: IRealpathOptions | string): TDataOut;
    realpath(path: PathLike, callback: TCallback<TDataOut>): any;
    realpath(path: PathLike, options: IRealpathOptions | string, callback: TCallback<TDataOut>): any;
    private lstatBase;
    lstatSync(path: PathLike): Stats<number>;
    lstatSync(path: PathLike, options: {
        throwIfNoEntry?: true | undefined;
    }): Stats<number>;
    lstatSync(path: PathLike, options: {
        bigint: false;
        throwIfNoEntry?: true | undefined;
    }): Stats<number>;
    lstatSync(path: PathLike, options: {
        bigint: true;
        throwIfNoEntry?: true | undefined;
    }): Stats<bigint>;
    lstatSync(path: PathLike, options: {
        throwIfNoEntry: false;
    }): Stats<number> | undefined;
    lstatSync(path: PathLike, options: {
        bigint: false;
        throwIfNoEntry: false;
    }): Stats<number> | undefined;
    lstatSync(path: PathLike, options: {
        bigint: true;
        throwIfNoEntry: false;
    }): Stats<bigint> | undefined;
    lstat(path: PathLike, callback: TCallback<Stats>): void;
    lstat(path: PathLike, options: IStatOptions, callback: TCallback<Stats>): void;
    private statBase;
    statSync(path: PathLike): Stats<number>;
    statSync(path: PathLike, options: {
        throwIfNoEntry?: true;
    }): Stats<number>;
    statSync(path: PathLike, options: {
        throwIfNoEntry: false;
    }): Stats<number> | undefined;
    statSync(path: PathLike, options: {
        bigint: false;
        throwIfNoEntry?: true;
    }): Stats<number>;
    statSync(path: PathLike, options: {
        bigint: true;
        throwIfNoEntry?: true;
    }): Stats<bigint>;
    statSync(path: PathLike, options: {
        bigint: false;
        throwIfNoEntry: false;
    }): Stats<number> | undefined;
    statSync(path: PathLike, options: {
        bigint: true;
        throwIfNoEntry: false;
    }): Stats<bigint> | undefined;
    stat(path: PathLike, callback: TCallback<Stats>): void;
    stat(path: PathLike, options: IStatOptions, callback: TCallback<Stats>): void;
    private fstatBase;
    fstatSync(fd: number): Stats<number>;
    fstatSync(fd: number, options: {
        bigint: false;
    }): Stats<number>;
    fstatSync(fd: number, options: {
        bigint: true;
    }): Stats<bigint>;
    fstat(fd: number, callback: TCallback<Stats>): void;
    fstat(fd: number, options: IFStatOptions, callback: TCallback<Stats>): void;
    private renameBase;
    renameSync(oldPath: PathLike, newPath: PathLike): void;
    rename(oldPath: PathLike, newPath: PathLike, callback: TCallback<void>): void;
    private existsBase;
    existsSync(path: PathLike): boolean;
    exists(path: PathLike, callback: (exists: boolean) => void): void;
    private accessBase;
    accessSync(path: PathLike, mode?: number): void;
    access(path: PathLike, callback: TCallback<void>): any;
    access(path: PathLike, mode: number, callback: TCallback<void>): any;
    appendFileSync(id: TFileId, data: TData, options?: IAppendFileOptions | string): void;
    appendFile(id: TFileId, data: TData, callback: TCallback<void>): any;
    appendFile(id: TFileId, data: TData, options: IAppendFileOptions | string, callback: TCallback<void>): any;
    private readdirBase;
    readdirSync(path: PathLike, options?: IReaddirOptions | string): TDataOut[] | Dirent[];
    readdir(path: PathLike, callback: TCallback<TDataOut[] | Dirent[]>): any;
    readdir(path: PathLike, options: IReaddirOptions | string, callback: TCallback<TDataOut[] | Dirent[]>): any;
    private readlinkBase;
    readlinkSync(path: PathLike, options?: IOptions): TDataOut;
    readlink(path: PathLike, callback: TCallback<TDataOut>): any;
    readlink(path: PathLike, options: IOptions, callback: TCallback<TDataOut>): any;
    private fsyncBase;
    fsyncSync(fd: number): void;
    fsync(fd: number, callback: TCallback<void>): void;
    private fdatasyncBase;
    fdatasyncSync(fd: number): void;
    fdatasync(fd: number, callback: TCallback<void>): void;
    private ftruncateBase;
    ftruncateSync(fd: number, len?: number): void;
    ftruncate(fd: number, callback: TCallback<void>): any;
    ftruncate(fd: number, len: number, callback: TCallback<void>): any;
    private truncateBase;
    truncateSync(id: TFileId, len?: number): void;
    truncate(id: TFileId, callback: TCallback<void>): any;
    truncate(id: TFileId, len: number, callback: TCallback<void>): any;
    private futimesBase;
    futimesSync(fd: number, atime: TTime, mtime: TTime): void;
    futimes(fd: number, atime: TTime, mtime: TTime, callback: TCallback<void>): void;
    private utimesBase;
    utimesSync(path: PathLike, atime: TTime, mtime: TTime): void;
    utimes(path: PathLike, atime: TTime, mtime: TTime, callback: TCallback<void>): void;
    private mkdirBase;
    /**
     * Creates directory tree recursively.
     * @param filename
     * @param modeNum
     */
    private mkdirpBase;
    mkdirSync(path: PathLike, options: IMkdirOptions & {
        recursive: true;
    }): string | undefined;
    mkdirSync(path: PathLike, options?: TMode | (IMkdirOptions & {
        recursive?: false;
    })): void;
    mkdirSync(path: PathLike, options?: TMode | IMkdirOptions): string | undefined;
    mkdir(path: PathLike, callback: TCallback<void>): any;
    mkdir(path: PathLike, mode: TMode | (IMkdirOptions & {
        recursive?: false;
    }), callback: TCallback<void>): any;
    mkdir(path: PathLike, mode: IMkdirOptions & {
        recursive: true;
    }, callback: TCallback<string>): any;
    mkdir(path: PathLike, mode: TMode | IMkdirOptions, callback: TCallback<string>): any;
    mkdirpSync(path: PathLike, mode?: TMode): string | undefined;
    mkdirp(path: PathLike, callback: TCallback<string>): any;
    mkdirp(path: PathLike, mode: TMode, callback: TCallback<string>): any;
    private mkdtempBase;
    mkdtempSync(prefix: string, options?: IOptions): TDataOut;
    mkdtemp(prefix: string, callback: TCallback<void>): any;
    mkdtemp(prefix: string, options: IOptions, callback: TCallback<void>): any;
    private rmdirBase;
    rmdirSync(path: PathLike, options?: IRmdirOptions): void;
    rmdir(path: PathLike, callback: TCallback<void>): any;
    rmdir(path: PathLike, options: IRmdirOptions, callback: TCallback<void>): any;
    private rmBase;
    rmSync(path: PathLike, options?: IRmOptions): void;
    rm(path: PathLike, callback: TCallback<void>): void;
    rm(path: PathLike, options: IRmOptions, callback: TCallback<void>): void;
    private fchmodBase;
    fchmodSync(fd: number, mode: TMode): void;
    fchmod(fd: number, mode: TMode, callback: TCallback<void>): void;
    private chmodBase;
    chmodSync(path: PathLike, mode: TMode): void;
    chmod(path: PathLike, mode: TMode, callback: TCallback<void>): void;
    private lchmodBase;
    lchmodSync(path: PathLike, mode: TMode): void;
    lchmod(path: PathLike, mode: TMode, callback: TCallback<void>): void;
    private fchownBase;
    fchownSync(fd: number, uid: number, gid: number): void;
    fchown(fd: number, uid: number, gid: number, callback: TCallback<void>): void;
    private chownBase;
    chownSync(path: PathLike, uid: number, gid: number): void;
    chown(path: PathLike, uid: number, gid: number, callback: TCallback<void>): void;
    private lchownBase;
    lchownSync(path: PathLike, uid: number, gid: number): void;
    lchown(path: PathLike, uid: number, gid: number, callback: TCallback<void>): void;
    private statWatchers;
    watchFile(path: PathLike, listener: (curr: Stats, prev: Stats) => void): StatWatcher;
    watchFile(path: PathLike, options: IWatchFileOptions, listener: (curr: Stats, prev: Stats) => void): StatWatcher;
    unwatchFile(path: PathLike, listener?: (curr: Stats, prev: Stats) => void): void;
    createReadStream(path: PathLike, options?: IReadStreamOptions | string): IReadStream;
    createWriteStream(path: PathLike, options?: IWriteStreamOptions | string): IWriteStream;
    watch(path: PathLike, options?: IWatchOptions | string, listener?: (eventType: string, filename: string) => void): FSWatcher;
}
export declare class StatWatcher extends EventEmitter {
    vol: Volume;
    filename: string;
    interval: number;
    timeoutRef?: any;
    setTimeout: TSetTimeout;
    prev: Stats;
    constructor(vol: Volume);
    private loop;
    private hasChanged;
    private onInterval;
    start(path: string, persistent?: boolean, interval?: number): void;
    stop(): void;
}
export interface IReadStream extends Readable {
    new (path: PathLike, options: IReadStreamOptions): any;
    open(): any;
    close(callback: TCallback<void>): any;
    bytesRead: number;
    path: string;
}
export interface IWriteStream extends Writable {
    bytesWritten: number;
    path: string;
    new (path: PathLike, options: IWriteStreamOptions): any;
    open(): any;
    close(): any;
}
export declare class FSWatcher extends EventEmitter {
    _vol: Volume;
    _filename: string;
    _steps: string[];
    _filenameEncoded: TDataOut;
    _recursive: boolean;
    _encoding: BufferEncoding;
    _link: Link;
    _timer: any;
    private _listenerRemovers;
    constructor(vol: Volume);
    private _getName;
    private _onParentChild;
    private _emit;
    private _persist;
    start(path: PathLike, persistent?: boolean, recursive?: boolean, encoding?: BufferEncoding): void;
    close(): void;
}
export {};
