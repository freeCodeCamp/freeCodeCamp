import { noop } from '@internal/listenerMiddleware/utils'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  configureStore,
  createAction,
  createListenerMiddleware,
  createSlice,
  isAnyOf,
  TaskAbortError,
} from '@reduxjs/toolkit'

describe('Saga-style Effects Scenarios', () => {
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
  const { increment, decrement, incrementByAmount } = counterSlice.actions

  let { reducer } = counterSlice
  let listenerMiddleware = createListenerMiddleware<CounterState>()
  let { middleware, startListening, stopListening } = listenerMiddleware

  let store = configureStore({
    reducer,
    middleware: (gDM) => gDM().prepend(middleware),
  })

  const testAction1 = createAction<string>('testAction1')
  type TestAction1 = ReturnType<typeof testAction1>
  const testAction2 = createAction<string>('testAction2')
  type TestAction2 = ReturnType<typeof testAction2>
  const testAction3 = createAction<string>('testAction3')
  type TestAction3 = ReturnType<typeof testAction3>

  type RootState = ReturnType<typeof store.getState>

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(noop)

  beforeEach(() => {
    listenerMiddleware = createListenerMiddleware<CounterState>()
    middleware = listenerMiddleware.middleware
    startListening = listenerMiddleware.startListening
    store = configureStore({
      reducer,
      middleware: (gDM) => gDM().prepend(middleware),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test('throttle', async () => {
    // Ignore incoming actions for a given period of time while processing a task.
    // Ref: https://redux-saga.js.org/docs/api#throttlems-pattern-saga-args

    let listenerCalls = 0
    let workPerformed = 0

    startListening({
      actionCreator: increment,
      effect: (action, listenerApi) => {
        listenerCalls++

        // Stop listening until further notice
        listenerApi.unsubscribe()

        // Queue to start listening again after a delay
        setTimeout(listenerApi.subscribe, 15)
        workPerformed++
      },
    })

    // Dispatch 3 actions. First triggers listener, next two ignored.
    store.dispatch(increment())
    store.dispatch(increment())
    store.dispatch(increment())

    // Wait for resubscription
    await delay(25)

    // Dispatch 2 more actions, first triggers, second ignored
    store.dispatch(increment())
    store.dispatch(increment())

    // Wait for work
    await delay(5)

    // Both listener calls completed
    expect(listenerCalls).toBe(2)
    expect(workPerformed).toBe(2)
  })

  test('debounce / takeLatest', async () => {
    // Repeated calls cancel previous ones, no work performed
    // until the specified delay elapses without another call
    // NOTE: This is also basically identical to `takeLatest`.
    // Ref: https://redux-saga.js.org/docs/api#debouncems-pattern-saga-args
    // Ref: https://redux-saga.js.org/docs/api#takelatestpattern-saga-args

    let listenerCalls = 0
    let workPerformed = 0

    startListening({
      actionCreator: increment,
      effect: async (action, listenerApi) => {
        listenerCalls++

        // Cancel any in-progress instances of this listener
        listenerApi.cancelActiveListeners()

        // Delay before starting actual work
        await listenerApi.delay(15)

        workPerformed++
      },
    })

    // First action, listener 1 starts, nothing to cancel
    store.dispatch(increment())
    // Second action, listener 2 starts, cancels 1
    store.dispatch(increment())
    // Third action, listener 3 starts, cancels 2
    store.dispatch(increment())

    // 3 listeners started, third is still paused
    expect(listenerCalls).toBe(3)
    expect(workPerformed).toBe(0)

    await delay(25)

    // All 3 started
    expect(listenerCalls).toBe(3)
    // First two canceled, `delay()` threw JobCanceled and skipped work.
    // Third actually completed.
    expect(workPerformed).toBe(1)
  })

  test('takeEvery', async () => {
    // Runs the listener on every action match
    // Ref: https://redux-saga.js.org/docs/api#takeeverypattern-saga-args

    // NOTE: This is already the default behavior - nothing special here!

    let listenerCalls = 0
    startListening({
      actionCreator: increment,
      effect: (action, listenerApi) => {
        listenerCalls++
      },
    })

    store.dispatch(increment())
    expect(listenerCalls).toBe(1)

    store.dispatch(increment())
    expect(listenerCalls).toBe(2)
  })

  test('takeLeading', async () => {
    // Starts listener on first action, ignores others until task completes
    // Ref: https://redux-saga.js.org/docs/api#takeleadingpattern-saga-args

    let listenerCalls = 0
    let workPerformed = 0

    startListening({
      actionCreator: increment,
      effect: async (action, listenerApi) => {
        listenerCalls++

        // Stop listening for this action
        listenerApi.unsubscribe()

        // Pretend we're doing expensive work
        await listenerApi.delay(25)

        workPerformed++

        // Re-enable the listener
        listenerApi.subscribe()
      },
    })

    // First action starts the listener, which unsubscribes
    store.dispatch(increment())
    // Second action is ignored
    store.dispatch(increment())

    // One instance in progress, but not complete
    expect(listenerCalls).toBe(1)
    expect(workPerformed).toBe(0)

    await delay(5)

    // In-progress listener not done yet
    store.dispatch(increment())

    // No changes in status
    expect(listenerCalls).toBe(1)
    expect(workPerformed).toBe(0)

    await delay(50)

    // Work finished, should have resubscribed
    expect(workPerformed).toBe(1)

    // Listener is re-subscribed, will trigger again
    store.dispatch(increment())

    expect(listenerCalls).toBe(2)
    expect(workPerformed).toBe(1)

    await delay(50)

    expect(workPerformed).toBe(2)
  })

  test('fork + join', async () => {
    // fork starts a child job, join waits for the child to complete and return a value
    // Ref: https://redux-saga.js.org/docs/api#forkfn-args
    // Ref: https://redux-saga.js.org/docs/api#jointask

    let childResult = 0

    startListening({
      actionCreator: increment,
      effect: async (_, listenerApi) => {
        const childOutput = 42
        // Spawn a child job and start it immediately
        const result = await listenerApi.fork(async () => {
          // Artificially wait a bit inside the child
          await listenerApi.delay(5)
          // Complete the child by returning an Outcome-wrapped value
          return childOutput
        }).result

        // Unwrap the child result in the listener
        if (result.status === 'ok') {
          childResult = result.value
        }
      },
    })

    store.dispatch(increment())

    await delay(10)
    expect(childResult).toBe(42)
  })

  test('fork + cancel', async () => {
    // fork starts a child job, cancel will raise an exception if the
    // child is paused in the middle of an effect
    // Ref: https://redux-saga.js.org/docs/api#forkfn-args

    let childResult = 0
    let listenerCompleted = false

    startListening({
      actionCreator: increment,
      effect: async (action, listenerApi) => {
        // Spawn a child job and start it immediately
        const forkedTask = listenerApi.fork(async () => {
          // Artificially wait a bit inside the child
          await listenerApi.delay(15)
          // Complete the child by returning an Outcome-wrapped value
          childResult = 42

          return 0
        })

        await listenerApi.delay(5)
        forkedTask.cancel()
        listenerCompleted = true
      },
    })

    // Starts listener, which starts child
    store.dispatch(increment())

    // Wait for child to have maybe completed
    await delay(20)

    // Listener finished, but the child was canceled and threw an exception, so it never finished
    expect(listenerCompleted).toBe(true)
    expect(childResult).toBe(0)
  })

  test('canceled', async () => {
    // canceled allows checking if the current task was canceled
    // Ref: https://redux-saga.js.org/docs/api#cancelled

    let canceledAndCaught = false
    let canceledCheck = false

    startListening({
      matcher: isAnyOf(increment, decrement, incrementByAmount),
      effect: async (action, listenerApi) => {
        if (increment.match(action)) {
          // Have this branch wait around to be canceled by the other
          try {
            await listenerApi.delay(10)
          } catch (err) {
            // Can check cancelation based on the exception and its reason
            if (err instanceof TaskAbortError) {
              canceledAndCaught = true
            }
          }
        } else if (incrementByAmount.match(action)) {
          // do a non-cancelation-aware wait
          await delay(15)
          if (listenerApi.signal.aborted) {
            canceledCheck = true
          }
        } else if (decrement.match(action)) {
          listenerApi.cancelActiveListeners()
        }
      },
    })

    // Start first branch
    store.dispatch(increment())
    // Cancel first listener
    store.dispatch(decrement())

    // Have to wait for the delay to resolve
    // TODO Can we make ``Job.delay()` be a race?
    await delay(15)

    expect(canceledAndCaught).toBe(true)

    // Start second branch
    store.dispatch(incrementByAmount(42))
    // Cancel second listener, although it won't know about that until later
    store.dispatch(decrement())

    expect(canceledCheck).toBe(false)

    await delay(20)

    expect(canceledCheck).toBe(true)
  })

  test('long-running listener with immediate unsubscribe is cancelable', async () => {
    let runCount = 0
    let abortCount = 0

    startListening({
      actionCreator: increment,
      effect: async (action, listenerApi) => {
        runCount++

        // Stop listening for this action
        listenerApi.unsubscribe()

        try {
          // Wait indefinitely
          await listenerApi.condition(() => false)
        } catch (err) {
          if (err instanceof TaskAbortError) {
            abortCount++
          }
        }
      },
    })

    // First action starts the listener, which unsubscribes
    store.dispatch(increment())
    expect(runCount).toBe(1)

    // Verify that the first action unsubscribed the listener
    store.dispatch(increment())
    expect(runCount).toBe(1)

    // Now call clearListeners, which should abort the running effect, even
    // though the listener is no longer subscribed
    listenerMiddleware.clearListeners()
    await delay(0)

    expect(abortCount).toBe(1)
  })

  test('long-running listener with unsubscribe race is cancelable', async () => {
    let runCount = 0
    let abortCount = 0

    startListening({
      actionCreator: increment,
      effect: async (action, listenerApi) => {
        runCount++

        if (runCount === 2) {
          // On the second run, stop listening for this action
          listenerApi.unsubscribe()
          return
        }

        try {
          // Wait indefinitely
          await listenerApi.condition(() => false)
        } catch (err) {
          if (err instanceof TaskAbortError) {
            abortCount++
          }
        }
      },
    })

    // First action starts the hanging effect
    store.dispatch(increment())
    expect(runCount).toBe(1)

    // Second action starts the fast effect, which unsubscribes
    store.dispatch(increment())
    expect(runCount).toBe(2)

    // Third action should be a noop
    store.dispatch(increment())
    expect(runCount).toBe(2)

    // The hanging effect should still be hanging
    expect(abortCount).toBe(0)

    // Now call clearListeners, which should abort the hanging effect, even
    // though the listener is no longer subscribed
    listenerMiddleware.clearListeners()
    await delay(0)

    expect(abortCount).toBe(1)
  })

  test('long-running listener with immediate unsubscribe and forked child is cancelable', async () => {
    let outerAborted = false
    let innerAborted = false

    startListening({
      actionCreator: increment,
      effect: async (action, listenerApi) => {
        // Stop listening for this action
        listenerApi.unsubscribe()

        const pollingTask = listenerApi.fork(async (forkApi) => {
          try {
            // Cancellation-aware indefinite pause
            await forkApi.pause(new Promise(() => {}))
          } catch (err) {
            if (err instanceof TaskAbortError) {
              innerAborted = true
            }
          }
        })

        try {
          // Wait indefinitely
          await listenerApi.condition(() => false)
          pollingTask.cancel()
        } catch (err) {
          if (err instanceof TaskAbortError) {
            outerAborted = true
          }
        }
      },
    })

    store.dispatch(increment())
    await delay(0)

    listenerMiddleware.clearListeners()
    await delay(0)

    expect(outerAborted).toBe(true)
    expect(innerAborted).toBe(true)
  })
})
