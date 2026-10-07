Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const integration = require('../integration.js');
const debugLogger = require('../utils/debug-logger.js');
const stacktrace = require('../utils/stacktrace.js');

const INTEGRATION_NAME = "Dedupe";
const _dedupeIntegration = (() => {
  let previousEvent;
  return {
    name: INTEGRATION_NAME,
    processEvent(currentEvent) {
      if (currentEvent.type) {
        return currentEvent;
      }
      try {
        if (_shouldDropEvent(currentEvent, previousEvent)) {
          debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Event dropped due to being a duplicate of previously captured event.");
          return null;
        }
      } catch {
      }
      return previousEvent = currentEvent;
    }
  };
});
const dedupeIntegration = integration.defineIntegration(_dedupeIntegration);
function _shouldDropEvent(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }
  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }
  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }
  return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;
  if (!currentMessage && !previousMessage) {
    return false;
  }
  if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
    return false;
  }
  if (currentMessage !== previousMessage) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);
  if (!previousException || !currentException) {
    return false;
  }
  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
  let currentFrames = stacktrace.getFramesFromEvent(currentEvent);
  let previousFrames = stacktrace.getFramesFromEvent(previousEvent);
  if (!currentFrames && !previousFrames) {
    return true;
  }
  if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
    return false;
  }
  currentFrames = currentFrames;
  previousFrames = previousFrames;
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }
  for (let i = 0; i < previousFrames.length; i++) {
    const frameA = previousFrames[i];
    const frameB = currentFrames[i];
    if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
      return false;
    }
  }
  return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
  let currentFingerprint = currentEvent.fingerprint;
  let previousFingerprint = previousEvent.fingerprint;
  if (!currentFingerprint && !previousFingerprint) {
    return true;
  }
  if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
    return false;
  }
  currentFingerprint = currentFingerprint;
  previousFingerprint = previousFingerprint;
  try {
    return !!(currentFingerprint.join("") === previousFingerprint.join(""));
  } catch {
    return false;
  }
}
function _getExceptionFromEvent(event) {
  return event.exception?.values?.[0];
}

exports._shouldDropEvent = _shouldDropEvent;
exports.dedupeIntegration = dedupeIntegration;
//# sourceMappingURL=dedupe.js.map
