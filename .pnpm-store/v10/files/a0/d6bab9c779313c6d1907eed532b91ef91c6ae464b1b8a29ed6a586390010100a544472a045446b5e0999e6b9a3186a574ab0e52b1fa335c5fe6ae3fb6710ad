import { HashAlgorithm, CacheableStoreItem, CacheableItem, WrapFunctionOptions } from '@cacheable/utils';
export { CacheableItem, CacheableStoreItem, HashAlgorithm, hash, hashToNumber } from '@cacheable/utils';
import { Hookified } from 'hookified';
import { KeyvStoreAdapter, StoredData, Keyv } from 'keyv';

type KeyvCacheableMemoryOptions = CacheableMemoryOptions & {
    namespace?: string;
};
declare class KeyvCacheableMemory implements KeyvStoreAdapter {
    opts: CacheableMemoryOptions;
    private readonly _defaultCache;
    private readonly _nCache;
    private _namespace?;
    constructor(options?: KeyvCacheableMemoryOptions);
    get namespace(): string | undefined;
    set namespace(value: string | undefined);
    get store(): CacheableMemory;
    get<Value>(key: string): Promise<StoredData<Value> | undefined>;
    getMany<Value>(keys: string[]): Promise<Array<StoredData<Value | undefined>>>;
    set(key: string, value: any, ttl?: number): Promise<void>;
    setMany(values: Array<{
        key: string;
        value: any;
        ttl?: number;
    }>): Promise<void>;
    delete(key: string): Promise<boolean>;
    deleteMany?(key: string[]): Promise<boolean>;
    clear(): Promise<void>;
    has?(key: string): Promise<boolean>;
    on(event: string, listener: (...arguments_: any[]) => void): this;
    getStore(namespace?: string): CacheableMemory;
}
/**
 * Creates a new Keyv instance with a new KeyvCacheableMemory store. This also removes the serialize/deserialize methods from the Keyv instance for optimization.
 * @param options
 * @returns
 */
declare function createKeyv(options?: KeyvCacheableMemoryOptions): Keyv;

type StoreHashAlgorithmFunction = (key: string, storeHashSize: number) => number;
/**
 * @typedef {Object} CacheableMemoryOptions
 * @property {number|string} [ttl] - Time to Live - If you set a number it is miliseconds, if you set a string it is a human-readable
 * format such as `1s` for 1 second or `1h` for 1 hour. Setting undefined means that it will use the default time-to-live. If both are
 * undefined then it will not have a time-to-live.
 * @property {boolean} [useClone] - If true, it will clone the value before returning it. If false, it will return the value directly. Default is true.
 * @property {number} [lruSize] - The size of the LRU cache. If set to 0, it will not use LRU cache. Default is 0. If you are using LRU then the limit is based on Map() size 17mm.
 * @property {number} [checkInterval] - The interval to check for expired items. If set to 0, it will not check for expired items. Default is 0.
 * @property {number} [storeHashSize] - The number of how many Map stores we have for the hash. Default is 10.
 */
type CacheableMemoryOptions = {
    ttl?: number | string;
    useClone?: boolean;
    lruSize?: number;
    checkInterval?: number;
    storeHashSize?: number;
    storeHashAlgorithm?: HashAlgorithm | ((key: string, storeHashSize: number) => number);
};
type SetOptions = {
    ttl?: number | string;
    expire?: number | Date;
};
declare const defaultStoreHashSize = 16;
declare const maximumMapSize = 16777216;
declare class CacheableMemory extends Hookified {
    private _lru;
    private _storeHashSize;
    private _storeHashAlgorithm;
    private _store;
    private _ttl;
    private _useClone;
    private _lruSize;
    private _checkInterval;
    private _interval;
    /**
     * @constructor
     * @param {CacheableMemoryOptions} [options] - The options for the CacheableMemory
     */
    constructor(options?: CacheableMemoryOptions);
    /**
     * Gets the time-to-live
     * @returns {number|string|undefined} - The time-to-live in miliseconds or a human-readable format. If undefined, it will not have a time-to-live.
     */
    get ttl(): number | string | undefined;
    /**
     * Sets the time-to-live
     * @param {number|string|undefined} value - The time-to-live in miliseconds or a human-readable format (example '1s' = 1 second, '1h' = 1 hour). If undefined, it will not have a time-to-live.
     */
    set ttl(value: number | string | undefined);
    /**
     * Gets whether to use clone
     * @returns {boolean} - If true, it will clone the value before returning it. If false, it will return the value directly. Default is true.
     */
    get useClone(): boolean;
    /**
     * Sets whether to use clone
     * @param {boolean} value - If true, it will clone the value before returning it. If false, it will return the value directly. Default is true.
     */
    set useClone(value: boolean);
    /**
     * Gets the size of the LRU cache
     * @returns {number} - The size of the LRU cache. If set to 0, it will not use LRU cache. Default is 0. If you are using LRU then the limit is based on Map() size 17mm.
     */
    get lruSize(): number;
    /**
     * Sets the size of the LRU cache
     * @param {number} value - The size of the LRU cache. If set to 0, it will not use LRU cache. Default is 0. If you are using LRU then the limit is based on Map() size 17mm.
     */
    set lruSize(value: number);
    /**
     * Gets the check interval
     * @returns {number} - The interval to check for expired items. If set to 0, it will not check for expired items. Default is 0.
     */
    get checkInterval(): number;
    /**
     * Sets the check interval
     * @param {number} value - The interval to check for expired items. If set to 0, it will not check for expired items. Default is 0.
     */
    set checkInterval(value: number);
    /**
     * Gets the size of the cache
     * @returns {number} - The size of the cache
     */
    get size(): number;
    /**
     * Gets the number of hash stores
     * @returns {number} - The number of hash stores
     */
    get storeHashSize(): number;
    /**
     * Sets the number of hash stores. This will recreate the store and all data will be cleared
     * @param {number} value - The number of hash stores
     */
    set storeHashSize(value: number);
    /**
     * Gets the store hash algorithm
     * @returns {HashAlgorithm | StoreHashAlgorithmFunction} - The store hash algorithm
     */
    get storeHashAlgorithm(): HashAlgorithm | StoreHashAlgorithmFunction;
    /**
     * Sets the store hash algorithm. This will recreate the store and all data will be cleared
     * @param {HashAlgorithm | HashAlgorithmFunction} value - The store hash algorithm
     */
    set storeHashAlgorithm(value: HashAlgorithm | StoreHashAlgorithmFunction);
    /**
     * Gets the keys
     * @returns {IterableIterator<string>} - The keys
     */
    get keys(): IterableIterator<string>;
    /**
     * Gets the items
     * @returns {IterableIterator<CacheableStoreItem>} - The items
     */
    get items(): IterableIterator<CacheableStoreItem>;
    /**
     * Gets the store
     * @returns {Array<Map<string, CacheableStoreItem>>} - The store
     */
    get store(): Array<Map<string, CacheableStoreItem>>;
    /**
     * Gets the value of the key
     * @param {string} key - The key to get the value
     * @returns {T | undefined} - The value of the key
     */
    get<T>(key: string): T | undefined;
    /**
     * Gets the values of the keys
     * @param {string[]} keys - The keys to get the values
     * @returns {T[]} - The values of the keys
     */
    getMany<T>(keys: string[]): T[];
    /**
     * Gets the raw value of the key
     * @param {string} key - The key to get the value
     * @returns {CacheableStoreItem | undefined} - The raw value of the key
     */
    getRaw(key: string): CacheableStoreItem | undefined;
    /**
     * Gets the raw values of the keys
     * @param {string[]} keys - The keys to get the values
     * @returns {CacheableStoreItem[]} - The raw values of the keys
     */
    getManyRaw(keys: string[]): Array<CacheableStoreItem | undefined>;
    /**
     * Sets the value of the key
     * @param {string} key - The key to set the value
     * @param {any} value - The value to set
     * @param {number|string|SetOptions} [ttl] - Time to Live - If you set a number it is miliseconds, if you set a string it is a human-readable.
     * If you want to set expire directly you can do that by setting the expire property in the SetOptions.
     * If you set undefined, it will use the default time-to-live. If both are undefined then it will not have a time-to-live.
     * @returns {void}
     */
    set(key: string, value: any, ttl?: number | string | SetOptions): void;
    /**
     * Sets the values of the keys
     * @param {CacheableItem[]} items - The items to set
     * @returns {void}
     */
    setMany(items: CacheableItem[]): void;
    /**
     * Checks if the key exists
     * @param {string} key - The key to check
     * @returns {boolean} - If true, the key exists. If false, the key does not exist.
     */
    has(key: string): boolean;
    /**
     * @function hasMany
     * @param {string[]} keys - The keys to check
     * @returns {boolean[]} - If true, the key exists. If false, the key does not exist.
     */
    hasMany(keys: string[]): boolean[];
    /**
     * Take will get the key and delete the entry from cache
     * @param {string} key - The key to take
     * @returns {T | undefined} - The value of the key
     */
    take<T>(key: string): T | undefined;
    /**
     * TakeMany will get the keys and delete the entries from cache
     * @param {string[]} keys - The keys to take
     * @returns {T[]} - The values of the keys
     */
    takeMany<T>(keys: string[]): T[];
    /**
     * Delete the key
     * @param {string} key - The key to delete
     * @returns {void}
     */
    delete(key: string): void;
    /**
     * Delete the keys
     * @param {string[]} keys - The keys to delete
     * @returns {void}
     */
    deleteMany(keys: string[]): void;
    /**
     * Clear the cache
     * @returns {void}
     */
    clear(): void;
    /**
     * Get the store based on the key (internal use)
     * @param {string} key - The key to get the store
     * @returns {CacheableHashStore} - The store
     */
    getStore(key: string): Map<string, CacheableStoreItem>;
    /**
     * Hash the key for which store to go to (internal use)
     * @param {string} key - The key to hash
     * Available algorithms are: SHA256, SHA1, MD5, and djb2Hash.
     * @returns {number} - The hashed key as a number
     */
    getKeyStoreHash(key: string): number;
    /**
     * Clone the value. This is for internal use
     * @param {any} value - The value to clone
     * @returns {any} - The cloned value
     */
    clone(value: any): any;
    /**
     * Add to the front of the LRU cache. This is for internal use
     * @param {string} key - The key to add to the front
     * @returns {void}
     */
    lruAddToFront(key: string): void;
    /**
     * Move to the front of the LRU cache. This is for internal use
     * @param {string} key - The key to move to the front
     * @returns {void}
     */
    lruMoveToFront(key: string): void;
    /**
     * Remove a key from the LRU cache. This is for internal use
     * @param {string} key - The key to remove
     * @returns {void}
     */
    lruRemove(key: string): void;
    /**
     * Resize the LRU cache. This is for internal use.
     * @returns {void}
     */
    lruResize(): void;
    /**
     * Check for expiration. This is for internal use
     * @returns {void}
     */
    checkExpiration(): void;
    /**
     * Start the interval check. This is for internal use
     * @returns {void}
     */
    startIntervalCheck(): void;
    /**
     * Stop the interval check. This is for internal use
     * @returns {void}
     */
    stopIntervalCheck(): void;
    /**
     * Wrap the function for caching
     * @param {Function} function_ - The function to wrap
     * @param {Object} [options] - The options to wrap
     * @returns {Function} - The wrapped function
     */
    wrap<T, Arguments extends any[]>(function_: (...arguments_: Arguments) => T, options?: WrapFunctionOptions): (...arguments_: Arguments) => T;
    private isPrimitive;
    private setTtl;
    private hasExpired;
}

export { CacheableMemory, type CacheableMemoryOptions, KeyvCacheableMemory, type KeyvCacheableMemoryOptions, type SetOptions, type StoreHashAlgorithmFunction, createKeyv, defaultStoreHashSize, maximumMapSize };
