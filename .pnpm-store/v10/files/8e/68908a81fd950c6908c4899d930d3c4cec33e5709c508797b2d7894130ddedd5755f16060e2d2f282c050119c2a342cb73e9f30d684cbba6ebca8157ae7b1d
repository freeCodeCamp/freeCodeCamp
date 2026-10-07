Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dynamicSamplingContext = require('./tracing/dynamicSamplingContext.js');
const beforeSendSpan = require('./tracing/spans/beforeSendSpan.js');
const dsn = require('./utils/dsn.js');
const envelope = require('./utils/envelope.js');
const shouldIgnoreSpan = require('./utils/should-ignore-span.js');
const spanUtils = require('./utils/spanUtils.js');

function _enhanceEventWithSdkInfo(event, newSdkInfo) {
  if (!newSdkInfo) {
    return event;
  }
  const eventSdkInfo = event.sdk || {};
  event.sdk = {
    ...eventSdkInfo,
    name: eventSdkInfo.name || newSdkInfo.name,
    version: eventSdkInfo.version || newSdkInfo.version,
    integrations: [...event.sdk?.integrations || [], ...newSdkInfo.integrations || []],
    packages: [...event.sdk?.packages || [], ...newSdkInfo.packages || []],
    settings: event.sdk?.settings || newSdkInfo.settings ? {
      ...event.sdk?.settings,
      ...newSdkInfo.settings
    } : void 0
  };
  return event;
}
function createSessionEnvelope(session, dsn$1, metadata, tunnel) {
  const sdkInfo = envelope.getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && dsn$1 && { dsn: dsn.dsnToString(dsn$1) }
  };
  const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
  return envelope.createEnvelope(envelopeHeaders, [envelopeItem]);
}
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = envelope.getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
  _enhanceEventWithSdkInfo(event, metadata?.sdk);
  const envelopeHeaders = envelope.createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
  delete event.sdkProcessingMetadata;
  const eventItem = [{ type: eventType }, event];
  return envelope.createEnvelope(envelopeHeaders, [eventItem]);
}
function createSpanEnvelope(spans, client) {
  function dscHasRequiredProps(dsc2) {
    return !!dsc2.trace_id && !!dsc2.public_key;
  }
  const dsc = dynamicSamplingContext.getDynamicSamplingContextFromSpan(spans[0]);
  const dsn$1 = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...dscHasRequiredProps(dsc) && { trace: dsc },
    ...!!tunnel && dsn$1 && { dsn: dsn.dsnToString(dsn$1) }
  };
  const { beforeSendSpan: beforeSendSpan$1, ignoreSpans } = client?.getOptions() || {};
  const filteredSpans = ignoreSpans?.length ? spans.filter((span) => {
    const json = spanUtils.spanToJSON(span);
    return !shouldIgnoreSpan.shouldIgnoreSpan({ description: json.description, op: json.op, attributes: json.data }, ignoreSpans);
  }) : spans;
  const droppedSpans = spans.length - filteredSpans.length;
  if (droppedSpans) {
    client?.recordDroppedEvent("before_send", "span", droppedSpans);
  }
  const convertToSpanJSON = beforeSendSpan$1 ? (span) => {
    const spanJson = spanUtils.spanToJSON(span);
    const processedSpan = !beforeSendSpan.isStreamedBeforeSendSpanCallback(beforeSendSpan$1) ? beforeSendSpan$1(spanJson) : spanJson;
    if (!processedSpan) {
      spanUtils.showSpanDropWarning();
      return spanJson;
    }
    return processedSpan;
  } : spanUtils.spanToJSON;
  const items = [];
  for (const span of filteredSpans) {
    const spanJson = convertToSpanJSON(span);
    if (spanJson) {
      items.push(envelope.createSpanEnvelopeItem(spanJson));
    }
  }
  return envelope.createEnvelope(headers, items);
}

exports._enhanceEventWithSdkInfo = _enhanceEventWithSdkInfo;
exports.createEventEnvelope = createEventEnvelope;
exports.createSessionEnvelope = createSessionEnvelope;
exports.createSpanEnvelope = createSpanEnvelope;
//# sourceMappingURL=envelope.js.map
