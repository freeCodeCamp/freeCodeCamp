import { getDynamicSamplingContextFromSpan } from './tracing/dynamicSamplingContext.js';
import { isStreamedBeforeSendSpanCallback } from './tracing/spans/beforeSendSpan.js';
import { dsnToString } from './utils/dsn.js';
import { getSdkMetadataForEnvelopeHeader, createEventEnvelopeHeaders, createEnvelope, createSpanEnvelopeItem } from './utils/envelope.js';
import { shouldIgnoreSpan } from './utils/should-ignore-span.js';
import { spanToJSON, showSpanDropWarning } from './utils/spanUtils.js';

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
function createSessionEnvelope(session, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
  return createEnvelope(envelopeHeaders, [envelopeItem]);
}
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
  _enhanceEventWithSdkInfo(event, metadata?.sdk);
  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
  delete event.sdkProcessingMetadata;
  const eventItem = [{ type: eventType }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}
function createSpanEnvelope(spans, client) {
  function dscHasRequiredProps(dsc2) {
    return !!dsc2.trace_id && !!dsc2.public_key;
  }
  const dsc = getDynamicSamplingContextFromSpan(spans[0]);
  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...dscHasRequiredProps(dsc) && { trace: dsc },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const { beforeSendSpan, ignoreSpans } = client?.getOptions() || {};
  const filteredSpans = ignoreSpans?.length ? spans.filter((span) => {
    const json = spanToJSON(span);
    return !shouldIgnoreSpan({ description: json.description, op: json.op, attributes: json.data }, ignoreSpans);
  }) : spans;
  const droppedSpans = spans.length - filteredSpans.length;
  if (droppedSpans) {
    client?.recordDroppedEvent("before_send", "span", droppedSpans);
  }
  const convertToSpanJSON = beforeSendSpan ? (span) => {
    const spanJson = spanToJSON(span);
    const processedSpan = !isStreamedBeforeSendSpanCallback(beforeSendSpan) ? beforeSendSpan(spanJson) : spanJson;
    if (!processedSpan) {
      showSpanDropWarning();
      return spanJson;
    }
    return processedSpan;
  } : spanToJSON;
  const items = [];
  for (const span of filteredSpans) {
    const spanJson = convertToSpanJSON(span);
    if (spanJson) {
      items.push(createSpanEnvelopeItem(spanJson));
    }
  }
  return createEnvelope(headers, items);
}

export { _enhanceEventWithSdkInfo, createEventEnvelope, createSessionEnvelope, createSpanEnvelope };
//# sourceMappingURL=envelope.js.map
