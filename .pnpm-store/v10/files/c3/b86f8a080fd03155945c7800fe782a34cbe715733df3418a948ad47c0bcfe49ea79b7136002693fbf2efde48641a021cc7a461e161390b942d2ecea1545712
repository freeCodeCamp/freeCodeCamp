/// <reference types="node" />
import { BaseFile, File } from '../core/file';
import { FileSystem, BFSOneArgCallback, BFSCallback, BFSThreeArgCallback } from '../core/file_system';
import Stats from '../core/node_fs_stats';
import { FileFlag } from '../core/file_flag';
/**
 * An implementation of the File interface that operates on a file that is
 * completely in-memory. PreloadFiles are backed by a Buffer.
 *
 * This is also an abstract class, as it lacks an implementation of 'sync' and
 * 'close'. Each filesystem that wishes to use this file representation must
 * extend this class and implement those two methods.
 * @todo 'close' lever that disables functionality once closed.
 */
export default class PreloadFile<T extends FileSystem> extends BaseFile {
    protected _fs: T;
    private _pos;
    private _path;
    private _stat;
    private _flag;
    private _buffer;
    private _dirty;
    /**
     * Creates a file with the given path and, optionally, the given contents. Note
     * that, if contents is specified, it will be mutated by the file!
     * @param _fs The file system that created the file.
     * @param _path
     * @param _mode The mode that the file was opened using.
     *   Dictates permissions and where the file pointer starts.
     * @param _stat The stats object for the given file.
     *   PreloadFile will mutate this object. Note that this object must contain
     *   the appropriate mode that the file was opened as.
     * @param contents A buffer containing the entire
     *   contents of the file. PreloadFile will mutate this buffer. If not
     *   specified, we assume it is a new file.
     */
    constructor(_fs: T, _path: string, _flag: FileFlag, _stat: Stats, contents?: Buffer);
    /**
     * NONSTANDARD: Get the underlying buffer for this file. !!DO NOT MUTATE!! Will mess up dirty tracking.
     */
    getBuffer(): Buffer;
    /**
     * NONSTANDARD: Get underlying stats for this file. !!DO NOT MUTATE!!
     */
    getStats(): Stats;
    getFlag(): FileFlag;
    /**
     * Get the path to this file.
     * @return [String] The path to the file.
     */
    getPath(): string;
    /**
     * Get the current file position.
     *
     * We emulate the following bug mentioned in the Node documentation:
     * > On Linux, positional writes don't work when the file is opened in append
     *   mode. The kernel ignores the position argument and always appends the data
     *   to the end of the file.
     * @return [Number] The current file position.
     */
    getPos(): number;
    /**
     * Advance the current file position by the indicated number of positions.
     * @param [Number] delta
     */
    advancePos(delta: number): number;
    /**
     * Set the file position.
     * @param [Number] newPos
     */
    setPos(newPos: number): number;
    /**
     * **Core**: Asynchronous sync. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    sync(cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous sync.
     */
    syncSync(): void;
    /**
     * **Core**: Asynchronous close. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    close(cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous close.
     */
    closeSync(): void;
    /**
     * Asynchronous `stat`.
     * @param [Function(BrowserFS.ApiError, BrowserFS.node.fs.Stats)] cb
     */
    stat(cb: BFSCallback<Stats>): void;
    /**
     * Synchronous `stat`.
     */
    statSync(): Stats;
    /**
     * Asynchronous truncate.
     * @param [Number] len
     * @param [Function(BrowserFS.ApiError)] cb
     */
    truncate(len: number, cb: BFSOneArgCallback): void;
    /**
     * Synchronous truncate.
     * @param [Number] len
     */
    truncateSync(len: number): void;
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.write multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)]
     *   cb The number specifies the number of bytes written into the file.
     */
    write(buffer: Buffer, offset: number, length: number, position: number, cb: BFSThreeArgCallback<number, Buffer>): void;
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.writeSync multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @return [Number]
     */
    writeSync(buffer: Buffer, offset: number, length: number, position: number): number;
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)] cb The
     *   number is the number of bytes read
     */
    read(buffer: Buffer, offset: number, length: number, position: number, cb: BFSThreeArgCallback<number, Buffer>): void;
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @return [Number]
     */
    readSync(buffer: Buffer, offset: number, length: number, position: number): number;
    /**
     * Asynchronous `fchmod`.
     * @param [Number|String] mode
     * @param [Function(BrowserFS.ApiError)] cb
     */
    chmod(mode: number, cb: BFSOneArgCallback): void;
    /**
     * Asynchronous `fchmod`.
     * @param [Number] mode
     */
    chmodSync(mode: number): void;
    protected isDirty(): boolean;
    /**
     * Resets the dirty bit. Should only be called after a sync has completed successfully.
     */
    protected resetDirty(): void;
}
/**
 * File class for the InMemory and XHR file systems.
 * Doesn't sync to anything, so it works nicely for memory-only files.
 */
export declare class NoSyncFile<T extends FileSystem> extends PreloadFile<T> implements File {
    constructor(_fs: T, _path: string, _flag: FileFlag, _stat: Stats, contents?: Buffer);
    /**
     * Asynchronous sync. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    sync(cb: BFSOneArgCallback): void;
    /**
     * Synchronous sync. Doesn't do anything.
     */
    syncSync(): void;
    /**
     * Asynchronous close. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    close(cb: BFSOneArgCallback): void;
    /**
     * Synchronous close. Doesn't do anything.
     */
    closeSync(): void;
}
