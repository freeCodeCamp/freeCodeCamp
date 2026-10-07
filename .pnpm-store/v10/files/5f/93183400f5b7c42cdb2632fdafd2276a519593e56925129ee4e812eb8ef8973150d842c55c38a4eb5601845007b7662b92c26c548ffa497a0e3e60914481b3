/// <reference types="node" />
/// <reference types="node" />
import * as _fs from 'fs';
import { ApiError } from './api_error';
import { FileSystem, BFSOneArgCallback, BFSCallback, BFSThreeArgCallback } from './file_system';
import Stats from './node_fs_stats';
/**
 * The node frontend to all filesystems.
 * This layer handles:
 *
 * * Sanity checking inputs.
 * * Normalizing paths.
 * * Resetting stack depth for asynchronous operations which may not go through
 *   the browser by wrapping all input callbacks using `setImmediate`.
 * * Performing the requested operation through the filesystem or the file
 *   descriptor, as appropriate.
 * * Handling optional arguments and setting default arguments.
 * @see http://nodejs.org/api/fs.html
 */
export default class FS {
    static Stats: typeof Stats;
    static F_OK: number;
    static R_OK: number;
    static W_OK: number;
    static X_OK: number;
    private root;
    private fdMap;
    private nextFd;
    private fileWatcher;
    initialize(rootFS: FileSystem): FileSystem;
    /**
     * converts Date or number to a fractional UNIX timestamp
     * Grabbed from NodeJS sources (lib/fs.js)
     */
    _toUnixTimestamp(time: Date | number): number;
    /**
     * **NONSTANDARD**: Grab the FileSystem instance that backs this API.
     * @return [BrowserFS.FileSystem | null] Returns null if the file system has
     *   not been initialized.
     */
    getRootFS(): FileSystem | null;
    /**
     * Asynchronous rename. No arguments other than a possible exception are given
     * to the completion callback.
     * @param oldPath
     * @param newPath
     * @param callback
     */
    rename(oldPath: string, newPath: string, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous rename.
     * @param oldPath
     * @param newPath
     */
    renameSync(oldPath: string, newPath: string): void;
    /**
     * Test whether or not the given path exists by checking with the file system.
     * Then call the callback argument with either true or false.
     * @example Sample invocation
     *   fs.exists('/etc/passwd', function (exists) {
     *     util.debug(exists ? "it's there" : "no passwd!");
     *   });
     * @param path
     * @param callback
     */
    exists(path: string, cb?: (exists: boolean) => any): void;
    /**
     * Test whether or not the given path exists by checking with the file system.
     * @param path
     * @return [boolean]
     */
    existsSync(path: string): boolean;
    /**
     * Asynchronous `stat`.
     * @param path
     * @param callback
     */
    stat(path: string, cb?: BFSCallback<Stats>): void;
    /**
     * Synchronous `stat`.
     * @param path
     * @return [BrowserFS.node.fs.Stats]
     */
    statSync(path: string): Stats;
    /**
     * Asynchronous `lstat`.
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
     * then the link itself is stat-ed, not the file that it refers to.
     * @param path
     * @param callback
     */
    lstat(path: string, cb?: BFSCallback<Stats>): void;
    /**
     * Synchronous `lstat`.
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
     * then the link itself is stat-ed, not the file that it refers to.
     * @param path
     * @return [BrowserFS.node.fs.Stats]
     */
    lstatSync(path: string): Stats;
    /**
     * Asynchronous `truncate`.
     * @param path
     * @param len
     * @param callback
     */
    truncate(path: string, cb?: BFSOneArgCallback): void;
    truncate(path: string, len: number, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `truncate`.
     * @param path
     * @param len
     */
    truncateSync(path: string, len?: number): void;
    /**
     * Asynchronous `unlink`.
     * @param path
     * @param callback
     */
    unlink(path: string, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `unlink`.
     * @param path
     */
    unlinkSync(path: string): void;
    /**
     * Asynchronous file open.
     * Exclusive mode ensures that path is newly created.
     *
     * `flags` can be:
     *
     * * `'r'` - Open file for reading. An exception occurs if the file does not exist.
     * * `'r+'` - Open file for reading and writing. An exception occurs if the file does not exist.
     * * `'rs'` - Open file for reading in synchronous mode. Instructs the filesystem to not cache writes.
     * * `'rs+'` - Open file for reading and writing, and opens the file in synchronous mode.
     * * `'w'` - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
     * * `'wx'` - Like 'w' but opens the file in exclusive mode.
     * * `'w+'` - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
     * * `'wx+'` - Like 'w+' but opens the file in exclusive mode.
     * * `'a'` - Open file for appending. The file is created if it does not exist.
     * * `'ax'` - Like 'a' but opens the file in exclusive mode.
     * * `'a+'` - Open file for reading and appending. The file is created if it does not exist.
     * * `'ax+'` - Like 'a+' but opens the file in exclusive mode.
     *
     * @see http://www.manpagez.com/man/2/open/
     * @param path
     * @param flags
     * @param mode defaults to `0644`
     * @param callback
     */
    open(path: string, flag: string, cb?: BFSCallback<number>): void;
    open(path: string, flag: string, mode: number | string, cb?: BFSCallback<number>): void;
    /**
     * Synchronous file open.
     * @see http://www.manpagez.com/man/2/open/
     * @param path
     * @param flags
     * @param mode defaults to `0644`
     * @return [BrowserFS.File]
     */
    openSync(path: string, flag: string, mode?: number | string): number;
    /**
     * Asynchronously reads the entire contents of a file.
     * @example Usage example
     *   fs.readFile('/etc/passwd', function (err, data) {
     *     if (err) throw err;
     *     console.log(data);
     *   });
     * @param filename
     * @param options
     * @option options [String] encoding The string encoding for the file contents. Defaults to `null`.
     * @option options [String] flag Defaults to `'r'`.
     * @param callback If no encoding is specified, then the raw buffer is returned.
     */
    readFile(filename: string, cb: BFSCallback<Buffer>): void;
    readFile(filename: string, options: {
        flag?: string;
    }, callback?: BFSCallback<Buffer>): void;
    readFile(filename: string, options: {
        encoding: string;
        flag?: string;
    }, callback?: BFSCallback<string>): void;
    readFile(filename: string, encoding: string, cb: BFSCallback<string>): void;
    /**
     * Synchronously reads the entire contents of a file.
     * @param filename
     * @param options
     * @option options [String] encoding The string encoding for the file contents. Defaults to `null`.
     * @option options [String] flag Defaults to `'r'`.
     * @return [String | BrowserFS.node.Buffer]
     */
    readFileSync(filename: string, options?: {
        flag?: string;
    }): Buffer;
    readFileSync(filename: string, options: {
        encoding: string;
        flag?: string;
    }): string;
    readFileSync(filename: string, encoding: string): string;
    /**
     * Asynchronously writes data to a file, replacing the file if it already
     * exists.
     *
     * The encoding option is ignored if data is a buffer.
     *
     * @example Usage example
     *   fs.writeFile('message.txt', 'Hello Node', function (err) {
     *     if (err) throw err;
     *     console.log('It\'s saved!');
     *   });
     * @param filename
     * @param data
     * @param options
     * @option options [String] encoding Defaults to `'utf8'`.
     * @option options [Number] mode Defaults to `0644`.
     * @option options [String] flag Defaults to `'w'`.
     * @param callback
     */
    writeFile(filename: string, data: any, cb?: BFSOneArgCallback): void;
    writeFile(filename: string, data: any, encoding?: string, cb?: BFSOneArgCallback): void;
    writeFile(filename: string, data: any, options?: {
        encoding?: string;
        mode?: string | number;
        flag?: string;
    }, cb?: BFSOneArgCallback): void;
    /**
     * Synchronously writes data to a file, replacing the file if it already
     * exists.
     *
     * The encoding option is ignored if data is a buffer.
     * @param filename
     * @param data
     * @param options
     * @option options [String] encoding Defaults to `'utf8'`.
     * @option options [Number] mode Defaults to `0644`.
     * @option options [String] flag Defaults to `'w'`.
     */
    writeFileSync(filename: string, data: any, options?: {
        encoding?: string;
        mode?: number | string;
        flag?: string;
    }): void;
    writeFileSync(filename: string, data: any, encoding?: string): void;
    /**
     * Asynchronously append data to a file, creating the file if it not yet
     * exists.
     *
     * @example Usage example
     *   fs.appendFile('message.txt', 'data to append', function (err) {
     *     if (err) throw err;
     *     console.log('The "data to append" was appended to file!');
     *   });
     * @param filename
     * @param data
     * @param options
     * @option options [String] encoding Defaults to `'utf8'`.
     * @option options [Number] mode Defaults to `0644`.
     * @option options [String] flag Defaults to `'a'`.
     * @param callback
     */
    appendFile(filename: string, data: any, cb?: BFSOneArgCallback): void;
    appendFile(filename: string, data: any, options?: {
        encoding?: string;
        mode?: number | string;
        flag?: string;
    }, cb?: BFSOneArgCallback): void;
    appendFile(filename: string, data: any, encoding?: string, cb?: BFSOneArgCallback): void;
    /**
     * Asynchronously append data to a file, creating the file if it not yet
     * exists.
     *
     * @example Usage example
     *   fs.appendFile('message.txt', 'data to append', function (err) {
     *     if (err) throw err;
     *     console.log('The "data to append" was appended to file!');
     *   });
     * @param filename
     * @param data
     * @param options
     * @option options [String] encoding Defaults to `'utf8'`.
     * @option options [Number] mode Defaults to `0644`.
     * @option options [String] flag Defaults to `'a'`.
     */
    appendFileSync(filename: string, data: any, options?: {
        encoding?: string;
        mode?: number | string;
        flag?: string;
    }): void;
    appendFileSync(filename: string, data: any, encoding?: string): void;
    /**
     * Asynchronous `fstat`.
     * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
     * specified by the file descriptor `fd`.
     * @param fd
     * @param callback
     */
    fstat(fd: number, cb?: BFSCallback<Stats>): void;
    /**
     * Synchronous `fstat`.
     * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
     * specified by the file descriptor `fd`.
     * @param fd
     * @return [BrowserFS.node.fs.Stats]
     */
    fstatSync(fd: number): Stats;
    /**
     * Asynchronous close.
     * @param fd
     * @param callback
     */
    close(fd: number, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous close.
     * @param fd
     */
    closeSync(fd: number): void;
    /**
     * Asynchronous ftruncate.
     * @param fd
     * @param len
     * @param callback
     */
    ftruncate(fd: number, cb?: BFSOneArgCallback): void;
    ftruncate(fd: number, len?: number, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous ftruncate.
     * @param fd
     * @param len
     */
    ftruncateSync(fd: number, len?: number): void;
    /**
     * Asynchronous fsync.
     * @param fd
     * @param callback
     */
    fsync(fd: number, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous fsync.
     * @param fd
     */
    fsyncSync(fd: number): void;
    /**
     * Asynchronous fdatasync.
     * @param fd
     * @param callback
     */
    fdatasync(fd: number, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous fdatasync.
     * @param fd
     */
    fdatasyncSync(fd: number): void;
    /**
     * Write buffer to the file specified by `fd`.
     * Note that it is unsafe to use fs.write multiple times on the same file
     * without waiting for the callback.
     * @param fd
     * @param buffer Buffer containing the data to write to
     *   the file.
     * @param offset Offset in the buffer to start reading data from.
     * @param length The amount of bytes to write to the file.
     * @param position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @param callback The number specifies the number of bytes written into the file.
     */
    write(fd: number, buffer: Buffer, offset: number, length: number, cb?: BFSThreeArgCallback<number, Buffer>): void;
    write(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, cb?: BFSThreeArgCallback<number, Buffer>): void;
    write(fd: number, data: any, cb?: BFSThreeArgCallback<number, string>): void;
    write(fd: number, data: any, position: number | null, cb?: BFSThreeArgCallback<number, string>): void;
    write(fd: number, data: any, position: number | null, encoding: string, cb?: BFSThreeArgCallback<number, string>): void;
    /**
     * Write buffer to the file specified by `fd`.
     * Note that it is unsafe to use fs.write multiple times on the same file
     * without waiting for it to return.
     * @param fd
     * @param buffer Buffer containing the data to write to
     *   the file.
     * @param offset Offset in the buffer to start reading data from.
     * @param length The amount of bytes to write to the file.
     * @param position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     */
    writeSync(fd: number, buffer: Buffer, offset: number, length: number, position?: number | null): number;
    writeSync(fd: number, data: string, position?: number | null, encoding?: string): number;
    /**
     * Read data from the file specified by `fd`.
     * @param buffer The buffer that the data will be
     *   written to.
     * @param offset The offset within the buffer where writing will
     *   start.
     * @param length An integer specifying the number of bytes to read.
     * @param position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @param callback The number is the number of bytes read
     */
    read(fd: number, length: number, position: number | null, encoding: string, cb?: BFSThreeArgCallback<string, number>): void;
    read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, cb?: BFSThreeArgCallback<number, Buffer>): void;
    /**
     * Read data from the file specified by `fd`.
     * @param fd
     * @param buffer The buffer that the data will be
     *   written to.
     * @param offset The offset within the buffer where writing will
     *   start.
     * @param length An integer specifying the number of bytes to read.
     * @param position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @return [Number]
     */
    readSync(fd: number, length: number, position: number, encoding: string): string;
    readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    /**
     * Asynchronous `fchown`.
     * @param fd
     * @param uid
     * @param gid
     * @param callback
     */
    fchown(fd: number, uid: number, gid: number, callback?: BFSOneArgCallback): void;
    /**
     * Synchronous `fchown`.
     * @param fd
     * @param uid
     * @param gid
     */
    fchownSync(fd: number, uid: number, gid: number): void;
    /**
     * Asynchronous `fchmod`.
     * @param fd
     * @param mode
     * @param callback
     */
    fchmod(fd: number, mode: string | number, cb: BFSOneArgCallback): void;
    /**
     * Synchronous `fchmod`.
     * @param fd
     * @param mode
     */
    fchmodSync(fd: number, mode: number | string): void;
    /**
     * Change the file timestamps of a file referenced by the supplied file
     * descriptor.
     * @param fd
     * @param atime
     * @param mtime
     * @param callback
     */
    futimes(fd: number, atime: number | Date, mtime: number | Date, cb?: BFSOneArgCallback): void;
    /**
     * Change the file timestamps of a file referenced by the supplied file
     * descriptor.
     * @param fd
     * @param atime
     * @param mtime
     */
    futimesSync(fd: number, atime: number | Date, mtime: number | Date): void;
    /**
     * Asynchronous `rmdir`.
     * @param path
     * @param callback
     */
    rmdir(path: string, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `rmdir`.
     * @param path
     */
    rmdirSync(path: string): void;
    /**
     * Asynchronous `mkdir`.
     * @param path
     * @param mode defaults to `0777`
     * @param callback
     */
    mkdir(path: string, mode?: any, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `mkdir`.
     * @param path
     * @param mode defaults to `0777`
     */
    mkdirSync(path: string, mode?: number | string): void;
    /**
     * Asynchronous `readdir`. Reads the contents of a directory.
     * The callback gets two arguments `(err, files)` where `files` is an array of
     * the names of the files in the directory excluding `'.'` and `'..'`.
     * @param path
     * @param callback
     */
    readdir(path: string, cb?: BFSCallback<string[]>): void;
    /**
     * Synchronous `readdir`. Reads the contents of a directory.
     * @param path
     * @return [String[]]
     */
    readdirSync(path: string): string[];
    /**
     * Asynchronous `link`.
     * @param srcpath
     * @param dstpath
     * @param callback
     */
    link(srcpath: string, dstpath: string, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `link`.
     * @param srcpath
     * @param dstpath
     */
    linkSync(srcpath: string, dstpath: string): void;
    /**
     * Asynchronous `symlink`.
     * @param srcpath
     * @param dstpath
     * @param type can be either `'dir'` or `'file'` (default is `'file'`)
     * @param callback
     */
    symlink(srcpath: string, dstpath: string, cb?: BFSOneArgCallback): void;
    symlink(srcpath: string, dstpath: string, type?: string, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `symlink`.
     * @param srcpath
     * @param dstpath
     * @param type can be either `'dir'` or `'file'` (default is `'file'`)
     */
    symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    /**
     * Asynchronous readlink.
     * @param path
     * @param callback
     */
    readlink(path: string, cb?: BFSCallback<string>): void;
    /**
     * Synchronous readlink.
     * @param path
     * @return [String]
     */
    readlinkSync(path: string): string;
    /**
     * Asynchronous `chown`.
     * @param path
     * @param uid
     * @param gid
     * @param callback
     */
    chown(path: string, uid: number, gid: number, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `chown`.
     * @param path
     * @param uid
     * @param gid
     */
    chownSync(path: string, uid: number, gid: number): void;
    /**
     * Asynchronous `lchown`.
     * @param path
     * @param uid
     * @param gid
     * @param callback
     */
    lchown(path: string, uid: number, gid: number, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `lchown`.
     * @param path
     * @param uid
     * @param gid
     */
    lchownSync(path: string, uid: number, gid: number): void;
    /**
     * Asynchronous `chmod`.
     * @param path
     * @param mode
     * @param callback
     */
    chmod(path: string, mode: number | string, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `chmod`.
     * @param path
     * @param mode
     */
    chmodSync(path: string, mode: string | number): void;
    /**
     * Asynchronous `lchmod`.
     * @param path
     * @param mode
     * @param callback
     */
    lchmod(path: string, mode: number | string, cb?: BFSOneArgCallback): void;
    /**
     * Synchronous `lchmod`.
     * @param path
     * @param mode
     */
    lchmodSync(path: string, mode: number | string): void;
    /**
     * Change file timestamps of the file referenced by the supplied path.
     * @param path
     * @param atime
     * @param mtime
     * @param callback
     */
    utimes(path: string, atime: number | Date, mtime: number | Date, cb?: BFSOneArgCallback): void;
    /**
     * Change file timestamps of the file referenced by the supplied path.
     * @param path
     * @param atime
     * @param mtime
     */
    utimesSync(path: string, atime: number | Date, mtime: number | Date): void;
    /**
     * Asynchronous `realpath`. The callback gets two arguments
     * `(err, resolvedPath)`. May use `process.cwd` to resolve relative paths.
     *
     * @example Usage example
     *   let cache = {'/etc':'/private/etc'};
     *   fs.realpath('/etc/passwd', cache, function (err, resolvedPath) {
     *     if (err) throw err;
     *     console.log(resolvedPath);
     *   });
     *
     * @param path
     * @param cache An object literal of mapped paths that can be used to
     *   force a specific path resolution or avoid additional `fs.stat` calls for
     *   known real paths.
     * @param callback
     */
    realpath(path: string, cb?: BFSCallback<string>): void;
    realpath(path: string, cache: {
        [path: string]: string;
    }, cb: BFSCallback<string>): void;
    /**
     * Synchronous `realpath`.
     * @param path
     * @param cache An object literal of mapped paths that can be used to
     *   force a specific path resolution or avoid additional `fs.stat` calls for
     *   known real paths.
     * @return [String]
     */
    realpathSync(path: string, cache?: {
        [path: string]: string;
    }): string;
    watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    watchFile(filename: string, options: {
        persistent?: boolean;
        interval?: number;
    }, listener: (curr: Stats, prev: Stats) => void): void;
    unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    watch(filename: string, listener?: (event: string, filename: string) => any): _fs.FSWatcher;
    watch(filename: string, options: {
        persistent?: boolean;
    }, listener?: (event: string, filename: string) => any): _fs.FSWatcher;
    access(path: string, callback: (err: ApiError) => void): void;
    access(path: string, mode: number, callback: (err: ApiError) => void): void;
    accessSync(path: string, mode?: number): void;
    createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
    }): _fs.ReadStream;
    createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
    }): _fs.WriteStream;
    /**
     * For unit testing. Passes all incoming callbacks to cbWrapper for wrapping.
     */
    wrapCallbacks(cbWrapper: (cb: Function, args: number) => Function): void;
    private getFdForFile;
    private fd2file;
    private closeFd;
}
export interface FSModule extends FS {
    /**
     * The FS constructor.
     */
    FS: typeof FS;
    /**
     * The FS.Stats constructor.
     */
    Stats: typeof Stats;
    /**
     * Retrieve the FS object backing the fs module.
     */
    getFSModule(): FS;
    /**
     * Set the FS object backing the fs module.
     */
    changeFSModule(newFs: FS): void;
    /**
     * Accessors
     */
    F_OK: number;
    R_OK: number;
    W_OK: number;
    X_OK: number;
}
