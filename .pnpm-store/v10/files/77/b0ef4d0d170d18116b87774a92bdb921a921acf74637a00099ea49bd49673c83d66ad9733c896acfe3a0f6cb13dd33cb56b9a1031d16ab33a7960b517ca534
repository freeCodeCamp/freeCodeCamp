Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const index = require('../asyncContext/index.js');
const carrier = require('../carrier.js');
const currentScopes = require('../currentScopes.js');
const debugBuild = require('../debug-build.js');
const semanticAttributes = require('../semanticAttributes.js');
const baggage = require('../utils/baggage.js');
const debugLogger = require('../utils/debug-logger.js');
const handleCallbackErrors = require('../utils/handleCallbackErrors.js');
const hasSpansEnabled = require('../utils/hasSpansEnabled.js');
const shouldIgnoreSpan = require('../utils/should-ignore-span.js');
const hasSpanStreamingEnabled = require('./spans/hasSpanStreamingEnabled.js');
const parseSampleRate = require('../utils/parseSampleRate.js');
const propagationContext = require('../utils/propagationContext.js');
const randomSafeContext = require('../utils/randomSafeContext.js');
const spanOnScope = require('../utils/spanOnScope.js');
const spanUtils = require('../utils/spanUtils.js');
const tracing = require('../utils/tracing.js');
const dynamicSamplingContext = require('./dynamicSamplingContext.js');
const logSpans = require('./logSpans.js');
const sampling = require('./sampling.js');
const sentryNonRecordingSpan = require('./sentryNonRecordingSpan.js');
const sentrySpan = require('./sentrySpan.js');
const spanstatus = require('./spanstatus.js');
const utils = require('./utils.js');

const SUPPRESS_TRACING_KEY = "__SENTRY_SUPPRESS_TRACING__";
function startSpan(options, callback) {
  const acs = getAcs();
  if (acs.startSpan) {
    return acs.startSpan(options, callback);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;
  const customForkedScope = customScope?.clone();
  return currentScopes.withScope(customForkedScope, () => {
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(() => {
      const scope = currentScopes.getCurrentScope();
      const parentSpan = getParentSpan(scope, customParentSpan);
      const client = currentScopes.getClient();
      const missingRequiredParent = options.onlyIfParent && !parentSpan;
      const activeSpan = missingRequiredParent ? new sentryNonRecordingSpan.SentryNonRecordingSpan() : createChildOrRootSpan({
        parentSpan,
        spanArguments,
        forceTransaction,
        scope
      });
      if (missingRequiredParent) {
        client?.recordDroppedEvent("no_parent_span", "span");
      }
      if (!_isIgnoredSpan(activeSpan) || !parentSpan) {
        spanOnScope._setSpanForScope(scope, activeSpan);
      }
      return handleCallbackErrors.handleCallbackErrors(
        () => callback(activeSpan),
        () => {
          const { status } = spanUtils.spanToJSON(activeSpan);
          if (activeSpan.isRecording() && (!status || status === "ok")) {
            activeSpan.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
          }
        },
        () => {
          activeSpan.end();
        }
      );
    });
  });
}
function startSpanManual(options, callback) {
  const acs = getAcs();
  if (acs.startSpanManual) {
    return acs.startSpanManual(options, callback);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;
  const customForkedScope = customScope?.clone();
  return currentScopes.withScope(customForkedScope, () => {
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(() => {
      const scope = currentScopes.getCurrentScope();
      const parentSpan = getParentSpan(scope, customParentSpan);
      const missingRequiredParent = options.onlyIfParent && !parentSpan;
      const activeSpan = missingRequiredParent ? new sentryNonRecordingSpan.SentryNonRecordingSpan() : createChildOrRootSpan({
        parentSpan,
        spanArguments,
        forceTransaction,
        scope
      });
      if (missingRequiredParent) {
        currentScopes.getClient()?.recordDroppedEvent("no_parent_span", "span");
      }
      if (!_isIgnoredSpan(activeSpan) || !parentSpan) {
        spanOnScope._setSpanForScope(scope, activeSpan);
      }
      return handleCallbackErrors.handleCallbackErrors(
        // We pass the `finish` function to the callback, so the user can finish the span manually
        // this is mainly here for historic purposes because previously, we instructed users to call
        // `finish` instead of `span.end()` to also clean up the scope. Nowadays, calling `span.end()`
        // or `finish` has the same effect and we simply leave it here to avoid breaking user code.
        () => callback(activeSpan, () => activeSpan.end()),
        () => {
          const { status } = spanUtils.spanToJSON(activeSpan);
          if (activeSpan.isRecording() && (!status || status === "ok")) {
            activeSpan.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
          }
        }
      );
    });
  });
}
function startInactiveSpan(options) {
  const acs = getAcs();
  if (acs.startInactiveSpan) {
    return acs.startInactiveSpan(options);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan } = options;
  const wrapper = options.scope ? (callback) => currentScopes.withScope(options.scope, callback) : customParentSpan !== void 0 ? (callback) => withActiveSpan(customParentSpan, callback) : (callback) => callback();
  return wrapper(() => {
    const scope = currentScopes.getCurrentScope();
    const parentSpan = getParentSpan(scope, customParentSpan);
    const client = currentScopes.getClient();
    const missingRequiredParent = options.onlyIfParent && !parentSpan;
    if (missingRequiredParent) {
      client?.recordDroppedEvent("no_parent_span", "span");
      return new sentryNonRecordingSpan.SentryNonRecordingSpan();
    }
    return createChildOrRootSpan({
      parentSpan,
      spanArguments,
      forceTransaction,
      scope
    });
  });
}
const continueTrace = (options, callback) => {
  const carrier$1 = carrier.getMainCarrier();
  const acs = index.getAsyncContextStrategy(carrier$1);
  if (acs.continueTrace) {
    return acs.continueTrace(options, callback);
  }
  const { sentryTrace, baggage: baggage$1 } = options;
  const client = currentScopes.getClient();
  const incomingDsc = baggage.baggageHeaderToDynamicSamplingContext(baggage$1);
  if (client && !tracing.shouldContinueTrace(client, incomingDsc?.org_id)) {
    return startNewTrace(callback);
  }
  return currentScopes.withScope((scope) => {
    const propagationContext = tracing.propagationContextFromHeaders(sentryTrace, baggage$1);
    scope.setPropagationContext(propagationContext);
    spanOnScope._setSpanForScope(scope, void 0);
    return callback();
  });
};
function withActiveSpan(span, callback) {
  const acs = getAcs();
  if (acs.withActiveSpan) {
    return acs.withActiveSpan(span, callback);
  }
  return currentScopes.withScope((scope) => {
    spanOnScope._setSpanForScope(scope, span || void 0);
    return callback(scope);
  });
}
function suppressTracing(callback) {
  const acs = getAcs();
  if (acs.suppressTracing) {
    return acs.suppressTracing(callback);
  }
  return currentScopes.withScope((scope) => {
    scope.setSDKProcessingMetadata({ [SUPPRESS_TRACING_KEY]: true });
    const res = callback();
    scope.setSDKProcessingMetadata({ [SUPPRESS_TRACING_KEY]: void 0 });
    return res;
  });
}
function startNewTrace(callback) {
  const acs = getAcs();
  if (acs.startNewTrace) {
    return acs.startNewTrace(callback);
  }
  return currentScopes.withScope((scope) => {
    scope.setPropagationContext({
      traceId: propagationContext.generateTraceId(),
      sampleRand: randomSafeContext.safeMathRandom()
    });
    debugBuild.DEBUG_BUILD && debugLogger.debug.log(`Starting a new trace with id ${scope.getPropagationContext().traceId}`);
    return withActiveSpan(null, callback);
  });
}
function createChildOrRootSpan({
  parentSpan,
  spanArguments,
  forceTransaction,
  scope
}) {
  if (!hasSpansEnabled.hasSpansEnabled()) {
    const span2 = new sentryNonRecordingSpan.SentryNonRecordingSpan();
    if (forceTransaction || !parentSpan) {
      const dsc = {
        sampled: "false",
        sample_rate: "0",
        transaction: spanArguments.name,
        ...dynamicSamplingContext.getDynamicSamplingContextFromSpan(span2)
      };
      dynamicSamplingContext.freezeDscOnSpan(span2, dsc);
    }
    return span2;
  }
  const client = currentScopes.getClient();
  if (_shouldIgnoreStreamedSpan(client, spanArguments)) {
    if (!_isTracingSuppressed(scope)) {
      client?.recordDroppedEvent("ignored", "span");
    }
    return new sentryNonRecordingSpan.SentryNonRecordingSpan({
      dropReason: "ignored",
      traceId: parentSpan?.spanContext().traceId ?? scope.getPropagationContext().traceId
    });
  }
  const isolationScope = currentScopes.getIsolationScope();
  let span;
  if (parentSpan && !forceTransaction) {
    span = _startChildSpan(parentSpan, scope, spanArguments);
    spanUtils.addChildSpanToSpan(parentSpan, span);
  } else if (parentSpan) {
    const dsc = dynamicSamplingContext.getDynamicSamplingContextFromSpan(parentSpan);
    const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
    const parentSampled = spanUtils.spanIsSampled(parentSpan);
    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments
      },
      scope,
      parentSampled
    );
    dynamicSamplingContext.freezeDscOnSpan(span, dsc);
  } else {
    const {
      traceId,
      dsc,
      parentSpanId,
      sampled: parentSampled
    } = {
      ...isolationScope.getPropagationContext(),
      ...scope.getPropagationContext()
    };
    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments
      },
      scope,
      parentSampled
    );
    if (dsc) {
      dynamicSamplingContext.freezeDscOnSpan(span, dsc);
    }
  }
  logSpans.logSpanStart(span);
  utils.setCapturedScopesOnSpan(span, scope, isolationScope);
  return span;
}
function parseSentrySpanArguments(options) {
  const exp = options.experimental || {};
  const initialCtx = {
    isStandalone: exp.standalone,
    ...options
  };
  if (options.startTime) {
    const ctx = { ...initialCtx };
    ctx.startTimestamp = spanUtils.spanTimeInputToSeconds(options.startTime);
    delete ctx.startTime;
    return ctx;
  }
  return initialCtx;
}
function getAcs() {
  const carrier$1 = carrier.getMainCarrier();
  return index.getAsyncContextStrategy(carrier$1);
}
function _startRootSpan(spanArguments, scope, parentSampled) {
  const client = currentScopes.getClient();
  const options = client?.getOptions() || {};
  const { name = "" } = spanArguments;
  const mutableSpanSamplingData = { spanAttributes: { ...spanArguments.attributes }, spanName: name, parentSampled };
  client?.emit("beforeSampling", mutableSpanSamplingData, { decision: false });
  const finalParentSampled = mutableSpanSamplingData.parentSampled ?? parentSampled;
  const finalAttributes = mutableSpanSamplingData.spanAttributes;
  const currentPropagationContext = scope.getPropagationContext();
  const isTracingSuppressed = _isTracingSuppressed(scope);
  const [sampled, sampleRate, localSampleRateWasApplied] = isTracingSuppressed ? [false] : sampling.sampleSpan(
    options,
    {
      name,
      parentSampled: finalParentSampled,
      attributes: finalAttributes,
      parentSampleRate: parseSampleRate.parseSampleRate(currentPropagationContext.dsc?.sample_rate)
    },
    currentPropagationContext.sampleRand
  );
  const rootSpan = new sentrySpan.SentrySpan({
    ...spanArguments,
    attributes: {
      [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
      [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate !== void 0 && localSampleRateWasApplied ? sampleRate : void 0,
      ...finalAttributes
    },
    sampled
  });
  if (!sampled && client && !isTracingSuppressed) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
    client.recordDroppedEvent("sample_rate", hasSpanStreamingEnabled.hasSpanStreamingEnabled(client) ? "span" : "transaction");
  }
  if (client) {
    client.emit("spanStart", rootSpan);
  }
  return rootSpan;
}
function _startChildSpan(parentSpan, scope, spanArguments) {
  const { spanId, traceId } = parentSpan.spanContext();
  const isTracingSuppressed = _isTracingSuppressed(scope);
  const sampled = isTracingSuppressed ? false : spanUtils.spanIsSampled(parentSpan);
  const childSpan = sampled ? new sentrySpan.SentrySpan({
    ...spanArguments,
    parentSpanId: spanId,
    traceId,
    sampled
  }) : new sentryNonRecordingSpan.SentryNonRecordingSpan({ traceId });
  spanUtils.addChildSpanToSpan(parentSpan, childSpan);
  const client = currentScopes.getClient();
  if (!client) {
    return childSpan;
  }
  if (hasSpanStreamingEnabled.hasSpanStreamingEnabled(client) && childSpan instanceof sentryNonRecordingSpan.SentryNonRecordingSpan) {
    if (parentSpan instanceof sentryNonRecordingSpan.SentryNonRecordingSpan && parentSpan.dropReason) {
      childSpan.dropReason = parentSpan.dropReason;
      client.recordDroppedEvent(parentSpan.dropReason, "span");
    } else if (!isTracingSuppressed) {
      childSpan.dropReason = "sample_rate";
      client.recordDroppedEvent("sample_rate", "span");
    }
  }
  client.emit("spanStart", childSpan);
  if (spanArguments.endTimestamp) {
    client.emit("spanEnd", childSpan);
    client.emit("afterSpanEnd", childSpan);
  }
  return childSpan;
}
function getParentSpan(scope, customParentSpan) {
  if (customParentSpan) {
    return customParentSpan;
  }
  if (customParentSpan === null) {
    return void 0;
  }
  const span = spanOnScope._getSpanForScope(scope);
  if (!span) {
    return void 0;
  }
  const client = currentScopes.getClient();
  const options = client ? client.getOptions() : {};
  if (options.parentSpanIsAlwaysRootSpan) {
    return spanUtils.getRootSpan(span);
  }
  return span;
}
function getActiveSpanWrapper(parentSpan) {
  return parentSpan !== void 0 ? (callback) => {
    return withActiveSpan(parentSpan, callback);
  } : (callback) => callback();
}
function _shouldIgnoreStreamedSpan(client, spanArguments) {
  const ignoreSpans = client?.getOptions().ignoreSpans;
  if (!client || !hasSpanStreamingEnabled.hasSpanStreamingEnabled(client) || !ignoreSpans?.length) {
    return false;
  }
  return shouldIgnoreSpan.shouldIgnoreSpan(
    {
      description: spanArguments.name || "",
      op: spanArguments.attributes?.[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP] || spanArguments.op,
      attributes: spanArguments.attributes
    },
    ignoreSpans
  );
}
function _isIgnoredSpan(span) {
  return span instanceof sentryNonRecordingSpan.SentryNonRecordingSpan && span.dropReason === "ignored";
}
function _isTracingSuppressed(scope) {
  return scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] === true;
}

exports.SUPPRESS_TRACING_KEY = SUPPRESS_TRACING_KEY;
exports.continueTrace = continueTrace;
exports.startInactiveSpan = startInactiveSpan;
exports.startNewTrace = startNewTrace;
exports.startSpan = startSpan;
exports.startSpanManual = startSpanManual;
exports.suppressTracing = suppressTracing;
exports.withActiveSpan = withActiveSpan;
//# sourceMappingURL=trace.js.map
