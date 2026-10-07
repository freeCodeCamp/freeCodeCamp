/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 *
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. It's better to use strings for `type` than Symbols because strings
 * are serializable.
 *
 * Other than `type`, the structure of an action object is really up to you.
 * If you're interested, check out Flux Standard Action for recommendations on
 * how actions should be constructed.
 *
 * @template T the type of the action's `type` tag.
 */
export interface Action<T = any> {
  type: T
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 */
export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any
}

/**
 * Internal "virtual" symbol used to make the `CombinedState` type unique.
 */
declare const $CombinedState: unique symbol

/**
 * State base type for reducers created with `combineReducers()`.
 *
 * This type allows the `createStore()` method to infer which levels of the
 * preloaded state can be partial.
 *
 * Because Typescript is really duck-typed, a type needs to have some
 * identifying property to differentiate it from other types with matching
 * prototypes for type checking purposes. That's why this type has the
 * `$CombinedState` symbol property. Without the property, this type would
 * match any object. The symbol doesn't really exist because it's an internal
 * (i.e. not exported), and internally we never check its value. Since it's a
 * symbol property, it's not expected to be unumerable, and the value is
 * typed as always undefined, so its never expected to have a meaningful
 * value anyway. It just makes this type distinquishable from plain `{}`.
 */
interface EmptyObject {
  readonly [$CombinedState]?: undefined
}
export type CombinedState<S> = EmptyObject & S

/**
 * Recursively makes combined state objects partial. Only combined state _root
 * objects_ (i.e. the generated higher level object with keys mapping to
 * individual reducers) are partial.
 */
export type PreloadedState<S> = Required<S> extends EmptyObject
  ? S extends CombinedState<infer S1>
    ? {
        [K in keyof S1]?: S1[K] extends object ? PreloadedState<S1[K]> : S1[K]
      }
    : S
  : {
      [K in keyof S]: S[K] extends string | number | boolean | symbol
        ? S[K]
        : PreloadedState<S[K]>
    }

/* reducers */

/**
 * A *reducer* (also called a *reducing function*) is a function that accepts
 * an accumulation and a value and returns a new accumulation. They are used
 * to reduce a collection of values down to a single value
 *
 * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 *
 * In Redux, the accumulated value is the state object, and the values being
 * accumulated are actions. Reducers calculate a new state given the previous
 * state and an action. They must be *pure functions*—functions that return
 * the exact same output for given inputs. They should also be free of
 * side-effects. This is what enables exciting features like hot reloading and
 * time travel.
 *
 * Reducers are the most important concept in Redux.
 *
 * *Do not put API calls into reducers.*
 *
 * @template S The type of state consumed and produced by this reducer.
 * @template A The type of actions the reducer can potentially respond to.
 */
export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S

/**
 * Object whose values correspond to different reducer functions.
 *
 * @template A The type of actions the reducers can potentially respond to.
 */
export type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>
}

/**
 * Infer a combined state shape from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type StateFromReducersMapObject<M> = M extends ReducersMapObject<
  any,
  any
>
  ? { [P in keyof M]: M[P] extends Reducer<infer S, any> ? S : never }
  : never

/**
 * Infer reducer union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type ReducerFromReducersMapObject<M> = M extends {
  [P in keyof M]: infer R
}
  ? R extends Reducer<any, any>
    ? R
    : never
  : never

/**
 * Infer action type from a reducer function.
 *
 * @template R Type of reducer.
 */
export type ActionFromReducer<R> = R extends Reducer<any, infer A> ? A : never

/**
 * Infer action union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type ActionFromReducersMapObject<M> = M extends ReducersMapObject<
  any,
  any
>
  ? ActionFromReducer<ReducerFromReducersMapObject<M>>
  : never

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @template S Combined state object type.
 *
 * @param reducers An object whose values correspond to different reducer
 *   functions that need to be combined into one. One handy way to obtain it
 *   is to use ES6 `import * as reducers` syntax. The reducers may never
 *   return undefined for any action. Instead, they should return their
 *   initial state if the state passed to them was undefined, and the current
 *   state for any unrecognized action.
 *
 * @returns A reducer function that invokes every reducer inside the passed
 *   object, and builds a state object with the same shape.
 */
export function combineReducers<S>(
  reducers: ReducersMapObject<S, any>
): Reducer<CombinedState<S>>
export function combineReducers<S, A extends Action = AnyAction>(
  reducers: ReducersMapObject<S, A>
): Reducer<CombinedState<S>, A>
export function combineReducers<M extends ReducersMapObject<any, any>>(
  reducers: M
): Reducer<
  CombinedState<StateFromReducersMapObject<M>>,
  ActionFromReducersMapObject<M>
>

/* store */

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
export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T
}

/**
 * Function to remove listener added by `Store.subscribe()`.
 */
export interface Unsubscribe {
  (): void
}

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
 */
export interface Store<S = any, A extends Action = AnyAction> {
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
  getState(): S

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
  subscribe(listener: () => void): Unsubscribe

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
  [Symbol.observable](): Observable<S>
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

/**
 * A store creator is a function that creates a Redux store. Like with
 * dispatching function, we must distinguish the base store creator,
 * `createStore(reducer, preloadedState)` exported from the Redux package, from
 * store creators that are returned from the store enhancers.
 *
 * @template S The type of state to be held by the store.
 * @template A The type of actions which may be dispatched.
 * @template Ext Store extension that is mixed in to the Store type.
 * @template StateExt State extension that is mixed into the state type.
 */
export interface StoreCreator {
  <S, A extends Action, Ext, StateExt>(
    reducer: Reducer<S, A>,
    enhancer?: StoreEnhancer<Ext, StateExt>
  ): Store<S & StateExt, A> & Ext
  <S, A extends Action, Ext, StateExt>(
    reducer: Reducer<S, A>,
    preloadedState?: PreloadedState<S>,
    enhancer?: StoreEnhancer<Ext>
  ): Store<S & StateExt, A> & Ext
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */
export declare function createStore<S, A extends Action, Ext, StateExt>(
  reducer: Reducer<S, A>,
  enhancer?: StoreEnhancer<Ext, StateExt>
): Store<S & StateExt, A> & Ext
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */
export declare function createStore<S, A extends Action, Ext, StateExt>(
  reducer: Reducer<S, A>,
  preloadedState?: PreloadedState<S>,
  enhancer?: StoreEnhancer<Ext>
): Store<S & StateExt, A> & Ext

/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
export declare function legacy_createStore<S, A extends Action, Ext, StateExt>(
  reducer: Reducer<S, A>,
  enhancer?: StoreEnhancer<Ext, StateExt>
): Store<S & StateExt, A> & Ext
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
export declare function legacy_createStore<S, A extends Action, Ext, StateExt>(
  reducer: Reducer<S, A>,
  preloadedState?: PreloadedState<S>,
  enhancer?: StoreEnhancer<Ext>
): Store<S & StateExt, A> & Ext

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
export type StoreEnhancer<Ext = {}, StateExt = {}> = (
  next: StoreEnhancerStoreCreator
) => StoreEnhancerStoreCreator<Ext, StateExt>
export type StoreEnhancerStoreCreator<Ext = {}, StateExt = {}> = <
  S = any,
  A extends Action = AnyAction
>(
  reducer: Reducer<S, A>,
  preloadedState?: PreloadedState<S>
) => Store<S & StateExt, A> & Ext

/* middleware */

export interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
  dispatch: D
  getState(): S
}

/**
 * A middleware is a higher-order function that composes a dispatch function
 * to return a new dispatch function. It often turns async actions into
 * actions.
 *
 * Middleware is composable using function composition. It is useful for
 * logging actions, performing side effects like routing, or turning an
 * asynchronous API call into a series of synchronous actions.
 *
 * @template DispatchExt Extra Dispatch signature added by this middleware.
 * @template S The type of the state supported by this middleware.
 * @template D The type of Dispatch of the store where this middleware is
 *   installed.
 */
export interface Middleware<
  DispatchExt = {},
  S = any,
  D extends Dispatch = Dispatch
> {
  (api: MiddlewareAPI<D, S>): (
    next: Dispatch<AnyAction>
  ) => (action: any) => any
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as
 * expressing asynchronous actions in a concise manner, or logging every
 * action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState`
 * functions as named arguments.
 *
 * @param middlewares The middleware chain to be applied.
 * @returns A store enhancer applying the middleware.
 *
 * @template Ext Dispatch signature added by a middleware.
 * @template S The type of the state supported by a middleware.
 */
export function applyMiddleware(): StoreEnhancer
export function applyMiddleware<Ext1, S>(
  middleware1: Middleware<Ext1, S, any>
): StoreEnhancer<{ dispatch: Ext1 }>
export function applyMiddleware<Ext1, Ext2, S>(
  middleware1: Middleware<Ext1, S, any>,
  middleware2: Middleware<Ext2, S, any>
): StoreEnhancer<{ dispatch: Ext1 & Ext2 }>
export function applyMiddleware<Ext1, Ext2, Ext3, S>(
  middleware1: Middleware<Ext1, S, any>,
  middleware2: Middleware<Ext2, S, any>,
  middleware3: Middleware<Ext3, S, any>
): StoreEnhancer<{ dispatch: Ext1 & Ext2 & Ext3 }>
export function applyMiddleware<Ext1, Ext2, Ext3, Ext4, S>(
  middleware1: Middleware<Ext1, S, any>,
  middleware2: Middleware<Ext2, S, any>,
  middleware3: Middleware<Ext3, S, any>,
  middleware4: Middleware<Ext4, S, any>
): StoreEnhancer<{ dispatch: Ext1 & Ext2 & Ext3 & Ext4 }>
export function applyMiddleware<Ext1, Ext2, Ext3, Ext4, Ext5, S>(
  middleware1: Middleware<Ext1, S, any>,
  middleware2: Middleware<Ext2, S, any>,
  middleware3: Middleware<Ext3, S, any>,
  middleware4: Middleware<Ext4, S, any>,
  middleware5: Middleware<Ext5, S, any>
): StoreEnhancer<{ dispatch: Ext1 & Ext2 & Ext3 & Ext4 & Ext5 }>
export function applyMiddleware<Ext, S = any>(
  ...middlewares: Middleware<any, S, any>[]
): StoreEnhancer<{ dispatch: Ext }>

/* action creators */

/**
 * An *action creator* is, quite simply, a function that creates an action. Do
 * not confuse the two terms—again, an action is a payload of information, and
 * an action creator is a factory that creates an action.
 *
 * Calling an action creator only produces an action, but does not dispatch
 * it. You need to call the store's `dispatch` function to actually cause the
 * mutation. Sometimes we say *bound action creators* to mean functions that
 * call an action creator and immediately dispatch its result to a specific
 * store instance.
 *
 * If an action creator needs to read the current state, perform an API call,
 * or cause a side effect, like a routing transition, it should return an
 * async action instead of an action.
 *
 * @template A Returned action type.
 */
export interface ActionCreator<A> {
  (...args: any[]): A
}

/**
 * Object whose values are action creator functions.
 */
export interface ActionCreatorsMapObject<A = any> {
  [key: string]: ActionCreator<A>
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param actionCreator An object whose values are action creator functions.
 *   One handy way to obtain it is to use ES6 `import * as` syntax. You may
 *   also pass a single function.
 *
 * @param dispatch The `dispatch` function available on your Redux store.
 *
 * @returns The object mimicking the original object, but with every action
 *   creator wrapped into the `dispatch` call. If you passed a function as
 *   `actionCreator`, the return value will also be a single function.
 */
export function bindActionCreators<A, C extends ActionCreator<A>>(
  actionCreator: C,
  dispatch: Dispatch
): C

export function bindActionCreators<
  A extends ActionCreator<any>,
  B extends ActionCreator<any>
>(actionCreator: A, dispatch: Dispatch): B

export function bindActionCreators<A, M extends ActionCreatorsMapObject<A>>(
  actionCreators: M,
  dispatch: Dispatch
): M

export function bindActionCreators<
  M extends ActionCreatorsMapObject<any>,
  N extends ActionCreatorsMapObject<any>
>(actionCreators: M, dispatch: Dispatch): N

/* compose */

type Func0<R> = () => R
type Func1<T1, R> = (a1: T1) => R
type Func2<T1, T2, R> = (a1: T1, a2: T2) => R
type Func3<T1, T2, T3, R> = (a1: T1, a2: T2, a3: T3, ...args: any[]) => R

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for the
 * resulting composite function.
 *
 * @param funcs The functions to compose.
 * @returns R function obtained by composing the argument functions from right
 *   to left. For example, `compose(f, g, h)` is identical to doing
 *   `(...args) => f(g(h(...args)))`.
 */
export function compose(): <R>(a: R) => R

export function compose<F extends Function>(f: F): F

/* two functions */
export function compose<A, R>(f1: (b: A) => R, f2: Func0<A>): Func0<R>
export function compose<A, T1, R>(
  f1: (b: A) => R,
  f2: Func1<T1, A>
): Func1<T1, R>
export function compose<A, T1, T2, R>(
  f1: (b: A) => R,
  f2: Func2<T1, T2, A>
): Func2<T1, T2, R>
export function compose<A, T1, T2, T3, R>(
  f1: (b: A) => R,
  f2: Func3<T1, T2, T3, A>
): Func3<T1, T2, T3, R>

/* three functions */
export function compose<A, B, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func0<A>
): Func0<R>
export function compose<A, B, T1, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func1<T1, A>
): Func1<T1, R>
export function compose<A, B, T1, T2, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func2<T1, T2, A>
): Func2<T1, T2, R>
export function compose<A, B, T1, T2, T3, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func3<T1, T2, T3, A>
): Func3<T1, T2, T3, R>

/* four functions */
export function compose<A, B, C, R>(
  f1: (b: C) => R,
  f2: (a: B) => C,
  f3: (a: A) => B,
  f4: Func0<A>
): Func0<R>
export function compose<A, B, C, T1, R>(
  f1: (b: C) => R,
  f2: (a: B) => C,
  f3: (a: A) => B,
  f4: Func1<T1, A>
): Func1<T1, R>
export function compose<A, B, C, T1, T2, R>(
  f1: (b: C) => R,
  f2: (a: B) => C,
  f3: (a: A) => B,
  f4: Func2<T1, T2, A>
): Func2<T1, T2, R>
export function compose<A, B, C, T1, T2, T3, R>(
  f1: (b: C) => R,
  f2: (a: B) => C,
  f3: (a: A) => B,
  f4: Func3<T1, T2, T3, A>
): Func3<T1, T2, T3, R>

/* rest */
export function compose<R>(
  f1: (b: any) => R,
  ...funcs: Function[]
): (...args: any[]) => R

export function compose<R>(...funcs: Function[]): (...args: any[]) => R
