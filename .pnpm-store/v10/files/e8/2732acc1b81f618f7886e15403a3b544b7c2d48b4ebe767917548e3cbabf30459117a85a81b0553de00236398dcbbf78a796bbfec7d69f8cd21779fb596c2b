import type {
  Action,
  ConfigureStoreOptions,
  Dispatch,
  Middleware,
  PayloadAction,
  Reducer,
  Store,
  StoreEnhancer,
  ThunkAction,
  ThunkDispatch,
  ThunkMiddleware,
  UnknownAction,
} from '@reduxjs/toolkit'
import {
  Tuple,
  applyMiddleware,
  combineReducers,
  configureStore,
  createSlice,
} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

const _anyMiddleware: any = () => () => () => {}

describe('type tests', () => {
  test('configureStore() requires a valid reducer or reducer map.', () => {
    configureStore({
      reducer: (state, action) => 0,
    })

    configureStore({
      reducer: {
        counter1: () => 0,
        counter2: () => 1,
      },
    })

    // @ts-expect-error
    configureStore({ reducer: 'not a reducer' })

    // @ts-expect-error
    configureStore({ reducer: { a: 'not a reducer' } })

    // @ts-expect-error
    configureStore({})
  })

  test('configureStore() infers the store state type.', () => {
    const reducer: Reducer<number> = () => 0

    const store = configureStore({ reducer })

    expectTypeOf(store).toMatchTypeOf<Store<number, UnknownAction>>()

    expectTypeOf(store).not.toMatchTypeOf<Store<string, UnknownAction>>()
  })

  test('configureStore() infers the store action type.', () => {
    const reducer: Reducer<number, PayloadAction<number>> = () => 0

    const store = configureStore({ reducer })

    expectTypeOf(store).toMatchTypeOf<Store<number, PayloadAction<number>>>()

    expectTypeOf(store).not.toMatchTypeOf<
      Store<number, PayloadAction<string>>
    >()
  })

  test('configureStore() accepts Tuple for middleware, but not plain array.', () => {
    const middleware: Middleware = (store) => (next) => next

    configureStore({
      reducer: () => 0,
      middleware: () => new Tuple(middleware),
    })

    configureStore({
      reducer: () => 0,
      // @ts-expect-error
      middleware: () => [middleware],
    })

    configureStore({
      reducer: () => 0,
      // @ts-expect-error
      middleware: () => new Tuple('not middleware'),
    })
  })

  test('configureStore() accepts devTools flag.', () => {
    configureStore({
      reducer: () => 0,
      devTools: true,
    })

    configureStore({
      reducer: () => 0,
      // @ts-expect-error
      devTools: 'true',
    })
  })

  test('configureStore() accepts devTools EnhancerOptions.', () => {
    configureStore({
      reducer: () => 0,
      devTools: { name: 'myApp' },
    })

    configureStore({
      reducer: () => 0,
      // @ts-expect-error
      devTools: { appName: 'myApp' },
    })
  })

  test('configureStore() accepts preloadedState.', () => {
    configureStore({
      reducer: () => 0,
      preloadedState: 0,
    })

    configureStore({
      // @ts-expect-error
      reducer: (_: number) => 0,
      preloadedState: 'non-matching state type',
    })
  })

  test('nullable state is preserved', () => {
    const store = configureStore({
      reducer: (): string | null => null,
    })

    expectTypeOf(store.getState()).toEqualTypeOf<string | null>()
  })

  test('configureStore() accepts store Tuple for enhancers, but not plain array', () => {
    const enhancer = applyMiddleware(() => (next) => next)

    const store = configureStore({
      reducer: () => 0,
      enhancers: () => new Tuple(enhancer),
    })

    const store2 = configureStore({
      reducer: () => 0,
      // @ts-expect-error
      enhancers: () => [enhancer],
    })

    expectTypeOf(store.dispatch).toMatchTypeOf<
      Dispatch & ThunkDispatch<number, undefined, UnknownAction>
    >()

    configureStore({
      reducer: () => 0,
      // @ts-expect-error
      enhancers: () => new Tuple('not a store enhancer'),
    })

    const somePropertyStoreEnhancer: StoreEnhancer<{
      someProperty: string
    }> = (next) => {
      return (reducer, preloadedState) => {
        return {
          ...next(reducer, preloadedState),
          someProperty: 'some value',
        }
      }
    }

    const anotherPropertyStoreEnhancer: StoreEnhancer<{
      anotherProperty: number
    }> = (next) => {
      return (reducer, preloadedState) => {
        return {
          ...next(reducer, preloadedState),
          anotherProperty: 123,
        }
      }
    }

    const store3 = configureStore({
      reducer: () => 0,
      enhancers: () =>
        new Tuple(somePropertyStoreEnhancer, anotherPropertyStoreEnhancer),
    })

    expectTypeOf(store3.dispatch).toEqualTypeOf<Dispatch>()

    expectTypeOf(store3.someProperty).toBeString()

    expectTypeOf(store3.anotherProperty).toBeNumber()

    const storeWithCallback = configureStore({
      reducer: () => 0,
      enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers()
          .prepend(anotherPropertyStoreEnhancer)
          .concat(somePropertyStoreEnhancer),
    })

    expectTypeOf(store3.dispatch).toMatchTypeOf<
      Dispatch & ThunkDispatch<number, undefined, UnknownAction>
    >()

    expectTypeOf(store3.someProperty).toBeString()

    expectTypeOf(store3.anotherProperty).toBeNumber()

    const someStateExtendingEnhancer: StoreEnhancer<
      {},
      { someProperty: string }
    > =
      (next) =>
      (...args) => {
        const store = next(...args)
        const getState = () => ({
          ...store.getState(),
          someProperty: 'some value',
        })
        return {
          ...store,
          getState,
        } as any
      }

    const anotherStateExtendingEnhancer: StoreEnhancer<
      {},
      { anotherProperty: number }
    > =
      (next) =>
      (...args) => {
        const store = next(...args)
        const getState = () => ({
          ...store.getState(),
          anotherProperty: 123,
        })
        return {
          ...store,
          getState,
        } as any
      }

    const store4 = configureStore({
      reducer: () => ({ aProperty: 0 }),
      enhancers: () =>
        new Tuple(someStateExtendingEnhancer, anotherStateExtendingEnhancer),
    })

    const state = store4.getState()

    expectTypeOf(state.aProperty).toBeNumber()

    expectTypeOf(state.someProperty).toBeString()

    expectTypeOf(state.anotherProperty).toBeNumber()

    const storeWithCallback2 = configureStore({
      reducer: () => ({ aProperty: 0 }),
      enhancers: (gDE) =>
        gDE().concat(someStateExtendingEnhancer, anotherStateExtendingEnhancer),
    })

    const stateWithCallback = storeWithCallback2.getState()

    expectTypeOf(stateWithCallback.aProperty).toBeNumber()

    expectTypeOf(stateWithCallback.someProperty).toBeString()

    expectTypeOf(stateWithCallback.anotherProperty).toBeNumber()
  })

  test('Preloaded state typings', () => {
    const counterReducer1: Reducer<number> = () => 0
    const counterReducer2: Reducer<number> = () => 0

    test('partial preloaded state', () => {
      const store = configureStore({
        reducer: {
          counter1: counterReducer1,
          counter2: counterReducer2,
        },
        preloadedState: {
          counter1: 0,
        },
      })

      expectTypeOf(store.getState().counter1).toBeNumber()

      expectTypeOf(store.getState().counter2).toBeNumber()
    })

    test('empty preloaded state', () => {
      const store = configureStore({
        reducer: {
          counter1: counterReducer1,
          counter2: counterReducer2,
        },
        preloadedState: {},
      })

      expectTypeOf(store.getState().counter1).toBeNumber()

      expectTypeOf(store.getState().counter2).toBeNumber()
    })

    test('excess properties in preloaded state', () => {
      const store = configureStore({
        reducer: {
          // @ts-expect-error
          counter1: counterReducer1,
          counter2: counterReducer2,
        },
        preloadedState: {
          counter1: 0,
          counter3: 5,
        },
      })

      expectTypeOf(store.getState().counter1).toBeNumber()

      expectTypeOf(store.getState().counter2).toBeNumber()
    })

    test('mismatching properties in preloaded state', () => {
      const store = configureStore({
        reducer: {
          // @ts-expect-error
          counter1: counterReducer1,
          counter2: counterReducer2,
        },
        preloadedState: {
          counter3: 5,
        },
      })

      expectTypeOf(store.getState().counter1).toBeNumber()

      expectTypeOf(store.getState().counter2).toBeNumber()
    })

    test('string preloaded state when expecting object', () => {
      const store = configureStore({
        reducer: {
          // @ts-expect-error
          counter1: counterReducer1,
          counter2: counterReducer2,
        },
        preloadedState: 'test',
      })

      expectTypeOf(store.getState().counter1).toBeNumber()

      expectTypeOf(store.getState().counter2).toBeNumber()
    })

    test('nested combineReducers allows partial', () => {
      const store = configureStore({
        reducer: {
          group1: combineReducers({
            counter1: counterReducer1,
            counter2: counterReducer2,
          }),
          group2: combineReducers({
            counter1: counterReducer1,
            counter2: counterReducer2,
          }),
        },
        preloadedState: {
          group1: {
            counter1: 5,
          },
        },
      })

      expectTypeOf(store.getState().group1.counter1).toBeNumber()

      expectTypeOf(store.getState().group1.counter2).toBeNumber()

      expectTypeOf(store.getState().group2.counter1).toBeNumber()

      expectTypeOf(store.getState().group2.counter2).toBeNumber()
    })

    test('non-nested combineReducers does not allow partial', () => {
      interface GroupState {
        counter1: number
        counter2: number
      }

      const initialState = { counter1: 0, counter2: 0 }

      const group1Reducer: Reducer<GroupState> = (state = initialState) => state
      const group2Reducer: Reducer<GroupState> = (state = initialState) => state

      const store = configureStore({
        reducer: {
          // @ts-expect-error
          group1: group1Reducer,
          group2: group2Reducer,
        },
        preloadedState: {
          group1: {
            counter1: 5,
          },
        },
      })

      expectTypeOf(store.getState().group1.counter1).toBeNumber()

      expectTypeOf(store.getState().group1.counter2).toBeNumber()

      expectTypeOf(store.getState().group2.counter1).toBeNumber()

      expectTypeOf(store.getState().group2.counter2).toBeNumber()
    })
  })

  test('Dispatch typings', () => {
    type StateA = number
    const reducerA = () => 0
    const thunkA = () => {
      return (() => {}) as any as ThunkAction<Promise<'A'>, StateA, any, any>
    }

    type StateB = string
    const thunkB = () => {
      return (dispatch: Dispatch, getState: () => StateB) => {}
    }

    test('by default, dispatching Thunks is possible', () => {
      const store = configureStore({
        reducer: reducerA,
      })

      store.dispatch(thunkA())
      // @ts-expect-error
      store.dispatch(thunkB())

      const res = store.dispatch((dispatch, getState) => {
        return 42
      })

      const action = store.dispatch({ type: 'foo' })
    })

    test('return type of thunks and actions is inferred correctly', () => {
      const slice = createSlice({
        name: 'counter',
        initialState: {
          value: 0,
        },
        reducers: {
          incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
          },
        },
      })

      const store = configureStore({
        reducer: {
          counter: slice.reducer,
        },
      })

      const action = slice.actions.incrementByAmount(2)

      const dispatchResult = store.dispatch(action)

      expectTypeOf(dispatchResult).toMatchTypeOf<{
        type: string
        payload: number
      }>()

      const promiseResult = store.dispatch(async (dispatch) => {
        return 42
      })

      expectTypeOf(promiseResult).toEqualTypeOf<Promise<number>>()

      const store2 = configureStore({
        reducer: {
          counter: slice.reducer,
        },
        middleware: (gDM) =>
          gDM({
            thunk: {
              extraArgument: 42,
            },
          }),
      })

      const dispatchResult2 = store2.dispatch(action)

      expectTypeOf(dispatchResult2).toMatchTypeOf<{
        type: string
        payload: number
      }>()
    })

    test('removing the Thunk Middleware', () => {
      const store = configureStore({
        reducer: reducerA,
        middleware: () => new Tuple(),
      })

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkA())

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkB())
    })

    test('adding the thunk middleware by hand', () => {
      const store = configureStore({
        reducer: reducerA,
        middleware: () => new Tuple(thunk as ThunkMiddleware<StateA>),
      })

      store.dispatch(thunkA())
      // @ts-expect-error
      store.dispatch(thunkB())
    })

    test('custom middleware', () => {
      const store = configureStore({
        reducer: reducerA,
        middleware: () =>
          new Tuple(0 as unknown as Middleware<(a: StateA) => boolean, StateA>),
      })

      expectTypeOf(store.dispatch(5)).toBeBoolean()

      expectTypeOf(store.dispatch(5)).not.toBeString()
    })

    test('multiple custom middleware', () => {
      const middleware = [] as any as Tuple<
        [
          Middleware<(a: 'a') => 'A', StateA>,
          Middleware<(b: 'b') => 'B', StateA>,
          ThunkMiddleware<StateA>,
        ]
      >

      const store = configureStore({
        reducer: reducerA,
        middleware: () => middleware,
      })

      expectTypeOf(store.dispatch('a')).toEqualTypeOf<'A'>()

      expectTypeOf(store.dispatch('b')).toEqualTypeOf<'B'>()

      expectTypeOf(store.dispatch(thunkA())).toEqualTypeOf<Promise<'A'>>()
    })

    test('Accepts thunk with `unknown`, `undefined` or `null` ThunkAction extraArgument per default', () => {
      const store = configureStore({ reducer: {} })
      // undefined is the default value for the ThunkMiddleware extraArgument
      store.dispatch(function () {} as ThunkAction<
        void,
        {},
        undefined,
        UnknownAction
      >)
      // `null` for the `extra` generic was previously documented in the RTK "Advanced Tutorial", but
      // is a bad pattern and users should use `unknown` instead
      // @ts-expect-error
      store.dispatch(function () {} as ThunkAction<
        void,
        {},
        null,
        UnknownAction
      >)
      // unknown is the best way to type a ThunkAction if you do not care
      // about the value of the extraArgument, as it will always work with every
      // ThunkMiddleware, no matter the actual extraArgument type
      store.dispatch(function () {} as ThunkAction<
        void,
        {},
        unknown,
        UnknownAction
      >)
      // @ts-expect-error
      store.dispatch(function () {} as ThunkAction<
        void,
        {},
        boolean,
        UnknownAction
      >)
    })

    test('custom middleware and getDefaultMiddleware', () => {
      const store = configureStore({
        reducer: reducerA,
        middleware: (gDM) =>
          gDM().prepend((() => {}) as any as Middleware<
            (a: 'a') => 'A',
            StateA
          >),
      })

      expectTypeOf(store.dispatch('a')).toEqualTypeOf<'A'>()

      expectTypeOf(store.dispatch(thunkA())).toEqualTypeOf<Promise<'A'>>()

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkB())
    })

    test('custom middleware and getDefaultMiddleware, using prepend', () => {
      const otherMiddleware: Middleware<(a: 'a') => 'A', StateA> =
        _anyMiddleware

      const store = configureStore({
        reducer: reducerA,
        middleware: (gDM) => {
          const concatenated = gDM().prepend(otherMiddleware)

          expectTypeOf(concatenated).toMatchTypeOf<
            ReadonlyArray<
              typeof otherMiddleware | ThunkMiddleware | Middleware<{}>
            >
          >()

          return concatenated
        },
      })

      expectTypeOf(store.dispatch('a')).toEqualTypeOf<'A'>()

      expectTypeOf(store.dispatch(thunkA())).toEqualTypeOf<Promise<'A'>>()

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkB())
    })

    test('custom middleware and getDefaultMiddleware, using concat', () => {
      const otherMiddleware: Middleware<(a: 'a') => 'A', StateA> =
        _anyMiddleware

      const store = configureStore({
        reducer: reducerA,
        middleware: (gDM) => {
          const concatenated = gDM().concat(otherMiddleware)

          expectTypeOf(concatenated).toMatchTypeOf<
            ReadonlyArray<
              typeof otherMiddleware | ThunkMiddleware | Middleware<{}>
            >
          >()

          return concatenated
        },
      })

      expectTypeOf(store.dispatch('a')).toEqualTypeOf<'A'>()

      expectTypeOf(store.dispatch(thunkA())).toEqualTypeOf<Promise<'A'>>()

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkB())
    })

    test('middlewareBuilder notation, getDefaultMiddleware (unconfigured)', () => {
      const store = configureStore({
        reducer: reducerA,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().prepend((() => {}) as any as Middleware<
            (a: 'a') => 'A',
            StateA
          >),
      })

      expectTypeOf(store.dispatch('a')).toEqualTypeOf<'A'>()

      expectTypeOf(store.dispatch(thunkA())).toEqualTypeOf<Promise<'A'>>()

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkB())
    })

    test('middlewareBuilder notation, getDefaultMiddleware, concat & prepend', () => {
      const otherMiddleware: Middleware<(a: 'a') => 'A', StateA> =
        _anyMiddleware

      const otherMiddleware2: Middleware<(a: 'b') => 'B', StateA> =
        _anyMiddleware

      const store = configureStore({
        reducer: reducerA,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
            .concat(otherMiddleware)
            .prepend(otherMiddleware2),
      })

      expectTypeOf(store.dispatch('a')).toEqualTypeOf<'A'>()

      expectTypeOf(store.dispatch(thunkA())).toEqualTypeOf<Promise<'A'>>()

      expectTypeOf(store.dispatch('b')).toEqualTypeOf<'B'>()

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkB())
    })

    test('middlewareBuilder notation, getDefaultMiddleware (thunk: false)', () => {
      const store = configureStore({
        reducer: reducerA,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({ thunk: false }).prepend(
            (() => {}) as any as Middleware<(a: 'a') => 'A', StateA>,
          ),
      })

      expectTypeOf(store.dispatch('a')).toEqualTypeOf<'A'>()

      expectTypeOf(store.dispatch).parameter(0).not.toMatchTypeOf(thunkA())
    })

    test("badly typed middleware won't make `dispatch` `any`", () => {
      const store = configureStore({
        reducer: reducerA,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(_anyMiddleware as Middleware<any>),
      })

      expectTypeOf(store.dispatch).not.toBeAny()
    })

    test("decorated `configureStore` won't make `dispatch` `never`", () => {
      const someSlice = createSlice({
        name: 'something',
        initialState: null as any,
        reducers: {
          set(state) {
            return state
          },
        },
      })

      function configureMyStore<S>(
        options: Omit<ConfigureStoreOptions<S>, 'reducer'>,
      ) {
        return configureStore({
          ...options,
          reducer: someSlice.reducer,
        })
      }

      const store = configureMyStore({})

      expectTypeOf(store.dispatch).toBeFunction()
    })

    interface CounterState {
      value: number
    }

    const counterSlice = createSlice({
      name: 'counter',
      initialState: { value: 0 } as CounterState,
      reducers: {
        increment(state) {
          state.value += 1
        },
        decrement(state) {
          state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
          state.value += action.payload
        },
      },
    })

    type Unsubscribe = () => void

    // A fake middleware that tells TS that an unsubscribe callback is being returned for a given action
    // This is the same signature that the "listener" middleware uses
    const dummyMiddleware: Middleware<
      {
        (action: Action<'actionListenerMiddleware/add'>): Unsubscribe
      },
      CounterState
    > = (storeApi) => (next) => (action) => {}

    const store = configureStore({
      reducer: counterSlice.reducer,
      middleware: (gDM) => gDM().prepend(dummyMiddleware),
    })

    // Order matters here! We need the listener type to come first, otherwise
    // the thunk middleware type kicks in and TS thinks a plain action is being returned
    expectTypeOf(store.dispatch).toEqualTypeOf<
      ((action: Action<'actionListenerMiddleware/add'>) => Unsubscribe) &
        ThunkDispatch<CounterState, undefined, UnknownAction> &
        Dispatch<UnknownAction>
    >()

    const unsubscribe = store.dispatch({
      type: 'actionListenerMiddleware/add',
    } as const)

    expectTypeOf(unsubscribe).toEqualTypeOf<Unsubscribe>()
  })
})
