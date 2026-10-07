type CacheConstructor<T> = new (max?: number, ttlInMsecs?: number, cacheId?: string, cacheStatistics?: HitStatisticsRecord) => T

type CacheEntry<T> = {
    expiry: number
    key: any
    prev: CacheEntry<T> | null
    next: CacheEntry<T> | null
    value: T
}

interface ToadCache<T> {
    first: any;
    last: any;
    max: number;
    ttl: number;
    size: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    keys(): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    set(key: any, value: T): void;
}

declare class FifoMap<T> implements ToadCache<T>{
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: Map<any, T>;
    last: any;
    max: number;
    ttl: number;
    size: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): IterableIterator<any>;
    set(key: any, value: T): void;
}

declare class FifoObject<T> implements ToadCache<T> {
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: Record<any, CacheEntry<T>>;
    last: any;
    size: number;
    max: number;
    ttl: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): string[];
    set(key: any, value: T): void;
}

declare class LruMap<T> implements ToadCache<T> {
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: Map<any, T>;
    last: any;
    max: number;
    ttl: number;
    size: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): IterableIterator<any>;
    set(key: any, value: T): void;
}

declare class LruObject<T> implements ToadCache<T> {
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: Record<any, CacheEntry<T>>;
    last: any;
    size: number;
    max: number;
    ttl: number;

    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): string[];
    set(key: any, value: T): void;
}

declare class HitStatisticsRecord {
    records: Record<string, Record<string, {
        expirations: number,
        evictions: number,
        hits: number,
        emptyHits: number,
        falsyHits: number,
        misses: number,
        invalidateAll: number,
        invalidateOne: number,
        cacheSize: number,
        sets: number,
    }>>

    initForCache(cacheId: string, currentTimeStamp: string): void
    resetForCache(cacheId: string): void
}

declare class LruObjectHitStatistics<T> extends LruObject<T>{
    constructor(max?: number, ttlInMsecs?: number, cacheId?: string, globalStatisticsRecord?: HitStatisticsRecord, statisticTtlInHours?: number);
}

export {
    CacheConstructor,
    ToadCache,
    LruObject,
    LruMap,
    FifoMap,
    FifoObject,
    HitStatisticsRecord,
    LruObjectHitStatistics,
    FifoObject as Fifo,
    LruObject as Lru
}
