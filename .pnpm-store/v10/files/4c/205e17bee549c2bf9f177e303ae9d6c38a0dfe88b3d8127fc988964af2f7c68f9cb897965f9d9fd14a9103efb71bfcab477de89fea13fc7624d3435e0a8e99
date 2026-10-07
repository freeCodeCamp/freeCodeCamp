import { DEBUG_BUILD } from '../../debug-build.js';
import { debug } from '../../utils/debug-logger.js';

const isOtelWrapped = (fn) => typeof fn.__unwrap === "function";
const warning = "Double-wrapped http.client detected. Either disable spans in Sentry.httpIntegration, or disable the OpenTelemetry HTTP instrumentation. See: https://docs.sentry.io/platforms/javascript/guides/express/opentelemetry/custom-setup/#custom-http-instrumentation";
let didDoubleWrapWarning = false;
const doubleWrapWarning = DEBUG_BUILD ? (http) => {
  if (!didDoubleWrapWarning) {
    if (isOtelWrapped(http.request) || isOtelWrapped(http.get)) {
      didDoubleWrapWarning = true;
      debug.warn(warning);
    }
  }
} : () => {
};

export { doubleWrapWarning, warning };
//# sourceMappingURL=double-wrap-warning.js.map
