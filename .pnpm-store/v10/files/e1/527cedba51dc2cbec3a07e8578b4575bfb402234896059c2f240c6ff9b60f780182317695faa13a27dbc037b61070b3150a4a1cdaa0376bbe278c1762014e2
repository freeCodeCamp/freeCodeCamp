import { getAsyncContextStrategy } from '../asyncContext/index.js';
import { serializeAttributes } from '../attributes.js';
import { getMainCarrier } from '../carrier.js';
import { getCurrentScope } from '../currentScopes.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME, SEMANTIC_ATTRIBUTE_SENTRY_SOURCE } from '../semanticAttributes.js';
import { SPAN_STATUS_UNSET, SPAN_STATUS_OK } from '../tracing/spanstatus.js';
import { getCapturedScopesOnSpan } from '../tracing/utils.js';
import { addNonEnumerableProperty } from './object.js';
import { generateSpanId } from './propagationContext.js';
import { timestampInSeconds } from './time.js';
import { generateSentryTraceHeader, generateTraceparentHeader } from './tracing.js';
import { consoleSandbox } from './debug-logger.js';
import { _getSpanForScope } from './spanOnScope.js';

const TRACE_FLAG_NONE = 0;
const TRACE_FLAG_SAMPLED = 1;
let hasShownSpanDropWarning = false;
function spanToTransactionTraceContext(span) {
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  const { data, op, parent_span_id, status, origin, links } = spanToJSON(span);
  return {
    parent_span_id,
    span_id,
    trace_id,
    data,
    op,
    status,
    origin,
    links
  };
}
function spanToTraceContext(span) {
  const { spanId, traceId: trace_id, isRemote } = span.spanContext();
  const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
  const scope = getCapturedScopesOnSpan(span).scope;
  const span_id = isRemote ? scope?.getPropagationContext().propagationSpanId || generateSpanId() : spanId;
  return {
    parent_span_id,
    span_id,
    trace_id
  };
}
function spanToTraceHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateSentryTraceHeader(traceId, spanId, sampled);
}
function spanToTraceparentHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateTraceparentHeader(traceId, spanId, sampled);
}
function convertSpanLinksForEnvelope(links) {
  if (links && links.length > 0) {
    return links.map(({ context: { spanId, traceId, traceFlags, ...restContext }, attributes }) => ({
      span_id: spanId,
      trace_id: traceId,
      sampled: traceFlags === TRACE_FLAG_SAMPLED,
      attributes,
      ...restContext
    }));
  } else {
    return void 0;
  }
}
function getStreamedSpanLinks(links) {
  if (links?.length) {
    return links.map(({ context: { spanId, traceId, traceFlags }, attributes }) => ({
      span_id: spanId,
      trace_id: traceId,
      sampled: traceFlags === TRACE_FLAG_SAMPLED,
      attributes
    }));
  } else {
    return void 0;
  }
}
function spanTimeInputToSeconds(input) {
  if (typeof input === "number") {
    return ensureTimestampInSeconds(input);
  }
  if (Array.isArray(input)) {
    return input[0] + input[1] / 1e9;
  }
  if (input instanceof Date) {
    return ensureTimestampInSeconds(input.getTime());
  }
  return timestampInSeconds();
}
function ensureTimestampInSeconds(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1e3 : timestamp;
}
function spanToJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getSpanJSON();
  }
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const { attributes, startTime, name, endTime, status, links } = span;
    return {
      span_id,
      trace_id,
      data: attributes,
      description: name,
      parent_span_id: getOtelParentSpanId(span),
      start_timestamp: spanTimeInputToSeconds(startTime),
      // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
      timestamp: spanTimeInputToSeconds(endTime) || void 0,
      status: getStatusMessage(status),
      op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
      origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      links: convertSpanLinksForEnvelope(links)
    };
  }
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    data: {}
  };
}
function spanToStreamedSpanJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getStreamedSpanJSON();
  }
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const { attributes, startTime, name, endTime, status, links } = span;
    return {
      name,
      span_id,
      trace_id,
      parent_span_id: getOtelParentSpanId(span),
      start_timestamp: spanTimeInputToSeconds(startTime),
      end_timestamp: spanTimeInputToSeconds(endTime),
      is_segment: span === INTERNAL_getSegmentSpan(span),
      status: getSimpleStatusMessage(status),
      attributes,
      links: getStreamedSpanLinks(links)
    };
  }
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    name: "",
    end_timestamp: 0,
    status: "ok",
    is_segment: span === INTERNAL_getSegmentSpan(span)
  };
}
function getOtelParentSpanId(span) {
  return "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? span.parentSpanContext?.spanId : void 0;
}
function streamedSpanJsonToSerializedSpan(spanJson) {
  return {
    ...spanJson,
    attributes: serializeAttributes(spanJson.attributes),
    links: spanJson.links?.map((link) => ({
      ...link,
      attributes: serializeAttributes(link.attributes)
    }))
  };
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
  const castSpan = span;
  return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
function spanIsSentrySpan(span) {
  return typeof span.getSpanJSON === "function";
}
function spanIsSampled(span) {
  const { traceFlags } = span.spanContext();
  return traceFlags === TRACE_FLAG_SAMPLED;
}
function getStatusMessage(status) {
  if (!status || status.code === SPAN_STATUS_UNSET) {
    return void 0;
  }
  if (status.code === SPAN_STATUS_OK) {
    return "ok";
  }
  return status.message || "internal_error";
}
function getSimpleStatusMessage(status) {
  return !status || status.code === SPAN_STATUS_OK || status.code === SPAN_STATUS_UNSET || status.message === "cancelled" ? "ok" : "error";
}
const CHILD_SPANS_FIELD = "_sentryChildSpans";
const ROOT_SPAN_FIELD = "_sentryRootSpan";
function addChildSpanToSpan(span, childSpan) {
  const rootSpan = span[ROOT_SPAN_FIELD] || span;
  addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, rootSpan);
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].add(childSpan);
  } else {
    addNonEnumerableProperty(span, CHILD_SPANS_FIELD, /* @__PURE__ */ new Set([childSpan]));
  }
}
function removeChildSpanFromSpan(span, childSpan) {
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].delete(childSpan);
  }
}
function getSpanDescendants(span) {
  const resultSet = /* @__PURE__ */ new Set();
  function addSpanChildren(span2) {
    if (resultSet.has(span2)) {
      return;
    } else if (spanIsSampled(span2)) {
      resultSet.add(span2);
      const childSpans = span2[CHILD_SPANS_FIELD] ? Array.from(span2[CHILD_SPANS_FIELD]) : [];
      for (const childSpan of childSpans) {
        addSpanChildren(childSpan);
      }
    }
  }
  addSpanChildren(span);
  return Array.from(resultSet);
}
const getRootSpan = INTERNAL_getSegmentSpan;
function INTERNAL_getSegmentSpan(span) {
  return span[ROOT_SPAN_FIELD] || span;
}
function getActiveSpan() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getActiveSpan) {
    return acs.getActiveSpan();
  }
  return _getSpanForScope(getCurrentScope());
}
function showSpanDropWarning() {
  if (!hasShownSpanDropWarning) {
    consoleSandbox(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
      );
    });
    hasShownSpanDropWarning = true;
  }
}
function updateSpanName(span, name) {
  span.updateName(name);
  span.setAttributes({
    [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
    [SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: name
  });
}

export { INTERNAL_getSegmentSpan, TRACE_FLAG_NONE, TRACE_FLAG_SAMPLED, addChildSpanToSpan, convertSpanLinksForEnvelope, getActiveSpan, getRootSpan, getSimpleStatusMessage, getSpanDescendants, getStatusMessage, getStreamedSpanLinks, removeChildSpanFromSpan, showSpanDropWarning, spanIsSampled, spanTimeInputToSeconds, spanToJSON, spanToStreamedSpanJSON, spanToTraceContext, spanToTraceHeader, spanToTraceparentHeader, spanToTransactionTraceContext, streamedSpanJsonToSerializedSpan, updateSpanName };
//# sourceMappingURL=spanUtils.js.map
