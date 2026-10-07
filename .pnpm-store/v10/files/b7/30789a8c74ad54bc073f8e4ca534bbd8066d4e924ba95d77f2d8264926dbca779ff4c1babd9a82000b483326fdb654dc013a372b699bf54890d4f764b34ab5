import type {
  Action,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  UnknownAction,
} from 'redux'
import type { ThunkDispatch } from 'redux-thunk'
import type { BaseActionCreator, PayloadAction } from '../createAction'
import type { TypedActionCreator } from '../mapBuilders'
import type { TaskAbortError } from './exceptions'

/**
 * Types copied from RTK
 */

/** @internal */
type TypedActionCreatorWithMatchFunction<Type extends string> =
  TypedActionCreator<Type> & {
    match: MatchFunction<any>
  }

/** @internal */
export type AnyListenerPredicate<State> = (
  action: UnknownAction,
  currentState: State,
  originalState: State,
) => boolean

/** @public */
export type ListenerPredicate<ActionType extends Action, State> = (
  action: UnknownAction,
  currentState: State,
  originalState: State,
) => action is ActionType

/** @public */
export interface ConditionFunction<State> {
  (predicate: AnyListenerPredicate<State>, timeout?: number): Promise<boolean>
  (predicate: AnyListenerPredicate<State>, timeout?: number): Promise<boolean>
  (predicate: () => boolean, timeout?: number): Promise<boolean>
}

/** @internal */
export type MatchFunction<T> = (v: any) => v is T

/** @public */
export interface ForkedTaskAPI {
  /**
   * Returns a promise that resolves when `waitFor` resolves or
   * rejects if the task or the parent listener has been cancelled or is completed.
   */
  pause<W>(waitFor: Promise<W>): Promise<W>
  /**
   * Returns a promise that resolves after `timeoutMs` or
   * rejects if the task or the parent listener has been cancelled or is completed.
   * @param timeoutMs
   */
  delay(timeoutMs: number): Promise<void>
  /**
   * An abort signal whose `aborted` property is set to `true`
   * if the task execution is either aborted or completed.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  signal: AbortSignal
}

/** @public */
export interface AsyncTaskExecutor<T> {
  (forkApi: ForkedTaskAPI): Promise<T>
}

/** @public */
export interface SyncTaskExecutor<T> {
  (forkApi: ForkedTaskAPI): T
}

/** @public */
export type ForkedTaskExecutor<T> = AsyncTaskExecutor<T> | SyncTaskExecutor<T>

/** @public */
export type TaskResolved<T> = {
  readonly status: 'ok'
  readonly value: T
}

/** @public */
export type TaskRejected = {
  readonly status: 'rejected'
  readonly error: unknown
}

/** @public */
export type TaskCancelled = {
  readonly status: 'cancelled'
  readonly error: TaskAbortError
}

/** @public */
export type TaskResult<Value> =
  | TaskResolved<Value>
  | TaskRejected
  | TaskCancelled

/** @public */
export interface ForkedTask<T> {
  /**
   * A promise that resolves when the task is either completed or cancelled or rejects
   * if parent listener execution is cancelled or completed.
   *
   * ### Example
   * ```ts
   * const result = await fork(async (forkApi) => Promise.resolve(4)).result
   *
   * if(result.status === 'ok') {
   *   console.log(result.value) // logs 4
   * }}
   * ```
   */
  result: Promise<TaskResult<T>>
  /**
   * Cancel task if it is in progress or not yet started,
   * it is noop otherwise.
   */
  cancel(): void
}

/** @public */
export interface ForkOptions {
  /**
   * If true, causes the parent task to not be marked as complete until
   * all autoJoined forks have completed or failed.
   */
  autoJoin: boolean
}

/** @public */
export interface ListenerEffectAPI<
  State,
  DispatchType extends Dispatch,
  ExtraArgument = unknown,
> extends MiddlewareAPI<DispatchType, State> {
  /**
   * Returns the store state as it existed when the action was originally dispatched, _before_ the reducers ran.
   *
   * ### Synchronous invocation
   *
   * This function can **only** be invoked **synchronously**, it throws error otherwise.
   *
   * @example
   *
   * ```ts
   * middleware.startListening({
   *  predicate: () => true,
   *  async effect(_, { getOriginalState }) {
   *    getOriginalState(); // sync: OK!
   *
   *    setTimeout(getOriginalState, 0); // async: throws Error
   *
   *    await Promise().resolve();
   *
   *    getOriginalState() // async: throws Error
   *  }
   * })
   * ```
   */
  getOriginalState: () => State
  /**
   * Removes the listener entry from the middleware and prevent future instances of the listener from running.
   *
   * It does **not** cancel any active instances.
   */
  unsubscribe(): void
  /**
   * It will subscribe a listener if it was previously removed, noop otherwise.
   */
  subscribe(): void
  /**
   * Returns a promise that resolves when the input predicate returns `true` or
   * rejects if the listener has been cancelled or is completed.
   *
   * The return value is `true` if the predicate succeeds or `false` if a timeout is provided and expires first.
   *
   * ### Example
   *
   * ```ts
   * const updateBy = createAction<number>('counter/updateBy');
   *
   * middleware.startListening({
   *  actionCreator: updateBy,
   *  async effect(_, { condition }) {
   *    // wait at most 3s for `updateBy` actions.
   *    if(await condition(updateBy.match, 3_000)) {
   *      // `updateBy` has been dispatched twice in less than 3s.
   *    }
   *  }
   * })
   * ```
   */
  condition: ConditionFunction<State>
  /**
   * Returns a promise that resolves when the input predicate returns `true` or
   * rejects if the listener has been cancelled or is completed.
   *
   * The return value is the `[action, currentState, previousState]` combination that the predicate saw as arguments.
   *
   * The promise resolves to null if a timeout is provided and expires first,
   *
   * ### Example
   *
   * ```ts
   * const updateBy = createAction<number>('counter/updateBy');
   *
   * middleware.startListening({
   *  actionCreator: updateBy,
   *  async effect(_, { take }) {
   *    const [{ payload }] =  await take(updateBy.match);
   *    console.log(payload); // logs 5;
   *  }
   * })
   *
   * store.dispatch(updateBy(5));
   * ```
   */
  take: TakePattern<State>
  /**
   * Cancels all other running instances of this same listener except for the one that made this call.
   */
  cancelActiveListeners: () => void
  /**
   * Cancels the instance of this listener that made this call.
   */
  cancel: () => void
  /**
   * Throws a `TaskAbortError` if this listener has been cancelled
   */
  throwIfCancelled: () => void
  /**
   * An abort signal whose `aborted` property is set to `true`
   * if the listener execution is either aborted or completed.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  signal: AbortSignal
  /**
   * Returns a promise that resolves after `timeoutMs` or
   * rejects if the listener has been cancelled or is completed.
   */
  delay(timeoutMs: number): Promise<void>
  /**
   * Queues in the next microtask the execution of a task.
   * @param executor
   * @param options
   */
  fork<T>(executor: ForkedTaskExecutor<T>, options?: ForkOptions): ForkedTask<T>
  /**
   * Returns a promise that resolves when `waitFor` resolves or
   * rejects if the listener has been cancelled or is completed.
   * @param promise
   */
  pause<M>(promise: Promise<M>): Promise<M>
  extra: ExtraArgument
}

/** @public */
export type ListenerEffect<
  ActionType extends Action,
  State,
  DispatchType extends Dispatch,
  ExtraArgument = unknown,
> = (
  action: ActionType,
  api: ListenerEffectAPI<State, DispatchType, ExtraArgument>,
) => void | Promise<void>

/**
 * @public
 * Additional infos regarding the error raised.
 */
export interface ListenerErrorInfo {
  /**
   * Which function has generated the exception.
   */
  raisedBy: 'effect' | 'predicate'
}

/**
 * @public
 * Gets notified with synchronous and asynchronous errors raised by `listeners` or `predicates`.
 * @param error The thrown error.
 * @param errorInfo Additional information regarding the thrown error.
 */
export interface ListenerErrorHandler {
  (error: unknown, errorInfo: ListenerErrorInfo): void
}

/** @public */
export interface CreateListenerMiddlewareOptions<ExtraArgument = unknown> {
  extra?: ExtraArgument
  /**
   * Receives synchronous errors that are raised by `listener` and `listenerOption.predicate`.
   */
  onError?: ListenerErrorHandler
}

/** @public */
export type ListenerMiddleware<
  State = unknown,
  DispatchType extends ThunkDispatch<State, unknown, Action> = ThunkDispatch<
    State,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
> = Middleware<
  {
    (action: Action<'listenerMiddleware/add'>): UnsubscribeListener
  },
  State,
  DispatchType
>

/** @public */
export interface ListenerMiddlewareInstance<
  StateType = unknown,
  DispatchType extends ThunkDispatch<
    StateType,
    unknown,
    Action
  > = ThunkDispatch<StateType, unknown, UnknownAction>,
  ExtraArgument = unknown,
> {
  middleware: ListenerMiddleware<StateType, DispatchType, ExtraArgument>

  startListening: AddListenerOverloads<
    UnsubscribeListener,
    StateType,
    DispatchType,
    ExtraArgument
  > &
    TypedStartListening<StateType, DispatchType, ExtraArgument>

  stopListening: RemoveListenerOverloads<StateType, DispatchType> &
    TypedStopListening<StateType, DispatchType>

  /**
   * Unsubscribes all listeners, cancels running listeners and tasks.
   */
  clearListeners: () => void
}

/**
 * API Function Overloads
 */

/** @public */
export type TakePatternOutputWithoutTimeout<
  State,
  Predicate extends AnyListenerPredicate<State>,
> =
  Predicate extends MatchFunction<infer ActionType>
    ? Promise<[ActionType, State, State]>
    : Promise<[UnknownAction, State, State]>

/** @public */
export type TakePatternOutputWithTimeout<
  State,
  Predicate extends AnyListenerPredicate<State>,
> =
  Predicate extends MatchFunction<infer ActionType>
    ? Promise<[ActionType, State, State] | null>
    : Promise<[UnknownAction, State, State] | null>

/** @public */
export interface TakePattern<State> {
  <Predicate extends AnyListenerPredicate<State>>(
    predicate: Predicate,
  ): TakePatternOutputWithoutTimeout<State, Predicate>
  <Predicate extends AnyListenerPredicate<State>>(
    predicate: Predicate,
    timeout: number,
  ): TakePatternOutputWithTimeout<State, Predicate>
  <Predicate extends AnyListenerPredicate<State>>(
    predicate: Predicate,
    timeout?: number | undefined,
  ): TakePatternOutputWithTimeout<State, Predicate>
}

/** @public */
export interface UnsubscribeListenerOptions {
  cancelActive?: true
}

/** @public */
export type UnsubscribeListener = (
  unsubscribeOptions?: UnsubscribeListenerOptions,
) => void

/**
 * @public
 * The possible overloads and options for defining a listener. The return type of each function is specified as a generic arg, so the overloads can be reused for multiple different functions
 */
export type AddListenerOverloads<
  Return,
  StateType = unknown,
  DispatchType extends Dispatch = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
  AdditionalOptions = unknown,
> = {
  /** Accepts a "listener predicate" that is also a TS type predicate for the action*/
  <
    MiddlewareActionType extends UnknownAction,
    ListenerPredicateType extends ListenerPredicate<
      MiddlewareActionType,
      StateType
    >,
  >(
    options: {
      actionCreator?: never
      type?: never
      matcher?: never
      predicate: ListenerPredicateType
      effect: ListenerEffect<
        ListenerPredicateGuardedActionType<ListenerPredicateType>,
        StateType,
        DispatchType,
        ExtraArgument
      >
    } & AdditionalOptions,
  ): Return

  /** Accepts an RTK action creator, like `incrementByAmount` */
  <ActionCreatorType extends TypedActionCreatorWithMatchFunction<any>>(
    options: {
      actionCreator: ActionCreatorType
      type?: never
      matcher?: never
      predicate?: never
      effect: ListenerEffect<
        ReturnType<ActionCreatorType>,
        StateType,
        DispatchType,
        ExtraArgument
      >
    } & AdditionalOptions,
  ): Return

  /** Accepts a specific action type string */
  <T extends string>(
    options: {
      actionCreator?: never
      type: T
      matcher?: never
      predicate?: never
      effect: ListenerEffect<Action<T>, StateType, DispatchType, ExtraArgument>
    } & AdditionalOptions,
  ): Return

  /** Accepts an RTK matcher function, such as `incrementByAmount.match` */
  <MatchFunctionType extends MatchFunction<UnknownAction>>(
    options: {
      actionCreator?: never
      type?: never
      matcher: MatchFunctionType
      predicate?: never
      effect: ListenerEffect<
        GuardedType<MatchFunctionType>,
        StateType,
        DispatchType,
        ExtraArgument
      >
    } & AdditionalOptions,
  ): Return

  /** Accepts a "listener predicate" that just returns a boolean, no type assertion */
  <ListenerPredicateType extends AnyListenerPredicate<StateType>>(
    options: {
      actionCreator?: never
      type?: never
      matcher?: never
      predicate: ListenerPredicateType
      effect: ListenerEffect<
        UnknownAction,
        StateType,
        DispatchType,
        ExtraArgument
      >
    } & AdditionalOptions,
  ): Return
}

/** @public */
export type RemoveListenerOverloads<
  StateType = unknown,
  DispatchType extends Dispatch = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
> = AddListenerOverloads<
  boolean,
  StateType,
  DispatchType,
  ExtraArgument,
  UnsubscribeListenerOptions
>

/** @public */
export interface RemoveListenerAction<
  ActionType extends UnknownAction,
  State,
  DispatchType extends Dispatch,
> {
  type: 'listenerMiddleware/remove'
  payload: {
    type: string
    listener: ListenerEffect<ActionType, State, DispatchType>
  }
}

/**
 * A "pre-typed" version of `addListenerAction`, so the listener args are well-typed
 *
 * @public
 */
export type TypedAddListener<
  StateType,
  DispatchType extends Dispatch = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
  Payload = ListenerEntry<StateType, DispatchType>,
  T extends string = 'listenerMiddleware/add',
> = BaseActionCreator<Payload, T> &
  AddListenerOverloads<
    PayloadAction<Payload, T>,
    StateType,
    DispatchType,
    ExtraArgument
  > & {
    /**
     * Creates a "pre-typed" version of `addListener`
     * where the `state`, `dispatch` and `extra` types are predefined.
     *
     * This allows you to set the `state`, `dispatch` and `extra` types once,
     * eliminating the need to specify them with every `addListener` call.
     *
     * @returns A pre-typed `addListener` with the state, dispatch and extra types already defined.
     *
     * @example
     * ```ts
     * import { addListener } from '@reduxjs/toolkit'
     *
     * export const addAppListener = addListener.withTypes<RootState, AppDispatch, ExtraArguments>()
     * ```
     *
     * @template OverrideStateType - The specific type of state the middleware listener operates on.
     * @template OverrideDispatchType - The specific type of the dispatch function.
     * @template OverrideExtraArgument - The specific type of the extra object.
     *
     * @since 2.1.0
     */
    withTypes: <
      OverrideStateType extends StateType,
      OverrideDispatchType extends Dispatch = ThunkDispatch<
        OverrideStateType,
        unknown,
        UnknownAction
      >,
      OverrideExtraArgument = unknown,
    >() => TypedAddListener<
      OverrideStateType,
      OverrideDispatchType,
      OverrideExtraArgument
    >
  }

/**
 * A "pre-typed" version of `removeListenerAction`, so the listener args are well-typed
 *
 * @public
 */
export type TypedRemoveListener<
  StateType,
  DispatchType extends Dispatch = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
  Payload = ListenerEntry<StateType, DispatchType>,
  T extends string = 'listenerMiddleware/remove',
> = BaseActionCreator<Payload, T> &
  AddListenerOverloads<
    PayloadAction<Payload, T>,
    StateType,
    DispatchType,
    ExtraArgument,
    UnsubscribeListenerOptions
  > & {
    /**
     * Creates a "pre-typed" version of `removeListener`
     * where the `state`, `dispatch` and `extra` types are predefined.
     *
     * This allows you to set the `state`, `dispatch` and `extra` types once,
     * eliminating the need to specify them with every `removeListener` call.
     *
     * @returns A pre-typed `removeListener` with the state, dispatch and extra
     * types already defined.
     *
     * @example
     * ```ts
     * import { removeListener } from '@reduxjs/toolkit'
     *
     * export const removeAppListener = removeListener.withTypes<
     *   RootState,
     *   AppDispatch,
     *   ExtraArguments
     * >()
     * ```
     *
     * @template OverrideStateType - The specific type of state the middleware listener operates on.
     * @template OverrideDispatchType - The specific type of the dispatch function.
     * @template OverrideExtraArgument - The specific type of the extra object.
     *
     * @since 2.1.0
     */
    withTypes: <
      OverrideStateType extends StateType,
      OverrideDispatchType extends Dispatch = ThunkDispatch<
        OverrideStateType,
        unknown,
        UnknownAction
      >,
      OverrideExtraArgument = unknown,
    >() => TypedRemoveListener<
      OverrideStateType,
      OverrideDispatchType,
      OverrideExtraArgument
    >
  }

/**
 * A "pre-typed" version of `middleware.startListening`, so the listener args are well-typed
 *
 * @public
 */
export type TypedStartListening<
  StateType,
  DispatchType extends Dispatch = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
> = AddListenerOverloads<
  UnsubscribeListener,
  StateType,
  DispatchType,
  ExtraArgument
> & {
  /**
   * Creates a "pre-typed" version of
   * {@linkcode ListenerMiddlewareInstance.startListening startListening}
   * where the `state`, `dispatch` and `extra` types are predefined.
   *
   * This allows you to set the `state`, `dispatch` and `extra` types once,
   * eliminating the need to specify them with every
   * {@linkcode ListenerMiddlewareInstance.startListening startListening} call.
   *
   * @returns A pre-typed `startListening` with the state, dispatch and extra types already defined.
   *
   * @example
   * ```ts
   * import { createListenerMiddleware } from '@reduxjs/toolkit'
   *
   * const listenerMiddleware = createListenerMiddleware()
   *
   * export const startAppListening = listenerMiddleware.startListening.withTypes<
   *   RootState,
   *   AppDispatch,
   *   ExtraArguments
   * >()
   * ```
   *
   * @template OverrideStateType - The specific type of state the middleware listener operates on.
   * @template OverrideDispatchType - The specific type of the dispatch function.
   * @template OverrideExtraArgument - The specific type of the extra object.
   *
   * @since 2.1.0
   */
  withTypes: <
    OverrideStateType extends StateType,
    OverrideDispatchType extends Dispatch = ThunkDispatch<
      OverrideStateType,
      unknown,
      UnknownAction
    >,
    OverrideExtraArgument = unknown,
  >() => TypedStartListening<
    OverrideStateType,
    OverrideDispatchType,
    OverrideExtraArgument
  >
}

/**
 * A "pre-typed" version of `middleware.stopListening`, so the listener args are well-typed
 *
 * @public
 */
export type TypedStopListening<
  StateType,
  DispatchType extends Dispatch = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
> = RemoveListenerOverloads<StateType, DispatchType, ExtraArgument> & {
  /**
   * Creates a "pre-typed" version of
   * {@linkcode ListenerMiddlewareInstance.stopListening stopListening}
   * where the `state`, `dispatch` and `extra` types are predefined.
   *
   * This allows you to set the `state`, `dispatch` and `extra` types once,
   * eliminating the need to specify them with every
   * {@linkcode ListenerMiddlewareInstance.stopListening stopListening} call.
   *
   * @returns A pre-typed `stopListening` with the state, dispatch and extra types already defined.
   *
   * @example
   * ```ts
   * import { createListenerMiddleware } from '@reduxjs/toolkit'
   *
   * const listenerMiddleware = createListenerMiddleware()
   *
   * export const stopAppListening = listenerMiddleware.stopListening.withTypes<
   *   RootState,
   *   AppDispatch,
   *   ExtraArguments
   * >()
   * ```
   *
   * @template OverrideStateType - The specific type of state the middleware listener operates on.
   * @template OverrideDispatchType - The specific type of the dispatch function.
   * @template OverrideExtraArgument - The specific type of the extra object.
   *
   * @since 2.1.0
   */
  withTypes: <
    OverrideStateType extends StateType,
    OverrideDispatchType extends Dispatch = ThunkDispatch<
      OverrideStateType,
      unknown,
      UnknownAction
    >,
    OverrideExtraArgument = unknown,
  >() => TypedStopListening<
    OverrideStateType,
    OverrideDispatchType,
    OverrideExtraArgument
  >
}

/**
 * A "pre-typed" version of `createListenerEntry`, so the listener args are well-typed
 *
 * @public
 */
export type TypedCreateListenerEntry<
  StateType,
  DispatchType extends Dispatch = ThunkDispatch<
    StateType,
    unknown,
    UnknownAction
  >,
  ExtraArgument = unknown,
> = AddListenerOverloads<
  ListenerEntry<StateType, DispatchType>,
  StateType,
  DispatchType,
  ExtraArgument
> & {
  /**
   * Creates a "pre-typed" version of `createListenerEntry`
   * where the `state`, `dispatch` and `extra` types are predefined.
   *
   * This allows you to set the `state`, `dispatch` and `extra` types once, eliminating
   * the need to specify them with every `createListenerEntry` call.
   *
   * @returns A pre-typed `createListenerEntry` with the state, dispatch and extra
   * types already defined.
   *
   * @example
   * ```ts
   * import { createListenerEntry } from '@reduxjs/toolkit'
   *
   * export const createAppListenerEntry = createListenerEntry.withTypes<
   *   RootState,
   *   AppDispatch,
   *   ExtraArguments
   * >()
   * ```
   *
   * @template OverrideStateType - The specific type of state the middleware listener operates on.
   * @template OverrideDispatchType - The specific type of the dispatch function.
   * @template OverrideExtraArgument - The specific type of the extra object.
   *
   * @since 2.1.0
   */
  withTypes: <
    OverrideStateType extends StateType,
    OverrideDispatchType extends Dispatch = ThunkDispatch<
      OverrideStateType,
      unknown,
      UnknownAction
    >,
    OverrideExtraArgument = unknown,
  >() => TypedStopListening<
    OverrideStateType,
    OverrideDispatchType,
    OverrideExtraArgument
  >
}

/**
 * Internal Types
 */

/** @internal An single listener entry */
export type ListenerEntry<
  State = unknown,
  DispatchType extends Dispatch = Dispatch,
> = {
  id: string
  effect: ListenerEffect<any, State, DispatchType>
  unsubscribe: () => void
  pending: Set<AbortController>
  type?: string
  predicate: ListenerPredicate<UnknownAction, State>
}

/**
 * @internal
 * A shorthand form of the accepted args, solely so that `createListenerEntry` has validly-typed conditional logic when checking the options contents
 */
export type FallbackAddListenerOptions = {
  actionCreator?: TypedActionCreatorWithMatchFunction<string>
  type?: string
  matcher?: MatchFunction<any>
  predicate?: ListenerPredicate<any, any>
} & { effect: ListenerEffect<any, any, any> }

/**
 * Utility Types
 */

/** @public */
export type GuardedType<T> = T extends (x: any, ...args: any[]) => x is infer T
  ? T
  : never

/** @public */
export type ListenerPredicateGuardedActionType<T> =
  T extends ListenerPredicate<infer ActionType, any> ? ActionType : never
