import type { StoreEnhancer } from 'redux'

export const SHOULD_AUTOBATCH = 'RTK_autoBatch'

export const prepareAutoBatched =
  <T>() =>
  (payload: T): { payload: T; meta: unknown } => ({
    payload,
    meta: { [SHOULD_AUTOBATCH]: true },
  })

const createQueueWithTimer = (timeout: number) => {
  return (notify: () => void) => {
    setTimeout(notify, timeout)
  }
}

export type AutoBatchOptions =
  | { type: 'tick' }
  | { type: 'timer'; timeout: number }
  | { type: 'raf' }
  | { type: 'callback'; queueNotification: (notify: () => void) => void }

/**
 * A Redux store enhancer that watches for "low-priority" actions, and delays
 * notifying subscribers until either the queued callback executes or the
 * next "standard-priority" action is dispatched.
 *
 * This allows dispatching multiple "low-priority" actions in a row with only
 * a single subscriber notification to the UI after the sequence of actions
 * is finished, thus improving UI re-render performance.
 *
 * Watches for actions with the `action.meta[SHOULD_AUTOBATCH]` attribute.
 * This can be added to `action.meta` manually, or by using the
 * `prepareAutoBatched` helper.
 *
 * By default, it will queue a notification for the end of the event loop tick.
 * However, you can pass several other options to configure the behavior:
 * - `{type: 'tick'}`: queues using `queueMicrotask`
 * - `{type: 'timer', timeout: number}`: queues using `setTimeout`
 * - `{type: 'raf'}`: queues using `requestAnimationFrame` (default)
 * - `{type: 'callback', queueNotification: (notify: () => void) => void}`: lets you provide your own callback
 *
 *
 */
export const autoBatchEnhancer =
  (options: AutoBatchOptions = { type: 'raf' }): StoreEnhancer =>
  (next) =>
  (...args) => {
    const store = next(...args)

    let notifying = true
    let shouldNotifyAtEndOfTick = false
    let notificationQueued = false

    const listeners = new Set<() => void>()

    const queueCallback =
      options.type === 'tick'
        ? queueMicrotask
        : options.type === 'raf'
          ? // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
            typeof window !== 'undefined' && window.requestAnimationFrame
            ? window.requestAnimationFrame
            : createQueueWithTimer(10)
          : options.type === 'callback'
            ? options.queueNotification
            : createQueueWithTimer(options.timeout)

    const notifyListeners = () => {
      // We're running at the end of the event loop tick.
      // Run the real listener callbacks to actually update the UI.
      notificationQueued = false
      if (shouldNotifyAtEndOfTick) {
        shouldNotifyAtEndOfTick = false
        listeners.forEach((l) => l())
      }
    }

    return Object.assign({}, store, {
      // Override the base `store.subscribe` method to keep original listeners
      // from running if we're delaying notifications
      subscribe(listener: () => void) {
        // Each wrapped listener will only call the real listener if
        // the `notifying` flag is currently active when it's called.
        // This lets the base store work as normal, while the actual UI
        // update becomes controlled by this enhancer.
        const wrappedListener: typeof listener = () => notifying && listener()
        const unsubscribe = store.subscribe(wrappedListener)
        listeners.add(listener)
        return () => {
          unsubscribe()
          listeners.delete(listener)
        }
      },
      // Override the base `store.dispatch` method so that we can check actions
      // for the `shouldAutoBatch` flag and determine if batching is active
      dispatch(action: any) {
        try {
          // If the action does _not_ have the `shouldAutoBatch` flag,
          // we resume/continue normal notify-after-each-dispatch behavior
          notifying = !action?.meta?.[SHOULD_AUTOBATCH]
          // If a `notifyListeners` microtask was queued, you can't cancel it.
          // Instead, we set a flag so that it's a no-op when it does run
          shouldNotifyAtEndOfTick = !notifying
          if (shouldNotifyAtEndOfTick) {
            // We've seen at least 1 action with `SHOULD_AUTOBATCH`. Try to queue
            // a microtask to notify listeners at the end of the event loop tick.
            // Make sure we only enqueue this _once_ per tick.
            if (!notificationQueued) {
              notificationQueued = true
              queueCallback(notifyListeners)
            }
          }
          // Go ahead and process the action as usual, including reducers.
          // If normal notification behavior is enabled, the store will notify
          // all of its own listeners, and the wrapper callbacks above will
          // see `notifying` is true and pass on to the real listener callbacks.
          // If we're "batching" behavior, then the wrapped callbacks will
          // bail out, causing the base store notification behavior to be no-ops.
          return store.dispatch(action)
        } finally {
          // Assume we're back to normal behavior after each action
          notifying = true
        }
      },
    })
  }
