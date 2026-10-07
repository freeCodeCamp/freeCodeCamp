import { getAsyncContextStrategy } from '../asyncContext/index.js';
import { getMainCarrier } from '../carrier.js';
import { getClient, getCurrentScope, hasExternalPropagationContext } from '../currentScopes.js';
import { isEnabled } from '../exports.js';
import { debug } from './debug-logger.js';
import { getActiveSpan, spanToTraceHeader, spanToTraceparentHeader } from './spanUtils.js';
import { getDynamicSamplingContextFromSpan, getDynamicSamplingContextFromScope } from '../tracing/dynamicSamplingContext.js';
import { dynamicSamplingContextToSentryBaggageHeader } from './baggage.js';
import { TRACEPARENT_REGEXP, generateSentryTraceHeader, generateTraceparentHeader } from './tracing.js';

function getTraceData(options = {}) {
  const client = options.client || getClient();
  if (!isEnabled() || !client) {
    return {};
  }
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getTraceData) {
    return acs.getTraceData(options);
  }
  const scope = options.scope || getCurrentScope();
  const span = options.span || getActiveSpan();
  if (!span && hasExternalPropagationContext()) {
    return {};
  }
  const sentryTrace = span ? spanToTraceHeader(span) : scopeToTraceHeader(scope);
  const dsc = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope);
  const baggage = dynamicSamplingContextToSentryBaggageHeader(dsc);
  const isValidSentryTraceHeader = TRACEPARENT_REGEXP.test(sentryTrace);
  if (!isValidSentryTraceHeader) {
    debug.warn("Invalid sentry-trace data. Cannot generate trace data");
    return {};
  }
  const traceData = {
    "sentry-trace": sentryTrace,
    baggage
  };
  if (options.propagateTraceparent) {
    traceData.traceparent = span ? spanToTraceparentHeader(span) : scopeToTraceparentHeader(scope);
  }
  return traceData;
}
function scopeToTraceHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return generateSentryTraceHeader(traceId, propagationSpanId, sampled);
}
function scopeToTraceparentHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return generateTraceparentHeader(traceId, propagationSpanId, sampled);
}

export { getTraceData };
//# sourceMappingURL=traceData.js.map
