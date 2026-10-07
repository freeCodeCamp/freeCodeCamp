export interface Action<T extends string = string> {
  type: T
}

export type Saga<Args extends any[] = any[]> = (...args: Args) => Iterator<any>

/**
 * Annotate return type of generators with `SagaIterator` to get strict
 * type-checking of yielded effects.
 */
export type SagaIterator<RT = any> = Iterator<StrictEffect, RT, any>

export type GuardPredicate<G extends T, T = any> = (arg: T) => arg is G

export type ActionType = string | number | symbol

export type Predicate<T> = (arg: T) => boolean

export type StringableActionCreator<A extends Action = Action> = {
  (...args: any[]): A
  toString(): string
}

export type SubPattern<T> = Predicate<T> | StringableActionCreator | ActionType

export type Pattern<T> = SubPattern<T> | SubPattern<T>[]

export type ActionSubPattern<Guard extends Action = Action> =
  | GuardPredicate<Guard, Action>
  | StringableActionCreator<Guard>
  | Predicate<Action>
  | ActionType

export type ActionPattern<Guard extends Action = Action> = ActionSubPattern<Guard> | ActionSubPattern<Guard>[]

export type ActionMatchingPattern<P extends ActionPattern> = P extends ActionSubPattern
  ? ActionMatchingSubPattern<P>
  : P extends ActionSubPattern[]
  ? ActionMatchingSubPattern<P[number]>
  : never

export type ActionMatchingSubPattern<P extends ActionSubPattern> = P extends GuardPredicate<infer A, Action>
  ? A
  : P extends StringableActionCreator<infer A>
  ? A
  : Action

export type NotUndefined = {} | null

/**
 * Used to implement the buffering strategy for a channel. The Buffer interface
 * defines 3 methods: `isEmpty`, `put` and `take`
 */
export interface Buffer<T> {
  /**
   * Returns true if there are no messages on the buffer. A channel calls this
   * method whenever a new taker is registered
   */
  isEmpty(): boolean
  /**
   * Used to put new message in the buffer. Note the Buffer can choose to not
   * store the message (e.g. a dropping buffer can drop any new message
   * exceeding a given limit)
   */
  put(message: T): void
  /**
   * used to retrieve any buffered message. Note the behavior of this method has
   * to be consistent with `isEmpty`
   */
  take(): T | undefined
  flush(): T[]
}

/**
 * A channel is an object used to send and receive messages between tasks.
 * Messages from senders are queued until an interested receiver request a
 * message, and registered receiver is queued until a message is available.
 *
 * Every channel has an underlying buffer which defines the buffering strategy
 * (fixed size, dropping, sliding)
 *
 * The Channel interface defines 3 methods: `take`, `put` and `close`
 */
export interface Channel<T extends NotUndefined> {
  /**
   * Used to register a taker. The take is resolved using the following rules
   *
   * - If the channel has buffered messages, then `callback` will be invoked
   *   with the next message from the underlying buffer (using `buffer.take()`)
   * - If the channel is closed and there are no buffered messages, then
   *   `callback` is invoked with `END`
   * - Otherwise`callback` will be queued until a message is put into the
   *   channel
   */
  take(cb: (message: T | END) => void): void
  /**
   * Used to put message on the buffer. The put will be handled using the
   * following rules
   *
   * - If the channel is closed, then the put will have no effect.
   * - If there are pending takers, then invoke the oldest taker with the
   *   message.
   * - Otherwise put the message on the underlying buffer
   */
  put(message: T | END): void
  /**
   * Used to extract all buffered messages from the channel. The flush is
   * resolved using the following rules
   *
   * - If the channel is closed and there are no buffered messages, then
   *   `callback` is invoked with `END`
   * - Otherwise `callback` is invoked with all buffered messages.
   */
  flush(cb: (items: T[] | END) => void): void
  /**
   * Closes the channel which means no more puts will be allowed. All pending
   * takers will be invoked with `END`.
   */
  close(): void
}

export interface Effect<T = any, P = any> {
  '@@redux-saga/IO': true
  combinator: boolean
  type: T
  payload: P
}

export interface SimpleEffect<T, P = any> extends Effect<T, P> {
  combinator: false
}

export type StrictEffect<T = any, P = any> = SimpleEffect<T, P> | StrictCombinatorEffect<T, P>

/**
 * `all` / `race` effects
 */
export type ArrayCombinatorEffectDescriptor<E = any> = E[]
export type ObjectCombinatorEffectDescriptor<E = any> = { [key: string]: E }
export type CombinatorEffectDescriptor<E = any> =
  | ArrayCombinatorEffectDescriptor<E>
  | ObjectCombinatorEffectDescriptor<E>

export interface CombinatorEffect<T, P> extends Effect<T, CombinatorEffectDescriptor<P>> {
  combinator: true
}

export interface StrictCombinatorEffect<T, P> extends Effect<T, CombinatorEffectDescriptor<StrictEffect>> {
  combinator: true
}

export type END = { type: '@@redux-saga/CHANNEL_END' }

/**
 * The Task interface specifies the result of running a Saga using `fork`,
 * `middleware.run` or `runSaga`.
 */
export interface Task<T = any> {
  /**
   * Returns true if the task hasn't yet returned or thrown an error
   */
  isRunning(): boolean
  /**
   * Returns true if the task has been cancelled
   */
  isCancelled(): boolean
  /**
   * Returns task return value. `undefined` if task is still running
   */
  result<R = T>(): R | undefined
  /**
   * Returns task thrown error. `undefined` if task is still running
   */
  error(): any | undefined
  /**
   * Returns a Promise which is either:
   * - resolved with task's return value
   * - rejected with task's thrown error
   */
  toPromise<R = T>(): Promise<R>
  /**
   * Cancels the task (If it is still running)
   */
  cancel(): void
  setContext<C extends object>(props: Partial<C>): void
}
