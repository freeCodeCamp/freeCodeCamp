Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const carrier = require('../carrier.js');
const debugBuild = require('../debug-build.js');
const worldwide = require('./worldwide.js');

const CONSOLE_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
];
const PREFIX = "Sentry Logger ";
const originalConsoleMethods = {};
function consoleSandbox(callback) {
  if (!("console" in worldwide.GLOBAL_OBJ)) {
    return callback();
  }
  const console = worldwide.GLOBAL_OBJ.console;
  const wrappedFuncs = {};
  const wrappedLevels = Object.keys(originalConsoleMethods);
  wrappedLevels.forEach((level) => {
    const originalConsoleMethod = originalConsoleMethods[level];
    wrappedFuncs[level] = console[level];
    console[level] = originalConsoleMethod;
  });
  try {
    return callback();
  } finally {
    wrappedLevels.forEach((level) => {
      console[level] = wrappedFuncs[level];
    });
  }
}
function enable() {
  _getLoggerSettings().enabled = true;
}
function disable() {
  _getLoggerSettings().enabled = false;
}
function isEnabled() {
  return _getLoggerSettings().enabled;
}
function log(...args) {
  _maybeLog("log", ...args);
}
function warn(...args) {
  _maybeLog("warn", ...args);
}
function error(...args) {
  _maybeLog("error", ...args);
}
function _maybeLog(level, ...args) {
  if (!debugBuild.DEBUG_BUILD) {
    return;
  }
  if (isEnabled()) {
    consoleSandbox(() => {
      worldwide.GLOBAL_OBJ.console[level](`${PREFIX}[${level}]:`, ...args);
    });
  }
}
function _getLoggerSettings() {
  if (!debugBuild.DEBUG_BUILD) {
    return { enabled: false };
  }
  return carrier.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
}
const debug = {
  /** Enable logging. */
  enable,
  /** Disable logging. */
  disable,
  /** Check if logging is enabled. */
  isEnabled,
  /** Log a message. */
  log,
  /** Log a warning. */
  warn,
  /** Log an error. */
  error
};

exports.CONSOLE_LEVELS = CONSOLE_LEVELS;
exports.consoleSandbox = consoleSandbox;
exports.debug = debug;
exports.originalConsoleMethods = originalConsoleMethods;
//# sourceMappingURL=debug-logger.js.map
