Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const semanticAttributes = require('../semanticAttributes.js');

function convertTransactionEventToSpanJson(event) {
  const { trace_id, parent_span_id, span_id, status, origin, data, op } = event.contexts?.trace ?? {};
  return {
    data: data ?? {},
    description: event.transaction,
    op,
    parent_span_id,
    span_id: span_id ?? "",
    start_timestamp: event.start_timestamp ?? 0,
    status,
    timestamp: event.timestamp,
    trace_id: trace_id ?? "",
    origin,
    profile_id: data?.[semanticAttributes.SEMANTIC_ATTRIBUTE_PROFILE_ID],
    exclusive_time: data?.[semanticAttributes.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
    measurements: event.measurements,
    is_segment: true
  };
}
function convertSpanJsonToTransactionEvent(span) {
  return {
    type: "transaction",
    timestamp: span.timestamp,
    start_timestamp: span.start_timestamp,
    transaction: span.description,
    contexts: {
      trace: {
        trace_id: span.trace_id,
        span_id: span.span_id,
        parent_span_id: span.parent_span_id,
        op: span.op,
        status: span.status,
        origin: span.origin,
        data: {
          ...span.data,
          ...span.profile_id && { [semanticAttributes.SEMANTIC_ATTRIBUTE_PROFILE_ID]: span.profile_id },
          ...span.exclusive_time && { [semanticAttributes.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: span.exclusive_time }
        }
      }
    },
    measurements: span.measurements
  };
}

exports.convertSpanJsonToTransactionEvent = convertSpanJsonToTransactionEvent;
exports.convertTransactionEventToSpanJson = convertTransactionEventToSpanJson;
//# sourceMappingURL=transactionEvent.js.map
