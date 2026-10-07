/**
 * Converts a shorthand time string or number into milliseconds.
 * The shorthand can be a string like '1s', '2m', '3h', '4d', or a number representing milliseconds.
 * If the input is undefined, it returns undefined.
 * If the input is a string that does not match the expected format, it throws an error.
 * @param shorthand - A shorthand time string or number representing milliseconds.
 * @returns The equivalent time in milliseconds or undefined.
 */
declare const shorthandToMilliseconds: (shorthand?: string | number) => number | undefined;
/**
 * Converts a shorthand time string or number into a timestamp.
 * If the shorthand is undefined, it returns the current date's timestamp.
 * If the shorthand is a valid time format, it adds that duration to the current date's timestamp.
 * @param shorthand - A shorthand time string or number representing milliseconds.
 * @param fromDate - An optional Date object to calculate from. Defaults to the current date if not provided.
 * @returns The timestamp in milliseconds since epoch.
 */
declare const shorthandToTime: (shorthand?: string | number, fromDate?: Date) => number;

/**
 * CacheableItem
 * @typedef {Object} CacheableItem
 * @property {string} key - The key of the cacheable item
 * @property {any} value - The value of the cacheable item
 * @property {number|string} [ttl] - Time to Live - If you set a number it is miliseconds, if you set a string it is a human-readable
 * format such as `1s` for 1 second or `1h` for 1 hour. Setting undefined means that it will use the default time-to-live. If both are
 * undefined then it will not have a time-to-live.
 */
type CacheableItem = {
    key: string;
    value: any;
    ttl?: number | string;
};
/**
 * CacheableStoreItem
 * @typedef {Object} CacheableStoreItem
 * @property {string} key - The key of the cacheable store item
 * @property {any} value - The value of the cacheable store item
 * @property {number} [expires] - The expiration time in milliseconds since epoch. If not set, the item does not expire.
 */
type CacheableStoreItem = {
    key: string;
    value: any;
    expires?: number;
};

/**
 * Enqueue a promise for the group identified by `key`.
 *
 * All requests received for the same key while a request for that key
 * is already being executed will wait. Once the running request settles
 * then all the waiting requests in the group will settle, too.
 * This minimizes how many times the function itself runs at the same time.
 * This function resolves or rejects according to the given function argument.
 *
 * @url https://github.com/douglascayers/promise-coalesce
 */
declare function coalesceAsync<T>(
/**
 * Any identifier to group requests together.
 */
key: string, 
/**
 * The function to run.
 */
fnc: () => T | PromiseLike<T>): Promise<T>;

declare enum HashAlgorithm {
    SHA256 = "SHA-256",
    SHA384 = "SHA-384",
    SHA512 = "SHA-512",
    DJB2 = "djb2",
    FNV1 = "fnv1",
    MURMER = "murmer",
    CRC32 = "crc32"
}
type HashOptions = {
    algorithm?: HashAlgorithm;
    serialize?: (object: any) => string;
};
type HashToNumberOptions = HashOptions & {
    min?: number;
    max?: number;
    hashLength?: number;
};
/**
 * Hashes an object asynchronously using the specified cryptographic algorithm.
 * This method should be used for cryptographic algorithms (SHA-256, SHA-384, SHA-512).
 * For non-cryptographic algorithms, use hashSync() for better performance.
 * @param object The object to hash
 * @param options The hash options to use
 * @returns {Promise<string>} The hash of the object
 */
declare function hash(object: any, options?: HashOptions): Promise<string>;
/**
 * Hashes an object synchronously using the specified non-cryptographic algorithm.
 * This method should be used for non-cryptographic algorithms (DJB2, FNV1, MURMER, CRC32).
 * For cryptographic algorithms, use hash() instead.
 * @param object The object to hash
 * @param options The hash options to use
 * @returns {string} The hash of the object
 */
declare function hashSync(object: any, options?: HashOptions): string;
/**
 * Hashes an object asynchronously and converts it to a number within a specified range.
 * This method should be used for cryptographic algorithms (SHA-256, SHA-384, SHA-512).
 * For non-cryptographic algorithms, use hashToNumberSync() for better performance.
 * @param object The object to hash
 * @param options The hash options to use including min/max range
 * @returns {Promise<number>} A number within the specified range
 */
declare function hashToNumber(object: any, options?: HashToNumberOptions): Promise<number>;
/**
 * Hashes an object synchronously and converts it to a number within a specified range.
 * This method should be used for non-cryptographic algorithms (DJB2, FNV1, MURMER, CRC32).
 * For cryptographic algorithms, use hashToNumber() instead.
 * @param object The object to hash
 * @param options The hash options to use including min/max range
 * @returns {number} A number within the specified range
 */
declare function hashToNumberSync(object: any, options?: HashToNumberOptions): number;

declare function isKeyvInstance(keyv: any): boolean;

declare function isObject<T = Record<string, unknown>>(value: unknown): value is T;

declare function lessThan(number1?: number, number2?: number): boolean;

type CacheInstance = {
    get: (key: string) => Promise<any | undefined>;
    has: (key: string) => Promise<boolean>;
    set: (key: string, value: any, ttl?: number | string) => Promise<void>;
    on: (event: string, listener: (...args: any[]) => void) => void;
    emit: (event: string, ...args: any[]) => boolean;
};
type CacheSyncInstance = {
    get: (key: string) => any | undefined;
    has: (key: string) => boolean;
    set: (key: string, value: any, ttl?: number | string) => void;
    on: (event: string, listener: (...args: any[]) => void) => void;
    emit: (event: string, ...args: any[]) => boolean;
};
type GetOrSetKey = string | ((options?: GetOrSetOptions) => string);
type GetOrSetThrowErrorsContext = "function" | "store";
type GetOrSetFunctionOptions = {
    ttl?: number | string;
    cacheErrors?: boolean;
    /** Whether or not to throw errors:
     * - `false` (default) - do not throw any errors
     * - `true` - throw any error
     * - `"function"` - only throw errors that occur in the provided function / setter
     * - `"store"` - only throw errors that occur when getting/setting the cache
     */
    throwErrors?: boolean | GetOrSetThrowErrorsContext;
    /**
     * If set, this will bypass the instances nonBlocking setting for the get call.
     * @type {boolean}
     */
    nonBlocking?: boolean;
};
type GetOrSetOptions = GetOrSetFunctionOptions & {
    cacheId?: string;
    cache: CacheInstance;
};
type CreateWrapKey = (function_: AnyFunction, arguments_: any[], options?: WrapFunctionOptions) => string;
type WrapFunctionOptions = {
    ttl?: number | string;
    keyPrefix?: string;
    createKey?: CreateWrapKey;
    cacheErrors?: boolean;
    cacheId?: string;
    serialize?: (object: any) => string;
};
type WrapOptions = WrapFunctionOptions & {
    cache: CacheInstance;
    serialize?: (object: any) => string;
};
type WrapSyncOptions = WrapFunctionOptions & {
    cache: CacheSyncInstance;
    serialize?: (object: any) => string;
};
type AnyFunction = (...arguments_: any[]) => any;
declare function wrapSync<T>(function_: AnyFunction, options: WrapSyncOptions): AnyFunction;
declare function getOrSet<T>(key: GetOrSetKey, function_: () => Promise<T>, options: GetOrSetOptions): Promise<T | undefined>;
declare function wrap<T>(function_: AnyFunction, options: WrapOptions): AnyFunction;
type CreateWrapKeyOptions = {
    keyPrefix?: string;
    serialize?: (object: any) => string;
};
declare function createWrapKey(function_: AnyFunction, arguments_: any[], options?: CreateWrapKeyOptions): string;

type Function_<P, T> = (...arguments_: P[]) => T;
declare function runIfFn<T, P>(valueOrFunction: T | Function_<P, T>, ...arguments_: P[]): T;

declare const sleep: (ms: number) => Promise<unknown>;

type StatsOptions = {
    enabled?: boolean;
};
declare class Stats {
    private _hits;
    private _misses;
    private _gets;
    private _sets;
    private _deletes;
    private _clears;
    private _vsize;
    private _ksize;
    private _count;
    private _enabled;
    constructor(options?: StatsOptions);
    /**
     * @returns {boolean} - Whether the stats are enabled
     */
    get enabled(): boolean;
    /**
     * @param {boolean} enabled - Whether to enable the stats
     */
    set enabled(enabled: boolean);
    /**
     * @returns {number} - The number of hits
     * @readonly
     */
    get hits(): number;
    /**
     * @returns {number} - The number of misses
     * @readonly
     */
    get misses(): number;
    /**
     * @returns {number} - The number of gets
     * @readonly
     */
    get gets(): number;
    /**
     * @returns {number} - The number of sets
     * @readonly
     */
    get sets(): number;
    /**
     * @returns {number} - The number of deletes
     * @readonly
     */
    get deletes(): number;
    /**
     * @returns {number} - The number of clears
     * @readonly
     */
    get clears(): number;
    /**
     * @returns {number} - The vsize (value size) of the cache instance
     * @readonly
     */
    get vsize(): number;
    /**
     * @returns {number} - The ksize (key size) of the cache instance
     * @readonly
     */
    get ksize(): number;
    /**
     * @returns {number} - The count of the cache instance
     * @readonly
     */
    get count(): number;
    incrementHits(): void;
    incrementMisses(): void;
    incrementGets(): void;
    incrementSets(): void;
    incrementDeletes(): void;
    incrementClears(): void;
    incrementVSize(value: any): void;
    decreaseVSize(value: any): void;
    incrementKSize(key: string): void;
    decreaseKSize(key: string): void;
    incrementCount(): void;
    decreaseCount(): void;
    setCount(count: number): void;
    roughSizeOfString(value: string): number;
    roughSizeOfObject(object: any): number;
    reset(): void;
    resetStoreValues(): void;
}

/**
 * Converts a exspires value to a TTL value.
 * @param expires - The expires value to convert.
 * @returns {number | undefined} The TTL value in milliseconds, or undefined if the expires value is not valid.
 */
declare function getTtlFromExpires(expires: number | undefined): number | undefined;
/**
 * Get the TTL value from the cacheableTtl, primaryTtl, and secondaryTtl values.
 * @param cacheableTtl - The cacheableTtl value to use.
 * @param primaryTtl - The primaryTtl value to use.
 * @param secondaryTtl - The secondaryTtl value to use.
 * @returns {number | undefined} The TTL value in milliseconds, or undefined if all values are undefined.
 */
declare function getCascadingTtl(cacheableTtl?: number | string, primaryTtl?: number, secondaryTtl?: number): number | undefined;
/**
 * Calculate the TTL value from the expires value. If the ttl is undefined, it will be set to the expires value. If the
 * expires value is undefined, it will be set to the ttl value. If both values are defined, the smaller of the two will be used.
 * @param ttl
 * @param expires
 * @returns
 */
declare function calculateTtlFromExpiration(ttl: number | undefined, expires: number | undefined): number | undefined;

export { type AnyFunction, type CacheInstance, type CacheSyncInstance, type CacheableItem, type CacheableStoreItem, type CreateWrapKey, type CreateWrapKeyOptions, type GetOrSetFunctionOptions, type GetOrSetKey, type GetOrSetOptions, HashAlgorithm, type HashOptions, type HashToNumberOptions, Stats, type StatsOptions, type WrapFunctionOptions, type WrapOptions, type WrapSyncOptions, calculateTtlFromExpiration, coalesceAsync, createWrapKey, getCascadingTtl, getOrSet, getTtlFromExpires, hash, hashSync, hashToNumber, hashToNumberSync, isKeyvInstance, isObject, lessThan, runIfFn, shorthandToMilliseconds, shorthandToTime, sleep, wrap, wrapSync };
