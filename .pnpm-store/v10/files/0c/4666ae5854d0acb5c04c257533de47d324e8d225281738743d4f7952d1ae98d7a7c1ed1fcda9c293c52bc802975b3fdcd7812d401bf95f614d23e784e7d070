import { Action, UnknownAction } from './actions'
import { Reducer } from './reducers'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _$$observable from '../utils/symbol-observable'

/**
 * A *dispatching function* (or simply *dispatch function*) is a function that
 * accepts an action or an async action; it then may or may not dispatch one
 * or more actions to the store.
 *
 * We must distinguish between dispatching functions in general and the base
 * `dispatch` function provided by the store instance without any middleware.
 *
 * The base dispatch function *always* synchronously sends an action to the
 * store's reducer, along with the previous state returned by the store, to
 * calculate a new state. It expects actions to be plain objects ready to be
 * consumed by the reducer.
 *
 * Middleware wraps the base dispatch function. It allows the dispatch
 * function to handle async actions in addition to actions. Middleware may
 * transform, delay, ignore, or otherwise interpret actions or async actions
 * before passing them to the next middleware.
 *
 * @template A The type of things (actions or otherwise) which may be
 *   dispatched.
 */
export interface Dispatch<A extends Action = UnknownAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T
}

/**
 * Function to remove listener added by `Store.subscribe()`.
 */
export interface Unsubscribe {
  (): void
}

export type ListenerCallback = () => void

declare global {
  interface SymbolConstructor {
    readonly observable: symbol
  }
}

/**
 * A minimal observable of state changes.
 * For more information, see the observable proposal:
 * https://github.com/tc39/proposal-observable
 */
export type Observable<T> = {
  /**
   * The minimal observable subscription method.
   * @param {Object} observer Any object that can be used as an observer.
   * The observer object should have a `next` method.
   * @returns {subscription} An object with an `unsubscribe` method that can
   * be used to unsubscribe the observable from the store, and prevent further
   * emission of values from the observable.
   */
  subscribe: (observer: Observer<T>) => { unsubscribe: Unsubscribe }
  [Symbol.observable](): Observable<T>
}

/**
 * An Observer is used to receive data from an Observable, and is supplied as
 * an argument to subscribe.
 */
export type Observer<T> = {
  next?(value: T): void
}

/**
 * A store is an object that holds the application's state tree.
 * There should only be a single store in a Redux app, as the composition
 * happens on the reducer level.
 *
 * @template S The type of state held by this store.
 * @template A the type of actions which may be dispatched by this store.
 * @template StateExt any extension to state from store enhancers
 */
export interface Store<
  S = any,
  A extends Action = UnknownAction,
  StateExt extends unknown = unknown
> {
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will be
   * considered the **next** state of the tree, and the change listeners will
   * be notified.
   *
   * The base implementation only supports plain object actions. If you want
   * to dispatch a Promise, an Observable, a thunk, or something else, you
   * need to wrap your store creating function into the corresponding
   * middleware. For example, see the documentation for the `redux-thunk`
   * package. Even the middleware will eventually dispatch plain object
   * actions using this method.
   *
   * @param action A plain object representing “what changed”. It is a good
   *   idea to keep actions serializable so you can record and replay user
   *   sessions, or use the time travelling `redux-devtools`. An action must
   *   have a `type` property which may not be `undefined`. It is a good idea
   *   to use string constants for action types.
   *
   * @returns For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  dispatch: Dispatch<A>

  /**
   * Reads the state tree managed by the store.
   *
   * @returns The current state tree of your application.
   */
  getState(): S & StateExt

  /**
   * Adds a change listener. It will be called any time an action is
   * dispatched, and some part of the state tree may potentially have changed.
   * You may then call `getState()` to read the current state tree inside the
   * callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked,
   * this will not have any effect on the `dispatch()` that is currently in
   * progress. However, the next `dispatch()` call, whether nested or not,
   * will use a more recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all states changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param listener A callback to be invoked on every dispatch.
   * @returns A function to remove this change listener.
   */
  subscribe(listener: ListenerCallback): Unsubscribe

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param nextReducer The reducer for the store to use instead.
   */
  replaceReducer(nextReducer: Reducer<S, A>): void

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  [Symbol.observable](): Observable<S & StateExt>
}

export type UnknownIfNonSpecific<T> = {} extends T ? unknown : T

/**
 * A store creator is a function that creates a Redux store. Like with
 * dispatching function, we must distinguish the base store creator,
 * `createStore(reducer, preloadedState)` exported from the Redux package, from
 * store creators that are returned from the store enhancers.
 *
 * @template S The type of state to be held by the store.
 * @template A The type of actions which may be dispatched.
 * @template PreloadedState The initial state that is passed into the reducer.
 * @template Ext Store extension that is mixed in to the Store type.
 * @template StateExt State extension that is mixed into the state type.
 */
export interface StoreCreator {
  <S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}>(
    reducer: Reducer<S, A>,
    enhancer?: StoreEnhancer<Ext, StateExt>
  ): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext
  <
    S,
    A extends Action,
    Ext extends {} = {},
    StateExt extends {} = {},
    PreloadedState = S
  >(
    reducer: Reducer<S, A, PreloadedState>,
    preloadedState?: PreloadedState | undefined,
    enhancer?: StoreEnhancer<Ext>
  ): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext
}

/**
 * A store enhancer is a higher-order function that composes a store creator
 * to return a new, enhanced store creator. This is similar to middleware in
 * that it allows you to alter the store interface in a composable way.
 *
 * Store enhancers are much the same concept as higher-order components in
 * React, which are also occasionally called “component enhancers”.
 *
 * Because a store is not an instance, but rather a plain-object collection of
 * functions, copies can be easily created and modified without mutating the
 * original store. There is an example in `compose` documentation
 * demonstrating that.
 *
 * Most likely you'll never write a store enhancer, but you may use the one
 * provided by the developer tools. It is what makes time travel possible
 * without the app being aware it is happening. Amusingly, the Redux
 * middleware implementation is itself a store enhancer.
 *
 * @template Ext Store extension that is mixed into the Store type.
 * @template StateExt State extension that is mixed into the state type.
 */
export type StoreEnhancer<Ext extends {} = {}, StateExt extends {} = {}> = <
  NextExt extends {},
  NextStateExt extends {}
>(
  next: StoreEnhancerStoreCreator<NextExt, NextStateExt>
) => StoreEnhancerStoreCreator<NextExt & Ext, NextStateExt & StateExt>
export type StoreEnhancerStoreCreator<
  Ext extends {} = {},
  StateExt extends {} = {}
> = <S, A extends Action, PreloadedState>(
  reducer: Reducer<S, A, PreloadedState>,
  preloadedState?: PreloadedState | undefined
) => Store<S, A, StateExt> & Ext
