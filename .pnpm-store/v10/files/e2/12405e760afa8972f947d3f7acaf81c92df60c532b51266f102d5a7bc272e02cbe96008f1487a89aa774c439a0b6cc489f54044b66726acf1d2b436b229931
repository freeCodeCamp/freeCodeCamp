/// <reference types="node" />
import { SynchronousFileSystem, BFSOneArgCallback, BFSCallback, BFSThreeArgCallback, FileSystemOptions } from '../core/file_system';
import { default as Stats } from '../core/node_fs_stats';
import { FileFlag } from '../core/file_flag';
import { BaseFile, File } from '../core/file';
export declare class EmscriptenFile extends BaseFile implements File {
    private _fs;
    private _FS;
    private _path;
    private _stream;
    constructor(_fs: EmscriptenFileSystem, _FS: any, _path: string, _stream: any);
    getPos(): number | undefined;
    close(cb: BFSOneArgCallback): void;
    closeSync(): void;
    stat(cb: BFSCallback<Stats>): void;
    statSync(): Stats;
    truncate(len: number, cb: BFSOneArgCallback): void;
    truncateSync(len: number): void;
    write(buffer: Buffer, offset: number, length: number, position: number, cb: BFSThreeArgCallback<number, Buffer>): void;
    writeSync(buffer: Buffer, offset: number, length: number, position: number | null): number;
    read(buffer: Buffer, offset: number, length: number, position: number, cb: BFSThreeArgCallback<number, Buffer>): void;
    readSync(buffer: Buffer, offset: number, length: number, position: number | null): number;
    sync(cb: BFSOneArgCallback): void;
    syncSync(): void;
    chown(uid: number, gid: number, cb: BFSOneArgCallback): void;
    chownSync(uid: number, gid: number): void;
    chmod(mode: number, cb: BFSOneArgCallback): void;
    chmodSync(mode: number): void;
    utimes(atime: Date, mtime: Date, cb: BFSOneArgCallback): void;
    utimesSync(atime: Date, mtime: Date): void;
}
/**
 * Configuration options for Emscripten file systems.
 */
export interface EmscriptenFileSystemOptions {
    FS: any;
}
/**
 * Mounts an Emscripten file system into the BrowserFS file system.
 */
export default class EmscriptenFileSystem extends SynchronousFileSystem {
    static readonly Name = "EmscriptenFileSystem";
    static readonly Options: FileSystemOptions;
    /**
     * Create an EmscriptenFileSystem instance with the given options.
     */
    static Create(opts: EmscriptenFileSystemOptions, cb: BFSCallback<EmscriptenFileSystem>): void;
    static isAvailable(): boolean;
    private _FS;
    private constructor();
    getName(): string;
    isReadOnly(): boolean;
    supportsLinks(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    renameSync(oldPath: string, newPath: string): void;
    statSync(p: string, isLstat: boolean): Stats;
    openSync(p: string, flag: FileFlag, mode: number): EmscriptenFile;
    unlinkSync(p: string): void;
    rmdirSync(p: string): void;
    mkdirSync(p: string, mode: number): void;
    readdirSync(p: string): string[];
    truncateSync(p: string, len: number): void;
    readFileSync(p: string, encoding: string, flag: FileFlag): any;
    writeFileSync(p: string, data: any, encoding: string, flag: FileFlag, mode: number): void;
    chmodSync(p: string, isLchmod: boolean, mode: number): void;
    chownSync(p: string, isLchown: boolean, uid: number, gid: number): void;
    symlinkSync(srcpath: string, dstpath: string, type: string): void;
    readlinkSync(p: string): string;
    utimesSync(p: string, atime: Date, mtime: Date): void;
    private modeToFileType;
}
