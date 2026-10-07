import { DEBUG_BUILD } from '../debug-build.js';
import { defineIntegration } from '../integration.js';
import { debug } from '../utils/debug-logger.js';
import { isError, isPlainObject } from '../utils/is.js';
import { normalize } from '../utils/normalize.js';
import { setSkipNormalizationHint } from '../utils/normalizationHints.js';
import { truncate } from '../utils/string.js';

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
const extraErrorDataIntegration = defineIntegration(_extraErrorDataIntegration);
function _enhanceEventWithErrorData(event, hint = {}, depth, captureErrorCause, maxValueLength) {
  if (!hint.originalException || !isError(hint.originalException)) {
    return event;
  }
  const exceptionName = hint.originalException.name || hint.originalException.constructor.name;
  const errorData = _extractErrorData(hint.originalException, captureErrorCause, maxValueLength);
  if (errorData) {
    const contexts = {
      ...event.contexts
    };
    const normalizedErrorData = normalize(errorData, depth);
    if (isPlainObject(normalizedErrorData)) {
      setSkipNormalizationHint(normalizedErrorData);
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
      extraErrorInfo[key] = isError(value) || typeof value === "string" ? maxValueLength ? truncate(`${value}`, maxValueLength) : `${value}` : value;
    }
    if (captureErrorCause && error.cause !== void 0) {
      if (isError(error.cause)) {
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
        extraErrorInfo[key] = isError(value) ? value.toString() : value;
      }
    }
    return extraErrorInfo;
  } catch (oO) {
    DEBUG_BUILD && debug.error("Unable to extract extra data from the Error object:", oO);
  }
  return null;
}

export { extraErrorDataIntegration };
//# sourceMappingURL=extraerrordata.js.map
