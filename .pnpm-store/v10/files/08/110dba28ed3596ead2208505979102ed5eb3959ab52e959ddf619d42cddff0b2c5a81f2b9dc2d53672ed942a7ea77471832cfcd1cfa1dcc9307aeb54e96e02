"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.zipRight = exports.zipLeft = exports.zip = exports.void = exports.unsafeRoots = exports.succeed = exports.status = exports.scoped = exports.roots = exports.pretty = exports.poll = exports.orElseEither = exports.orElse = exports.never = exports.match = exports.mapFiber = exports.mapEffect = exports.map = exports.joinAll = exports.join = exports.isRuntimeFiber = exports.isFiber = exports.interrupted = exports.interruptFork = exports.interruptAsFork = exports.interruptAs = exports.interruptAllAs = exports.interruptAll = exports.interrupt = exports.inheritAll = exports.id = exports.getCurrentFiber = exports.fromEffect = exports.failCause = exports.fail = exports.dumpAll = exports.dump = exports.done = exports.children = exports.awaitAll = exports.await = exports.all = exports.RuntimeFiberTypeId = exports.Order = exports.FiberTypeId = void 0;
var core = _interopRequireWildcard(require("./internal/core.js"));
var circular = _interopRequireWildcard(require("./internal/effect/circular.js"));
var internal = _interopRequireWildcard(require("./internal/fiber.js"));
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const FiberTypeId = exports.FiberTypeId = internal.FiberTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
const RuntimeFiberTypeId = exports.RuntimeFiberTypeId = internal.RuntimeFiberTypeId;
/**
 * @since 2.0.0
 * @category instances
 */
const Order = exports.Order = internal.Order;
/**
 * Returns `true` if the specified value is a `Fiber`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isFiber = exports.isFiber = internal.isFiber;
/**
 * Returns `true` if the specified `Fiber` is a `RuntimeFiber`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isRuntimeFiber = exports.isRuntimeFiber = internal.isRuntimeFiber;
/**
 * The identity of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
const id = exports.id = internal.id;
const _await = exports.await = internal._await;
/**
 * Awaits on all fibers to be completed, successfully or not.
 *
 * @since 2.0.0
 * @category destructors
 */
const awaitAll = exports.awaitAll = fiberRuntime.fiberAwaitAll;
/**
 * Retrieves the immediate children of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
const children = exports.children = internal.children;
/**
 * Collects all fibers into a single fiber producing an in-order list of the
 * results.
 *
 * @since 2.0.0
 * @category constructors
 */
const all = exports.all = fiberRuntime.fiberAll;
/**
 * A fiber that is done with the specified `Exit` value.
 *
 * @since 2.0.0
 * @category constructors
 */
const done = exports.done = internal.done;
/**
 * @since 2.0.0
 * @category destructors
 */
const dump = exports.dump = internal.dump;
/**
 * @since 2.0.0
 * @category destructors
 */
const dumpAll = exports.dumpAll = internal.dumpAll;
/**
 * A fiber that has already failed with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = internal.fail;
/**
 * Creates a `Fiber` that has already failed with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCause = exports.failCause = internal.failCause;
/**
 * Lifts an `Effect` into a `Fiber`.
 *
 * @since 2.0.0
 * @category conversions
 */
const fromEffect = exports.fromEffect = internal.fromEffect;
/**
 * Gets the current fiber if one is running.
 *
 * @since 2.0.0
 * @category utilities
 */
const getCurrentFiber = exports.getCurrentFiber = internal.getCurrentFiber;
/**
 * Inherits values from all `FiberRef` instances into current fiber. This
 * will resume immediately.
 *
 * @since 2.0.0
 * @category destructors
 */
const inheritAll = exports.inheritAll = internal.inheritAll;
/**
 * Interrupts the fiber from whichever fiber is calling this method. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
const interrupt = exports.interrupt = core.interruptFiber;
/**
 * Constructrs a `Fiber` that is already interrupted.
 *
 * @since 2.0.0
 * @category constructors
 */
const interrupted = exports.interrupted = internal.interrupted;
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
const interruptAs = exports.interruptAs = core.interruptAsFiber;
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
const interruptAsFork = exports.interruptAsFork = internal.interruptAsFork;
/**
 * Interrupts all fibers, awaiting their interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
const interruptAll = exports.interruptAll = internal.interruptAll;
/**
 * Interrupts all fibers as by the specified fiber, awaiting their
 * interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
const interruptAllAs = exports.interruptAllAs = internal.interruptAllAs;
/**
 * Interrupts the fiber from whichever fiber is calling this method. The
 * interruption will happen in a separate daemon fiber, and the returned
 * effect will always resume immediately without waiting.
 *
 * @since 2.0.0
 * @category interruption
 */
const interruptFork = exports.interruptFork = fiberRuntime.fiberInterruptFork;
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
const join = exports.join = internal.join;
/**
 * Joins all fibers, awaiting their _successful_ completion. Attempting to
 * join a fiber that has erred will result in a catchable error, _if_ that
 * error does not result from interruption.
 *
 * @since 2.0.0
 * @category destructors
 */
const joinAll = exports.joinAll = fiberRuntime.fiberJoinAll;
/**
 * Maps over the value the Fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
/**
 * Effectually maps over the value the fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapEffect = exports.mapEffect = internal.mapEffect;
/**
 * Passes the success of this fiber to the specified callback, and continues
 * with the fiber that it returns.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapFiber = exports.mapFiber = internal.mapFiber;
/**
 * Folds over the `Fiber` or `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category folding
 */
const match = exports.match = internal.match;
/**
 * A fiber that never fails or succeeds.
 *
 * @since 2.0.0
 * @category constructors
 */
const never = exports.never = internal.never;
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
const orElse = exports.orElse = internal.orElse;
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
const orElseEither = exports.orElseEither = internal.orElseEither;
/**
 * Tentatively observes the fiber, but returns immediately if it is not
 * already done.
 *
 * @since 2.0.0
 * @category getters
 */
const poll = exports.poll = internal.poll;
/**
 * Pretty-prints a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category destructors
 */
const pretty = exports.pretty = internal.pretty;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
const roots = exports.roots = internal.roots;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
const unsafeRoots = exports.unsafeRoots = internal.unsafeRoots;
/**
 * Converts this fiber into a scoped effect. The fiber is interrupted when the
 * scope is closed.
 *
 * @since 2.0.0
 * @category destructors
 */
const scoped = exports.scoped = fiberRuntime.fiberScoped;
/**
 * Returns the `FiberStatus` of a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category getters
 */
const status = exports.status = internal.status;
/**
 * Returns a fiber that has already succeeded with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = internal.succeed;
const void_ = exports.void = internal.void;
/**
 * Zips this fiber and the specified fiber together, producing a tuple of
 * their output.
 *
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = circular.zipFiber;
/**
 * Same as `zip` but discards the output of that `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipLeft = exports.zipLeft = circular.zipLeftFiber;
/**
 * Same as `zip` but discards the output of this `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipRight = exports.zipRight = circular.zipRightFiber;
/**
 * Zips this fiber with the specified fiber, combining their results using the
 * specified combiner function. Both joins and interruptions are performed in
 * sequential order from left to right.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWith = exports.zipWith = circular.zipWithFiber;
//# sourceMappingURL=Fiber.js.map