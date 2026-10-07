/**
 * @since 2.0.0
 */
import * as internal from "./internal/stm/tQueue.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const TDequeueTypeId = internal.TDequeueTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export const TEnqueueTypeId = internal.TEnqueueTypeId;
/**
 * Returns `true` if the specified value is a `TQueue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isTQueue = internal.isTQueue;
/**
 * Returns `true` if the specified value is a `TDequeue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isTDequeue = internal.isTDequeue;
/**
 * Returns `true` if the specified value is a `TEnqueue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isTEnqueue = internal.isTEnqueue;
/**
 * Waits until the queue is shutdown. The `STM` returned by this method will
 * not resume until the queue has been shutdown. If the queue is already
 * shutdown, the `STM` will resume right away.
 *
 * @since 2.0.0
 * @category mutations
 */
export const awaitShutdown = internal.awaitShutdown;
/**
 * Creates a bounded queue with the back pressure strategy. The queue will
 * retain values until they have been taken, applying back pressure to
 * offerors if the queue is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export const bounded = internal.bounded;
/**
 * Returns the number of elements the queue can hold.
 *
 * @since 2.0.0
 * @category getters
 */
export const capacity = internal.capacity;
/**
 * Creates a bounded queue with the dropping strategy. The queue will drop new
 * values if the queue is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dropping = internal.dropping;
/**
 * Returns `true` if the `TQueue` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty = internal.isEmpty;
/**
 * Returns `true` if the `TQueue` contains at least one element, `false`
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
 * Places one value in the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export const offer = internal.offer;
/**
 * For Bounded TQueue: uses the `BackPressure` Strategy, places the values in
 * the queue and always returns true. If the queue has reached capacity, then
 * the fiber performing the `offerAll` will be suspended until there is room
 * in the queue.
 *
 * For Unbounded TQueue: Places all values in the queue and returns true.
 *
 * For Sliding TQueue: uses `Sliding` Strategy If there is room in the queue,
 * it places the values otherwise it removes the old elements and enqueues the
 * new ones. Always returns true.
 *
 * For Dropping TQueue: uses `Dropping` Strategy, It places the values in the
 * queue but if there is no room it will not enqueue them and return false.
 *
 * @since 2.0.0
 * @category mutations
 */
export const offerAll = internal.offerAll;
/**
 * Views the next element in the queue without removing it, retrying if the
 * queue is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const peek = internal.peek;
/**
 * Views the next element in the queue without removing it, returning `None`
 * if the queue is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const peekOption = internal.peekOption;
/**
 * Takes a single element from the queue, returning `None` if the queue is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const poll = internal.poll;
/**
 * Drops elements from the queue while they do not satisfy the predicate,
 * taking and returning the first element that does satisfy the predicate.
 * Retries if no elements satisfy the predicate.
 *
 * @since 2.0.0
 * @category mutations
 */
export const seek = internal.seek;
/**
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category mutations
 */
export const shutdown = internal.shutdown;
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
 * Creates a bounded queue with the sliding strategy. The queue will add new
 * values and drop old values if the queue is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sliding = internal.sliding;
/**
 * Takes the oldest value in the queue. If the queue is empty, this will return
 * a computation that resumes when an item has been added to the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export const take = internal.take;
/**
 * Takes all the values in the queue and returns the values. If the queue is
 * empty returns an empty collection.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeAll = internal.takeAll;
/**
 * Takes a number of elements from the queue between the specified minimum and
 * maximum. If there are fewer than the minimum number of elements available,
 * retries until at least the minimum number of elements have been collected.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeBetween = internal.takeBetween;
/**
 * Takes the specified number of elements from the queue. If there are fewer
 * than the specified number of elements available, it retries until they
 * become available.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeN = internal.takeN;
/**
 * Takes up to max number of values from the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeUpTo = internal.takeUpTo;
/**
 * Creates an unbounded queue.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unbounded = internal.unbounded;
//# sourceMappingURL=TQueue.js.map