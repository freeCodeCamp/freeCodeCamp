Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const index = require('../asyncContext/index.js');
const carrier = require('../carrier.js');
const currentScopes = require('../currentScopes.js');
const exports$1 = require('../exports.js');
const debugLogger = require('./debug-logger.js');
const spanUtils = require('./spanUtils.js');
const dynamicSamplingContext = require('../tracing/dynamicSamplingContext.js');
const baggage = require('./baggage.js');
const tracing = require('./tracing.js');

function getTraceData(options = {}) {
  const client = options.client || currentScopes.getClient();
  if (!exports$1.isEnabled() || !client) {
    return {};
  }
  const carrier$1 = carrier.getMainCarrier();
  const acs = index.getAsyncContextStrategy(carrier$1);
  if (acs.getTraceData) {
    return acs.getTraceData(options);
  }
  const scope = options.scope || currentScopes.getCurrentScope();
  const span = options.span || spanUtils.getActiveSpan();
  if (!span && currentScopes.hasExternalPropagationContext()) {
    return {};
  }
  const sentryTrace = span ? spanUtils.spanToTraceHeader(span) : scopeToTraceHeader(scope);
  const dsc = span ? dynamicSamplingContext.getDynamicSamplingContextFromSpan(span) : dynamicSamplingContext.getDynamicSamplingContextFromScope(client, scope);
  const baggage$1 = baggage.dynamicSamplingContextToSentryBaggageHeader(dsc);
  const isValidSentryTraceHeader = tracing.TRACEPARENT_REGEXP.test(sentryTrace);
  if (!isValidSentryTraceHeader) {
    debugLogger.debug.warn("Invalid sentry-trace data. Cannot generate trace data");
    return {};
  }
  const traceData = {
    "sentry-trace": sentryTrace,
    baggage: baggage$1
  };
  if (options.propagateTraceparent) {
    traceData.traceparent = span ? spanUtils.spanToTraceparentHeader(span) : scopeToTraceparentHeader(scope);
  }
  return traceData;
}
function scopeToTraceHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return tracing.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
}
function scopeToTraceparentHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return tracing.generateTraceparentHeader(traceId, propagationSpanId, sampled);
}

exports.getTraceData = getTraceData;
//# sourceMappingURL=traceData.js.map
