Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const internal = require('../logs/internal.js');
const utils = require('../logs/utils.js');
const is = require('../utils/is.js');
const normalize = require('../utils/normalize.js');

const DEFAULT_CAPTURED_LEVELS = ["trace", "debug", "info", "warn", "error", "fatal"];
function createConsolaReporter(options = {}) {
  const levels = new Set(options.levels ?? DEFAULT_CAPTURED_LEVELS);
  const providedClient = options.client;
  return {
    log(logObj) {
      const { type, level, message: consolaMessage, args, tag, date: _date, ...rest } = logObj;
      const client = providedClient || currentScopes.getClient();
      if (!client) {
        return;
      }
      const logSeverityLevel = getLogSeverityLevel(type, level);
      if (!levels.has(logSeverityLevel)) {
        return;
      }
      const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = client.getOptions();
      const attributes = {};
      for (const [key, value] of Object.entries(rest)) {
        attributes[key] = normalize.normalize(value, normalizeDepth, normalizeMaxBreadth);
      }
      attributes["sentry.origin"] = "auto.log.consola";
      if (tag) {
        attributes["consola.tag"] = tag;
      }
      if (type) {
        attributes["consola.type"] = type;
      }
      if (level != null && typeof level === "number") {
        attributes["consola.level"] = level;
      }
      const extractionResult = processExtractedAttributes(
        defaultExtractAttributes(args, normalizeDepth, normalizeMaxBreadth),
        normalizeDepth,
        normalizeMaxBreadth
      );
      if (extractionResult?.attributes) {
        Object.assign(attributes, extractionResult.attributes);
      }
      internal._INTERNAL_captureLog({
        level: logSeverityLevel,
        message: extractionResult?.message || consolaMessage || args && utils.formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth) || "",
        attributes
      });
    }
  };
}
const CONSOLA_TYPE_TO_LOG_SEVERITY_LEVEL_MAP = {
  // Consola built-in types
  silent: "trace",
  fatal: "fatal",
  error: "error",
  warn: "warn",
  log: "info",
  info: "info",
  success: "info",
  fail: "error",
  ready: "info",
  start: "info",
  box: "info",
  debug: "debug",
  trace: "trace",
  verbose: "debug",
  // Custom types that might exist
  critical: "fatal",
  notice: "info"
};
const CONSOLA_LEVEL_TO_LOG_SEVERITY_LEVEL_MAP = {
  0: "fatal",
  // Fatal and Error
  1: "warn",
  // Warnings
  2: "info",
  // Normal logs
  3: "info",
  // Informational logs, success, fail, ready, start, ...
  4: "debug",
  // Debug logs
  5: "trace"
  // Trace logs
};
function getLogSeverityLevel(type, level) {
  if (type === "verbose") {
    return "debug";
  }
  if (type === "silent") {
    return "trace";
  }
  if (type) {
    const mappedLevel = CONSOLA_TYPE_TO_LOG_SEVERITY_LEVEL_MAP[type];
    if (mappedLevel) {
      return mappedLevel;
    }
  }
  if (typeof level === "number") {
    const mappedLevel = CONSOLA_LEVEL_TO_LOG_SEVERITY_LEVEL_MAP[level];
    if (mappedLevel) {
      return mappedLevel;
    }
  }
  return "info";
}
function defaultExtractAttributes(args, normalizeDepth, normalizeMaxBreadth) {
  if (!args?.length) {
    return { message: "" };
  }
  const message = utils.formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth);
  const firstArg = args[0];
  if (is.isPlainObject(firstArg)) {
    const remainingArgsStartIndex = typeof args[1] === "string" ? 2 : 1;
    const remainingArgs = args.slice(remainingArgsStartIndex);
    return {
      message,
      // Object content from first arg is added as attributes
      attributes: firstArg,
      // Add remaining args as message parameters
      messageParameters: remainingArgs
    };
  } else {
    const followingArgs = args.slice(1);
    const shouldAddTemplateAttr = followingArgs.length > 0 && typeof firstArg === "string" && !utils.hasConsoleSubstitutions(firstArg);
    return {
      message,
      messageTemplate: shouldAddTemplateAttr ? firstArg : void 0,
      messageParameters: shouldAddTemplateAttr ? followingArgs : void 0
    };
  }
}
function processExtractedAttributes(extractionResult, normalizeDepth, normalizeMaxBreadth) {
  const { message, attributes, messageTemplate, messageParameters } = extractionResult;
  const messageParamAttributes = {};
  if (messageTemplate && messageParameters) {
    const templateAttrs = utils.createConsoleTemplateAttributes(messageTemplate, messageParameters);
    for (const [key, value] of Object.entries(templateAttrs)) {
      messageParamAttributes[key] = key.startsWith("sentry.message.parameter.") ? normalize.normalize(value, normalizeDepth, normalizeMaxBreadth) : value;
    }
  } else if (messageParameters && messageParameters.length > 0) {
    messageParameters.forEach((arg, index) => {
      messageParamAttributes[`sentry.message.parameter.${index}`] = normalize.normalize(arg, normalizeDepth, normalizeMaxBreadth);
    });
  }
  return {
    message,
    attributes: {
      ...normalize.normalize(attributes, normalizeDepth, normalizeMaxBreadth),
      ...messageParamAttributes
    }
  };
}

exports.createConsolaReporter = createConsolaReporter;
//# sourceMappingURL=consola.js.map
