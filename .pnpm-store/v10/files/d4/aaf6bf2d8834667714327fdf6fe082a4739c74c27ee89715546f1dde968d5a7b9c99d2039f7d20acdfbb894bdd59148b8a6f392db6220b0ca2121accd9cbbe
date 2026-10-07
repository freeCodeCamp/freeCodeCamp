"use strict";

exports.__esModule = true;
exports.clearCompileError = clearCompileError;
exports.clearRuntimeErrors = clearRuntimeErrors;
exports.handleRuntimeError = handleRuntimeError;
exports.isWebpackCompileError = isWebpackCompileError;
exports.showCompileError = showCompileError;
exports.showRuntimeErrors = showRuntimeErrors;
// Use `self` here instead of `window` so it works in non-window environments (like Workers)
self._gatsbyEvents = self._gatsbyEvents || [];
function clearCompileError() {
  self._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `CLEAR_COMPILE_ERROR`
  }]);
}
function clearRuntimeErrors(dismissOverlay) {
  if (typeof dismissOverlay === `undefined` || dismissOverlay) {
    self._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `CLEAR_RUNTIME_ERRORS`
    }]);
  }
}
function showCompileError(message) {
  if (!message) {
    return;
  }
  self._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `SHOW_COMPILE_ERROR`,
    payload: message
  }]);
}
function showRuntimeErrors(errors) {
  if (!errors || !errors.length) {
    return;
  }
  self._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `SHOW_RUNTIME_ERRORS`,
    payload: errors
  }]);
}
function isWebpackCompileError(error) {
  return /Module [A-z ]+\(from/.test(error.message) || /Cannot find module/.test(error.message);
}
function handleRuntimeError(error) {
  if (error && !isWebpackCompileError(error)) {
    self._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `HANDLE_RUNTIME_ERROR`,
      payload: [error]
    }]);
  }
}
//# sourceMappingURL=fast-refresh-module.js.map