/**
 * @fileoverview The main file for the hfs package.
 * @author Nicholas C. Zakas
 */
/** @typedef{import("@humanfs/types").HfsImpl} HfsImpl */
/** @typedef{import("@humanfs/types").HfsDirectoryEntry} HfsDirectoryEntry */
/**
 * Error to represent when a method is missing on an impl.
 */
export class NoSuchMethodError extends Error {
    /**
     * Creates a new instance.
     * @param {string} methodName The name of the method that was missing.
     */
    constructor(methodName: string);
}
/**
 * Error to represent when an impl is already set.
 */
export class ImplAlreadySetError extends Error {
    /**
     * Creates a new instance.
     */
    constructor();
}
/**
 * A class representing a log entry.
 */
export class LogEntry {
    /**
     * Creates a new instance.
     * @param {string} type The type of log entry.
     * @param {any} [data] The data associated with the log entry.
     */
    constructor(type: string, data?: any);
    /**
     * The time at which the log entry was created.
     * @type {number}
     */
    timestamp: number;
    methodName: string;
    data: any;
    #private;
}
/**
 * A class representing a file system utility library.
 * @implements {HfsImpl}
 */
export class Hfs implements HfsImpl {
    /**
     * Creates a new instance.
     * @param {object} options The options for the instance.
     * @param {HfsImpl} options.impl The implementation to use.
     */
    constructor({ impl }: {
        impl: HfsImpl;
    });
    /**
     * Starts a new log with the given name.
     * @param {string} name The name of the log to start;
     * @returns {void}
     * @throws {Error} When the log already exists.
     * @throws {TypeError} When the name is not a non-empty string.
     */
    logStart(name: string): void;
    /**
     * Ends a log with the given name and returns the entries.
     * @param {string} name The name of the log to end.
     * @returns {Array<LogEntry>} The entries in the log.
     * @throws {Error} When the log does not exist.
     */
    logEnd(name: string): Array<LogEntry>;
    /**
     * Determines if the current implementation is the base implementation.
     * @returns {boolean} True if the current implementation is the base implementation.
     */
    isBaseImpl(): boolean;
    /**
     * Sets the implementation for this instance.
     * @param {object} impl The implementation to use.
     * @returns {void}
     */
    setImpl(impl: object): void;
    /**
     * Resets the implementation for this instance back to its original.
     * @returns {void}
     */
    resetImpl(): void;
    /**
     * Reads the given file and returns the contents as text. Assumes UTF-8 encoding.
     * @param {string} filePath The file to read.
     * @returns {Promise<string|undefined>} The contents of the file.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    text(filePath: string): Promise<string | undefined>;
    /**
     * Reads the given file and returns the contents as JSON. Assumes UTF-8 encoding.
     * @param {string} filePath The file to read.
     * @returns {Promise<any|undefined>} The contents of the file as JSON.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {SyntaxError} When the file contents are not valid JSON.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    json(filePath: string): Promise<any | undefined>;
    /**
     * Reads the given file and returns the contents as an ArrayBuffer.
     * @param {string} filePath The file to read.
     * @returns {Promise<ArrayBuffer|undefined>} The contents of the file as an ArrayBuffer.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     * @deprecated Use bytes() instead.
     */
    arrayBuffer(filePath: string): Promise<ArrayBuffer | undefined>;
    /**
     * Reads the given file and returns the contents as an Uint8Array.
     * @param {string} filePath The file to read.
     * @returns {Promise<Uint8Array|undefined>} The contents of the file as an Uint8Array.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    bytes(filePath: string): Promise<Uint8Array | undefined>;
    /**
     * Writes the given data to the given file. Creates any necessary directories along the way.
     * If the data is a string, UTF-8 encoding is used.
     * @param {string} filePath The file to write.
     * @param {any} contents The data to write.
     * @returns {Promise<void>} A promise that resolves when the file is written.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    write(filePath: string, contents: any): Promise<void>;
    /**
     * Determines if the given file exists.
     * @param {string} filePath The file to check.
     * @returns {Promise<boolean>} True if the file exists.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    isFile(filePath: string): Promise<boolean>;
    /**
     * Determines if the given directory exists.
     * @param {string} dirPath The directory to check.
     * @returns {Promise<boolean>} True if the directory exists.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the directory path is not a non-empty string.
     */
    isDirectory(dirPath: string): Promise<boolean>;
    /**
     * Creates the given directory.
     * @param {string} dirPath The directory to create.
     * @returns {Promise<void>} A promise that resolves when the directory is created.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the directory path is not a non-empty string.
     */
    createDirectory(dirPath: string): Promise<void>;
    /**
     * Deletes the given file.
     * @param {string} filePath The file to delete.
     * @returns {Promise<void>} A promise that resolves when the file is deleted.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    delete(filePath: string): Promise<void>;
    /**
     * Deletes the given directory.
     * @param {string} dirPath The directory to delete.
     * @returns {Promise<void>} A promise that resolves when the directory is deleted.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the directory path is not a non-empty string.
     */
    deleteAll(dirPath: string): Promise<void>;
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
     * Returns the size of the given file.
     * @param {string} filePath The path to the file to read.
     * @returns {Promise<number>} A promise that resolves with the size of the file.
     * @throws {TypeError} If the file path is not a string.
     * @throws {Error} If the file cannot be read.
     */
    size(filePath: string): Promise<number>;
    #private;
}
export type HfsImpl = import("@humanfs/types").HfsImpl;
export type HfsDirectoryEntry = import("@humanfs/types").HfsDirectoryEntry;
