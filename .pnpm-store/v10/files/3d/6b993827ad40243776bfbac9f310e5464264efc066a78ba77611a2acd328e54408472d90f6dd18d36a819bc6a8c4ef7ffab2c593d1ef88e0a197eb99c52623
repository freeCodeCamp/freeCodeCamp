"use strict";

exports.__esModule = true;
exports.createReduxContextHook = createReduxContextHook;
exports.useReduxContext = void 0;

var _react = require("react");

var _Context = require("../components/Context");

/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
function createReduxContextHook(context = _Context.ReactReduxContext) {
  return function useReduxContext() {
    const contextValue = (0, _react.useContext)(context);

    if (process.env.NODE_ENV !== 'production' && !contextValue) {
      throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
    }

    return contextValue;
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */


const useReduxContext = /*#__PURE__*/createReduxContextHook();
exports.useReduxContext = useReduxContext;