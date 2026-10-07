Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const constants = require('../constants.js');
const currentScopes = require('../currentScopes.js');
const semanticAttributes = require('../semanticAttributes.js');
const baggage = require('../utils/baggage.js');
const dsn = require('../utils/dsn.js');
const hasSpansEnabled = require('../utils/hasSpansEnabled.js');
const object = require('../utils/object.js');
const spanUtils = require('../utils/spanUtils.js');
const utils = require('./utils.js');

const FROZEN_DSC_FIELD = "_frozenDsc";
function freezeDscOnSpan(span, dsc) {
  const spanWithMaybeDsc = span;
  object.addNonEnumerableProperty(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}
function getDynamicSamplingContextFromClient(trace_id, client) {
  const options = client.getOptions();
  const { publicKey: public_key } = client.getDsn() || {};
  const dsc = {
    environment: options.environment || constants.DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key,
    trace_id,
    org_id: dsn.extractOrgIdFromClient(client)
  };
  client.emit("createDsc", dsc);
  return dsc;
}
function getDynamicSamplingContextFromScope(client, scope) {
  const propagationContext = scope.getPropagationContext();
  return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
function getDynamicSamplingContextFromSpan(span) {
  const client = currentScopes.getClient();
  if (!client) {
    return {};
  }
  const rootSpan = spanUtils.getRootSpan(span);
  const rootSpanJson = spanUtils.spanToJSON(rootSpan);
  const rootSpanAttributes = rootSpanJson.data;
  const traceState = rootSpan.spanContext().traceState;
  const rootSpanSampleRate = traceState?.get("sentry.sample_rate") ?? rootSpanAttributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? rootSpanAttributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
  function applyLocalSampleRateToDsc(dsc2) {
    if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") {
      dsc2.sample_rate = `${rootSpanSampleRate}`;
    }
    return dsc2;
  }
  const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
  if (frozenDsc) {
    return applyLocalSampleRateToDsc(frozenDsc);
  }
  const traceStateDsc = traceState?.get("sentry.dsc");
  const dscOnTraceState = traceStateDsc && baggage.baggageHeaderToDynamicSamplingContext(traceStateDsc);
  if (dscOnTraceState) {
    return applyLocalSampleRateToDsc(dscOnTraceState);
  }
  const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
  const source = rootSpanAttributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] ?? rootSpanAttributes["sentry.span.source"];
  const name = rootSpanJson.description;
  if (source !== "url" && name) {
    dsc.transaction = name;
  }
  if (hasSpansEnabled.hasSpansEnabled()) {
    dsc.sampled = String(spanUtils.spanIsSampled(rootSpan));
    dsc.sample_rand = // In OTEL we store the sample rand on the trace state because we cannot access scopes for NonRecordingSpans
    // The Sentry OTEL SpanSampler takes care of writing the sample rand on the root span
    traceState?.get("sentry.sample_rand") ?? // On all other platforms we can actually get the scopes from a root span (we use this as a fallback)
    utils.getCapturedScopesOnSpan(rootSpan).scope?.getPropagationContext().sampleRand.toString();
  }
  applyLocalSampleRateToDsc(dsc);
  client.emit("createDsc", dsc, rootSpan);
  return dsc;
}
function spanToBaggageHeader(span) {
  const dsc = getDynamicSamplingContextFromSpan(span);
  return baggage.dynamicSamplingContextToSentryBaggageHeader(dsc);
}

exports.freezeDscOnSpan = freezeDscOnSpan;
exports.getDynamicSamplingContextFromClient = getDynamicSamplingContextFromClient;
exports.getDynamicSamplingContextFromScope = getDynamicSamplingContextFromScope;
exports.getDynamicSamplingContextFromSpan = getDynamicSamplingContextFromSpan;
exports.spanToBaggageHeader = spanToBaggageHeader;
//# sourceMappingURL=dynamicSamplingContext.js.map
