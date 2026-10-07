/// <reference types="node" />
/// <reference types="node" />
import { Volume, TData, TMode, TFlags, TFlagsCopy, TTime, IOptions, IAppendFileOptions, IMkdirOptions, IReaddirOptions, IReadFileOptions, IRealpathOptions, IWriteFileOptions, IStatOptions, IRmOptions, IFStatOptions } from './volume';
import Stats from './Stats';
import Dirent from './Dirent';
import { TDataOut } from './encoding';
import { PathLike, symlink } from 'fs';
export interface TFileHandleReadResult {
    bytesRead: number;
    buffer: Buffer | Uint8Array;
}
export interface TFileHandleWriteResult {
    bytesWritten: number;
    buffer: Buffer | Uint8Array;
}
export interface IFileHandle {
    fd: number;
    appendFile(data: TData, options?: IAppendFileOptions | string): Promise<void>;
    chmod(mode: TMode): Promise<void>;
    chown(uid: number, gid: number): Promise<void>;
    close(): Promise<void>;
    datasync(): Promise<void>;
    read(buffer: Buffer | Uint8Array, offset: number, length: number, position: number): Promise<TFileHandleReadResult>;
    readFile(options?: IReadFileOptions | string): Promise<TDataOut>;
    stat(options?: IStatOptions): Promise<Stats>;
    truncate(len?: number): Promise<void>;
    utimes(atime: TTime, mtime: TTime): Promise<void>;
    write(buffer: Buffer | Uint8Array, offset?: number, length?: number, position?: number): Promise<TFileHandleWriteResult>;
    writeFile(data: TData, options?: IWriteFileOptions): Promise<void>;
}
export type TFileHandle = PathLike | IFileHandle;
export interface IPromisesAPI {
    FileHandle: any;
    access(path: PathLike, mode?: number): Promise<void>;
    appendFile(path: TFileHandle, data: TData, options?: IAppendFileOptions | string): Promise<void>;
    chmod(path: PathLike, mode: TMode): Promise<void>;
    chown(path: PathLike, uid: number, gid: number): Promise<void>;
    copyFile(src: PathLike, dest: PathLike, flags?: TFlagsCopy): Promise<void>;
    lchmod(path: PathLike, mode: TMode): Promise<void>;
    lchown(path: PathLike, uid: number, gid: number): Promise<void>;
    link(existingPath: PathLike, newPath: PathLike): Promise<void>;
    lstat(path: PathLike, options?: IStatOptions): Promise<Stats>;
    mkdir(path: PathLike, options?: TMode | IMkdirOptions): Promise<void>;
    mkdtemp(prefix: string, options?: IOptions): Promise<TDataOut>;
    open(path: PathLike, flags: TFlags, mode?: TMode): Promise<FileHandle>;
    readdir(path: PathLike, options?: IReaddirOptions | string): Promise<TDataOut[] | Dirent[]>;
    readFile(id: TFileHandle, options?: IReadFileOptions | string): Promise<TDataOut>;
    readlink(path: PathLike, options?: IOptions): Promise<TDataOut>;
    realpath(path: PathLike, options?: IRealpathOptions | string): Promise<TDataOut>;
    rename(oldPath: PathLike, newPath: PathLike): Promise<void>;
    rmdir(path: PathLike): Promise<void>;
    rm(path: PathLike, options?: IRmOptions): Promise<void>;
    stat(path: PathLike, options?: IStatOptions): Promise<Stats>;
    symlink(target: PathLike, path: PathLike, type?: symlink.Type): Promise<void>;
    truncate(path: PathLike, len?: number): Promise<void>;
    unlink(path: PathLike): Promise<void>;
    utimes(path: PathLike, atime: TTime, mtime: TTime): Promise<void>;
    writeFile(id: TFileHandle, data: TData, options?: IWriteFileOptions): Promise<void>;
}
export declare class FileHandle implements IFileHandle {
    private vol;
    fd: number;
    constructor(vol: Volume, fd: number);
    appendFile(data: TData, options?: IAppendFileOptions | string): Promise<void>;
    chmod(mode: TMode): Promise<void>;
    chown(uid: number, gid: number): Promise<void>;
    close(): Promise<void>;
    datasync(): Promise<void>;
    read(buffer: Buffer | Uint8Array, offset: number, length: number, position: number): Promise<TFileHandleReadResult>;
    readFile(options?: IReadFileOptions | string): Promise<TDataOut>;
    stat(options?: IFStatOptions): Promise<Stats>;
    sync(): Promise<void>;
    truncate(len?: number): Promise<void>;
    utimes(atime: TTime, mtime: TTime): Promise<void>;
    write(buffer: Buffer | Uint8Array, offset?: number, length?: number, position?: number): Promise<TFileHandleWriteResult>;
    writeFile(data: TData, options?: IWriteFileOptions): Promise<void>;
}
export default function createPromisesApi(vol: Volume): null | IPromisesAPI;
