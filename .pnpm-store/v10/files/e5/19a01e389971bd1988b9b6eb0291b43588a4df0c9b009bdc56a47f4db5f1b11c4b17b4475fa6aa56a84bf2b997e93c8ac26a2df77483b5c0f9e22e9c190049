"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devToolsEnhancer = exports.composeWithDevTools = void 0;
var _redux = require("redux");
function extensionComposeStub() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return _redux.compose;
  return (0, _redux.compose)(...funcs);
}
const composeWithDevTools = exports.composeWithDevTools = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : extensionComposeStub;
const devToolsEnhancer = exports.devToolsEnhancer = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
  return function (noop) {
    return noop;
  };
};