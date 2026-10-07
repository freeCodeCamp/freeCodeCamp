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
     * Reads a file and returns the contents as a string. Assumes UTF-8 encoding.
     * @param {string} filePath The path to the file to read.
     * @returns {Promise<string|undefined>} A promise that resolves with the contents of
     *     the file or undefined if the file doesn't exist.
     * @throws {TypeError} If the file path is not a string.
     * @throws {RangeError} If the file path is empty.
     * @throws {RangeError} If the file path is not absolute.
     * @throws {RangeError} If the file path is not a file.
     * @throws {RangeError} If the file path is not readable.
     */
    text(filePath: string): Promise<string | undefined>;
    /**
     * Reads a file and returns the contents as a JSON object. Assumes UTF-8 encoding.
     * @param {string} filePath The path to the file to read.
     * @returns {Promise<object|undefined>} A promise that resolves with the contents of
     *    the file or undefined if the file doesn't exist.
     * @throws {SyntaxError} If the file contents are not valid JSON.
     * @throws {Error} If the file cannot be read.
     * @throws {TypeError} If the file path is not a string.
     */
    json(filePath: string): Promise<object | undefined>;
    /**
     * Reads a file and returns the contents as an ArrayBuffer.
     * @param {string} filePath The path to the file to read.
     * @returns {Promise<ArrayBuffer|undefined>} A promise that resolves with the contents
     *    of the file or undefined if the file doesn't exist.
     * @throws {Error} If the file cannot be read.
     * @throws {TypeError} If the file path is not a string.
     * @deprecated Use bytes() instead.
     */
    arrayBuffer(filePath: string): Promise<ArrayBuffer | undefined>;
    /**
     * Reads a file and returns the contents as an Uint8Array.
     * @param {string} filePath The path to the file to read.
     * @returns {Promise<Uint8Array|undefined>} A promise that resolves with the contents
     *    of the file or undefined if the file doesn't exist.
     * @throws {Error} If the file cannot be read.
     * @throws {TypeError} If the file path is not a string.
     */
    bytes(filePath: string): Promise<Uint8Array | undefined>;
    /**
     * Writes a value to a file. If the value is a string, UTF-8 encoding is used.
     * @param {string} filePath The path to the file to write.
     * @param {string|ArrayBuffer|ArrayBufferView} contents The contents to write to the
     *   file.
     * @returns {Promise<void>} A promise that resolves when the file is
     *  written.
     * @throws {TypeError} If the file path is not a string.
     * @throws {Error} If the file cannot be written.
     */
    write(filePath: string, contents: string | ArrayBuffer | ArrayBufferView): Promise<void>;
    /**
     * Checks if a file exists.
     * @param {string} filePath The path to the file to check.
     * @returns {Promise<boolean>} A promise that resolves with true if the
     *    file exists or false if it does not.
     * @throws {Error} If the operation fails with a code other than ENOENT.
     */
    isFile(filePath: string): Promise<boolean>;
    /**
     * Checks if a directory exists.
     * @param {string} dirPath The path to the directory to check.
     * @returns {Promise<boolean>} A promise that resolves with true if the
     *    directory exists or false if it does not.
     * @throws {Error} If the operation fails with a code other than ENOENT.
     */
    isDirectory(dirPath: string): Promise<boolean>;
    /**
     * Creates a directory recursively.
     * @param {string} dirPath The path to the directory to create.
     * @returns {Promise<void>} A promise that resolves when the directory is
     *   created.
     */
    createDirectory(dirPath: string): Promise<void>;
    /**
     * Deletes a file or empty directory.
     * @param {string} fileOrDirPath The path to the file or directory to
     *   delete.
     * @returns {Promise<void>} A promise that resolves when the file or
     *   directory is deleted.
     * @throws {TypeError} If the file or directory path is not a string.
     * @throws {Error} If the file or directory cannot be deleted.
     * @throws {Error} If the file or directory is not found.
     */
    delete(fileOrDirPath: string): Promise<void>;
    /**
     * Deletes a file or directory recursively.
     * @param {string} fileOrDirPath The path to the file or directory to
     *   delete.
     * @returns {Promise<void>} A promise that resolves when the file or
     *   directory is deleted.
     * @throws {TypeError} If the file or directory path is not a string.
     * @throws {Error} If the file or directory cannot be deleted.
     * @throws {Error} If the file or directory is not found.
     */
    deleteAll(fileOrDirPath: string): Promise<void>;
    /**
     * Returns a list of directory entries for the given path.
     * @param {string} dirPath The path to the directory to read.
     * @returns {AsyncIterable<HfsDirectoryEntry>} A promise that resolves with the
     *   directory entries.
     * @throws {TypeError} If the directory path is not a string.
     * @throws {Error} If the directory cannot be read.
     */
    list(dirPath: string): AsyncIterable<HfsDirectoryEntry>;
    /**
     * Returns the size of a file.
     * @param {string} filePath The path to the file to read.
     * @returns {Promise<number|undefined>} A promise that resolves with the size of the
     *  file in bytes or undefined if the file doesn't exist.
     */
    size(filePath: string): Promise<number | undefined>;
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
