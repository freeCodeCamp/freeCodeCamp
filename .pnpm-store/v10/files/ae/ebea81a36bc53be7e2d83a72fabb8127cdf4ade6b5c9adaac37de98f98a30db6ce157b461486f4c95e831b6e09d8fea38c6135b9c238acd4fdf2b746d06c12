Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const diagnosticsChannel = require('node:diagnostics_channel');
const core = require('@sentry/core');

const SENTRY_TRACK_SYMBOL = /* @__PURE__ */ Symbol("sentry-track-pino-logger");
function getPinoKey(logger, symbolName, defaultKey) {
  const symbols = Object.getOwnPropertySymbols(logger);
  const symbolString = `Symbol(${symbolName})`;
  for (const sym of symbols) {
    if (sym.toString() === symbolString) {
      const value = logger[sym];
      return typeof value === "string" ? value : defaultKey;
    }
  }
  return defaultKey;
}
const DEFAULT_OPTIONS = {
  error: { levels: [], handled: true },
  log: { levels: ["trace", "debug", "info", "warn", "error", "fatal"] }
};
function stripIgnoredFields(result) {
  const { level, time, pid, hostname, ...rest } = result;
  return rest;
}
const _pinoIntegration = core.defineIntegration((userOptions = {}) => {
  const options = {
    autoInstrument: userOptions.autoInstrument !== false,
    error: { ...DEFAULT_OPTIONS.error, ...userOptions.error },
    log: { ...DEFAULT_OPTIONS.log, ...userOptions.log }
  };
  function shouldTrackLogger(logger) {
    const override = logger[SENTRY_TRACK_SYMBOL];
    return override === "track" || override !== "ignore" && options.autoInstrument;
  }
  return {
    name: "Pino",
    setup: (client) => {
      const enableLogs = !!client.getOptions().enableLogs;
      const integratedChannel = diagnosticsChannel.tracingChannel("pino_asJson");
      function onPinoStart(self, args, result) {
        if (!shouldTrackLogger(self)) {
          return;
        }
        const resultObj = stripIgnoredFields(result);
        const [captureObj, message, levelNumber] = args;
        const level = self?.levels?.labels?.[levelNumber] || "info";
        const messageKey = getPinoKey(self, "pino.messageKey", "msg");
        const logMessage = message || resultObj?.[messageKey] || "";
        if (enableLogs && options.log.levels.includes(level)) {
          const attributes = {
            ...resultObj,
            "sentry.origin": "auto.log.pino",
            "pino.logger.level": levelNumber
          };
          core._INTERNAL_captureLog({ level, message: logMessage, attributes });
        }
        if (options.error.levels.includes(level)) {
          const captureContext = {
            level: core.severityLevelFromString(level)
          };
          core.withScope((scope) => {
            scope.addEventProcessor((event) => {
              event.logger = "pino";
              core.addExceptionMechanism(event, {
                handled: options.error.handled,
                type: "auto.log.pino"
              });
              return event;
            });
            const error = captureObj[getPinoKey(self, "pino.errorKey", "err")];
            if (error) {
              core.captureException(error, captureContext);
              return;
            }
            core.captureMessage(logMessage, captureContext);
          });
        }
      }
      integratedChannel.end.subscribe((data) => {
        const {
          instance,
          arguments: args,
          result
        } = data;
        onPinoStart(instance, args, JSON.parse(result));
      });
    }
  };
});
const pinoIntegration = Object.assign(_pinoIntegration, {
  trackLogger(logger) {
    if (logger && typeof logger === "object" && "levels" in logger) {
      logger[SENTRY_TRACK_SYMBOL] = "track";
    }
  },
  untrackLogger(logger) {
    if (logger && typeof logger === "object" && "levels" in logger) {
      logger[SENTRY_TRACK_SYMBOL] = "ignore";
    }
  }
});

exports.pinoIntegration = pinoIntegration;
//# sourceMappingURL=pino.js.map
