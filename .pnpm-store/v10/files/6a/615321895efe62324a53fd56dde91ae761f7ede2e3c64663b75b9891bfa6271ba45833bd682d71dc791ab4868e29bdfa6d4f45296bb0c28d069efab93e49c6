/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 *
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. These must be strings, as strings are serializable.
 *
 * Other than `type`, the structure of an action object is really up to you.
 * If you're interested, check out Flux Standard Action for recommendations on
 * how actions should be constructed.
 *
 * @template T the type of the action's `type` tag.
 */
type Action<T extends string = string> = {
    type: T;
};
/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 */
interface UnknownAction extends Action {
    [extraProps: string]: unknown;
}
/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 * @deprecated use Action or UnknownAction instead
 */
interface AnyAction extends Action {
    [extraProps: string]: any;
}
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
interface ActionCreator<A, P extends any[] = any[]> {
    (...args: P): A;
}
/**
 * Object whose values are action creator functions.
 */
interface ActionCreatorsMapObject<A = any, P extends any[] = any[]> {
    [key: string]: ActionCreator<A, P>;
}

/**
 * A *reducer* is a function that accepts
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
 * @template PreloadedState The type of state consumed by this reducer the first time it's called.
 */
type Reducer<S = any, A extends Action = UnknownAction, PreloadedState = S> = (state: S | PreloadedState | undefined, action: A) => S;
/**
 * Object whose values correspond to different reducer functions.
 *
 * @template S The combined state of the reducers.
 * @template A The type of actions the reducers can potentially respond to.
 * @template PreloadedState The combined preloaded state of the reducers.
 */
type ReducersMapObject<S = any, A extends Action = UnknownAction, PreloadedState = S> = keyof PreloadedState extends keyof S ? {
    [K in keyof S]: Reducer<S[K], A, K extends keyof PreloadedState ? PreloadedState[K] : never>;
} : never;
/**
 * Infer a combined state shape from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
type StateFromReducersMapObject<M> = M[keyof M] extends Reducer<any, any, any> | undefined ? {
    [P in keyof M]: M[P] extends Reducer<infer S, any, any> ? S : never;
} : never;
/**
 * Infer reducer union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
type ReducerFromReducersMapObject<M> = M[keyof M] extends Reducer<any, any, any> | undefined ? M[keyof M] : never;
/**
 * Infer action type from a reducer function.
 *
 * @template R Type of reducer.
 */
type ActionFromReducer<R> = R extends Reducer<any, infer A, any> ? A : never;
/**
 * Infer action union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
type ActionFromReducersMapObject<M> = ActionFromReducer<ReducerFromReducersMapObject<M>>;
/**
 * Infer a combined preloaded state shape from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
type PreloadedStateShapeFromReducersMapObject<M> = M[keyof M] extends Reducer<any, any, any> | undefined ? {
    [P in keyof M]: M[P] extends (inputState: infer InputState, action: UnknownAction) => any ? InputState : never;
} : never;

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
interface Dispatch<A extends Action = UnknownAction> {
    <T extends A>(action: T, ...extraArgs: any[]): T;
}
/**
 * Function to remove listener added by `Store.subscribe()`.
 */
interface Unsubscribe {
    (): void;
}
type ListenerCallback = () => void;
declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }
}
/**
 * A minimal observable of state changes.
 * For more information, see the observable proposal:
 * https://github.com/tc39/proposal-observable
 */
type Observable<T> = {
    /**
     * The minimal observable subscription method.
     * @param {Object} observer Any object that can be used as an observer.
     * The observer object should have a `next` method.
     * @returns {subscription} An object with an `unsubscribe` method that can
     * be used to unsubscribe the observable from the store, and prevent further
     * emission of values from the observable.
     */
    subscribe: (observer: Observer<T>) => {
        unsubscribe: Unsubscribe;
    };
    [Symbol.observable](): Observable<T>;
};
/**
 * An Observer is used to receive data from an Observable, and is supplied as
 * an argument to subscribe.
 */
type Observer<T> = {
    next?(value: T): void;
};
/**
 * A store is an object that holds the application's state tree.
 * There should only be a single store in a Redux app, as the composition
 * happens on the reducer level.
 *
 * @template S The type of state held by this store.
 * @template A the type of actions which may be dispatched by this store.
 * @template StateExt any extension to state from store enhancers
 */
interface Store<S = any, A extends Action = UnknownAction, StateExt extends unknown = unknown> {
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
    dispatch: Dispatch<A>;
    /**
     * Reads the state tree managed by the store.
     *
     * @returns The current state tree of your application.
     */
    getState(): S & StateExt;
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
    subscribe(listener: ListenerCallback): Unsubscribe;
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param nextReducer The reducer for the store to use instead.
     */
    replaceReducer(nextReducer: Reducer<S, A>): void;
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */
    [Symbol.observable](): Observable<S & StateExt>;
}
type UnknownIfNonSpecific<T> = {} extends T ? unknown : T;
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
interface StoreCreator {
    <S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext;
    <S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}, PreloadedState = S>(reducer: Reducer<S, A, PreloadedState>, preloadedState?: PreloadedState | undefined, enhancer?: StoreEnhancer<Ext>): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext;
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
type StoreEnhancer<Ext extends {} = {}, StateExt extends {} = {}> = <NextExt extends {}, NextStateExt extends {}>(next: StoreEnhancerStoreCreator<NextExt, NextStateExt>) => StoreEnhancerStoreCreator<NextExt & Ext, NextStateExt & StateExt>;
type StoreEnhancerStoreCreator<Ext extends {} = {}, StateExt extends {} = {}> = <S, A extends Action, PreloadedState>(reducer: Reducer<S, A, PreloadedState>, preloadedState?: PreloadedState | undefined) => Store<S, A, StateExt> & Ext;

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
declare function createStore<S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext;
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
declare function createStore<S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}, PreloadedState = S>(reducer: Reducer<S, A, PreloadedState>, preloadedState?: PreloadedState | undefined, enhancer?: StoreEnhancer<Ext, StateExt>): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext;
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
declare function legacy_createStore<S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext;
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
declare function legacy_createStore<S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}, PreloadedState = S>(reducer: Reducer<S, A, PreloadedState>, preloadedState?: PreloadedState | undefined, enhancer?: StoreEnhancer<Ext, StateExt>): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext;

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
 *   is to use `import * as reducers` syntax. The reducers may never
 *   return undefined for any action. Instead, they should return their
 *   initial state if the state passed to them was undefined, and the current
 *   state for any unrecognized action.
 *
 * @returns A reducer function that invokes every reducer inside the passed
 *   object, and builds a state object with the same shape.
 */
declare function combineReducers<M>(reducers: M): M[keyof M] extends Reducer<any, any, any> | undefined ? Reducer<StateFromReducersMapObject<M>, ActionFromReducersMapObject<M>, Partial<PreloadedStateShapeFromReducersMapObject<M>>> : never;

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use `import * as`
 * syntax. You may also pass a single function.
 *
 * @param dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
declare function bindActionCreators<A, C extends ActionCreator<A>>(actionCreator: C, dispatch: Dispatch): C;
declare function bindActionCreators<A extends ActionCreator<any>, B extends ActionCreator<any>>(actionCreator: A, dispatch: Dispatch): B;
declare function bindActionCreators<A, M extends ActionCreatorsMapObject<A>>(actionCreators: M, dispatch: Dispatch): M;
declare function bindActionCreators<M extends ActionCreatorsMapObject, N extends ActionCreatorsMapObject>(actionCreators: M, dispatch: Dispatch): N;

interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
    dispatch: D;
    getState(): S;
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
interface Middleware<_DispatchExt = {}, // TODO: see if this can be used in type definition somehow (can't be removed, as is used to get final dispatch type)
S = any, D extends Dispatch = Dispatch> {
    (api: MiddlewareAPI<D, S>): (next: (action: unknown) => unknown) => (action: unknown) => unknown;
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param middlewares The middleware chain to be applied.
 * @returns A store enhancer applying the middleware.
 *
 * @template Ext Dispatch signature added by a middleware.
 * @template S The type of the state supported by a middleware.
 */
declare function applyMiddleware(): StoreEnhancer;
declare function applyMiddleware<Ext1, S>(middleware1: Middleware<Ext1, S, any>): StoreEnhancer<{
    dispatch: Ext1;
}>;
declare function applyMiddleware<Ext1, Ext2, S>(middleware1: Middleware<Ext1, S, any>, middleware2: Middleware<Ext2, S, any>): StoreEnhancer<{
    dispatch: Ext1 & Ext2;
}>;
declare function applyMiddleware<Ext1, Ext2, Ext3, S>(middleware1: Middleware<Ext1, S, any>, middleware2: Middleware<Ext2, S, any>, middleware3: Middleware<Ext3, S, any>): StoreEnhancer<{
    dispatch: Ext1 & Ext2 & Ext3;
}>;
declare function applyMiddleware<Ext1, Ext2, Ext3, Ext4, S>(middleware1: Middleware<Ext1, S, any>, middleware2: Middleware<Ext2, S, any>, middleware3: Middleware<Ext3, S, any>, middleware4: Middleware<Ext4, S, any>): StoreEnhancer<{
    dispatch: Ext1 & Ext2 & Ext3 & Ext4;
}>;
declare function applyMiddleware<Ext1, Ext2, Ext3, Ext4, Ext5, S>(middleware1: Middleware<Ext1, S, any>, middleware2: Middleware<Ext2, S, any>, middleware3: Middleware<Ext3, S, any>, middleware4: Middleware<Ext4, S, any>, middleware5: Middleware<Ext5, S, any>): StoreEnhancer<{
    dispatch: Ext1 & Ext2 & Ext3 & Ext4 & Ext5;
}>;
declare function applyMiddleware<Ext, S = any>(...middlewares: Middleware<any, S, any>[]): StoreEnhancer<{
    dispatch: Ext;
}>;

type Func<T extends any[], R> = (...a: T) => R;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for the
 * resulting composite function.
 *
 * @param funcs The functions to compose.
 * @returns A function obtained by composing the argument functions from right
 *   to left. For example, `compose(f, g, h)` is identical to doing
 *   `(...args) => f(g(h(...args)))`.
 */
declare function compose(): <R>(a: R) => R;
declare function compose<F extends Function>(f: F): F;
declare function compose<A, T extends any[], R>(f1: (a: A) => R, f2: Func<T, A>): Func<T, R>;
declare function compose<A, B, T extends any[], R>(f1: (b: B) => R, f2: (a: A) => B, f3: Func<T, A>): Func<T, R>;
declare function compose<A, B, C, T extends any[], R>(f1: (c: C) => R, f2: (b: B) => C, f3: (a: A) => B, f4: Func<T, A>): Func<T, R>;
declare function compose<R>(f1: (a: any) => R, ...funcs: Function[]): (...args: any[]) => R;
declare function compose<R>(...funcs: Function[]): (...args: any[]) => R;

declare function isAction(action: unknown): action is Action<string>;

/**
 * @param obj The object to inspect.
 * @returns True if the argument appears to be a plain object.
 */
declare function isPlainObject(obj: any): obj is object;

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
declare const ActionTypes: {
    INIT: string;
    REPLACE: string;
    PROBE_UNKNOWN_ACTION: () => string;
};

export { Action, ActionCreator, ActionCreatorsMapObject, ActionFromReducer, ActionFromReducersMapObject, AnyAction, Dispatch, Middleware, MiddlewareAPI, Observable, Observer, PreloadedStateShapeFromReducersMapObject, Reducer, ReducerFromReducersMapObject, ReducersMapObject, StateFromReducersMapObject, Store, StoreCreator, StoreEnhancer, StoreEnhancerStoreCreator, UnknownAction, Unsubscribe, ActionTypes as __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore, isAction, isPlainObject, legacy_createStore };
