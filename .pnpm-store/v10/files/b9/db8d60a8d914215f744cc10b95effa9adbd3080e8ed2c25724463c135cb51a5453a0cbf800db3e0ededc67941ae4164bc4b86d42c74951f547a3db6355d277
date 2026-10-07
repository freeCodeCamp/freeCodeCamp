import { Tuple } from '@internal/utils'
import type {
  Action,
  Middleware,
  ThunkAction,
  UnknownAction,
} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { vi } from 'vitest'

import { buildGetDefaultMiddleware } from '@internal/getDefaultMiddleware'

const getDefaultMiddleware = buildGetDefaultMiddleware()

describe('getDefaultMiddleware', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  describe('Production behavior', () => {
    beforeEach(() => {
      vi.resetModules()
    })

    it('returns an array with only redux-thunk in production', async () => {
      vi.stubEnv('NODE_ENV', 'production')

      const { thunk } = await import('redux-thunk')
      const { buildGetDefaultMiddleware } = await import(
        '@internal/getDefaultMiddleware'
      )

      const middleware = buildGetDefaultMiddleware()()
      expect(middleware).toContain(thunk)
      expect(middleware.length).toBe(1)
    })
  })

  it('returns an array with additional middleware in development', () => {
    const middleware = getDefaultMiddleware()
    expect(middleware).toContain(thunk)
    expect(middleware.length).toBeGreaterThan(1)
  })

  const defaultMiddleware = getDefaultMiddleware()

  it('removes the thunk middleware if disabled', () => {
    const middleware = getDefaultMiddleware({ thunk: false })
    // @ts-ignore
    expect(middleware.includes(thunk)).toBe(false)
    expect(middleware.length).toBe(defaultMiddleware.length - 1)
  })

  it('removes the immutable middleware if disabled', () => {
    const middleware = getDefaultMiddleware({ immutableCheck: false })
    expect(middleware.length).toBe(defaultMiddleware.length - 1)
  })

  it('removes the serializable middleware if disabled', () => {
    const middleware = getDefaultMiddleware({ serializableCheck: false })
    expect(middleware.length).toBe(defaultMiddleware.length - 1)
  })

  it('removes the action creator middleware if disabled', () => {
    const middleware = getDefaultMiddleware({ actionCreatorCheck: false })
    expect(middleware.length).toBe(defaultMiddleware.length - 1)
  })

  it('allows passing options to thunk', () => {
    const extraArgument = 42 as const

    const m2 = getDefaultMiddleware({
      thunk: false,
    })

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

        return m3
      },
    })

    store.dispatch(testThunk)
  })

  it('allows passing options to immutableCheck', () => {
    let immutableCheckWasCalled = false

    const middleware = () =>
      getDefaultMiddleware({
        thunk: false,
        immutableCheck: {
          isImmutable: () => {
            immutableCheckWasCalled = true
            return true
          },
        },
        serializableCheck: false,
        actionCreatorCheck: false,
      })

    const reducer = () => ({})

    const store = configureStore({
      reducer,
      middleware,
    })

    expect(immutableCheckWasCalled).toBe(true)
  })

  it('allows passing options to serializableCheck', () => {
    let serializableCheckWasCalled = false

    const middleware = () =>
      getDefaultMiddleware({
        thunk: false,
        immutableCheck: false,
        serializableCheck: {
          isSerializable: () => {
            serializableCheckWasCalled = true
            return true
          },
        },
        actionCreatorCheck: false,
      })

    const reducer = () => ({})

    const store = configureStore({
      reducer,
      middleware,
    })

    store.dispatch({ type: 'TEST_ACTION' })

    expect(serializableCheckWasCalled).toBe(true)
  })
})

it('allows passing options to actionCreatorCheck', () => {
  let actionCreatorCheckWasCalled = false

  const middleware = () =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
      actionCreatorCheck: {
        isActionCreator: (action: unknown): action is Function => {
          actionCreatorCheckWasCalled = true
          return false
        },
      },
    })

  const reducer = () => ({})

  const store = configureStore({
    reducer,
    middleware,
  })

  store.dispatch({ type: 'TEST_ACTION' })

  expect(actionCreatorCheckWasCalled).toBe(true)
})

describe('Tuple functionality', () => {
  const middleware1: Middleware = () => (next) => (action) => next(action)
  const middleware2: Middleware = () => (next) => (action) => next(action)
  const defaultMiddleware = getDefaultMiddleware()
  const originalDefaultMiddleware = [...defaultMiddleware]

  test('allows to prepend a single value', () => {
    const prepended = defaultMiddleware.prepend(middleware1)

    // value is prepended
    expect(prepended).toEqual([middleware1, ...defaultMiddleware])
    // returned value is of correct type
    expect(prepended).toBeInstanceOf(Tuple)
    // prepended is a new array
    expect(prepended).not.toEqual(defaultMiddleware)
    // defaultMiddleware is not modified
    expect(defaultMiddleware).toEqual(originalDefaultMiddleware)
  })

  test('allows to prepend multiple values (array as first argument)', () => {
    const prepended = defaultMiddleware.prepend([middleware1, middleware2])

    // value is prepended
    expect(prepended).toEqual([middleware1, middleware2, ...defaultMiddleware])
    // returned value is of correct type
    expect(prepended).toBeInstanceOf(Tuple)
    // prepended is a new array
    expect(prepended).not.toEqual(defaultMiddleware)
    // defaultMiddleware is not modified
    expect(defaultMiddleware).toEqual(originalDefaultMiddleware)
  })

  test('allows to prepend multiple values (rest)', () => {
    const prepended = defaultMiddleware.prepend(middleware1, middleware2)

    // value is prepended
    expect(prepended).toEqual([middleware1, middleware2, ...defaultMiddleware])
    // returned value is of correct type
    expect(prepended).toBeInstanceOf(Tuple)
    // prepended is a new array
    expect(prepended).not.toEqual(defaultMiddleware)
    // defaultMiddleware is not modified
    expect(defaultMiddleware).toEqual(originalDefaultMiddleware)
  })

  test('allows to concat a single value', () => {
    const concatenated = defaultMiddleware.concat(middleware1)

    // value is concatenated
    expect(concatenated).toEqual([...defaultMiddleware, middleware1])
    // returned value is of correct type
    expect(concatenated).toBeInstanceOf(Tuple)
    // concatenated is a new array
    expect(concatenated).not.toEqual(defaultMiddleware)
    // defaultMiddleware is not modified
    expect(defaultMiddleware).toEqual(originalDefaultMiddleware)
  })

  test('allows to concat multiple values (array as first argument)', () => {
    const concatenated = defaultMiddleware.concat([middleware1, middleware2])

    // value is concatenated
    expect(concatenated).toEqual([
      ...defaultMiddleware,
      middleware1,
      middleware2,
    ])
    // returned value is of correct type
    expect(concatenated).toBeInstanceOf(Tuple)
    // concatenated is a new array
    expect(concatenated).not.toEqual(defaultMiddleware)
    // defaultMiddleware is not modified
    expect(defaultMiddleware).toEqual(originalDefaultMiddleware)
  })

  test('allows to concat multiple values (rest)', () => {
    const concatenated = defaultMiddleware.concat(middleware1, middleware2)

    // value is concatenated
    expect(concatenated).toEqual([
      ...defaultMiddleware,
      middleware1,
      middleware2,
    ])
    // returned value is of correct type
    expect(concatenated).toBeInstanceOf(Tuple)
    // concatenated is a new array
    expect(concatenated).not.toEqual(defaultMiddleware)
    // defaultMiddleware is not modified
    expect(defaultMiddleware).toEqual(originalDefaultMiddleware)
  })

  test('allows to concat and then prepend', () => {
    const concatenated = defaultMiddleware
      .concat(middleware1)
      .prepend(middleware2)

    expect(concatenated).toEqual([
      middleware2,
      ...defaultMiddleware,
      middleware1,
    ])
  })

  test('allows to prepend and then concat', () => {
    const concatenated = defaultMiddleware
      .prepend(middleware2)
      .concat(middleware1)

    expect(concatenated).toEqual([
      middleware2,
      ...defaultMiddleware,
      middleware1,
    ])
  })
})
