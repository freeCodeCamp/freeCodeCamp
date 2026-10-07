import { LRUCache } from 'lru-cache';
import { Options } from './typedef.js';
/**
 * CacheItem
 */
export declare class CacheItem {
    #private;
    /**
     * constructor
     */
    constructor(item: unknown, isNull?: boolean);
    get item(): unknown;
    get isNull(): boolean;
}
/**
 * NullObject
 */
export declare class NullObject extends CacheItem {
    /**
     * constructor
     */
    constructor();
}
export declare const lruCache: LRUCache<{}, {}, unknown>;
/**
 * set cache
 * @param key - cache key
 * @param value - value to cache
 * @returns void
 */
export declare const setCache: (key: string, value: unknown) => void;
/**
 * get cache
 * @param key - cache key
 * @returns cached item or false otherwise
 */
export declare const getCache: (key: string) => CacheItem | boolean;
/**
 * create cache key
 * @param keyData - key data
 * @param [opt] - options
 * @returns cache key
 */
export declare const createCacheKey: (keyData: Record<string, string>, opt?: Options) => string;
