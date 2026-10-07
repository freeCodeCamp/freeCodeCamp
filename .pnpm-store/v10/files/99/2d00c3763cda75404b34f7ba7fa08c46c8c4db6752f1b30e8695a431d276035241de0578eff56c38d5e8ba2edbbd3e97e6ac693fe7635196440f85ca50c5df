Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const debugLogger = require('./debug-logger.js');
const worldwide = require('./worldwide.js');

const WINDOW = worldwide.GLOBAL_OBJ;
function supportsErrorEvent() {
  try {
    new ErrorEvent("");
    return true;
  } catch {
    return false;
  }
}
function supportsDOMError() {
  try {
    new DOMError("");
    return true;
  } catch {
    return false;
  }
}
function supportsDOMException() {
  try {
    new DOMException("");
    return true;
  } catch {
    return false;
  }
}
function supportsHistory() {
  return "history" in WINDOW && !!WINDOW.history;
}
const supportsFetch = _isFetchSupported;
function _isFetchSupported() {
  if (!("fetch" in WINDOW)) {
    return false;
  }
  try {
    new Headers();
    new Request("data:,");
    new Response();
    return true;
  } catch {
    return false;
  }
}
function isNativeFunction(func) {
  return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
function supportsNativeFetch() {
  if (typeof EdgeRuntime === "string") {
    return true;
  }
  if (!_isFetchSupported()) {
    return false;
  }
  if (isNativeFunction(WINDOW.fetch)) {
    return true;
  }
  let result = false;
  const doc = WINDOW.document;
  if (doc && typeof doc.createElement === "function") {
    try {
      const sandbox = doc.createElement("iframe");
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow?.fetch) {
        result = isNativeFunction(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
  }
  return result;
}
function supportsReportingObserver() {
  return "ReportingObserver" in WINDOW;
}
function supportsReferrerPolicy() {
  if (!_isFetchSupported()) {
    return false;
  }
  try {
    new Request("_", {
      referrerPolicy: "origin"
    });
    return true;
  } catch {
    return false;
  }
}

exports.isNativeFunction = isNativeFunction;
exports.supportsDOMError = supportsDOMError;
exports.supportsDOMException = supportsDOMException;
exports.supportsErrorEvent = supportsErrorEvent;
exports.supportsFetch = supportsFetch;
exports.supportsHistory = supportsHistory;
exports.supportsNativeFetch = supportsNativeFetch;
exports.supportsReferrerPolicy = supportsReferrerPolicy;
exports.supportsReportingObserver = supportsReportingObserver;
//# sourceMappingURL=supports.js.map
