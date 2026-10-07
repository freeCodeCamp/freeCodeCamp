import type { Context } from 'react'
import type { Action as BasicAction, AnyAction, Store } from 'redux'
import type { ReactReduxContextValue } from '../components/Context'
import { ReactReduxContext } from '../components/Context'
import {
  useReduxContext as useDefaultReduxContext,
  createReduxContextHook,
} from './useReduxContext'

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */
export function createStoreHook<
  S = unknown,
  A extends BasicAction = AnyAction
  // @ts-ignore
>(context?: Context<ReactReduxContextValue<S, A>> = ReactReduxContext) {
  const useReduxContext =
    // @ts-ignore
    context === ReactReduxContext
      ? useDefaultReduxContext
      : // @ts-ignore
        createReduxContextHook(context)
  return function useStore<
    State = S,
    Action extends BasicAction = A
    // @ts-ignore
  >() {
    const { store } = useReduxContext()!
    // @ts-ignore
    return store as Store<State, Action>
  }
}

/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */
export const useStore = /*#__PURE__*/ createStoreHook()
