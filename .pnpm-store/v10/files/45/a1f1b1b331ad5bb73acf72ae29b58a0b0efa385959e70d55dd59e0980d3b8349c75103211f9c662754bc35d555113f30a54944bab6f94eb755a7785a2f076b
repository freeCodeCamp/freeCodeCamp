Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const attributes = require('../attributes.js');
const carrier = require('../carrier.js');
const currentScopes = require('../currentScopes.js');
const debugBuild = require('../debug-build.js');
const debugLogger = require('../utils/debug-logger.js');
const is = require('../utils/is.js');
const scopeData = require('../utils/scopeData.js');
const spanOnScope = require('../utils/spanOnScope.js');
const time = require('../utils/time.js');
const timestampSequence = require('../utils/timestampSequence.js');
const traceInfo = require('../utils/trace-info.js');
const constants = require('./constants.js');
const envelope = require('./envelope.js');

const MAX_LOG_BUFFER_SIZE = 100;
function setLogAttribute(logAttributes, key, value, setEvenIfPresent = true) {
  if (value && (!logAttributes[key] || setEvenIfPresent)) {
    logAttributes[key] = value;
  }
}
function _INTERNAL_captureSerializedLog(client, serializedLog) {
  const bufferMap = _getBufferMap();
  const logBuffer = _INTERNAL_getLogBuffer(client);
  if (logBuffer === void 0) {
    bufferMap.set(client, [serializedLog]);
  } else {
    if (logBuffer.length >= MAX_LOG_BUFFER_SIZE) {
      _INTERNAL_flushLogsBuffer(client, logBuffer);
      bufferMap.set(client, [serializedLog]);
    } else {
      bufferMap.set(client, [...logBuffer, serializedLog]);
    }
  }
}
function _INTERNAL_captureLog(beforeLog, currentScope = currentScopes.getCurrentScope(), captureSerializedLog = _INTERNAL_captureSerializedLog) {
  const client = currentScope?.getClient() ?? currentScopes.getClient();
  if (!client) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("No client available to capture log.");
    return;
  }
  const { release, environment, enableLogs = false, beforeSendLog } = client.getOptions();
  if (!enableLogs) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("logging option not enabled, log will not be captured.");
    return;
  }
  const [, traceContext] = traceInfo._getTraceInfoFromScope(client, currentScope);
  const processedLogAttributes = {
    ...beforeLog.attributes
  };
  const {
    user: { id, email, username },
    attributes: scopeAttributes = {}
  } = scopeData.getCombinedScopeData(currentScopes.getIsolationScope(), currentScope);
  setLogAttribute(processedLogAttributes, "user.id", id, false);
  setLogAttribute(processedLogAttributes, "user.email", email, false);
  setLogAttribute(processedLogAttributes, "user.name", username, false);
  setLogAttribute(processedLogAttributes, "sentry.release", release);
  setLogAttribute(processedLogAttributes, "sentry.environment", environment);
  const { name, version } = client.getSdkMetadata()?.sdk ?? {};
  setLogAttribute(processedLogAttributes, "sentry.sdk.name", name);
  setLogAttribute(processedLogAttributes, "sentry.sdk.version", version);
  const replay = client.getIntegrationByName("Replay");
  const replayId = replay?.getReplayId(true);
  setLogAttribute(processedLogAttributes, "sentry.replay_id", replayId);
  if (replayId && replay?.getRecordingMode() === "buffer") {
    setLogAttribute(processedLogAttributes, "sentry._internal.replay_is_buffering", true);
  }
  const beforeLogMessage = beforeLog.message;
  if (is.isParameterizedString(beforeLogMessage)) {
    const { __sentry_template_string__, __sentry_template_values__ = [] } = beforeLogMessage;
    if (__sentry_template_values__?.length) {
      processedLogAttributes["sentry.message.template"] = __sentry_template_string__;
    }
    __sentry_template_values__.forEach((param, index) => {
      processedLogAttributes[`sentry.message.parameter.${index}`] = param;
    });
  }
  const span = spanOnScope._getSpanForScope(currentScope);
  setLogAttribute(processedLogAttributes, "sentry.trace.parent_span_id", span?.spanContext().spanId);
  const processedLog = { ...beforeLog, attributes: processedLogAttributes };
  client.emit("beforeCaptureLog", processedLog);
  const log = beforeSendLog ? debugLogger.consoleSandbox(() => beforeSendLog(processedLog)) : processedLog;
  if (!log) {
    client.recordDroppedEvent("before_send", "log_item", 1);
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("beforeSendLog returned null, log will not be captured.");
    return;
  }
  const { level, message, attributes: logAttributes = {}, severityNumber } = log;
  const timestamp = time.timestampInSeconds();
  const sequenceAttr = timestampSequence.getSequenceAttribute(timestamp);
  const serializedLog = {
    timestamp,
    level,
    body: _removeLoneSurrogates(String(message)),
    trace_id: traceContext?.trace_id,
    severity_number: severityNumber ?? constants.SEVERITY_TEXT_TO_SEVERITY_NUMBER[level],
    attributes: sanitizeLogAttributes({
      ...attributes.serializeAttributes(scopeAttributes),
      ...attributes.serializeAttributes(logAttributes, true),
      [sequenceAttr.key]: sequenceAttr.value
    })
  };
  captureSerializedLog(client, serializedLog);
  client.emit("afterCaptureLog", log);
}
function _INTERNAL_flushLogsBuffer(client, maybeLogBuffer) {
  const logBuffer = maybeLogBuffer ?? _INTERNAL_getLogBuffer(client) ?? [];
  if (logBuffer.length === 0) {
    return;
  }
  const clientOptions = client.getOptions();
  const envelope$1 = envelope.createLogEnvelope(
    logBuffer,
    clientOptions._metadata,
    clientOptions.tunnel,
    client.getDsn(),
    client.getDataCollectionOptions().userInfo
  );
  _getBufferMap().set(client, []);
  client.emit("flushLogs");
  client.sendEnvelope(envelope$1);
}
function _INTERNAL_getLogBuffer(client) {
  return _getBufferMap().get(client);
}
function _getBufferMap() {
  return carrier.getGlobalSingleton("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
}
function sanitizeLogAttributes(attributes) {
  const sanitized = {};
  for (const [key, attr] of Object.entries(attributes)) {
    const sanitizedKey = _removeLoneSurrogates(key);
    if (attr.type === "string") {
      sanitized[sanitizedKey] = { ...attr, value: _removeLoneSurrogates(attr.value) };
    } else {
      sanitized[sanitizedKey] = attr;
    }
  }
  return sanitized;
}
function _removeLoneSurrogates(str) {
  const strObj = Object(str);
  const isWellFormed = strObj["isWellFormed"];
  const toWellFormed = strObj["toWellFormed"];
  if (typeof isWellFormed === "function" && typeof toWellFormed === "function") {
    return isWellFormed.call(str) ? str : toWellFormed.call(str);
  }
  return str;
}

exports._INTERNAL_captureLog = _INTERNAL_captureLog;
exports._INTERNAL_captureSerializedLog = _INTERNAL_captureSerializedLog;
exports._INTERNAL_flushLogsBuffer = _INTERNAL_flushLogsBuffer;
exports._INTERNAL_getLogBuffer = _INTERNAL_getLogBuffer;
exports._removeLoneSurrogates = _removeLoneSurrogates;
//# sourceMappingURL=internal.js.map
