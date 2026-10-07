import { noop } from '@internal/listenerMiddleware/utils'
import { isNestedFrozen } from '@internal/serializableStateInvariantMiddleware'
import type { Reducer } from '@reduxjs/toolkit'
import {
  configureStore,
  createNextState,
  createSerializableStateInvariantMiddleware,
  findNonSerializableValue,
  isPlain,
  Tuple,
} from '@reduxjs/toolkit'

// Mocking console
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(noop)

const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(noop)

afterEach(() => {
  vi.clearAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
})

describe('findNonSerializableValue', () => {
  it('Should return false if no matching values are found', () => {
    const obj = {
      a: 42,
      b: {
        b1: 'test',
      },
      c: [99, { d: 123 }],
    }

    const result = findNonSerializableValue(obj)

    expect(result).toBe(false)
  })

  it('Should return a keypath and the value if it finds a non-serializable value', () => {
    function testFunction() {}

    const obj = {
      a: 42,
      b: {
        b1: testFunction,
      },
      c: [99, { d: 123 }],
    }

    const result = findNonSerializableValue(obj)

    expect(result).toEqual({ keyPath: 'b.b1', value: testFunction })
  })

  it('Should return the first non-serializable value it finds', () => {
    const map = new Map()
    const symbol = Symbol.for('testSymbol')

    const obj = {
      a: 42,
      b: {
        b1: 1,
      },
      c: [99, { d: 123 }, map, symbol, 'test'],
      d: symbol,
    }

    const result = findNonSerializableValue(obj)

    expect(result).toEqual({ keyPath: 'c.2', value: map })
  })

  it('Should return a specific value if the root object is non-serializable', () => {
    const value = new Map()
    const result = findNonSerializableValue(value)

    expect(result).toEqual({ keyPath: '<root>', value })
  })

  it('Should accept null as a valid value', () => {
    const obj = {
      a: 42,
      b: {
        b1: 1,
      },
      c: null,
    }

    const result = findNonSerializableValue(obj)

    expect(result).toEqual(false)
  })
})

describe('serializableStateInvariantMiddleware', () => {
  it('Should log an error when a non-serializable action is dispatched', () => {
    const reducer: Reducer = (state = 0, _action) => state + 1

    const serializableStateInvariantMiddleware =
      createSerializableStateInvariantMiddleware()

    const store = configureStore({
      reducer,
      middleware: () => new Tuple(serializableStateInvariantMiddleware),
    })

    const symbol = Symbol.for('SOME_CONSTANT')
    const dispatchedAction = { type: 'an-action', payload: symbol }

    store.dispatch(dispatchedAction)

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `A non-serializable value was detected in an action, in the path: \`payload\`. Value:`,
      symbol,
      `\nTake a look at the logic that dispatched this action: `,
      dispatchedAction,
      `\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`,
      `\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`,
    )
  })

  it('Should log an error when a non-serializable value is in state', () => {
    const ACTION_TYPE = 'TEST_ACTION'

    const initialState = {
      a: 0,
    }

    const badValue = new Map()

    const reducer: Reducer = (state = initialState, action) => {
      switch (action.type) {
        case ACTION_TYPE: {
          return {
            a: badValue,
          }
        }
        default:
          return state
      }
    }

    const serializableStateInvariantMiddleware =
      createSerializableStateInvariantMiddleware()

    const store = configureStore({
      reducer: {
        testSlice: reducer,
      },
      middleware: () => new Tuple(serializableStateInvariantMiddleware),
    })

    store.dispatch({ type: ACTION_TYPE })

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `A non-serializable value was detected in the state, in the path: \`testSlice.a\`. Value:`,
      badValue,
      `\nTake a look at the reducer(s) handling this action type: TEST_ACTION.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`,
    )
  })

  describe('consumer tolerated structures', () => {
    const nonSerializableValue = new Map()

    const nestedSerializableObjectWithBadValue = {
      isSerializable: true,
      entries: (): [string, any][] => [
        ['good-string', 'Good!'],
        ['good-number', 1337],
        ['bad-map-instance', nonSerializableValue],
      ],
    }

    const serializableObject = {
      isSerializable: true,
      entries: (): [string, any][] => [
        ['first', 1],
        ['second', 'B!'],
        ['third', nestedSerializableObjectWithBadValue],
      ],
    }

    it('Should log an error when a non-serializable value is nested in state', () => {
      const ACTION_TYPE = 'TEST_ACTION'

      const initialState = {
        a: 0,
      }

      const reducer: Reducer = (state = initialState, action) => {
        switch (action.type) {
          case ACTION_TYPE: {
            return {
              a: serializableObject,
            }
          }
          default:
            return state
        }
      }

      // use default options
      const serializableStateInvariantMiddleware =
        createSerializableStateInvariantMiddleware()

      const store = configureStore({
        reducer: {
          testSlice: reducer,
        },
        middleware: () => new Tuple(serializableStateInvariantMiddleware),
      })

      store.dispatch({ type: ACTION_TYPE })

      expect(consoleErrorSpy).toHaveBeenCalledOnce()

      // since default options are used, the `entries` function in `serializableObject` will cause the error
      expect(consoleErrorSpy).toHaveBeenLastCalledWith(
        `A non-serializable value was detected in the state, in the path: \`testSlice.a.entries\`. Value:`,
        serializableObject.entries,
        `\nTake a look at the reducer(s) handling this action type: TEST_ACTION.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`,
      )
    })

    it('Should use consumer supplied isSerializable and getEntries options to tolerate certain structures', () => {
      const ACTION_TYPE = 'TEST_ACTION'

      const initialState = {
        a: 0,
      }

      const isSerializable = (val: any): boolean =>
        val.isSerializable || isPlain(val)
      const getEntries = (val: any): [string, any][] =>
        val.isSerializable ? val.entries() : Object.entries(val)

      const reducer: Reducer = (state = initialState, action) => {
        switch (action.type) {
          case ACTION_TYPE: {
            return {
              a: serializableObject,
            }
          }
          default:
            return state
        }
      }

      const serializableStateInvariantMiddleware =
        createSerializableStateInvariantMiddleware({
          isSerializable,
          getEntries,
        })

      const store = configureStore({
        reducer: {
          testSlice: reducer,
        },
        middleware: () => new Tuple(serializableStateInvariantMiddleware),
      })

      store.dispatch({ type: ACTION_TYPE })

      expect(consoleErrorSpy).toHaveBeenCalledOnce()

      // error reported is from a nested class instance, rather than the `entries` function `serializableObject`
      expect(consoleErrorSpy).toHaveBeenLastCalledWith(
        `A non-serializable value was detected in the state, in the path: \`testSlice.a.third.bad-map-instance\`. Value:`,
        nonSerializableValue,
        `\nTake a look at the reducer(s) handling this action type: TEST_ACTION.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`,
      )
    })
  })

  it('Should use the supplied isSerializable function to determine serializability', () => {
    const ACTION_TYPE = 'TEST_ACTION'

    const initialState = {
      a: 0,
    }

    const badValue = new Map()

    const reducer: Reducer = (state = initialState, action) => {
      switch (action.type) {
        case ACTION_TYPE: {
          return {
            a: badValue,
          }
        }
        default:
          return state
      }
    }

    const serializableStateInvariantMiddleware =
      createSerializableStateInvariantMiddleware({
        isSerializable: () => true,
      })

    const store = configureStore({
      reducer: {
        testSlice: reducer,
      },
      middleware: () => new Tuple(serializableStateInvariantMiddleware),
    })

    store.dispatch({ type: ACTION_TYPE })

    // Supplied 'isSerializable' considers all values serializable, hence
    // no error logging is expected:
    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })

  it('should not check serializability for ignored action types', () => {
    let numTimesCalled = 0

    const serializableStateMiddleware =
      createSerializableStateInvariantMiddleware({
        isSerializable: () => {
          numTimesCalled++
          return true
        },
        ignoredActions: ['IGNORE_ME'],
      })

    const store = configureStore({
      reducer: () => ({}),
      middleware: () => new Tuple(serializableStateMiddleware),
    })

    expect(numTimesCalled).toBe(0)

    store.dispatch({ type: 'IGNORE_ME' })

    // The state check only calls `isSerializable` once
    expect(numTimesCalled).toBe(1)

    store.dispatch({ type: 'ANY_OTHER_ACTION' })

    // Action checks call `isSerializable` 2+ times when enabled
    expect(numTimesCalled).toBeGreaterThanOrEqual(3)
  })

  describe('ignored action paths', () => {
    function reducer() {
      return 0
    }
    const nonSerializableValue = new Map()

    it('default value: meta.arg', () => {
      configureStore({
        reducer,
        middleware: () =>
          new Tuple(createSerializableStateInvariantMiddleware()),
      }).dispatch({ type: 'test', meta: { arg: nonSerializableValue } })

      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    it('default value can be overridden', () => {
      configureStore({
        reducer,
        middleware: () =>
          new Tuple(
            createSerializableStateInvariantMiddleware({
              ignoredActionPaths: [],
            }),
          ),
      }).dispatch({ type: 'test', meta: { arg: nonSerializableValue } })

      expect(consoleErrorSpy).toHaveBeenCalledOnce()

      expect(consoleErrorSpy).toHaveBeenLastCalledWith(
        `A non-serializable value was detected in an action, in the path: \`meta.arg\`. Value:`,
        nonSerializableValue,
        `\nTake a look at the logic that dispatched this action: `,
        { type: 'test', meta: { arg: nonSerializableValue } },
        `\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`,
        `\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`,
      )
    })

    it('can specify (multiple) different values', () => {
      configureStore({
        reducer,
        middleware: () =>
          new Tuple(
            createSerializableStateInvariantMiddleware({
              ignoredActionPaths: ['payload', 'meta.arg'],
            }),
          ),
      }).dispatch({
        type: 'test',
        payload: { arg: nonSerializableValue },
        meta: { arg: nonSerializableValue },
      })

      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    it('can specify regexp', () => {
      configureStore({
        reducer,
        middleware: () =>
          new Tuple(
            createSerializableStateInvariantMiddleware({
              ignoredActionPaths: [/^payload\..*$/],
            }),
          ),
      }).dispatch({
        type: 'test',
        payload: { arg: nonSerializableValue },
      })

      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })
  })

  it('allows ignoring actions entirely', () => {
    let numTimesCalled = 0

    const serializableStateMiddleware =
      createSerializableStateInvariantMiddleware({
        isSerializable: () => {
          numTimesCalled++
          return true
        },
        ignoreActions: true,
      })

    const store = configureStore({
      reducer: () => ({}),
      middleware: () => new Tuple(serializableStateMiddleware),
    })

    expect(numTimesCalled).toBe(0)

    store.dispatch({ type: 'THIS_DOESNT_MATTER' })

    // `isSerializable` is called once for a state check
    expect(numTimesCalled).toBe(1)

    store.dispatch({ type: 'THIS_DOESNT_MATTER_AGAIN' })

    expect(numTimesCalled).toBe(2)
  })

  it('should not check serializability for ignored slice names', () => {
    const ACTION_TYPE = 'TEST_ACTION'

    const initialState = {
      a: 0,
    }

    const badValue = new Map()

    const reducer: Reducer = (state = initialState, action) => {
      switch (action.type) {
        case ACTION_TYPE: {
          return {
            a: badValue,
            b: {
              c: badValue,
              d: badValue,
            },
            e: { f: badValue },
            g: {
              h: badValue,
              i: badValue,
            },
          }
        }
        default:
          return state
      }
    }

    const serializableStateInvariantMiddleware =
      createSerializableStateInvariantMiddleware({
        ignoredPaths: [
          // Test for ignoring a single value
          'testSlice.a',
          // Test for ignoring a single nested value
          'testSlice.b.c',
          // Test for ignoring an object and its children
          'testSlice.e',
          // Test for ignoring based on RegExp
          /^testSlice\.g\..*$/,
        ],
      })

    const store = configureStore({
      reducer: {
        testSlice: reducer,
      },
      middleware: () => new Tuple(serializableStateInvariantMiddleware),
    })

    store.dispatch({ type: ACTION_TYPE })

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    // testSlice.b.d was not covered in ignoredPaths, so will still log the error
    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `A non-serializable value was detected in the state, in the path: \`testSlice.b.d\`. Value:`,
      badValue,
      `\nTake a look at the reducer(s) handling this action type: TEST_ACTION.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`,
    )
  })

  it('allows ignoring state entirely', () => {
    const badValue = new Map()
    let numTimesCalled = 0
    const reducer = () => badValue
    const store = configureStore({
      reducer,
      middleware: () =>
        new Tuple(
          createSerializableStateInvariantMiddleware({
            isSerializable: () => {
              numTimesCalled++
              return true
            },
            ignoreState: true,
          }),
        ),
    })

    expect(numTimesCalled).toBe(0)

    store.dispatch({ type: 'test' })

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    // Should be called twice for the action - there is an initial check for early returns, then a second and potentially 3rd for nested properties
    expect(numTimesCalled).toBe(2)
  })

  it('never calls isSerializable if both ignoreState and ignoreActions are true', () => {
    const badValue = new Map()
    let numTimesCalled = 0
    const reducer = () => badValue
    const store = configureStore({
      reducer,
      middleware: () =>
        new Tuple(
          createSerializableStateInvariantMiddleware({
            isSerializable: () => {
              numTimesCalled++
              return true
            },
            ignoreState: true,
            ignoreActions: true,
          }),
        ),
    })

    expect(numTimesCalled).toBe(0)

    store.dispatch({ type: 'TEST', payload: new Date() })
    store.dispatch({ type: 'OTHER_THING' })

    expect(numTimesCalled).toBe(0)
  })

  it('Should print a warning if execution takes too long', () => {
    const reducer: Reducer = (state = 42, action) => {
      return state
    }

    const serializableStateInvariantMiddleware =
      createSerializableStateInvariantMiddleware({ warnAfter: 4 })

    const store = configureStore({
      reducer: {
        testSlice: reducer,
      },
      middleware: () => new Tuple(serializableStateInvariantMiddleware),
    })

    store.dispatch({
      type: 'SOME_ACTION',
      payload: new Array(10_000).fill({ value: 'more' }),
    })

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    expect(consoleWarnSpy).toHaveBeenLastCalledWith(
      expect.stringMatching(
        /^SerializableStateInvariantMiddleware took \d*ms, which is more than the warning threshold of 4ms./,
      ),
    )
  })

  it('Should not print a warning if "reducer" takes too long', () => {
    const reducer: Reducer = (state = 42, action) => {
      const started = Date.now()
      while (Date.now() - started < 8) {}
      return state
    }

    const serializableStateInvariantMiddleware =
      createSerializableStateInvariantMiddleware({ warnAfter: 4 })

    const store = configureStore({
      reducer: {
        testSlice: reducer,
      },
      middleware: () => new Tuple(serializableStateInvariantMiddleware),
    })

    store.dispatch({ type: 'SOME_ACTION' })

    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })

  it('Should cache its results', () => {
    let numPlainChecks = 0
    const countPlainChecks = (x: any) => {
      numPlainChecks++
      return isPlain(x)
    }

    const serializableStateInvariantMiddleware =
      createSerializableStateInvariantMiddleware({
        isSerializable: countPlainChecks,
      })

    const store = configureStore({
      reducer: (state = [], action) => {
        if (action.type === 'SET_STATE') return action.payload
        return state
      },
      middleware: () => new Tuple(serializableStateInvariantMiddleware),
    })

    const state = createNextState([], () =>
      new Array(50).fill(0).map((x, i) => ({ i })),
    )
    expect(isNestedFrozen(state)).toBe(true)

    store.dispatch({
      type: 'SET_STATE',
      payload: state,
    })
    expect(numPlainChecks).toBeGreaterThan(state.length)

    numPlainChecks = 0
    store.dispatch({ type: 'NOOP' })
    expect(numPlainChecks).toBeLessThan(10)
  })
})
