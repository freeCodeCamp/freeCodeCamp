/// <reference types="node" resolution-mode="require"/>
/**
 * A class representing the Node.js implementation of Hfs.
 * @implements {HfsImpl}
 */
export class NodeHfsImpl implements HfsImpl {
    /**
     * Creates a new instance.
     * @param {object} [options] The options for the instance.
     * @param {Fsp} [options.fsp] The file system module to use.
     */
    constructor({ fsp }?: {
        fsp?: Fsp;
    });
    /**
     * Reads a file and returns the contents as an Uint8Array.
     * @param {string|URL} filePath The path to the file to read.
     * @returns {Promise<Uint8Array|undefined>} A promise that resolves with the contents
     *    of the file or undefined if the file doesn't exist.
     * @throws {Error} If the file cannot be read.
     * @throws {TypeError} If the file path is not a string.
     */
    bytes(filePath: string | URL): Promise<Uint8Array | undefined>;
    /**
     * Writes a value to a file. If the value is a string, UTF-8 encoding is used.
     * @param {string|URL} filePath The path to the file to write.
     * @param {Uint8Array} contents The contents to write to the
     *   file.
     * @returns {Promise<void>} A promise that resolves when the file is
     *  written.
     * @throws {TypeError} If the file path is not a string.
     * @throws {Error} If the file cannot be written.
     */
    write(filePath: string | URL, contents: Uint8Array): Promise<void>;
    /**
     * Appends a value to a file. If the value is a string, UTF-8 encoding is used.
     * @param {string|URL} filePath The path to the file to append to.
     * @param {Uint8Array} contents The contents to append to the
     *  file.
     * @returns {Promise<void>} A promise that resolves when the file is
     * written.
     * @throws {TypeError} If the file path is not a string.
     * @throws {Error} If the file cannot be appended to.
     */
    append(filePath: string | URL, contents: Uint8Array): Promise<void>;
    /**
     * Checks if a file exists.
     * @param {string|URL} filePath The path to the file to check.
     * @returns {Promise<boolean>} A promise that resolves with true if the
     *    file exists or false if it does not.
     * @throws {Error} If the operation fails with a code other than ENOENT.
     */
    isFile(filePath: string | URL): Promise<boolean>;
    /**
     * Checks if a directory exists.
     * @param {string|URL} dirPath The path to the directory to check.
     * @returns {Promise<boolean>} A promise that resolves with true if the
     *    directory exists or false if it does not.
     * @throws {Error} If the operation fails with a code other than ENOENT.
     */
    isDirectory(dirPath: string | URL): Promise<boolean>;
    /**
     * Creates a directory recursively.
     * @param {string|URL} dirPath The path to the directory to create.
     * @returns {Promise<void>} A promise that resolves when the directory is
     *   created.
     */
    createDirectory(dirPath: string | URL): Promise<void>;
    /**
     * Deletes a file or empty directory.
     * @param {string|URL} fileOrDirPath The path to the file or directory to
     *   delete.
     * @returns {Promise<boolean>} A promise that resolves when the file or
     *   directory is deleted, true if the file or directory is deleted, false
     *   if the file or directory does not exist.
     * @throws {TypeError} If the file or directory path is not a string.
     * @throws {Error} If the file or directory cannot be deleted.
     */
    delete(fileOrDirPath: string | URL): Promise<boolean>;
    /**
     * Deletes a file or directory recursively.
     * @param {string|URL} fileOrDirPath The path to the file or directory to
     *   delete.
     * @returns {Promise<boolean>} A promise that resolves when the file or
     *   directory is deleted, true if the file or directory is deleted, false
     *   if the file or directory does not exist.
     * @throws {TypeError} If the file or directory path is not a string.
     * @throws {Error} If the file or directory cannot be deleted.
     */
    deleteAll(fileOrDirPath: string | URL): Promise<boolean>;
    /**
     * Returns a list of directory entries for the given path.
     * @param {string|URL} dirPath The path to the directory to read.
     * @returns {AsyncIterable<HfsDirectoryEntry>} A promise that resolves with the
     *   directory entries.
     * @throws {TypeError} If the directory path is not a string.
     * @throws {Error} If the directory cannot be read.
     */
    list(dirPath: string | URL): AsyncIterable<HfsDirectoryEntry>;
    /**
     * Returns the size of a file. This method handles ENOENT errors
     * and returns undefined in that case.
     * @param {string|URL} filePath The path to the file to read.
     * @returns {Promise<number|undefined>} A promise that resolves with the size of the
     *  file in bytes or undefined if the file doesn't exist.
     */
    size(filePath: string | URL): Promise<number | undefined>;
    /**
     * Returns the last modified date of a file or directory. This method handles ENOENT errors
     * and returns undefined in that case.
     * @param {string|URL} fileOrDirPath The path to the file to read.
     * @returns {Promise<Date|undefined>} A promise that resolves with the last modified
     * date of the file or directory, or undefined if the file doesn't exist.
     */
    lastModified(fileOrDirPath: string | URL): Promise<Date | undefined>;
    /**
     * Copies a file from one location to another.
     * @param {string|URL} source The path to the file to copy.
     * @param {string|URL} destination The path to copy the file to.
     * @returns {Promise<void>} A promise that resolves when the file is copied.
     * @throws {Error} If the source file does not exist.
     * @throws {Error} If the source file is a directory.
     * @throws {Error} If the destination file is a directory.
     */
    copy(source: string | URL, destination: string | URL): Promise<void>;
    /**
     * Copies a file or directory from one location to another.
     * @param {string|URL} source The path to the file or directory to copy.
     * @param {string|URL} destination The path to copy the file or directory to.
     * @returns {Promise<void>} A promise that resolves when the file or directory is
     * copied.
     * @throws {Error} If the source file or directory does not exist.
     * @throws {Error} If the destination file or directory is a directory.
     */
    copyAll(source: string | URL, destination: string | URL): Promise<void>;
    /**
     * Moves a file from the source path to the destination path.
     * @param {string|URL} source The location of the file to move.
     * @param {string|URL} destination The destination of the file to move.
     * @returns {Promise<void>} A promise that resolves when the move is complete.
     * @throws {TypeError} If the file paths are not strings.
     * @throws {Error} If the file cannot be moved.
     */
    move(source: string | URL, destination: string | URL): Promise<void>;
    /**
     * Moves a file or directory from the source path to the destination path.
     * @param {string|URL} source The location of the file or directory to move.
     * @param {string|URL} destination The destination of the file or directory to move.
     * @returns {Promise<void>} A promise that resolves when the move is complete.
     * @throws {TypeError} If the file paths are not strings.
     * @throws {Error} If the file or directory cannot be moved.
     */
    moveAll(source: string | URL, destination: string | URL): Promise<void>;
    #private;
}
/**
 * A class representing a file system utility library.
 * @implements {HfsImpl}
 */
export class NodeHfs extends Hfs implements HfsImpl {
    /**
     * Creates a new instance.
     * @param {object} [options] The options for the instance.
     * @param {Fsp} [options.fsp] The file system module to use.
     */
    constructor({ fsp }?: {
        fsp?: Fsp;
    });
}
export const hfs: NodeHfs;
export type HfsImpl = import("@humanfs/types").HfsImpl;
export type HfsDirectoryEntry = import("@humanfs/types").HfsDirectoryEntry;
export type Fsp = typeof nativeFsp;
export type Dirent = import("fs").Dirent;
import { Hfs } from "@humanfs/core";
import nativeFsp from "node:fs/promises";
