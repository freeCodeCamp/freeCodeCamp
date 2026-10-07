"use strict";

exports.__esModule = true;
var _exportNames = {
  batch: true
};
exports.batch = void 0;

var _shim = require("use-sync-external-store/shim");

var _withSelector = require("use-sync-external-store/shim/with-selector");

var _useSelector = require("./hooks/useSelector");

var _connect = require("./components/connect");

var _batch = require("./utils/batch");

var _exports = require("./exports");

Object.keys(_exports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _exports[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exports[key];
    }
  });
});
// The "alternate renderers" entry point is primarily here to fall back on a no-op
// version of `unstable_batchedUpdates`, for use with renderers other than ReactDOM/RN.
// Examples include React-Three-Fiber, Ink, etc.
// Because of that, we'll also assume the useSyncExternalStore compat shim is needed.
(0, _useSelector.initializeUseSelector)(_withSelector.useSyncExternalStoreWithSelector);
(0, _connect.initializeConnect)(_shim.useSyncExternalStore);
// For other renderers besides ReactDOM and React Native,
// use the default noop batch function
const batch = (0, _batch.getBatch)();
exports.batch = batch;