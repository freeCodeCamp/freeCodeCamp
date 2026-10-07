/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js"
import type * as Effect from "./Effect.js"
import * as internal from "./internal/keyedPool.js"
import type { Pipeable } from "./Pipeable.js"
import type * as Scope from "./Scope.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const KeyedPoolTypeId: unique symbol = internal.KeyedPoolTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type KeyedPoolTypeId = typeof KeyedPoolTypeId

/**
 * A `KeyedPool<K, A, E>` is a pool of `Pool`s of items of type `A`. Each pool
 * in the `KeyedPool` is associated with a key of type `K`.
 *
 * @since 2.0.0
 * @category models
 */
export interface KeyedPool<in K, in out A, out E = never> extends KeyedPool.Variance<K, A, E>, Pipeable {
  /**
   * Retrieves an item from the pool belonging to the given key in a scoped
   * effect. Note that if acquisition fails, then the returned effect will fail
   * for that same reason. Retrying a failed acquisition attempt will repeat the
   * acquisition attempt.
   */
  get(key: K): Effect.Effect<A, E, Scope.Scope>

  /**
   * Invalidates the specified item. This will cause the pool to eventually
   * reallocate the item, although this reallocation may occur lazily rather
   * than eagerly.
   */
  invalidate(item: A): Effect.Effect<void>
}

/**
 * @since 2.0.0
 */
export declare namespace KeyedPool {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in K, in out A, out E> {
    readonly [KeyedPoolTypeId]: {
      readonly _K: Types.Contravariant<K>
      readonly _A: Types.Invariant<A>
      readonly _E: Types.Covariant<E>
    }
  }
}

/**
 * Makes a new pool of the specified fixed size. The pool is returned in a
 * `Scope`, which governs the lifetime of the pool. When the pool is shutdown
 * because the `Scope` is closed, the individual items allocated by the pool
 * will be released in some unspecified order.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly size: number
  }
) => Effect.Effect<KeyedPool<K, A, E>, never, Scope.Scope | R> = internal.make

/**
 * Makes a new pool of the specified fixed size. The pool is returned in a
 * `Scope`, which governs the lifetime of the pool. When the pool is shutdown
 * because the `Scope` is closed, the individual items allocated by the pool
 * will be released in some unspecified order.
 *
 * The size of the underlying pools can be configured per key.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeWith: <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly size: (key: K) => number
  }
) => Effect.Effect<KeyedPool<K, A, E>, never, Scope.Scope | R> = internal.makeWith

/**
 * Makes a new pool with the specified minimum and maximum sizes and time to
 * live before a pool whose excess items are not being used will be shrunk
 * down to the minimum size. The pool is returned in a `Scope`, which governs
 * the lifetime of the pool. When the pool is shutdown because the `Scope` is
 * used, the individual items allocated by the pool will be released in some
 * unspecified order.
 *
 * The size of the underlying pools can be configured per key.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeWithTTL: <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly min: (key: K) => number
    readonly max: (key: K) => number
    readonly timeToLive: Duration.DurationInput
  }
) => Effect.Effect<KeyedPool<K, A, E>, never, Scope.Scope | R> = internal.makeWithTTL

/**
 * Makes a new pool with the specified minimum and maximum sizes and time to
 * live before a pool whose excess items are not being used will be shrunk
 * down to the minimum size. The pool is returned in a `Scope`, which governs
 * the lifetime of the pool. When the pool is shutdown because the `Scope` is
 * used, the individual items allocated by the pool will be released in some
 * unspecified order.
 *
 * The size of the underlying pools can be configured per key.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeWithTTLBy: <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly min: (key: K) => number
    readonly max: (key: K) => number
    readonly timeToLive: (key: K) => Duration.DurationInput
  }
) => Effect.Effect<KeyedPool<K, A, E>, never, Scope.Scope | R> = internal.makeWithTTLBy

/**
 * Retrieves an item from the pool belonging to the given key in a scoped
 * effect. Note that if acquisition fails, then the returned effect will fail
 * for that same reason. Retrying a failed acquisition attempt will repeat the
 * acquisition attempt.
 *
 * @since 2.0.0
 * @category combinators
 */
export const get: {
  /**
   * Retrieves an item from the pool belonging to the given key in a scoped
   * effect. Note that if acquisition fails, then the returned effect will fail
   * for that same reason. Retrying a failed acquisition attempt will repeat the
   * acquisition attempt.
   *
   * @since 2.0.0
   * @category combinators
   */
  <K>(key: K): <A, E>(self: KeyedPool<K, A, E>) => Effect.Effect<A, E, Scope.Scope>
  /**
   * Retrieves an item from the pool belonging to the given key in a scoped
   * effect. Note that if acquisition fails, then the returned effect will fail
   * for that same reason. Retrying a failed acquisition attempt will repeat the
   * acquisition attempt.
   *
   * @since 2.0.0
   * @category combinators
   */
  <K, A, E>(self: KeyedPool<K, A, E>, key: K): Effect.Effect<A, E, Scope.Scope>
} = internal.get

/**
 * Invalidates the specified item. This will cause the pool to eventually
 * reallocate the item, although this reallocation may occur lazily rather
 * than eagerly.
 *
 * @since 2.0.0
 * @category combinators
 */
export const invalidate: {
  /**
   * Invalidates the specified item. This will cause the pool to eventually
   * reallocate the item, although this reallocation may occur lazily rather
   * than eagerly.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(item: A): <K, E>(self: KeyedPool<K, A, E>) => Effect.Effect<void>
  /**
   * Invalidates the specified item. This will cause the pool to eventually
   * reallocate the item, although this reallocation may occur lazily rather
   * than eagerly.
   *
   * @since 2.0.0
   * @category combinators
   */
  <K, A, E>(self: KeyedPool<K, A, E>, item: A): Effect.Effect<void>
} = internal.invalidate
