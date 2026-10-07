import { Cache as Cache_2 } from '@algolia/cache-common';

export declare type BrowserLocalStorageCacheItem = {
    /**
     * The cache item creation timestamp.
     */
    readonly timestamp: number;
    /**
     * The cache item value
     */
    readonly value: any;
};

export declare type BrowserLocalStorageOptions = {
    /**
     * The cache key.
     */
    readonly key: string;
    /**
     * The time to live for each cached item in seconds.
     */
    readonly timeToLive?: number;
    /**
     * The native local storage implementation.
     */
    readonly localStorage?: Storage;
};

export declare function createBrowserLocalStorageCache(options: BrowserLocalStorageOptions): Cache_2;

export { }
