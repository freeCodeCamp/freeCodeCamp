/**
 * @since 2.0.0
 */
import type * as Cache from "./Cache.js"
import type * as Duration from "./Duration.js"
import type * as Effect from "./Effect.js"
import type * as Exit from "./Exit.js"
import * as internal from "./internal/scopedCache.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type * as Scope from "./Scope.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const ScopedCacheTypeId: unique symbol = internal.ScopedCacheTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type ScopedCacheTypeId = typeof ScopedCacheTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface ScopedCache<in Key, out Value, out Error = never>
  extends ScopedCache.Variance<Key, Value, Error>, Pipeable
{
  /**
   * Retrieves the value associated with the specified key if it exists.
   * Otherwise returns `Option.none`.
   */
  getOption(key: Key): Effect.Effect<Option.Option<Value>, Error, Scope.Scope>

  /**
   * Retrieves the value associated with the specified key if it exists and the
   * lookup function has completed. Otherwise returns `Option.none`.
   */
  getOptionComplete(key: Key): Effect.Effect<Option.Option<Value>, never, Scope.Scope>

  /**
   * Returns statistics for this cache.
   */
  readonly cacheStats: Effect.Effect<Cache.CacheStats>

  /**
   * Return whether a resource associated with the specified key exists in the
   * cache. Sometime `contains` can return true if the resource is currently
   * being created but not yet totally created.
   */
  contains(key: Key): Effect.Effect<boolean>

  /**
   * Return statistics for the specified entry.
   */
  entryStats(key: Key): Effect.Effect<Option.Option<Cache.EntryStats>>

  /**
   * Gets the value from the cache if it exists or otherwise computes it, the
   * release action signals to the cache that the value is no longer being used
   * and can potentially be finalized subject to the policies of the cache.
   */
  get(key: Key): Effect.Effect<Value, Error, Scope.Scope>

  /**
   * Invalidates the resource associated with the specified key.
   */
  invalidate(key: Key): Effect.Effect<void>

  /**
   * Invalidates all values in the cache.
   */
  readonly invalidateAll: Effect.Effect<void>

  /**
   * Force the reuse of the lookup function to compute the returned scoped
   * effect associated with the specified key immediately. Once the new resource
   * is recomputed, the old resource associated to the key is cleaned (once all
   * fiber using it are done with it). During the time the new resource is
   * computed, concurrent call the .get will use the old resource if this one is
   * not expired.
   */
  refresh(key: Key): Effect.Effect<void, Error>

  /**
   * Returns the approximate number of values in the cache.
   */
  readonly size: Effect.Effect<number>
}

/**
 * @since 2.0.0
 */
export declare namespace ScopedCache {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in Key, out Value, out Error> {
    readonly [ScopedCacheTypeId]: {
      _Key: Types.Contravariant<Key>
      _Error: Types.Covariant<Error>
      _Value: Types.Covariant<Value>
    }
  }
}

/**
 * Constructs a new cache with the specified capacity, time to live, and
 * lookup function.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <Key, Value, Error = never, Environment = never>(
  options: {
    readonly lookup: Lookup<Key, Value, Error, Environment>
    readonly capacity: number
    readonly timeToLive: Duration.DurationInput
  }
) => Effect.Effect<ScopedCache<Key, Value, Error>, never, Scope.Scope | Environment> = internal.make

/**
 * Constructs a new cache with the specified capacity, time to live, and
 * lookup function, where the time to live can depend on the `Exit` value
 * returned by the lookup function.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeWith: <Key, Value, Error = never, Environment = never>(
  options: {
    readonly capacity: number
    readonly lookup: Lookup<Key, Value, Error, Environment>
    readonly timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.DurationInput
  }
) => Effect.Effect<ScopedCache<Key, Value, Error>, never, Scope.Scope | Environment> = internal.makeWith

/**
 * Similar to `Cache.Lookup`, but executes the lookup function within a `Scope`.
 *
 * @since 2.0.0
 * @category models
 */
export type Lookup<Key, Value, Error = never, Environment = never> = (
  key: Key
) => Effect.Effect<Value, Error, Environment | Scope.Scope>
