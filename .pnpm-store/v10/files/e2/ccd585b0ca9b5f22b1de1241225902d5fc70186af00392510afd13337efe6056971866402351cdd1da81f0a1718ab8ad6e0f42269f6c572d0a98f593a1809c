import { ActionCreator, Action, Middleware, StoreEnhancer, UnknownAction, Reducer, ReducersMapObject, Store, Dispatch, StateFromReducersMapObject, PreloadedStateShapeFromReducersMapObject, MiddlewareAPI } from 'redux';
export * from 'redux';
import { Draft } from 'immer';
export { Draft, WritableDraft, produce as createNextState, current, freeze, isDraft, original } from 'immer';
import * as reselect from 'reselect';
import { weakMapMemoize, createSelectorCreator, Selector, CreateSelectorFunction } from 'reselect';
export { OutputSelector, Selector, createSelector, createSelectorCreator, lruMemoize, weakMapMemoize } from 'reselect';
import { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
export { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { UncheckedIndexedAccess } from './uncheckedindexed.js';

declare const createDraftSafeSelectorCreator: typeof createSelectorCreator;
/**
 * "Draft-Safe" version of `reselect`'s `createSelector`:
 * If an `immer`-drafted object is passed into the resulting selector's first argument,
 * the selector will act on the current draft value, instead of returning a cached value
 * that might be possibly outdated if the draft has been modified since.
 * @public
 */
declare const createDraftSafeSelector: reselect.CreateSelectorFunction<typeof weakMapMemoize, typeof weakMapMemoize, any>;

/**
 * @public
 */
interface DevToolsEnhancerOptions {
    /**
     * the instance name to be showed on the monitor page. Default value is `document.title`.
     * If not specified and there's no document title, it will consist of `tabId` and `instanceId`.
     */
    name?: string;
    /**
     * action creators functions to be available in the Dispatcher.
     */
    actionCreators?: ActionCreator<any>[] | {
        [key: string]: ActionCreator<any>;
    };
    /**
     * if more than one action is dispatched in the indicated interval, all new actions will be collected and sent at once.
     * It is the joint between performance and speed. When set to `0`, all actions will be sent instantly.
     * Set it to a higher value when experiencing perf issues (also `maxAge` to a lower value).
     *
     * @default 500 ms.
     */
    latency?: number;
    /**
     * (> 1) - maximum allowed actions to be stored in the history tree. The oldest actions are removed once maxAge is reached. It's critical for performance.
     *
     * @default 50
     */
    maxAge?: number;
    /**
     * Customizes how actions and state are serialized and deserialized. Can be a boolean or object. If given a boolean, the behavior is the same as if you
     * were to pass an object and specify `options` as a boolean. Giving an object allows fine-grained customization using the `replacer` and `reviver`
     * functions.
     */
    serialize?: boolean | {
        /**
         * - `undefined` - will use regular `JSON.stringify` to send data (it's the fast mode).
         * - `false` - will handle also circular references.
         * - `true` - will handle also date, regex, undefined, error objects, symbols, maps, sets and functions.
         * - object, which contains `date`, `regex`, `undefined`, `error`, `symbol`, `map`, `set` and `function` keys.
         *   For each of them you can indicate if to include (by setting as `true`).
         *   For `function` key you can also specify a custom function which handles serialization.
         *   See [`jsan`](https://github.com/kolodny/jsan) for more details.
         */
        options?: undefined | boolean | {
            date?: true;
            regex?: true;
            undefined?: true;
            error?: true;
            symbol?: true;
            map?: true;
            set?: true;
            function?: true | ((fn: (...args: any[]) => any) => string);
        };
        /**
         * [JSON replacer function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter) used for both actions and states stringify.
         * In addition, you can specify a data type by adding a [`__serializedType__`](https://github.com/zalmoxisus/remotedev-serialize/blob/master/helpers/index.js#L4)
         * key. So you can deserialize it back while importing or persisting data.
         * Moreover, it will also [show a nice preview showing the provided custom type](https://cloud.githubusercontent.com/assets/7957859/21814330/a17d556a-d761-11e6-85ef-159dd12f36c5.png):
         */
        replacer?: (key: string, value: unknown) => any;
        /**
         * [JSON `reviver` function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter)
         * used for parsing the imported actions and states. See [`remotedev-serialize`](https://github.com/zalmoxisus/remotedev-serialize/blob/master/immutable/serialize.js#L8-L41)
         * as an example on how to serialize special data types and get them back.
         */
        reviver?: (key: string, value: unknown) => any;
        /**
         * Automatically serialize/deserialize immutablejs via [remotedev-serialize](https://github.com/zalmoxisus/remotedev-serialize).
         * Just pass the Immutable library. It will support all ImmutableJS structures. You can even export them into a file and get them back.
         * The only exception is `Record` class, for which you should pass this in addition the references to your classes in `refs`.
         */
        immutable?: any;
        /**
         * ImmutableJS `Record` classes used to make possible restore its instances back when importing, persisting...
         */
        refs?: any;
    };
    /**
     * function which takes `action` object and id number as arguments, and should return `action` object back.
     */
    actionSanitizer?: <A extends Action>(action: A, id: number) => A;
    /**
     * function which takes `state` object and index as arguments, and should return `state` object back.
     */
    stateSanitizer?: <S>(state: S, index: number) => S;
    /**
     * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
     * If `actionsAllowlist` specified, `actionsDenylist` is ignored.
     */
    actionsDenylist?: string | string[];
    /**
     * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
     * If `actionsAllowlist` specified, `actionsDenylist` is ignored.
     */
    actionsAllowlist?: string | string[];
    /**
     * called for every action before sending, takes `state` and `action` object, and returns `true` in case it allows sending the current data to the monitor.
     * Use it as a more advanced version of `actionsDenylist`/`actionsAllowlist` parameters.
     */
    predicate?: <S, A extends Action>(state: S, action: A) => boolean;
    /**
     * if specified as `false`, it will not record the changes till clicking on `Start recording` button.
     * Available only for Redux enhancer, for others use `autoPause`.
     *
     * @default true
     */
    shouldRecordChanges?: boolean;
    /**
     * if specified, whenever clicking on `Pause recording` button and there are actions in the history log, will add this action type.
     * If not specified, will commit when paused. Available only for Redux enhancer.
     *
     * @default "@@PAUSED""
     */
    pauseActionType?: string;
    /**
     * auto pauses when the extension’s window is not opened, and so has zero impact on your app when not in use.
     * Not available for Redux enhancer (as it already does it but storing the data to be sent).
     *
     * @default false
     */
    autoPause?: boolean;
    /**
     * if specified as `true`, it will not allow any non-monitor actions to be dispatched till clicking on `Unlock changes` button.
     * Available only for Redux enhancer.
     *
     * @default false
     */
    shouldStartLocked?: boolean;
    /**
     * if set to `false`, will not recompute the states on hot reloading (or on replacing the reducers). Available only for Redux enhancer.
     *
     * @default true
     */
    shouldHotReload?: boolean;
    /**
     * if specified as `true`, whenever there's an exception in reducers, the monitors will show the error message, and next actions will not be dispatched.
     *
     * @default false
     */
    shouldCatchErrors?: boolean;
    /**
     * If you want to restrict the extension, specify the features you allow.
     * If not specified, all of the features are enabled. When set as an object, only those included as `true` will be allowed.
     * Note that except `true`/`false`, `import` and `export` can be set as `custom` (which is by default for Redux enhancer), meaning that the importing/exporting occurs on the client side.
     * Otherwise, you'll get/set the data right from the monitor part.
     */
    features?: {
        /**
         * start/pause recording of dispatched actions
         */
        pause?: boolean;
        /**
         * lock/unlock dispatching actions and side effects
         */
        lock?: boolean;
        /**
         * persist states on page reloading
         */
        persist?: boolean;
        /**
         * export history of actions in a file
         */
        export?: boolean | 'custom';
        /**
         * import history of actions from a file
         */
        import?: boolean | 'custom';
        /**
         * jump back and forth (time travelling)
         */
        jump?: boolean;
        /**
         * skip (cancel) actions
         */
        skip?: boolean;
        /**
         * drag and drop actions in the history list
         */
        reorder?: boolean;
        /**
         * dispatch custom actions or action creators
         */
        dispatch?: boolean;
        /**
         * generate tests for the selected actions
         */
        test?: boolean;
    };
    /**
     * Set to true or a stacktrace-returning function to record call stack traces for dispatched actions.
     * Defaults to false.
     */
    trace?: boolean | (<A extends Action>(action: A) => string);
    /**
     * The maximum number of stack trace entries to record per action. Defaults to 10.
     */
    traceLimit?: number;
}

interface ActionCreatorInvariantMiddlewareOptions {
    /**
     * The function to identify whether a value is an action creator.
     * The default checks for a function with a static type property and match method.
     */
    isActionCreator?: (action: unknown) => action is Function & {
        type?: unknown;
    };
}
declare function createActionCreatorInvariantMiddleware(options?: ActionCreatorInvariantMiddlewareOptions): Middleware;

/**
 * Returns true if the passed value is "plain", i.e. a value that is either
 * directly JSON-serializable (boolean, number, string, array, plain object)
 * or `undefined`.
 *
 * @param val The value to check.
 *
 * @public
 */
declare function isPlain(val: any): boolean;
interface NonSerializableValue {
    keyPath: string;
    value: unknown;
}
type IgnorePaths = readonly (string | RegExp)[];
/**
 * @public
 */
declare function findNonSerializableValue(value: unknown, path?: string, isSerializable?: (value: unknown) => boolean, getEntries?: (value: unknown) => [string, any][], ignoredPaths?: IgnorePaths, cache?: WeakSet<object>): NonSerializableValue | false;
/**
 * Options for `createSerializableStateInvariantMiddleware()`.
 *
 * @public
 */
interface SerializableStateInvariantMiddlewareOptions {
    /**
     * The function to check if a value is considered serializable. This
     * function is applied recursively to every value contained in the
     * state. Defaults to `isPlain()`.
     */
    isSerializable?: (value: any) => boolean;
    /**
     * The function that will be used to retrieve entries from each
     * value.  If unspecified, `Object.entries` will be used. Defaults
     * to `undefined`.
     */
    getEntries?: (value: any) => [string, any][];
    /**
     * An array of action types to ignore when checking for serializability.
     * Defaults to []
     */
    ignoredActions?: string[];
    /**
     * An array of dot-separated path strings or regular expressions to ignore
     * when checking for serializability, Defaults to
     * ['meta.arg', 'meta.baseQueryMeta']
     */
    ignoredActionPaths?: (string | RegExp)[];
    /**
     * An array of dot-separated path strings or regular expressions to ignore
     * when checking for serializability, Defaults to []
     */
    ignoredPaths?: (string | RegExp)[];
    /**
     * Execution time warning threshold. If the middleware takes longer
     * than `warnAfter` ms, a warning will be displayed in the console.
     * Defaults to 32ms.
     */
    warnAfter?: number;
    /**
     * Opt out of checking state. When set to `true`, other state-related params will be ignored.
     */
    ignoreState?: boolean;
    /**
     * Opt out of checking actions. When set to `true`, other action-related params will be ignored.
     */
    ignoreActions?: boolean;
    /**
     * Opt out of caching the results. The cache uses a WeakSet and speeds up repeated checking processes.
     * The cache is automatically disabled if no browser support for WeakSet is present.
     */
    disableCache?: boolean;
}
/**
 * Creates a middleware that, after every state change, checks if the new
 * state is serializable. If a non-serializable value is found within the
 * state, an error is printed to the console.
 *
 * @param options Middleware options.
 *
 * @public
 */
declare function createSerializableStateInvariantMiddleware(options?: SerializableStateInvariantMiddlewareOptions): Middleware;

/**
 * The default `isImmutable` function.
 *
 * @public
 */
declare function isImmutableDefault(value: unknown): boolean;
type IsImmutableFunc = (value: any) => boolean;
/**
 * Options for `createImmutableStateInvariantMiddleware()`.
 *
 * @public
 */
interface ImmutableStateInvariantMiddlewareOptions {
    /**
      Callback function to check if a value is considered to be immutable.
      This function is applied recursively to every value contained in the state.
      The default implementation will return true for primitive types
      (like numbers, strings, booleans, null and undefined).
     */
    isImmutable?: IsImmutableFunc;
    /**
      An array of dot-separated path strings that match named nodes from
      the root state to ignore when checking for immutability.
      Defaults to undefined
     */
    ignoredPaths?: IgnorePaths;
    /** Print a warning if checks take longer than N ms. Default: 32ms */
    warnAfter?: number;
}
/**
 * Creates a middleware that checks whether any state was mutated in between
 * dispatches or during a dispatch. If any mutations are detected, an error is
 * thrown.
 *
 * @param options Middleware options.
 *
 * @public
 */
declare function createImmutableStateInvariantMiddleware(options?: ImmutableStateInvariantMiddlewareOptions): Middleware;

declare class Tuple<Items extends ReadonlyArray<unknown> = []> extends Array<Items[number]> {
    constructor(length: number);
    constructor(...items: Items);
    static get [Symbol.species](): any;
    concat<AdditionalItems extends ReadonlyArray<unknown>>(items: Tuple<AdditionalItems>): Tuple<[...Items, ...AdditionalItems]>;
    concat<AdditionalItems extends ReadonlyArray<unknown>>(items: AdditionalItems): Tuple<[...Items, ...AdditionalItems]>;
    concat<AdditionalItems extends ReadonlyArray<unknown>>(...items: AdditionalItems): Tuple<[...Items, ...AdditionalItems]>;
    prepend<AdditionalItems extends ReadonlyArray<unknown>>(items: Tuple<AdditionalItems>): Tuple<[...AdditionalItems, ...Items]>;
    prepend<AdditionalItems extends ReadonlyArray<unknown>>(items: AdditionalItems): Tuple<[...AdditionalItems, ...Items]>;
    prepend<AdditionalItems extends ReadonlyArray<unknown>>(...items: AdditionalItems): Tuple<[...AdditionalItems, ...Items]>;
}

/**
 * return True if T is `any`, otherwise return False
 * taken from https://github.com/joonhocho/tsdef
 *
 * @internal
 */
type IsAny<T, True, False = never> = true | false extends (T extends never ? true : false) ? True : False;
type CastAny<T, CastTo> = IsAny<T, CastTo, T>;
/**
 * return True if T is `unknown`, otherwise return False
 * taken from https://github.com/joonhocho/tsdef
 *
 * @internal
 */
type IsUnknown<T, True, False = never> = unknown extends T ? IsAny<T, False, True> : False;
type FallbackIfUnknown<T, Fallback> = IsUnknown<T, Fallback, T>;
/**
 * @internal
 */
type IfMaybeUndefined<P, True, False> = [undefined] extends [P] ? True : False;
/**
 * @internal
 */
type IfVoid<P, True, False> = [void] extends [P] ? True : False;
/**
 * @internal
 */
type IsEmptyObj<T, True, False = never> = T extends any ? keyof T extends never ? IsUnknown<T, False, IfMaybeUndefined<T, False, IfVoid<T, False, True>>> : False : never;
/**
 * returns True if TS version is above 3.5, False if below.
 * uses feature detection to detect TS version >= 3.5
 * * versions below 3.5 will return `{}` for unresolvable interference
 * * versions above will return `unknown`
 *
 * @internal
 */
type AtLeastTS35<True, False> = [True, False][IsUnknown<ReturnType<(<T>() => T)>, 0, 1>];
/**
 * @internal
 */
type IsUnknownOrNonInferrable<T, True, False> = AtLeastTS35<IsUnknown<T, True, False>, IsEmptyObj<T, True, IsUnknown<T, True, False>>>;
/**
 * Convert a Union type `(A|B)` to an intersection type `(A&B)`
 */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type ExcludeFromTuple<T, E, Acc extends unknown[] = []> = T extends [
    infer Head,
    ...infer Tail
] ? ExcludeFromTuple<Tail, E, [...Acc, ...([Head] extends [E] ? [] : [Head])]> : Acc;
type ExtractDispatchFromMiddlewareTuple<MiddlewareTuple extends readonly any[], Acc extends {}> = MiddlewareTuple extends [infer Head, ...infer Tail] ? ExtractDispatchFromMiddlewareTuple<Tail, Acc & (Head extends Middleware<infer D> ? IsAny<D, {}, D> : {})> : Acc;
type ExtractDispatchExtensions<M> = M extends Tuple<infer MiddlewareTuple> ? ExtractDispatchFromMiddlewareTuple<MiddlewareTuple, {}> : M extends ReadonlyArray<Middleware> ? ExtractDispatchFromMiddlewareTuple<[...M], {}> : never;
type ExtractStoreExtensionsFromEnhancerTuple<EnhancerTuple extends readonly any[], Acc extends {}> = EnhancerTuple extends [infer Head, ...infer Tail] ? ExtractStoreExtensionsFromEnhancerTuple<Tail, Acc & (Head extends StoreEnhancer<infer Ext> ? IsAny<Ext, {}, Ext> : {})> : Acc;
type ExtractStoreExtensions<E> = E extends Tuple<infer EnhancerTuple> ? ExtractStoreExtensionsFromEnhancerTuple<EnhancerTuple, {}> : E extends ReadonlyArray<StoreEnhancer> ? UnionToIntersection<E[number] extends StoreEnhancer<infer Ext> ? Ext extends {} ? IsAny<Ext, {}, Ext> : {} : {}> : never;
type ExtractStateExtensionsFromEnhancerTuple<EnhancerTuple extends readonly any[], Acc extends {}> = EnhancerTuple extends [infer Head, ...infer Tail] ? ExtractStateExtensionsFromEnhancerTuple<Tail, Acc & (Head extends StoreEnhancer<any, infer StateExt> ? IsAny<StateExt, {}, StateExt> : {})> : Acc;
type ExtractStateExtensions<E> = E extends Tuple<infer EnhancerTuple> ? ExtractStateExtensionsFromEnhancerTuple<EnhancerTuple, {}> : E extends ReadonlyArray<StoreEnhancer> ? UnionToIntersection<E[number] extends StoreEnhancer<any, infer StateExt> ? StateExt extends {} ? IsAny<StateExt, {}, StateExt> : {} : {}> : never;
/**
 * Helper type. Passes T out again, but boxes it in a way that it cannot
 * "widen" the type by accident if it is a generic that should be inferred
 * from elsewhere.
 *
 * @internal
 */
type NoInfer<T> = [T][T extends any ? 0 : never];
type NonUndefined<T> = T extends undefined ? never : T;
type WithRequiredProp<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type WithOptionalProp<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
interface TypeGuard<T> {
    (value: any): value is T;
}
interface HasMatchFunction<T> {
    match: TypeGuard<T>;
}
/** @public */
type Matcher<T> = HasMatchFunction<T> | TypeGuard<T>;
/** @public */
type ActionFromMatcher<M extends Matcher<any>> = M extends Matcher<infer T> ? T : never;
type Id<T> = {
    [K in keyof T]: T[K];
} & {};
type Tail<T extends any[]> = T extends [any, ...infer Tail] ? Tail : never;
type UnknownIfNonSpecific<T> = {} extends T ? unknown : T;
/**
 * A Promise that will never reject.
 * @see https://github.com/reduxjs/redux-toolkit/issues/4101
 */
type SafePromise<T> = Promise<T> & {
    __linterBrands: 'SafePromise';
};

interface ThunkOptions<E = any> {
    extraArgument: E;
}
interface GetDefaultMiddlewareOptions {
    thunk?: boolean | ThunkOptions;
    immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
    serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
    actionCreatorCheck?: boolean | ActionCreatorInvariantMiddlewareOptions;
}
type ThunkMiddlewareFor<S, O extends GetDefaultMiddlewareOptions = {}> = O extends {
    thunk: false;
} ? never : O extends {
    thunk: {
        extraArgument: infer E;
    };
} ? ThunkMiddleware<S, UnknownAction, E> : ThunkMiddleware<S, UnknownAction>;
type GetDefaultMiddleware<S = any> = <O extends GetDefaultMiddlewareOptions = {
    thunk: true;
    immutableCheck: true;
    serializableCheck: true;
    actionCreatorCheck: true;
}>(options?: O) => Tuple<ExcludeFromTuple<[ThunkMiddlewareFor<S, O>], never>>;

declare const SHOULD_AUTOBATCH = "RTK_autoBatch";
declare const prepareAutoBatched: <T>() => (payload: T) => {
    payload: T;
    meta: unknown;
};
type AutoBatchOptions = {
    type: 'tick';
} | {
    type: 'timer';
    timeout: number;
} | {
    type: 'raf';
} | {
    type: 'callback';
    queueNotification: (notify: () => void) => void;
};
/**
 * A Redux store enhancer that watches for "low-priority" actions, and delays
 * notifying subscribers until either the queued callback executes or the
 * next "standard-priority" action is dispatched.
 *
 * This allows dispatching multiple "low-priority" actions in a row with only
 * a single subscriber notification to the UI after the sequence of actions
 * is finished, thus improving UI re-render performance.
 *
 * Watches for actions with the `action.meta[SHOULD_AUTOBATCH]` attribute.
 * This can be added to `action.meta` manually, or by using the
 * `prepareAutoBatched` helper.
 *
 * By default, it will queue a notification for the end of the event loop tick.
 * However, you can pass several other options to configure the behavior:
 * - `{type: 'tick'}`: queues using `queueMicrotask`
 * - `{type: 'timer', timeout: number}`: queues using `setTimeout`
 * - `{type: 'raf'}`: queues using `requestAnimationFrame` (default)
 * - `{type: 'callback', queueNotification: (notify: () => void) => void}`: lets you provide your own callback
 *
 *
 */
declare const autoBatchEnhancer: (options?: AutoBatchOptions) => StoreEnhancer;

type GetDefaultEnhancersOptions = {
    autoBatch?: boolean | AutoBatchOptions;
};
type GetDefaultEnhancers<M extends Middlewares<any>> = (options?: GetDefaultEnhancersOptions) => Tuple<[StoreEnhancer<{
    dispatch: ExtractDispatchExtensions<M>;
}>]>;

/**
 * Options for `configureStore()`.
 *
 * @public
 */
interface ConfigureStoreOptions<S = any, A extends Action = UnknownAction, M extends Tuple<Middlewares<S>> = Tuple<Middlewares<S>>, E extends Tuple<Enhancers> = Tuple<Enhancers>, P = S> {
    /**
     * A single reducer function that will be used as the root reducer, or an
     * object of slice reducers that will be passed to `combineReducers()`.
     */
    reducer: Reducer<S, A, P> | ReducersMapObject<S, A, P>;
    /**
     * An array of Redux middleware to install, or a callback receiving `getDefaultMiddleware` and returning a Tuple of middleware.
     * If not supplied, defaults to the set of middleware returned by `getDefaultMiddleware()`.
     *
     * @example `middleware: (gDM) => gDM().concat(logger, apiMiddleware, yourCustomMiddleware)`
     * @see https://redux-toolkit.js.org/api/getDefaultMiddleware#intended-usage
     */
    middleware?: (getDefaultMiddleware: GetDefaultMiddleware<S>) => M;
    /**
     * Whether to enable Redux DevTools integration. Defaults to `true`.
     *
     * Additional configuration can be done by passing Redux DevTools options
     */
    devTools?: boolean | DevToolsEnhancerOptions;
    /**
     * Whether to check for duplicate middleware instances. Defaults to `true`.
     */
    duplicateMiddlewareCheck?: boolean;
    /**
     * The initial state, same as Redux's createStore.
     * You may optionally specify it to hydrate the state
     * from the server in universal apps, or to restore a previously serialized
     * user session. If you use `combineReducers()` to produce the root reducer
     * function (either directly or indirectly by passing an object as `reducer`),
     * this must be an object with the same shape as the reducer map keys.
     */
    preloadedState?: P;
    /**
     * The store enhancers to apply. See Redux's `createStore()`.
     * All enhancers will be included before the DevTools Extension enhancer.
     * If you need to customize the order of enhancers, supply a callback
     * function that will receive a `getDefaultEnhancers` function that returns a Tuple,
     * and should return a Tuple of enhancers (such as `getDefaultEnhancers().concat(offline)`).
     * If you only need to add middleware, you can use the `middleware` parameter instead.
     */
    enhancers?: (getDefaultEnhancers: GetDefaultEnhancers<M>) => E;
}
type Middlewares<S> = ReadonlyArray<Middleware<{}, S>>;
type Enhancers = ReadonlyArray<StoreEnhancer>;
/**
 * A Redux store returned by `configureStore()`. Supports dispatching
 * side-effectful _thunks_ in addition to plain actions.
 *
 * @public
 */
type EnhancedStore<S = any, A extends Action = UnknownAction, E extends Enhancers = Enhancers> = ExtractStoreExtensions<E> & Store<S, A, UnknownIfNonSpecific<ExtractStateExtensions<E>>>;
/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param options The store configuration.
 * @returns A configured Redux store.
 *
 * @public
 */
declare function configureStore<S = any, A extends Action = UnknownAction, M extends Tuple<Middlewares<S>> = Tuple<[ThunkMiddlewareFor<S>]>, E extends Tuple<Enhancers> = Tuple<[
    StoreEnhancer<{
        dispatch: ExtractDispatchExtensions<M>;
    }>,
    StoreEnhancer
]>, P = S>(options: ConfigureStoreOptions<S, A, M, E, P>): EnhancedStore<S, A, E>;

/**
 * An action with a string type and an associated payload. This is the
 * type of action returned by `createAction()` action creators.
 *
 * @template P The type of the action's payload.
 * @template T the type used for the action type.
 * @template M The type of the action's meta (optional)
 * @template E The type of the action's error (optional)
 *
 * @public
 */
type PayloadAction<P = void, T extends string = string, M = never, E = never> = {
    payload: P;
    type: T;
} & ([M] extends [never] ? {} : {
    meta: M;
}) & ([E] extends [never] ? {} : {
    error: E;
});
/**
 * A "prepare" method to be used as the second parameter of `createAction`.
 * Takes any number of arguments and returns a Flux Standard Action without
 * type (will be added later) that *must* contain a payload (might be undefined).
 *
 * @public
 */
type PrepareAction<P> = ((...args: any[]) => {
    payload: P;
}) | ((...args: any[]) => {
    payload: P;
    meta: any;
}) | ((...args: any[]) => {
    payload: P;
    error: any;
}) | ((...args: any[]) => {
    payload: P;
    meta: any;
    error: any;
});
/**
 * Internal version of `ActionCreatorWithPreparedPayload`. Not to be used externally.
 *
 * @internal
 */
type _ActionCreatorWithPreparedPayload<PA extends PrepareAction<any> | void, T extends string = string> = PA extends PrepareAction<infer P> ? ActionCreatorWithPreparedPayload<Parameters<PA>, P, T, ReturnType<PA> extends {
    error: infer E;
} ? E : never, ReturnType<PA> extends {
    meta: infer M;
} ? M : never> : void;
/**
 * Basic type for all action creators.
 *
 * @inheritdoc {redux#ActionCreator}
 */
type BaseActionCreator<P, T extends string, M = never, E = never> = {
    type: T;
    match: (action: unknown) => action is PayloadAction<P, T, M, E>;
};
/**
 * An action creator that takes multiple arguments that are passed
 * to a `PrepareAction` method to create the final Action.
 * @typeParam Args arguments for the action creator function
 * @typeParam P `payload` type
 * @typeParam T `type` name
 * @typeParam E optional `error` type
 * @typeParam M optional `meta` type
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
interface ActionCreatorWithPreparedPayload<Args extends unknown[], P, T extends string = string, E = never, M = never> extends BaseActionCreator<P, T, M, E> {
    /**
     * Calling this {@link redux#ActionCreator} with `Args` will return
     * an Action with a payload of type `P` and (depending on the `PrepareAction`
     * method used) a `meta`- and `error` property of types `M` and `E` respectively.
     */
    (...args: Args): PayloadAction<P, T, M, E>;
}
/**
 * An action creator of type `T` that takes an optional payload of type `P`.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
interface ActionCreatorWithOptionalPayload<P, T extends string = string> extends BaseActionCreator<P, T> {
    /**
     * Calling this {@link redux#ActionCreator} with an argument will
     * return a {@link PayloadAction} of type `T` with a payload of `P`.
     * Calling it without an argument will return a PayloadAction with a payload of `undefined`.
     */
    (payload?: P): PayloadAction<P, T>;
}
/**
 * An action creator of type `T` that takes no payload.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
interface ActionCreatorWithoutPayload<T extends string = string> extends BaseActionCreator<undefined, T> {
    /**
     * Calling this {@link redux#ActionCreator} will
     * return a {@link PayloadAction} of type `T` with a payload of `undefined`
     */
    (noArgument: void): PayloadAction<undefined, T>;
}
/**
 * An action creator of type `T` that requires a payload of type P.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
interface ActionCreatorWithPayload<P, T extends string = string> extends BaseActionCreator<P, T> {
    /**
     * Calling this {@link redux#ActionCreator} with an argument will
     * return a {@link PayloadAction} of type `T` with a payload of `P`
     */
    (payload: P): PayloadAction<P, T>;
}
/**
 * An action creator of type `T` whose `payload` type could not be inferred. Accepts everything as `payload`.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
interface ActionCreatorWithNonInferrablePayload<T extends string = string> extends BaseActionCreator<unknown, T> {
    /**
     * Calling this {@link redux#ActionCreator} with an argument will
     * return a {@link PayloadAction} of type `T` with a payload
     * of exactly the type of the argument.
     */
    <PT extends unknown>(payload: PT): PayloadAction<PT, T>;
}
/**
 * An action creator that produces actions with a `payload` attribute.
 *
 * @typeParam P the `payload` type
 * @typeParam T the `type` of the resulting action
 * @typeParam PA if the resulting action is preprocessed by a `prepare` method, the signature of said method.
 *
 * @public
 */
type PayloadActionCreator<P = void, T extends string = string, PA extends PrepareAction<P> | void = void> = IfPrepareActionMethodProvided<PA, _ActionCreatorWithPreparedPayload<PA, T>, IsAny<P, ActionCreatorWithPayload<any, T>, IsUnknownOrNonInferrable<P, ActionCreatorWithNonInferrablePayload<T>, IfVoid<P, ActionCreatorWithoutPayload<T>, IfMaybeUndefined<P, ActionCreatorWithOptionalPayload<P, T>, ActionCreatorWithPayload<P, T>>>>>>;
/**
 * A utility function to create an action creator for the given action type
 * string. The action creator accepts a single argument, which will be included
 * in the action object as a field called payload. The action creator function
 * will also have its toString() overridden so that it returns the action type.
 *
 * @param type The action type to use for created actions.
 * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
 *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
 *
 * @public
 */
declare function createAction<P = void, T extends string = string>(type: T): PayloadActionCreator<P, T>;
/**
 * A utility function to create an action creator for the given action type
 * string. The action creator accepts a single argument, which will be included
 * in the action object as a field called payload. The action creator function
 * will also have its toString() overridden so that it returns the action type.
 *
 * @param type The action type to use for created actions.
 * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
 *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
 *
 * @public
 */
declare function createAction<PA extends PrepareAction<any>, T extends string = string>(type: T, prepareAction: PA): PayloadActionCreator<ReturnType<PA>['payload'], T, PA>;
/**
 * Returns true if value is an RTK-like action creator, with a static type property and match method.
 */
declare function isActionCreator(action: unknown): action is BaseActionCreator<unknown, string> & Function;
/**
 * Returns true if value is an action with a string type and valid Flux Standard Action keys.
 */
declare function isFSA(action: unknown): action is {
    type: string;
    payload?: unknown;
    error?: unknown;
    meta?: unknown;
};
type IfPrepareActionMethodProvided<PA extends PrepareAction<any> | void, True, False> = PA extends (...args: any[]) => any ? True : False;

type BaseThunkAPI<S, E, D extends Dispatch = Dispatch, RejectedValue = unknown, RejectedMeta = unknown, FulfilledMeta = unknown> = {
    dispatch: D;
    getState: () => S;
    extra: E;
    requestId: string;
    signal: AbortSignal;
    abort: (reason?: string) => void;
    rejectWithValue: IsUnknown<RejectedMeta, (value: RejectedValue) => RejectWithValue<RejectedValue, RejectedMeta>, (value: RejectedValue, meta: RejectedMeta) => RejectWithValue<RejectedValue, RejectedMeta>>;
    fulfillWithValue: IsUnknown<FulfilledMeta, <FulfilledValue>(value: FulfilledValue) => FulfilledValue, <FulfilledValue>(value: FulfilledValue, meta: FulfilledMeta) => FulfillWithMeta<FulfilledValue, FulfilledMeta>>;
};
/**
 * @public
 */
interface SerializedError {
    name?: string;
    message?: string;
    stack?: string;
    code?: string;
}
declare class RejectWithValue<Payload, RejectedMeta> {
    readonly payload: Payload;
    readonly meta: RejectedMeta;
    private readonly _type;
    constructor(payload: Payload, meta: RejectedMeta);
}
declare class FulfillWithMeta<Payload, FulfilledMeta> {
    readonly payload: Payload;
    readonly meta: FulfilledMeta;
    private readonly _type;
    constructor(payload: Payload, meta: FulfilledMeta);
}
/**
 * Serializes an error into a plain object.
 * Reworked from https://github.com/sindresorhus/serialize-error
 *
 * @public
 */
declare const miniSerializeError: (value: any) => SerializedError;
type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: ThunkDispatch<unknown, unknown, UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
};
type GetState<ThunkApiConfig> = ThunkApiConfig extends {
    state: infer State;
} ? State : unknown;
type GetExtra<ThunkApiConfig> = ThunkApiConfig extends {
    extra: infer Extra;
} ? Extra : unknown;
type GetDispatch<ThunkApiConfig> = ThunkApiConfig extends {
    dispatch: infer Dispatch;
} ? FallbackIfUnknown<Dispatch, ThunkDispatch<GetState<ThunkApiConfig>, GetExtra<ThunkApiConfig>, UnknownAction>> : ThunkDispatch<GetState<ThunkApiConfig>, GetExtra<ThunkApiConfig>, UnknownAction>;
type GetThunkAPI<ThunkApiConfig> = BaseThunkAPI<GetState<ThunkApiConfig>, GetExtra<ThunkApiConfig>, GetDispatch<ThunkApiConfig>, GetRejectValue<ThunkApiConfig>, GetRejectedMeta<ThunkApiConfig>, GetFulfilledMeta<ThunkApiConfig>>;
type GetRejectValue<ThunkApiConfig> = ThunkApiConfig extends {
    rejectValue: infer RejectValue;
} ? RejectValue : unknown;
type GetPendingMeta<ThunkApiConfig> = ThunkApiConfig extends {
    pendingMeta: infer PendingMeta;
} ? PendingMeta : unknown;
type GetFulfilledMeta<ThunkApiConfig> = ThunkApiConfig extends {
    fulfilledMeta: infer FulfilledMeta;
} ? FulfilledMeta : unknown;
type GetRejectedMeta<ThunkApiConfig> = ThunkApiConfig extends {
    rejectedMeta: infer RejectedMeta;
} ? RejectedMeta : unknown;
type GetSerializedErrorType<ThunkApiConfig> = ThunkApiConfig extends {
    serializedErrorType: infer GetSerializedErrorType;
} ? GetSerializedErrorType : SerializedError;
type MaybePromise<T> = T | Promise<T> | (T extends any ? Promise<T> : never);
/**
 * A type describing the return value of the `payloadCreator` argument to `createAsyncThunk`.
 * Might be useful for wrapping `createAsyncThunk` in custom abstractions.
 *
 * @public
 */
type AsyncThunkPayloadCreatorReturnValue<Returned, ThunkApiConfig extends AsyncThunkConfig> = MaybePromise<IsUnknown<GetFulfilledMeta<ThunkApiConfig>, Returned, FulfillWithMeta<Returned, GetFulfilledMeta<ThunkApiConfig>>> | RejectWithValue<GetRejectValue<ThunkApiConfig>, GetRejectedMeta<ThunkApiConfig>>>;
/**
 * A type describing the `payloadCreator` argument to `createAsyncThunk`.
 * Might be useful for wrapping `createAsyncThunk` in custom abstractions.
 *
 * @public
 */
type AsyncThunkPayloadCreator<Returned, ThunkArg = void, ThunkApiConfig extends AsyncThunkConfig = {}> = (arg: ThunkArg, thunkAPI: GetThunkAPI<ThunkApiConfig>) => AsyncThunkPayloadCreatorReturnValue<Returned, ThunkApiConfig>;
/**
 * A ThunkAction created by `createAsyncThunk`.
 * Dispatching it returns a Promise for either a
 * fulfilled or rejected action.
 * Also, the returned value contains an `abort()` method
 * that allows the asyncAction to be cancelled from the outside.
 *
 * @public
 */
type AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig extends AsyncThunkConfig> = (dispatch: NonNullable<GetDispatch<ThunkApiConfig>>, getState: () => GetState<ThunkApiConfig>, extra: GetExtra<ThunkApiConfig>) => SafePromise<ReturnType<AsyncThunkFulfilledActionCreator<Returned, ThunkArg>> | ReturnType<AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>>> & {
    abort: (reason?: string) => void;
    requestId: string;
    arg: ThunkArg;
    unwrap: () => Promise<Returned>;
};
/**
 * Config provided when calling the async thunk action creator.
 */
interface AsyncThunkDispatchConfig {
    /**
     * An external `AbortSignal` that will be tracked by the internal `AbortSignal`.
     */
    signal?: AbortSignal;
}
type AsyncThunkActionCreator<Returned, ThunkArg, ThunkApiConfig extends AsyncThunkConfig> = IsAny<ThunkArg, (arg: ThunkArg, config?: AsyncThunkDispatchConfig) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>, unknown extends ThunkArg ? (arg: ThunkArg, config?: AsyncThunkDispatchConfig) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig> : [ThunkArg] extends [void] | [undefined] ? (arg?: undefined, config?: AsyncThunkDispatchConfig) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig> : [void] extends [ThunkArg] ? (arg?: ThunkArg, config?: AsyncThunkDispatchConfig) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig> : [undefined] extends [ThunkArg] ? WithStrictNullChecks<(arg?: ThunkArg, config?: AsyncThunkDispatchConfig) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>, (arg: ThunkArg, config?: AsyncThunkDispatchConfig) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>> : (arg: ThunkArg, config?: AsyncThunkDispatchConfig) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>>;
/**
 * Options object for `createAsyncThunk`.
 *
 * @public
 */
type AsyncThunkOptions<ThunkArg = void, ThunkApiConfig extends AsyncThunkConfig = {}> = {
    /**
     * A method to control whether the asyncThunk should be executed. Has access to the
     * `arg`, `api.getState()` and `api.extra` arguments.
     *
     * @returns `false` if it should be skipped
     */
    condition?(arg: ThunkArg, api: Pick<GetThunkAPI<ThunkApiConfig>, 'getState' | 'extra'>): MaybePromise<boolean | undefined>;
    /**
     * If `condition` returns `false`, the asyncThunk will be skipped.
     * This option allows you to control whether a `rejected` action with `meta.condition == false`
     * will be dispatched or not.
     *
     * @default `false`
     */
    dispatchConditionRejection?: boolean;
    serializeError?: (x: unknown) => GetSerializedErrorType<ThunkApiConfig>;
    /**
     * A function to use when generating the `requestId` for the request sequence.
     *
     * @default `nanoid`
     */
    idGenerator?: (arg: ThunkArg) => string;
} & IsUnknown<GetPendingMeta<ThunkApiConfig>, {
    /**
     * A method to generate additional properties to be added to `meta` of the pending action.
     *
     * Using this optional overload will not modify the types correctly, this overload is only in place to support JavaScript users.
     * Please use the `ThunkApiConfig` parameter `pendingMeta` to get access to a correctly typed overload
     */
    getPendingMeta?(base: {
        arg: ThunkArg;
        requestId: string;
    }, api: Pick<GetThunkAPI<ThunkApiConfig>, 'getState' | 'extra'>): GetPendingMeta<ThunkApiConfig>;
}, {
    /**
     * A method to generate additional properties to be added to `meta` of the pending action.
     */
    getPendingMeta(base: {
        arg: ThunkArg;
        requestId: string;
    }, api: Pick<GetThunkAPI<ThunkApiConfig>, 'getState' | 'extra'>): GetPendingMeta<ThunkApiConfig>;
}>;
type AsyncThunkPendingActionCreator<ThunkArg, ThunkApiConfig = {}> = ActionCreatorWithPreparedPayload<[
    string,
    ThunkArg,
    GetPendingMeta<ThunkApiConfig>?
], undefined, string, never, {
    arg: ThunkArg;
    requestId: string;
    requestStatus: 'pending';
} & GetPendingMeta<ThunkApiConfig>>;
type AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig = {}> = ActionCreatorWithPreparedPayload<[
    Error | null,
    string,
    ThunkArg,
    GetRejectValue<ThunkApiConfig>?,
    GetRejectedMeta<ThunkApiConfig>?
], GetRejectValue<ThunkApiConfig> | undefined, string, GetSerializedErrorType<ThunkApiConfig>, {
    arg: ThunkArg;
    requestId: string;
    requestStatus: 'rejected';
    aborted: boolean;
    condition: boolean;
} & (({
    rejectedWithValue: false;
} & {
    [K in keyof GetRejectedMeta<ThunkApiConfig>]?: undefined;
}) | ({
    rejectedWithValue: true;
} & GetRejectedMeta<ThunkApiConfig>))>;
type AsyncThunkFulfilledActionCreator<Returned, ThunkArg, ThunkApiConfig = {}> = ActionCreatorWithPreparedPayload<[
    Returned,
    string,
    ThunkArg,
    GetFulfilledMeta<ThunkApiConfig>?
], Returned, string, never, {
    arg: ThunkArg;
    requestId: string;
    requestStatus: 'fulfilled';
} & GetFulfilledMeta<ThunkApiConfig>>;
/**
 * A type describing the return value of `createAsyncThunk`.
 * Might be useful for wrapping `createAsyncThunk` in custom abstractions.
 *
 * @public
 */
type AsyncThunk<Returned, ThunkArg, ThunkApiConfig extends AsyncThunkConfig> = AsyncThunkActionCreator<Returned, ThunkArg, ThunkApiConfig> & {
    pending: AsyncThunkPendingActionCreator<ThunkArg, ThunkApiConfig>;
    rejected: AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>;
    fulfilled: AsyncThunkFulfilledActionCreator<Returned, ThunkArg, ThunkApiConfig>;
    settled: (action: any) => action is ReturnType<AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig> | AsyncThunkFulfilledActionCreator<Returned, ThunkArg, ThunkApiConfig>>;
    typePrefix: string;
};
type OverrideThunkApiConfigs<OldConfig, NewConfig> = Id<NewConfig & Omit<OldConfig, keyof NewConfig>>;
type CreateAsyncThunkFunction<CurriedThunkApiConfig extends AsyncThunkConfig> = {
    /**
     *
     * @param typePrefix
     * @param payloadCreator
     * @param options
     *
     * @public
     */
    <Returned, ThunkArg = void>(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, CurriedThunkApiConfig>, options?: AsyncThunkOptions<ThunkArg, CurriedThunkApiConfig>): AsyncThunk<Returned, ThunkArg, CurriedThunkApiConfig>;
    /**
     *
     * @param typePrefix
     * @param payloadCreator
     * @param options
     *
     * @public
     */
    <Returned, ThunkArg, ThunkApiConfig extends AsyncThunkConfig>(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>>, options?: AsyncThunkOptions<ThunkArg, OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>>): AsyncThunk<Returned, ThunkArg, OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>>;
};
type CreateAsyncThunk<CurriedThunkApiConfig extends AsyncThunkConfig> = CreateAsyncThunkFunction<CurriedThunkApiConfig> & {
    withTypes<ThunkApiConfig extends AsyncThunkConfig>(): CreateAsyncThunk<OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>>;
};
declare const createAsyncThunk: CreateAsyncThunk<AsyncThunkConfig>;
interface UnwrappableAction {
    payload: any;
    meta?: any;
    error?: any;
}
type UnwrappedActionPayload<T extends UnwrappableAction> = Exclude<T, {
    error: any;
}>['payload'];
/**
 * @public
 */
declare function unwrapResult<R extends UnwrappableAction>(action: R): UnwrappedActionPayload<R>;
type WithStrictNullChecks<True, False> = undefined extends boolean ? False : True;

type AsyncThunkReducers<State, ThunkArg extends any, Returned = unknown, ThunkApiConfig extends AsyncThunkConfig = {}> = {
    pending?: CaseReducer<State, ReturnType<AsyncThunk<Returned, ThunkArg, ThunkApiConfig>['pending']>>;
    rejected?: CaseReducer<State, ReturnType<AsyncThunk<Returned, ThunkArg, ThunkApiConfig>['rejected']>>;
    fulfilled?: CaseReducer<State, ReturnType<AsyncThunk<Returned, ThunkArg, ThunkApiConfig>['fulfilled']>>;
    settled?: CaseReducer<State, ReturnType<AsyncThunk<Returned, ThunkArg, ThunkApiConfig>['rejected' | 'fulfilled']>>;
};
type TypedActionCreator<Type extends string> = {
    (...args: any[]): Action<Type>;
    type: Type;
};
/**
 * A builder for an action <-> reducer map.
 *
 * @public
 */
interface ActionReducerMapBuilder<State> {
    /**
     * Adds a case reducer to handle a single exact action type.
     * @remarks
     * All calls to `builder.addCase` must come before any calls to `builder.addMatcher` or `builder.addDefaultCase`.
     * @param actionCreator - Either a plain action type string, or an action creator generated by [`createAction`](./createAction) that can be used to determine the action type.
     * @param reducer - The actual case reducer function.
     */
    addCase<ActionCreator extends TypedActionCreator<string>>(actionCreator: ActionCreator, reducer: CaseReducer<State, ReturnType<ActionCreator>>): ActionReducerMapBuilder<State>;
    /**
     * Adds a case reducer to handle a single exact action type.
     * @remarks
     * All calls to `builder.addCase` must come before any calls to `builder.addAsyncThunk`, `builder.addMatcher` or `builder.addDefaultCase`.
     * @param actionCreator - Either a plain action type string, or an action creator generated by [`createAction`](./createAction) that can be used to determine the action type.
     * @param reducer - The actual case reducer function.
     */
    addCase<Type extends string, A extends Action<Type>>(type: Type, reducer: CaseReducer<State, A>): ActionReducerMapBuilder<State>;
    /**
     * Adds case reducers to handle actions based on a `AsyncThunk` action creator.
     * @remarks
     * All calls to `builder.addAsyncThunk` must come before after any calls to `builder.addCase` and before any calls to `builder.addMatcher` or `builder.addDefaultCase`.
     * @param asyncThunk - The async thunk action creator itself.
     * @param reducers - A mapping from each of the `AsyncThunk` action types to the case reducer that should handle those actions.
     * @example
  ```ts no-transpile
  import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
  
  const fetchUserById = createAsyncThunk('users/fetchUser', async (id) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    return (await response.json()).data
  })
  
  const reducer = createReducer(initialState, (builder) => {
    builder.addAsyncThunk(fetchUserById, {
      pending: (state, action) => {
        state.fetchUserById.loading = 'pending'
      },
      fulfilled: (state, action) => {
        state.fetchUserById.data = action.payload
      },
      rejected: (state, action) => {
        state.fetchUserById.error = action.error
      },
      settled: (state, action) => {
        state.fetchUserById.loading = action.meta.requestStatus
      },
    })
  })
     */
    addAsyncThunk<Returned, ThunkArg, ThunkApiConfig extends AsyncThunkConfig = {}>(asyncThunk: AsyncThunk<Returned, ThunkArg, ThunkApiConfig>, reducers: AsyncThunkReducers<State, ThunkArg, Returned, ThunkApiConfig>): Omit<ActionReducerMapBuilder<State>, 'addCase'>;
    /**
     * Allows you to match your incoming actions against your own filter function instead of only the `action.type` property.
     * @remarks
     * If multiple matcher reducers match, all of them will be executed in the order
     * they were defined in - even if a case reducer already matched.
     * All calls to `builder.addMatcher` must come after any calls to `builder.addCase` and `builder.addAsyncThunk` and before any calls to `builder.addDefaultCase`.
     * @param matcher - A matcher function. In TypeScript, this should be a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
     *   function
     * @param reducer - The actual case reducer function.
     *
     * @example
  ```ts
  import {
    createAction,
    createReducer,
    AsyncThunk,
    UnknownAction,
  } from "@reduxjs/toolkit";
  
  type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
  
  type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
  type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
  type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;
  
  const initialState: Record<string, string> = {};
  const resetAction = createAction("reset-tracked-loading-state");
  
  function isPendingAction(action: UnknownAction): action is PendingAction {
    return typeof action.type === "string" && action.type.endsWith("/pending");
  }
  
  const reducer = createReducer(initialState, (builder) => {
    builder
      .addCase(resetAction, () => initialState)
      // matcher can be defined outside as a type predicate function
      .addMatcher(isPendingAction, (state, action) => {
        state[action.meta.requestId] = "pending";
      })
      .addMatcher(
        // matcher can be defined inline as a type predicate function
        (action): action is RejectedAction => action.type.endsWith("/rejected"),
        (state, action) => {
          state[action.meta.requestId] = "rejected";
        }
      )
      // matcher can just return boolean and the matcher can receive a generic argument
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state[action.meta.requestId] = "fulfilled";
        }
      );
  });
  ```
     */
    addMatcher<A>(matcher: TypeGuard<A> | ((action: any) => boolean), reducer: CaseReducer<State, A extends Action ? A : A & Action>): Omit<ActionReducerMapBuilder<State>, 'addCase' | 'addAsyncThunk'>;
    /**
     * Adds a "default case" reducer that is executed if no case reducer and no matcher
     * reducer was executed for this action.
     * @param reducer - The fallback "default case" reducer function.
     *
     * @example
  ```ts
  import { createReducer } from '@reduxjs/toolkit'
  const initialState = { otherActions: 0 }
  const reducer = createReducer(initialState, builder => {
    builder
      // .addCase(...)
      // .addMatcher(...)
      .addDefaultCase((state, action) => {
        state.otherActions++
      })
  })
  ```
     */
    addDefaultCase(reducer: CaseReducer<State, Action>): {};
}

/**
 * Defines a mapping from action types to corresponding action object shapes.
 *
 * @deprecated This should not be used manually - it is only used for internal
 *             inference purposes and should not have any further value.
 *             It might be removed in the future.
 * @public
 */
type Actions<T extends keyof any = string> = Record<T, Action>;
/**
 * A *case reducer* is a reducer function for a specific action type. Case
 * reducers can be composed to full reducers using `createReducer()`.
 *
 * Unlike a normal Redux reducer, a case reducer is never called with an
 * `undefined` state to determine the initial state. Instead, the initial
 * state is explicitly specified as an argument to `createReducer()`.
 *
 * In addition, a case reducer can choose to mutate the passed-in `state`
 * value directly instead of returning a new state. This does not actually
 * cause the store state to be mutated directly; instead, thanks to
 * [immer](https://github.com/mweststrate/immer), the mutations are
 * translated to copy operations that result in a new state.
 *
 * @public
 */
type CaseReducer<S = any, A extends Action = UnknownAction> = (state: Draft<S>, action: A) => NoInfer<S> | void | Draft<NoInfer<S>>;
/**
 * A mapping from action types to case reducers for `createReducer()`.
 *
 * @deprecated This should not be used manually - it is only used
 *             for internal inference purposes and using it manually
 *             would lead to type erasure.
 *             It might be removed in the future.
 * @public
 */
type CaseReducers<S, AS extends Actions> = {
    [T in keyof AS]: AS[T] extends Action ? CaseReducer<S, AS[T]> : void;
};
type NotFunction<T> = T extends Function ? never : T;
type ReducerWithInitialState<S extends NotFunction<any>> = Reducer<S> & {
    getInitialState: () => S;
};
/**
 * A utility function that allows defining a reducer as a mapping from action
 * type to *case reducer* functions that handle these action types. The
 * reducer's initial state is passed as the first argument.
 *
 * @remarks
 * The body of every case reducer is implicitly wrapped with a call to
 * `produce()` from the [immer](https://github.com/mweststrate/immer) library.
 * This means that rather than returning a new state object, you can also
 * mutate the passed-in state object directly; these mutations will then be
 * automatically and efficiently translated into copies, giving you both
 * convenience and immutability.
 *
 * @overloadSummary
 * This function accepts a callback that receives a `builder` object as its argument.
 * That builder provides `addCase`, `addMatcher` and `addDefaultCase` functions that may be
 * called to define what actions this reducer will handle.
 *
 * @param initialState - `State | (() => State)`: The initial state that should be used when the reducer is called the first time. This may also be a "lazy initializer" function, which should return an initial state value when called. This will be used whenever the reducer is called with `undefined` as its state value, and is primarily useful for cases like reading initial state from `localStorage`.
 * @param builderCallback - `(builder: Builder) => void` A callback that receives a *builder* object to define
 *   case reducers via calls to `builder.addCase(actionCreatorOrType, reducer)`.
 * @example
```ts
import {
  createAction,
  createReducer,
  UnknownAction,
  PayloadAction,
} from "@reduxjs/toolkit";

const increment = createAction<number>("increment");
const decrement = createAction<number>("decrement");

function isActionWithNumberPayload(
  action: UnknownAction
): action is PayloadAction<number> {
  return typeof action.payload === "number";
}

const reducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        // action is inferred correctly here
        state.counter += action.payload;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {
        state.counter -= action.payload;
      })
      // You can apply a "matcher function" to incoming actions
      .addMatcher(isActionWithNumberPayload, (state, action) => {})
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  }
);
```
 * @public
 */
declare function createReducer<S extends NotFunction<any>>(initialState: S | (() => S), mapOrBuilderCallback: (builder: ActionReducerMapBuilder<S>) => void): ReducerWithInitialState<S>;

type SliceLike<ReducerPath extends string, State, PreloadedState = State> = {
    reducerPath: ReducerPath;
    reducer: Reducer<State, any, PreloadedState>;
};
type AnySliceLike = SliceLike<string, any>;
type SliceLikeReducerPath<A extends AnySliceLike> = A extends SliceLike<infer ReducerPath, any> ? ReducerPath : never;
type SliceLikeState<A extends AnySliceLike> = A extends SliceLike<any, infer State, any> ? State : never;
type SliceLikePreloadedState<A extends AnySliceLike> = A extends SliceLike<any, any, infer PreloadedState> ? PreloadedState : never;
type WithSlice<A extends AnySliceLike> = {
    [Path in SliceLikeReducerPath<A>]: SliceLikeState<A>;
};
type WithSlicePreloadedState<A extends AnySliceLike> = {
    [Path in SliceLikeReducerPath<A>]: SliceLikePreloadedState<A>;
};
type ReducerMap = Record<string, Reducer>;
type ExistingSliceLike<DeclaredState, PreloadedState> = {
    [ReducerPath in keyof DeclaredState]: SliceLike<ReducerPath & string, NonUndefined<DeclaredState[ReducerPath]>, NonUndefined<PreloadedState[ReducerPath & keyof PreloadedState]>>;
}[keyof DeclaredState];
type InjectConfig = {
    /**
     * Allow replacing reducer with a different reference. Normally, an error will be thrown if a different reducer instance to the one already injected is used.
     */
    overrideExisting?: boolean;
};
/**
 * A reducer that allows for slices/reducers to be injected after initialisation.
 */
interface CombinedSliceReducer<InitialState, DeclaredState extends InitialState = InitialState, PreloadedState extends Partial<Record<keyof PreloadedState, any>> = Partial<DeclaredState>> extends Reducer<DeclaredState, UnknownAction, PreloadedState> {
    /**
     * Provide a type for slices that will be injected lazily.
     *
     * One way to do this would be with interface merging:
     * ```ts
     *
     * export interface LazyLoadedSlices {}
     *
     * export const rootReducer = combineSlices(stringSlice).withLazyLoadedSlices<LazyLoadedSlices>();
     *
     * // elsewhere
     *
     * declare module './reducer' {
     *   export interface LazyLoadedSlices extends WithSlice<typeof booleanSlice> {}
     * }
     *
     * const withBoolean = rootReducer.inject(booleanSlice);
     *
     * // elsewhere again
     *
     * declare module './reducer' {
     *   export interface LazyLoadedSlices {
     *     customName: CustomState
     *   }
     * }
     *
     * const withCustom = rootReducer.inject({ reducerPath: "customName", reducer: customSlice.reducer })
     * ```
     */
    withLazyLoadedSlices<Lazy = {}, LazyPreloaded = Lazy>(): CombinedSliceReducer<InitialState, Id<DeclaredState & Partial<Lazy>>, Id<PreloadedState & Partial<LazyPreloaded>>>;
    /**
     * Inject a slice.
     *
     * Accepts an individual slice, RTKQ API instance, or a "slice-like" { reducerPath, reducer } object.
     *
     * ```ts
     * rootReducer.inject(booleanSlice)
     * rootReducer.inject(baseApi)
     * rootReducer.inject({ reducerPath: 'boolean' as const, reducer: newReducer }, { overrideExisting: true })
     * ```
     *
     */
    inject<Sl extends Id<ExistingSliceLike<DeclaredState, PreloadedState>>>(slice: Sl, config?: InjectConfig): CombinedSliceReducer<InitialState, Id<DeclaredState & WithSlice<Sl>>, Id<PreloadedState & Partial<WithSlicePreloadedState<Sl>>>>;
    /**
     * Inject a slice.
     *
     * Accepts an individual slice, RTKQ API instance, or a "slice-like" { reducerPath, reducer } object.
     *
     * ```ts
     * rootReducer.inject(booleanSlice)
     * rootReducer.inject(baseApi)
     * rootReducer.inject({ reducerPath: 'boolean' as const, reducer: newReducer }, { overrideExisting: true })
     * ```
     *
     */
    inject<ReducerPath extends string, State, PreloadedState = State>(slice: SliceLike<ReducerPath, State & (ReducerPath extends keyof DeclaredState ? never : State), PreloadedState & (ReducerPath extends keyof PreloadedState ? never : PreloadedState)>, config?: InjectConfig): CombinedSliceReducer<InitialState, Id<DeclaredState & WithSlice<SliceLike<ReducerPath, State>>>, Id<PreloadedState & WithSlicePreloadedState<SliceLike<ReducerPath, State, PreloadedState>>>>;
    /**
     * Create a selector that guarantees that the slices injected will have a defined value when selector is run.
     *
     * ```ts
     * const selectBooleanWithoutInjection = (state: RootState) => state.boolean;
     * //                                                                ^? boolean | undefined
     *
     * const selectBoolean = rootReducer.inject(booleanSlice).selector((state) => {
     *   // if action hasn't been dispatched since slice was injected, this would usually be undefined
     *   // however selector() uses a Proxy around the first parameter to ensure that it evaluates to the initial state instead, if undefined
     *   return state.boolean;
     *   //           ^? boolean
     * })
     * ```
     *
     * If the reducer is nested inside the root state, a selectState callback can be passed to retrieve the reducer's state.
     *
     * ```ts
     *
     * export interface LazyLoadedSlices {};
     *
     * export const innerReducer = combineSlices(stringSlice).withLazyLoadedSlices<LazyLoadedSlices>();
     *
     * export const rootReducer = combineSlices({ inner: innerReducer });
     *
     * export type RootState = ReturnType<typeof rootReducer>;
     *
     * // elsewhere
     *
     * declare module "./reducer.ts" {
     *  export interface LazyLoadedSlices extends WithSlice<typeof booleanSlice> {}
     * }
     *
     * const withBool = innerReducer.inject(booleanSlice);
     *
     * const selectBoolean = withBool.selector(
     *   (state) => state.boolean,
     *   (rootState: RootState) => state.inner
     * );
     * //    now expects to be passed RootState instead of innerReducer state
     *
     * ```
     *
     * Value passed to selectorFn will be a Proxy - use selector.original(proxy) to get original state value (useful for debugging)
     *
     * ```ts
     * const injectedReducer = rootReducer.inject(booleanSlice);
     * const selectBoolean = injectedReducer.selector((state) => {
     *   console.log(injectedReducer.selector.original(state).boolean) // possibly undefined
     *   return state.boolean
     * })
     * ```
     */
    selector: {
        /**
         * Create a selector that guarantees that the slices injected will have a defined value when selector is run.
         *
         * ```ts
         * const selectBooleanWithoutInjection = (state: RootState) => state.boolean;
         * //                                                                ^? boolean | undefined
         *
         * const selectBoolean = rootReducer.inject(booleanSlice).selector((state) => {
         *   // if action hasn't been dispatched since slice was injected, this would usually be undefined
         *   // however selector() uses a Proxy around the first parameter to ensure that it evaluates to the initial state instead, if undefined
         *   return state.boolean;
         *   //           ^? boolean
         * })
         * ```
         *
         * Value passed to selectorFn will be a Proxy - use selector.original(proxy) to get original state value (useful for debugging)
         *
         * ```ts
         * const injectedReducer = rootReducer.inject(booleanSlice);
         * const selectBoolean = injectedReducer.selector((state) => {
         *   console.log(injectedReducer.selector.original(state).boolean) // undefined
         *   return state.boolean
         * })
         * ```
         */
        <Selector extends (state: DeclaredState, ...args: any[]) => unknown>(selectorFn: Selector): (state: WithOptionalProp<Parameters<Selector>[0], Exclude<keyof DeclaredState, keyof InitialState>>, ...args: Tail<Parameters<Selector>>) => ReturnType<Selector>;
        /**
         * Create a selector that guarantees that the slices injected will have a defined value when selector is run.
         *
         * ```ts
         * const selectBooleanWithoutInjection = (state: RootState) => state.boolean;
         * //                                                                ^? boolean | undefined
         *
         * const selectBoolean = rootReducer.inject(booleanSlice).selector((state) => {
         *   // if action hasn't been dispatched since slice was injected, this would usually be undefined
         *   // however selector() uses a Proxy around the first parameter to ensure that it evaluates to the initial state instead, if undefined
         *   return state.boolean;
         *   //           ^? boolean
         * })
         * ```
         *
         * If the reducer is nested inside the root state, a selectState callback can be passed to retrieve the reducer's state.
         *
         * ```ts
         *
         * interface LazyLoadedSlices {};
         *
         * const innerReducer = combineSlices(stringSlice).withLazyLoadedSlices<LazyLoadedSlices>();
         *
         * const rootReducer = combineSlices({ inner: innerReducer });
         *
         * type RootState = ReturnType<typeof rootReducer>;
         *
         * // elsewhere
         *
         * declare module "./reducer.ts" {
         *  interface LazyLoadedSlices extends WithSlice<typeof booleanSlice> {}
         * }
         *
         * const withBool = innerReducer.inject(booleanSlice);
         *
         * const selectBoolean = withBool.selector(
         *   (state) => state.boolean,
         *   (rootState: RootState) => state.inner
         * );
         * //    now expects to be passed RootState instead of innerReducer state
         *
         * ```
         *
         * Value passed to selectorFn will be a Proxy - use selector.original(proxy) to get original state value (useful for debugging)
         *
         * ```ts
         * const injectedReducer = rootReducer.inject(booleanSlice);
         * const selectBoolean = injectedReducer.selector((state) => {
         *   console.log(injectedReducer.selector.original(state).boolean) // possibly undefined
         *   return state.boolean
         * })
         * ```
         */
        <Selector extends (state: DeclaredState, ...args: any[]) => unknown, RootState>(selectorFn: Selector, selectState: (rootState: RootState, ...args: Tail<Parameters<Selector>>) => WithOptionalProp<Parameters<Selector>[0], Exclude<keyof DeclaredState, keyof InitialState>>): (state: RootState, ...args: Tail<Parameters<Selector>>) => ReturnType<Selector>;
        /**
         * Returns the unproxied state. Useful for debugging.
         * @param state state Proxy, that ensures injected reducers have value
         * @returns original, unproxied state
         * @throws if value passed is not a state Proxy
         */
        original: (state: DeclaredState) => InitialState & Partial<DeclaredState>;
    };
}
type InitialState<Slices extends Array<AnySliceLike | ReducerMap>> = UnionToIntersection<Slices[number] extends infer Slice ? Slice extends AnySliceLike ? WithSlice<Slice> : StateFromReducersMapObject<Slice> : never>;
type InitialPreloadedState<Slices extends Array<AnySliceLike | ReducerMap>> = UnionToIntersection<Slices[number] extends infer Slice ? Slice extends AnySliceLike ? WithSlicePreloadedState<Slice> : PreloadedStateShapeFromReducersMapObject<Slice> : never>;
declare function combineSlices<Slices extends Array<AnySliceLike | ReducerMap>>(...slices: Slices): CombinedSliceReducer<Id<InitialState<Slices>>, Id<InitialState<Slices>>, Partial<Id<InitialPreloadedState<Slices>>>>;

declare const asyncThunkSymbol: unique symbol;
declare const asyncThunkCreator: {
    [asyncThunkSymbol]: typeof createAsyncThunk;
};
type InjectIntoConfig<NewReducerPath extends string> = InjectConfig & {
    reducerPath?: NewReducerPath;
};
/**
 * The return value of `createSlice`
 *
 * @public
 */
interface Slice<State = any, CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>, Name extends string = string, ReducerPath extends string = Name, Selectors extends SliceSelectors<State> = SliceSelectors<State>> {
    /**
     * The slice name.
     */
    name: Name;
    /**
     *  The slice reducer path.
     */
    reducerPath: ReducerPath;
    /**
     * The slice's reducer.
     */
    reducer: Reducer<State>;
    /**
     * Action creators for the types of actions that are handled by the slice
     * reducer.
     */
    actions: CaseReducerActions<CaseReducers, Name>;
    /**
     * The individual case reducer functions that were passed in the `reducers` parameter.
     * This enables reuse and testing if they were defined inline when calling `createSlice`.
     */
    caseReducers: SliceDefinedCaseReducers<CaseReducers>;
    /**
     * Provides access to the initial state value given to the slice.
     * If a lazy state initializer was provided, it will be called and a fresh value returned.
     */
    getInitialState: () => State;
    /**
     * Get localised slice selectors (expects to be called with *just* the slice's state as the first parameter)
     */
    getSelectors(): Id<SliceDefinedSelectors<State, Selectors, State>>;
    /**
     * Get globalised slice selectors (`selectState` callback is expected to receive first parameter and return slice state)
     */
    getSelectors<RootState>(selectState: (rootState: RootState) => State): Id<SliceDefinedSelectors<State, Selectors, RootState>>;
    /**
     * Selectors that assume the slice's state is `rootState[slice.reducerPath]` (which is usually the case)
     *
     * Equivalent to `slice.getSelectors((state: RootState) => state[slice.reducerPath])`.
     */
    get selectors(): Id<SliceDefinedSelectors<State, Selectors, {
        [K in ReducerPath]: State;
    }>>;
    /**
     * Inject slice into provided reducer (return value from `combineSlices`), and return injected slice.
     */
    injectInto<NewReducerPath extends string = ReducerPath>(this: this, injectable: {
        inject: (slice: {
            reducerPath: string;
            reducer: Reducer;
        }, config?: InjectConfig) => void;
    }, config?: InjectIntoConfig<NewReducerPath>): InjectedSlice<State, CaseReducers, Name, NewReducerPath, Selectors>;
    /**
     * Select the slice state, using the slice's current reducerPath.
     *
     * Will throw an error if slice is not found.
     */
    selectSlice(state: {
        [K in ReducerPath]: State;
    }): State;
}
/**
 * A slice after being called with `injectInto(reducer)`.
 *
 * Selectors can now be called with an `undefined` value, in which case they use the slice's initial state.
 */
type InjectedSlice<State = any, CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>, Name extends string = string, ReducerPath extends string = Name, Selectors extends SliceSelectors<State> = SliceSelectors<State>> = Omit<Slice<State, CaseReducers, Name, ReducerPath, Selectors>, 'getSelectors' | 'selectors'> & {
    /**
     * Get localised slice selectors (expects to be called with *just* the slice's state as the first parameter)
     */
    getSelectors(): Id<SliceDefinedSelectors<State, Selectors, State | undefined>>;
    /**
     * Get globalised slice selectors (`selectState` callback is expected to receive first parameter and return slice state)
     */
    getSelectors<RootState>(selectState: (rootState: RootState) => State | undefined): Id<SliceDefinedSelectors<State, Selectors, RootState>>;
    /**
     * Selectors that assume the slice's state is `rootState[slice.name]` (which is usually the case)
     *
     * Equivalent to `slice.getSelectors((state: RootState) => state[slice.name])`.
     */
    get selectors(): Id<SliceDefinedSelectors<State, Selectors, {
        [K in ReducerPath]?: State | undefined;
    }>>;
    /**
     * Select the slice state, using the slice's current reducerPath.
     *
     * Returns initial state if slice is not found.
     */
    selectSlice(state: {
        [K in ReducerPath]?: State | undefined;
    }): State;
};
/**
 * Options for `createSlice()`.
 *
 * @public
 */
interface CreateSliceOptions<State = any, CR extends SliceCaseReducers<State> = SliceCaseReducers<State>, Name extends string = string, ReducerPath extends string = Name, Selectors extends SliceSelectors<State> = SliceSelectors<State>> {
    /**
     * The slice's name. Used to namespace the generated action types.
     */
    name: Name;
    /**
     * The slice's reducer path. Used when injecting into a combined slice reducer.
     */
    reducerPath?: ReducerPath;
    /**
     * The initial state that should be used when the reducer is called the first time. This may also be a "lazy initializer" function, which should return an initial state value when called. This will be used whenever the reducer is called with `undefined` as its state value, and is primarily useful for cases like reading initial state from `localStorage`.
     */
    initialState: State | (() => State);
    /**
     * A mapping from action types to action-type-specific *case reducer*
     * functions. For every action type, a matching action creator will be
     * generated using `createAction()`.
     */
    reducers: ValidateSliceCaseReducers<State, CR> | ((creators: ReducerCreators<State>) => CR);
    /**
     * A callback that receives a *builder* object to define
     * case reducers via calls to `builder.addCase(actionCreatorOrType, reducer)`.
     *
     *
     * @example
  ```ts
  import { createAction, createSlice, Action } from '@reduxjs/toolkit'
  const incrementBy = createAction<number>('incrementBy')
  const decrement = createAction('decrement')
  
  interface RejectedAction extends Action {
    error: Error
  }
  
  function isRejectedAction(action: Action): action is RejectedAction {
    return action.type.endsWith('rejected')
  }
  
  createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(incrementBy, (state, action) => {
          // action is inferred correctly here if using TS
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(decrement, (state, action) => {})
        // You can match a range of action types
        .addMatcher(
          isRejectedAction,
          // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
          (state, action) => {}
        )
        // and provide a default case if no other handlers matched
        .addDefaultCase((state, action) => {})
      }
  })
  ```
     */
    extraReducers?: (builder: ActionReducerMapBuilder<State>) => void;
    /**
     * A map of selectors that receive the slice's state and any additional arguments, and return a result.
     */
    selectors?: Selectors;
}
declare enum ReducerType {
    reducer = "reducer",
    reducerWithPrepare = "reducerWithPrepare",
    asyncThunk = "asyncThunk"
}
type ReducerDefinition<T extends ReducerType = ReducerType> = {
    _reducerDefinitionType: T;
};
type CaseReducerDefinition<S = any, A extends Action = UnknownAction> = CaseReducer<S, A> & ReducerDefinition<ReducerType.reducer>;
/**
 * A CaseReducer with a `prepare` method.
 *
 * @public
 */
type CaseReducerWithPrepare<State, Action extends PayloadAction> = {
    reducer: CaseReducer<State, Action>;
    prepare: PrepareAction<Action['payload']>;
};
type AsyncThunkSliceReducerConfig<State, ThunkArg extends any, Returned = unknown, ThunkApiConfig extends AsyncThunkConfig = {}> = AsyncThunkReducers<State, ThunkArg, Returned, ThunkApiConfig> & {
    options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>;
};
type AsyncThunkSliceReducerDefinition<State, ThunkArg extends any, Returned = unknown, ThunkApiConfig extends AsyncThunkConfig = {}> = AsyncThunkSliceReducerConfig<State, ThunkArg, Returned, ThunkApiConfig> & ReducerDefinition<ReducerType.asyncThunk> & {
    payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>;
};
/**
 * Providing these as part of the config would cause circular types, so we disallow passing them
 */
type PreventCircular<ThunkApiConfig> = {
    [K in keyof ThunkApiConfig]: K extends 'state' | 'dispatch' ? never : ThunkApiConfig[K];
};
interface AsyncThunkCreator<State, CurriedThunkApiConfig extends PreventCircular<AsyncThunkConfig> = PreventCircular<AsyncThunkConfig>> {
    <Returned, ThunkArg = void>(payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, CurriedThunkApiConfig>, config?: AsyncThunkSliceReducerConfig<State, ThunkArg, Returned, CurriedThunkApiConfig>): AsyncThunkSliceReducerDefinition<State, ThunkArg, Returned, CurriedThunkApiConfig>;
    <Returned, ThunkArg, ThunkApiConfig extends PreventCircular<AsyncThunkConfig> = {}>(payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>, config?: AsyncThunkSliceReducerConfig<State, ThunkArg, Returned, ThunkApiConfig>): AsyncThunkSliceReducerDefinition<State, ThunkArg, Returned, ThunkApiConfig>;
    withTypes<ThunkApiConfig extends PreventCircular<AsyncThunkConfig>>(): AsyncThunkCreator<State, OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>>;
}
interface ReducerCreators<State> {
    reducer(caseReducer: CaseReducer<State, PayloadAction>): CaseReducerDefinition<State, PayloadAction>;
    reducer<Payload>(caseReducer: CaseReducer<State, PayloadAction<Payload>>): CaseReducerDefinition<State, PayloadAction<Payload>>;
    asyncThunk: AsyncThunkCreator<State>;
    preparedReducer<Prepare extends PrepareAction<any>>(prepare: Prepare, reducer: CaseReducer<State, ReturnType<_ActionCreatorWithPreparedPayload<Prepare>>>): {
        _reducerDefinitionType: ReducerType.reducerWithPrepare;
        prepare: Prepare;
        reducer: CaseReducer<State, ReturnType<_ActionCreatorWithPreparedPayload<Prepare>>>;
    };
}
/**
 * The type describing a slice's `reducers` option.
 *
 * @public
 */
type SliceCaseReducers<State> = Record<string, ReducerDefinition> | Record<string, CaseReducer<State, PayloadAction<any>> | CaseReducerWithPrepare<State, PayloadAction<any, string, any, any>>>;
/**
 * The type describing a slice's `selectors` option.
 */
type SliceSelectors<State> = {
    [K: string]: (sliceState: State, ...args: any[]) => any;
};
type SliceActionType<SliceName extends string, ActionName extends keyof any> = ActionName extends string | number ? `${SliceName}/${ActionName}` : string;
/**
 * Derives the slice's `actions` property from the `reducers` options
 *
 * @public
 */
type CaseReducerActions<CaseReducers extends SliceCaseReducers<any>, SliceName extends string> = {
    [Type in keyof CaseReducers]: CaseReducers[Type] extends infer Definition ? Definition extends {
        prepare: any;
    } ? ActionCreatorForCaseReducerWithPrepare<Definition, SliceActionType<SliceName, Type>> : Definition extends AsyncThunkSliceReducerDefinition<any, infer ThunkArg, infer Returned, infer ThunkApiConfig> ? AsyncThunk<Returned, ThunkArg, ThunkApiConfig> : Definition extends {
        reducer: any;
    } ? ActionCreatorForCaseReducer<Definition['reducer'], SliceActionType<SliceName, Type>> : ActionCreatorForCaseReducer<Definition, SliceActionType<SliceName, Type>> : never;
};
/**
 * Get a `PayloadActionCreator` type for a passed `CaseReducerWithPrepare`
 *
 * @internal
 */
type ActionCreatorForCaseReducerWithPrepare<CR extends {
    prepare: any;
}, Type extends string> = _ActionCreatorWithPreparedPayload<CR['prepare'], Type>;
/**
 * Get a `PayloadActionCreator` type for a passed `CaseReducer`
 *
 * @internal
 */
type ActionCreatorForCaseReducer<CR, Type extends string> = CR extends (state: any, action: infer Action) => any ? Action extends {
    payload: infer P;
} ? PayloadActionCreator<P, Type> : ActionCreatorWithoutPayload<Type> : ActionCreatorWithoutPayload<Type>;
/**
 * Extracts the CaseReducers out of a `reducers` object, even if they are
 * tested into a `CaseReducerWithPrepare`.
 *
 * @internal
 */
type SliceDefinedCaseReducers<CaseReducers extends SliceCaseReducers<any>> = {
    [Type in keyof CaseReducers]: CaseReducers[Type] extends infer Definition ? Definition extends AsyncThunkSliceReducerDefinition<any, any, any> ? Id<Pick<Required<Definition>, 'fulfilled' | 'rejected' | 'pending' | 'settled'>> : Definition extends {
        reducer: infer Reducer;
    } ? Reducer : Definition : never;
};
type RemappedSelector<S extends Selector, NewState> = S extends Selector<any, infer R, infer P> ? Selector<NewState, R, P> & {
    unwrapped: S;
} : never;
/**
 * Extracts the final selector type from the `selectors` object.
 *
 * Removes the `string` index signature from the default value.
 */
type SliceDefinedSelectors<State, Selectors extends SliceSelectors<State>, RootState> = {
    [K in keyof Selectors as string extends K ? never : K]: RemappedSelector<Selectors[K], RootState>;
};
/**
 * Used on a SliceCaseReducers object.
 * Ensures that if a CaseReducer is a `CaseReducerWithPrepare`, that
 * the `reducer` and the `prepare` function use the same type of `payload`.
 *
 * Might do additional such checks in the future.
 *
 * This type is only ever useful if you want to write your own wrapper around
 * `createSlice`. Please don't use it otherwise!
 *
 * @public
 */
type ValidateSliceCaseReducers<S, ACR extends SliceCaseReducers<S>> = ACR & {
    [T in keyof ACR]: ACR[T] extends {
        reducer(s: S, action?: infer A): any;
    } ? {
        prepare(...a: never[]): Omit<A, 'type'>;
    } : {};
};
interface BuildCreateSliceConfig {
    creators?: {
        asyncThunk?: typeof asyncThunkCreator;
    };
}
declare function buildCreateSlice({ creators }?: BuildCreateSliceConfig): <State, CaseReducers extends SliceCaseReducers<State>, Name extends string, Selectors extends SliceSelectors<State>, ReducerPath extends string = Name>(options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>;
/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * @public
 */
declare const createSlice: <State, CaseReducers extends SliceCaseReducers<State>, Name extends string, Selectors extends SliceSelectors<State>, ReducerPath extends string = Name>(options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>;

type AnyCreateSelectorFunction = CreateSelectorFunction<any, any, any>;
type GetSelectorsOptions = {
    createSelector?: AnyCreateSelectorFunction;
};

/**
 * @public
 */
type EntityId = number | string;
/**
 * @public
 */
type Comparer<T> = (a: T, b: T) => number;
/**
 * @public
 */
type IdSelector<T, Id extends EntityId> = (model: T) => Id;
/**
 * @public
 */
type Update<T, Id extends EntityId> = {
    id: Id;
    changes: Partial<T>;
};
/**
 * @public
 */
interface EntityState<T, Id extends EntityId> {
    ids: Id[];
    entities: Record<Id, T>;
}
/**
 * @public
 */
interface EntityAdapterOptions<T, Id extends EntityId> {
    selectId?: IdSelector<T, Id>;
    sortComparer?: false | Comparer<T>;
}
type PreventAny<S, T, Id extends EntityId> = CastAny<S, EntityState<T, Id>>;
type DraftableEntityState<T, Id extends EntityId> = EntityState<T, Id> | Draft<EntityState<T, Id>>;
/**
 * @public
 */
interface EntityStateAdapter<T, Id extends EntityId> {
    addOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entity: T): S;
    addOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, action: PayloadAction<T>): S;
    addMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: readonly T[] | Record<Id, T>): S;
    addMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: PayloadAction<readonly T[] | Record<Id, T>>): S;
    setOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entity: T): S;
    setOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, action: PayloadAction<T>): S;
    setMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: readonly T[] | Record<Id, T>): S;
    setMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: PayloadAction<readonly T[] | Record<Id, T>>): S;
    setAll<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: readonly T[] | Record<Id, T>): S;
    setAll<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: PayloadAction<readonly T[] | Record<Id, T>>): S;
    removeOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, key: Id): S;
    removeOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, key: PayloadAction<Id>): S;
    removeMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, keys: readonly Id[]): S;
    removeMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, keys: PayloadAction<readonly Id[]>): S;
    removeAll<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>): S;
    updateOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, update: Update<T, Id>): S;
    updateOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, update: PayloadAction<Update<T, Id>>): S;
    updateMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, updates: ReadonlyArray<Update<T, Id>>): S;
    updateMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, updates: PayloadAction<ReadonlyArray<Update<T, Id>>>): S;
    upsertOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entity: T): S;
    upsertOne<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entity: PayloadAction<T>): S;
    upsertMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: readonly T[] | Record<Id, T>): S;
    upsertMany<S extends DraftableEntityState<T, Id>>(state: PreventAny<S, T, Id>, entities: PayloadAction<readonly T[] | Record<Id, T>>): S;
}
/**
 * @public
 */
interface EntitySelectors<T, V, IdType extends EntityId> {
    selectIds: (state: V) => IdType[];
    selectEntities: (state: V) => Record<IdType, T>;
    selectAll: (state: V) => T[];
    selectTotal: (state: V) => number;
    selectById: (state: V, id: IdType) => Id<UncheckedIndexedAccess<T>>;
}
/**
 * @public
 */
interface EntityStateFactory<T, Id extends EntityId> {
    getInitialState(state?: undefined, entities?: Record<Id, T> | readonly T[]): EntityState<T, Id>;
    getInitialState<S extends object>(state: S, entities?: Record<Id, T> | readonly T[]): EntityState<T, Id> & S;
}
/**
 * @public
 */
interface EntityAdapter<T, Id extends EntityId> extends EntityStateAdapter<T, Id>, EntityStateFactory<T, Id>, Required<EntityAdapterOptions<T, Id>> {
    getSelectors(selectState?: undefined, options?: GetSelectorsOptions): EntitySelectors<T, EntityState<T, Id>, Id>;
    getSelectors<V>(selectState: (state: V) => EntityState<T, Id>, options?: GetSelectorsOptions): EntitySelectors<T, V, Id>;
}

declare function createEntityAdapter<T, Id extends EntityId>(options: WithRequiredProp<EntityAdapterOptions<T, Id>, 'selectId'>): EntityAdapter<T, Id>;
declare function createEntityAdapter<T extends {
    id: EntityId;
}>(options?: Omit<EntityAdapterOptions<T, T['id']>, 'selectId'>): EntityAdapter<T, T['id']>;

/** @public */
type ActionMatchingAnyOf<Matchers extends Matcher<any>[]> = ActionFromMatcher<Matchers[number]>;
/** @public */
type ActionMatchingAllOf<Matchers extends Matcher<any>[]> = UnionToIntersection<ActionMatchingAnyOf<Matchers>>;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches any one of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */
declare function isAnyOf<Matchers extends Matcher<any>[]>(...matchers: Matchers): (action: any) => action is ActionMatchingAnyOf<Matchers>;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches all of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */
declare function isAllOf<Matchers extends Matcher<any>[]>(...matchers: Matchers): (action: any) => action is ActionMatchingAllOf<Matchers>;
type UnknownAsyncThunkPendingAction = ReturnType<AsyncThunkPendingActionCreator<unknown>>;
type PendingActionFromAsyncThunk<T extends AnyAsyncThunk> = ActionFromMatcher<T['pending']>;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is pending.
 *
 * @public
 */
declare function isPending(): (action: any) => action is UnknownAsyncThunkPendingAction;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is pending.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
declare function isPending<AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]]>(...asyncThunks: AsyncThunks): (action: any) => action is PendingActionFromAsyncThunk<AsyncThunks[number]>;
/**
 * Tests if `action` is a pending thunk action
 * @public
 */
declare function isPending(action: any): action is UnknownAsyncThunkPendingAction;
type UnknownAsyncThunkRejectedAction = ReturnType<AsyncThunkRejectedActionCreator<unknown, unknown>>;
type RejectedActionFromAsyncThunk<T extends AnyAsyncThunk> = ActionFromMatcher<T['rejected']>;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is rejected.
 *
 * @public
 */
declare function isRejected(): (action: any) => action is UnknownAsyncThunkRejectedAction;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is rejected.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
declare function isRejected<AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]]>(...asyncThunks: AsyncThunks): (action: any) => action is RejectedActionFromAsyncThunk<AsyncThunks[number]>;
/**
 * Tests if `action` is a rejected thunk action
 * @public
 */
declare function isRejected(action: any): action is UnknownAsyncThunkRejectedAction;
type RejectedWithValueActionFromAsyncThunk<T extends AnyAsyncThunk> = ActionFromMatcher<T['rejected']> & (T extends AsyncThunk<any, any, {
    rejectValue: infer RejectedValue;
}> ? {
    payload: RejectedValue;
} : unknown);
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is rejected with value.
 *
 * @public
 */
declare function isRejectedWithValue(): (action: any) => action is UnknownAsyncThunkRejectedAction;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is rejected with value.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
declare function isRejectedWithValue<AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]]>(...asyncThunks: AsyncThunks): (action: any) => action is RejectedWithValueActionFromAsyncThunk<AsyncThunks[number]>;
/**
 * Tests if `action` is a rejected thunk action with value
 * @public
 */
declare function isRejectedWithValue(action: any): action is UnknownAsyncThunkRejectedAction;
type UnknownAsyncThunkFulfilledAction = ReturnType<AsyncThunkFulfilledActionCreator<unknown, unknown>>;
type FulfilledActionFromAsyncThunk<T extends AnyAsyncThunk> = ActionFromMatcher<T['fulfilled']>;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is fulfilled.
 *
 * @public
 */
declare function isFulfilled(): (action: any) => action is UnknownAsyncThunkFulfilledAction;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is fulfilled.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
declare function isFulfilled<AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]]>(...asyncThunks: AsyncThunks): (action: any) => action is FulfilledActionFromAsyncThunk<AsyncThunks[number]>;
/**
 * Tests if `action` is a fulfilled thunk action
 * @public
 */
declare function isFulfilled(action: any): action is UnknownAsyncThunkFulfilledAction;
type UnknownAsyncThunkAction = UnknownAsyncThunkPendingAction | UnknownAsyncThunkRejectedAction | UnknownAsyncThunkFulfilledAction;
type AnyAsyncThunk = {
    pending: {
        match: (action: any) => action is any;
    };
    fulfilled: {
        match: (action: any) => action is any;
    };
    rejected: {
        match: (action: any) => action is any;
    };
};
type ActionsFromAsyncThunk<T extends AnyAsyncThunk> = ActionFromMatcher<T['pending']> | ActionFromMatcher<T['fulfilled']> | ActionFromMatcher<T['rejected']>;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator.
 *
 * @public
 */
declare function isAsyncThunkAction(): (action: any) => action is UnknownAsyncThunkAction;
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
declare function isAsyncThunkAction<AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]]>(...asyncThunks: AsyncThunks): (action: any) => action is ActionsFromAsyncThunk<AsyncThunks[number]>;
/**
 * Tests if `action` is a thunk action
 * @public
 */
declare function isAsyncThunkAction(action: any): action is UnknownAsyncThunkAction;

/**
 *
 * @public
 */
declare let nanoid: (size?: number) => string;

declare class TaskAbortError implements SerializedError {
    code: string | undefined;
    name: string;
    message: string;
    constructor(code: string | undefined);
}

/**
 * Types copied from RTK
 */
/** @internal */
type TypedActionCreatorWithMatchFunction<Type extends string> = TypedActionCreator<Type> & {
    match: MatchFunction<any>;
};
/** @internal */
type AnyListenerPredicate<State> = (action: UnknownAction, currentState: State, originalState: State) => boolean;
/** @public */
type ListenerPredicate<ActionType extends Action, State> = (action: UnknownAction, currentState: State, originalState: State) => action is ActionType;
/** @public */
interface ConditionFunction<State> {
    (predicate: AnyListenerPredicate<State>, timeout?: number): Promise<boolean>;
    (predicate: AnyListenerPredicate<State>, timeout?: number): Promise<boolean>;
    (predicate: () => boolean, timeout?: number): Promise<boolean>;
}
/** @internal */
type MatchFunction<T> = (v: any) => v is T;
/** @public */
interface ForkedTaskAPI {
    /**
     * Returns a promise that resolves when `waitFor` resolves or
     * rejects if the task or the parent listener has been cancelled or is completed.
     */
    pause<W>(waitFor: Promise<W>): Promise<W>;
    /**
     * Returns a promise that resolves after `timeoutMs` or
     * rejects if the task or the parent listener has been cancelled or is completed.
     * @param timeoutMs
     */
    delay(timeoutMs: number): Promise<void>;
    /**
     * An abort signal whose `aborted` property is set to `true`
     * if the task execution is either aborted or completed.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    signal: AbortSignal;
}
/** @public */
interface AsyncTaskExecutor<T> {
    (forkApi: ForkedTaskAPI): Promise<T>;
}
/** @public */
interface SyncTaskExecutor<T> {
    (forkApi: ForkedTaskAPI): T;
}
/** @public */
type ForkedTaskExecutor<T> = AsyncTaskExecutor<T> | SyncTaskExecutor<T>;
/** @public */
type TaskResolved<T> = {
    readonly status: 'ok';
    readonly value: T;
};
/** @public */
type TaskRejected = {
    readonly status: 'rejected';
    readonly error: unknown;
};
/** @public */
type TaskCancelled = {
    readonly status: 'cancelled';
    readonly error: TaskAbortError;
};
/** @public */
type TaskResult<Value> = TaskResolved<Value> | TaskRejected | TaskCancelled;
/** @public */
interface ForkedTask<T> {
    /**
     * A promise that resolves when the task is either completed or cancelled or rejects
     * if parent listener execution is cancelled or completed.
     *
     * ### Example
     * ```ts
     * const result = await fork(async (forkApi) => Promise.resolve(4)).result
     *
     * if(result.status === 'ok') {
     *   console.log(result.value) // logs 4
     * }}
     * ```
     */
    result: Promise<TaskResult<T>>;
    /**
     * Cancel task if it is in progress or not yet started,
     * it is noop otherwise.
     */
    cancel(): void;
}
/** @public */
interface ForkOptions {
    /**
     * If true, causes the parent task to not be marked as complete until
     * all autoJoined forks have completed or failed.
     */
    autoJoin: boolean;
}
/** @public */
interface ListenerEffectAPI<State, DispatchType extends Dispatch, ExtraArgument = unknown> extends MiddlewareAPI<DispatchType, State> {
    /**
     * Returns the store state as it existed when the action was originally dispatched, _before_ the reducers ran.
     *
     * ### Synchronous invocation
     *
     * This function can **only** be invoked **synchronously**, it throws error otherwise.
     *
     * @example
     *
     * ```ts
     * middleware.startListening({
     *  predicate: () => true,
     *  async effect(_, { getOriginalState }) {
     *    getOriginalState(); // sync: OK!
     *
     *    setTimeout(getOriginalState, 0); // async: throws Error
     *
     *    await Promise().resolve();
     *
     *    getOriginalState() // async: throws Error
     *  }
     * })
     * ```
     */
    getOriginalState: () => State;
    /**
     * Removes the listener entry from the middleware and prevent future instances of the listener from running.
     *
     * It does **not** cancel any active instances.
     */
    unsubscribe(): void;
    /**
     * It will subscribe a listener if it was previously removed, noop otherwise.
     */
    subscribe(): void;
    /**
     * Returns a promise that resolves when the input predicate returns `true` or
     * rejects if the listener has been cancelled or is completed.
     *
     * The return value is `true` if the predicate succeeds or `false` if a timeout is provided and expires first.
     *
     * ### Example
     *
     * ```ts
     * const updateBy = createAction<number>('counter/updateBy');
     *
     * middleware.startListening({
     *  actionCreator: updateBy,
     *  async effect(_, { condition }) {
     *    // wait at most 3s for `updateBy` actions.
     *    if(await condition(updateBy.match, 3_000)) {
     *      // `updateBy` has been dispatched twice in less than 3s.
     *    }
     *  }
     * })
     * ```
     */
    condition: ConditionFunction<State>;
    /**
     * Returns a promise that resolves when the input predicate returns `true` or
     * rejects if the listener has been cancelled or is completed.
     *
     * The return value is the `[action, currentState, previousState]` combination that the predicate saw as arguments.
     *
     * The promise resolves to null if a timeout is provided and expires first,
     *
     * ### Example
     *
     * ```ts
     * const updateBy = createAction<number>('counter/updateBy');
     *
     * middleware.startListening({
     *  actionCreator: updateBy,
     *  async effect(_, { take }) {
     *    const [{ payload }] =  await take(updateBy.match);
     *    console.log(payload); // logs 5;
     *  }
     * })
     *
     * store.dispatch(updateBy(5));
     * ```
     */
    take: TakePattern<State>;
    /**
     * Cancels all other running instances of this same listener except for the one that made this call.
     */
    cancelActiveListeners: () => void;
    /**
     * Cancels the instance of this listener that made this call.
     */
    cancel: () => void;
    /**
     * Throws a `TaskAbortError` if this listener has been cancelled
     */
    throwIfCancelled: () => void;
    /**
     * An abort signal whose `aborted` property is set to `true`
     * if the listener execution is either aborted or completed.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    signal: AbortSignal;
    /**
     * Returns a promise that resolves after `timeoutMs` or
     * rejects if the listener has been cancelled or is completed.
     */
    delay(timeoutMs: number): Promise<void>;
    /**
     * Queues in the next microtask the execution of a task.
     * @param executor
     * @param options
     */
    fork<T>(executor: ForkedTaskExecutor<T>, options?: ForkOptions): ForkedTask<T>;
    /**
     * Returns a promise that resolves when `waitFor` resolves or
     * rejects if the listener has been cancelled or is completed.
     * @param promise
     */
    pause<M>(promise: Promise<M>): Promise<M>;
    extra: ExtraArgument;
}
/** @public */
type ListenerEffect<ActionType extends Action, State, DispatchType extends Dispatch, ExtraArgument = unknown> = (action: ActionType, api: ListenerEffectAPI<State, DispatchType, ExtraArgument>) => void | Promise<void>;
/**
 * @public
 * Additional infos regarding the error raised.
 */
interface ListenerErrorInfo {
    /**
     * Which function has generated the exception.
     */
    raisedBy: 'effect' | 'predicate';
}
/**
 * @public
 * Gets notified with synchronous and asynchronous errors raised by `listeners` or `predicates`.
 * @param error The thrown error.
 * @param errorInfo Additional information regarding the thrown error.
 */
interface ListenerErrorHandler {
    (error: unknown, errorInfo: ListenerErrorInfo): void;
}
/** @public */
interface CreateListenerMiddlewareOptions<ExtraArgument = unknown> {
    extra?: ExtraArgument;
    /**
     * Receives synchronous errors that are raised by `listener` and `listenerOption.predicate`.
     */
    onError?: ListenerErrorHandler;
}
/** @public */
type ListenerMiddleware<State = unknown, DispatchType extends ThunkDispatch<State, unknown, Action> = ThunkDispatch<State, unknown, UnknownAction>, ExtraArgument = unknown> = Middleware<{
    (action: Action<'listenerMiddleware/add'>): UnsubscribeListener;
}, State, DispatchType>;
/** @public */
interface ListenerMiddlewareInstance<StateType = unknown, DispatchType extends ThunkDispatch<StateType, unknown, Action> = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown> {
    middleware: ListenerMiddleware<StateType, DispatchType, ExtraArgument>;
    startListening: AddListenerOverloads<UnsubscribeListener, StateType, DispatchType, ExtraArgument> & TypedStartListening<StateType, DispatchType, ExtraArgument>;
    stopListening: RemoveListenerOverloads<StateType, DispatchType> & TypedStopListening<StateType, DispatchType>;
    /**
     * Unsubscribes all listeners, cancels running listeners and tasks.
     */
    clearListeners: () => void;
}
/**
 * API Function Overloads
 */
/** @public */
type TakePatternOutputWithoutTimeout<State, Predicate extends AnyListenerPredicate<State>> = Predicate extends MatchFunction<infer ActionType> ? Promise<[ActionType, State, State]> : Promise<[UnknownAction, State, State]>;
/** @public */
type TakePatternOutputWithTimeout<State, Predicate extends AnyListenerPredicate<State>> = Predicate extends MatchFunction<infer ActionType> ? Promise<[ActionType, State, State] | null> : Promise<[UnknownAction, State, State] | null>;
/** @public */
interface TakePattern<State> {
    <Predicate extends AnyListenerPredicate<State>>(predicate: Predicate): TakePatternOutputWithoutTimeout<State, Predicate>;
    <Predicate extends AnyListenerPredicate<State>>(predicate: Predicate, timeout: number): TakePatternOutputWithTimeout<State, Predicate>;
    <Predicate extends AnyListenerPredicate<State>>(predicate: Predicate, timeout?: number | undefined): TakePatternOutputWithTimeout<State, Predicate>;
}
/** @public */
interface UnsubscribeListenerOptions {
    cancelActive?: true;
}
/** @public */
type UnsubscribeListener = (unsubscribeOptions?: UnsubscribeListenerOptions) => void;
/**
 * @public
 * The possible overloads and options for defining a listener. The return type of each function is specified as a generic arg, so the overloads can be reused for multiple different functions
 */
type AddListenerOverloads<Return, StateType = unknown, DispatchType extends Dispatch = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown, AdditionalOptions = unknown> = {
    /** Accepts a "listener predicate" that is also a TS type predicate for the action*/
    <MiddlewareActionType extends UnknownAction, ListenerPredicateType extends ListenerPredicate<MiddlewareActionType, StateType>>(options: {
        actionCreator?: never;
        type?: never;
        matcher?: never;
        predicate: ListenerPredicateType;
        effect: ListenerEffect<ListenerPredicateGuardedActionType<ListenerPredicateType>, StateType, DispatchType, ExtraArgument>;
    } & AdditionalOptions): Return;
    /** Accepts an RTK action creator, like `incrementByAmount` */
    <ActionCreatorType extends TypedActionCreatorWithMatchFunction<any>>(options: {
        actionCreator: ActionCreatorType;
        type?: never;
        matcher?: never;
        predicate?: never;
        effect: ListenerEffect<ReturnType<ActionCreatorType>, StateType, DispatchType, ExtraArgument>;
    } & AdditionalOptions): Return;
    /** Accepts a specific action type string */
    <T extends string>(options: {
        actionCreator?: never;
        type: T;
        matcher?: never;
        predicate?: never;
        effect: ListenerEffect<Action<T>, StateType, DispatchType, ExtraArgument>;
    } & AdditionalOptions): Return;
    /** Accepts an RTK matcher function, such as `incrementByAmount.match` */
    <MatchFunctionType extends MatchFunction<UnknownAction>>(options: {
        actionCreator?: never;
        type?: never;
        matcher: MatchFunctionType;
        predicate?: never;
        effect: ListenerEffect<GuardedType<MatchFunctionType>, StateType, DispatchType, ExtraArgument>;
    } & AdditionalOptions): Return;
    /** Accepts a "listener predicate" that just returns a boolean, no type assertion */
    <ListenerPredicateType extends AnyListenerPredicate<StateType>>(options: {
        actionCreator?: never;
        type?: never;
        matcher?: never;
        predicate: ListenerPredicateType;
        effect: ListenerEffect<UnknownAction, StateType, DispatchType, ExtraArgument>;
    } & AdditionalOptions): Return;
};
/** @public */
type RemoveListenerOverloads<StateType = unknown, DispatchType extends Dispatch = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown> = AddListenerOverloads<boolean, StateType, DispatchType, ExtraArgument, UnsubscribeListenerOptions>;
/**
 * A "pre-typed" version of `addListenerAction`, so the listener args are well-typed
 *
 * @public
 */
type TypedAddListener<StateType, DispatchType extends Dispatch = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown, Payload = ListenerEntry<StateType, DispatchType>, T extends string = 'listenerMiddleware/add'> = BaseActionCreator<Payload, T> & AddListenerOverloads<PayloadAction<Payload, T>, StateType, DispatchType, ExtraArgument> & {
    /**
     * Creates a "pre-typed" version of `addListener`
     * where the `state`, `dispatch` and `extra` types are predefined.
     *
     * This allows you to set the `state`, `dispatch` and `extra` types once,
     * eliminating the need to specify them with every `addListener` call.
     *
     * @returns A pre-typed `addListener` with the state, dispatch and extra types already defined.
     *
     * @example
     * ```ts
     * import { addListener } from '@reduxjs/toolkit'
     *
     * export const addAppListener = addListener.withTypes<RootState, AppDispatch, ExtraArguments>()
     * ```
     *
     * @template OverrideStateType - The specific type of state the middleware listener operates on.
     * @template OverrideDispatchType - The specific type of the dispatch function.
     * @template OverrideExtraArgument - The specific type of the extra object.
     *
     * @since 2.1.0
     */
    withTypes: <OverrideStateType extends StateType, OverrideDispatchType extends Dispatch = ThunkDispatch<OverrideStateType, unknown, UnknownAction>, OverrideExtraArgument = unknown>() => TypedAddListener<OverrideStateType, OverrideDispatchType, OverrideExtraArgument>;
};
/**
 * A "pre-typed" version of `removeListenerAction`, so the listener args are well-typed
 *
 * @public
 */
type TypedRemoveListener<StateType, DispatchType extends Dispatch = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown, Payload = ListenerEntry<StateType, DispatchType>, T extends string = 'listenerMiddleware/remove'> = BaseActionCreator<Payload, T> & AddListenerOverloads<PayloadAction<Payload, T>, StateType, DispatchType, ExtraArgument, UnsubscribeListenerOptions> & {
    /**
     * Creates a "pre-typed" version of `removeListener`
     * where the `state`, `dispatch` and `extra` types are predefined.
     *
     * This allows you to set the `state`, `dispatch` and `extra` types once,
     * eliminating the need to specify them with every `removeListener` call.
     *
     * @returns A pre-typed `removeListener` with the state, dispatch and extra
     * types already defined.
     *
     * @example
     * ```ts
     * import { removeListener } from '@reduxjs/toolkit'
     *
     * export const removeAppListener = removeListener.withTypes<
     *   RootState,
     *   AppDispatch,
     *   ExtraArguments
     * >()
     * ```
     *
     * @template OverrideStateType - The specific type of state the middleware listener operates on.
     * @template OverrideDispatchType - The specific type of the dispatch function.
     * @template OverrideExtraArgument - The specific type of the extra object.
     *
     * @since 2.1.0
     */
    withTypes: <OverrideStateType extends StateType, OverrideDispatchType extends Dispatch = ThunkDispatch<OverrideStateType, unknown, UnknownAction>, OverrideExtraArgument = unknown>() => TypedRemoveListener<OverrideStateType, OverrideDispatchType, OverrideExtraArgument>;
};
/**
 * A "pre-typed" version of `middleware.startListening`, so the listener args are well-typed
 *
 * @public
 */
type TypedStartListening<StateType, DispatchType extends Dispatch = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown> = AddListenerOverloads<UnsubscribeListener, StateType, DispatchType, ExtraArgument> & {
    /**
     * Creates a "pre-typed" version of
     * {@linkcode ListenerMiddlewareInstance.startListening startListening}
     * where the `state`, `dispatch` and `extra` types are predefined.
     *
     * This allows you to set the `state`, `dispatch` and `extra` types once,
     * eliminating the need to specify them with every
     * {@linkcode ListenerMiddlewareInstance.startListening startListening} call.
     *
     * @returns A pre-typed `startListening` with the state, dispatch and extra types already defined.
     *
     * @example
     * ```ts
     * import { createListenerMiddleware } from '@reduxjs/toolkit'
     *
     * const listenerMiddleware = createListenerMiddleware()
     *
     * export const startAppListening = listenerMiddleware.startListening.withTypes<
     *   RootState,
     *   AppDispatch,
     *   ExtraArguments
     * >()
     * ```
     *
     * @template OverrideStateType - The specific type of state the middleware listener operates on.
     * @template OverrideDispatchType - The specific type of the dispatch function.
     * @template OverrideExtraArgument - The specific type of the extra object.
     *
     * @since 2.1.0
     */
    withTypes: <OverrideStateType extends StateType, OverrideDispatchType extends Dispatch = ThunkDispatch<OverrideStateType, unknown, UnknownAction>, OverrideExtraArgument = unknown>() => TypedStartListening<OverrideStateType, OverrideDispatchType, OverrideExtraArgument>;
};
/**
 * A "pre-typed" version of `middleware.stopListening`, so the listener args are well-typed
 *
 * @public
 */
type TypedStopListening<StateType, DispatchType extends Dispatch = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown> = RemoveListenerOverloads<StateType, DispatchType, ExtraArgument> & {
    /**
     * Creates a "pre-typed" version of
     * {@linkcode ListenerMiddlewareInstance.stopListening stopListening}
     * where the `state`, `dispatch` and `extra` types are predefined.
     *
     * This allows you to set the `state`, `dispatch` and `extra` types once,
     * eliminating the need to specify them with every
     * {@linkcode ListenerMiddlewareInstance.stopListening stopListening} call.
     *
     * @returns A pre-typed `stopListening` with the state, dispatch and extra types already defined.
     *
     * @example
     * ```ts
     * import { createListenerMiddleware } from '@reduxjs/toolkit'
     *
     * const listenerMiddleware = createListenerMiddleware()
     *
     * export const stopAppListening = listenerMiddleware.stopListening.withTypes<
     *   RootState,
     *   AppDispatch,
     *   ExtraArguments
     * >()
     * ```
     *
     * @template OverrideStateType - The specific type of state the middleware listener operates on.
     * @template OverrideDispatchType - The specific type of the dispatch function.
     * @template OverrideExtraArgument - The specific type of the extra object.
     *
     * @since 2.1.0
     */
    withTypes: <OverrideStateType extends StateType, OverrideDispatchType extends Dispatch = ThunkDispatch<OverrideStateType, unknown, UnknownAction>, OverrideExtraArgument = unknown>() => TypedStopListening<OverrideStateType, OverrideDispatchType, OverrideExtraArgument>;
};
/**
 * Internal Types
 */
/** @internal An single listener entry */
type ListenerEntry<State = unknown, DispatchType extends Dispatch = Dispatch> = {
    id: string;
    effect: ListenerEffect<any, State, DispatchType>;
    unsubscribe: () => void;
    pending: Set<AbortController>;
    type?: string;
    predicate: ListenerPredicate<UnknownAction, State>;
};
/**
 * Utility Types
 */
/** @public */
type GuardedType<T> = T extends (x: any, ...args: any[]) => x is infer T ? T : never;
/** @public */
type ListenerPredicateGuardedActionType<T> = T extends ListenerPredicate<infer ActionType, any> ? ActionType : never;

/**
 * @public
 */
declare const addListener: TypedAddListener<unknown>;
/**
 * @public
 */
declare const clearAllListeners: ActionCreatorWithoutPayload<"listenerMiddleware/removeAll">;
/**
 * @public
 */
declare const removeListener: TypedRemoveListener<unknown>;
/**
 * @public
 */
declare const createListenerMiddleware: <StateType = unknown, DispatchType extends Dispatch<Action> = ThunkDispatch<StateType, unknown, UnknownAction>, ExtraArgument = unknown>(middlewareOptions?: CreateListenerMiddlewareOptions<ExtraArgument>) => ListenerMiddlewareInstance<StateType, DispatchType, ExtraArgument>;

type MiddlewareApiConfig = {
    state?: unknown;
    dispatch?: Dispatch;
};
type GetDispatchType<MiddlewareApiConfig> = MiddlewareApiConfig extends {
    dispatch: infer DispatchType;
} ? FallbackIfUnknown<DispatchType, Dispatch> : Dispatch;
type AddMiddleware<State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = {
    (...middlewares: Middleware<any, State, DispatchType>[]): void;
    withTypes<MiddlewareConfig extends MiddlewareApiConfig>(): AddMiddleware<GetState<MiddlewareConfig>, GetDispatchType<MiddlewareConfig>>;
};
type WithMiddleware<State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = BaseActionCreator<Middleware<any, State, DispatchType>[], 'dynamicMiddleware/add', {
    instanceId: string;
}> & {
    <Middlewares extends Middleware<any, State, DispatchType>[]>(...middlewares: Middlewares): PayloadAction<Middlewares, 'dynamicMiddleware/add', {
        instanceId: string;
    }>;
    withTypes<MiddlewareConfig extends MiddlewareApiConfig>(): WithMiddleware<GetState<MiddlewareConfig>, GetDispatchType<MiddlewareConfig>>;
};
interface DynamicDispatch {
    <Middlewares extends Middleware<any>[]>(action: PayloadAction<Middlewares, 'dynamicMiddleware/add'>): ExtractDispatchExtensions<Middlewares> & this;
}
type DynamicMiddleware<State = unknown, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = Middleware<DynamicDispatch, State, DispatchType>;
type DynamicMiddlewareInstance<State = unknown, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = {
    middleware: DynamicMiddleware<State, DispatchType>;
    addMiddleware: AddMiddleware<State, DispatchType>;
    withMiddleware: WithMiddleware<State, DispatchType>;
    instanceId: string;
};

declare const createDynamicMiddleware: <State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>>() => DynamicMiddlewareInstance<State, DispatchType>;

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
declare function formatProdErrorMessage(code: number): string;

export { type ActionCreatorInvariantMiddlewareOptions, type ActionCreatorWithNonInferrablePayload, type ActionCreatorWithOptionalPayload, type ActionCreatorWithPayload, type ActionCreatorWithPreparedPayload, type ActionCreatorWithoutPayload, type ActionMatchingAllOf, type ActionMatchingAnyOf, type ActionReducerMapBuilder, type Actions, type AddMiddleware, type AnyListenerPredicate, type AsyncTaskExecutor, type AsyncThunk, type AsyncThunkAction, type AsyncThunkConfig, type AsyncThunkDispatchConfig, type AsyncThunkOptions, type AsyncThunkPayloadCreator, type AsyncThunkPayloadCreatorReturnValue, type AsyncThunkReducers, type AutoBatchOptions, type CaseReducer, type CaseReducerActions, type CaseReducerWithPrepare, type CaseReducers, type CombinedSliceReducer, type Comparer, type ConfigureStoreOptions, type CreateAsyncThunkFunction, type CreateListenerMiddlewareOptions, type CreateSliceOptions, type DevToolsEnhancerOptions, type DynamicDispatch, type DynamicMiddlewareInstance, type EnhancedStore, type EntityAdapter, type EntityId, type EntitySelectors, type EntityState, type EntityStateAdapter, type ForkedTask, type ForkedTaskAPI, type ForkedTaskExecutor, type GetDispatchType as GetDispatch, type GetState, type GetThunkAPI, type IdSelector, type ImmutableStateInvariantMiddlewareOptions, type ListenerEffect, type ListenerEffectAPI, type ListenerErrorHandler, type ListenerMiddleware, type ListenerMiddlewareInstance, type MiddlewareApiConfig, type PayloadAction, type PayloadActionCreator, type PrepareAction, type ReducerCreators, ReducerType, SHOULD_AUTOBATCH, type SafePromise, type SerializableStateInvariantMiddlewareOptions, type SerializedError, type Slice, type SliceCaseReducers, type SliceSelectors, type SyncTaskExecutor, type ExtractDispatchExtensions as TSHelpersExtractDispatchExtensions, TaskAbortError, type TaskCancelled, type TaskRejected, type TaskResolved, type TaskResult, Tuple, type TypedAddListener, type TypedRemoveListener, type TypedStartListening, type TypedStopListening, type UnsubscribeListener, type UnsubscribeListenerOptions, type Update, type ValidateSliceCaseReducers, type WithSlice, type WithSlicePreloadedState, addListener, asyncThunkCreator, autoBatchEnhancer, buildCreateSlice, clearAllListeners, combineSlices, configureStore, createAction, createActionCreatorInvariantMiddleware, createAsyncThunk, createDraftSafeSelector, createDraftSafeSelectorCreator, createDynamicMiddleware, createEntityAdapter, createImmutableStateInvariantMiddleware, createListenerMiddleware, createReducer, createSerializableStateInvariantMiddleware, createSlice, findNonSerializableValue, formatProdErrorMessage, isActionCreator, isAllOf, isAnyOf, isAsyncThunkAction, isFSA as isFluxStandardAction, isFulfilled, isImmutableDefault, isPending, isPlain, isRejected, isRejectedWithValue, miniSerializeError, nanoid, prepareAutoBatched, removeListener, unwrapResult };
