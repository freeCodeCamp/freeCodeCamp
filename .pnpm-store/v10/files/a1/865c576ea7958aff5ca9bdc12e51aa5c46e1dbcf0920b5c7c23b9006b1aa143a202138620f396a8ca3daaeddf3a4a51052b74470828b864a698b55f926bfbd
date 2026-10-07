import * as Context from "../../Context.js";
import { dual } from "../../Function.js";
import * as HashSet from "../../HashSet.js";
import * as core from "../core.js";
import * as fiberRuntime from "../fiberRuntime.js";
import * as layer from "../layer.js";
import * as runtimeFlags from "../runtimeFlags.js";
import * as runtimeFlagsPatch from "../runtimeFlagsPatch.js";
import * as supervisor_ from "../supervisor.js";
import * as tracer from "../tracer.js";
// circular with Logger
/** @internal */
export const minimumLogLevel = level => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScoped(fiberRuntime.currentMinimumLogLevel, level));
/** @internal */
export const withMinimumLogLevel = /*#__PURE__*/dual(2, (self, level) => core.fiberRefLocally(fiberRuntime.currentMinimumLogLevel, level)(self));
/** @internal */
export const addLogger = logger => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentLoggers, HashSet.add(logger)));
/** @internal */
export const addLoggerEffect = effect => layer.unwrapEffect(core.map(effect, addLogger));
/** @internal */
export const addLoggerScoped = effect => layer.unwrapScoped(core.map(effect, addLogger));
/** @internal */
export const removeLogger = logger => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentLoggers, HashSet.remove(logger)));
/** @internal */
export const replaceLogger = /*#__PURE__*/dual(2, (self, that) => layer.flatMap(removeLogger(self), () => addLogger(that)));
/** @internal */
export const replaceLoggerEffect = /*#__PURE__*/dual(2, (self, that) => layer.flatMap(removeLogger(self), () => addLoggerEffect(that)));
/** @internal */
export const replaceLoggerScoped = /*#__PURE__*/dual(2, (self, that) => layer.flatMap(removeLogger(self), () => addLoggerScoped(that)));
/** @internal */
export const addSupervisor = supervisor => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentSupervisor, current => new supervisor_.Zip(current, supervisor)));
/** @internal */
export const enableCooperativeYielding = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.CooperativeYielding)));
/** @internal */
export const enableInterruption = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.Interruption)));
/** @internal */
export const enableOpSupervision = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.OpSupervision)));
/** @internal */
export const enableRuntimeMetrics = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.RuntimeMetrics)));
/** @internal */
export const enableWindDown = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.enable(runtimeFlags.WindDown)));
/** @internal */
export const disableCooperativeYielding = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.CooperativeYielding)));
/** @internal */
export const disableInterruption = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.Interruption)));
/** @internal */
export const disableOpSupervision = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.OpSupervision)));
/** @internal */
export const disableRuntimeMetrics = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.RuntimeMetrics)));
/** @internal */
export const disableWindDown = /*#__PURE__*/layer.scopedDiscard(/*#__PURE__*/fiberRuntime.withRuntimeFlagsScoped(/*#__PURE__*/runtimeFlagsPatch.disable(runtimeFlags.WindDown)));
/** @internal */
export const setConfigProvider = configProvider => layer.scopedDiscard(fiberRuntime.withConfigProviderScoped(configProvider));
/** @internal */
export const parentSpan = span => layer.succeedContext(Context.make(tracer.spanTag, span));
/** @internal */
export const span = (name, options) => {
  options = tracer.addSpanStackTrace(options);
  return layer.scoped(tracer.spanTag, options?.onEnd ? core.tap(fiberRuntime.makeSpanScoped(name, options), span => fiberRuntime.addFinalizer(exit => options.onEnd(span, exit))) : fiberRuntime.makeSpanScoped(name, options));
};
/** @internal */
export const setTracer = tracer => layer.scopedDiscard(fiberRuntime.withTracerScoped(tracer));
//# sourceMappingURL=circular.js.map