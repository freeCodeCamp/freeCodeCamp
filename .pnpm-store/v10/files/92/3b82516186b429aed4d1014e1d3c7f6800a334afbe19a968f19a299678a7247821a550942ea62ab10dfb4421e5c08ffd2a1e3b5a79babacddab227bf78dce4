import { Last, Reverse } from 'typescript-tuple'

import {
  ActionPattern,
  Effect,
  Buffer,
  CombinatorEffect,
  CombinatorEffectDescriptor,
  SimpleEffect,
  END,
  Pattern,
  Predicate,
  Task,
  StrictEffect,
  ActionMatchingPattern,
  SagaIterator,
} from '@redux-saga/types'

import { FlushableChannel, PuttableChannel, TakeableChannel, Action, AnyAction } from './index'

export { ActionPattern, Effect, Pattern, SimpleEffect, StrictEffect }

export const effectTypes: {
  TAKE: 'TAKE'
  PUT: 'PUT'
  ALL: 'ALL'
  RACE: 'RACE'
  CALL: 'CALL'
  CPS: 'CPS'
  FORK: 'FORK'
  JOIN: 'JOIN'
  CANCEL: 'CANCEL'
  SELECT: 'SELECT'
  ACTION_CHANNEL: 'ACTION_CHANNEL'
  CANCELLED: 'CANCELLED'
  FLUSH: 'FLUSH'
  GET_CONTEXT: 'GET_CONTEXT'
  SET_CONTEXT: 'SET_CONTEXT'
}

/**
 * Creates an Effect description that instructs the middleware to wait for a
 * specified action on the Store. The Generator is suspended until an action
 * that matches `pattern` is dispatched.
 *
 * The result of `yield take(pattern)` is an action object being dispatched.
 *
 * `pattern` is interpreted using the following rules:
 *
 * - If `take` is called with no arguments or `'*'` all dispatched actions are
 *   matched (e.g. `take()` will match all actions)
 *
 * - If it is a function, the action is matched if `pattern(action)` is true
 *   (e.g. `take(action => action.entities)` will match all actions having a
 *   (truthy) `entities` field.)
 * > Note: if the pattern function has `toString` defined on it, `action.type`
 * > will be tested against `pattern.toString()` instead. This is useful if
 * > you're using an action creator library like redux-act or redux-actions.
 *
 * - If it is a String, the action is matched if `action.type === pattern` (e.g.
 *   `take(INCREMENT_ASYNC)`
 *
 * - If it is an array, each item in the array is matched with aforementioned
 *   rules, so the mixed array of strings and function predicates is supported.
 *   The most common use case is an array of strings though, so that
 *   `action.type` is matched against all items in the array (e.g.
 *   `take([INCREMENT, DECREMENT])` and that would match either actions of type
 *   `INCREMENT` or `DECREMENT`).
 *
 * The middleware provides a special action `END`. If you dispatch the END
 * action, then all Sagas blocked on a take Effect will be terminated regardless
 * of the specified pattern. If the terminated Saga has still some forked tasks
 * which are still running, it will wait for all the child tasks to terminate
 * before terminating the Task.
 */
export function take(pattern?: ActionPattern): TakeEffect
export function take<A extends Action>(pattern?: ActionPattern<A>): TakeEffect

/**
 * Same as `take(pattern)` but does not automatically terminate the Saga on an
 * `END` action. Instead all Sagas blocked on a take Effect will get the `END`
 * object.
 *
 * #### Notes
 *
 * `takeMaybe` got its name from the FP analogy - it's like instead of having a
 * return type of `ACTION` (with automatic handling) we can have a type of
 * `Maybe(ACTION)` so we can handle both cases:
 *
 * - case when there is a `Just(ACTION)` (we have an action)
 * - the case of `NOTHING` (channel was closed*). i.e. we need some way to map
 *   over `END`
 *
 * internally all `dispatch`ed actions are going through the `stdChannel` which
 * is getting closed when `dispatch(END)` happens
 */
export function takeMaybe(pattern?: ActionPattern): TakeEffect
export function takeMaybe<A extends Action>(pattern?: ActionPattern<A>): TakeEffect

export type TakeEffect = SimpleEffect<'TAKE', TakeEffectDescriptor>

export interface TakeEffectDescriptor {
  pattern: ActionPattern
  maybe?: boolean
}

/**
 * Creates an Effect description that instructs the middleware to wait for a
 * specified message from the provided Channel. If the channel is already
 * closed, then the Generator will immediately terminate following the same
 * process described above for `take(pattern)`.
 */
export function take<T>(channel: TakeableChannel<T>, multicastPattern?: Pattern<T>): ChannelTakeEffect<T>

/**
 * Same as `take(channel)` but does not automatically terminate the Saga on an
 * `END` action. Instead all Sagas blocked on a take Effect will get the `END`
 * object.
 */
export function takeMaybe<T>(channel: TakeableChannel<T>, multicastPattern?: Pattern<T>): ChannelTakeEffect<T>

export type ChannelTakeEffect<T> = SimpleEffect<'TAKE', ChannelTakeEffectDescriptor<T>>

export interface ChannelTakeEffectDescriptor<T> {
  channel: TakeableChannel<T>
  pattern?: Pattern<T>
  maybe?: boolean
}

/**
 * Spawns a `saga` on each action dispatched to the Store that matches
 * `pattern`.
 *
 * #### Example
 *
 * In the following example, we create a basic task `fetchUser`. We use
 * `takeEvery` to start a new `fetchUser` task on each dispatched
 * `USER_REQUESTED` action:
 *
 *    import { takeEvery } from `redux-saga/effects`
 *
 *    function* fetchUser(action) {
 *      ...
 *    }
 *
 *    function* watchFetchUser() {
 *      yield takeEvery('USER_REQUESTED', fetchUser)
 *    }
 *
 * #### Notes
 *
 * `takeEvery` is a high-level API built using `take` and `fork`. Here is how
 * the helper could be implemented using the low-level Effects
 *
 *    const takeEvery = (patternOrChannel, saga, ...args) => fork(function*() {
 *      while (true) {
 *        const action = yield take(patternOrChannel)
 *        yield fork(saga, ...args.concat(action))
 *      }
 *    })
 *
 * `takeEvery` allows concurrent actions to be handled. In the example above,
 * when a `USER_REQUESTED` action is dispatched, a new `fetchUser` task is
 * started even if a previous `fetchUser` is still pending (for example, the
 * user clicks on a `Load User` button 2 consecutive times at a rapid rate, the
 * 2nd click will dispatch a `USER_REQUESTED` action while the `fetchUser` fired
 * on the first one hasn't yet terminated)
 *
 * `takeEvery` doesn't handle out of order responses from tasks. There is no
 * guarantee that the tasks will terminate in the same order they were started.
 * To handle out of order responses, you may consider `takeLatest` below.
 *
 * @param pattern for more information see docs for `take(pattern)`
 * @param saga a Generator function
 * @param args arguments to be passed to the started task. `takeEvery` will add
 *   the incoming action to the argument list (i.e. the action will be the last
 *   argument provided to `saga`)
 */
export function takeEvery<P extends ActionPattern>(
  pattern: P,
  worker: (action: ActionMatchingPattern<P>) => any,
): ForkEffect<never>
export function takeEvery<P extends ActionPattern, Fn extends (...args: any[]) => any>(
  pattern: P,
  worker: Fn,
  ...args: HelperWorkerParameters<ActionMatchingPattern<P>, Fn>
): ForkEffect<never>
export function takeEvery<A extends Action>(pattern: ActionPattern<A>, worker: (action: A) => any): ForkEffect<never>
export function takeEvery<A extends Action, Fn extends (...args: any[]) => any>(
  pattern: ActionPattern<A>,
  worker: Fn,
  ...args: HelperWorkerParameters<A, Fn>
): ForkEffect<never>

/**
 * You can also pass in a channel as argument and the behaviour is the same as
 * `takeEvery(pattern, saga, ...args)`.
 */
export function takeEvery<T>(channel: TakeableChannel<T>, worker: (item: T) => any): ForkEffect<never>
export function takeEvery<T, Fn extends (...args: any[]) => any>(
  channel: TakeableChannel<T>,
  worker: Fn,
  ...args: HelperWorkerParameters<T, Fn>
): ForkEffect<never>

/**
 * Spawns a `saga` on each action dispatched to the Store that matches
 * `pattern`. And automatically cancels any previous `saga` task started
 * previously if it's still running.
 *
 * Each time an action is dispatched to the store. And if this action matches
 * `pattern`, `takeLatest` starts a new `saga` task in the background. If a
 * `saga` task was started previously (on the last action dispatched before the
 * actual action), and if this task is still running, the task will be
 * cancelled.
 *
 * #### Example
 *
 * In the following example, we create a basic task `fetchUser`. We use
 * `takeLatest` to start a new `fetchUser` task on each dispatched
 * `USER_REQUESTED` action. Since `takeLatest` cancels any pending task started
 * previously, we ensure that if a user triggers multiple consecutive
 * `USER_REQUESTED` actions rapidly, we'll only conclude with the latest action
 *
 *    import { takeLatest } from `redux-saga/effects`
 *
 *    function* fetchUser(action) {
 *      ...
 *    }
 *
 *    function* watchLastFetchUser() {
 *      yield takeLatest('USER_REQUESTED', fetchUser)
 *    }
 *
 * #### Notes
 *
 * `takeLatest` is a high-level API built using `take` and `fork`. Here is how
 * the helper could be implemented using the low-level Effects
 *
 *    const takeLatest = (patternOrChannel, saga, ...args) => fork(function*() {
 *      let lastTask
 *      while (true) {
 *        const action = yield take(patternOrChannel)
 *        if (lastTask) {
 *          yield cancel(lastTask) // cancel is no-op if the task has already terminated
 *        }
 *        lastTask = yield fork(saga, ...args.concat(action))
 *      }
 *    })
 *
 * @param pattern for more information see docs for [`take(pattern)`](#takepattern)
 * @param saga a Generator function
 * @param args arguments to be passed to the started task. `takeLatest` will add
 *   the incoming action to the argument list (i.e. the action will be the last
 *   argument provided to `saga`)
 */
export function takeLatest<P extends ActionPattern>(
  pattern: P,
  worker: (action: ActionMatchingPattern<P>) => any,
): ForkEffect<never>
export function takeLatest<P extends ActionPattern, Fn extends (...args: any[]) => any>(
  pattern: P,
  worker: Fn,
  ...args: HelperWorkerParameters<ActionMatchingPattern<P>, Fn>
): ForkEffect<never>
export function takeLatest<A extends Action>(pattern: ActionPattern<A>, worker: (action: A) => any): ForkEffect<never>
export function takeLatest<A extends Action, Fn extends (...args: any[]) => any>(
  pattern: ActionPattern<A>,
  worker: Fn,
  ...args: HelperWorkerParameters<A, Fn>
): ForkEffect<never>

/**
 * You can also pass in a channel as argument and the behaviour is the same as
 * `takeLatest(pattern, saga, ...args)`.
 */
export function takeLatest<T>(channel: TakeableChannel<T>, worker: (item: T) => any): ForkEffect<never>
export function takeLatest<T, Fn extends (...args: any[]) => any>(
  channel: TakeableChannel<T>,
  worker: Fn,
  ...args: HelperWorkerParameters<T, Fn>
): ForkEffect<never>

/**
 * Spawns a `saga` on each action dispatched to the Store that matches
 * `pattern`. After spawning a task once, it blocks until spawned saga completes
 * and then starts to listen for a `pattern` again.
 *
 * In short, `takeLeading` is listening for the actions when it doesn't run a
 * saga.
 *
 * #### Example
 *
 * In the following example, we create a basic task `fetchUser`. We use
 * `takeLeading` to start a new `fetchUser` task on each dispatched
 * `USER_REQUESTED` action. Since `takeLeading` ignores any new coming task
 * after it's started, we ensure that if a user triggers multiple consecutive
 * `USER_REQUESTED` actions rapidly, we'll only keep on running with the leading
 * action
 *
 *    import { takeLeading } from `redux-saga/effects`
 *
 *    function* fetchUser(action) {
 *      ...
 *    }
 *
 *    function* watchLastFetchUser() {
 *      yield takeLeading('USER_REQUESTED', fetchUser)
 *    }
 *
 * #### Notes
 *
 * `takeLeading` is a high-level API built using `take` and `call`. Here is how
 * the helper could be implemented using the low-level Effects
 *
 *    const takeLeading = (patternOrChannel, saga, ...args) => fork(function*() {
 *      while (true) {
 *        const action = yield take(patternOrChannel);
 *        yield call(saga, ...args.concat(action));
 *      }
 *    })
 *
 * @param pattern for more information see docs for [`take(pattern)`](#takepattern)
 * @param saga a Generator function
 * @param args arguments to be passed to the started task. `takeLeading` will
 *   add the incoming action to the argument list (i.e. the action will be the
 *   last argument provided to `saga`)
 */
export function takeLeading<P extends ActionPattern>(
  pattern: P,
  worker: (action: ActionMatchingPattern<P>) => any,
): ForkEffect<never>
export function takeLeading<P extends ActionPattern, Fn extends (...args: any[]) => any>(
  pattern: P,
  worker: Fn,
  ...args: HelperWorkerParameters<ActionMatchingPattern<P>, Fn>
): ForkEffect<never>
export function takeLeading<A extends Action>(pattern: ActionPattern<A>, worker: (action: A) => any): ForkEffect<never>
export function takeLeading<A extends Action, Fn extends (...args: any[]) => any>(
  pattern: ActionPattern<A>,
  worker: Fn,
  ...args: HelperWorkerParameters<A, Fn>
): ForkEffect<never>

/**
 * You can also pass in a channel as argument and the behaviour is the same as
 * `takeLeading(pattern, saga, ...args)`.
 */
export function takeLeading<T>(channel: TakeableChannel<T>, worker: (item: T) => any): ForkEffect<never>
export function takeLeading<T, Fn extends (...args: any[]) => any>(
  channel: TakeableChannel<T>,
  worker: Fn,
  ...args: HelperWorkerParameters<T, Fn>
): ForkEffect<never>

export type HelperWorkerParameters<T, Fn extends (...args: any[]) => any> = Last<Parameters<Fn>> extends T
  ? AllButLast<Parameters<Fn>>
  : Parameters<Fn>

interface ThunkDispatch<State, ExtraThunkArg, BasicAction extends Action> {
  <ReturnType>(thunkAction: ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>): ReturnType
  <Action extends BasicAction>(action: Action): Action
  <ReturnType, Action extends BasicAction>(
    action: Action | ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>,
  ): Action | ReturnType
}

export type ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction extends Action> = (
  dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>,
  getState: () => State,
  extraArgument: ExtraThunkArg,
) => ReturnType

/**
 * Creates an Effect description that instructs the middleware to dispatch an
 * action to the Store. This effect is non-blocking, any errors that are
 * thrown downstream (e.g. in a reducer) will bubble back into the saga.
 *
 * @param action [see Redux `dispatch` documentation for complete info](https://redux.js.org/api/store#dispatchaction)
 */
export function put<A extends Action>(action: A): PutEffect<A>
export function put<ReturnType = any, State = any, ExtraThunkArg = any, BasicAction extends Action = Action>(
  action: ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>,
): PutEffect<BasicAction>

/**
 * Just like `put` but the effect is blocking (if promise is returned from
 * `dispatch` it will wait for its resolution) and will bubble up errors from
 * downstream.
 *
 * @param action [see Redux `dispatch` documentation for complete info](https://redux.js.org/api/store#dispatchaction)
 */
export function putResolve<A extends Action>(action: A): PutEffect<A>
export function putResolve<ReturnType = any, State = any, ExtraThunkArg = any, BasicAction extends Action = Action>(
  action: ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>,
): PutEffect<BasicAction>

export type PutEffect<A extends Action = AnyAction> = SimpleEffect<'PUT', PutEffectDescriptor<A>>

export interface PutEffectDescriptor<A extends Action> {
  action: A
  channel: null
  resolve?: boolean
}

/**
 * Creates an Effect description that instructs the middleware to put an action
 * into the provided channel.
 *
 * This effect is blocking if the put is *not* buffered but immediately consumed
 * by takers. If an error is thrown in any of these takers it will bubble back
 * into the saga.
 *
 * @param channel a `Channel` Object.
 * @param action [see Redux `dispatch` documentation for complete info](https://redux.js.org/api/store#dispatchaction)
 */
export function put<T>(channel: PuttableChannel<T>, action: T | END): ChannelPutEffect<T>

export type ChannelPutEffect<T> = SimpleEffect<'PUT', ChannelPutEffectDescriptor<T>>

export interface ChannelPutEffectDescriptor<T> {
  action: T
  channel: PuttableChannel<T>
}

/**
 * Creates an Effect description that instructs the middleware to call the
 * function `fn` with `args` as arguments.
 *
 * #### Notes
 *
 * `fn` can be either a *normal* or a Generator function.
 *
 * The middleware invokes the function and examines its result.
 *
 * If the result is an Iterator object, the middleware will run that Generator
 * function, just like it did with the startup Generators (passed to the
 * middleware on startup). The parent Generator will be suspended until the
 * child Generator terminates normally, in which case the parent Generator is
 * resumed with the value returned by the child Generator. Or until the child
 * aborts with some error, in which case an error will be thrown inside the
 * parent Generator.
 *
 * If `fn` is a normal function and returns a Promise, the middleware will
 * suspend the Generator until the Promise is settled. After the promise is
 * resolved the Generator is resumed with the resolved value, or if the Promise
 * is rejected an error is thrown inside the Generator.
 *
 * If the result is not an Iterator object nor a Promise, the middleware will
 * immediately return that value back to the saga, so that it can resume its
 * execution synchronously.
 *
 * When an error is thrown inside the Generator, if it has a `try/catch` block
 * surrounding the current `yield` instruction, the control will be passed to
 * the `catch` block. Otherwise, the Generator aborts with the raised error, and
 * if this Generator was called by another Generator, the error will propagate
 * to the calling Generator.
 *
 * @param fn A Generator function, or normal function which either returns a
 *   Promise as result, or any other value.
 * @param args An array of values to be passed as arguments to `fn`
 */
export function call<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): CallEffect<SagaReturnType<Fn>>
/**
 * Same as `call([context, fn], ...args)` but supports passing a `fn` as string.
 * Useful for invoking object's methods, i.e.
 * `yield call([localStorage, 'getItem'], 'redux-saga')`
 */
export function call<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any }, Name extends string>(
  ctxAndFnName: [Ctx, Name],
  ...args: Parameters<Ctx[Name]>
): CallEffect<SagaReturnType<Ctx[Name]>>
/**
 * Same as `call([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield call({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function call<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any }, Name extends string>(
  ctxAndFnName: { context: Ctx; fn: Name },
  ...args: Parameters<Ctx[Name]>
): CallEffect<SagaReturnType<Ctx[Name]>>
/**
 * Same as `call(fn, ...args)` but supports passing a `this` context to `fn`.
 * This is useful to invoke object methods.
 */
export function call<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
  ctxAndFn: [Ctx, Fn],
  ...args: Parameters<Fn>
): CallEffect<SagaReturnType<Fn>>
/**
 * Same as `call([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield call({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function call<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
  ctxAndFn: { context: Ctx; fn: Fn },
  ...args: Parameters<Fn>
): CallEffect<SagaReturnType<Fn>>

export type CallEffect<RT = any> = SimpleEffect<'CALL', CallEffectDescriptor<RT>>

export interface CallEffectDescriptor<RT> {
  context: any
  fn: (...args: any[]) => SagaIterator<RT> | Promise<RT> | RT
  args: any[]
}

export type SagaReturnType<S extends Function> = S extends (...args: any[]) => SagaIterator<infer RT>
  ? RT
  : S extends (...args: any[]) => Promise<infer RT>
  ? RT
  : S extends (...args: any[]) => infer RT
  ? RT
  : never

/**
 * Alias for `call([context, fn], ...args)`.
 */
export function apply<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any }, Name extends string>(
  ctx: Ctx,
  fnName: Name,
  args: Parameters<Ctx[Name]>,
): CallEffect<SagaReturnType<Ctx[Name]>>
export function apply<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
  ctx: Ctx,
  fn: Fn,
  args: Parameters<Fn>,
): CallEffect<SagaReturnType<Fn>>

type Cast<A, B> = A extends B ? A : B
type AnyFunction = (...args: any[]) => any

type RequireCpsCallback<Fn extends (...args: any[]) => any> = Last<Parameters<Fn>> extends CpsCallback<any> ? Fn : never
type RequireCpsNamedCallback<Ctx, Name extends keyof Ctx> = Last<
  Parameters<Cast<Ctx[Name], AnyFunction>>
> extends CpsCallback<any>
  ? Name
  : never

/**
 * Creates an Effect description that instructs the middleware to invoke `fn` as
 * a Node style function.
 *
 * @param fn a Node style function. i.e. a function which accepts in addition to
 *   its arguments, an additional callback to be invoked by `fn` when it
 *   terminates. The callback accepts two parameters, where the first parameter
 *   is used to report errors while the second is used to report successful
 *   results
 * @param args an array to be passed as arguments for `fn`
 */
export function cps<Fn extends (cb: CpsCallback<any>) => any>(fn: Fn): CpsEffect<ReturnType<Fn>>
export function cps<Fn extends (...args: any[]) => any>(
  fn: RequireCpsCallback<Fn>,
  ...args: AllButLast<Parameters<Fn>>
): CpsEffect<ReturnType<Fn>>
/**
 * Same as `cps([context, fn], ...args)` but supports passing a `fn` as string.
 * Useful for invoking object's methods, i.e.
 * `yield cps([localStorage, 'getItem'], 'redux-saga')`
 */
export function cps<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => void }, Name extends string>(
  ctxAndFnName: [Ctx, RequireCpsNamedCallback<Ctx, Name>],
  ...args: AllButLast<Parameters<Ctx[Name]>>
): CpsEffect<ReturnType<Ctx[Name]>>
/**
 * Same as `cps([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield cps({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function cps<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => void }, Name extends string>(
  ctxAndFnName: { context: Ctx; fn: RequireCpsNamedCallback<Ctx, Name> },
  ...args: AllButLast<Parameters<Ctx[Name]>>
): CpsEffect<ReturnType<Ctx[Name]>>
/**
 * Same as `cps(fn, ...args)` but supports passing a `this` context to `fn`.
 * This is useful to invoke object methods.
 */
export function cps<Ctx, Fn extends (this: Ctx, ...args: any[]) => void>(
  ctxAndFn: [Ctx, RequireCpsCallback<Fn>],
  ...args: AllButLast<Parameters<Fn>>
): CpsEffect<ReturnType<Fn>>
/**
 * Same as `cps([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield cps({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function cps<Ctx, Fn extends (this: Ctx, ...args: any[]) => void>(
  ctxAndFn: { context: Ctx; fn: RequireCpsCallback<Fn> },
  ...args: AllButLast<Parameters<Fn>>
): CpsEffect<ReturnType<Fn>>

export type CpsFunctionParameters<Fn extends (...args: any[]) => any> = Last<Parameters<Fn>> extends CpsCallback<any>
  ? AllButLast<Parameters<Fn>>
  : never

export interface CpsCallback<R> {
  (error: any, result: R): void
  cancel?(): void
}

export type CpsEffect<RT> = SimpleEffect<'CPS', CallEffectDescriptor<RT>>

/**
 * Creates an Effect description that instructs the middleware to perform a
 * *non-blocking call* on `fn`
 *
 * returns a `Task` object.
 *
 * #### Note
 *
 * `fork`, like `call`, can be used to invoke both normal and Generator
 * functions. But, the calls are non-blocking, the middleware doesn't suspend
 * the Generator while waiting for the result of `fn`. Instead as soon as `fn`
 * is invoked, the Generator resumes immediately.
 *
 * `fork`, alongside `race`, is a central Effect for managing concurrency
 * between Sagas.
 *
 * The result of `yield fork(fn ...args)` is a `Task` object.  An object
 * with some useful methods and properties.
 *
 * All forked tasks are *attached* to their parents. When the parent terminates
 * the execution of its own body of instructions, it will wait for all forked
 * tasks to terminate before returning.
 *
 * Errors from child tasks automatically bubble up to their parents. If any
 * forked task raises an uncaught error, then the parent task will abort with
 * the child Error, and the whole Parent's execution tree (i.e. forked tasks +
 * the *main task* represented by the parent's body if it's still running) will
 * be cancelled.
 *
 * Cancellation of a forked Task will automatically cancel all forked tasks that
 * are still executing. It'll also cancel the current Effect where the cancelled
 * task was blocked (if any).
 *
 * If a forked task fails *synchronously* (ie: fails immediately after its
 * execution before performing any async operation), then no Task is returned,
 * instead the parent will be aborted as soon as possible (since both parent and
 * child execute in parallel, the parent will abort as soon as it takes notice
 * of the child failure).
 *
 * To create *detached* forks, use `spawn` instead.
 *
 * @param fn A Generator function, or normal function which returns a Promise as result
 * @param args An array of values to be passed as arguments to `fn`
 */
export function fork<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): ForkEffect<SagaReturnType<Fn>>
/**
 * Same as `fork([context, fn], ...args)` but supports passing a `fn` as string.
 * Useful for invoking object's methods, i.e.
 * `yield fork([localStorage, 'getItem'], 'redux-saga')`
 */
export function fork<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any }, Name extends string>(
  ctxAndFnName: [Ctx, Name],
  ...args: Parameters<Ctx[Name]>
): ForkEffect<SagaReturnType<Ctx[Name]>>
/**
 * Same as `fork([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield fork({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function fork<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any }, Name extends string>(
  ctxAndFnName: { context: Ctx; fn: Name },
  ...args: Parameters<Ctx[Name]>
): ForkEffect<SagaReturnType<Ctx[Name]>>
/**
 * Same as `fork(fn, ...args)` but supports passing a `this` context to `fn`.
 * This is useful to invoke object methods.
 */
export function fork<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
  ctxAndFn: [Ctx, Fn],
  ...args: Parameters<Fn>
): ForkEffect<SagaReturnType<Fn>>
/**
 * Same as `fork([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield fork({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function fork<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
  ctxAndFn: { context: Ctx; fn: Fn },
  ...args: Parameters<Fn>
): ForkEffect<SagaReturnType<Fn>>

export type ForkEffect<RT = any> = SimpleEffect<'FORK', ForkEffectDescriptor<RT>>

export interface ForkEffectDescriptor<RT> extends CallEffectDescriptor<RT> {
  detached?: boolean
}

/**
 * Same as `fork(fn, ...args)` but creates a *detached* task. A detached task
 * remains independent from its parent and acts like a top-level task. The
 * parent will not wait for detached tasks to terminate before returning and all
 * events which may affect the parent or the detached task are completely
 * independents (error, cancellation).
 */
export function spawn<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): ForkEffect<SagaReturnType<Fn>>
/**
 * Same as `spawn([context, fn], ...args)` but supports passing a `fn` as string.
 * Useful for invoking object's methods, i.e.
 * `yield spawn([localStorage, 'getItem'], 'redux-saga')`
 */
export function spawn<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any }, Name extends string>(
  ctxAndFnName: [Ctx, Name],
  ...args: Parameters<Ctx[Name]>
): ForkEffect<SagaReturnType<Ctx[Name]>>
/**
 * Same as `spawn([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield spawn({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function spawn<Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any }, Name extends string>(
  ctxAndFnName: { context: Ctx; fn: Name },
  ...args: Parameters<Ctx[Name]>
): ForkEffect<SagaReturnType<Ctx[Name]>>
/**
 * Same as `spawn(fn, ...args)` but supports passing a `this` context to `fn`.
 * This is useful to invoke object methods.
 */
export function spawn<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
  ctxAndFn: [Ctx, Fn],
  ...args: Parameters<Fn>
): ForkEffect<SagaReturnType<Fn>>
/**
 * Same as `spawn([context, fn], ...args)` but supports passing `context` and
 * `fn` as properties of an object, i.e.
 * `yield spawn({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`.
 * `fn` can be a string or a function.
 */
export function spawn<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
  ctxAndFn: { context: Ctx; fn: Fn },
  ...args: Parameters<Fn>
): ForkEffect<SagaReturnType<Fn>>

/**
 * Creates an Effect description that instructs the middleware to wait for the
 * result of a previously forked task.
 *
 * #### Notes
 *
 * `join` will resolve to the same outcome of the joined task (success or
 * error). If the joined task is cancelled, the cancellation will also propagate
 * to the Saga executing the join effect. Similarly, any potential callers of
 * those joiners will be cancelled as well.
 *
 * @param task A `Task` object returned by a previous `fork`
 */
export function join(task: Task): JoinEffect
/**
 * Creates an Effect description that instructs the middleware to wait for the
 * results of previously forked tasks.
 *
 * @param tasks A `Task` is the object returned by a previous `fork`
 */
export function join(tasks: Task[]): JoinEffect

export type JoinEffect = SimpleEffect<'JOIN', JoinEffectDescriptor>

export type JoinEffectDescriptor = Task | Task[]

/**
 * Creates an Effect description that instructs the middleware to cancel a
 * previously forked task.
 *
 * #### Notes
 *
 * To cancel a running task, the middleware will invoke `return` on the
 * underlying Generator object. This will cancel the current Effect in the task
 * and jump to the finally block (if defined).
 *
 * Inside the finally block, you can execute any cleanup logic or dispatch some
 * action to keep the store in a consistent state (e.g. reset the state of a
 * spinner to false when an ajax request is cancelled). You can check inside the
 * finally block if a Saga was cancelled by issuing a `yield cancelled()`.
 *
 * Cancellation propagates downward to child sagas. When cancelling a task, the
 * middleware will also cancel the current Effect (where the task is currently
 * blocked). If the current Effect is a call to another Saga, it will be also
 * cancelled. When cancelling a Saga, all *attached forks* (sagas forked using
 * `yield fork()`) will be cancelled. This means that cancellation effectively
 * affects the whole execution tree that belongs to the cancelled task.
 *
 * `cancel` is a non-blocking Effect. i.e. the Saga executing it will resume
 * immediately after performing the cancellation.
 *
 * For functions which return Promise results, you can plug your own
 * cancellation logic by attaching a `[CANCEL]` to the promise.
 *
 * The following example shows how to attach cancellation logic to a Promise
 * result:
 *
 *    import { CANCEL } from 'redux-saga'
 *    import { fork, cancel } from 'redux-saga/effects'
 *
 *    function myApi() {
 *      const promise = myXhr(...)
 *
 *      promise[CANCEL] = () => myXhr.abort()
 *      return promise
 *    }
 *
 *    function* mySaga() {
 *
 *      const task = yield fork(myApi)
 *
 *      // ... later
 *      // will call promise[CANCEL] on the result of myApi
 *      yield cancel(task)
 *    }
 *
 * redux-saga will automatically cancel jqXHR objects using their `abort` method.
 *
 * @param task A `Task` object returned by a previous `fork`
 */
export function cancel(task: Task): CancelEffect
/**
 * Creates an Effect description that instructs the middleware to cancel
 * previously forked tasks.
 *
 * #### Notes
 *
 * It wraps the array of tasks in cancel effects, roughly becoming the
 * equivalent of `yield tasks.map(t => cancel(t))`.
 *
 * @param tasks A `Task` is the object returned by a previous `fork`
 */
export function cancel(tasks: Task[]): CancelEffect
/**
 * Creates an Effect description that instructs the middleware to cancel a task
 * in which it has been yielded (self-cancellation). It allows to reuse
 * destructor-like logic inside a `finally` blocks for both outer
 * (`cancel(task)`) and self (`cancel()`) cancellations.
 *
 * #### Example
 *
 *    function* deleteRecord({ payload }) {
 *      try {
 *        const { confirm, deny } = yield call(prompt);
 *        if (confirm) {
 *          yield put(actions.deleteRecord.confirmed())
 *        }
 *        if (deny) {
 *          yield cancel()
 *        }
 *      } catch(e) {
 *        // handle failure
 *      } finally {
 *        if (yield cancelled()) {
 *          // shared cancellation logic
 *          yield put(actions.deleteRecord.cancel(payload))
 *        }
 *      }
 *    }
 */
export function cancel(): CancelEffect

export type CancelEffect = SimpleEffect<'CANCEL', CancelEffectDescriptor>

export type CancelEffectDescriptor = Task | Task[] | SELF_CANCELLATION
type SELF_CANCELLATION = '@@redux-saga/SELF_CANCELLATION'

/**
 * Creates an effect that instructs the middleware to invoke the provided
 * selector on the current Store's state (i.e. returns the result of
 * `selector(getState(), ...args)`).
 *
 * If `select` is called without argument (i.e. `yield select()`) then the
 * effect is resolved with the entire state (the same result of a `getState()`
 * call).
 *
 * > It's important to note that when an action is dispatched to the store, the
 * middleware first forwards the action to the reducers and then notifies the
 * Sagas. This means that when you query the Store's State, you get the State
 * **after** the action has been applied. However, this behavior is only
 * guaranteed if all subsequent middlewares call `next(action)` synchronously.
 * If any subsequent middleware calls `next(action)` asynchronously (which is
 * unusual but possible), then the sagas will get the state from **before** the
 * action is applied.  Therefore it is recommended to review the source of each
 * subsequent middleware to ensure it calls `next(action)` synchronously, or
 * else ensure that redux-saga is the last middleware in the call chain.
 *
 * #### Notes
 *
 * Preferably, a Saga should be autonomous and should not depend on the Store's
 * state. This makes it easy to modify the state implementation without
 * affecting the Saga code. A saga should preferably depend only on its own
 * internal control state when possible. But sometimes, one could find it more
 * convenient for a Saga to query the state instead of maintaining the needed
 * data by itself (for example, when a Saga duplicates the logic of invoking
 * some reducer to compute a state that was already computed by the Store).
 *
 * For example, suppose we have this state shape in our application:
 *
 *    state = {
 *      cart: {...}
 *    }
 *
 * We can create a *selector*, i.e. a function which knows how to extract the
 * `cart` data from the State:
 *
 * `./selectors`
 *
 *    export const getCart = state => state.cart
 *
 *
 * Then we can use that selector from inside a Saga using the `select` Effect:
 *
 * `./sagas.js`
 *
 *    import { take, fork, select } from 'redux-saga/effects'
 *    import { getCart } from './selectors'
 *
 *    function* checkout() {
 *      // query the state using the exported selector
 *      const cart = yield select(getCart)
 *
 *      // ... call some API endpoint then dispatch a success/error action
 *    }
 *
 *    export default function* rootSaga() {
 *      while (true) {
 *        yield take('CHECKOUT_REQUEST')
 *        yield fork(checkout)
 *      }
 *    }
 *
 * `checkout` can get the needed information directly by using
 * `select(getCart)`. The Saga is coupled only with the `getCart` selector. If
 * we have many Sagas (or React Components) that needs to access the `cart`
 * slice, they will all be coupled to the same function `getCart`. And if we now
 * change the state shape, we need only to update `getCart`.
 *
 * @param selector a function `(state, ...args) => args`. It takes the current
 *   state and optionally some arguments and returns a slice of the current
 *   Store's state
 * @param args optional arguments to be passed to the selector in addition of
 *   `getState`.
 */
export function select(): SelectEffect
export function select<Fn extends (state: any, ...args: any[]) => any>(
  selector: Fn,
  ...args: Tail<Parameters<Fn>>
): SelectEffect

export type SelectEffect = SimpleEffect<'SELECT', SelectEffectDescriptor>

export interface SelectEffectDescriptor {
  selector(state: any, ...args: any[]): any
  args: any[]
}

/**
 * Creates an effect that instructs the middleware to queue the actions matching
 * `pattern` using an event channel. Optionally, you can provide a buffer to
 * control buffering of the queued actions.
 *
 * #### Example
 *
 * The following code creates a channel to buffer all `USER_REQUEST` actions.
 * Note that even the Saga may be blocked on the `call` effect. All actions that
 * come while it's blocked are automatically buffered. This causes the Saga to
 * execute the API calls one at a time
 *
 *    import { actionChannel, call } from 'redux-saga/effects'
 *    import api from '...'
 *
 *    function* takeOneAtMost() {
 *      const chan = yield actionChannel('USER_REQUEST')
 *      while (true) {
 *        const {payload} = yield take(chan)
 *        yield call(api.getUser, payload)
 *      }
 *    }
 *
 * @param pattern see API for `take(pattern)`
 * @param buffer a `Buffer` object
 */
export function actionChannel(pattern: ActionPattern, buffer?: Buffer<Action>): ActionChannelEffect

export type ActionChannelEffect = SimpleEffect<'ACTION_CHANNEL', ActionChannelEffectDescriptor>

export interface ActionChannelEffectDescriptor {
  pattern: ActionPattern
  buffer?: Buffer<Action>
}

/**
 * Creates an effect that instructs the middleware to flush all buffered items
 * from the channel. Flushed items are returned back to the saga, so they can be
 * utilized if needed.
 *
 * #### Example
 *
 *    function* saga() {
 *      const chan = yield actionChannel('ACTION')
 *
 *      try {
 *        while (true) {
 *          const action = yield take(chan)
 *          // ...
 *        }
 *      } finally {
 *        const actions = yield flush(chan)
 *        // ...
 *      }
 *    }
 *
 * @param channel a `Channel` Object.
 */
export function flush<T>(channel: FlushableChannel<T>): FlushEffect<T>

export type FlushEffect<T> = SimpleEffect<'FLUSH', FlushEffectDescriptor<T>>

export type FlushEffectDescriptor<T> = FlushableChannel<T>

/**
 * Creates an effect that instructs the middleware to return whether this
 * generator has been cancelled. Typically you use this Effect in a finally
 * block to run Cancellation specific code
 *
 * #### Example
 *
 *    function* saga() {
 *      try {
 *        // ...
 *      } finally {
 *        if (yield cancelled()) {
 *          // logic that should execute only on Cancellation
 *        }
 *        // logic that should execute in all situations (e.g. closing a channel)
 *      }
 *    }
 */
export function cancelled(): CancelledEffect

export type CancelledEffect = SimpleEffect<'CANCELLED', CancelledEffectDescriptor>

export type CancelledEffectDescriptor = {}

/**
 * Creates an effect that instructs the middleware to update its own context.
 * This effect extends saga's context instead of replacing it.
 */
export function setContext<C extends object>(props: C): SetContextEffect<C>

export type SetContextEffect<C extends object> = SimpleEffect<'SET_CONTEXT', SetContextEffectDescriptor<C>>

export type SetContextEffectDescriptor<C extends object> = C

/**
 * Creates an effect that instructs the middleware to return a specific property
 * of saga's context.
 */
export function getContext(prop: string): GetContextEffect

export type GetContextEffect = SimpleEffect<'GET_CONTEXT', GetContextEffectDescriptor>

export type GetContextEffectDescriptor = string

/**
 * Returns an effect descriptor to block execution for `ms` milliseconds and return `val` value.
 */
export function delay<T = true>(ms: number, val?: T): CallEffect<T>

/**
 * Spawns a `saga` on an action dispatched to the Store that matches `pattern`.
 * After spawning a task it's still accepting incoming actions into the
 * underlying `buffer`, keeping at most 1 (the most recent one), but in the same
 * time holding up with spawning new task for `ms` milliseconds (hence its name -
 * `throttle`). Purpose of this is to ignore incoming actions for a given
 * period of time while processing a task.
 *
 * #### Example
 *
 * In the following example, we create a basic task `fetchAutocomplete`. We use
 * `throttle` to start a new `fetchAutocomplete` task on dispatched
 * `FETCH_AUTOCOMPLETE` action. However since `throttle` ignores consecutive
 * `FETCH_AUTOCOMPLETE` for some time, we ensure that user won't flood our
 * server with requests.
 *
 *    import { call, put, throttle } from `redux-saga/effects`
 *
 *    function* fetchAutocomplete(action) {
 *      const autocompleteProposals = yield call(Api.fetchAutocomplete, action.text)
 *      yield put({type: 'FETCHED_AUTOCOMPLETE_PROPOSALS', proposals: autocompleteProposals})
 *    }
 *
 *    function* throttleAutocomplete() {
 *      yield throttle(1000, 'FETCH_AUTOCOMPLETE', fetchAutocomplete)
 *    }
 *
 * #### Notes
 *
 * `throttle` is a high-level API built using `take`, `fork` and
 * `actionChannel`. Here is how the helper could be implemented using the
 * low-level Effects
 *
 *    const throttle = (ms, pattern, task, ...args) => fork(function*() {
 *      const throttleChannel = yield actionChannel(pattern, buffers.sliding(1))
 *
 *      while (true) {
 *        const action = yield take(throttleChannel)
 *        yield fork(task, ...args, action)
 *        yield delay(ms)
 *      }
 *    })
 *
 * @param ms length of a time window in milliseconds during which actions will
 *   be ignored after the action starts processing
 * @param pattern for more information see docs for `take(pattern)`
 * @param saga a Generator function
 * @param args arguments to be passed to the started task. `throttle` will add
 *   the incoming action to the argument list (i.e. the action will be the last
 *   argument provided to `saga`)
 */
export function throttle<P extends ActionPattern>(
  ms: number,
  pattern: P,
  worker: (action: ActionMatchingPattern<P>) => any,
): ForkEffect<never>
export function throttle<P extends ActionPattern, Fn extends (...args: any[]) => any>(
  ms: number,
  pattern: P,
  worker: Fn,
  ...args: HelperWorkerParameters<ActionMatchingPattern<P>, Fn>
): ForkEffect<never>
export function throttle<A extends Action>(
  ms: number,
  pattern: ActionPattern<A>,
  worker: (action: A) => any,
): ForkEffect<never>
export function throttle<A extends Action, Fn extends (...args: any[]) => any>(
  ms: number,
  pattern: ActionPattern<A>,
  worker: Fn,
  ...args: HelperWorkerParameters<A, Fn>
): ForkEffect<never>

/**
 * You can also pass in a channel as argument and the behaviour is the same as
 * `throttle(ms, pattern, saga, ...args)`.
 */
export function throttle<T>(ms: number, channel: TakeableChannel<T>, worker: (item: T) => any): ForkEffect<never>
export function throttle<T, Fn extends (...args: any[]) => any>(
  ms: number,
  channel: TakeableChannel<T>,
  worker: Fn,
  ...args: HelperWorkerParameters<T, Fn>
): ForkEffect<never>

/**
 * Spawns a `saga` on an action dispatched to the Store that matches `pattern`.
 * Saga will be called after it stops taking `pattern` actions for `ms`
 * milliseconds. Purpose of this is to prevent calling saga until the actions
 * are settled off.
 *
 * #### Example
 *
 * In the following example, we create a basic task `fetchAutocomplete`. We use
 * `debounce` to delay calling `fetchAutocomplete` saga until we stop receive
 * any `FETCH_AUTOCOMPLETE` events for at least `1000` ms.
 *
 *    import { call, put, debounce } from `redux-saga/effects`
 *
 *    function* fetchAutocomplete(action) {
 *      const autocompleteProposals = yield call(Api.fetchAutocomplete, action.text)
 *      yield put({type: 'FETCHED_AUTOCOMPLETE_PROPOSALS', proposals: autocompleteProposals})
 *    }
 *
 *    function* debounceAutocomplete() {
 *      yield debounce(1000, 'FETCH_AUTOCOMPLETE', fetchAutocomplete)
 *    }
 *
 * #### Notes
 *
 * `debounce` is a high-level API built using `take`, `delay` and `fork`. Here
 * is how the helper could be implemented using the low-level Effects
 *
 *    const debounce = (ms, pattern, task, ...args) => fork(function*() {
 *      while (true) {
 *        let action = yield take(pattern)
 *
 *        while (true) {
 *          const { debounced, _action } = yield race({
 *            debounced: delay(ms),
 *            _action: take(pattern)
 *          })
 *
 *          if (debounced) {
 *            yield fork(worker, ...args, action)
 *            break
 *          }
 *
 *          action = _action
 *        }
 *      }
 *    })
 *
 * @param ms defines how many milliseconds should elapse since the last time
 *   `pattern` action was fired to call the `saga`
 * @param pattern for more information see docs for `take(pattern)`
 * @param saga a Generator function
 * @param args arguments to be passed to the started task. `debounce` will add
 *   the incoming action to the argument list (i.e. the action will be the last
 *   argument provided to `saga`)
 */
export function debounce<P extends ActionPattern>(
  ms: number,
  pattern: P,
  worker: (action: ActionMatchingPattern<P>) => any,
): ForkEffect<never>
export function debounce<P extends ActionPattern, Fn extends (...args: any[]) => any>(
  ms: number,
  pattern: P,
  worker: Fn,
  ...args: HelperWorkerParameters<ActionMatchingPattern<P>, Fn>
): ForkEffect<never>
export function debounce<A extends Action>(
  ms: number,
  pattern: ActionPattern<A>,
  worker: (action: A) => any,
): ForkEffect<never>
export function debounce<A extends Action, Fn extends (...args: any[]) => any>(
  ms: number,
  pattern: ActionPattern<A>,
  worker: Fn,
  ...args: HelperWorkerParameters<A, Fn>
): ForkEffect<never>

/**
 * You can also pass in a channel as argument and the behaviour is the same as
 * `debounce(ms, pattern, saga, ...args)`.
 */
export function debounce<T>(ms: number, channel: TakeableChannel<T>, worker: (item: T) => any): ForkEffect<never>
export function debounce<T, Fn extends (...args: any[]) => any>(
  ms: number,
  channel: TakeableChannel<T>,
  worker: Fn,
  ...args: HelperWorkerParameters<T, Fn>
): ForkEffect<never>

/**
 * Creates an Effect description that instructs the middleware to call the
 * function `fn` with `args` as arguments. In case of failure will try to make
 * another call after `delay` milliseconds, if a number of attempts < `maxTries`.
 *
 * #### Example
 *
 * In the following example, we create a basic task `retrySaga`. We use `retry`
 * to try to fetch our API 3 times with 10 second interval. If `request` fails
 * first time than `retry` will call `request` one more time while calls count
 * less than 3.
 *
 *    import { put, retry } from 'redux-saga/effects'
 *    import { request } from 'some-api';
 *
 *    function* retrySaga(data) {
 *      try {
 *        const SECOND = 1000
 *        const response = yield retry(3, 10 * SECOND, request, data)
 *        yield put({ type: 'REQUEST_SUCCESS', payload: response })
 *      } catch(error) {
 *        yield put({ type: 'REQUEST_FAIL', payload: { error } })
 *      }
 *    }
 *
 * @param maxTries maximum calls count.
 * @param delay length of a time window in milliseconds between `fn` calls.
 * @param fn A Generator function, or normal function which either returns a
 *   Promise as a result, or any other value.
 * @param args An array of values to be passed as arguments to `fn`
 */
export function retry<Fn extends (...args: any[]) => any>(
  maxTries: number,
  delayLength: number,
  fn: Fn,
  ...args: Parameters<Fn>
): CallEffect<SagaReturnType<Fn>>

/**
 * Creates an Effect description that instructs the middleware to run multiple
 * Effects in parallel and wait for all of them to complete. It's quite the
 * corresponding API to standard
 * [`Promise#all`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
 *
 * #### Example
 *
 * The following example runs two blocking calls in parallel:
 *
 *    import { fetchCustomers, fetchProducts } from './path/to/api'
 *    import { all, call } from `redux-saga/effects`
 *
 *    function* mySaga() {
 *      const [customers, products] = yield all([
 *        call(fetchCustomers),
 *        call(fetchProducts)
 *      ])
 *    }
 */
export function all<T>(effects: T[]): AllEffect<T>
/**
 * The same as `all([...effects])` but let's you to pass in a dictionary object
 * of effects with labels, just like `race(effects)`
 *
 * @param effects a dictionary Object of the form {label: effect, ...}
 */
export function all<T>(effects: { [key: string]: T }): AllEffect<T>

export type AllEffect<T> = CombinatorEffect<'ALL', T>

export type AllEffectDescriptor<T> = CombinatorEffectDescriptor<T>

/**
 * Creates an Effect description that instructs the middleware to run a *Race*
 * between multiple Effects (this is similar to how
 * [`Promise.race([...])`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
 * behaves).
 *
 *
 * #### Example
 *
 * The following example runs a race between two effects:
 *
 * 1. A call to a function `fetchUsers` which returns a Promise
 * 2. A `CANCEL_FETCH` action which may be eventually dispatched on the Store
 *
 *
 *    import { take, call, race } from `redux-saga/effects`
 *    import fetchUsers from './path/to/fetchUsers'
 *
 *    function* fetchUsersSaga() {
 *      const { response, cancel } = yield race({
 *        response: call(fetchUsers),
 *        cancel: take(CANCEL_FETCH)
 *      })
 *    }
 *
 * If `call(fetchUsers)` resolves (or rejects) first, the result of `race` will
 * be an object with a single keyed object `{response: result}` where `result`
 * is the resolved result of `fetchUsers`.
 *
 * If an action of type `CANCEL_FETCH` is dispatched on the Store before
 * `fetchUsers` completes, the result will be a single keyed object
 * `{cancel: action}`, where action is the dispatched action.
 *
 * #### Notes
 *
 * When resolving a `race`, the middleware automatically cancels all the losing
 * Effects.
 *
 * @param effects a dictionary Object of the form {label: effect, ...}
 */
export function race<T>(effects: { [key: string]: T }): RaceEffect<T>
/**
 * The same as `race(effects)` but lets you pass in an array of effects.
 */
export function race<T>(effects: T[]): RaceEffect<T>

export type RaceEffect<T> = CombinatorEffect<'RACE', T>

export type RaceEffectDescriptor<T> = CombinatorEffectDescriptor<T>

/**
 * [H, ...T] -> T
 */
export type Tail<L extends any[]> = ((...l: L) => any) extends (h: any, ...t: infer T) => any ? T : never
/**
 * [...A, B] -> A
 */
export type AllButLast<L extends any[]> = Reverse<Tail<Reverse<L>>>
