"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeWithDevTools = composeWithDevTools;
exports.devToolsEnhancer = void 0;
var _assign = _interopRequireDefault(require("./utils/assign"));
var _redux = require("redux");
function enhancer(options) {
  const config = options || {};
  config.features = {
    pause: true,
    export: true,
    test: true
  };
  config.type = 'redux';
  if (config.autoPause === undefined) config.autoPause = true;
  if (config.latency === undefined) config.latency = 500;
  return function (createStore) {
    return function (reducer, preloadedState) {
      const store = createStore(reducer, preloadedState);
      const origDispatch = store.dispatch;
      const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(config);
      devTools.init(store.getState());
      const dispatch = function (action) {
        const r = origDispatch(action);
        devTools.send(action, store.getState());
        return r;
      };
      if (Object.assign) return Object.assign(store, {
        dispatch: dispatch
      });
      return (0, _assign.default)(store, 'dispatch', dispatch);
    };
  };
}
function composeWithEnhancer(config) {
  return function () {
    return (0, _redux.compose)((0, _redux.compose)(...arguments), enhancer(config));
  };
}
function composeWithDevTools() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    if (funcs.length === 0) return enhancer();
    if (typeof funcs[0] === 'object') return composeWithEnhancer(funcs[0]);
    return composeWithEnhancer()(...funcs);
  }
  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return _redux.compose;
  return (0, _redux.compose)(...funcs);
}
const devToolsEnhancer = exports.devToolsEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? enhancer : function () {
  return function (noop) {
    return noop;
  };
};