import type {
  PreloadedStateShapeFromReducersMapObject,
  Reducer,
  StateFromReducersMapObject,
  UnknownAction,
} from 'redux'
import { combineReducers } from 'redux'
import { nanoid } from './nanoid'
import type {
  Id,
  NonUndefined,
  Tail,
  UnionToIntersection,
  WithOptionalProp,
} from './tsHelpers'
import { getOrInsertComputed } from './utils'

type SliceLike<ReducerPath extends string, State, PreloadedState = State> = {
  reducerPath: ReducerPath
  reducer: Reducer<State, any, PreloadedState>
}

type AnySliceLike = SliceLike<string, any>

type SliceLikeReducerPath<A extends AnySliceLike> =
  A extends SliceLike<infer ReducerPath, any> ? ReducerPath : never

type SliceLikeState<A extends AnySliceLike> =
  A extends SliceLike<any, infer State, any> ? State : never

type SliceLikePreloadedState<A extends AnySliceLike> =
  A extends SliceLike<any, any, infer PreloadedState> ? PreloadedState : never

export type WithSlice<A extends AnySliceLike> = {
  [Path in SliceLikeReducerPath<A>]: SliceLikeState<A>
}

export type WithSlicePreloadedState<A extends AnySliceLike> = {
  [Path in SliceLikeReducerPath<A>]: SliceLikePreloadedState<A>
}

type ReducerMap = Record<string, Reducer>

type ExistingSliceLike<DeclaredState, PreloadedState> = {
  [ReducerPath in keyof DeclaredState]: SliceLike<
    ReducerPath & string,
    NonUndefined<DeclaredState[ReducerPath]>,
    NonUndefined<PreloadedState[ReducerPath & keyof PreloadedState]>
  >
}[keyof DeclaredState]

export type InjectConfig = {
  /**
   * Allow replacing reducer with a different reference. Normally, an error will be thrown if a different reducer instance to the one already injected is used.
   */
  overrideExisting?: boolean
}

/**
 * A reducer that allows for slices/reducers to be injected after initialisation.
 */
export interface CombinedSliceReducer<
  InitialState,
  DeclaredState extends InitialState = InitialState,
  PreloadedState extends Partial<
    Record<keyof PreloadedState, any>
  > = Partial<DeclaredState>,
> extends Reducer<DeclaredState, UnknownAction, PreloadedState> {
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
  withLazyLoadedSlices<Lazy = {}, LazyPreloaded = Lazy>(): CombinedSliceReducer<
    InitialState,
    Id<DeclaredState & Partial<Lazy>>,
    Id<PreloadedState & Partial<LazyPreloaded>>
  >

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
  inject<Sl extends Id<ExistingSliceLike<DeclaredState, PreloadedState>>>(
    slice: Sl,
    config?: InjectConfig,
  ): CombinedSliceReducer<
    InitialState,
    Id<DeclaredState & WithSlice<Sl>>,
    Id<PreloadedState & Partial<WithSlicePreloadedState<Sl>>>
  >

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
  inject<ReducerPath extends string, State, PreloadedState = State>(
    slice: SliceLike<
      ReducerPath,
      State & (ReducerPath extends keyof DeclaredState ? never : State),
      PreloadedState &
        (ReducerPath extends keyof PreloadedState ? never : PreloadedState)
    >,
    config?: InjectConfig,
  ): CombinedSliceReducer<
    InitialState,
    Id<DeclaredState & WithSlice<SliceLike<ReducerPath, State>>>,
    Id<
      PreloadedState &
        WithSlicePreloadedState<SliceLike<ReducerPath, State, PreloadedState>>
    >
  >

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
    <Selector extends (state: DeclaredState, ...args: any[]) => unknown>(
      selectorFn: Selector,
    ): (
      state: WithOptionalProp<
        Parameters<Selector>[0],
        Exclude<keyof DeclaredState, keyof InitialState>
      >,
      ...args: Tail<Parameters<Selector>>
    ) => ReturnType<Selector>

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
    <
      Selector extends (state: DeclaredState, ...args: any[]) => unknown,
      RootState,
    >(
      selectorFn: Selector,
      selectState: (
        rootState: RootState,
        ...args: Tail<Parameters<Selector>>
      ) => WithOptionalProp<
        Parameters<Selector>[0],
        Exclude<keyof DeclaredState, keyof InitialState>
      >,
    ): (
      state: RootState,
      ...args: Tail<Parameters<Selector>>
    ) => ReturnType<Selector>
    /**
     * Returns the unproxied state. Useful for debugging.
     * @param state state Proxy, that ensures injected reducers have value
     * @returns original, unproxied state
     * @throws if value passed is not a state Proxy
     */
    original: (state: DeclaredState) => InitialState & Partial<DeclaredState>
  }
}

type InitialState<Slices extends Array<AnySliceLike | ReducerMap>> =
  UnionToIntersection<
    Slices[number] extends infer Slice
      ? Slice extends AnySliceLike
        ? WithSlice<Slice>
        : StateFromReducersMapObject<Slice>
      : never
  >

type InitialPreloadedState<Slices extends Array<AnySliceLike | ReducerMap>> =
  UnionToIntersection<
    Slices[number] extends infer Slice
      ? Slice extends AnySliceLike
        ? WithSlicePreloadedState<Slice>
        : PreloadedStateShapeFromReducersMapObject<Slice>
      : never
  >

const isSliceLike = (
  maybeSliceLike: AnySliceLike | ReducerMap,
): maybeSliceLike is AnySliceLike =>
  'reducerPath' in maybeSliceLike &&
  typeof maybeSliceLike.reducerPath === 'string'

const getReducers = (slices: Array<AnySliceLike | ReducerMap>) =>
  slices.flatMap<[string, Reducer]>((sliceOrMap) =>
    isSliceLike(sliceOrMap)
      ? [[sliceOrMap.reducerPath, sliceOrMap.reducer]]
      : Object.entries(sliceOrMap),
  )

const ORIGINAL_STATE = Symbol.for('rtk-state-proxy-original')

const isStateProxy = (value: any) => !!value && !!value[ORIGINAL_STATE]

const stateProxyMap = new WeakMap<object, object>()

const createStateProxy = <State extends object>(
  state: State,
  reducerMap: Partial<Record<PropertyKey, Reducer>>,
  initialStateCache: Record<PropertyKey, unknown>,
) =>
  getOrInsertComputed(
    stateProxyMap,
    state,
    () =>
      new Proxy(state, {
        get: (target, prop, receiver) => {
          if (prop === ORIGINAL_STATE) return target
          const result = Reflect.get(target, prop, receiver)
          if (typeof result === 'undefined') {
            const cached = initialStateCache[prop]
            if (typeof cached !== 'undefined') return cached
            const reducer = reducerMap[prop]
            if (reducer) {
              // ensure action type is random, to prevent reducer treating it differently
              const reducerResult = reducer(undefined, { type: nanoid() })
              if (typeof reducerResult === 'undefined') {
                throw new Error(
                  `The slice reducer for key "${prop.toString()}" returned undefined when called for selector(). ` +
                    `If the state passed to the reducer is undefined, you must ` +
                    `explicitly return the initial state. The initial state may ` +
                    `not be undefined. If you don't want to set a value for this reducer, ` +
                    `you can use null instead of undefined.`,
                )
              }
              initialStateCache[prop] = reducerResult
              return reducerResult
            }
          }
          return result
        },
      }),
  ) as State

const original = (state: any) => {
  if (!isStateProxy(state)) {
    throw new Error('original must be used on state Proxy')
  }
  return state[ORIGINAL_STATE]
}

const emptyObject = {}
const noopReducer: Reducer<Record<string, any>> = (state = emptyObject) => state

export function combineSlices<Slices extends Array<AnySliceLike | ReducerMap>>(
  ...slices: Slices
): CombinedSliceReducer<
  Id<InitialState<Slices>>,
  Id<InitialState<Slices>>,
  Partial<Id<InitialPreloadedState<Slices>>>
> {
  const reducerMap = Object.fromEntries(getReducers(slices))

  const getReducer = () =>
    Object.keys(reducerMap).length ? combineReducers(reducerMap) : noopReducer

  let reducer = getReducer()

  function combinedReducer(
    state: Record<string, unknown>,
    action: UnknownAction,
  ) {
    return reducer(state, action)
  }

  combinedReducer.withLazyLoadedSlices = () => combinedReducer

  const initialStateCache: Record<PropertyKey, unknown> = {}

  const inject = (
    slice: AnySliceLike,
    config: InjectConfig = {},
  ): typeof combinedReducer => {
    const { reducerPath, reducer: reducerToInject } = slice

    const currentReducer = reducerMap[reducerPath]
    if (
      !config.overrideExisting &&
      currentReducer &&
      currentReducer !== reducerToInject
    ) {
      if (
        typeof process !== 'undefined' &&
        process.env.NODE_ENV === 'development'
      ) {
        console.error(
          `called \`inject\` to override already-existing reducer ${reducerPath} without specifying \`overrideExisting: true\``,
        )
      }

      return combinedReducer
    }

    if (config.overrideExisting && currentReducer !== reducerToInject) {
      delete initialStateCache[reducerPath]
    }

    reducerMap[reducerPath] = reducerToInject

    reducer = getReducer()

    return combinedReducer
  }

  const selector = Object.assign(
    function makeSelector<State extends object, RootState, Args extends any[]>(
      selectorFn: (state: State, ...args: Args) => any,
      selectState?: (rootState: RootState, ...args: Args) => State,
    ) {
      return function selector(state: State, ...args: Args) {
        return selectorFn(
          createStateProxy(
            selectState ? selectState(state as any, ...args) : state,
            reducerMap,
            initialStateCache,
          ),
          ...args,
        )
      }
    },
    { original },
  )

  return Object.assign(combinedReducer, { inject, selector }) as any
}
