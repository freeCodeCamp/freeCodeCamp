Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const internal = require('./internal.js');
const parameterize = require('../utils/parameterize.js');

function captureLog(level, message, attributes, scope, severityNumber) {
  internal._INTERNAL_captureLog({ level, message, attributes, severityNumber }, scope);
}
function trace(message, attributes, { scope } = {}) {
  captureLog("trace", message, attributes, scope);
}
function debug(message, attributes, { scope } = {}) {
  captureLog("debug", message, attributes, scope);
}
function info(message, attributes, { scope } = {}) {
  captureLog("info", message, attributes, scope);
}
function warn(message, attributes, { scope } = {}) {
  captureLog("warn", message, attributes, scope);
}
function error(message, attributes, { scope } = {}) {
  captureLog("error", message, attributes, scope);
}
function fatal(message, attributes, { scope } = {}) {
  captureLog("fatal", message, attributes, scope);
}

exports.fmt = parameterize.fmt;
exports.debug = debug;
exports.error = error;
exports.fatal = fatal;
exports.info = info;
exports.trace = trace;
exports.warn = warn;
//# sourceMappingURL=public-api.js.map
