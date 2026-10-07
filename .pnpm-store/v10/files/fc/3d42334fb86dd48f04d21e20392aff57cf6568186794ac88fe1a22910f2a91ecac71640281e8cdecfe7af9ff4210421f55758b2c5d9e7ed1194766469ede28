import * as internal from "./internal/pubsub.js";
/**
 * Creates a bounded `PubSub` with the back pressure strategy. The `PubSub` will retain
 * messages until they have been taken by all subscribers, applying back
 * pressure to publishers if the `PubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export const bounded = internal.bounded;
/**
 * Creates a bounded `PubSub` with the dropping strategy. The `PubSub` will drop new
 * messages if the `PubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dropping = internal.dropping;
/**
 * Creates a bounded `PubSub` with the sliding strategy. The `PubSub` will add new
 * messages and drop old messages if the `PubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sliding = internal.sliding;
/**
 * Creates an unbounded `PubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unbounded = internal.unbounded;
/**
 *  Returns the number of elements the queue can hold.
 *
 * @since 2.0.0
 * @category getters
 */
export const capacity = internal.capacity;
/**
 * Retrieves the size of the queue, which is equal to the number of elements
 * in the queue. This may be negative if fibers are suspended waiting for
 * elements to be added to the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export const size = internal.size;
/**
 * Returns `true` if the `Queue` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isFull = internal.isFull;
/**
 * Returns `true` if the `Queue` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty = internal.isEmpty;
/**
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category utils
 */
export const shutdown = internal.shutdown;
/**
 * Returns `true` if `shutdown` has been called, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category getters
 */
export const isShutdown = internal.isShutdown;
/**
 * Waits until the queue is shutdown. The `Effect` returned by this method will
 * not resume until the queue has been shutdown. If the queue is already
 * shutdown, the `Effect` will resume right away.
 *
 * @since 2.0.0
 * @category utils
 */
export const awaitShutdown = internal.awaitShutdown;
/**
 * Publishes a message to the `PubSub`, returning whether the message was published
 * to the `PubSub`.
 *
 * @since 2.0.0
 * @category utils
 */
export const publish = internal.publish;
/**
 * Publishes all of the specified messages to the `PubSub`, returning whether they
 * were published to the `PubSub`.
 *
 * @since 2.0.0
 * @category utils
 */
export const publishAll = internal.publishAll;
/**
 * Subscribes to receive messages from the `PubSub`. The resulting subscription can
 * be evaluated multiple times within the scope to take a message from the `PubSub`
 * each time.
 *
 * @since 2.0.0
 * @category utils
 */
export const subscribe = internal.subscribe;
//# sourceMappingURL=PubSub.js.map