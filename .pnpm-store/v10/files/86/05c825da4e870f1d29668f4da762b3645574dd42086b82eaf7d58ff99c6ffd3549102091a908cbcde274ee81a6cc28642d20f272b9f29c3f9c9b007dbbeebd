/// <reference types="node" />
import { ApiError } from './api_error';
import Stats from './node_fs_stats';
import { File } from './file';
import { FileFlag } from './file_flag';
export type BFSOneArgCallback = (e?: ApiError | null) => any;
export type BFSCallback<T> = (e: ApiError | null | undefined, rv?: T) => any;
export type BFSThreeArgCallback<T, U> = (e: ApiError | null | undefined, arg1?: T, arg2?: U) => any;
/**
 * Interface for a filesystem. **All** BrowserFS FileSystems should implement
 * this interface.
 *
 * Below, we denote each API method as **Core**, **Supplemental**, or
 * **Optional**.
 *
 * ### Core Methods
 *
 * **Core** API methods *need* to be implemented for basic read/write
 * functionality.
 *
 * Note that read-only FileSystems can choose to not implement core methods
 * that mutate files or metadata. The default implementation will pass a
 * NOT_SUPPORTED error to the callback.
 *
 * ### Supplemental Methods
 *
 * **Supplemental** API methods do not need to be implemented by a filesystem.
 * The default implementation implements all of the supplemental API methods in
 * terms of the **core** API methods.
 *
 * Note that a file system may choose to implement supplemental methods for
 * efficiency reasons.
 *
 * The code for some supplemental methods was adapted directly from NodeJS's
 * fs.js source code.
 *
 * ### Optional Methods
 *
 * **Optional** API methods provide functionality that may not be available in
 * all filesystems. For example, all symlink/hardlink-related API methods fall
 * under this category.
 *
 * The default implementation will pass a NOT_SUPPORTED error to the callback.
 *
 * ### Argument Assumptions
 *
 * You can assume the following about arguments passed to each API method:
 *
 * * **Every path is an absolute path.** Meaning, `.`, `..`, and other items
 *   are resolved into an absolute form.
 * * **All arguments are present.** Any optional arguments at the Node API level
 *   have been passed in with their default values.
 * * **The callback will reset the stack depth.** When your filesystem calls the
 *   callback with the requested information, it will use `setImmediate` to
 *   reset the JavaScript stack depth before calling the user-supplied callback.
 */
export interface FileSystem {
    /**
     * **Optional**: Returns the name of the file system.
     */
    getName(): string;
    /**
     * **Optional**: Passes the following information to the callback:
     *
     * * Total number of bytes available on this file system.
     * * number of free bytes available on this file system.
     *
     * @todo This info is not available through the Node API. Perhaps we could do a
     *   polyfill of diskspace.js, or add a new Node API function.
     * @param path The path to the location that is being queried. Only
     *   useful for filesystems that support mount points.
     */
    diskSpace(p: string, cb: (total: number, free: number) => any): void;
    /**
     * **Core**: Is this filesystem read-only?
     * @return True if this FileSystem is inherently read-only.
     */
    isReadOnly(): boolean;
    /**
     * **Core**: Does the filesystem support optional symlink/hardlink-related
     *   commands?
     * @return True if the FileSystem supports the optional
     *   symlink/hardlink-related commands.
     */
    supportsLinks(): boolean;
    /**
     * **Core**: Does the filesystem support optional property-related commands?
     * @return True if the FileSystem supports the optional
     *   property-related commands (permissions, utimes, etc).
     */
    supportsProps(): boolean;
    /**
     * **Core**: Does the filesystem support the optional synchronous interface?
     * @return True if the FileSystem supports synchronous operations.
     */
    supportsSynch(): boolean;
    /**
     * **Core**: Asynchronous rename. No arguments other than a possible exception
     * are given to the completion callback.
     */
    rename(oldPath: string, newPath: string, cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous rename.
     */
    renameSync(oldPath: string, newPath: string): void;
    /**
     * **Core**: Asynchronous `stat` or `lstat`.
     * @param isLstat True if this is `lstat`, false if this is regular
     *   `stat`.
     */
    stat(p: string, isLstat: boolean | null, cb: BFSCallback<Stats>): void;
    /**
     * **Core**: Synchronous `stat` or `lstat`.
     * @param isLstat True if this is `lstat`, false if this is regular
     *   `stat`.
     */
    statSync(p: string, isLstat: boolean | null): Stats;
    /**
     * **Core**: Asynchronous file open.
     * @see http://www.manpagez.com/man/2/open/
     * @param flags Handles the complexity of the various file
     *   modes. See its API for more details.
     * @param mode Mode to use to open the file. Can be ignored if the
     *   filesystem doesn't support permissions.
     */
    open(p: string, flag: FileFlag, mode: number, cb: BFSCallback<File>): void;
    /**
     * **Core**: Synchronous file open.
     * @see http://www.manpagez.com/man/2/open/
     * @param flags Handles the complexity of the various file
     *   modes. See its API for more details.
     * @param mode Mode to use to open the file. Can be ignored if the
     *   filesystem doesn't support permissions.
     */
    openSync(p: string, flag: FileFlag, mode: number): File;
    /**
     * **Core**: Asynchronous `unlink`.
     */
    unlink(p: string, cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous `unlink`.
     */
    unlinkSync(p: string): void;
    /**
     * **Core**: Asynchronous `rmdir`.
     */
    rmdir(p: string, cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous `rmdir`.
     */
    rmdirSync(p: string): void;
    /**
     * **Core**: Asynchronous `mkdir`.
     * @param mode Mode to make the directory using. Can be ignored if
     *   the filesystem doesn't support permissions.
     */
    mkdir(p: string, mode: number, cb: BFSOneArgCallback): void;
    /**
     * **Core**: Synchronous `mkdir`.
     * @param mode Mode to make the directory using. Can be ignored if
     *   the filesystem doesn't support permissions.
     */
    mkdirSync(p: string, mode: number): void;
    /**
     * **Core**: Asynchronous `readdir`. Reads the contents of a directory.
     *
     * The callback gets two arguments `(err, files)` where `files` is an array of
     * the names of the files in the directory excluding `'.'` and `'..'`.
     */
    readdir(p: string, cb: BFSCallback<string[]>): void;
    /**
     * **Core**: Synchronous `readdir`. Reads the contents of a directory.
     */
    readdirSync(p: string): string[];
    /**
     * **Supplemental**: Test whether or not the given path exists by checking with
     * the file system. Then call the callback argument with either true or false.
     */
    exists(p: string, cb: (exists: boolean) => void): void;
    /**
     * **Supplemental**: Test whether or not the given path exists by checking with
     * the file system.
     */
    existsSync(p: string): boolean;
    /**
     * **Supplemental**: Asynchronous `realpath`. The callback gets two arguments
     * `(err, resolvedPath)`.
     *
     * Note that the Node API will resolve `path` to an absolute path.
     * @param cache An object literal of mapped paths that can be used to
     *   force a specific path resolution or avoid additional `fs.stat` calls for
     *   known real paths. If not supplied by the user, it'll be an empty object.
     */
    realpath(p: string, cache: {
        [path: string]: string;
    }, cb: BFSCallback<string>): void;
    /**
     * **Supplemental**: Synchronous `realpath`.
     *
     * Note that the Node API will resolve `path` to an absolute path.
     * @param cache An object literal of mapped paths that can be used to
     *   force a specific path resolution or avoid additional `fs.stat` calls for
     *   known real paths. If not supplied by the user, it'll be an empty object.
     */
    realpathSync(p: string, cache: {
        [path: string]: string;
    }): string;
    /**
     * **Supplemental**: Asynchronous `truncate`.
     */
    truncate(p: string, len: number, cb: BFSOneArgCallback): void;
    /**
     * **Supplemental**: Synchronous `truncate`.
     */
    truncateSync(p: string, len: number): void;
    /**
     * **Supplemental**: Asynchronously reads the entire contents of a file.
     * @param encoding If non-null, the file's contents should be decoded
     *   into a string using that encoding. Otherwise, if encoding is null, fetch
     *   the file's contents as a Buffer.
     * @param cb If no encoding is specified, then the raw buffer is returned.
     */
    readFile(fname: string, encoding: string | null, flag: FileFlag, cb: BFSCallback<string | Buffer>): void;
    /**
     * **Supplemental**: Synchronously reads the entire contents of a file.
     * @param encoding If non-null, the file's contents should be decoded
     *   into a string using that encoding. Otherwise, if encoding is null, fetch
     *   the file's contents as a Buffer.
     */
    readFileSync(fname: string, encoding: string | null, flag: FileFlag): any;
    /**
     * **Supplemental**: Asynchronously writes data to a file, replacing the file
     * if it already exists.
     *
     * The encoding option is ignored if data is a buffer.
     */
    writeFile(fname: string, data: any, encoding: string | null, flag: FileFlag, mode: number, cb: BFSOneArgCallback): void;
    /**
     * **Supplemental**: Synchronously writes data to a file, replacing the file
     * if it already exists.
     *
     * The encoding option is ignored if data is a buffer.
     */
    writeFileSync(fname: string, data: string | Buffer, encoding: string | null, flag: FileFlag, mode: number): void;
    /**
     * **Supplemental**: Asynchronously append data to a file, creating the file if
     * it not yet exists.
     */
    appendFile(fname: string, data: string | Buffer, encoding: string | null, flag: FileFlag, mode: number, cb: BFSOneArgCallback): void;
    /**
     * **Supplemental**: Synchronously append data to a file, creating the file if
     * it not yet exists.
     */
    appendFileSync(fname: string, data: string | Buffer, encoding: string | null, flag: FileFlag, mode: number): void;
    /**
     * **Optional**: Asynchronous `chmod` or `lchmod`.
     * @param isLchmod `True` if `lchmod`, false if `chmod`. Has no
     *   bearing on result if links aren't supported.
     */
    chmod(p: string, isLchmod: boolean, mode: number, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Synchronous `chmod` or `lchmod`.
     * @param isLchmod `True` if `lchmod`, false if `chmod`. Has no
     *   bearing on result if links aren't supported.
     */
    chmodSync(p: string, isLchmod: boolean, mode: number): void;
    /**
     * **Optional**: Asynchronous `chown` or `lchown`.
     * @param isLchown `True` if `lchown`, false if `chown`. Has no
     *   bearing on result if links aren't supported.
     */
    chown(p: string, isLchown: boolean, uid: number, gid: number, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Synchronous `chown` or `lchown`.
     * @param isLchown `True` if `lchown`, false if `chown`. Has no
     *   bearing on result if links aren't supported.
     */
    chownSync(p: string, isLchown: boolean, uid: number, gid: number): void;
    /**
     * **Optional**: Change file timestamps of the file referenced by the supplied
     * path.
     */
    utimes(p: string, atime: Date, mtime: Date, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Change file timestamps of the file referenced by the supplied
     * path.
     */
    utimesSync(p: string, atime: Date, mtime: Date): void;
    /**
     * **Optional**: Asynchronous `link`.
     */
    link(srcpath: string, dstpath: string, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Synchronous `link`.
     */
    linkSync(srcpath: string, dstpath: string): void;
    /**
     * **Optional**: Asynchronous `symlink`.
     * @param type can be either `'dir'` or `'file'`
     */
    symlink(srcpath: string, dstpath: string, type: string, cb: BFSOneArgCallback): void;
    /**
     * **Optional**: Synchronous `symlink`.
     * @param type can be either `'dir'` or `'file'`
     */
    symlinkSync(srcpath: string, dstpath: string, type: string): void;
    /**
     * **Optional**: Asynchronous readlink.
     */
    readlink(p: string, cb: BFSCallback<string>): void;
    /**
     * **Optional**: Synchronous readlink.
     */
    readlinkSync(p: string): string;
}
/**
 * Describes a file system option.
 */
export interface FileSystemOption<T> {
    type: string | string[];
    optional?: boolean;
    description: string;
    validator?(opt: T, cb: BFSOneArgCallback): void;
}
/**
 * Describes all of the options available in a file system.
 */
export interface FileSystemOptions {
    [name: string]: FileSystemOption<any>;
}
/**
 * Contains typings for static functions on the file system constructor.
 */
export interface FileSystemConstructor {
    /**
     * **Core**: Name to identify this particular file system.
     */
    Name: string;
    /**
     * **Core**: Describes all of the options available for this file system.
     */
    Options: FileSystemOptions;
    /**
     * **Core**: Creates a file system of this given type with the given
     * options.
     */
    Create(options: object, cb: BFSCallback<FileSystem>): void;
    /**
     * **Core**: Returns 'true' if this filesystem is available in the current
     * environment. For example, a `localStorage`-backed filesystem will return
     * 'false' if the browser does not support that API.
     *
     * Defaults to 'false', as the FileSystem base class isn't usable alone.
     */
    isAvailable(): boolean;
}
/**
 * Basic filesystem class. Most filesystems should extend this class, as it
 * provides default implementations for a handful of methods.
 */
export declare class BaseFileSystem {
    supportsLinks(): boolean;
    diskSpace(p: string, cb: (total: number, free: number) => any): void;
    /**
     * Opens the file at path p with the given flag. The file must exist.
     * @param p The path to open.
     * @param flag The flag to use when opening the file.
     */
    openFile(p: string, flag: FileFlag, cb: BFSCallback<File>): void;
    /**
     * Create the file at path p with the given mode. Then, open it with the given
     * flag.
     */
    createFile(p: string, flag: FileFlag, mode: number, cb: BFSCallback<File>): void;
    open(p: string, flag: FileFlag, mode: number, cb: BFSCallback<File>): void;
    rename(oldPath: string, newPath: string, cb: BFSOneArgCallback): void;
    renameSync(oldPath: string, newPath: string): void;
    stat(p: string, isLstat: boolean | null, cb: BFSCallback<Stats>): void;
    statSync(p: string, isLstat: boolean | null): Stats;
    /**
     * Opens the file at path p with the given flag. The file must exist.
     * @param p The path to open.
     * @param flag The flag to use when opening the file.
     * @return A File object corresponding to the opened file.
     */
    openFileSync(p: string, flag: FileFlag, mode: number): File;
    /**
     * Create the file at path p with the given mode. Then, open it with the given
     * flag.
     */
    createFileSync(p: string, flag: FileFlag, mode: number): File;
    openSync(p: string, flag: FileFlag, mode: number): File;
    unlink(p: string, cb: BFSOneArgCallback): void;
    unlinkSync(p: string): void;
    rmdir(p: string, cb: BFSOneArgCallback): void;
    rmdirSync(p: string): void;
    mkdir(p: string, mode: number, cb: BFSOneArgCallback): void;
    mkdirSync(p: string, mode: number): void;
    readdir(p: string, cb: BFSCallback<string[]>): void;
    readdirSync(p: string): string[];
    exists(p: string, cb: (exists: boolean) => void): void;
    existsSync(p: string): boolean;
    realpath(p: string, cache: {
        [path: string]: string;
    }, cb: BFSCallback<string>): void;
    realpathSync(p: string, cache: {
        [path: string]: string;
    }): string;
    truncate(p: string, len: number, cb: BFSOneArgCallback): void;
    truncateSync(p: string, len: number): void;
    readFile(fname: string, encoding: string | null, flag: FileFlag, cb: BFSCallback<string | Buffer>): void;
    readFileSync(fname: string, encoding: string | null, flag: FileFlag): any;
    writeFile(fname: string, data: any, encoding: string | null, flag: FileFlag, mode: number, cb: BFSOneArgCallback): void;
    writeFileSync(fname: string, data: any, encoding: string | null, flag: FileFlag, mode: number): void;
    appendFile(fname: string, data: any, encoding: string | null, flag: FileFlag, mode: number, cb: BFSOneArgCallback): void;
    appendFileSync(fname: string, data: any, encoding: string | null, flag: FileFlag, mode: number): void;
    chmod(p: string, isLchmod: boolean, mode: number, cb: BFSOneArgCallback): void;
    chmodSync(p: string, isLchmod: boolean, mode: number): void;
    chown(p: string, isLchown: boolean, uid: number, gid: number, cb: BFSOneArgCallback): void;
    chownSync(p: string, isLchown: boolean, uid: number, gid: number): void;
    utimes(p: string, atime: Date, mtime: Date, cb: BFSOneArgCallback): void;
    utimesSync(p: string, atime: Date, mtime: Date): void;
    link(srcpath: string, dstpath: string, cb: BFSOneArgCallback): void;
    linkSync(srcpath: string, dstpath: string): void;
    symlink(srcpath: string, dstpath: string, type: string, cb: BFSOneArgCallback): void;
    symlinkSync(srcpath: string, dstpath: string, type: string): void;
    readlink(p: string, cb: BFSOneArgCallback): void;
    readlinkSync(p: string): string;
}
/**
 * Implements the asynchronous API in terms of the synchronous API.
 * @class SynchronousFileSystem
 */
export declare class SynchronousFileSystem extends BaseFileSystem {
    supportsSynch(): boolean;
    rename(oldPath: string, newPath: string, cb: BFSOneArgCallback): void;
    stat(p: string, isLstat: boolean | null, cb: BFSCallback<Stats>): void;
    open(p: string, flags: FileFlag, mode: number, cb: BFSCallback<File>): void;
    unlink(p: string, cb: BFSOneArgCallback): void;
    rmdir(p: string, cb: BFSOneArgCallback): void;
    mkdir(p: string, mode: number, cb: BFSOneArgCallback): void;
    readdir(p: string, cb: BFSCallback<string[]>): void;
    chmod(p: string, isLchmod: boolean, mode: number, cb: BFSOneArgCallback): void;
    chown(p: string, isLchown: boolean, uid: number, gid: number, cb: BFSOneArgCallback): void;
    utimes(p: string, atime: Date, mtime: Date, cb: BFSOneArgCallback): void;
    link(srcpath: string, dstpath: string, cb: BFSOneArgCallback): void;
    symlink(srcpath: string, dstpath: string, type: string, cb: BFSOneArgCallback): void;
    readlink(p: string, cb: BFSCallback<string>): void;
}
