Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const integration = require('../integration.js');
const debugLogger = require('../utils/debug-logger.js');
const is = require('../utils/is.js');
const normalize = require('../utils/normalize.js');
const normalizationHints = require('../utils/normalizationHints.js');
const string = require('../utils/string.js');

const INTEGRATION_NAME = "ExtraErrorData";
const _extraErrorDataIntegration = ((options = {}) => {
  const { depth = 3, captureErrorCause = true } = options;
  return {
    name: INTEGRATION_NAME,
    processEvent(event, hint, client) {
      const { maxValueLength } = client.getOptions();
      return _enhanceEventWithErrorData(event, hint, depth, captureErrorCause, maxValueLength);
    }
  };
});
const extraErrorDataIntegration = integration.defineIntegration(_extraErrorDataIntegration);
function _enhanceEventWithErrorData(event, hint = {}, depth, captureErrorCause, maxValueLength) {
  if (!hint.originalException || !is.isError(hint.originalException)) {
    return event;
  }
  const exceptionName = hint.originalException.name || hint.originalException.constructor.name;
  const errorData = _extractErrorData(hint.originalException, captureErrorCause, maxValueLength);
  if (errorData) {
    const contexts = {
      ...event.contexts
    };
    const normalizedErrorData = normalize.normalize(errorData, depth);
    if (is.isPlainObject(normalizedErrorData)) {
      normalizationHints.setSkipNormalizationHint(normalizedErrorData);
      contexts[exceptionName] = normalizedErrorData;
    }
    return {
      ...event,
      contexts
    };
  }
  return event;
}
function _extractErrorData(error, captureErrorCause, maxValueLength) {
  try {
    const nativeKeys = [
      "name",
      "message",
      "stack",
      "line",
      "column",
      "fileName",
      "lineNumber",
      "columnNumber",
      "toJSON"
    ];
    const extraErrorInfo = {};
    for (const key of Object.keys(error)) {
      if (nativeKeys.indexOf(key) !== -1) {
        continue;
      }
      const value = error[key];
      extraErrorInfo[key] = is.isError(value) || typeof value === "string" ? maxValueLength ? string.truncate(`${value}`, maxValueLength) : `${value}` : value;
    }
    if (captureErrorCause && error.cause !== void 0) {
      if (is.isError(error.cause)) {
        const errorName = error.cause.name || error.cause.constructor.name;
        extraErrorInfo.cause = { [errorName]: _extractErrorData(error.cause, false, maxValueLength) };
      } else {
        extraErrorInfo.cause = error.cause;
      }
    }
    if (typeof error.toJSON === "function") {
      const serializedError = error.toJSON();
      for (const key of Object.keys(serializedError)) {
        const value = serializedError[key];
        extraErrorInfo[key] = is.isError(value) ? value.toString() : value;
      }
    }
    return extraErrorInfo;
  } catch (oO) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.error("Unable to extract extra data from the Error object:", oO);
  }
  return null;
}

exports.extraErrorDataIntegration = extraErrorDataIntegration;
//# sourceMappingURL=extraerrordata.js.map
