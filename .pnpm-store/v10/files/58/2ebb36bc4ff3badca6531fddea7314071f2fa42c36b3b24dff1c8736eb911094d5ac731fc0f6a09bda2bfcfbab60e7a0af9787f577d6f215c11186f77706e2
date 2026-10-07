import * as internal from "./internal/keyedPool.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const KeyedPoolTypeId = internal.KeyedPoolTypeId;
/**
 * Makes a new pool of the specified fixed size. The pool is returned in a
 * `Scope`, which governs the lifetime of the pool. When the pool is shutdown
 * because the `Scope` is closed, the individual items allocated by the pool
 * will be released in some unspecified order.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
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
export const makeWith = internal.makeWith;
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
export const makeWithTTL = internal.makeWithTTL;
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
export const makeWithTTLBy = internal.makeWithTTLBy;
/**
 * Retrieves an item from the pool belonging to the given key in a scoped
 * effect. Note that if acquisition fails, then the returned effect will fail
 * for that same reason. Retrying a failed acquisition attempt will repeat the
 * acquisition attempt.
 *
 * @since 2.0.0
 * @category combinators
 */
export const get = internal.get;
/**
 * Invalidates the specified item. This will cause the pool to eventually
 * reallocate the item, although this reallocation may occur lazily rather
 * than eagerly.
 *
 * @since 2.0.0
 * @category combinators
 */
export const invalidate = internal.invalidate;
//# sourceMappingURL=KeyedPool.js.map