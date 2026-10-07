import * as core from "./internal/core.js";
import * as circular from "./internal/effect/circular.js";
import * as internal from "./internal/fiber.js";
import * as fiberRuntime from "./internal/fiberRuntime.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const FiberTypeId = internal.FiberTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export const RuntimeFiberTypeId = internal.RuntimeFiberTypeId;
/**
 * @since 2.0.0
 * @category instances
 */
export const Order = internal.Order;
/**
 * Returns `true` if the specified value is a `Fiber`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isFiber = internal.isFiber;
/**
 * Returns `true` if the specified `Fiber` is a `RuntimeFiber`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isRuntimeFiber = internal.isRuntimeFiber;
/**
 * The identity of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
export const id = internal.id;
const _await = internal._await;
export {
/**
 * Awaits the fiber, which suspends the awaiting fiber until the result of the
 * fiber has been determined.
 *
 * @since 2.0.0
 * @category getters
 */
_await as await };
/**
 * Awaits on all fibers to be completed, successfully or not.
 *
 * @since 2.0.0
 * @category destructors
 */
export const awaitAll = fiberRuntime.fiberAwaitAll;
/**
 * Retrieves the immediate children of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
export const children = internal.children;
/**
 * Collects all fibers into a single fiber producing an in-order list of the
 * results.
 *
 * @since 2.0.0
 * @category constructors
 */
export const all = fiberRuntime.fiberAll;
/**
 * A fiber that is done with the specified `Exit` value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const done = internal.done;
/**
 * @since 2.0.0
 * @category destructors
 */
export const dump = internal.dump;
/**
 * @since 2.0.0
 * @category destructors
 */
export const dumpAll = internal.dumpAll;
/**
 * A fiber that has already failed with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail = internal.fail;
/**
 * Creates a `Fiber` that has already failed with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCause = internal.failCause;
/**
 * Lifts an `Effect` into a `Fiber`.
 *
 * @since 2.0.0
 * @category conversions
 */
export const fromEffect = internal.fromEffect;
/**
 * Gets the current fiber if one is running.
 *
 * @since 2.0.0
 * @category utilities
 */
export const getCurrentFiber = internal.getCurrentFiber;
/**
 * Inherits values from all `FiberRef` instances into current fiber. This
 * will resume immediately.
 *
 * @since 2.0.0
 * @category destructors
 */
export const inheritAll = internal.inheritAll;
/**
 * Interrupts the fiber from whichever fiber is calling this method. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interrupt = core.interruptFiber;
/**
 * Constructrs a `Fiber` that is already interrupted.
 *
 * @since 2.0.0
 * @category constructors
 */
export const interrupted = internal.interrupted;
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAs = core.interruptAsFiber;
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAsFork = internal.interruptAsFork;
/**
 * Interrupts all fibers, awaiting their interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAll = internal.interruptAll;
/**
 * Interrupts all fibers as by the specified fiber, awaiting their
 * interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAllAs = internal.interruptAllAs;
/**
 * Interrupts the fiber from whichever fiber is calling this method. The
 * interruption will happen in a separate daemon fiber, and the returned
 * effect will always resume immediately without waiting.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptFork = fiberRuntime.fiberInterruptFork;
/**
 * Joins the fiber, which suspends the joining fiber until the result of the
 * fiber has been determined. Attempting to join a fiber that has erred will
 * result in a catchable error. Joining an interrupted fiber will result in an
 * "inner interruption" of this fiber, unlike interruption triggered by
 * another fiber, "inner interruption" can be caught and recovered.
 *
 * @since 2.0.0
 * @category destructors
 */
export const join = internal.join;
/**
 * Joins all fibers, awaiting their _successful_ completion. Attempting to
 * join a fiber that has erred will result in a catchable error, _if_ that
 * error does not result from interruption.
 *
 * @since 2.0.0
 * @category destructors
 */
export const joinAll = fiberRuntime.fiberJoinAll;
/**
 * Maps over the value the Fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = internal.map;
/**
 * Effectually maps over the value the fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapEffect = internal.mapEffect;
/**
 * Passes the success of this fiber to the specified callback, and continues
 * with the fiber that it returns.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapFiber = internal.mapFiber;
/**
 * Folds over the `Fiber` or `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category folding
 */
export const match = internal.match;
/**
 * A fiber that never fails or succeeds.
 *
 * @since 2.0.0
 * @category constructors
 */
export const never = internal.never;
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
export const orElse = internal.orElse;
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
export const orElseEither = internal.orElseEither;
/**
 * Tentatively observes the fiber, but returns immediately if it is not
 * already done.
 *
 * @since 2.0.0
 * @category getters
 */
export const poll = internal.poll;
/**
 * Pretty-prints a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const pretty = internal.pretty;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
export const roots = internal.roots;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unsafeRoots = internal.unsafeRoots;
/**
 * Converts this fiber into a scoped effect. The fiber is interrupted when the
 * scope is closed.
 *
 * @since 2.0.0
 * @category destructors
 */
export const scoped = fiberRuntime.fiberScoped;
/**
 * Returns the `FiberStatus` of a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category getters
 */
export const status = internal.status;
/**
 * Returns a fiber that has already succeeded with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed = internal.succeed;
const void_ = internal.void;
export {
/**
 * A fiber that has already succeeded with unit.
 *
 * @since 2.0.0
 * @category constructors
 */
void_ as void };
/**
 * Zips this fiber and the specified fiber together, producing a tuple of
 * their output.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip = circular.zipFiber;
/**
 * Same as `zip` but discards the output of that `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft = circular.zipLeftFiber;
/**
 * Same as `zip` but discards the output of this `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipRight = circular.zipRightFiber;
/**
 * Zips this fiber with the specified fiber, combining their results using the
 * specified combiner function. Both joins and interruptions are performed in
 * sequential order from left to right.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith = circular.zipWithFiber;
//# sourceMappingURL=Fiber.js.map