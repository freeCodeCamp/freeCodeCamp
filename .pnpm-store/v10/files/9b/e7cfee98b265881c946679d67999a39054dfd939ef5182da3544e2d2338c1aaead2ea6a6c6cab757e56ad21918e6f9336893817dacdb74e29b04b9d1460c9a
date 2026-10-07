import { useCallback, useDebugValue, useRef } from 'react'

import {
  createReduxContextHook,
  useReduxContext as useDefaultReduxContext,
} from './useReduxContext'
import { ReactReduxContext } from '../components/Context'
import type { EqualityFn, NoInfer } from '../types'
import type { uSESWS } from '../utils/useSyncExternalStore'
import { notInitialized } from '../utils/useSyncExternalStore'

export type CheckFrequency = 'never' | 'once' | 'always'

export interface UseSelectorOptions<Selected = unknown> {
  equalityFn?: EqualityFn<Selected>
  stabilityCheck?: CheckFrequency
  noopCheck?: CheckFrequency
}

export interface UseSelector {
  <TState = unknown, Selected = unknown>(
    selector: (state: TState) => Selected,
    equalityFn?: EqualityFn<Selected>
  ): Selected
  <TState = unknown, Selected = unknown>(
    selector: (state: TState) => Selected,
    options?: UseSelectorOptions<Selected>
  ): Selected
}

let useSyncExternalStoreWithSelector = notInitialized as uSESWS
export const initializeUseSelector = (fn: uSESWS) => {
  useSyncExternalStoreWithSelector = fn
}

const refEquality: EqualityFn<any> = (a, b) => a === b

/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */
export function createSelectorHook(context = ReactReduxContext): UseSelector {
  const useReduxContext =
    context === ReactReduxContext
      ? useDefaultReduxContext
      : createReduxContextHook(context)

  return function useSelector<TState, Selected extends unknown>(
    selector: (state: TState) => Selected,
    equalityFnOrOptions:
      | EqualityFn<NoInfer<Selected>>
      | UseSelectorOptions<NoInfer<Selected>> = {}
  ): Selected {
    const {
      equalityFn = refEquality,
      stabilityCheck = undefined,
      noopCheck = undefined,
    } = typeof equalityFnOrOptions === 'function'
      ? { equalityFn: equalityFnOrOptions }
      : equalityFnOrOptions
    if (process.env.NODE_ENV !== 'production') {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`)
      }
      if (typeof selector !== 'function') {
        throw new Error(`You must pass a function as a selector to useSelector`)
      }
      if (typeof equalityFn !== 'function') {
        throw new Error(
          `You must pass a function as an equality function to useSelector`
        )
      }
    }

    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck,
    } = useReduxContext()!

    const firstRun = useRef(true)

    const wrappedSelector = useCallback<typeof selector>(
      {
        [selector.name](state: TState) {
          const selected = selector(state)
          if (process.env.NODE_ENV !== 'production') {
            const finalStabilityCheck =
              typeof stabilityCheck === 'undefined'
                ? globalStabilityCheck
                : stabilityCheck
            if (
              finalStabilityCheck === 'always' ||
              (finalStabilityCheck === 'once' && firstRun.current)
            ) {
              const toCompare = selector(state)
              if (!equalityFn(selected, toCompare)) {
                let stack: string | undefined = undefined
                try {
                  throw new Error()
                } catch (e) {
                  ;({ stack } = e as Error)
                }
                console.warn(
                  'Selector ' +
                    (selector.name || 'unknown') +
                    ' returned a different result when called with the same parameters. This can lead to unnecessary rerenders.' +
                    '\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization',
                  {
                    state,
                    selected,
                    selected2: toCompare,
                    stack,
                  }
                )
              }
            }
            const finalNoopCheck =
              typeof noopCheck === 'undefined' ? globalNoopCheck : noopCheck
            if (
              finalNoopCheck === 'always' ||
              (finalNoopCheck === 'once' && firstRun.current)
            ) {
              // @ts-ignore
              if (selected === state) {
                let stack: string | undefined = undefined
                try {
                  throw new Error()
                } catch (e) {
                  ;({ stack } = e as Error)
                }
                console.warn(
                  'Selector ' +
                    (selector.name || 'unknown') +
                    ' returned the root state when called. This can lead to unnecessary rerenders.' +
                    '\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.',
                  { stack }
                )
              }
            }
            if (firstRun.current) firstRun.current = false
          }
          return selected
        },
      }[selector.name],
      [selector, globalStabilityCheck, stabilityCheck]
    )

    const selectedState = useSyncExternalStoreWithSelector(
      subscription.addNestedSub,
      store.getState,
      getServerState || store.getState,
      wrappedSelector,
      equalityFn
    )

    useDebugValue(selectedState)

    return selectedState
  }
}

/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */
export const useSelector = /*#__PURE__*/ createSelectorHook()
