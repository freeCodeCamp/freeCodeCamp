import { _INTERNAL_captureLog } from './internal.js';
export { fmt } from '../utils/parameterize.js';

function captureLog(level, message, attributes, scope, severityNumber) {
  _INTERNAL_captureLog({ level, message, attributes, severityNumber }, scope);
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

export { debug, error, fatal, info, trace, warn };
//# sourceMappingURL=public-api.js.map
