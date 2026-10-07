import { CacheableMemory } from 'cacheable';
import { Hookified } from 'hookified';

type FlatCacheOptions = {
    ttl?: number | string;
    useClone?: boolean;
    lruSize?: number;
    expirationInterval?: number;
    persistInterval?: number;
    cacheDir?: string;
    cacheId?: string;
    deserialize?: (data: string) => any;
    serialize?: (data: any) => string;
};
declare enum FlatCacheEvents {
    SAVE = "save",
    LOAD = "load",
    DELETE = "delete",
    CLEAR = "clear",
    DESTROY = "destroy",
    ERROR = "error",
    EXPIRED = "expired"
}
declare class FlatCache extends Hookified {
    private readonly _cache;
    private _cacheDir;
    private _cacheId;
    private _persistInterval;
    private _persistTimer;
    private _changesSinceLastSave;
    private readonly _parse;
    private readonly _stringify;
    constructor(options?: FlatCacheOptions);
    /**
     * The cache object
     * @property cache
     * @type {CacheableMemory}
     */
    get cache(): CacheableMemory;
    /**
     * The cache directory
     * @property cacheDir
     * @type {String}
     * @default '.cache'
     */
    get cacheDir(): string;
    /**
     * Set the cache directory
     * @property cacheDir
     * @type {String}
     * @default '.cache'
     */
    set cacheDir(value: string);
    /**
     * The cache id
     * @property cacheId
     * @type {String}
     * @default 'cache1'
     */
    get cacheId(): string;
    /**
     * Set the cache id
     * @property cacheId
     * @type {String}
     * @default 'cache1'
     */
    set cacheId(value: string);
    /**
     * The flag to indicate if there are changes since the last save
     * @property changesSinceLastSave
     * @type {Boolean}
     * @default false
     */
    get changesSinceLastSave(): boolean;
    /**
     * The interval to persist the cache to disk. 0 means no timed persistence
     * @property persistInterval
     * @type {Number}
     * @default 0
     */
    get persistInterval(): number;
    /**
     * Set the interval to persist the cache to disk. 0 means no timed persistence
     * @property persistInterval
     * @type {Number}
     * @default 0
     */
    set persistInterval(value: number);
    /**
     * Load a cache identified by the given Id. If the element does not exists, then initialize an empty
     * cache storage. If specified `cacheDir` will be used as the directory to persist the data to. If omitted
     * then the cache module directory `.cacheDir` will be used instead
     *
     * @method load
     * @param cacheId {String} the id of the cache, would also be used as the name of the file cache
     * @param cacheDir {String} directory for the cache entry
     */
    load(cacheId?: string, cacheDir?: string): void;
    /**
     * Load the cache from the provided file
     * @method loadFile
     * @param  {String} pathToFile the path to the file containing the info for the cache
     */
    loadFile(pathToFile: string): void;
    loadFileStream(pathToFile: string, onProgress: (progress: number, total: number) => void, onEnd: () => void, onError?: (error: Error) => void): void;
    /**
     * Returns the entire persisted object
     * @method all
     * @returns {*}
     */
    all(): Record<string, any>;
    /**
     * Returns an array with all the items in the cache { key, value, expires }
     * @method items
     * @returns {Array}
     */
    get items(): Array<{
        key: string;
        value: any;
        expires?: number;
    }>;
    /**
     * Returns the path to the file where the cache is persisted
     * @method cacheFilePath
     * @returns {String}
     */
    get cacheFilePath(): string;
    /**
     * Returns the path to the cache directory
     * @method cacheDirPath
     * @returns {String}
     */
    get cacheDirPath(): string;
    /**
     * Returns an array with all the keys in the cache
     * @method keys
     * @returns {Array}
     */
    keys(): string[];
    /**
     * (Legacy) set key method. This method will be deprecated in the future
     * @method setKey
     * @param key {string} the key to set
     * @param value {object} the value of the key. Could be any object that can be serialized with JSON.stringify
     */
    setKey(key: string, value: any, ttl?: number | string): void;
    /**
     * Sets a key to a given value
     * @method set
     * @param key {string} the key to set
     * @param value {object} the value of the key. Could be any object that can be serialized with JSON.stringify
     * @param [ttl] {number} the time to live in milliseconds
     */
    set(key: string, value: any, ttl?: number | string): void;
    /**
     * (Legacy) Remove a given key from the cache. This method will be deprecated in the future
     * @method removeKey
     * @param key {String} the key to remove from the object
     */
    removeKey(key: string): void;
    /**
     * Remove a given key from the cache
     * @method delete
     * @param key {String} the key to remove from the object
     */
    delete(key: string): void;
    /**
     * (Legacy) Return the value of the provided key. This method will be deprecated in the future
     * @method getKey<T>
     * @param key {String} the name of the key to retrieve
     * @returns {*} at T the value from the key
     */
    getKey<T>(key: string): T;
    /**
     * Return the value of the provided key
     * @method get<T>
     * @param key {String} the name of the key to retrieve
     * @returns {*} at T the value from the key
     */
    get<T>(key: string): T;
    /**
     * Clear the cache and save the state to disk
     * @method clear
     */
    clear(): void;
    /**
     * Save the state of the cache identified by the docId to disk
     * as a JSON structure
     * @method save
     */
    save(force?: boolean): void;
    /**
     * Remove the file where the cache is persisted
     * @method removeCacheFile
     * @return {Boolean} true or false if the file was successfully deleted
     */
    removeCacheFile(): boolean;
    /**
     * Destroy the cache. This will remove the directory, file, and memory cache
     * @method destroy
     * @param [includeCacheDir=false] {Boolean} if true, the cache directory will be removed
     * @return {undefined}
     */
    destroy(includeCacheDirectory?: boolean): void;
    /**
     * Start the auto persist interval
     * @method startAutoPersist
     */
    startAutoPersist(): void;
    /**
     * Stop the auto persist interval
     * @method stopAutoPersist
     */
    stopAutoPersist(): void;
}
declare class FlatCacheDefault {
    static create: typeof create;
    static createFromFile: typeof createFromFile;
    static clearCacheById: typeof clearCacheById;
    static clearAll: typeof clearAll;
}
/**
 * Load a cache identified by the given Id. If the element does not exists, then initialize an empty
 * cache storage.
 *
 * @method create
 * @param docId {String} the id of the cache, would also be used as the name of the file cache
 * @param cacheDirectory {String} directory for the cache entry
 * @param options {FlatCacheOptions} options for the cache
 * @returns {cache} cache instance
 */
declare function create(options?: FlatCacheOptions): FlatCache;
/**
 * Load a cache from the provided file
 * @method createFromFile
 * @param  {String} filePath the path to the file containing the info for the cache
 * @param options {FlatCacheOptions} options for the cache
 * @returns {cache} cache instance
 */
declare function createFromFile(filePath: string, options?: FlatCacheOptions): FlatCache;
/**
 * Clear the cache identified by the given Id. This will only remove the cache from disk.
 * @method clearCacheById
 * @param cacheId {String} the id of the cache
 * @param cacheDirectory {String} directory for the cache entry
 */
declare function clearCacheById(cacheId: string, cacheDirectory?: string): void;
/**
 * Clear the cache directory
 * @method clearAll
 * @param cacheDir {String} directory for the cache entry
 */
declare function clearAll(cacheDirectory?: string): void;

export { FlatCache, FlatCacheEvents, type FlatCacheOptions, clearAll, clearCacheById, create, createFromFile, FlatCacheDefault as default };
