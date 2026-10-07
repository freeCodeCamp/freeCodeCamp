"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.versionMismatchErrorLogLevel = exports.updateSomeAndGet = exports.updateSome = exports.updateAndGet = exports.update = exports.unsafeMakeSupervisor = exports.unsafeMakePatch = exports.unsafeMakeHashSet = exports.unsafeMakeContext = exports.unsafeMake = exports.unhandledErrorLogLevel = exports.set = exports.reset = exports.modifySome = exports.modify = exports.makeWith = exports.makeRuntimeFlags = exports.makeContext = exports.make = exports.interruptedCause = exports.getWith = exports.getAndUpdateSome = exports.getAndUpdate = exports.getAndSet = exports.get = exports.delete = exports.currentTracerTimingEnabled = exports.currentTracerSpanLinks = exports.currentTracerSpanAnnotations = exports.currentTracerEnabled = exports.currentSupervisor = exports.currentSchedulingPriority = exports.currentScheduler = exports.currentRuntimeFlags = exports.currentRequestCacheEnabled = exports.currentRequestCache = exports.currentRequestBatchingEnabled = exports.currentMinimumLogLevel = exports.currentMetricLabels = exports.currentMaxOpsBeforeYield = exports.currentLoggers = exports.currentLogSpan = exports.currentLogLevel = exports.currentLogAnnotations = exports.currentContext = exports.currentConcurrency = exports.FiberRefTypeId = void 0;
var core = _interopRequireWildcard(require("./internal/core.js"));
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
var query = _interopRequireWildcard(require("./internal/query.js"));
var Scheduler = _interopRequireWildcard(require("./Scheduler.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const FiberRefTypeId = exports.FiberRefTypeId = core.FiberRefTypeId;
/**
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = fiberRuntime.fiberRefMake;
/**
 * @since 2.0.0
 * @category constructors
 */
const makeWith = exports.makeWith = fiberRuntime.fiberRefMakeWith;
/**
 * @since 2.0.0
 * @category constructors
 */
const makeContext = exports.makeContext = fiberRuntime.fiberRefMakeContext;
/**
 * @since 2.0.0
 * @category constructors
 */
const makeRuntimeFlags = exports.makeRuntimeFlags = fiberRuntime.fiberRefMakeRuntimeFlags;
/**
 * @since 2.0.0
 * @category constructors
 */
const unsafeMake = exports.unsafeMake = core.fiberRefUnsafeMake;
/**
 * @since 2.0.0
 * @category constructors
 */
const unsafeMakeHashSet = exports.unsafeMakeHashSet = core.fiberRefUnsafeMakeHashSet;
/**
 * @since 2.0.0
 * @category constructors
 */
const unsafeMakeContext = exports.unsafeMakeContext = core.fiberRefUnsafeMakeContext;
/**
 * @since 2.0.0
 * @category constructors
 */
const unsafeMakeSupervisor = exports.unsafeMakeSupervisor = fiberRuntime.fiberRefUnsafeMakeSupervisor;
/**
 * @since 2.0.0
 * @category constructors
 */
const unsafeMakePatch = exports.unsafeMakePatch = core.fiberRefUnsafeMakePatch;
/**
 * @since 2.0.0
 * @category getters
 */
const get = exports.get = core.fiberRefGet;
/**
 * @since 2.0.0
 * @category utils
 */
const getAndSet = exports.getAndSet = core.fiberRefGetAndSet;
/**
 * @since 2.0.0
 * @category utils
 */
const getAndUpdate = exports.getAndUpdate = core.fiberRefGetAndUpdate;
/**
 * @since 2.0.0
 * @category utils
 */
const getAndUpdateSome = exports.getAndUpdateSome = core.fiberRefGetAndUpdateSome;
/**
 * @since 2.0.0
 * @category utils
 */
const getWith = exports.getWith = core.fiberRefGetWith;
/**
 * @since 2.0.0
 * @category utils
 */
const set = exports.set = core.fiberRefSet;
const _delete = exports.delete = core.fiberRefDelete;
/**
 * @since 2.0.0
 * @category utils
 */
const reset = exports.reset = core.fiberRefReset;
/**
 * @since 2.0.0
 * @category utils
 */
const modify = exports.modify = core.fiberRefModify;
/**
 * @since 2.0.0
 * @category utils
 */
const modifySome = exports.modifySome = core.fiberRefModifySome;
/**
 * @since 2.0.0
 * @category utils
 */
const update = exports.update = core.fiberRefUpdate;
/**
 * @since 2.0.0
 * @category utils
 */
const updateSome = exports.updateSome = core.fiberRefUpdateSome;
/**
 * @since 2.0.0
 * @category utils
 */
const updateAndGet = exports.updateAndGet = core.fiberRefUpdateAndGet;
/**
 * @since 2.0.0
 * @category utils
 */
const updateSomeAndGet = exports.updateSomeAndGet = core.fiberRefUpdateSomeAndGet;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentConcurrency = exports.currentConcurrency = core.currentConcurrency;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentRequestBatchingEnabled = exports.currentRequestBatchingEnabled = core.currentRequestBatching;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentRequestCache = exports.currentRequestCache = query.currentCache;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentRequestCacheEnabled = exports.currentRequestCacheEnabled = query.currentCacheEnabled;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentContext = exports.currentContext = core.currentContext;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentSchedulingPriority = exports.currentSchedulingPriority = core.currentSchedulingPriority;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentMaxOpsBeforeYield = exports.currentMaxOpsBeforeYield = core.currentMaxOpsBeforeYield;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const unhandledErrorLogLevel = exports.unhandledErrorLogLevel = core.currentUnhandledErrorLogLevel;
/**
 * @since 3.17.0
 * @category fiberRefs
 */
const versionMismatchErrorLogLevel = exports.versionMismatchErrorLogLevel = core.currentVersionMismatchErrorLogLevel;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentLogAnnotations = exports.currentLogAnnotations = core.currentLogAnnotations;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentLoggers = exports.currentLoggers = fiberRuntime.currentLoggers;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentLogLevel = exports.currentLogLevel = core.currentLogLevel;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentMinimumLogLevel = exports.currentMinimumLogLevel = fiberRuntime.currentMinimumLogLevel;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentLogSpan = exports.currentLogSpan = core.currentLogSpan;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentRuntimeFlags = exports.currentRuntimeFlags = fiberRuntime.currentRuntimeFlags;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentScheduler = exports.currentScheduler = Scheduler.currentScheduler;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentSupervisor = exports.currentSupervisor = fiberRuntime.currentSupervisor;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentMetricLabels = exports.currentMetricLabels = core.currentMetricLabels;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentTracerEnabled = exports.currentTracerEnabled = core.currentTracerEnabled;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentTracerTimingEnabled = exports.currentTracerTimingEnabled = core.currentTracerTimingEnabled;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentTracerSpanAnnotations = exports.currentTracerSpanAnnotations = core.currentTracerSpanAnnotations;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const currentTracerSpanLinks = exports.currentTracerSpanLinks = core.currentTracerSpanLinks;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
const interruptedCause = exports.interruptedCause = core.currentInterruptedCause;
//# sourceMappingURL=FiberRef.js.map