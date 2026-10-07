Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');
const constants = require('./constants.js');

const SUPPORTED_VERSIONS = [">=3.0.0 <7"];
const INSTRUMENTED_METHODS = [
  "generateText",
  "streamText",
  "generateObject",
  "streamObject",
  "embed",
  "embedMany",
  "rerank"
];
function isToolError(obj) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  const candidate = obj;
  return "type" in candidate && "error" in candidate && "toolName" in candidate && "toolCallId" in candidate && candidate.type === "tool-error" && candidate.error instanceof Error;
}
function processToolCallResults(result) {
  if (typeof result !== "object" || result === null || !("content" in result)) {
    return;
  }
  const resultObj = result;
  if (!Array.isArray(resultObj.content)) {
    return;
  }
  captureToolErrors(resultObj.content);
  cleanupToolCallSpanContexts(resultObj.content);
}
function captureToolErrors(content) {
  for (const item of content) {
    if (!isToolError(item)) {
      continue;
    }
    const spanContext = core._INTERNAL_getSpanContextForToolCallId(item.toolCallId);
    if (spanContext) {
      core.withScope((scope) => {
        scope.setContext("trace", {
          trace_id: spanContext.traceId,
          span_id: spanContext.spanId
        });
        scope.setTag("vercel.ai.tool.name", item.toolName);
        scope.setTag("vercel.ai.tool.callId", item.toolCallId);
        scope.setLevel("error");
        core.captureException(item.error, {
          mechanism: {
            type: "auto.vercelai.otel",
            handled: false
          }
        });
      });
    } else {
      core.withScope((scope) => {
        scope.setTag("vercel.ai.tool.name", item.toolName);
        scope.setTag("vercel.ai.tool.callId", item.toolCallId);
        scope.setLevel("error");
        core.captureException(item.error, {
          mechanism: {
            type: "auto.vercelai.otel",
            handled: false
          }
        });
      });
    }
  }
}
function cleanupToolCallSpanContexts(content) {
  for (const item of content) {
    if (typeof item === "object" && item !== null && "toolCallId" in item && typeof item.toolCallId === "string") {
      core._INTERNAL_cleanupToolCallSpanContext(item.toolCallId);
    }
  }
}
function determineRecordingSettings(integrationRecordingOptions, methodTelemetryOptions, telemetryExplicitlyEnabled, defaultRecordingEnabled) {
  const recordInputs = integrationRecordingOptions?.recordInputs !== void 0 ? integrationRecordingOptions.recordInputs : methodTelemetryOptions.recordInputs !== void 0 ? methodTelemetryOptions.recordInputs : telemetryExplicitlyEnabled === true ? true : defaultRecordingEnabled;
  const recordOutputs = integrationRecordingOptions?.recordOutputs !== void 0 ? integrationRecordingOptions.recordOutputs : methodTelemetryOptions.recordOutputs !== void 0 ? methodTelemetryOptions.recordOutputs : telemetryExplicitlyEnabled === true ? true : defaultRecordingEnabled;
  return { recordInputs, recordOutputs };
}
class SentryVercelAiInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super("@sentry/instrumentation-vercel-ai", core.SDK_VERSION, config);
    this._isPatched = false;
    this._callbacks = [];
  }
  /**
   * Initializes the instrumentation by defining the modules to be patched.
   */
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition("ai", SUPPORTED_VERSIONS, this._patch.bind(this));
    return module;
  }
  /**
   * Call the provided callback when the module is patched.
   * If it has already been patched, the callback will be called immediately.
   */
  callWhenPatched(callback) {
    if (this._isPatched) {
      callback();
    } else {
      this._callbacks.push(callback);
    }
  }
  /**
   * Patches module exports to enable Vercel AI telemetry.
   */
  _patch(moduleExports) {
    this._isPatched = true;
    this._callbacks.forEach((callback) => callback());
    this._callbacks = [];
    const generatePatch = (originalMethod) => {
      return new Proxy(originalMethod, {
        apply: (target, thisArg, args) => {
          const existingExperimentalTelemetry = args[0].experimental_telemetry || {};
          const isEnabled = existingExperimentalTelemetry.isEnabled;
          const client = core.getClient();
          const integration = client?.getIntegrationByName(constants.INTEGRATION_NAME);
          const integrationOptions = integration?.options;
          const shouldRecordInputsAndOutputs = integration ? Boolean(client?.getOptions().sendDefaultPii) : false;
          const { recordInputs, recordOutputs } = determineRecordingSettings(
            integrationOptions,
            existingExperimentalTelemetry,
            isEnabled,
            shouldRecordInputsAndOutputs
          );
          args[0].experimental_telemetry = {
            ...existingExperimentalTelemetry,
            isEnabled: isEnabled !== void 0 ? isEnabled : true,
            recordInputs,
            recordOutputs
          };
          return core.handleCallbackErrors(
            () => Reflect.apply(target, thisArg, args),
            (error) => {
              if (error && typeof error === "object") {
                core.addNonEnumerableProperty(error, "_sentry_active_span", core.getActiveSpan());
              }
            },
            () => {
            },
            (result) => {
              processToolCallResults(result);
            }
          );
        }
      });
    };
    if (Object.prototype.toString.call(moduleExports) === "[object Module]") {
      for (const method of INSTRUMENTED_METHODS) {
        if (moduleExports[method] != null) {
          moduleExports[method] = generatePatch(moduleExports[method]);
        }
      }
      return moduleExports;
    } else {
      const patchedModuleExports = INSTRUMENTED_METHODS.reduce((acc, curr) => {
        if (moduleExports[curr] != null) {
          acc[curr] = generatePatch(moduleExports[curr]);
        }
        return acc;
      }, {});
      return { ...moduleExports, ...patchedModuleExports };
    }
  }
}

exports.SentryVercelAiInstrumentation = SentryVercelAiInstrumentation;
exports.cleanupToolCallSpanContexts = cleanupToolCallSpanContexts;
exports.determineRecordingSettings = determineRecordingSettings;
exports.processToolCallResults = processToolCallResults;
//# sourceMappingURL=instrumentation.js.map
