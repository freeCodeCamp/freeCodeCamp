/// <reference types="node" />
import Stats from './node_fs_stats';
import { BFSCallback, BFSOneArgCallback, BFSThreeArgCallback } from './file_system';
export interface File {
    /**
     * **Core**: Get the current file position.
     */
    getPos(): number | undefined;
    /**
     * **Core**: Asynchronous `stat`.
     */
    stat(cb: BFSCallback<Stats>): void;
    /**
     * **Core**: Synchronous `stat`.
     */
    statSync(): Stats;
    /**
     * **Core**: Asynchronous close.
     */
    close(cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous close.
     */
    closeSync(): void;
    /**
     * **Core**: Asynchronous truncate.
     */
    truncate(len: number, cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous truncate.
     */
    truncateSync(len: number): void;
    /**
     * **Core**: Asynchronous sync.
     */
    sync(cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous sync.
     */
    syncSync(): void;
    /**
     * **Core**: Write buffer to the file.
     * Note that it is unsafe to use fs.write multiple times on the same file
     * without waiting for the callback.
     * @param buffer Buffer containing the data to write to
     *  the file.
     * @param offset Offset in the buffer to start reading data from.
     * @param length The amount of bytes to write to the file.
     * @param position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @param cb The number specifies the number of bytes written into the file.
     */
    write(buffer: Buffer, offset: number, length: number, position: number | null, cb: BFSThreeArgCallback<number, Buffer>): void;
    /**
     * **Core**: Write buffer to the file.
     * Note that it is unsafe to use fs.writeSync multiple times on the same file
     * without waiting for it to return.
     * @param buffer Buffer containing the data to write to
     *  the file.
     * @param offset Offset in the buffer to start reading data from.
     * @param length The amount of bytes to write to the file.
     * @param position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     */
    writeSync(buffer: Buffer, offset: number, length: number, position: number | null): number;
    /**
     * **Core**: Read data from the file.
     * @param buffer The buffer that the data will be
     *   written to.
     * @param offset The offset within the buffer where writing will
     *   start.
     * @param length An integer specifying the number of bytes to read.
     * @param position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @param cb The number is the number of bytes read
     */
    read(buffer: Buffer, offset: number, length: number, position: number | null, cb: BFSThreeArgCallback<number, Buffer>): void;
    /**
     * **Core**: Read data from the file.
     * @param buffer The buffer that the data will be written to.
     * @param offset The offset within the buffer where writing will start.
     * @param length An integer specifying the number of bytes to read.
     * @param position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     */
    readSync(buffer: Buffer, offset: number, length: number, position: number): number;
    /**
     * **Supplementary**: Asynchronous `datasync`.
     *
     * Default implementation maps to `sync`.
     */
    datasync(cb: BFSOneArgCallback): void;
    /**
     * **Supplementary**: Synchronous `datasync`.
     *
     * Default implementation maps to `syncSync`.
     */
    datasyncSync(): void;
    /**
     * **Optional**: Asynchronous `chown`.
     */
    chown(uid: number, gid: number, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Synchronous `chown`.
     */
    chownSync(uid: number, gid: number): void;
    /**
     * **Optional**: Asynchronous `fchmod`.
     */
    chmod(mode: number, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Synchronous `fchmod`.
     */
    chmodSync(mode: number): void;
    /**
     * **Optional**: Change the file timestamps of the file.
     */
    utimes(atime: Date, mtime: Date, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Change the file timestamps of the file.
     */
    utimesSync(atime: Date, mtime: Date): void;
}
/**
 * Base class that contains shared implementations of functions for the file
 * object.
 */
export declare class BaseFile {
    sync(cb: BFSOneArgCallback): void;
    syncSync(): void;
    datasync(cb: BFSOneArgCallback): void;
    datasyncSync(): void;
    chown(uid: number, gid: number, cb: BFSOneArgCallback): void;
    chownSync(uid: number, gid: number): void;
    chmod(mode: number, cb: BFSOneArgCallback): void;
    chmodSync(mode: number): void;
    utimes(atime: Date, mtime: Date, cb: BFSOneArgCallback): void;
    utimesSync(atime: Date, mtime: Date): void;
}
