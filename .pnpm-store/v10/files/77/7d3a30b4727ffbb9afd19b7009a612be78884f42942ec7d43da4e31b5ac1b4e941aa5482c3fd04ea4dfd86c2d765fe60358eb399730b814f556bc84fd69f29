/// <reference types="react" />
import type { EqualityFn } from '../types';
import type { uSESWS } from '../utils/useSyncExternalStore';
export declare type CheckFrequency = 'never' | 'once' | 'always';
export interface UseSelectorOptions<Selected = unknown> {
    equalityFn?: EqualityFn<Selected>;
    stabilityCheck?: CheckFrequency;
    noopCheck?: CheckFrequency;
}
export interface UseSelector {
    <TState = unknown, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: EqualityFn<Selected>): Selected;
    <TState = unknown, Selected = unknown>(selector: (state: TState) => Selected, options?: UseSelectorOptions<Selected>): Selected;
}
export declare const initializeUseSelector: (fn: uSESWS) => void;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */
export declare function createSelectorHook(context?: import("react").Context<import("../components/Context").ReactReduxContextValue<any, import("redux").AnyAction>>): UseSelector;
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
export declare const useSelector: UseSelector;
