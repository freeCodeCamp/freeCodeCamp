import * as internal from "./internal/rcRef.js";
/**
 * @since 3.5.0
 * @category type ids
 */
export const TypeId = internal.TypeId;
/**
 * Create an `RcRef` from an acquire `Effect`.
 *
 * An RcRef wraps a reference counted resource that can be acquired and released
 * multiple times.
 *
 * The resource is lazily acquired on the first call to `get` and released when
 * the last reference is released.
 *
 * @since 3.5.0
 * @category constructors
 * @example
 * ```ts
 * import { Effect, RcRef } from "effect"
 *
 * Effect.gen(function*() {
 *   const ref = yield* RcRef.make({
 *     acquire: Effect.acquireRelease(
 *       Effect.succeed("foo"),
 *       () => Effect.log("release foo")
 *     )
 *   })
 *
 *   // will only acquire the resource once, and release it
 *   // when the scope is closed
 *   yield* RcRef.get(ref).pipe(
 *     Effect.andThen(RcRef.get(ref)),
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
 * @since 3.19.6
 * @category combinators
 * @experimental
 */
export const invalidate = internal.invalidate;
//# sourceMappingURL=RcRef.js.map