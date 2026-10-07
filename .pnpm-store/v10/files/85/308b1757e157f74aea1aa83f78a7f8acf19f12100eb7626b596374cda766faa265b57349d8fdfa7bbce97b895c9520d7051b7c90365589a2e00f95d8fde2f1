Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const spanUtils = require('../../utils/spanUtils.js');

function spanJsonToSerializedStreamedSpan(span) {
  const streamedSpan = {
    trace_id: span.trace_id,
    span_id: span.span_id,
    parent_span_id: span.parent_span_id,
    name: span.description || "",
    start_timestamp: span.start_timestamp,
    end_timestamp: span.timestamp || span.start_timestamp,
    status: !span.status || span.status === "ok" || span.status === "cancelled" ? "ok" : "error",
    is_segment: false,
    attributes: { ...span.data },
    links: span.links
  };
  return spanUtils.streamedSpanJsonToSerializedSpan(streamedSpan);
}

exports.spanJsonToSerializedStreamedSpan = spanJsonToSerializedStreamedSpan;
//# sourceMappingURL=spanJsonToStreamedSpan.js.map
