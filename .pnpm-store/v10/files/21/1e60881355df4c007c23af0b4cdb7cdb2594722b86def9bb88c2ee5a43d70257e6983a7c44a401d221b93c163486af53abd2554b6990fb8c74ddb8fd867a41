"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeWithDevTools = void 0;
Object.defineProperty(exports, "composeWithDevToolsDevelopmentOnly", {
  enumerable: true,
  get: function () {
    return _developmentOnly.composeWithDevTools;
  }
});
Object.defineProperty(exports, "composeWithDevToolsLogOnly", {
  enumerable: true,
  get: function () {
    return _logOnly.composeWithDevTools;
  }
});
Object.defineProperty(exports, "composeWithDevToolsLogOnlyInProduction", {
  enumerable: true,
  get: function () {
    return _logOnlyInProduction.composeWithDevTools;
  }
});
exports.devToolsEnhancer = void 0;
Object.defineProperty(exports, "devToolsEnhancerDevelopmentOnly", {
  enumerable: true,
  get: function () {
    return _developmentOnly.devToolsEnhancer;
  }
});
Object.defineProperty(exports, "devToolsEnhancerLogOnly", {
  enumerable: true,
  get: function () {
    return _logOnly.devToolsEnhancer;
  }
});
Object.defineProperty(exports, "devToolsEnhancerLogOnlyInProduction", {
  enumerable: true,
  get: function () {
    return _logOnlyInProduction.devToolsEnhancer;
  }
});
var _redux = require("redux");
var _developmentOnly = require("./developmentOnly");
var _logOnly = require("./logOnly");
var _logOnlyInProduction = require("./logOnlyInProduction");
function extensionComposeStub() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return _redux.compose;
  return (0, _redux.compose)(...funcs);
}
const composeWithDevTools = exports.composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : extensionComposeStub;
const devToolsEnhancer = exports.devToolsEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
  return function (noop) {
    return noop;
  };
};