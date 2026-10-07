/** A simple Least Recently Used map */
export declare class LRUMap<K, V> {
    private readonly _maxSize;
    private readonly _cache;
    constructor(_maxSize: number);
    /** Get the current size of the cache */
    get size(): number;
    /** Get an entry or undefined if it was not in the cache. Re-inserts to update the recently used order */
    get(key: K): V | undefined;
    /** Insert an entry and evict an older entry if we've reached maxSize */
    set(key: K, value: V): void;
    /** Remove an entry and return the entry if it was in the cache */
    remove(key: K): V | undefined;
    /** Clear all entries */
    clear(): void;
    /** Get all the keys */
    keys(): Array<K>;
    /** Get all the values */
    values(): Array<V>;
}
//# sourceMappingURL=lru.d.ts.map