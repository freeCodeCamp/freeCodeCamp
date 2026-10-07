import * as core from "./internal/core.js";
import * as internal from "./internal/deferred.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const DeferredTypeId = internal.DeferredTypeId;
/**
 * Creates a new `Deferred`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = core.deferredMake;
/**
 * Creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeAs = core.deferredMakeAs;
const _await = core.deferredAwait;
export {
/**
 * Retrieves the value of the `Deferred`, suspending the fiber running the
 * workflow until the result is available.
 *
 * @since 2.0.0
 * @category getters
 */
_await as await };
/**
 * Completes the deferred with the result of the specified effect. If the
 * deferred has already been completed, the method will produce false.
 *
 * Note that `Deferred.completeWith` will be much faster, so consider using
 * that if you do not need to memoize the result of the specified effect.
 *
 * @since 2.0.0
 * @category utils
 */
export const complete = core.deferredComplete;
/**
 * Completes the deferred with the result of the specified effect. If the
 * deferred has already been completed, the method will produce false.
 *
 * @since 2.0.0
 * @category utils
 */
export const completeWith = core.deferredCompleteWith;
/**
 * Exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const done = core.deferredDone;
/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const fail = core.deferredFail;
/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const failSync = core.deferredFailSync;
/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const failCause = core.deferredFailCause;
/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const failCauseSync = core.deferredFailCauseSync;
/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const die = core.deferredDie;
/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const dieSync = core.deferredDieSync;
/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the `FiberId` of the fiber
 * calling this method.
 *
 * @since 2.0.0
 * @category utils
 */
export const interrupt = core.deferredInterrupt;
/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the specified `FiberId`.
 *
 * @since 2.0.0
 * @category utils
 */
export const interruptWith = core.deferredInterruptWith;
/**
 * Returns `true` if this `Deferred` has already been completed with a value or
 * an error, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isDone = core.deferredIsDone;
/**
 * Returns a `Some<Effect<A, E, R>>` from the `Deferred` if this `Deferred` has
 * already been completed, `None` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const poll = core.deferredPoll;
/**
 * Completes the `Deferred` with the specified value.
 *
 * @since 2.0.0
 * @category utils
 */
export const succeed = core.deferredSucceed;
/**
 * Completes the `Deferred` with the specified lazily evaluated value.
 *
 * @since 2.0.0
 * @category utils
 */
export const sync = core.deferredSync;
/**
 * Unsafely creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeMake = core.deferredUnsafeMake;
/**
 * Unsafely exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeDone = core.deferredUnsafeDone;
//# sourceMappingURL=Deferred.js.map