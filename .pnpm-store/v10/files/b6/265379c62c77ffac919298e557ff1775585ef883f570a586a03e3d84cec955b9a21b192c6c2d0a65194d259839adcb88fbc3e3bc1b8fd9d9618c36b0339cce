import { buildGetDefaultMiddleware } from '@internal/getDefaultMiddleware'
import type {
  Action,
  Dispatch,
  Middleware,
  ThunkAction,
  ThunkDispatch,
  ThunkMiddleware,
  Tuple,
  UnknownAction,
} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

declare const middleware1: Middleware<{
  (_: string): number
}>

declare const middleware2: Middleware<{
  (_: number): string
}>

type ThunkReturn = Promise<'thunk'>
declare const thunkCreator: () => () => ThunkReturn

const getDefaultMiddleware = buildGetDefaultMiddleware()

describe('type tests', () => {
  test('prepend single element', () => {
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().prepend(middleware1),
    })

    expectTypeOf(store.dispatch('foo')).toBeNumber()

    expectTypeOf(store.dispatch(thunkCreator())).toEqualTypeOf<ThunkReturn>()

    expectTypeOf(store.dispatch('foo')).not.toBeString()
  })

  test('prepend multiple (rest)', () => {
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().prepend(middleware1, middleware2),
    })

    expectTypeOf(store.dispatch('foo')).toBeNumber()

    expectTypeOf(store.dispatch(5)).toBeString()

    expectTypeOf(store.dispatch(thunkCreator())).toEqualTypeOf<ThunkReturn>()

    expectTypeOf(store.dispatch('foo')).not.toBeString()
  })

  test('prepend multiple (array notation)', () => {
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().prepend([middleware1, middleware2] as const),
    })

    expectTypeOf(store.dispatch('foo')).toBeNumber()

    expectTypeOf(store.dispatch(5)).toBeString()

    expectTypeOf(store.dispatch(thunkCreator())).toEqualTypeOf<ThunkReturn>()

    expectTypeOf(store.dispatch('foo')).not.toBeString()
  })

  test('concat single element', () => {
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().concat(middleware1),
    })

    expectTypeOf(store.dispatch('foo')).toBeNumber()

    expectTypeOf(store.dispatch(thunkCreator())).toEqualTypeOf<ThunkReturn>()

    expectTypeOf(store.dispatch('foo')).not.toBeString()
  })

  test('prepend multiple (rest)', () => {
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().concat(middleware1, middleware2),
    })

    expectTypeOf(store.dispatch('foo')).toBeNumber()

    expectTypeOf(store.dispatch(5)).toBeString()

    expectTypeOf(store.dispatch(thunkCreator())).toEqualTypeOf<ThunkReturn>()

    expectTypeOf(store.dispatch('foo')).not.toBeString()
  })

  test('concat multiple (array notation)', () => {
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().concat([middleware1, middleware2] as const),
    })

    expectTypeOf(store.dispatch('foo')).toBeNumber()

    expectTypeOf(store.dispatch(5)).toBeString()

    expectTypeOf(store.dispatch(thunkCreator())).toEqualTypeOf<ThunkReturn>()

    expectTypeOf(store.dispatch('foo')).not.toBeString()
  })

  test('concat and prepend', () => {
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().concat(middleware1).prepend(middleware2),
    })

    expectTypeOf(store.dispatch('foo')).toBeNumber()

    expectTypeOf(store.dispatch(5)).toBeString()

    expectTypeOf(store.dispatch(thunkCreator())).toEqualTypeOf<ThunkReturn>()

    expectTypeOf(store.dispatch('foo')).not.toBeString()
  })

  test('allows passing options to thunk', () => {
    const extraArgument = 42 as const

    const m2 = getDefaultMiddleware({
      thunk: false,
    })

    expectTypeOf(m2).toMatchTypeOf<Tuple<[]>>()

    const dummyMiddleware: Middleware<
      {
        (action: Action<'actionListenerMiddleware/add'>): () => void
      },
      { counter: number }
    > = (storeApi) => (next) => (action) => {
      return next(action)
    }

    const dummyMiddleware2: Middleware<{}, { counter: number }> =
      (storeApi) => (next) => (action) => {}

    const testThunk: ThunkAction<
      void,
      { counter: number },
      number,
      UnknownAction
    > = (dispatch, getState, extraArg) => {
      expect(extraArg).toBe(extraArgument)
    }

    const reducer = () => ({ counter: 123 })

    const store = configureStore({
      reducer,
      middleware: (gDM) => {
        const middleware = gDM({
          thunk: { extraArgument },
          immutableCheck: false,
          serializableCheck: false,
          actionCreatorCheck: false,
        })

        const m3 = middleware.concat(dummyMiddleware, dummyMiddleware2)

        expectTypeOf(m3).toMatchTypeOf<
          Tuple<
            [
              ThunkMiddleware<any, UnknownAction, 42>,
              Middleware<
                (action: Action<'actionListenerMiddleware/add'>) => () => void,
                {
                  counter: number
                },
                Dispatch<UnknownAction>
              >,
              Middleware<{}, any, Dispatch<UnknownAction>>,
            ]
          >
        >()

        return m3
      },
    })

    expectTypeOf(store.dispatch).toMatchTypeOf<
      ThunkDispatch<any, 42, UnknownAction> & Dispatch<UnknownAction>
    >()

    store.dispatch(testThunk)
  })
})
