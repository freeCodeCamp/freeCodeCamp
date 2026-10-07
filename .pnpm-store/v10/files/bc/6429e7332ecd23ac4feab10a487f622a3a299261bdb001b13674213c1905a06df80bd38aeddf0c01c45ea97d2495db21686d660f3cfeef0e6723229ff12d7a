import { createListenerEntry } from '@internal/listenerMiddleware'
import type {
  Action,
  PayloadAction,
  TypedAddListener,
  TypedStartListening,
  UnknownAction,
  UnsubscribeListener,
} from '@reduxjs/toolkit'
import {
  addListener,
  configureStore,
  createAction,
  createListenerMiddleware,
  createSlice,
  isFluxStandardAction,
} from '@reduxjs/toolkit'

const listenerMiddleware = createListenerMiddleware()
const { startListening } = listenerMiddleware

const addTypedListenerAction = addListener as TypedAddListener<CounterState>

interface CounterState {
  value: number
}

const testAction1 = createAction<string>('testAction1')
const testAction2 = createAction<string>('testAction2')

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

const { increment, decrement, incrementByAmount } = counterSlice.actions

describe('type tests', () => {
  const store = configureStore({
    reducer: () => 42,
    middleware: (gDM) => gDM().prepend(createListenerMiddleware().middleware),
  })

  test('Allows passing an extra argument on middleware creation', () => {
    const originalExtra = 42
    const listenerMiddleware = createListenerMiddleware({
      extra: originalExtra,
    })
    const store = configureStore({
      reducer: counterSlice.reducer,
      middleware: (gDM) => gDM().prepend(listenerMiddleware.middleware),
    })

    let foundExtra: number | null = null

    const typedAddListener =
      listenerMiddleware.startListening as TypedStartListening<
        CounterState,
        typeof store.dispatch,
        typeof originalExtra
      >

    typedAddListener({
      matcher: (action): action is Action => true,
      effect: (action, listenerApi) => {
        foundExtra = listenerApi.extra

        expectTypeOf(listenerApi.extra).toMatchTypeOf(originalExtra)
      },
    })

    store.dispatch(testAction1('a'))
    expect(foundExtra).toBe(originalExtra)
  })

  test('unsubscribing via callback from dispatch', () => {
    const unsubscribe = store.dispatch(
      addListener({
        actionCreator: testAction1,
        effect: () => {},
      }),
    )

    expectTypeOf(unsubscribe).toEqualTypeOf<UnsubscribeListener>()

    store.dispatch(testAction1('a'))

    unsubscribe()
    store.dispatch(testAction2('b'))
    store.dispatch(testAction1('c'))
  })

  test('take resolves to `[A, CurrentState, PreviousState] | null` if a possibly undefined timeout parameter is provided', () => {
    type ExpectedTakeResultType =
      | readonly [ReturnType<typeof increment>, CounterState, CounterState]
      | null

    let timeout: number | undefined = undefined
    let done = false

    const startAppListening =
      startListening as TypedStartListening<CounterState>
    startAppListening({
      predicate: incrementByAmount.match,
      effect: async (_, listenerApi) => {
        let takeResult = await listenerApi.take(increment.match, timeout)

        timeout = 1
        takeResult = await listenerApi.take(increment.match, timeout)
        expect(takeResult).toBeNull()

        expectTypeOf(takeResult).toMatchTypeOf<ExpectedTakeResultType>()

        done = true
      },
    })

    expect(done).toBe(true)
  })

  test('State args default to unknown', () => {
    createListenerEntry({
      predicate: (
        action,
        currentState,
        previousState,
      ): action is UnknownAction => {
        expectTypeOf(currentState).toBeUnknown()

        expectTypeOf(previousState).toBeUnknown()

        return true
      },
      effect: (action, listenerApi) => {
        const listenerState = listenerApi.getState()

        expectTypeOf(listenerState).toBeUnknown()

        listenerApi.dispatch((dispatch, getState) => {
          const thunkState = getState()

          expectTypeOf(thunkState).toBeUnknown()
        })
      },
    })

    startListening({
      predicate: (
        action,
        currentState,
        previousState,
      ): action is UnknownAction => {
        expectTypeOf(currentState).toBeUnknown()

        expectTypeOf(previousState).toBeUnknown()

        return true
      },
      effect: (action, listenerApi) => {},
    })

    startListening({
      matcher: increment.match,
      effect: (action, listenerApi) => {
        const listenerState = listenerApi.getState()

        expectTypeOf(listenerState).toBeUnknown()

        listenerApi.dispatch((dispatch, getState) => {
          const thunkState = getState()

          expectTypeOf(thunkState).toBeUnknown()
        })
      },
    })

    store.dispatch(
      addListener({
        predicate: (
          action,
          currentState,
          previousState,
        ): action is UnknownAction => {
          expectTypeOf(currentState).toBeUnknown()

          expectTypeOf(previousState).toBeUnknown()

          return true
        },
        effect: (action, listenerApi) => {
          const listenerState = listenerApi.getState()

          expectTypeOf(listenerState).toBeUnknown()

          listenerApi.dispatch((dispatch, getState) => {
            const thunkState = getState()

            expectTypeOf(thunkState).toBeUnknown()
          })
        },
      }),
    )

    store.dispatch(
      addListener({
        matcher: increment.match,
        effect: (action, listenerApi) => {
          const listenerState = listenerApi.getState()

          expectTypeOf(listenerState).toBeUnknown()

          listenerApi.dispatch((dispatch, getState) => {
            const thunkState = getState()

            expectTypeOf(thunkState).toBeUnknown()
          })
        },
      }),
    )
  })

  test('Action type is inferred from args', () => {
    startListening({
      type: 'abcd',
      effect: (action, listenerApi) => {
        expectTypeOf(action).toEqualTypeOf<{ type: 'abcd' }>()
      },
    })

    startListening({
      actionCreator: incrementByAmount,
      effect: (action, listenerApi) => {
        expectTypeOf(action).toMatchTypeOf<PayloadAction<number>>()
      },
    })

    startListening({
      matcher: incrementByAmount.match,
      effect: (action, listenerApi) => {
        expectTypeOf(action).toMatchTypeOf<PayloadAction<number>>()
      },
    })

    startListening({
      predicate: (
        action,
        currentState,
        previousState,
      ): action is PayloadAction<number> => {
        return (
          isFluxStandardAction(action) && typeof action.payload === 'boolean'
        )
      },
      effect: (action, listenerApi) => {
        expectTypeOf(action).toEqualTypeOf<PayloadAction<number>>()
      },
    })

    startListening({
      predicate: (action, currentState) => {
        return (
          isFluxStandardAction(action) && typeof action.payload === 'number'
        )
      },
      effect: (action, listenerApi) => {
        expectTypeOf(action).toEqualTypeOf<UnknownAction>()
      },
    })

    store.dispatch(
      addListener({
        type: 'abcd',
        effect: (action, listenerApi) => {
          expectTypeOf(action).toEqualTypeOf<{ type: 'abcd' }>()
        },
      }),
    )

    store.dispatch(
      addListener({
        actionCreator: incrementByAmount,
        effect: (action, listenerApi) => {
          expectTypeOf(action).toMatchTypeOf<PayloadAction<number>>()
        },
      }),
    )

    store.dispatch(
      addListener({
        matcher: incrementByAmount.match,
        effect: (action, listenerApi) => {
          expectTypeOf(action).toMatchTypeOf<PayloadAction<number>>()
        },
      }),
    )
  })

  test('Can create a pre-typed middleware', () => {
    const typedMiddleware = createListenerMiddleware<CounterState>()

    typedMiddleware.startListening({
      predicate: (
        action,
        currentState,
        previousState,
      ): action is UnknownAction => {
        expectTypeOf(currentState).not.toBeAny()

        expectTypeOf(previousState).not.toBeAny()

        expectTypeOf(currentState).toEqualTypeOf<CounterState>()

        expectTypeOf(previousState).toEqualTypeOf<CounterState>()

        return true
      },
      effect: (action, listenerApi) => {
        const listenerState = listenerApi.getState()

        expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

        listenerApi.dispatch((dispatch, getState) => {
          const thunkState = listenerApi.getState()

          expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
        })
      },
    })

    // Can pass a predicate function with fewer args
    typedMiddleware.startListening({
      predicate: (action, currentState): action is PayloadAction<number> => {
        expectTypeOf(currentState).not.toBeAny()

        expectTypeOf(currentState).toEqualTypeOf<CounterState>()

        return true
      },
      effect: (action, listenerApi) => {
        expectTypeOf(action).toEqualTypeOf<PayloadAction<number>>()

        const listenerState = listenerApi.getState()

        expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

        listenerApi.dispatch((dispatch, getState) => {
          const thunkState = listenerApi.getState()

          expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
        })
      },
    })

    typedMiddleware.startListening({
      actionCreator: incrementByAmount,
      effect: (action, listenerApi) => {
        const listenerState = listenerApi.getState()

        expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

        listenerApi.dispatch((dispatch, getState) => {
          const thunkState = listenerApi.getState()

          expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
        })
      },
    })

    store.dispatch(
      addTypedListenerAction({
        predicate: (
          action,
          currentState,
          previousState,
        ): action is ReturnType<typeof incrementByAmount> => {
          expectTypeOf(currentState).not.toBeAny()

          expectTypeOf(previousState).not.toBeAny()

          expectTypeOf(currentState).toEqualTypeOf<CounterState>()

          expectTypeOf(previousState).toEqualTypeOf<CounterState>()

          return true
        },
        effect: (action, listenerApi) => {
          const listenerState = listenerApi.getState()

          expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

          listenerApi.dispatch((dispatch, getState) => {
            const thunkState = listenerApi.getState()

            expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
          })
        },
      }),
    )

    store.dispatch(
      addTypedListenerAction({
        predicate: (
          action,
          currentState,
          previousState,
        ): action is UnknownAction => {
          expectTypeOf(currentState).not.toBeAny()

          expectTypeOf(previousState).not.toBeAny()

          expectTypeOf(currentState).toEqualTypeOf<CounterState>()

          expectTypeOf(previousState).toEqualTypeOf<CounterState>()

          return true
        },
        effect: (action, listenerApi) => {
          const listenerState = listenerApi.getState()

          expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

          listenerApi.dispatch((dispatch, getState) => {
            const thunkState = listenerApi.getState()

            expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
          })
        },
      }),
    )
  })

  test('Can create pre-typed versions of startListening and addListener', () => {
    const typedAddListener = startListening as TypedStartListening<CounterState>
    const typedAddListenerAction = addListener as TypedAddListener<CounterState>

    typedAddListener({
      predicate: (
        action,
        currentState,
        previousState,
      ): action is UnknownAction => {
        expectTypeOf(currentState).not.toBeAny()

        expectTypeOf(previousState).not.toBeAny()

        expectTypeOf(currentState).toEqualTypeOf<CounterState>()

        expectTypeOf(previousState).toEqualTypeOf<CounterState>()

        return true
      },
      effect: (action, listenerApi) => {
        const listenerState = listenerApi.getState()

        expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

        listenerApi.dispatch((dispatch, getState) => {
          const thunkState = listenerApi.getState()

          expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
        })
      },
    })

    typedAddListener({
      matcher: incrementByAmount.match,
      effect: (action, listenerApi) => {
        const listenerState = listenerApi.getState()

        expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

        listenerApi.dispatch((dispatch, getState) => {
          const thunkState = listenerApi.getState()

          expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
        })
      },
    })

    store.dispatch(
      typedAddListenerAction({
        predicate: (
          action,
          currentState,
          previousState,
        ): action is UnknownAction => {
          expectTypeOf(currentState).not.toBeAny()

          expectTypeOf(previousState).not.toBeAny()

          expectTypeOf(currentState).toEqualTypeOf<CounterState>()

          expectTypeOf(previousState).toEqualTypeOf<CounterState>()

          return true
        },
        effect: (action, listenerApi) => {
          const listenerState = listenerApi.getState()

          expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

          listenerApi.dispatch((dispatch, getState) => {
            const thunkState = listenerApi.getState()

            expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
          })
        },
      }),
    )

    store.dispatch(
      typedAddListenerAction({
        matcher: incrementByAmount.match,
        effect: (action, listenerApi) => {
          const listenerState = listenerApi.getState()

          expectTypeOf(listenerState).toEqualTypeOf<CounterState>()

          listenerApi.dispatch((dispatch, getState) => {
            const thunkState = listenerApi.getState()

            expectTypeOf(thunkState).toEqualTypeOf<CounterState>()
          })
        },
      }),
    )
  })
})
