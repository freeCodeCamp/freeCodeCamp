import * as DevTools from '@internal/devtoolsExtension'
import type { Middleware, StoreEnhancer } from '@reduxjs/toolkit'
import { Tuple } from '@reduxjs/toolkit'
import type * as Redux from 'redux'
import { vi } from 'vitest'

vi.doMock('redux', async (importOriginal) => {
  const redux = await importOriginal<typeof import('redux')>()

  vi.spyOn(redux, 'applyMiddleware')
  vi.spyOn(redux, 'combineReducers')
  vi.spyOn(redux, 'compose')
  vi.spyOn(redux, 'createStore')

  return redux
})

describe('configureStore', async () => {
  const composeWithDevToolsSpy = vi.spyOn(DevTools, 'composeWithDevTools')

  const redux = await import('redux')

  const { configureStore } = await import('@reduxjs/toolkit')

  const reducer: Redux.Reducer = (state = {}, _action) => state

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('given a function reducer', () => {
    it('calls createStore with the reducer', () => {
      configureStore({ reducer })
      expect(configureStore({ reducer })).toBeInstanceOf(Object)

      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )
      expect(redux.applyMiddleware).toHaveBeenCalled()
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledTimes(2)
      }
    })
  })

  describe('given an object of reducers', () => {
    it('calls createStore with the combined reducers', () => {
      const reducer = {
        reducer() {
          return true
        },
      }
      expect(configureStore({ reducer })).toBeInstanceOf(Object)
      expect(redux.combineReducers).toHaveBeenCalledWith(reducer)
      expect(redux.applyMiddleware).toHaveBeenCalled()
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledOnce()
      }
      expect(redux.createStore).toHaveBeenCalledWith(
        expect.any(Function),
        undefined,
        expect.any(Function),
      )
    })
  })

  describe('given no reducer', () => {
    it('throws', () => {
      expect(configureStore).toThrow(
        '`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
      )
    })
  })

  describe('given no middleware', () => {
    it('calls createStore without any middleware', () => {
      expect(
        configureStore({ middleware: () => new Tuple(), reducer }),
      ).toBeInstanceOf(Object)
      expect(redux.applyMiddleware).toHaveBeenCalledWith()
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledOnce()
      }
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )
    })
  })

  describe('given an array of middleware', () => {
    it('throws an error requiring a callback', () => {
      // @ts-expect-error
      expect(() => configureStore({ middleware: [], reducer })).toThrow(
        '`middleware` field must be a callback',
      )
    })
  })

  describe('given undefined middleware', () => {
    it('calls createStore with default middleware', () => {
      expect(configureStore({ middleware: undefined, reducer })).toBeInstanceOf(
        Object,
      )
      expect(redux.applyMiddleware).toHaveBeenCalledWith(
        expect.any(Function), // immutableCheck
        expect.any(Function), // thunk
        expect.any(Function), // serializableCheck
        expect.any(Function), // actionCreatorCheck
      )
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledOnce()
      }
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )
    })
  })

  describe('given any middleware', () => {
    const exampleMiddleware: Middleware<any, any> = () => (next) => (action) =>
      next(action)
    it('throws an error by default if there are duplicate middleware', () => {
      const makeStore = () => {
        return configureStore({
          reducer,
          middleware: (gDM) =>
            gDM().concat(exampleMiddleware, exampleMiddleware),
        })
      }

      expect(makeStore).toThrowError(
        'Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.',
      )
    })

    it('does not throw a duplicate middleware error if duplicateMiddlewareCheck is disabled', () => {
      const makeStore = () => {
        return configureStore({
          reducer,
          middleware: (gDM) =>
            gDM().concat(exampleMiddleware, exampleMiddleware),
          duplicateMiddlewareCheck: false,
        })
      }

      expect(makeStore).not.toThrowError()
    })
  })

  describe('given a middleware creation function that returns undefined', () => {
    it('throws an error', () => {
      const invalidBuilder = vi.fn((getDefaultMiddleware) => undefined as any)
      expect(() =>
        configureStore({ middleware: invalidBuilder, reducer }),
      ).toThrow(
        'when using a middleware builder function, an array of middleware must be returned',
      )
    })
  })

  describe('given a middleware creation function that returns an array with non-functions', () => {
    it('throws an error', () => {
      const invalidBuilder = vi.fn((getDefaultMiddleware) => [true] as any)
      expect(() =>
        configureStore({ middleware: invalidBuilder, reducer }),
      ).toThrow('each middleware provided to configureStore must be a function')
    })
  })

  describe('given custom middleware', () => {
    it('calls createStore with custom middleware and without default middleware', () => {
      const thank: Redux.Middleware = (_store) => (next) => (action) =>
        next(action)
      expect(
        configureStore({ middleware: () => new Tuple(thank), reducer }),
      ).toBeInstanceOf(Object)
      expect(redux.applyMiddleware).toHaveBeenCalledWith(thank)
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledOnce()
      }
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )
    })
  })

  describe('middleware builder notation', () => {
    it('calls builder, passes getDefaultMiddleware and uses returned middlewares', () => {
      const thank = vi.fn(
        ((_store) => (next) => (action) => 'foobar') as Redux.Middleware,
      )

      const builder = vi.fn((getDefaultMiddleware) => {
        expect(getDefaultMiddleware).toEqual(expect.any(Function))
        expect(getDefaultMiddleware()).toEqual(expect.any(Array))

        return new Tuple(thank)
      })

      const store = configureStore({ middleware: builder, reducer })

      expect(builder).toHaveBeenCalled()

      expect(store.dispatch({ type: 'test' })).toBe('foobar')
    })
  })

  describe('with devTools disabled', () => {
    it('calls createStore without devTools enhancer', () => {
      expect(configureStore({ devTools: false, reducer })).toBeInstanceOf(
        Object,
      )
      expect(redux.applyMiddleware).toHaveBeenCalled()
      expect(redux.compose).toHaveBeenCalled()
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )
    })
  })

  describe('with devTools options', () => {
    it('calls createStore with devTools enhancer and option', () => {
      const options = {
        name: 'myApp',
        trace: true,
      }
      expect(configureStore({ devTools: options, reducer })).toBeInstanceOf(
        Object,
      )
      expect(redux.applyMiddleware).toHaveBeenCalled()
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledOnce()

        expect(composeWithDevToolsSpy).toHaveBeenLastCalledWith(options)
      }
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )
    })
  })

  describe('given preloadedState', () => {
    it('calls createStore with preloadedState', () => {
      expect(configureStore({ reducer })).toBeInstanceOf(Object)
      expect(redux.applyMiddleware).toHaveBeenCalled()
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledOnce()
      }
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )
    })
  })

  describe('given enhancers', () => {
    let dummyEnhancerCalled = false

    const dummyEnhancer: StoreEnhancer =
      (createStore) => (reducer, preloadedState) => {
        dummyEnhancerCalled = true

        return createStore(reducer, preloadedState)
      }

    beforeEach(() => {
      dummyEnhancerCalled = false
    })

    it('calls createStore with enhancers', () => {
      expect(
        configureStore({
          enhancers: (gDE) => gDE().concat(dummyEnhancer),
          reducer,
        }),
      ).toBeInstanceOf(Object)
      expect(redux.applyMiddleware).toHaveBeenCalled()
      if (process.env.TEST_DIST) {
        expect(composeWithDevToolsSpy).not.toHaveBeenCalled()
      } else {
        expect(composeWithDevToolsSpy).toHaveBeenCalledOnce()
      }
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function),
      )

      expect(dummyEnhancerCalled).toBe(true)
    })

    describe('invalid arguments', () => {
      test('enhancers is not a callback', () => {
        expect(() => configureStore({ reducer, enhancers: [] as any })).toThrow(
          '`enhancers` field must be a callback',
        )
      })

      test('callback fails to return array', () => {
        expect(() =>
          configureStore({ reducer, enhancers: (() => {}) as any }),
        ).toThrow('`enhancers` callback must return an array')
      })

      test('array contains non-function', () => {
        expect(() =>
          configureStore({ reducer, enhancers: (() => ['']) as any }),
        ).toThrow('each enhancer provided to configureStore must be a function')
      })
    })

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    beforeEach(() => {
      consoleSpy.mockClear()
    })
    afterAll(() => {
      consoleSpy.mockRestore()
    })

    it('warns if middleware enhancer is excluded from final array when middlewares are provided', () => {
      const store = configureStore({
        reducer,
        enhancers: () => new Tuple(dummyEnhancer),
      })

      expect(dummyEnhancerCalled).toBe(true)

      expect(consoleSpy).toHaveBeenCalledWith(
        'middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`',
      )
    })
    it("doesn't warn when middleware enhancer is excluded if no middlewares provided", () => {
      const store = configureStore({
        reducer,
        middleware: () => new Tuple(),
        enhancers: () => new Tuple(dummyEnhancer),
      })

      expect(dummyEnhancerCalled).toBe(true)

      expect(consoleSpy).not.toHaveBeenCalled()
    })
  })
})
