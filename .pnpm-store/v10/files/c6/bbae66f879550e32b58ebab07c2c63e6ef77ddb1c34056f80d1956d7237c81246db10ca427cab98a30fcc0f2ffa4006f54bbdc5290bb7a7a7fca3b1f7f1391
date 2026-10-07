import * as RequestBlock_ from "./internal/blockedRequests.js";
import * as cache from "./internal/cache.js";
import * as core from "./internal/core.js";
import * as fiberRuntime from "./internal/fiberRuntime.js";
import * as internal from "./internal/request.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const RequestTypeId = internal.RequestTypeId;
/**
 * Returns `true` if the specified value is a `Request`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isRequest = internal.isRequest;
/**
 * Constructs a new `Request`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const of = internal.of;
/**
 * Constructs a new `Request`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const tagged = internal.tagged;
/**
 * Provides a constructor for a Request Class.
 *
 * @example
 * ```ts
 * import { Request } from "effect"
 *
 * type Success = string
 * type Error = never
 *
 * class MyRequest extends Request.Class<Success, Error, {
 *   readonly id: string
 * }> {}
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const Class = internal.Class;
/**
 * Provides a Tagged constructor for a Request Class.
 *
 * @example
 * ```ts
 * import { Request } from "effect"
 *
 * type Success = string
 * type Error = never
 *
 * class MyRequest extends Request.TaggedClass("MyRequest")<Success, Error, {
 *   readonly name: string
 * }> {}
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const TaggedClass = internal.TaggedClass;
/**
 * Complete a `Request` with the specified result.
 *
 * @since 2.0.0
 * @category request completion
 */
export const complete = internal.complete;
/**
 * Interrupts the child effect when requests are no longer needed
 *
 * @since 2.0.0
 * @category request completion
 */
export const interruptWhenPossible = fiberRuntime.interruptWhenPossible;
/**
 * Complete a `Request` with the specified effectful computation, failing the
 * request with the error from the effect workflow if it fails, and completing
 * the request with the value of the effect workflow if it succeeds.
 *
 * @since 2.0.0
 * @category request completion
 */
export const completeEffect = internal.completeEffect;
/**
 * Complete a `Request` with the specified error.
 *
 * @since 2.0.0
 * @category request completion
 */
export const fail = internal.fail;
/**
 * Complete a `Request` with the specified cause.
 *
 * @since 2.0.0
 * @category request completion
 */
export const failCause = internal.failCause;
/**
 * Complete a `Request` with the specified value.
 *
 * @since 2.0.0
 * @category request completion
 */
export const succeed = internal.succeed;
/**
 * @since 2.0.0
 * @category models
 */
export const makeCache = options => cache.make({
  ...options,
  lookup: () => core.map(core.deferredMake(), handle => ({
    listeners: new internal.Listeners(),
    handle
  }))
});
/**
 * @since 2.0.0
 * @category symbols
 */
export const EntryTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock.Entry");
/**
 * @since 2.0.0
 * @category guards
 */
export const isEntry = RequestBlock_.isEntry;
/**
 * @since 2.0.0
 * @category constructors
 */
export const makeEntry = RequestBlock_.makeEntry;
//# sourceMappingURL=Request.js.map