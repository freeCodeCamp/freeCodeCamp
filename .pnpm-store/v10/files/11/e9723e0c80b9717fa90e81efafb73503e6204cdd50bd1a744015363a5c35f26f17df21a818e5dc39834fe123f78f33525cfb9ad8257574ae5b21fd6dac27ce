import type { Action, Reducer, UnknownAction } from 'redux'
import type { Selector } from 'reselect'
import type { InjectConfig } from './combineSlices'
import type {
  ActionCreatorWithoutPayload,
  PayloadAction,
  PayloadActionCreator,
  PrepareAction,
  _ActionCreatorWithPreparedPayload,
} from './createAction'
import { createAction } from './createAction'
import type {
  AsyncThunk,
  AsyncThunkConfig,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  OverrideThunkApiConfigs,
} from './createAsyncThunk'
import { createAsyncThunk as _createAsyncThunk } from './createAsyncThunk'
import type {
  ActionMatcherDescriptionCollection,
  CaseReducer,
  ReducerWithInitialState,
} from './createReducer'
import { createReducer } from './createReducer'
import type {
  ActionReducerMapBuilder,
  AsyncThunkReducers,
  TypedActionCreator,
} from './mapBuilders'
import { executeReducerBuilderCallback } from './mapBuilders'
import type { Id, TypeGuard } from './tsHelpers'
import { getOrInsertComputed } from './utils'

const asyncThunkSymbol = /* @__PURE__ */ Symbol.for(
  'rtk-slice-createasyncthunk',
)
// type is annotated because it's too long to infer
export const asyncThunkCreator: {
  [asyncThunkSymbol]: typeof _createAsyncThunk
} = {
  [asyncThunkSymbol]: _createAsyncThunk,
}

type InjectIntoConfig<NewReducerPath extends string> = InjectConfig & {
  reducerPath?: NewReducerPath
}

/**
 * The return value of `createSlice`
 *
 * @public
 */
export interface Slice<
  State = any,
  CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string,
  ReducerPath extends string = Name,
  Selectors extends SliceSelectors<State> = SliceSelectors<State>,
> {
  /**
   * The slice name.
   */
  name: Name

  /**
   *  The slice reducer path.
   */
  reducerPath: ReducerPath

  /**
   * The slice's reducer.
   */
  reducer: Reducer<State>

  /**
   * Action creators for the types of actions that are handled by the slice
   * reducer.
   */
  actions: CaseReducerActions<CaseReducers, Name>

  /**
   * The individual case reducer functions that were passed in the `reducers` parameter.
   * This enables reuse and testing if they were defined inline when calling `createSlice`.
   */
  caseReducers: SliceDefinedCaseReducers<CaseReducers>

  /**
   * Provides access to the initial state value given to the slice.
   * If a lazy state initializer was provided, it will be called and a fresh value returned.
   */
  getInitialState: () => State

  /**
   * Get localised slice selectors (expects to be called with *just* the slice's state as the first parameter)
   */
  getSelectors(): Id<SliceDefinedSelectors<State, Selectors, State>>

  /**
   * Get globalised slice selectors (`selectState` callback is expected to receive first parameter and return slice state)
   */
  getSelectors<RootState>(
    selectState: (rootState: RootState) => State,
  ): Id<SliceDefinedSelectors<State, Selectors, RootState>>

  /**
   * Selectors that assume the slice's state is `rootState[slice.reducerPath]` (which is usually the case)
   *
   * Equivalent to `slice.getSelectors((state: RootState) => state[slice.reducerPath])`.
   */
  get selectors(): Id<
    SliceDefinedSelectors<State, Selectors, { [K in ReducerPath]: State }>
  >

  /**
   * Inject slice into provided reducer (return value from `combineSlices`), and return injected slice.
   */
  injectInto<NewReducerPath extends string = ReducerPath>(
    this: this,
    injectable: {
      inject: (
        slice: { reducerPath: string; reducer: Reducer },
        config?: InjectConfig,
      ) => void
    },
    config?: InjectIntoConfig<NewReducerPath>,
  ): InjectedSlice<State, CaseReducers, Name, NewReducerPath, Selectors>

  /**
   * Select the slice state, using the slice's current reducerPath.
   *
   * Will throw an error if slice is not found.
   */
  selectSlice(state: { [K in ReducerPath]: State }): State
}

/**
 * A slice after being called with `injectInto(reducer)`.
 *
 * Selectors can now be called with an `undefined` value, in which case they use the slice's initial state.
 */
type InjectedSlice<
  State = any,
  CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string,
  ReducerPath extends string = Name,
  Selectors extends SliceSelectors<State> = SliceSelectors<State>,
> = Omit<
  Slice<State, CaseReducers, Name, ReducerPath, Selectors>,
  'getSelectors' | 'selectors'
> & {
  /**
   * Get localised slice selectors (expects to be called with *just* the slice's state as the first parameter)
   */
  getSelectors(): Id<SliceDefinedSelectors<State, Selectors, State | undefined>>

  /**
   * Get globalised slice selectors (`selectState` callback is expected to receive first parameter and return slice state)
   */
  getSelectors<RootState>(
    selectState: (rootState: RootState) => State | undefined,
  ): Id<SliceDefinedSelectors<State, Selectors, RootState>>

  /**
   * Selectors that assume the slice's state is `rootState[slice.name]` (which is usually the case)
   *
   * Equivalent to `slice.getSelectors((state: RootState) => state[slice.name])`.
   */
  get selectors(): Id<
    SliceDefinedSelectors<
      State,
      Selectors,
      { [K in ReducerPath]?: State | undefined }
    >
  >

  /**
   * Select the slice state, using the slice's current reducerPath.
   *
   * Returns initial state if slice is not found.
   */
  selectSlice(state: { [K in ReducerPath]?: State | undefined }): State
}

/**
 * Options for `createSlice()`.
 *
 * @public
 */
export interface CreateSliceOptions<
  State = any,
  CR extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string,
  ReducerPath extends string = Name,
  Selectors extends SliceSelectors<State> = SliceSelectors<State>,
> {
  /**
   * The slice's name. Used to namespace the generated action types.
   */
  name: Name

  /**
   * The slice's reducer path. Used when injecting into a combined slice reducer.
   */
  reducerPath?: ReducerPath

  /**
   * The initial state that should be used when the reducer is called the first time. This may also be a "lazy initializer" function, which should return an initial state value when called. This will be used whenever the reducer is called with `undefined` as its state value, and is primarily useful for cases like reading initial state from `localStorage`.
   */
  initialState: State | (() => State)

  /**
   * A mapping from action types to action-type-specific *case reducer*
   * functions. For every action type, a matching action creator will be
   * generated using `createAction()`.
   */
  reducers:
    | ValidateSliceCaseReducers<State, CR>
    | ((creators: ReducerCreators<State>) => CR)

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
  extraReducers?: (builder: ActionReducerMapBuilder<State>) => void

  /**
   * A map of selectors that receive the slice's state and any additional arguments, and return a result.
   */
  selectors?: Selectors
}

export enum ReducerType {
  reducer = 'reducer',
  reducerWithPrepare = 'reducerWithPrepare',
  asyncThunk = 'asyncThunk',
}

type ReducerDefinition<T extends ReducerType = ReducerType> = {
  _reducerDefinitionType: T
}

export type CaseReducerDefinition<
  S = any,
  A extends Action = UnknownAction,
> = CaseReducer<S, A> & ReducerDefinition<ReducerType.reducer>

/**
 * A CaseReducer with a `prepare` method.
 *
 * @public
 */
export type CaseReducerWithPrepare<State, Action extends PayloadAction> = {
  reducer: CaseReducer<State, Action>
  prepare: PrepareAction<Action['payload']>
}

export interface CaseReducerWithPrepareDefinition<
  State,
  Action extends PayloadAction,
> extends CaseReducerWithPrepare<State, Action>,
    ReducerDefinition<ReducerType.reducerWithPrepare> {}

type AsyncThunkSliceReducerConfig<
  State,
  ThunkArg extends any,
  Returned = unknown,
  ThunkApiConfig extends AsyncThunkConfig = {},
> = AsyncThunkReducers<State, ThunkArg, Returned, ThunkApiConfig> & {
  options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
}

type AsyncThunkSliceReducerDefinition<
  State,
  ThunkArg extends any,
  Returned = unknown,
  ThunkApiConfig extends AsyncThunkConfig = {},
> = AsyncThunkSliceReducerConfig<State, ThunkArg, Returned, ThunkApiConfig> &
  ReducerDefinition<ReducerType.asyncThunk> & {
    payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>
  }

/**
 * Providing these as part of the config would cause circular types, so we disallow passing them
 */
type PreventCircular<ThunkApiConfig> = {
  [K in keyof ThunkApiConfig]: K extends 'state' | 'dispatch'
    ? never
    : ThunkApiConfig[K]
}

interface AsyncThunkCreator<
  State,
  CurriedThunkApiConfig extends
    PreventCircular<AsyncThunkConfig> = PreventCircular<AsyncThunkConfig>,
> {
  <Returned, ThunkArg = void>(
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      CurriedThunkApiConfig
    >,
    config?: AsyncThunkSliceReducerConfig<
      State,
      ThunkArg,
      Returned,
      CurriedThunkApiConfig
    >,
  ): AsyncThunkSliceReducerDefinition<
    State,
    ThunkArg,
    Returned,
    CurriedThunkApiConfig
  >
  <
    Returned,
    ThunkArg,
    ThunkApiConfig extends PreventCircular<AsyncThunkConfig> = {},
  >(
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      ThunkApiConfig
    >,
    config?: AsyncThunkSliceReducerConfig<
      State,
      ThunkArg,
      Returned,
      ThunkApiConfig
    >,
  ): AsyncThunkSliceReducerDefinition<State, ThunkArg, Returned, ThunkApiConfig>
  withTypes<
    ThunkApiConfig extends PreventCircular<AsyncThunkConfig>,
  >(): AsyncThunkCreator<
    State,
    OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>
  >
}

export interface ReducerCreators<State> {
  reducer(
    caseReducer: CaseReducer<State, PayloadAction>,
  ): CaseReducerDefinition<State, PayloadAction>
  reducer<Payload>(
    caseReducer: CaseReducer<State, PayloadAction<Payload>>,
  ): CaseReducerDefinition<State, PayloadAction<Payload>>

  asyncThunk: AsyncThunkCreator<State>

  preparedReducer<Prepare extends PrepareAction<any>>(
    prepare: Prepare,
    reducer: CaseReducer<
      State,
      ReturnType<_ActionCreatorWithPreparedPayload<Prepare>>
    >,
  ): {
    _reducerDefinitionType: ReducerType.reducerWithPrepare
    prepare: Prepare
    reducer: CaseReducer<
      State,
      ReturnType<_ActionCreatorWithPreparedPayload<Prepare>>
    >
  }
}

/**
 * The type describing a slice's `reducers` option.
 *
 * @public
 */
export type SliceCaseReducers<State> =
  | Record<string, ReducerDefinition>
  | Record<
      string,
      | CaseReducer<State, PayloadAction<any>>
      | CaseReducerWithPrepare<State, PayloadAction<any, string, any, any>>
    >

/**
 * The type describing a slice's `selectors` option.
 */
export type SliceSelectors<State> = {
  [K: string]: (sliceState: State, ...args: any[]) => any
}

type SliceActionType<
  SliceName extends string,
  ActionName extends keyof any,
> = ActionName extends string | number ? `${SliceName}/${ActionName}` : string

/**
 * Derives the slice's `actions` property from the `reducers` options
 *
 * @public
 */
export type CaseReducerActions<
  CaseReducers extends SliceCaseReducers<any>,
  SliceName extends string,
> = {
  [Type in keyof CaseReducers]: CaseReducers[Type] extends infer Definition
    ? Definition extends { prepare: any }
      ? ActionCreatorForCaseReducerWithPrepare<
          Definition,
          SliceActionType<SliceName, Type>
        >
      : Definition extends AsyncThunkSliceReducerDefinition<
            any,
            infer ThunkArg,
            infer Returned,
            infer ThunkApiConfig
          >
        ? AsyncThunk<Returned, ThunkArg, ThunkApiConfig>
        : Definition extends { reducer: any }
          ? ActionCreatorForCaseReducer<
              Definition['reducer'],
              SliceActionType<SliceName, Type>
            >
          : ActionCreatorForCaseReducer<
              Definition,
              SliceActionType<SliceName, Type>
            >
    : never
}

/**
 * Get a `PayloadActionCreator` type for a passed `CaseReducerWithPrepare`
 *
 * @internal
 */
type ActionCreatorForCaseReducerWithPrepare<
  CR extends { prepare: any },
  Type extends string,
> = _ActionCreatorWithPreparedPayload<CR['prepare'], Type>

/**
 * Get a `PayloadActionCreator` type for a passed `CaseReducer`
 *
 * @internal
 */
type ActionCreatorForCaseReducer<CR, Type extends string> = CR extends (
  state: any,
  action: infer Action,
) => any
  ? Action extends { payload: infer P }
    ? PayloadActionCreator<P, Type>
    : ActionCreatorWithoutPayload<Type>
  : ActionCreatorWithoutPayload<Type>

/**
 * Extracts the CaseReducers out of a `reducers` object, even if they are
 * tested into a `CaseReducerWithPrepare`.
 *
 * @internal
 */
type SliceDefinedCaseReducers<CaseReducers extends SliceCaseReducers<any>> = {
  [Type in keyof CaseReducers]: CaseReducers[Type] extends infer Definition
    ? Definition extends AsyncThunkSliceReducerDefinition<any, any, any>
      ? Id<
          Pick<
            Required<Definition>,
            'fulfilled' | 'rejected' | 'pending' | 'settled'
          >
        >
      : Definition extends {
            reducer: infer Reducer
          }
        ? Reducer
        : Definition
    : never
}

type RemappedSelector<S extends Selector, NewState> =
  S extends Selector<any, infer R, infer P>
    ? Selector<NewState, R, P> & { unwrapped: S }
    : never

/**
 * Extracts the final selector type from the `selectors` object.
 *
 * Removes the `string` index signature from the default value.
 */
type SliceDefinedSelectors<
  State,
  Selectors extends SliceSelectors<State>,
  RootState,
> = {
  [K in keyof Selectors as string extends K ? never : K]: RemappedSelector<
    Selectors[K],
    RootState
  >
}

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
export type ValidateSliceCaseReducers<
  S,
  ACR extends SliceCaseReducers<S>,
> = ACR & {
  [T in keyof ACR]: ACR[T] extends {
    reducer(s: S, action?: infer A): any
  }
    ? {
        prepare(...a: never[]): Omit<A, 'type'>
      }
    : {}
}

function getType(slice: string, actionKey: string): string {
  return `${slice}/${actionKey}`
}

interface BuildCreateSliceConfig {
  creators?: {
    asyncThunk?: typeof asyncThunkCreator
  }
}

export function buildCreateSlice({ creators }: BuildCreateSliceConfig = {}) {
  const cAT = creators?.asyncThunk?.[asyncThunkSymbol]
  return function createSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string,
    Selectors extends SliceSelectors<State>,
    ReducerPath extends string = Name,
  >(
    options: CreateSliceOptions<
      State,
      CaseReducers,
      Name,
      ReducerPath,
      Selectors
    >,
  ): Slice<State, CaseReducers, Name, ReducerPath, Selectors> {
    const { name, reducerPath = name as unknown as ReducerPath } = options
    if (!name) {
      throw new Error('`name` is a required option for createSlice')
    }

    if (
      typeof process !== 'undefined' &&
      process.env.NODE_ENV === 'development'
    ) {
      if (options.initialState === undefined) {
        console.error(
          'You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`',
        )
      }
    }

    const reducers =
      (typeof options.reducers === 'function'
        ? options.reducers(buildReducerCreators<State>())
        : options.reducers) || {}

    const reducerNames = Object.keys(reducers)

    const context: ReducerHandlingContext<State> = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: [],
    }

    const contextMethods: ReducerHandlingContextMethods<State> = {
      addCase(
        typeOrActionCreator: string | TypedActionCreator<any>,
        reducer: CaseReducer<State>,
      ) {
        const type =
          typeof typeOrActionCreator === 'string'
            ? typeOrActionCreator
            : typeOrActionCreator.type
        if (!type) {
          throw new Error(
            '`context.addCase` cannot be called with an empty action type',
          )
        }
        if (type in context.sliceCaseReducersByType) {
          throw new Error(
            '`context.addCase` cannot be called with two reducers for the same action type: ' +
              type,
          )
        }
        context.sliceCaseReducersByType[type] = reducer
        return contextMethods
      },
      addMatcher(matcher, reducer) {
        context.sliceMatchers.push({ matcher, reducer })
        return contextMethods
      },
      exposeAction(name, actionCreator) {
        context.actionCreators[name] = actionCreator
        return contextMethods
      },
      exposeCaseReducer(name, reducer) {
        context.sliceCaseReducersByName[name] = reducer
        return contextMethods
      },
    }

    reducerNames.forEach((reducerName) => {
      const reducerDefinition = reducers[reducerName]
      const reducerDetails: ReducerDetails = {
        reducerName,
        type: getType(name, reducerName),
        createNotation: typeof options.reducers === 'function',
      }
      if (isAsyncThunkSliceReducerDefinition<State>(reducerDefinition)) {
        handleThunkCaseReducerDefinition(
          reducerDetails,
          reducerDefinition,
          contextMethods,
          cAT,
        )
      } else {
        handleNormalReducerDefinition<State>(
          reducerDetails,
          reducerDefinition as any,
          contextMethods,
        )
      }
    })

    function buildReducer() {
      if (process.env.NODE_ENV !== 'production') {
        if (typeof options.extraReducers === 'object') {
          throw new Error(
            "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice",
          )
        }
      }
      const [
        extraReducers = {},
        actionMatchers = [],
        defaultCaseReducer = undefined,
      ] =
        typeof options.extraReducers === 'function'
          ? executeReducerBuilderCallback(options.extraReducers)
          : [options.extraReducers]

      const finalCaseReducers = {
        ...extraReducers,
        ...context.sliceCaseReducersByType,
      }

      return createReducer(options.initialState, (builder) => {
        for (let key in finalCaseReducers) {
          builder.addCase(key, finalCaseReducers[key] as CaseReducer<any>)
        }
        for (let sM of context.sliceMatchers) {
          builder.addMatcher(sM.matcher, sM.reducer)
        }
        for (let m of actionMatchers) {
          builder.addMatcher(m.matcher, m.reducer)
        }
        if (defaultCaseReducer) {
          builder.addDefaultCase(defaultCaseReducer)
        }
      })
    }

    const selectSelf = (state: State) => state

    const injectedSelectorCache = new Map<
      boolean,
      WeakMap<
        (rootState: any) => State | undefined,
        Record<string, (rootState: any) => any>
      >
    >()

    const injectedStateCache = new WeakMap<(rootState: any) => State, State>()

    let _reducer: ReducerWithInitialState<State>

    function reducer(state: State | undefined, action: UnknownAction) {
      if (!_reducer) _reducer = buildReducer()

      return _reducer(state, action)
    }

    function getInitialState() {
      if (!_reducer) _reducer = buildReducer()

      return _reducer.getInitialState()
    }

    function makeSelectorProps<CurrentReducerPath extends string = ReducerPath>(
      reducerPath: CurrentReducerPath,
      injected = false,
    ): Pick<
      Slice<State, CaseReducers, Name, CurrentReducerPath, Selectors>,
      'getSelectors' | 'selectors' | 'selectSlice' | 'reducerPath'
    > {
      function selectSlice(state: { [K in CurrentReducerPath]: State }) {
        let sliceState = state[reducerPath]
        if (typeof sliceState === 'undefined') {
          if (injected) {
            sliceState = getOrInsertComputed(
              injectedStateCache,
              selectSlice,
              getInitialState,
            )
          } else if (process.env.NODE_ENV !== 'production') {
            throw new Error(
              'selectSlice returned undefined for an uninjected slice reducer',
            )
          }
        }
        return sliceState
      }

      function getSelectors(
        selectState: (rootState: any) => State = selectSelf,
      ) {
        const selectorCache = getOrInsertComputed(
          injectedSelectorCache,
          injected,
          () => new WeakMap(),
        )

        return getOrInsertComputed(selectorCache, selectState, () => {
          const map: Record<string, Selector<any, any>> = {}
          for (const [name, selector] of Object.entries(
            options.selectors ?? {},
          )) {
            map[name] = wrapSelector(
              selector,
              selectState,
              () =>
                getOrInsertComputed(
                  injectedStateCache,
                  selectState,
                  getInitialState,
                ),
              injected,
            )
          }
          return map
        }) as any
      }
      return {
        reducerPath,
        getSelectors,
        get selectors() {
          return getSelectors(selectSlice)
        },
        selectSlice,
      }
    }

    const slice: Slice<State, CaseReducers, Name, ReducerPath, Selectors> = {
      name,
      reducer,
      actions: context.actionCreators as any,
      caseReducers: context.sliceCaseReducersByName as any,
      getInitialState,
      ...makeSelectorProps(reducerPath),
      injectInto(injectable, { reducerPath: pathOpt, ...config } = {}) {
        const newReducerPath = pathOpt ?? reducerPath
        injectable.inject({ reducerPath: newReducerPath, reducer }, config)
        return {
          ...slice,
          ...makeSelectorProps(newReducerPath, true),
        } as any
      },
    }
    return slice
  }
}

function wrapSelector<State, NewState, S extends Selector<State>>(
  selector: S,
  selectState: Selector<NewState, State>,
  getInitialState: () => State,
  injected?: boolean,
) {
  function wrapper(rootState: NewState, ...args: any[]) {
    let sliceState = selectState(rootState)
    if (typeof sliceState === 'undefined') {
      if (injected) {
        sliceState = getInitialState()
      } else if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          'selectState returned undefined for an uninjected slice reducer',
        )
      }
    }
    return selector(sliceState, ...args)
  }
  wrapper.unwrapped = selector
  return wrapper as RemappedSelector<S, NewState>
}

/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * @public
 */
export const createSlice = /* @__PURE__ */ buildCreateSlice()

interface ReducerHandlingContext<State> {
  sliceCaseReducersByName: Record<
    string,
    | CaseReducer<State, any>
    | Pick<
        AsyncThunkSliceReducerDefinition<State, any, any, any>,
        'fulfilled' | 'rejected' | 'pending' | 'settled'
      >
  >
  sliceCaseReducersByType: Record<string, CaseReducer<State, any>>
  sliceMatchers: ActionMatcherDescriptionCollection<State>
  actionCreators: Record<string, Function>
}

interface ReducerHandlingContextMethods<State> {
  /**
   * Adds a case reducer to handle a single action type.
   * @param actionCreator - Either a plain action type string, or an action creator generated by [`createAction`](./createAction) that can be used to determine the action type.
   * @param reducer - The actual case reducer function.
   */
  addCase<ActionCreator extends TypedActionCreator<string>>(
    actionCreator: ActionCreator,
    reducer: CaseReducer<State, ReturnType<ActionCreator>>,
  ): ReducerHandlingContextMethods<State>
  /**
   * Adds a case reducer to handle a single action type.
   * @param actionCreator - Either a plain action type string, or an action creator generated by [`createAction`](./createAction) that can be used to determine the action type.
   * @param reducer - The actual case reducer function.
   */
  addCase<Type extends string, A extends Action<Type>>(
    type: Type,
    reducer: CaseReducer<State, A>,
  ): ReducerHandlingContextMethods<State>

  /**
   * Allows you to match incoming actions against your own filter function instead of only the `action.type` property.
   * @remarks
   * If multiple matcher reducers match, all of them will be executed in the order
   * they were defined in - even if a case reducer already matched.
   * All calls to `builder.addMatcher` must come after any calls to `builder.addCase` and before any calls to `builder.addDefaultCase`.
   * @param matcher - A matcher function. In TypeScript, this should be a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
   *   function
   * @param reducer - The actual case reducer function.
   *
   */
  addMatcher<A>(
    matcher: TypeGuard<A>,
    reducer: CaseReducer<State, A extends Action ? A : A & Action>,
  ): ReducerHandlingContextMethods<State>
  /**
   * Add an action to be exposed under the final `slice.actions` key.
   * @param name The key to be exposed as.
   * @param actionCreator The action to expose.
   * @example
   * context.exposeAction("addPost", createAction<Post>("addPost"));
   *
   * export const { addPost } = slice.actions
   *
   * dispatch(addPost(post))
   */
  exposeAction(
    name: string,
    actionCreator: Function,
  ): ReducerHandlingContextMethods<State>
  /**
   * Add a case reducer to be exposed under the final `slice.caseReducers` key.
   * @param name The key to be exposed as.
   * @param reducer The reducer to expose.
   * @example
   * context.exposeCaseReducer("addPost", (state, action: PayloadAction<Post>) => {
   *   state.push(action.payload)
   * })
   *
   * slice.caseReducers.addPost([], addPost(post))
   */
  exposeCaseReducer(
    name: string,
    reducer:
      | CaseReducer<State, any>
      | Pick<
          AsyncThunkSliceReducerDefinition<State, any, any, any>,
          'fulfilled' | 'rejected' | 'pending' | 'settled'
        >,
  ): ReducerHandlingContextMethods<State>
}

interface ReducerDetails {
  /** The key the reducer was defined under */
  reducerName: string
  /** The predefined action type, i.e. `${slice.name}/${reducerName}` */
  type: string
  /** Whether create. notation was used when defining reducers */
  createNotation: boolean
}

function buildReducerCreators<State>(): ReducerCreators<State> {
  function asyncThunk(
    payloadCreator: AsyncThunkPayloadCreator<any, any>,
    config: AsyncThunkSliceReducerConfig<State, any>,
  ): AsyncThunkSliceReducerDefinition<State, any> {
    return {
      _reducerDefinitionType: ReducerType.asyncThunk,
      payloadCreator,
      ...config,
    }
  }
  asyncThunk.withTypes = () => asyncThunk
  return {
    reducer(caseReducer: CaseReducer<State, any>) {
      return Object.assign(
        {
          // hack so the wrapping function has the same name as the original
          // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
          [caseReducer.name](...args: Parameters<typeof caseReducer>) {
            return caseReducer(...args)
          },
        }[caseReducer.name],
        {
          _reducerDefinitionType: ReducerType.reducer,
        } as const,
      )
    },
    preparedReducer(prepare, reducer) {
      return {
        _reducerDefinitionType: ReducerType.reducerWithPrepare,
        prepare,
        reducer,
      }
    },
    asyncThunk: asyncThunk as any,
  }
}

function handleNormalReducerDefinition<State>(
  { type, reducerName, createNotation }: ReducerDetails,
  maybeReducerWithPrepare:
    | CaseReducer<State, { payload: any; type: string }>
    | CaseReducerWithPrepare<State, PayloadAction<any, string, any, any>>,
  context: ReducerHandlingContextMethods<State>,
) {
  let caseReducer: CaseReducer<State, any>
  let prepareCallback: PrepareAction<any> | undefined
  if ('reducer' in maybeReducerWithPrepare) {
    if (
      createNotation &&
      !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)
    ) {
      throw new Error(
        'Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.',
      )
    }
    caseReducer = maybeReducerWithPrepare.reducer
    prepareCallback = maybeReducerWithPrepare.prepare
  } else {
    caseReducer = maybeReducerWithPrepare
  }
  context
    .addCase(type, caseReducer)
    .exposeCaseReducer(reducerName, caseReducer)
    .exposeAction(
      reducerName,
      prepareCallback
        ? createAction(type, prepareCallback)
        : createAction(type),
    )
}

function isAsyncThunkSliceReducerDefinition<State>(
  reducerDefinition: any,
): reducerDefinition is AsyncThunkSliceReducerDefinition<State, any, any, any> {
  return reducerDefinition._reducerDefinitionType === ReducerType.asyncThunk
}

function isCaseReducerWithPrepareDefinition<State>(
  reducerDefinition: any,
): reducerDefinition is CaseReducerWithPrepareDefinition<State, any> {
  return (
    reducerDefinition._reducerDefinitionType === ReducerType.reducerWithPrepare
  )
}

function handleThunkCaseReducerDefinition<State>(
  { type, reducerName }: ReducerDetails,
  reducerDefinition: AsyncThunkSliceReducerDefinition<State, any, any, any>,
  context: ReducerHandlingContextMethods<State>,
  cAT: typeof _createAsyncThunk | undefined,
) {
  if (!cAT) {
    throw new Error(
      'Cannot use `create.asyncThunk` in the built-in `createSlice`. ' +
        'Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.',
    )
  }
  const { payloadCreator, fulfilled, pending, rejected, settled, options } =
    reducerDefinition
  const thunk = cAT(type, payloadCreator, options as any)
  context.exposeAction(reducerName, thunk)

  if (fulfilled) {
    context.addCase(thunk.fulfilled, fulfilled)
  }
  if (pending) {
    context.addCase(thunk.pending, pending)
  }
  if (rejected) {
    context.addCase(thunk.rejected, rejected)
  }
  if (settled) {
    context.addMatcher(thunk.settled, settled)
  }

  context.exposeCaseReducer(reducerName, {
    fulfilled: fulfilled || noop,
    pending: pending || noop,
    rejected: rejected || noop,
    settled: settled || noop,
  })
}

function noop() {}
