"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeMake = exports.unsafeDone = exports.sync = exports.succeed = exports.poll = exports.makeAs = exports.make = exports.isDone = exports.interruptWith = exports.interrupt = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.done = exports.dieSync = exports.die = exports.completeWith = exports.complete = exports.await = exports.DeferredTypeId = void 0;
var core = _interopRequireWildcard(require("./internal/core.js"));
var internal = _interopRequireWildcard(require("./internal/deferred.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const DeferredTypeId = exports.DeferredTypeId = internal.DeferredTypeId;
/**
 * Creates a new `Deferred`.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = core.deferredMake;
/**
 * Creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
const makeAs = exports.makeAs = core.deferredMakeAs;
const _await = exports.await = core.deferredAwait;
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
const complete = exports.complete = core.deferredComplete;
/**
 * Completes the deferred with the result of the specified effect. If the
 * deferred has already been completed, the method will produce false.
 *
 * @since 2.0.0
 * @category utils
 */
const completeWith = exports.completeWith = core.deferredCompleteWith;
/**
 * Exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
const done = exports.done = core.deferredDone;
/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
const fail = exports.fail = core.deferredFail;
/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
const failSync = exports.failSync = core.deferredFailSync;
/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
const failCause = exports.failCause = core.deferredFailCause;
/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
const failCauseSync = exports.failCauseSync = core.deferredFailCauseSync;
/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
const die = exports.die = core.deferredDie;
/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
const dieSync = exports.dieSync = core.deferredDieSync;
/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the `FiberId` of the fiber
 * calling this method.
 *
 * @since 2.0.0
 * @category utils
 */
const interrupt = exports.interrupt = core.deferredInterrupt;
/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the specified `FiberId`.
 *
 * @since 2.0.0
 * @category utils
 */
const interruptWith = exports.interruptWith = core.deferredInterruptWith;
/**
 * Returns `true` if this `Deferred` has already been completed with a value or
 * an error, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isDone = exports.isDone = core.deferredIsDone;
/**
 * Returns a `Some<Effect<A, E, R>>` from the `Deferred` if this `Deferred` has
 * already been completed, `None` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const poll = exports.poll = core.deferredPoll;
/**
 * Completes the `Deferred` with the specified value.
 *
 * @since 2.0.0
 * @category utils
 */
const succeed = exports.succeed = core.deferredSucceed;
/**
 * Completes the `Deferred` with the specified lazily evaluated value.
 *
 * @since 2.0.0
 * @category utils
 */
const sync = exports.sync = core.deferredSync;
/**
 * Unsafely creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeMake = exports.unsafeMake = core.deferredUnsafeMake;
/**
 * Unsafely exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeDone = exports.unsafeDone = core.deferredUnsafeDone;
//# sourceMappingURL=Deferred.js.map