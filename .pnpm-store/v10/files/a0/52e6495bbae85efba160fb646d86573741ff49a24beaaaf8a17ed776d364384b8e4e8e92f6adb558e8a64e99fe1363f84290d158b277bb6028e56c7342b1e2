"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRuntimeFlags = exports.updateFiberRefs = exports.updateContext = exports.setFiberRef = exports.runSyncExit = exports.runSync = exports.runPromiseExit = exports.runPromise = exports.runFork = exports.runCallback = exports.provideService = exports.makeFiberFailure = exports.make = exports.isFiberFailure = exports.isAsyncFiberException = exports.enableRuntimeFlag = exports.disableRuntimeFlag = exports.deleteFiberRef = exports.defaultRuntimeFlags = exports.defaultRuntime = exports.FiberFailureId = exports.FiberFailureCauseId = void 0;
var internal = _interopRequireWildcard(require("./internal/runtime.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Executes the effect using the provided Scheduler or using the global
 * Scheduler if not provided
 *
 * @since 2.0.0
 * @category execution
 */
const runFork = exports.runFork = internal.unsafeFork;
/**
 * Executes the effect synchronously returning the exit.
 *
 * This method is effectful and should only be invoked at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
const runSyncExit = exports.runSyncExit = internal.unsafeRunSyncExit;
/**
 * Executes the effect synchronously throwing in case of errors or async boundaries.
 *
 * This method is effectful and should only be invoked at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
const runSync = exports.runSync = internal.unsafeRunSync;
/**
 * Executes the effect asynchronously, eventually passing the exit value to
 * the specified callback.
 *
 * This method is effectful and should only be invoked at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
const runCallback = exports.runCallback = internal.unsafeRunCallback;
/**
 * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
 * with the value of the effect once the effect has been executed, or will be
 * rejected with the first error or exception throw by the effect.
 *
 * This method is effectful and should only be used at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
const runPromise = exports.runPromise = internal.unsafeRunPromise;
/**
 * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
 * with the `Exit` state of the effect once the effect has been executed.
 *
 * This method is effectful and should only be used at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
const runPromiseExit = exports.runPromiseExit = internal.unsafeRunPromiseExit;
/**
 * @since 2.0.0
 * @category constructors
 */
const defaultRuntime = exports.defaultRuntime = internal.defaultRuntime;
/**
 * @since 2.0.0
 * @category constructors
 */
const defaultRuntimeFlags = exports.defaultRuntimeFlags = internal.defaultRuntimeFlags;
/**
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * @since 2.0.0
 * @category symbols
 */
const FiberFailureId = exports.FiberFailureId = /*#__PURE__*/Symbol.for("effect/Runtime/FiberFailure");
/**
 * @since 2.0.0
 * @category symbols
 */
const FiberFailureCauseId = exports.FiberFailureCauseId = internal.FiberFailureCauseId;
/**
 * @since 2.0.0
 * @category guards
 */
const isAsyncFiberException = exports.isAsyncFiberException = internal.isAsyncFiberException;
/**
 * @since 2.0.0
 * @category guards
 */
const isFiberFailure = exports.isFiberFailure = internal.isFiberFailure;
/**
 * @since 2.0.0
 * @category constructors
 */
const makeFiberFailure = exports.makeFiberFailure = internal.fiberFailure;
/**
 * @since 2.0.0
 * @category runtime flags
 */
const updateRuntimeFlags = exports.updateRuntimeFlags = internal.updateRuntimeFlags;
/**
 * @since 2.0.0
 * @category runtime flags
 */
const enableRuntimeFlag = exports.enableRuntimeFlag = internal.enableRuntimeFlag;
/**
 * @since 2.0.0
 * @category runtime flags
 */
const disableRuntimeFlag = exports.disableRuntimeFlag = internal.disableRuntimeFlag;
/**
 * @since 2.0.0
 * @category context
 */
const updateContext = exports.updateContext = internal.updateContext;
/**
 * @since 2.0.0
 * @category context
 * @example
 * ```ts
 * import { Context, Runtime } from "effect"
 *
 * class Name extends Context.Tag("Name")<Name, string>() {}
 *
 * const runtime: Runtime.Runtime<Name> = Runtime.defaultRuntime.pipe(
 *   Runtime.provideService(Name, "John")
 * )
 * ```
 */
const provideService = exports.provideService = internal.provideService;
/**
 * @since 2.0.0
 * @category fiber refs
 */
const updateFiberRefs = exports.updateFiberRefs = internal.updateFiberRefs;
/**
 * @since 2.0.0
 * @category fiber refs
 * @example
 * ```ts
 * import { Effect, FiberRef, Runtime } from "effect"
 *
 * const ref = FiberRef.unsafeMake(0)
 *
 * const updatedRuntime = Runtime.defaultRuntime.pipe(
 *   Runtime.setFiberRef(ref, 1)
 * )
 *
 * // returns 1
 * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
 * ```
 */
const setFiberRef = exports.setFiberRef = internal.setFiberRef;
/**
 * @since 2.0.0
 * @category fiber refs
 * @example
 * ```ts
 * import { Effect, FiberRef, Runtime } from "effect"
 *
 * const ref = FiberRef.unsafeMake(0)
 *
 * const updatedRuntime = Runtime.defaultRuntime.pipe(
 *   Runtime.setFiberRef(ref, 1),
 *   Runtime.deleteFiberRef(ref)
 * )
 *
 * // returns 0
 * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
 * ```
 */
const deleteFiberRef = exports.deleteFiberRef = internal.deleteFiberRef;
//# sourceMappingURL=Runtime.js.map