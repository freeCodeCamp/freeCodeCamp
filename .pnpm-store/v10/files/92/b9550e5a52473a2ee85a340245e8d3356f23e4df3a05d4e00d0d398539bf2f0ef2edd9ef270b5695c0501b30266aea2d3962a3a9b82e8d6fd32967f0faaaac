import { Buffer } from 'node:buffer';
import { FlatCacheOptions, FlatCache } from 'flat-cache';

type ILogger = {
    /** Current log level */
    level?: string;
    /** Trace level logging */
    trace: (message: string | object, ...args: unknown[]) => void;
    /** Debug level logging */
    debug: (message: string | object, ...args: unknown[]) => void;
    /** Info level logging */
    info: (message: string | object, ...args: unknown[]) => void;
    /** Warning level logging */
    warn: (message: string | object, ...args: unknown[]) => void;
    /** Error level logging */
    error: (message: string | object, ...args: unknown[]) => void;
    /** Fatal level logging */
    fatal: (message: string | object, ...args: unknown[]) => void;
};
type FileEntryCacheOptions = {
    /** Whether to use file modified time for change detection (default: true) */
    useModifiedTime?: boolean;
    /** Whether to use checksum for change detection (default: false) */
    useCheckSum?: boolean;
    /** Hash algorithm to use for checksum (default: 'md5') */
    hashAlgorithm?: string;
    /** Current working directory for resolving relative paths (default: process.cwd()) */
    cwd?: string;
    /** Restrict file access to within cwd boundaries (default: true) */
    restrictAccessToCwd?: boolean;
    /** Whether to use absolute path as cache key (default: false) */
    useAbsolutePathAsKey?: boolean;
    /** Logger instance for logging (default: undefined) */
    logger?: ILogger;
    /** Options for the underlying flat cache */
    cache?: FlatCacheOptions;
};
type GetFileDescriptorOptions = {
    /** Whether to use checksum for this specific file check instead of modified time (mtime) (overrides instance setting) */
    useCheckSum?: boolean;
    /** Whether to use file modified time for change detection (default: true) */
    useModifiedTime?: boolean;
};
type FileDescriptor = {
    /** The cache key for this file (typically the file path) */
    key: string;
    /** Whether the file has changed since last cache check */
    changed?: boolean;
    /** Metadata about the file */
    meta: FileDescriptorMeta;
    /** Whether the file was not found */
    notFound?: boolean;
    /** Error encountered when accessing the file */
    err?: Error;
};
type FileDescriptorMeta = {
    /** File size in bytes */
    size?: number;
    /** File modification time (timestamp in milliseconds) */
    mtime?: number;
    /** File content hash (when useCheckSum is enabled) */
    hash?: string;
    /** Custom data associated with the file (e.g., lint results, metadata) */
    data?: unknown;
    /** Allow any additional custom properties */
    [key: string]: unknown;
};
type AnalyzedFiles = {
    /** Array of file paths that have changed since last cache */
    changedFiles: string[];
    /** Array of file paths that were not found */
    notFoundFiles: string[];
    /** Array of file paths that have not changed since last cache */
    notChangedFiles: string[];
};
/**
 * Create a new FileEntryCache instance from a file path
 * @param filePath - The path to the cache file
 * @param options - create options such as useChecksum, cwd, and more
 * @returns A new FileEntryCache instance
 */
declare function createFromFile(filePath: string, options?: CreateOptions): FileEntryCache;
type CreateOptions = Omit<FileEntryCacheOptions, "cache">;
/**
 * Create a new FileEntryCache instance
 * @param cacheId - The cache file name
 * @param cacheDirectory - The directory to store the cache file (default: undefined, cache won't be persisted)
 * @param options - Whether to use checksum to detect file changes (default: false)
 * @returns A new FileEntryCache instance
 */
declare function create(cacheId: string, cacheDirectory?: string, options?: CreateOptions): FileEntryCache;
declare class FileEntryDefault {
    static create: typeof create;
    static createFromFile: typeof createFromFile;
}
declare class FileEntryCache {
    private _cache;
    private _useCheckSum;
    private _hashAlgorithm;
    private _cwd;
    private _restrictAccessToCwd;
    private _logger?;
    private _useAbsolutePathAsKey;
    private _useModifiedTime;
    /**
     * Create a new FileEntryCache instance
     * @param options - The options for the FileEntryCache (all properties are optional with defaults)
     */
    constructor(options?: FileEntryCacheOptions);
    /**
     * Get the cache
     * @returns {FlatCache} The cache
     */
    get cache(): FlatCache;
    /**
     * Set the cache
     * @param {FlatCache} cache - The cache to set
     */
    set cache(cache: FlatCache);
    /**
     * Get the logger
     * @returns {ILogger | undefined} The logger instance
     */
    get logger(): ILogger | undefined;
    /**
     * Set the logger
     * @param {ILogger | undefined} logger - The logger to set
     */
    set logger(logger: ILogger | undefined);
    /**
     * Use the hash to check if the file has changed
     * @returns {boolean} if the hash is used to check if the file has changed (default: false)
     */
    get useCheckSum(): boolean;
    /**
     * Set the useCheckSum value
     * @param {boolean} value - The value to set
     */
    set useCheckSum(value: boolean);
    /**
     * Get the hash algorithm
     * @returns {string} The hash algorithm (default: 'md5')
     */
    get hashAlgorithm(): string;
    /**
     * Set the hash algorithm
     * @param {string} value - The value to set
     */
    set hashAlgorithm(value: string);
    /**
     * Get the current working directory
     * @returns {string} The current working directory (default: process.cwd())
     */
    get cwd(): string;
    /**
     * Set the current working directory
     * @param {string} value - The value to set
     */
    set cwd(value: string);
    /**
     * Get whether to use modified time for change detection
     * @returns {boolean} Whether modified time (mtime) is used for change detection (default: true)
     */
    get useModifiedTime(): boolean;
    /**
     * Set whether to use modified time for change detection
     * @param {boolean} value - The value to set
     */
    set useModifiedTime(value: boolean);
    /**
     * Get whether to restrict paths to cwd boundaries
     * @returns {boolean} Whether strict path checking is enabled (default: true)
     */
    get restrictAccessToCwd(): boolean;
    /**
     * Set whether to restrict paths to cwd boundaries
     * @param {boolean} value - The value to set
     */
    set restrictAccessToCwd(value: boolean);
    /**
     * Get whether to use absolute path as cache key
     * @returns {boolean} Whether cache keys use absolute paths (default: false)
     */
    get useAbsolutePathAsKey(): boolean;
    /**
     * Set whether to use absolute path as cache key
     * @param {boolean} value - The value to set
     */
    set useAbsolutePathAsKey(value: boolean);
    /**
     * Given a buffer, calculate md5 hash of its content.
     * @method getHash
     * @param  {Buffer} buffer   buffer to calculate hash on
     * @return {String}          content hash digest
     */
    getHash(buffer: Buffer): string;
    /**
     * Create the key for the file path used for caching.
     * @method createFileKey
     * @param {String} filePath
     * @return {String}
     */
    createFileKey(filePath: string): string;
    /**
     * Check if the file path is a relative path
     * @method isRelativePath
     * @param filePath - The file path to check
     * @returns {boolean} if the file path is a relative path, false otherwise
     */
    isRelativePath(filePath: string): boolean;
    /**
     * Delete the cache file from the disk
     * @method deleteCacheFile
     * @return {boolean}       true if the file was deleted, false otherwise
     */
    deleteCacheFile(): boolean;
    /**
     * Remove the cache from the file and clear the memory cache
     * @method destroy
     */
    destroy(): void;
    /**
     * Remove and Entry From the Cache
     * @method removeEntry
     * @param filePath - The file path to remove from the cache
     */
    removeEntry(filePath: string): void;
    /**
     * Reconcile the cache
     * @method reconcile
     */
    reconcile(): void;
    /**
     * Check if the file has changed
     * @method hasFileChanged
     * @param filePath - The file path to check
     * @returns {boolean} if the file has changed, false otherwise
     */
    hasFileChanged(filePath: string): boolean;
    /**
     * Get the file descriptor for the file path
     * @method getFileDescriptor
     * @param filePath - The file path to get the file descriptor for
     * @param options - The options for getting the file descriptor
     * @returns The file descriptor
     */
    getFileDescriptor(filePath: string, options?: GetFileDescriptorOptions): FileDescriptor;
    /**
     * Get the file descriptors for the files
     * @method normalizeEntries
     * @param files?: string[] - The files to get the file descriptors for
     * @returns The file descriptors
     */
    normalizeEntries(files?: string[]): FileDescriptor[];
    /**
     * Analyze the files
     * @method analyzeFiles
     * @param files - The files to analyze
     * @returns {AnalyzedFiles} The analysis of the files
     */
    analyzeFiles(files: string[]): AnalyzedFiles;
    /**
     * Get the updated files
     * @method getUpdatedFiles
     * @param files - The files to get the updated files for
     * @returns {string[]} The updated files
     */
    getUpdatedFiles(files: string[]): string[];
    /**
     * Get the file descriptors by path prefix
     * @method getFileDescriptorsByPath
     * @param filePath - the path prefix to match
     * @returns {FileDescriptor[]} The file descriptors
     */
    getFileDescriptorsByPath(filePath: string): FileDescriptor[];
    /**
     * Get the Absolute Path. If it is already absolute it will return the path as is.
     * When restrictAccessToCwd is enabled, ensures the resolved path stays within cwd boundaries.
     * @method getAbsolutePath
     * @param filePath - The file path to get the absolute path for
     * @returns {string}
     * @throws {Error} When restrictAccessToCwd is true and path would resolve outside cwd
     */
    getAbsolutePath(filePath: string): string;
    /**
     * Get the Absolute Path with a custom working directory. If it is already absolute it will return the path as is.
     * When restrictAccessToCwd is enabled, ensures the resolved path stays within the provided cwd boundaries.
     * @method getAbsolutePathWithCwd
     * @param filePath - The file path to get the absolute path for
     * @param cwd - The custom working directory to resolve relative paths from
     * @returns {string}
     * @throws {Error} When restrictAccessToCwd is true and path would resolve outside the provided cwd
     */
    getAbsolutePathWithCwd(filePath: string, cwd: string): string;
    /**
     * Rename cache keys that start with a given path prefix.
     * @method renameCacheKeys
     * @param oldPath - The old path prefix to rename
     * @param newPath - The new path prefix to rename to
     */
    renameCacheKeys(oldPath: string, newPath: string): void;
}

export { type AnalyzedFiles, type CreateOptions, type FileDescriptor, type FileDescriptorMeta, FileEntryCache, type FileEntryCacheOptions, type GetFileDescriptorOptions, type ILogger, create, createFromFile, FileEntryDefault as default };
