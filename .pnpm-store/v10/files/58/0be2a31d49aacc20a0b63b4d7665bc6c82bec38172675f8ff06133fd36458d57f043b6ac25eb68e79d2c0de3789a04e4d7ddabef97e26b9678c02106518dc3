/// <reference types="node" />
/// <reference types="node" />
import * as fs from 'fs';
/**
 * Indicates the type of the given file. Applied to 'mode'.
 */
export declare enum FileType {
    FILE = 32768,
    DIRECTORY = 16384,
    SYMLINK = 40960
}
/**
 * Emulation of Node's `fs.Stats` object.
 *
 * Attribute descriptions are from `man 2 stat'
 * @see http://nodejs.org/api/fs.html#fs_class_fs_stats
 * @see http://man7.org/linux/man-pages/man2/stat.2.html
 */
export default class Stats implements fs.Stats {
    static fromBuffer(buffer: Buffer): Stats;
    /**
     * Clones the stats object.
     */
    static clone(s: Stats): Stats;
    blocks: number;
    mode: number;
    /**
     * UNSUPPORTED ATTRIBUTES
     * I assume no one is going to need these details, although we could fake
     * appropriate values if need be.
     */
    dev: number;
    ino: number;
    rdev: number;
    nlink: number;
    blksize: number;
    uid: number;
    gid: number;
    fileData: Buffer | null;
    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    birthtimeMs: number;
    size: number;
    get atime(): Date;
    get mtime(): Date;
    get ctime(): Date;
    get birthtime(): Date;
    /**
     * Provides information about a particular entry in the file system.
     * @param itemType Type of the item (FILE, DIRECTORY, SYMLINK, or SOCKET)
     * @param size Size of the item in bytes. For directories/symlinks,
     *   this is normally the size of the struct that represents the item.
     * @param mode Unix-style file mode (e.g. 0o644)
     * @param atimeMs time of last access, in milliseconds since epoch
     * @param mtimeMs time of last modification, in milliseconds since epoch
     * @param ctimeMs time of last time file status was changed, in milliseconds since epoch
     * @param birthtimeMs time of file creation, in milliseconds since epoch
     */
    constructor(itemType: FileType, size: number, mode?: number, atimeMs?: number, mtimeMs?: number, ctimeMs?: number, birthtimeMs?: number);
    toBuffer(): Buffer;
    /**
     * @return [Boolean] True if this item is a file.
     */
    isFile(): boolean;
    /**
     * @return [Boolean] True if this item is a directory.
     */
    isDirectory(): boolean;
    /**
     * @return [Boolean] True if this item is a symbolic link (only valid through lstat)
     */
    isSymbolicLink(): boolean;
    /**
     * Change the mode of the file. We use this helper function to prevent messing
     * up the type of the file, which is encoded in mode.
     */
    chmod(mode: number): void;
    isSocket(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isFIFO(): boolean;
}
