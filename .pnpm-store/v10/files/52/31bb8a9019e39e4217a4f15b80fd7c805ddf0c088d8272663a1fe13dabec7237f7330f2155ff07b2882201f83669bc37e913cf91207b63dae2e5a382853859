import { CacheDurationSeconds } from '@typescript-eslint/types';
export declare const DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS = 30;
export interface CacheLike<Key, Value> {
    get(key: Key): Value | void;
    set(key: Key, value: Value): this;
}
/**
 * A map with key-level expiration.
 */
export declare class ExpiringCache<TKey, TValue> implements CacheLike<TKey, TValue> {
    private "ExpiringCache.#private";
    constructor(cacheDurationSeconds: CacheDurationSeconds);
    set(key: TKey, value: TValue): this;
    get(key: TKey): TValue | undefined;
    clear(): void;
}
//# sourceMappingURL=ExpiringCache.d.ts.map
