import { useContext } from 'react'
import { ReactReduxContext } from '../components/Context'
import type { ReactReduxContextValue } from '../components/Context'

/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
export function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext(): ReactReduxContextValue | null {
    const contextValue = useContext(context)

    if (process.env.NODE_ENV !== 'production' && !contextValue) {
      throw new Error(
        'could not find react-redux context value; please ensure the component is wrapped in a <Provider>'
      )
    }

    return contextValue
  }
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
export const useReduxContext = /*#__PURE__*/ createReduxContextHook()
