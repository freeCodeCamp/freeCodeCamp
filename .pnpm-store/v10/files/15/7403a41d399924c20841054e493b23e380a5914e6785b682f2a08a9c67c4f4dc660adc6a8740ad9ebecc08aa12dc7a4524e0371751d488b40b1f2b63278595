Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const capture = require('./capture.js');
const core = require('@sentry/core');

function trace(...args) {
  capture.captureLog("trace", ...args);
}
function debug(...args) {
  capture.captureLog("debug", ...args);
}
function info(...args) {
  capture.captureLog("info", ...args);
}
function warn(...args) {
  capture.captureLog("warn", ...args);
}
function error(...args) {
  capture.captureLog("error", ...args);
}
function fatal(...args) {
  capture.captureLog("fatal", ...args);
}

exports.fmt = core.fmt;
exports.debug = debug;
exports.error = error;
exports.fatal = fatal;
exports.info = info;
exports.trace = trace;
exports.warn = warn;
//# sourceMappingURL=exports.js.map
