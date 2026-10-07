import { compose } from 'redux';
function extensionComposeStub() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return compose;
  return compose(...funcs);
}
export const composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : extensionComposeStub;
export const devToolsEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
  return function (noop) {
    return noop;
  };
};
export { composeWithDevTools as composeWithDevToolsDevelopmentOnly, devToolsEnhancer as devToolsEnhancerDevelopmentOnly } from './developmentOnly';
export { composeWithDevTools as composeWithDevToolsLogOnly, devToolsEnhancer as devToolsEnhancerLogOnly } from './logOnly';
export { composeWithDevTools as composeWithDevToolsLogOnlyInProduction, devToolsEnhancer as devToolsEnhancerLogOnlyInProduction } from './logOnlyInProduction';