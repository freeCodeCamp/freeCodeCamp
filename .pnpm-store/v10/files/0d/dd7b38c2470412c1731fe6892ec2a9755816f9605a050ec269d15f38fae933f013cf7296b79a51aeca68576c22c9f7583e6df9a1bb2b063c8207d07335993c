"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMinimumLogLevel = exports.span = exports.setTracer = exports.setConfigProvider = exports.replaceLoggerScoped = exports.replaceLoggerEffect = exports.replaceLogger = exports.removeLogger = exports.parentSpan = exports.minimumLogLevel = exports.enableWindDown = exports.enableRuntimeMetrics = exports.enableOpSupervision = exports.enableInterruption = exports.enableCooperativeYielding = exports.disableWindDown = exports.disableRuntimeMetrics = exports.disableOpSupervision = exports.disableInterruption = exports.disableCooperativeYielding = exports.addSupervisor = exports.addLoggerScoped = exports.addLoggerEffect = exports.addLogger = void 0;
var Context = _interopRequireWildcard(require("../../Context.js"));
var _Function = require("../../Function.js");
var HashSet = _interopRequireWildcard(require("../../HashSet.js"));
var core = _interopRequireWildcard(require("../core.js"));
var fiberRuntime = _interopRequireWildcard(require("../fiberRuntime.js"));
var layer = _interopRequireWildcard(require("../layer.js"));
var runtimeFlags = _interopRequireWildcard(require("../runtimeFlags.js"));
var runtimeFlagsPatch = _interopRequireWildcard(require("../runtimeFlagsPatch.js"));
var supervisor_ = _interopRequireWildcard(require("../supervisor.js"));
var tracer = _interopRequireWildcard(require("../tracer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// circular with Logger
/** @internal */
const minimumLogLevel = level => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScoped(fiberRuntime.currentMinimumLogLevel, level));
/** @internal */
exports.minimumLogLevel = minimumLogLevel;
const withMinimumLogLevel = exports.withMinimumLogLevel = /*#__PURE__*/(0, _Function.dual)(2, (self, level) => core.fiberRefLocally(fiberRuntime.currentMinimumLogLevel, level)(self));
/** @internal */
const addLogger = logger => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentLoggers, HashSet.add(logger)));
/** @internal */
exports.addLogger = addLogger;
const addLoggerEffect = effect => layer.unwrapEffect(core.map(effect, addLogger));
/** @internal */
exports.addLoggerEffect = addLoggerEffect;
const addLoggerScoped = effect => layer.unwrapScoped(core.map(effect, addLogger));
/** @internal */
exports.addLoggerScoped = addLoggerScoped;
const removeLogger = logger => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentLoggers, HashSet.remove(logger)));
/** @internal */
exports.removeLogger = removeLogger;
const replaceLogger = exports.replaceLogger = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => layer.flatMap(removeLogger(self), () => addLogger(that)));
/** @internal */
const replaceLoggerEffect = exports.replaceLoggerEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => layer.flatMap(removeLogger(self), () => addLoggerEffect(that)));
/** @internal */
const replaceLoggerScoped = exports.replaceLoggerScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => layer.flatMap(removeLogger(self), () => addLoggerScoped(that)));
/** @internal */
const addSupervisor = supervisor => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentSupervisor, current => new supervisor_.Zip(current, supervisor)));
/** @internal */
exports.addSupervisor = addSupervisor;
const enableCooperativeYielding = exports.enableCooperativeYielding = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.CooperativeYielding)));
/** @internal */
const enableInterruption = exports.enableInterruption = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.Interruption)));
/** @internal */
const enableOpSupervision = exports.enableOpSupervision = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.OpSupervision)));
/** @internal */
const enableRuntimeMetrics = exports.enableRuntimeMetrics = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.RuntimeMetrics)));
/** @internal */
const enableWindDown = exports.enableWindDown = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.WindDown)));
/** @internal */
const disableCooperativeYielding = exports.disableCooperativeYielding = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.CooperativeYielding)));
/** @internal */
const disableInterruption = exports.disableInterruption = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.Interruption)));
/** @internal */
const disableOpSupervision = exports.disableOpSupervision = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.OpSupervision)));
/** @internal */
const disableRuntimeMetrics = exports.disableRuntimeMetrics = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.RuntimeMetrics)));
/** @internal */
const disableWindDown = exports.disableWindDown = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.WindDown)));
/** @internal */
const setConfigProvider = configProvider => layer.scopedDiscard(fiberRuntime.withConfigProviderScoped(configProvider));
/** @internal */
exports.setConfigProvider = setConfigProvider;
const parentSpan = span => layer.succeedContext(Context.make(tracer.spanTag, span));
/** @internal */
exports.parentSpan = parentSpan;
const span = (name, options) => {
  options = tracer.addSpanStackTrace(options);
  return layer.scoped(tracer.spanTag, options?.onEnd ? core.tap(fiberRuntime.makeSpanScoped(name, options), span => fiberRuntime.addFinalizer(exit => options.onEnd(span, exit))) : fiberRuntime.makeSpanScoped(name, options));
};
/** @internal */
exports.span = span;
const setTracer = tracer => layer.scopedDiscard(fiberRuntime.withTracerScoped(tracer));
exports.setTracer = setTracer;
//# sourceMappingURL=circular.js.map