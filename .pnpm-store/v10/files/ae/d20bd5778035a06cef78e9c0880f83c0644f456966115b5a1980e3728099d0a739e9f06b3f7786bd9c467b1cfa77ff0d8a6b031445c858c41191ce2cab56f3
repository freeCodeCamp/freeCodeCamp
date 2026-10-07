import type { CacheDurationSeconds } from '@typescript-eslint/types';
export declare const DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS = 30;
export interface CacheLike<Key, Value> {
    get(key: Key): Value | undefined;
    set(key: Key, value: Value): this;
}
/**
 * A map with key-level expiration.
 */
export declare class ExpiringCache<Key, Value> implements CacheLike<Key, Value> {
    #private;
    constructor(cacheDurationSeconds: CacheDurationSeconds);
    clear(): void;
    get(key: Key): Value | undefined;
    set(key: Key, value: Value): this;
}
