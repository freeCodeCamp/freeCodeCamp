import { Cache as Cache_3 } from '@algolia/cache-common';

declare type Cache_2 = {
    /**
     * Gets the value of the given `key`.
     */
    readonly get: <TValue>(key: object | string, defaultValue: () => Readonly<Promise<TValue>>, events?: CacheEvents<TValue>) => Readonly<Promise<TValue>>;
    /**
     * Sets the given value with the given `key`.
     */
    readonly set: <TValue>(key: object | string, value: TValue) => Readonly<Promise<TValue>>;
    /**
     * Deletes the given `key`.
     */
    readonly delete: (key: object | string) => Readonly<Promise<void>>;
    /**
     * Clears the cache.
     */
    readonly clear: () => Readonly<Promise<void>>;
};
export { Cache_2 as Cache }

export declare type CacheEvents<TValue> = {
    /**
     * The callback when the given `key` is missing from the cache.
     */
    readonly miss: (value: TValue) => Readonly<Promise<any>>;
};

export declare function createFallbackableCache(options: FallbackableCacheOptions): Cache_2;

export declare function createNullCache(): Cache_2;

export declare type FallbackableCacheOptions = {
    /**
     * List of caches order by priority.
     */
    readonly caches: readonly Cache_3[];
};

export { }
