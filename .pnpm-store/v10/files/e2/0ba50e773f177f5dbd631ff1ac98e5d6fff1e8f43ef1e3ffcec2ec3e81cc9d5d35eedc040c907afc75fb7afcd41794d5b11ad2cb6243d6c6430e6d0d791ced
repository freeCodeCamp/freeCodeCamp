"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
var _exportNames = {
  Provider: true,
  connect: true,
  ReactReduxContext: true,
  useDispatch: true,
  createDispatchHook: true,
  useSelector: true,
  createSelectorHook: true,
  useStore: true,
  createStoreHook: true,
  shallowEqual: true
};
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function () {
    return _Provider.default;
  }
});
Object.defineProperty(exports, "connect", {
  enumerable: true,
  get: function () {
    return _connect.default;
  }
});
Object.defineProperty(exports, "ReactReduxContext", {
  enumerable: true,
  get: function () {
    return _Context.ReactReduxContext;
  }
});
Object.defineProperty(exports, "useDispatch", {
  enumerable: true,
  get: function () {
    return _useDispatch.useDispatch;
  }
});
Object.defineProperty(exports, "createDispatchHook", {
  enumerable: true,
  get: function () {
    return _useDispatch.createDispatchHook;
  }
});
Object.defineProperty(exports, "useSelector", {
  enumerable: true,
  get: function () {
    return _useSelector.useSelector;
  }
});
Object.defineProperty(exports, "createSelectorHook", {
  enumerable: true,
  get: function () {
    return _useSelector.createSelectorHook;
  }
});
Object.defineProperty(exports, "useStore", {
  enumerable: true,
  get: function () {
    return _useStore.useStore;
  }
});
Object.defineProperty(exports, "createStoreHook", {
  enumerable: true,
  get: function () {
    return _useStore.createStoreHook;
  }
});
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function () {
    return _shallowEqual.default;
  }
});

var _Provider = _interopRequireDefault(require("./components/Provider"));

var _connect = _interopRequireDefault(require("./components/connect"));

var _Context = require("./components/Context");

var _useDispatch = require("./hooks/useDispatch");

var _useSelector = require("./hooks/useSelector");

var _useStore = require("./hooks/useStore");

var _shallowEqual = _interopRequireDefault(require("./utils/shallowEqual"));

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});