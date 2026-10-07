import * as internal from "./internal/rcMap.js";
/**
 * @since 3.5.0
 * @category type ids
 */
export const TypeId = internal.TypeId;
/**
 * An `RcMap` can contain multiple reference counted resources that can be indexed
 * by a key. The resources are lazily acquired on the first call to `get` and
 * released when the last reference is released.
 *
 * Complex keys can extend `Equal` and `Hash` to allow lookups by value.
 *
 * **Options**
 *
 * - `capacity`: The maximum number of resources that can be held in the map.
 * - `idleTimeToLive`: When the reference count reaches zero, the resource will be released after this duration.
 *   Can be a static duration or a function that returns a duration based on the key.
 *
 * @since 3.5.0
 * @category models
 * @example
 * ```ts
 * import { Effect, RcMap } from "effect"
 *
 * Effect.gen(function*() {
 *   const map = yield* RcMap.make({
 *     lookup: (key: string) =>
 *       Effect.acquireRelease(
 *         Effect.succeed(`acquired ${key}`),
 *         () => Effect.log(`releasing ${key}`)
 *       )
 *   })
 *
 *   // Get "foo" from the map twice, which will only acquire it once.
 *   // It will then be released once the scope closes.
 *   yield* RcMap.get(map, "foo").pipe(
 *     Effect.andThen(RcMap.get(map, "foo")),
 *     Effect.scoped
 *   )
 * })
 * ```
 */
export const make = internal.make;
/**
 * @since 3.5.0
 * @category combinators
 */
export const get = internal.get;
/**
 * @since 3.17.7
 * @category combinators
 */
export const has = internal.has;
/**
 * @since 3.8.0
 * @category combinators
 */
export const keys = internal.keys;
/**
 * @since 3.13.0
 * @category combinators
 */
export const invalidate = internal.invalidate;
/**
 * @since 3.13.0
 * @category combinators
 */
export const touch = internal.touch;
//# sourceMappingURL=RcMap.js.map