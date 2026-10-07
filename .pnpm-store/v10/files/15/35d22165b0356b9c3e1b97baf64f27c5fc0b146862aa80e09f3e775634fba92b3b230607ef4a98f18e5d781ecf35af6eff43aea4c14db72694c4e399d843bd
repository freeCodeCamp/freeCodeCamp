"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devToolsEnhancer = exports.composeWithDevTools = void 0;
var _redux = require("redux");
var logOnly = _interopRequireWildcard(require("./logOnly"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function extensionComposeStub() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return _redux.compose;
  return (0, _redux.compose)(...funcs);
}
const composeWithDevTools = exports.composeWithDevTools = process.env.NODE_ENV === 'production' ? logOnly.composeWithDevTools : typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : extensionComposeStub;
const devToolsEnhancer = exports.devToolsEnhancer = process.env.NODE_ENV === 'production' ? logOnly.devToolsEnhancer : typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
  return function (noop) {
    return noop;
  };
};