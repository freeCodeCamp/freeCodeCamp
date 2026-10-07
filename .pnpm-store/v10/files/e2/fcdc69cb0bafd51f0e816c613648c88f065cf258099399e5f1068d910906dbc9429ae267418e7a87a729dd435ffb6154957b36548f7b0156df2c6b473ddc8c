import type { EnhancedStore } from '@reduxjs/toolkit'
import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { ForkedTaskExecutor, TaskResult } from '../types'
import { createListenerMiddleware, TaskAbortError } from '../index'
import {
  listenerCancelled,
  listenerCompleted,
  taskCancelled,
  taskCompleted,
} from '../exceptions'

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// @see https://deno.land/std@0.95.0/async/deferred.ts (MIT)
export interface Deferred<T> extends Promise<T> {
  resolve(value?: T | PromiseLike<T>): void
  reject(reason?: any): void
}

/** Creates a Promise with the `reject` and `resolve` functions
 * placed as methods on the promise object itself. It allows you to do:
 *
 *     const p = deferred<number>();
 *     // ...
 *     p.resolve(42);
 */
export function deferred<T>(): Deferred<T> {
  let methods
  const promise = new Promise<T>((resolve, reject): void => {
    methods = { resolve, reject }
  })
  return Object.assign(promise, methods) as Deferred<T>
}

interface CounterSlice {
  value: number
}

describe('fork', () => {
  const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 } as CounterSlice,
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
  let listenerMiddleware = createListenerMiddleware()
  let { middleware, startListening, stopListening } = listenerMiddleware
  let store = configureStore({
    reducer: counterSlice.reducer,
    middleware: (gDM) => gDM().prepend(middleware),
  })

  beforeEach(() => {
    listenerMiddleware = createListenerMiddleware()
    middleware = listenerMiddleware.middleware
    startListening = listenerMiddleware.startListening
    stopListening = listenerMiddleware.stopListening
    store = configureStore({
      reducer: counterSlice.reducer,
      middleware: (gDM) => gDM().prepend(middleware),
    })
  })

  it('runs executors in the next microtask', async () => {
    let hasRunSyncExector = false
    let hasRunAsyncExecutor = false

    startListening({
      actionCreator: increment,
      effect: async (_, listenerApi) => {
        listenerApi.fork(() => {
          hasRunSyncExector = true
        })

        listenerApi.fork(async () => {
          hasRunAsyncExecutor = true
        })
      },
    })

    store.dispatch(increment())

    expect(hasRunSyncExector).toBe(false)
    expect(hasRunAsyncExecutor).toBe(false)

    await Promise.resolve()

    expect(hasRunSyncExector).toBe(true)
    expect(hasRunAsyncExecutor).toBe(true)
  })

  test('forkedTask.result rejects TaskAbortError if listener is cancelled', async () => {
    const deferredForkedTaskError = deferred()

    startListening({
      actionCreator: increment,
      async effect(_, listenerApi) {
        listenerApi.cancelActiveListeners()
        listenerApi
          .fork(async () => {
            await delay(10)

            throw new Error('unreachable code')
          })
          .result.then(
            deferredForkedTaskError.resolve,
            deferredForkedTaskError.resolve,
          )
      },
    })

    store.dispatch(increment())
    store.dispatch(increment())

    expect(await deferredForkedTaskError).toEqual(
      new TaskAbortError(listenerCancelled),
    )
  })

  it('synchronously throws TypeError error if the provided executor is not a function', () => {
    const invalidExecutors = [null, {}, undefined, 1]

    startListening({
      predicate: () => true,
      effect: async (_, listenerApi) => {
        invalidExecutors.forEach((invalidExecutor) => {
          let caughtError
          try {
            listenerApi.fork(invalidExecutor as any)
          } catch (err) {
            caughtError = err
          }

          expect(caughtError).toBeInstanceOf(TypeError)
        })
      },
    })

    store.dispatch(increment())

    expect.assertions(invalidExecutors.length)
  })

  it('does not run an executor if the task is synchronously cancelled', async () => {
    const storeStateAfter = deferred()

    startListening({
      actionCreator: increment,
      effect: async (action, listenerApi) => {
        const forkedTask = listenerApi.fork(() => {
          listenerApi.dispatch(decrement())
          listenerApi.dispatch(decrement())
          listenerApi.dispatch(decrement())
        })
        forkedTask.cancel()

        const result = await forkedTask.result
        storeStateAfter.resolve(listenerApi.getState())
      },
    })
    store.dispatch(increment())

    await expect(storeStateAfter).resolves.toEqual({ value: 1 })
  })

  it.each<{
    desc: string
    executor: ForkedTaskExecutor<any>
    cancelAfterMs?: number
    expected: TaskResult<any>
  }>([
    {
      desc: 'sync exec - success',
      executor: () => 42,
      expected: { status: 'ok', value: 42 },
    },
    {
      desc: 'sync exec - error',
      executor: () => {
        throw new Error('2020')
      },
      expected: { status: 'rejected', error: new Error('2020') },
    },
    {
      desc: 'sync exec - sync cancel',
      executor: () => 42,
      cancelAfterMs: -1,
      expected: {
        status: 'cancelled',
        error: new TaskAbortError(taskCancelled),
      },
    },
    {
      desc: 'sync exec - async cancel',
      executor: () => 42,
      cancelAfterMs: 0,
      expected: { status: 'ok', value: 42 },
    },
    {
      desc: 'async exec - async cancel',
      executor: async (forkApi) => {
        await forkApi.delay(100)
        throw new Error('2020')
      },
      cancelAfterMs: 10,
      expected: {
        status: 'cancelled',
        error: new TaskAbortError(taskCancelled),
      },
    },
    {
      desc: 'async exec - success',
      executor: async () => {
        await delay(20)
        return Promise.resolve(21)
      },
      expected: { status: 'ok', value: 21 },
    },
    {
      desc: 'async exec - error',
      executor: async () => {
        await Promise.resolve()
        throw new Error('2020')
      },
      expected: { status: 'rejected', error: new Error('2020') },
    },
    {
      desc: 'async exec - success with forkApi.pause',
      executor: async (forkApi) => {
        return forkApi.pause(Promise.resolve(2))
      },
      expected: { status: 'ok', value: 2 },
    },
    {
      desc: 'async exec - error with forkApi.pause',
      executor: async (forkApi) => {
        return forkApi.pause(Promise.reject(22))
      },
      expected: { status: 'rejected', error: 22 },
    },
    {
      desc: 'async exec - success with forkApi.delay',
      executor: async (forkApi) => {
        await forkApi.delay(10)
        return 5
      },
      expected: { status: 'ok', value: 5 },
    },
  ])('$desc', async ({ executor, expected, cancelAfterMs }) => {
    let deferredResult = deferred()
    let forkedTask: any = {}

    startListening({
      predicate: () => true,
      effect: async (_, listenerApi) => {
        forkedTask = listenerApi.fork(executor)

        deferredResult.resolve(await forkedTask.result)
      },
    })

    store.dispatch({ type: '' })

    if (typeof cancelAfterMs === 'number') {
      if (cancelAfterMs < 0) {
        forkedTask.cancel()
      } else {
        await delay(cancelAfterMs)
        forkedTask.cancel()
      }
    }

    const result = await deferredResult

    expect(result).toEqual(expected)
  })

  describe('forkAPI', () => {
    test('forkApi.delay rejects as soon as the task is cancelled', async () => {
      let deferredResult = deferred()

      startListening({
        actionCreator: increment,
        effect: async (_, listenerApi) => {
          const forkedTask = listenerApi.fork(async (forkApi) => {
            await forkApi.delay(100)

            return 4
          })

          await listenerApi.delay(10)
          forkedTask.cancel()
          deferredResult.resolve(await forkedTask.result)
        },
      })

      store.dispatch(increment())

      expect(await deferredResult).toEqual({
        status: 'cancelled',
        error: new TaskAbortError(taskCancelled),
      })
    })

    test('forkApi.delay rejects as soon as the parent listener is cancelled', async () => {
      let deferredResult = deferred()

      startListening({
        actionCreator: increment,
        effect: async (_, listenerApi) => {
          listenerApi.cancelActiveListeners()
          await listenerApi.fork(async (forkApi) => {
            await forkApi
              .delay(100)
              .then(deferredResult.resolve, deferredResult.resolve)

            return 4
          }).result

          deferredResult.resolve(new Error('unreachable'))
        },
      })

      store.dispatch(increment())

      await Promise.resolve()

      store.dispatch(increment())
      expect(await deferredResult).toEqual(
        new TaskAbortError(listenerCancelled),
      )
    })

    it.each([
      {
        autoJoin: true,
        expectedAbortReason: taskCompleted,
        cancelListener: false,
      },
      {
        autoJoin: false,
        expectedAbortReason: listenerCompleted,
        cancelListener: false,
      },
      {
        autoJoin: true,
        expectedAbortReason: listenerCancelled,
        cancelListener: true,
      },
      {
        autoJoin: false,
        expectedAbortReason: listenerCancelled,
        cancelListener: true,
      },
    ])(
      'signal is $expectedAbortReason when autoJoin: $autoJoin, cancelListener: $cancelListener',
      async ({ autoJoin, cancelListener, expectedAbortReason }) => {
        let deferredResult = deferred()

        const unsubscribe = startListening({
          actionCreator: increment,
          async effect(_, listenerApi) {
            listenerApi.fork(
              async (forkApi) => {
                forkApi.signal.addEventListener('abort', () => {
                  deferredResult.resolve(forkApi.signal.reason)
                })

                await forkApi.delay(10)
              },
              { autoJoin },
            )
          },
        })

        store.dispatch(increment())

        // let task start
        await Promise.resolve()

        if (cancelListener) unsubscribe({ cancelActive: true })

        expect(await deferredResult).toBe(expectedAbortReason)
      },
    )

    test('fork.delay does not trigger unhandledRejections for completed or cancelled tasks', async () => {
      let deferredCompletedEvt = deferred()
      let deferredCancelledEvt = deferred()

      // Unfortunately we cannot test declaratively unhandleRejections in jest: https://github.com/facebook/jest/issues/5620
      // This test just fails if an `unhandledRejection` occurs.
      startListening({
        actionCreator: increment,
        effect: async (_, listenerApi) => {
          const completedTask = listenerApi.fork(async (forkApi) => {
            forkApi.signal.addEventListener(
              'abort',
              deferredCompletedEvt.resolve,
              { once: true },
            )
            forkApi.delay(100) // missing await

            return 4
          })

          deferredCompletedEvt.resolve(await completedTask.result)

          const godotPauseTrigger = deferred()

          const cancelledTask = listenerApi.fork(async (forkApi) => {
            forkApi.signal.addEventListener(
              'abort',
              deferredCompletedEvt.resolve,
              { once: true },
            )
            forkApi.delay(1_000) // missing await
            await forkApi.pause(godotPauseTrigger)
            return 4
          })

          await Promise.resolve()
          cancelledTask.cancel()
          deferredCancelledEvt.resolve(await cancelledTask.result)
        },
      })

      store.dispatch(increment())
      expect(await deferredCompletedEvt).toBeDefined()
      expect(await deferredCancelledEvt).toBeDefined()
    })
  })

  test('forkApi.pause rejects if task is cancelled', async () => {
    let deferredResult = deferred()
    startListening({
      actionCreator: increment,
      effect: async (_, listenerApi) => {
        const forkedTask = listenerApi.fork(async (forkApi) => {
          await forkApi.pause(delay(1_000))

          return 4
        })

        await Promise.resolve()
        forkedTask.cancel()
        deferredResult.resolve(await forkedTask.result)
      },
    })

    store.dispatch(increment())

    expect(await deferredResult).toEqual({
      status: 'cancelled',
      error: new TaskAbortError(taskCancelled),
    })
  })

  test('forkApi.pause rejects as soon as the parent listener is cancelled', async () => {
    let deferredResult = deferred()

    startListening({
      actionCreator: increment,
      effect: async (_, listenerApi) => {
        listenerApi.cancelActiveListeners()
        const forkedTask = listenerApi.fork(async (forkApi) => {
          await forkApi
            .pause(delay(100))
            .then(deferredResult.resolve, deferredResult.resolve)

          return 4
        })

        await forkedTask.result
        deferredResult.resolve(new Error('unreachable'))
      },
    })

    store.dispatch(increment())

    await Promise.resolve()

    store.dispatch(increment())
    expect(await deferredResult).toEqual(new TaskAbortError(listenerCancelled))
  })

  test('forkApi.pause rejects if listener is cancelled', async () => {
    const incrementByInListener = createAction<number>('incrementByInListener')

    startListening({
      actionCreator: incrementByInListener,
      async effect({ payload: amountToIncrement }, listenerApi) {
        listenerApi.cancelActiveListeners()
        await listenerApi.fork(async (forkApi) => {
          await forkApi.pause(delay(10))
          listenerApi.dispatch(incrementByAmount(amountToIncrement))
        }).result
        listenerApi.dispatch(incrementByAmount(2 * amountToIncrement))
      },
    })

    store.dispatch(incrementByInListener(10))
    store.dispatch(incrementByInListener(100))

    await delay(50)

    expect(store.getState().value).toEqual(300)
  })
})
