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
 * Error to represent when a method is not supported on an impl. This happens
 * when a method on `Hfs` is called with one name and the corresponding method
 * on the impl has a different name. (Example: `text()` and `bytes()`.)
 */
export class MethodNotSupportedError extends Error {
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
     * The type of log entry.
     * @type {string}
     */
    type: string;
    /**
     * The data associated with the log entry.
     * @type {any}
     */
    data: any;
    /**
     * The time at which the log entry was created.
     * @type {number}
     */
    timestamp: number;
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
     * @param {string|URL} filePath The file to read.
     * @returns {Promise<string|undefined>} The contents of the file.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    text(filePath: string | URL): Promise<string | undefined>;
    /**
     * Reads the given file and returns the contents as JSON. Assumes UTF-8 encoding.
     * @param {string|URL} filePath The file to read.
     * @returns {Promise<any|undefined>} The contents of the file as JSON.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {SyntaxError} When the file contents are not valid JSON.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    json(filePath: string | URL): Promise<any | undefined>;
    /**
     * Reads the given file and returns the contents as an ArrayBuffer.
     * @param {string|URL} filePath The file to read.
     * @returns {Promise<ArrayBuffer|undefined>} The contents of the file as an ArrayBuffer.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     * @deprecated Use bytes() instead.
     */
    arrayBuffer(filePath: string | URL): Promise<ArrayBuffer | undefined>;
    /**
     * Reads the given file and returns the contents as an Uint8Array.
     * @param {string|URL} filePath The file to read.
     * @returns {Promise<Uint8Array|undefined>} The contents of the file as an Uint8Array.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    bytes(filePath: string | URL): Promise<Uint8Array | undefined>;
    /**
     * Writes the given data to the given file. Creates any necessary directories along the way.
     * If the data is a string, UTF-8 encoding is used.
     * @param {string|URL} filePath The file to write.
     * @param {string|ArrayBuffer|ArrayBufferView} contents The data to write.
     * @returns {Promise<void>} A promise that resolves when the file is written.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    write(filePath: string | URL, contents: string | ArrayBuffer | ArrayBufferView): Promise<void>;
    /**
     * Appends the given data to the given file. Creates any necessary directories along the way.
     * If the data is a string, UTF-8 encoding is used.
     * @param {string|URL} filePath The file to append to.
     * @param {string|ArrayBuffer|ArrayBufferView} contents The data to append.
     * @returns {Promise<void>} A promise that resolves when the file is appended to.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     * @throws {TypeError} When the file contents are not a string or ArrayBuffer.
     * @throws {Error} When the file cannot be appended to.
     */
    append(filePath: string | URL, contents: string | ArrayBuffer | ArrayBufferView): Promise<void>;
    /**
     * Determines if the given file exists.
     * @param {string|URL} filePath The file to check.
     * @returns {Promise<boolean>} True if the file exists.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    isFile(filePath: string | URL): Promise<boolean>;
    /**
     * Determines if the given directory exists.
     * @param {string|URL} dirPath The directory to check.
     * @returns {Promise<boolean>} True if the directory exists.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the directory path is not a non-empty string.
     */
    isDirectory(dirPath: string | URL): Promise<boolean>;
    /**
     * Creates the given directory.
     * @param {string|URL} dirPath The directory to create.
     * @returns {Promise<void>} A promise that resolves when the directory is created.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the directory path is not a non-empty string.
     */
    createDirectory(dirPath: string | URL): Promise<void>;
    /**
     * Deletes the given file or empty directory.
     * @param {string|URL} filePath The file to delete.
     * @returns {Promise<boolean>} A promise that resolves when the file or
     *   directory is deleted, true if the file or directory is deleted, false
     *   if the file or directory does not exist.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the file path is not a non-empty string.
     */
    delete(filePath: string | URL): Promise<boolean>;
    /**
     * Deletes the given file or directory recursively.
     * @param {string|URL} dirPath The directory to delete.
     * @returns {Promise<boolean>} A promise that resolves when the file or
     *   directory is deleted, true if the file or directory is deleted, false
     *   if the file or directory does not exist.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     * @throws {TypeError} When the directory path is not a non-empty string.
     */
    deleteAll(dirPath: string | URL): Promise<boolean>;
    /**
     * Returns a list of directory entries for the given path.
     * @param {string|URL} dirPath The path to the directory to read.
     * @returns {AsyncIterable<HfsDirectoryEntry>} A promise that resolves with the
     *   directory entries.
     * @throws {TypeError} If the directory path is not a string or URL.
     * @throws {Error} If the directory cannot be read.
     */
    list(dirPath: string | URL): AsyncIterable<HfsDirectoryEntry>;
    /**
     * Walks a directory using a depth-first traversal and returns the entries
     * from the traversal.
     * @param {string|URL} dirPath The path to the directory to walk.
     * @param {Object} [options] The options for the walk.
     * @param {(entry:HfsWalkEntry) => Promise<boolean>|boolean} [options.directoryFilter] A filter function to determine
     * 	if a directory's entries should be included in the walk.
     * @param {(entry:HfsWalkEntry) => Promise<boolean>|boolean} [options.entryFilter] A filter function to determine if
     * 	an entry should be included in the walk.
     * @returns {AsyncIterable<HfsWalkEntry>} A promise that resolves with the
     * 	directory entries.
     * @throws {TypeError} If the directory path is not a string or URL.
     * @throws {Error} If the directory cannot be read.
     */
    walk(dirPath: string | URL, { directoryFilter, entryFilter }?: {
        directoryFilter?: (entry: HfsWalkEntry) => Promise<boolean> | boolean;
        entryFilter?: (entry: HfsWalkEntry) => Promise<boolean> | boolean;
    }): AsyncIterable<HfsWalkEntry>;
    /**
     * Returns the size of the given file.
     * @param {string|URL} filePath The path to the file to read.
     * @returns {Promise<number>} A promise that resolves with the size of the file.
     * @throws {TypeError} If the file path is not a string or URL.
     * @throws {Error} If the file cannot be read.
     */
    size(filePath: string | URL): Promise<number>;
    /**
     * Returns the last modified timestamp of the given file or directory.
     * @param {string|URL} fileOrDirPath The path to the file or directory.
     * @returns {Promise<Date|undefined>} A promise that resolves with the last modified date
     *  or undefined if the file or directory does not exist.
     * @throws {TypeError} If the path is not a string or URL.
     */
    lastModified(fileOrDirPath: string | URL): Promise<Date | undefined>;
    /**
     * Copys a file from one location to another.
     * @param {string|URL} source The path to the file to copy.
     * @param {string|URL} destination The path to the new file.
     * @returns {Promise<void>} A promise that resolves when the file is copied.
     * @throws {TypeError} If the file path is not a string or URL.
     * @throws {Error} If the file cannot be copied.
     */
    copy(source: string | URL, destination: string | URL): Promise<void>;
    /**
     * Copies a file or directory from one location to another.
     * @param {string|URL} source The path to the file or directory to copy.
     * @param {string|URL} destination The path to copy the file or directory to.
     * @returns {Promise<void>} A promise that resolves when the file or directory is
     * copied.
     * @throws {TypeError} If the directory path is not a string or URL.
     * @throws {Error} If the directory cannot be copied.
     */
    copyAll(source: string | URL, destination: string | URL): Promise<void>;
    /**
     * Moves a file from the source path to the destination path.
     * @param {string|URL} source The location of the file to move.
     * @param {string|URL} destination The destination of the file to move.
     * @returns {Promise<void>} A promise that resolves when the move is complete.
     * @throws {TypeError} If the file or directory paths are not strings.
     * @throws {Error} If the file or directory cannot be moved.
     */
    move(source: string | URL, destination: string | URL): Promise<void>;
    /**
     * Moves a file or directory from one location to another.
     * @param {string|URL} source The path to the file or directory to move.
     * @param {string|URL} destination The path to move the file or directory to.
     * @returns {Promise<void>} A promise that resolves when the file or directory is
     * moved.
     * @throws {TypeError} If the source is not a string or URL.
     * @throws {TypeError} If the destination is not a string or URL.
     * @throws {Error} If the file or directory cannot be moved.
     */
    moveAll(source: string | URL, destination: string | URL): Promise<void>;
    #private;
}
export type HfsImpl = import("@humanfs/types").HfsImpl;
export type HfsDirectoryEntry = import("@humanfs/types").HfsDirectoryEntry;
export type HfsWalkEntry = import("@humanfs/types").HfsWalkEntry;
