import type { Action, Dispatch, MiddlewareAPI, UnknownAction } from 'redux'
import { isAction } from '../reduxImports'
import type { ThunkDispatch } from 'redux-thunk'
import { createAction } from '../createAction'
import { nanoid } from '../nanoid'

import {
  TaskAbortError,
  listenerCancelled,
  listenerCompleted,
  taskCancelled,
  taskCompleted,
} from './exceptions'
import {
  createDelay,
  createPause,
  raceWithSignal,
  runTask,
  validateActive,
} from './task'
import type {
  AddListenerOverloads,
  AnyListenerPredicate,
  CreateListenerMiddlewareOptions,
  FallbackAddListenerOptions,
  ForkOptions,
  ForkedTask,
  ForkedTaskExecutor,
  ListenerEntry,
  ListenerErrorHandler,
  ListenerErrorInfo,
  ListenerMiddleware,
  ListenerMiddlewareInstance,
  TakePattern,
  TaskResult,
  TypedAddListener,
  TypedCreateListenerEntry,
  TypedRemoveListener,
  UnsubscribeListener,
  UnsubscribeListenerOptions,
} from './types'
import {
  addAbortSignalListener,
  assertFunction,
  catchRejection,
  noop,
} from './utils'
export { TaskAbortError } from './exceptions'
export type {
  AsyncTaskExecutor,
  CreateListenerMiddlewareOptions,
  ForkedTask,
  ForkedTaskAPI,
  ForkedTaskExecutor,
  ListenerEffect,
  ListenerEffectAPI,
  ListenerErrorHandler,
  ListenerMiddleware,
  ListenerMiddlewareInstance,
  SyncTaskExecutor,
  TaskCancelled,
  TaskRejected,
  TaskResolved,
  TaskResult,
  TypedAddListener,
  TypedRemoveListener,
  TypedStartListening,
  TypedStopListening,
  UnsubscribeListener,
  UnsubscribeListenerOptions,
} from './types'

//Overly-aggressive byte-shaving
const { assign } = Object
/**
 * @internal
 */
const INTERNAL_NIL_TOKEN = {} as const

const alm = 'listenerMiddleware' as const

const createFork = (
  parentAbortSignal: AbortSignal,
  parentBlockingPromises: Promise<any>[],
) => {
  const linkControllers = (controller: AbortController) =>
    addAbortSignalListener(parentAbortSignal, () =>
      controller.abort(parentAbortSignal.reason),
    )

  return <T>(
    taskExecutor: ForkedTaskExecutor<T>,
    opts?: ForkOptions,
  ): ForkedTask<T> => {
    assertFunction(taskExecutor, 'taskExecutor')
    const childAbortController = new AbortController()

    linkControllers(childAbortController)

    const result = runTask<T>(
      async (): Promise<T> => {
        validateActive(parentAbortSignal)
        validateActive(childAbortController.signal)
        const result = (await taskExecutor({
          pause: createPause(childAbortController.signal),
          delay: createDelay(childAbortController.signal),
          signal: childAbortController.signal,
        })) as T
        validateActive(childAbortController.signal)
        return result
      },
      () => childAbortController.abort(taskCompleted),
    )

    if (opts?.autoJoin) {
      parentBlockingPromises.push(result.catch(noop))
    }

    return {
      result: createPause<TaskResult<T>>(parentAbortSignal)(result),
      cancel() {
        childAbortController.abort(taskCancelled)
      },
    }
  }
}

const createTakePattern = <S>(
  startListening: AddListenerOverloads<UnsubscribeListener, S, Dispatch>,
  signal: AbortSignal,
): TakePattern<S> => {
  /**
   * A function that takes a ListenerPredicate and an optional timeout,
   * and resolves when either the predicate returns `true` based on an action
   * state combination or when the timeout expires.
   * If the parent listener is canceled while waiting, this will throw a
   * TaskAbortError.
   */
  const take = async <P extends AnyListenerPredicate<S>>(
    predicate: P,
    timeout: number | undefined,
  ) => {
    validateActive(signal)

    // Placeholder unsubscribe function until the listener is added
    let unsubscribe: UnsubscribeListener = () => {}

    const tuplePromise = new Promise<[Action, S, S]>((resolve, reject) => {
      // Inside the Promise, we synchronously add the listener.
      let stopListening = startListening({
        predicate: predicate as any,
        effect: (action, listenerApi): void => {
          // One-shot listener that cleans up as soon as the predicate passes
          listenerApi.unsubscribe()
          // Resolve the promise with the same arguments the predicate saw
          resolve([
            action,
            listenerApi.getState(),
            listenerApi.getOriginalState(),
          ])
        },
      })
      unsubscribe = () => {
        stopListening()
        reject()
      }
    })

    const promises: (Promise<null> | Promise<[Action, S, S]>)[] = [tuplePromise]

    if (timeout != null) {
      promises.push(
        new Promise<null>((resolve) => setTimeout(resolve, timeout, null)),
      )
    }

    try {
      const output = await raceWithSignal(signal, Promise.race(promises))

      validateActive(signal)
      return output
    } finally {
      // Always clean up the listener
      unsubscribe()
    }
  }

  return ((predicate: AnyListenerPredicate<S>, timeout: number | undefined) =>
    catchRejection(take(predicate, timeout))) as TakePattern<S>
}

const getListenerEntryPropsFrom = (options: FallbackAddListenerOptions) => {
  let { type, actionCreator, matcher, predicate, effect } = options

  if (type) {
    predicate = createAction(type).match
  } else if (actionCreator) {
    type = actionCreator!.type
    predicate = actionCreator.match
  } else if (matcher) {
    predicate = matcher
  } else if (predicate) {
    // pass
  } else {
    throw new Error(
      'Creating or removing a listener requires one of the known fields for matching an action',
    )
  }

  assertFunction(effect, 'options.listener')

  return { predicate, type, effect }
}

/** Accepts the possible options for creating a listener, and returns a formatted listener entry */
export const createListenerEntry: TypedCreateListenerEntry<unknown> =
  /* @__PURE__ */ assign(
    (options: FallbackAddListenerOptions) => {
      const { type, predicate, effect } = getListenerEntryPropsFrom(options)

      const entry: ListenerEntry<unknown> = {
        id: nanoid(),
        effect,
        type,
        predicate,
        pending: new Set<AbortController>(),
        unsubscribe: () => {
          throw new Error('Unsubscribe not initialized')
        },
      }

      return entry
    },
    { withTypes: () => createListenerEntry },
  ) as unknown as TypedCreateListenerEntry<unknown>

const findListenerEntry = (
  listenerMap: Map<string, ListenerEntry>,
  options: FallbackAddListenerOptions,
) => {
  const { type, effect, predicate } = getListenerEntryPropsFrom(options)

  return Array.from(listenerMap.values()).find((entry) => {
    const matchPredicateOrType =
      typeof type === 'string'
        ? entry.type === type
        : entry.predicate === predicate

    return matchPredicateOrType && entry.effect === effect
  })
}

const cancelActiveListeners = (
  entry: ListenerEntry<unknown, Dispatch<UnknownAction>>,
) => {
  entry.pending.forEach((controller) => {
    controller.abort(listenerCancelled)
  })
}

const createClearListenerMiddleware = (
  listenerMap: Map<string, ListenerEntry>,
  executingListeners: Map<ListenerEntry, number>,
) => {
  return () => {
    for (const listener of executingListeners.keys()) {
      cancelActiveListeners(listener)
    }
    listenerMap.clear()
  }
}

/**
 * Safely reports errors to the `errorHandler` provided.
 * Errors that occur inside `errorHandler` are notified in a new task.
 * Inspired by [rxjs reportUnhandledError](https://github.com/ReactiveX/rxjs/blob/6fafcf53dc9e557439b25debaeadfd224b245a66/src/internal/util/reportUnhandledError.ts)
 * @param errorHandler
 * @param errorToNotify
 */
const safelyNotifyError = (
  errorHandler: ListenerErrorHandler,
  errorToNotify: unknown,
  errorInfo: ListenerErrorInfo,
): void => {
  try {
    errorHandler(errorToNotify, errorInfo)
  } catch (errorHandlerError) {
    // We cannot let an error raised here block the listener queue.
    // The error raised here will be picked up by `window.onerror`, `process.on('error')` etc...
    setTimeout(() => {
      throw errorHandlerError
    }, 0)
  }
}

/**
 * @public
 */
export const addListener = /* @__PURE__ */ assign(
  /* @__PURE__ */ createAction(`${alm}/add`),
  {
    withTypes: () => addListener,
  },
) as unknown as TypedAddListener<unknown>

/**
 * @public
 */
export const clearAllListeners = /* @__PURE__ */ createAction(
  `${alm}/removeAll`,
)

/**
 * @public
 */
export const removeListener = /* @__PURE__ */ assign(
  /* @__PURE__ */ createAction(`${alm}/remove`),
  {
    withTypes: () => removeListener,
  },
) as unknown as TypedRemoveListener<unknown>

const defaultErrorHandler: ListenerErrorHandler = (...args: unknown[]) => {
  console.error(`${alm}/error`, ...args)
}

/**
 * @public
 */
export const createListenerMiddleware = <
  StateType = unknown,
  DispatchType extends Dispatch<Action> = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
>(
  middlewareOptions: CreateListenerMiddlewareOptions<ExtraArgument> = {},
) => {
  const listenerMap = new Map<string, ListenerEntry>()

  // Track listeners whose effect is currently executing so clearListeners can
  // abort even listeners that have become unsubscribed while executing.
  const executingListeners = new Map<ListenerEntry, number>()
  const trackExecutingListener = (entry: ListenerEntry) => {
    const count = executingListeners.get(entry) ?? 0
    executingListeners.set(entry, count + 1)
  }
  const untrackExecutingListener = (entry: ListenerEntry) => {
    const count = executingListeners.get(entry) ?? 1
    if (count === 1) {
      executingListeners.delete(entry)
    } else {
      executingListeners.set(entry, count - 1)
    }
  }

  const { extra, onError = defaultErrorHandler } = middlewareOptions

  assertFunction(onError, 'onError')

  const insertEntry = (entry: ListenerEntry) => {
    entry.unsubscribe = () => listenerMap.delete(entry.id)

    listenerMap.set(entry.id, entry)
    return (cancelOptions?: UnsubscribeListenerOptions) => {
      entry.unsubscribe()
      if (cancelOptions?.cancelActive) {
        cancelActiveListeners(entry)
      }
    }
  }

  const startListening = ((options: FallbackAddListenerOptions) => {
    const entry =
      findListenerEntry(listenerMap, options) ??
      createListenerEntry(options as any)

    return insertEntry(entry)
  }) as AddListenerOverloads<any>

  assign(startListening, {
    withTypes: () => startListening,
  })

  const stopListening = (
    options: FallbackAddListenerOptions & UnsubscribeListenerOptions,
  ): boolean => {
    const entry = findListenerEntry(listenerMap, options)

    if (entry) {
      entry.unsubscribe()
      if (options.cancelActive) {
        cancelActiveListeners(entry)
      }
    }

    return !!entry
  }

  assign(stopListening, {
    withTypes: () => stopListening,
  })

  const notifyListener = async (
    entry: ListenerEntry<unknown, Dispatch<UnknownAction>>,
    action: unknown,
    api: MiddlewareAPI,
    getOriginalState: () => StateType,
  ) => {
    const internalTaskController = new AbortController()
    const take = createTakePattern(
      startListening as AddListenerOverloads<any>,
      internalTaskController.signal,
    )
    const autoJoinPromises: Promise<any>[] = []

    try {
      entry.pending.add(internalTaskController)
      trackExecutingListener(entry)
      await Promise.resolve(
        entry.effect(
          action,
          // Use assign() rather than ... to avoid extra helper functions added to bundle
          assign({}, api, {
            getOriginalState,
            condition: (
              predicate: AnyListenerPredicate<any>,
              timeout?: number,
            ) => take(predicate, timeout).then(Boolean),
            take,
            delay: createDelay(internalTaskController.signal),
            pause: createPause<any>(internalTaskController.signal),
            extra,
            signal: internalTaskController.signal,
            fork: createFork(internalTaskController.signal, autoJoinPromises),
            unsubscribe: entry.unsubscribe,
            subscribe: () => {
              listenerMap.set(entry.id, entry)
            },
            cancelActiveListeners: () => {
              entry.pending.forEach((controller, _, set) => {
                if (controller !== internalTaskController) {
                  controller.abort(listenerCancelled)
                  set.delete(controller)
                }
              })
            },
            cancel: () => {
              internalTaskController.abort(listenerCancelled)
              entry.pending.delete(internalTaskController)
            },
            throwIfCancelled: () => {
              validateActive(internalTaskController.signal)
            },
          }),
        ),
      )
    } catch (listenerError) {
      if (!(listenerError instanceof TaskAbortError)) {
        safelyNotifyError(onError, listenerError, {
          raisedBy: 'effect',
        })
      }
    } finally {
      await Promise.all(autoJoinPromises)

      internalTaskController.abort(listenerCompleted) // Notify that the task has completed
      untrackExecutingListener(entry)
      entry.pending.delete(internalTaskController)
    }
  }

  const clearListenerMiddleware = createClearListenerMiddleware(
    listenerMap,
    executingListeners,
  )

  const middleware: ListenerMiddleware<
    StateType,
    DispatchType,
    ExtraArgument
  > = (api) => (next) => (action) => {
    if (!isAction(action)) {
      // we only want to notify listeners for action objects
      return next(action)
    }

    if (addListener.match(action)) {
      return startListening(action.payload as any)
    }

    if (clearAllListeners.match(action)) {
      clearListenerMiddleware()
      return
    }

    if (removeListener.match(action)) {
      return stopListening(action.payload)
    }

    // Need to get this state _before_ the reducer processes the action
    let originalState: StateType | typeof INTERNAL_NIL_TOKEN = api.getState()

    // `getOriginalState` can only be called synchronously.
    // @see https://github.com/reduxjs/redux-toolkit/discussions/1648#discussioncomment-1932820
    const getOriginalState = (): StateType => {
      if (originalState === INTERNAL_NIL_TOKEN) {
        throw new Error(
          `${alm}: getOriginalState can only be called synchronously`,
        )
      }

      return originalState as StateType
    }

    let result: unknown

    try {
      // Actually forward the action to the reducer before we handle listeners
      result = next(action)

      if (listenerMap.size > 0) {
        const currentState = api.getState()
        // Work around ESBuild+TS transpilation issue
        const listenerEntries = Array.from(listenerMap.values())
        for (const entry of listenerEntries) {
          let runListener = false

          try {
            runListener = entry.predicate(action, currentState, originalState)
          } catch (predicateError) {
            runListener = false

            safelyNotifyError(onError, predicateError, {
              raisedBy: 'predicate',
            })
          }

          if (!runListener) {
            continue
          }

          notifyListener(entry, action, api, getOriginalState)
        }
      }
    } finally {
      // Remove `originalState` store from this scope.
      originalState = INTERNAL_NIL_TOKEN
    }

    return result
  }

  return {
    middleware,
    startListening,
    stopListening,
    clearListeners: clearListenerMiddleware,
  } as ListenerMiddlewareInstance<StateType, DispatchType, ExtraArgument>
}
