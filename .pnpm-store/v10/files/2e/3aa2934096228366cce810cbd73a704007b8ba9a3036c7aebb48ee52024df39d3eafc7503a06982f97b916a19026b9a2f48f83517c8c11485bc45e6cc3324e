import { debug } from '@sentry/core';
import { DEBUG_BUILD } from '../debug-build.js';
import { captureLog } from '../logs/capture.js';

const DEFAULT_CAPTURED_LEVELS = ["trace", "debug", "info", "warn", "error", "fatal"];
const LEVEL_SYMBOL = /* @__PURE__ */ Symbol.for("level");
const MESSAGE_SYMBOL = /* @__PURE__ */ Symbol.for("message");
const SPLAT_SYMBOL = /* @__PURE__ */ Symbol.for("splat");
function createSentryWinstonTransport(TransportClass, sentryWinstonOptions) {
  class SentryWinstonTransport extends TransportClass {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options) {
      super(options);
      this._levels = new Set(sentryWinstonOptions?.levels ?? DEFAULT_CAPTURED_LEVELS);
    }
    /**
     * Forwards a winston log to the Sentry SDK.
     */
    log(info, callback) {
      try {
        setImmediate(() => {
          this.emit("logged", info);
        });
        if (!isObject(info)) {
          return;
        }
        const levelFromSymbol = info[LEVEL_SYMBOL];
        const { level, message, timestamp, ...attributes } = info;
        attributes[LEVEL_SYMBOL] = void 0;
        attributes[MESSAGE_SYMBOL] = void 0;
        attributes[SPLAT_SYMBOL] = void 0;
        const customLevel = sentryWinstonOptions?.customLevelMap?.[levelFromSymbol];
        const winstonLogLevel = WINSTON_LEVEL_TO_LOG_SEVERITY_LEVEL_MAP[levelFromSymbol];
        const logSeverityLevel = customLevel ?? winstonLogLevel ?? "info";
        if (this._levels.has(logSeverityLevel)) {
          captureLog(logSeverityLevel, message, {
            ...attributes,
            "sentry.origin": "auto.log.winston"
          });
        } else if (!customLevel && !winstonLogLevel) {
          DEBUG_BUILD && debug.log(
            `Winston log level ${levelFromSymbol} is not captured by Sentry. Please add ${levelFromSymbol} to the "customLevelMap" option of the Sentry Winston transport.`
          );
        }
      } catch {
      }
      if (callback) {
        callback();
      }
    }
  }
  return SentryWinstonTransport;
}
function isObject(anything) {
  return typeof anything === "object" && anything != null;
}
const WINSTON_LEVEL_TO_LOG_SEVERITY_LEVEL_MAP = {
  // npm
  silly: "trace",
  // npm and syslog
  debug: "debug",
  // npm
  verbose: "debug",
  // npm
  http: "debug",
  // npm and syslog
  info: "info",
  // syslog
  notice: "info",
  // npm
  warn: "warn",
  // syslog
  warning: "warn",
  // npm and syslog
  error: "error",
  // syslog
  emerg: "fatal",
  // syslog
  alert: "fatal",
  // syslog
  crit: "fatal"
};

export { createSentryWinstonTransport };
//# sourceMappingURL=winston.js.map
