import * as internal from "./internal/queue.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const EnqueueTypeId = internal.EnqueueTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export const DequeueTypeId = internal.DequeueTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export const QueueStrategyTypeId = internal.QueueStrategyTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export const BackingQueueTypeId = internal.BackingQueueTypeId;
/**
 * Returns `true` if the specified value is a `Queue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isQueue = internal.isQueue;
/**
 * Returns `true` if the specified value is a `Dequeue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isDequeue = internal.isDequeue;
/**
 * Returns `true` if the specified value is a `Enqueue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isEnqueue = internal.isEnqueue;
/**
 * @since 2.0.0
 * @category strategies
 */
export const backPressureStrategy = internal.backPressureStrategy;
/**
 * @since 2.0.0
 * @category strategies
 */
export const droppingStrategy = internal.droppingStrategy;
/**
 * @since 2.0.0
 * @category strategies
 */
export const slidingStrategy = internal.slidingStrategy;
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
/**
 * Makes a new bounded `Queue`. When the capacity of the queue is reached, any
 * additional calls to `offer` will be suspended until there is more room in
 * the queue.
 *
 * **Note**: When possible use only power of 2 capacities; this will provide
 * better performance by utilising an optimised version of the underlying
 * `RingBuffer`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const bounded = internal.bounded;
/**
 * Makes a new bounded `Queue` with the dropping strategy.
 *
 * When the capacity of the queue is reached, new elements will be dropped and the
 * old elements will remain.
 *
 * **Note**: When possible use only power of 2 capacities; this will provide
 * better performance by utilising an optimised version of the underlying
 * `RingBuffer`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dropping = internal.dropping;
/**
 * Makes a new bounded `Queue` with the sliding strategy.
 *
 * When the capacity of the queue is reached, new elements will be added and the
 * old elements will be dropped.
 *
 * **Note**: When possible use only power of 2 capacities; this will provide
 * better performance by utilising an optimised version of the underlying
 * `RingBuffer`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sliding = internal.sliding;
/**
 * Creates a new unbounded `Queue`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unbounded = internal.unbounded;
/**
 * Returns the number of elements the queue can hold.
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
 * Returns `true` if the `Queue` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty = internal.isEmpty;
/**
 * Returns `true` if the `Queue` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isFull = internal.isFull;
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
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category utils
 */
export const shutdown = internal.shutdown;
/**
 * Places one value in the queue.
 *
 * @since 2.0.0
 * @category utils
 */
export const offer = internal.offer;
/**
 * Places one value in the queue.
 *
 * @since 2.0.0
 * @category utils
 */
export const unsafeOffer = internal.unsafeOffer;
/**
 * For Bounded Queue: uses the `BackPressure` Strategy, places the values in
 * the queue and always returns true. If the queue has reached capacity, then
 * the fiber performing the `offerAll` will be suspended until there is room
 * in the queue.
 *
 * For Unbounded Queue: Places all values in the queue and returns true.
 *
 * For Sliding Queue: uses `Sliding` Strategy If there is room in the queue,
 * it places the values otherwise it removes the old elements and enqueues the
 * new ones. Always returns true.
 *
 * For Dropping Queue: uses `Dropping` Strategy, It places the values in the
 * queue but if there is no room it will not enqueue them and return false.
 *
 * @since 2.0.0
 * @category utils
 */
export const offerAll = internal.offerAll;
/**
 * Returns the first value in the `Queue` as a `Some<A>`, or `None` if the queue
 * is empty.
 *
 * @since 2.0.0
 * @category utils
 */
export const poll = internal.poll;
/**
 * Takes the oldest value in the queue. If the queue is empty, this will return
 * a computation that resumes when an item has been added to the queue.
 *
 * @since 2.0.0
 * @category utils
 */
export const take = internal.take;
/**
 * Takes all the values in the queue and returns the values. If the queue is
 * empty returns an empty collection.
 *
 * @since 2.0.0
 * @category utils
 */
export const takeAll = internal.takeAll;
/**
 * Takes up to max number of values from the queue.
 *
 * @since 2.0.0
 * @category utils
 */
export const takeUpTo = internal.takeUpTo;
/**
 * Takes a number of elements from the queue between the specified minimum and
 * maximum. If there are fewer than the minimum number of elements available,
 * suspends until at least the minimum number of elements have been collected.
 *
 * @since 2.0.0
 * @category utils
 */
export const takeBetween = internal.takeBetween;
/**
 * Takes the specified number of elements from the queue. If there are fewer
 * than the specified number of elements available, it suspends until they
 * become available.
 *
 * @since 2.0.0
 * @category utils
 */
export const takeN = internal.takeN;
//# sourceMappingURL=Queue.js.map