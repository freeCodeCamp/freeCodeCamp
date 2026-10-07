// TypeScript Version: 4.2

import { Saga, Buffer, Channel, END as EndType, Predicate, SagaIterator, Task, NotUndefined } from '@redux-saga/types'
import { ForkEffect } from './effects'

export { Saga, SagaIterator, Buffer, Channel, Task }

export type Action<T extends string = string> = {
  type: T
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

export interface UnknownAction extends Action {
  [extraProps: string]: unknown
}

interface Dispatch<A extends Action = UnknownAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T
}

interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
  dispatch: D
  getState(): S
}

export interface Middleware<_DispatchExt = {}, S = any, D extends Dispatch = Dispatch> {
  (api: MiddlewareAPI<D, S>): (next: (action: never) => unknown) => (action: unknown) => unknown
}

/**
 * Used by the middleware to dispatch monitoring events. Actually the middleware
 * dispatches 6 events:
 *
 * - When a root saga is started (via `runSaga` or `sagaMiddleware.run`) the
 *   middleware invokes `sagaMonitor.rootSagaStarted`
 *
 * - When an effect is triggered (via `yield someEffect`) the middleware invokes
 *   `sagaMonitor.effectTriggered`
 *
 * - If the effect is resolved with success the middleware invokes
 *   `sagaMonitor.effectResolved`
 *
 * - If the effect is rejected with an error the middleware invokes
 *   `sagaMonitor.effectRejected`
 *
 * - If the effect is cancelled the middleware invokes
 *   `sagaMonitor.effectCancelled`
 *
 * - Finally, the middleware invokes `sagaMonitor.actionDispatched` when a Redux
 *   action is dispatched.
 */
export interface SagaMonitor {
  /**
   * @param effectId Unique ID assigned to this root saga execution
   * @param saga The generator function that starts to run
   * @param args The arguments passed to the generator function
   */
  rootSagaStarted?(options: { effectId: number; saga: Saga; args: any[] }): void
  /**
   * @param effectId Unique ID assigned to the yielded effect
   * @param parentEffectId ID of the parent Effect. In the case of a `race` or
   *   `parallel` effect, all effects yielded inside will have the direct
   *   race/parallel effect as a parent. In case of a top-level effect, the
   *   parent will be the containing Saga
   * @param label In case of a `race`/`all` effect, all child effects will be
   *   assigned as label the corresponding keys of the object passed to
   *   `race`/`all`
   * @param effect The yielded effect itself
   */
  effectTriggered?(options: { effectId: number; parentEffectId: number; label?: string; effect: any }): void
  /**
   * @param effectId The ID of the yielded effect
   * @param result The result of the successful resolution of the effect. In
   *   case of `fork` or `spawn` effects, the result will be a `Task` object.
   */
  effectResolved?(effectId: number, result: any): void
  /**
   * @param effectId The ID of the yielded effect
   * @param error Error raised with the rejection of the effect
   */
  effectRejected?(effectId: number, error: any): void
  /**
   * @param effectId The ID of the yielded effect
   */
  effectCancelled?(effectId: number): void
  /**
   * @param action The dispatched Redux action. If the action was dispatched by
   * a Saga then the action will have a property `SAGA_ACTION` set to true
   * (`SAGA_ACTION` can be imported from `@redux-saga/symbols`).
   */
  actionDispatched?(action: Action): void
}

/**
 * Creates a Redux middleware and connects the Sagas to the Redux Store
 *
 * #### Example
 *
 * Below we will create a function `configureStore` which will enhance the Store
 * with a new method `runSaga`. Then in our main module, we will use the method
 * to start the root Saga of the application.
 *
 * **configureStore.js**
 *
 *    import createSagaMiddleware from 'redux-saga'
 *    import reducer from './path/to/reducer'
 *
 *    export default function configureStore(initialState) {
 *      // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
 *      const sagaMiddleware = createSagaMiddleware()
 *      return {
 *        ...createStore(reducer, initialState, applyMiddleware(... other middleware ..., sagaMiddleware)),
 *        runSaga: sagaMiddleware.run
 *      }
 *    }
 *
 * **main.js**
 *
 *    import configureStore from './configureStore'
 *    import rootSaga from './sagas'
 *    // ... other imports
 *
 *    const store = configureStore()
 *    store.runSaga(rootSaga)
 *
 * @param options A list of options to pass to the middleware
 */
export default function createSagaMiddleware<C extends object>(options?: SagaMiddlewareOptions<C>): SagaMiddleware<C>

export interface SagaMiddlewareOptions<C extends object = {}> {
  /**
   * Initial value of the saga's context.
   */
  context?: C
  /**
   * If a Saga Monitor is provided, the middleware will deliver monitoring
   * events to the monitor.
   */
  sagaMonitor?: SagaMonitor
  /**
   * If provided, the middleware will call it with uncaught errors from Sagas.
   * useful for sending uncaught exceptions to error tracking services.
   */
  onError?(error: Error, errorInfo: ErrorInfo): void
  /**
   * Allows you to intercept any effect, resolve it on your own and pass to the
   * next middleware.
   */
  effectMiddlewares?: EffectMiddleware[]
  /**
   * If provided, the middleware will use this channel instead of the default `stdChannel` for
   * take and put effects.
   */
  channel?: MulticastChannel<Action>
}

export interface SagaMiddleware<C extends object = {}> extends Middleware {
  /**
   * Dynamically run `saga`. Can be used to run Sagas **only after** the
   * `applyMiddleware` phase.
   *
   * The method returns a `Task` descriptor.
   *
   * #### Notes
   *
   * `saga` must be a function which returns a [Generator
   * Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
   * The middleware will then iterate over the Generator and execute all yielded
   * Effects.
   *
   * `saga` may also start other sagas using the various Effects provided by the
   * library. The iteration process described below is also applied to all child
   * sagas.
   *
   * In the first iteration, the middleware invokes the `next()` method to
   * retrieve the next Effect. The middleware then executes the yielded Effect
   * as specified by the Effects API below. Meanwhile, the Generator will be
   * suspended until the effect execution terminates. Upon receiving the result
   * of the execution, the middleware calls `next(result)` on the Generator
   * passing it the retrieved result as an argument. This process is repeated
   * until the Generator terminates normally or by throwing some error.
   *
   * If the execution results in an error (as specified by each Effect creator)
   * then the `throw(error)` method of the Generator is called instead. If the
   * Generator function defines a `try/catch` surrounding the current yield
   * instruction, then the `catch` block will be invoked by the underlying
   * Generator runtime. The runtime will also invoke any corresponding finally
   * block.
   *
   * In the case a Saga is cancelled (either manually or using the provided
   * Effects), the middleware will invoke `return()` method of the Generator.
   * This will cause the Generator to skip directly to the finally block.
   *
   * @param saga a Generator function
   * @param args arguments to be provided to `saga`
   */
  run<S extends Saga>(saga: S, ...args: Parameters<S>): Task

  setContext(props: Partial<C>): void
}

export interface EffectMiddleware {
  (next: (effect: any) => void): (effect: any) => void
}

/**
 * Allows starting sagas outside the Redux middleware environment. Useful if you
 * want to connect a Saga to external input/output, other than store actions.
 *
 * `runSaga` returns a Task object. Just like the one returned from a `fork`
 * effect.
 */
export function runSaga<Action, State, S extends Saga>(
  options: RunSagaOptions<Action, State>,
  saga: S,
  ...args: Parameters<S>
): Task

interface ErrorInfo {
  sagaStack: string
}

/**
 * The `{subscribe, dispatch}` is used to fulfill `take` and `put` Effects. This
 * defines the Input/Output interface of the Saga.
 *
 * `subscribe` is used to fulfill `take(PATTERN)` effects. It must call
 * `callback` every time it has an input to dispatch (e.g. on every mouse click
 * if the Saga is connected to DOM click events). Each time `subscribe` emits an
 * input to its callbacks, if the Saga is blocked on a `take` effect, and if the
 * take pattern matches the currently incoming input, the Saga is resumed with
 * that input.
 *
 * `dispatch` is used to fulfill `put` effects. Each time the Saga emits a
 * `yield put(output)`, `dispatch` is invoked with output.
 */
export interface RunSagaOptions<A, S> {
  /**
   * See docs for `channel`
   */
  channel?: PredicateTakeableChannel<A>
  /**
   * Used to fulfill `put` effects.
   *
   * @param output argument provided by the Saga to the `put` Effect
   */
  dispatch?(output: A): any
  /**
   * Used to fulfill `select` and `getState` effects
   */
  getState?(): S
  /**
   * See docs for `createSagaMiddleware(options)`
   */
  sagaMonitor?: SagaMonitor
  /**
   * See docs for `createSagaMiddleware(options)`
   */
  onError?(error: Error, errorInfo: ErrorInfo): void
  /**
   * See docs for `createSagaMiddleware(options)`
   */
  context?: object
  /**
   * See docs for `createSagaMiddleware(options)`
   */
  effectMiddlewares?: EffectMiddleware[]
}

export const CANCEL: string
export const END: EndType
export type END = EndType

export interface TakeableChannel<T> {
  take(cb: (message: T | END) => void): void
}

export interface PuttableChannel<T> {
  put(message: T | END): void
}

export interface FlushableChannel<T> {
  flush(cb: (items: T[] | END) => void): void
}

/**
 * A factory method that can be used to create Channels. You can optionally pass
 * it a buffer to control how the channel buffers the messages.
 *
 * By default, if no buffer is provided, the channel will queue incoming
 * messages up to 10 until interested takers are registered. The default
 * buffering will deliver message using a FIFO strategy: a new taker will be
 * delivered the oldest message in the buffer.
 */
export function channel<T extends NotUndefined>(buffer?: Buffer<T>): Channel<T>

/**
 * Creates channel that will subscribe to an event source using the `subscribe`
 * method. Incoming events from the event source will be queued in the channel
 * until interested takers are registered.
 *
 * To notify the channel that the event source has terminated, you can notify
 * the provided subscriber with an `END`
 *
 * #### Example
 *
 * In the following example we create an event channel that will subscribe to a
 * `setInterval`
 *
 *    const countdown = (secs) => {
 *      return eventChannel(emitter => {
 *          const iv = setInterval(() => {
 *            console.log('countdown', secs)
 *            secs -= 1
 *            if (secs > 0) {
 *              emitter(secs)
 *            } else {
 *              emitter(END)
 *              clearInterval(iv)
 *              console.log('countdown terminated')
 *            }
 *          }, 1000);
 *          return () => {
 *            clearInterval(iv)
 *            console.log('countdown cancelled')
 *          }
 *        }
 *      )
 *    }
 *
 * @param subscribe used to subscribe to the underlying event source. The
 *   function must return an unsubscribe function to terminate the subscription.
 * @param buffer optional Buffer object to buffer messages on this channel. If
 *   not provided, messages will not be buffered on this channel.
 */
export function eventChannel<T extends NotUndefined>(subscribe: Subscribe<T>, buffer?: Buffer<T>): EventChannel<T>

export type Subscribe<T> = (cb: (input: T | END) => void) => Unsubscribe
export type Unsubscribe = () => void

export interface EventChannel<T extends NotUndefined> {
  take(cb: (message: T | END) => void): void
  flush(cb: (items: T[] | END) => void): void
  close(): void
}

export interface PredicateTakeableChannel<T> {
  take(cb: (message: T | END) => void, matcher?: Predicate<T>): void
}

export interface MulticastChannel<T extends NotUndefined> {
  take(cb: (message: T | END) => void, matcher?: Predicate<T>): void
  put(message: T | END): void
  close(): void
}

export function multicastChannel<T extends NotUndefined>(): MulticastChannel<T>
export function stdChannel<T extends NotUndefined>(): MulticastChannel<T>

export function detach(forkEffect: ForkEffect): ForkEffect

/**
 * Provides some common buffers
 */
export const buffers: {
  /**
   * No buffering, new messages will be lost if there are no pending takers
   */
  none<T>(): Buffer<T>
  /**
   * New messages will be buffered up to `limit`. Overflow will raise an Error.
   * Omitting a `limit` value will result in a limit of 10.
   */
  fixed<T>(limit?: number): Buffer<T>
  /**
   * Like `fixed` but Overflow will cause the buffer to expand dynamically.
   */
  expanding<T>(limit?: number): Buffer<T>
  /**
   * Same as `fixed` but Overflow will silently drop the messages.
   */
  dropping<T>(limit?: number): Buffer<T>
  /**
   * Same as `fixed` but Overflow will insert the new message at the end and
   * drop the oldest message in the buffer.
   */
  sliding<T>(limit?: number): Buffer<T>
}
