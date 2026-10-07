import assign from './utils/assign';
import { compose } from 'redux';
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
      return assign(store, 'dispatch', dispatch);
    };
  };
}
function composeWithEnhancer(config) {
  return function () {
    return compose(compose(...arguments), enhancer(config));
  };
}
export function composeWithDevTools() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    if (funcs.length === 0) return enhancer();
    if (typeof funcs[0] === 'object') return composeWithEnhancer(funcs[0]);
    return composeWithEnhancer()(...funcs);
  }
  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return compose;
  return compose(...funcs);
}
export const devToolsEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? enhancer : function () {
  return function (noop) {
    return noop;
  };
};