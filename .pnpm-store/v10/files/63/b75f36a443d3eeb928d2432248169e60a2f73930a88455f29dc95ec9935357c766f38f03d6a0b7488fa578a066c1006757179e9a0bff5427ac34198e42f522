"use strict";

exports.__esModule = true;
var _exportNames = {
  batch: true
};
Object.defineProperty(exports, "batch", {
  enumerable: true,
  get: function () {
    return _reactBatchedUpdates.unstable_batchedUpdates;
  }
});

var _shim = require("use-sync-external-store/shim");

var _withSelector = require("use-sync-external-store/shim/with-selector");

var _reactBatchedUpdates = require("./utils/reactBatchedUpdates");

var _batch = require("./utils/batch");

var _useSelector = require("./hooks/useSelector");

var _connect = require("./components/connect");

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
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.
(0, _useSelector.initializeUseSelector)(_withSelector.useSyncExternalStoreWithSelector);
(0, _connect.initializeConnect)(_shim.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0, _batch.setBatch)(_reactBatchedUpdates.unstable_batchedUpdates);