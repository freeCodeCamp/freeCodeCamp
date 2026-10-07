import { serializeAttributes } from '../attributes.js';
import { getGlobalSingleton } from '../carrier.js';
import { getCurrentScope, getClient, getIsolationScope } from '../currentScopes.js';
import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from '../utils/debug-logger.js';
import { getCombinedScopeData } from '../utils/scopeData.js';
import { _getSpanForScope } from '../utils/spanOnScope.js';
import { timestampInSeconds } from '../utils/time.js';
import { getSequenceAttribute } from '../utils/timestampSequence.js';
import { _getTraceInfoFromScope } from '../utils/trace-info.js';
import { createMetricEnvelope } from './envelope.js';

const MAX_METRIC_BUFFER_SIZE = 1e3;
function setMetricAttribute(metricAttributes, key, value, setEvenIfPresent = true) {
  if (value && (setEvenIfPresent || !(key in metricAttributes))) {
    metricAttributes[key] = value;
  }
}
function _INTERNAL_captureSerializedMetric(client, serializedMetric) {
  const bufferMap = _getBufferMap();
  const metricBuffer = _INTERNAL_getMetricBuffer(client);
  if (metricBuffer === void 0) {
    bufferMap.set(client, [serializedMetric]);
  } else {
    if (metricBuffer.length >= MAX_METRIC_BUFFER_SIZE) {
      _INTERNAL_flushMetricsBuffer(client, metricBuffer);
      bufferMap.set(client, [serializedMetric]);
    } else {
      bufferMap.set(client, [...metricBuffer, serializedMetric]);
    }
  }
}
function _enrichMetricAttributes(beforeMetric, client, user) {
  const { release, environment } = client.getOptions();
  const processedMetricAttributes = {
    ...beforeMetric.attributes
  };
  setMetricAttribute(processedMetricAttributes, "user.id", user.id, false);
  setMetricAttribute(processedMetricAttributes, "user.email", user.email, false);
  setMetricAttribute(processedMetricAttributes, "user.name", user.username, false);
  setMetricAttribute(processedMetricAttributes, "sentry.release", release);
  setMetricAttribute(processedMetricAttributes, "sentry.environment", environment);
  const { name, version } = client.getSdkMetadata()?.sdk ?? {};
  setMetricAttribute(processedMetricAttributes, "sentry.sdk.name", name);
  setMetricAttribute(processedMetricAttributes, "sentry.sdk.version", version);
  const replay = client.getIntegrationByName("Replay");
  const replayId = replay?.getReplayId(true);
  setMetricAttribute(processedMetricAttributes, "sentry.replay_id", replayId);
  if (replayId && replay?.getRecordingMode() === "buffer") {
    setMetricAttribute(processedMetricAttributes, "sentry._internal.replay_is_buffering", true);
  }
  return {
    ...beforeMetric,
    attributes: processedMetricAttributes
  };
}
function _buildSerializedMetric(metric, client, currentScope, scopeAttributes) {
  const [, traceContext] = _getTraceInfoFromScope(client, currentScope);
  const span = _getSpanForScope(currentScope);
  const traceId = span ? span.spanContext().traceId : traceContext?.trace_id;
  const spanId = span ? span.spanContext().spanId : void 0;
  const timestamp = timestampInSeconds();
  const sequenceAttr = getSequenceAttribute(timestamp);
  return {
    timestamp,
    trace_id: traceId ?? "",
    span_id: spanId,
    name: metric.name,
    type: metric.type,
    unit: metric.unit,
    value: metric.value,
    attributes: {
      ...serializeAttributes(scopeAttributes),
      ...serializeAttributes(metric.attributes, "skip-undefined"),
      [sequenceAttr.key]: sequenceAttr.value
    }
  };
}
function _INTERNAL_captureMetric(beforeMetric, options) {
  const currentScope = options?.scope ?? getCurrentScope();
  const captureSerializedMetric = options?.captureSerializedMetric ?? _INTERNAL_captureSerializedMetric;
  const client = currentScope?.getClient() ?? getClient();
  if (!client) {
    DEBUG_BUILD && debug.warn("No client available to capture metric.");
    return;
  }
  const { _experiments, enableMetrics, beforeSendMetric } = client.getOptions();
  const metricsEnabled = enableMetrics ?? _experiments?.enableMetrics ?? true;
  if (!metricsEnabled) {
    DEBUG_BUILD && debug.warn("metrics option not enabled, metric will not be captured.");
    return;
  }
  const { user, attributes: scopeAttributes } = getCombinedScopeData(getIsolationScope(), currentScope);
  const enrichedMetric = _enrichMetricAttributes(beforeMetric, client, user);
  client.emit("processMetric", enrichedMetric);
  const beforeSendCallback = beforeSendMetric || _experiments?.beforeSendMetric;
  const processedMetric = beforeSendCallback ? beforeSendCallback(enrichedMetric) : enrichedMetric;
  if (!processedMetric) {
    DEBUG_BUILD && debug.log("`beforeSendMetric` returned `null`, will not send metric.");
    return;
  }
  const serializedMetric = _buildSerializedMetric(processedMetric, client, currentScope, scopeAttributes);
  DEBUG_BUILD && debug.log("[Metric]", serializedMetric);
  captureSerializedMetric(client, serializedMetric);
  client.emit("afterCaptureMetric", processedMetric);
}
function _INTERNAL_flushMetricsBuffer(client, maybeMetricBuffer) {
  const metricBuffer = maybeMetricBuffer ?? _INTERNAL_getMetricBuffer(client) ?? [];
  if (metricBuffer.length === 0) {
    return;
  }
  const clientOptions = client.getOptions();
  const envelope = createMetricEnvelope(
    metricBuffer,
    clientOptions._metadata,
    clientOptions.tunnel,
    client.getDsn(),
    client.getDataCollectionOptions().userInfo
  );
  _getBufferMap().set(client, []);
  client.emit("flushMetrics");
  client.sendEnvelope(envelope);
}
function _INTERNAL_getMetricBuffer(client) {
  return _getBufferMap().get(client);
}
function _getBufferMap() {
  return getGlobalSingleton("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
}

export { _INTERNAL_captureMetric, _INTERNAL_captureSerializedMetric, _INTERNAL_flushMetricsBuffer, _INTERNAL_getMetricBuffer };
//# sourceMappingURL=internal.js.map
