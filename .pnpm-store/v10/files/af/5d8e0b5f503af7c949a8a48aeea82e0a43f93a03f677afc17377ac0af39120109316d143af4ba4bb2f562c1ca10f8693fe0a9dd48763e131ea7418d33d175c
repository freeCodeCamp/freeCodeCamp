"use strict";

exports.__esModule = true;
exports.createDispatchHook = createDispatchHook;
exports.useDispatch = void 0;

var _Context = require("../components/Context");

var _useStore = require("./useStore");

/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */
function createDispatchHook(context = _Context.ReactReduxContext) {
  const useStore = // @ts-ignore
  context === _Context.ReactReduxContext ? _useStore.useStore : (0, _useStore.createStoreHook)(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */


const useDispatch = /*#__PURE__*/createDispatchHook();
exports.useDispatch = useDispatch;