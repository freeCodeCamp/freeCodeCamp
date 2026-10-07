/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js"
import type * as HashSet from "./HashSet.js"
import * as internal from "./internal/stm/tPubSub.js"
import type * as tQueue from "./internal/stm/tQueue.js"
import type * as Scope from "./Scope.js"
import type * as STM from "./STM.js"
import type * as TQueue from "./TQueue.js"
import type * as TRef from "./TRef.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const TPubSubTypeId: unique symbol = internal.TPubSubTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type TPubSubTypeId = typeof TPubSubTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface TPubSub<in out A> extends TQueue.TEnqueue<A> {
  readonly [TPubSubTypeId]: {
    readonly _A: Types.Invariant<A>
  }
}
/**
 * @internal
 * @since 2.0.0
 */
export interface TPubSub<in out A> {
  /** @internal */
  readonly pubsubSize: TRef.TRef<number>
  /** @internal */
  readonly publisherHead: TRef.TRef<TRef.TRef<internal.Node<A> | undefined>>
  /** @internal */
  readonly publisherTail: TRef.TRef<TRef.TRef<internal.Node<A> | undefined> | undefined>
  /** @internal */
  readonly requestedCapacity: number
  /** @internal */
  readonly strategy: tQueue.TQueueStrategy
  /** @internal */
  readonly subscriberCount: TRef.TRef<number>
  /** @internal */
  readonly subscribers: TRef.TRef<HashSet.HashSet<TRef.TRef<TRef.TRef<internal.Node<A>> | undefined>>>
}

/**
 * Waits until the `TPubSub` is shutdown. The `STM` returned by this method will
 * not resume until the queue has been shutdown. If the `TPubSub` is already
 * shutdown, the `STM` will resume right away.
 *
 * @since 2.0.0
 * @category mutations
 */
export const awaitShutdown: <A>(self: TPubSub<A>) => STM.STM<void> = internal.awaitShutdown

/**
 * Creates a bounded `TPubSub` with the back pressure strategy. The `TPubSub` will retain
 * messages until they have been taken by all subscribers, applying back
 * pressure to publishers if the `TPubSub` is at capacity.
 *
 * @since 2.0.0
 * @category constructors
 */
export const bounded: <A>(requestedCapacity: number) => STM.STM<TPubSub<A>> = internal.bounded

/**
 * Returns the number of elements the `TPubSub` can hold.
 *
 * @since 2.0.0
 * @category getters
 */
export const capacity: <A>(self: TPubSub<A>) => number = internal.capacity

/**
 * Creates a bounded `TPubSub` with the dropping strategy. The `TPubSub` will drop new
 * messages if the `TPubSub` is at capacity.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dropping: <A>(requestedCapacity: number) => STM.STM<TPubSub<A>> = internal.dropping

/**
 * Returns `true` if the `TPubSub` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty: <A>(self: TPubSub<A>) => STM.STM<boolean> = internal.isEmpty

/**
 * Returns `true` if the `TPubSub` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isFull: <A>(self: TPubSub<A>) => STM.STM<boolean> = internal.isFull

/**
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category utils
 */
export const shutdown: <A>(self: TPubSub<A>) => STM.STM<void> = internal.shutdown

/**
 * Returns `true` if `shutdown` has been called, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category getters
 */
export const isShutdown: <A>(self: TPubSub<A>) => STM.STM<boolean> = internal.isShutdown

/**
 * Publishes a message to the `TPubSub`, returning whether the message was published
 * to the `TPubSub`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const publish: {
  /**
   * Publishes a message to the `TPubSub`, returning whether the message was published
   * to the `TPubSub`.
   *
   * @since 2.0.0
   * @category mutations
   */
  <A>(value: A): (self: TPubSub<A>) => STM.STM<boolean>
  /**
   * Publishes a message to the `TPubSub`, returning whether the message was published
   * to the `TPubSub`.
   *
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TPubSub<A>, value: A): STM.STM<boolean>
} = internal.publish

/**
 * Publishes all of the specified messages to the `TPubSub`, returning whether they
 * were published to the `TPubSub`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const publishAll: {
  /**
   * Publishes all of the specified messages to the `TPubSub`, returning whether they
   * were published to the `TPubSub`.
   *
   * @since 2.0.0
   * @category mutations
   */
  <A>(iterable: Iterable<A>): (self: TPubSub<A>) => STM.STM<boolean>
  /**
   * Publishes all of the specified messages to the `TPubSub`, returning whether they
   * were published to the `TPubSub`.
   *
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TPubSub<A>, iterable: Iterable<A>): STM.STM<boolean>
} = internal.publishAll

/**
 * Retrieves the size of the `TPubSub`, which is equal to the number of elements
 * in the `TPubSub`. This may be negative if fibers are suspended waiting for
 * elements to be added to the `TPubSub`.
 *
 * @since 2.0.0
 * @category getters
 */
export const size: <A>(self: TPubSub<A>) => STM.STM<number> = internal.size

/**
 * Creates a bounded `TPubSub` with the sliding strategy. The `TPubSub` will add new
 * messages and drop old messages if the `TPubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sliding: <A>(requestedCapacity: number) => STM.STM<TPubSub<A>> = internal.sliding

/**
 * Subscribes to receive messages from the `TPubSub`. The resulting subscription can
 * be evaluated multiple times to take a message from the `TPubSub` each time. The
 * caller is responsible for unsubscribing from the `TPubSub` by shutting down the
 * queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export const subscribe: <A>(self: TPubSub<A>) => STM.STM<TQueue.TDequeue<A>> = internal.subscribe

/**
 * Subscribes to receive messages from the `TPubSub`. The resulting subscription can
 * be evaluated multiple times within the scope to take a message from the `TPubSub`
 * each time.
 *
 * @since 2.0.0
 * @category mutations
 */
export const subscribeScoped: <A>(self: TPubSub<A>) => Effect.Effect<TQueue.TDequeue<A>, never, Scope.Scope> =
  internal.subscribeScoped

/**
 * Creates an unbounded `TPubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unbounded: <A>() => STM.STM<TPubSub<A>> = internal.unbounded
