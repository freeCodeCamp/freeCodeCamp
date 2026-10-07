/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js";
import type * as Effect from "./Effect.js";
import type { Either } from "./Either.js";
import type * as Exit from "./Exit.js";
import type * as Option from "./Option.js";
import type * as Predicate from "./Predicate.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const CacheTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type CacheTypeId = typeof CacheTypeId;
/**
 * @since 3.6.4
 * @category symbols
 */
export declare const ConsumerCacheTypeId: unique symbol;
/**
 * @since 3.6.4
 * @category symbols
 */
export type ConsumerCacheTypeId = typeof ConsumerCacheTypeId;
/**
 * A `Cache` is defined in terms of a lookup function that, given a key of
 * type `Key`, can either fail with an error of type `Error` or succeed with a
 * value of type `Value`. Getting a value from the cache will either return
 * the previous result of the lookup function if it is available or else
 * compute a new result with the lookup function, put it in the cache, and
 * return it.
 *
 * A cache also has a specified capacity and time to live. When the cache is
 * at capacity the least recently accessed values in the cache will be
 * removed to make room for new values. Getting a value with a life older than
 * the specified time to live will result in a new value being computed with
 * the lookup function and returned when available.
 *
 * The cache is safe for concurrent access. If multiple fibers attempt to get
 * the same key the lookup function will only be computed once and the result
 * will be returned to all fibers.
 *
 * @since 2.0.0
 * @category models
 */
export interface Cache<in out Key, in out Value, out Error = never> extends ConsumerCache<Key, Value, Error>, Cache.Variance<Key, Value, Error> {
    /**
     * Retrieves the value associated with the specified key if it exists.
     * Otherwise computes the value with the lookup function, puts it in the
     * cache, and returns it.
     */
    get(key: Key): Effect.Effect<Value, Error>;
    /**
     * Retrieves the value associated with the specified key if it exists as a left.
     * Otherwise computes the value with the lookup function, puts it in the
     * cache, and returns it as a right.
     */
    getEither(key: Key): Effect.Effect<Either<Value, Value>, Error>;
    /**
     * Computes the value associated with the specified key, with the lookup
     * function, and puts it in the cache. The difference between this and
     * `get` method is that `refresh` triggers (re)computation of the value
     * without invalidating it in the cache, so any request to the associated
     * key can still be served while the value is being re-computed/retrieved
     * by the lookup function. Additionally, `refresh` always triggers the
     * lookup function, disregarding the last `Error`.
     */
    refresh(key: Key): Effect.Effect<void, Error>;
    /**
     * Associates the specified value with the specified key in the cache.
     */
    set(key: Key, value: Value): Effect.Effect<void>;
}
/**
 * A ConsumerCache models a portion of a cache which is safe to share without allowing to create new values or access existing ones.
 *
 * It can be used safely to give over control for request management without leaking writer side details.
 *
 * @since 2.0.0
 * @category models
 */
export interface ConsumerCache<in out Key, out Value, out Error = never> extends Cache.ConsumerVariance<Key, Value, Error> {
    /**
     * Retrieves the value associated with the specified key if it exists.
     * Otherwise returns `Option.none`.
     */
    getOption(key: Key): Effect.Effect<Option.Option<Value>, Error>;
    /**
     * Retrieves the value associated with the specified key if it exists and the
     * lookup function has completed. Otherwise returns `Option.none`.
     */
    getOptionComplete(key: Key): Effect.Effect<Option.Option<Value>>;
    /**
     * Returns statistics for this cache.
     */
    readonly cacheStats: Effect.Effect<CacheStats>;
    /**
     * Returns whether a value associated with the specified key exists in the
     * cache.
     */
    contains(key: Key): Effect.Effect<boolean>;
    /**
     * Returns statistics for the specified entry.
     */
    entryStats(key: Key): Effect.Effect<Option.Option<EntryStats>>;
    /**
     * Invalidates the value associated with the specified key.
     */
    invalidate(key: Key): Effect.Effect<void>;
    /**
     * Invalidates the value associated with the specified key if the predicate holds.
     */
    invalidateWhen(key: Key, predicate: Predicate.Predicate<Value>): Effect.Effect<void>;
    /**
     * Invalidates all values in the cache.
     */
    readonly invalidateAll: Effect.Effect<void>;
    /**
     * Returns the approximate number of values in the cache.
     */
    readonly size: Effect.Effect<number>;
    /**
     * Returns an approximation of the values in the cache.
     */
    readonly keys: Effect.Effect<Array<Key>>;
    /**
     * Returns an approximation of the values in the cache.
     */
    readonly values: Effect.Effect<Array<Value>>;
    /**
     * Returns an approximation of the values in the cache.
     */
    readonly entries: Effect.Effect<Array<[Key, Value]>>;
}
/**
 * @since 2.0.0
 */
export declare namespace Cache {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in out Key, in out Value, out Error> {
        readonly [CacheTypeId]: {
            readonly _Key: Types.Invariant<Key>;
            readonly _Error: Types.Covariant<Error>;
            readonly _Value: Types.Invariant<Value>;
        };
    }
    /**
     * @since 3.6.4
     * @category models
     */
    interface ConsumerVariance<in out Key, out Value, out Error> {
        readonly [ConsumerCacheTypeId]: {
            readonly _Key: Types.Invariant<Key>;
            readonly _Error: Types.Covariant<Error>;
            readonly _Value: Types.Covariant<Value>;
        };
    }
}
/**
 * Constructs a new cache with the specified capacity, time to live, and
 * lookup function.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <Key, Value, Error = never, Environment = never>(options: {
    readonly capacity: number;
    readonly timeToLive: Duration.DurationInput;
    readonly lookup: Lookup<Key, Value, Error, Environment>;
}) => Effect.Effect<Cache<Key, Value, Error>, never, Environment>;
/**
 * Constructs a new cache with the specified capacity, time to live, and
 * lookup function, where the time to live can depend on the `Exit` value
 * returned by the lookup function.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const makeWith: <Key, Value, Error = never, Environment = never>(options: {
    readonly capacity: number;
    readonly lookup: Lookup<Key, Value, Error, Environment>;
    readonly timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.DurationInput;
}) => Effect.Effect<Cache<Key, Value, Error>, never, Environment>;
/**
 * `CacheStats` represents a snapshot of statistics for the cache as of a
 * point in time.
 *
 * @since 2.0.0
 * @category models
 */
export interface CacheStats {
    readonly hits: number;
    readonly misses: number;
    readonly size: number;
}
/**
 * Constructs a new `CacheStats` from the specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const makeCacheStats: (options: {
    readonly hits: number;
    readonly misses: number;
    readonly size: number;
}) => CacheStats;
/**
 * Represents a snapshot of statistics for an entry in the cache.
 *
 * @since 2.0.0
 * @category models
 */
export interface EntryStats {
    readonly loadedMillis: number;
}
/**
 * Constructs a new `EntryStats` from the specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const makeEntryStats: (loadedMillis: number) => EntryStats;
/**
 * A `Lookup` represents a lookup function that, given a key of type `Key`, can
 * return an effect that will either produce a value of type `Value` or fail
 * with an error of type `Error` using an environment of type `Environment`.
 *
 * @since 2.0.0
 * @category models
 */
export type Lookup<Key, Value, Error = never, Environment = never> = (key: Key) => Effect.Effect<Value, Error, Environment>;
//# sourceMappingURL=Cache.d.ts.map