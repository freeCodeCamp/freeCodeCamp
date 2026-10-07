"use strict";

exports.__esModule = true;
exports.getEngineContext = getEngineContext;
exports.runWithEngineContext = runWithEngineContext;
var _async_hooks = require("async_hooks");
let asyncLocalStorage;
function getAsyncLocalStorage() {
  var _asyncLocalStorage;
  return (_asyncLocalStorage = asyncLocalStorage) !== null && _asyncLocalStorage !== void 0 ? _asyncLocalStorage : asyncLocalStorage = new _async_hooks.AsyncLocalStorage();
}
function getEngineContext() {
  return getAsyncLocalStorage().getStore();
}
function runWithEngineContext(context, fn) {
  // @ts-ignore typings are incorrect, run() returns the result of fn()
  return getAsyncLocalStorage().run(context, fn);
}
//# sourceMappingURL=engine-context.js.map