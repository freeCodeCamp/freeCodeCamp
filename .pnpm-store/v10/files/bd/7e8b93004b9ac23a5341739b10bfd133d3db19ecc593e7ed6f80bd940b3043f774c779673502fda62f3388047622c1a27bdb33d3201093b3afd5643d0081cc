Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../../debug-build.js');
const debugLogger = require('../../utils/debug-logger.js');

const isOtelWrapped = (fn) => typeof fn.__unwrap === "function";
const warning = "Double-wrapped http.client detected. Either disable spans in Sentry.httpIntegration, or disable the OpenTelemetry HTTP instrumentation. See: https://docs.sentry.io/platforms/javascript/guides/express/opentelemetry/custom-setup/#custom-http-instrumentation";
let didDoubleWrapWarning = false;
const doubleWrapWarning = debugBuild.DEBUG_BUILD ? (http) => {
  if (!didDoubleWrapWarning) {
    if (isOtelWrapped(http.request) || isOtelWrapped(http.get)) {
      didDoubleWrapWarning = true;
      debugLogger.debug.warn(warning);
    }
  }
} : () => {
};

exports.doubleWrapWarning = doubleWrapWarning;
exports.warning = warning;
//# sourceMappingURL=double-wrap-warning.js.map
