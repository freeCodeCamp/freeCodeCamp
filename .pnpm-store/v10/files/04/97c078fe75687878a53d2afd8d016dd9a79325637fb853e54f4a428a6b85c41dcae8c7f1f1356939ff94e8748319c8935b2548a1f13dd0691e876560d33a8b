import type * as Option from "./Option.js";
import type { Predicate } from "./Predicate.js";
import type * as STM from "./STM.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TDequeueTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TDequeueTypeId = typeof TDequeueTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TEnqueueTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TEnqueueTypeId = typeof TEnqueueTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface TQueue<in out A> extends TEnqueue<A>, TDequeue<A> {
}
/**
 * @since 2.0.0
 * @category models
 */
export interface TEnqueue<in A> extends TQueue.TEnqueueVariance<A>, BaseTQueue {
    /**
     * Places one value in the queue.
     */
    offer(value: A): STM.STM<boolean>;
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
     */
    offerAll(iterable: Iterable<A>): STM.STM<boolean>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface TDequeue<out A> extends TQueue.TDequeueVariance<A>, BaseTQueue {
    /**
     * Views the next element in the queue without removing it, retrying if the
     * queue is empty.
     */
    readonly peek: STM.STM<A>;
    /**
     * Views the next element in the queue without removing it, returning `None`
     * if the queue is empty.
     */
    readonly peekOption: STM.STM<Option.Option<A>>;
    /**
     * Takes the oldest value in the queue. If the queue is empty, this will return
     * a computation that resumes when an item has been added to the queue.
     */
    readonly take: STM.STM<A>;
    /**
     * Takes all the values in the queue and returns the values. If the queue is
     * empty returns an empty collection.
     */
    readonly takeAll: STM.STM<Array<A>>;
    /**
     * Takes up to max number of values from the queue.
     */
    takeUpTo(max: number): STM.STM<Array<A>>;
}
/**
 * The base interface that all `TQueue`s must implement.
 *
 * @since 2.0.0
 * @category models
 */
export interface BaseTQueue {
    /**
     * Returns the number of elements the queue can hold.
     */
    capacity(): number;
    /**
     * Retrieves the size of the queue, which is equal to the number of elements
     * in the queue. This may be negative if fibers are suspended waiting for
     * elements to be added to the queue.
     */
    readonly size: STM.STM<number>;
    /**
     * Returns `true` if the `TQueue` contains at least one element, `false`
     * otherwise.
     */
    readonly isFull: STM.STM<boolean>;
    /**
     * Returns `true` if the `TQueue` contains zero elements, `false` otherwise.
     */
    readonly isEmpty: STM.STM<boolean>;
    /**
     * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
     * to `offer*` and `take*` will be interrupted immediately.
     */
    readonly shutdown: STM.STM<void>;
    /**
     * Returns `true` if `shutdown` has been called, otherwise returns `false`.
     */
    readonly isShutdown: STM.STM<boolean>;
    /**
     * Waits until the queue is shutdown. The `STM` returned by this method will
     * not resume until the queue has been shutdown. If the queue is already
     * shutdown, the `STM` will resume right away.
     */
    readonly awaitShutdown: STM.STM<void>;
}
/**
 * @since 2.0.0
 */
export declare namespace TQueue {
    /**
     * @since 2.0.0
     * @category models
     */
    interface TEnqueueVariance<in A> {
        readonly [TEnqueueTypeId]: {
            readonly _In: Types.Contravariant<A>;
        };
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface TDequeueVariance<out A> {
        readonly [TDequeueTypeId]: {
            readonly _Out: Types.Covariant<A>;
        };
    }
}
/**
 * Returns `true` if the specified value is a `TQueue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isTQueue: (u: unknown) => u is TQueue<unknown>;
/**
 * Returns `true` if the specified value is a `TDequeue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isTDequeue: (u: unknown) => u is TDequeue<unknown>;
/**
 * Returns `true` if the specified value is a `TEnqueue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isTEnqueue: (u: unknown) => u is TEnqueue<unknown>;
/**
 * Waits until the queue is shutdown. The `STM` returned by this method will
 * not resume until the queue has been shutdown. If the queue is already
 * shutdown, the `STM` will resume right away.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const awaitShutdown: <A>(self: TDequeue<A> | TEnqueue<A>) => STM.STM<void>;
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
export declare const bounded: <A>(requestedCapacity: number) => STM.STM<TQueue<A>>;
/**
 * Returns the number of elements the queue can hold.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const capacity: <A>(self: TDequeue<A> | TEnqueue<A>) => number;
/**
 * Creates a bounded queue with the dropping strategy. The queue will drop new
 * values if the queue is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dropping: <A>(requestedCapacity: number) => STM.STM<TQueue<A>>;
/**
 * Returns `true` if the `TQueue` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isEmpty: <A>(self: TDequeue<A> | TEnqueue<A>) => STM.STM<boolean>;
/**
 * Returns `true` if the `TQueue` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isFull: <A>(self: TDequeue<A> | TEnqueue<A>) => STM.STM<boolean>;
/**
 * Returns `true` if `shutdown` has been called, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isShutdown: <A>(self: TDequeue<A> | TEnqueue<A>) => STM.STM<boolean>;
/**
 * Places one value in the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const offer: {
    /**
     * Places one value in the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(value: A): (self: TEnqueue<A>) => STM.STM<void>;
    /**
     * Places one value in the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TEnqueue<A>, value: A): STM.STM<void>;
};
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
export declare const offerAll: {
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
    <A>(iterable: Iterable<A>): (self: TEnqueue<A>) => STM.STM<boolean>;
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
    <A>(self: TEnqueue<A>, iterable: Iterable<A>): STM.STM<boolean>;
};
/**
 * Views the next element in the queue without removing it, retrying if the
 * queue is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const peek: <A>(self: TDequeue<A>) => STM.STM<A>;
/**
 * Views the next element in the queue without removing it, returning `None`
 * if the queue is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const peekOption: <A>(self: TDequeue<A>) => STM.STM<Option.Option<A>>;
/**
 * Takes a single element from the queue, returning `None` if the queue is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const poll: <A>(self: TDequeue<A>) => STM.STM<Option.Option<A>>;
/**
 * Drops elements from the queue while they do not satisfy the predicate,
 * taking and returning the first element that does satisfy the predicate.
 * Retries if no elements satisfy the predicate.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const seek: {
    /**
     * Drops elements from the queue while they do not satisfy the predicate,
     * taking and returning the first element that does satisfy the predicate.
     * Retries if no elements satisfy the predicate.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(predicate: Predicate<A>): (self: TDequeue<A>) => STM.STM<A>;
    /**
     * Drops elements from the queue while they do not satisfy the predicate,
     * taking and returning the first element that does satisfy the predicate.
     * Retries if no elements satisfy the predicate.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TDequeue<A>, predicate: Predicate<A>): STM.STM<A>;
};
/**
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const shutdown: <A>(self: TDequeue<A> | TEnqueue<A>) => STM.STM<void>;
/**
 * Retrieves the size of the queue, which is equal to the number of elements
 * in the queue. This may be negative if fibers are suspended waiting for
 * elements to be added to the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <A>(self: TDequeue<A> | TEnqueue<A>) => STM.STM<number>;
/**
 * Creates a bounded queue with the sliding strategy. The queue will add new
 * values and drop old values if the queue is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sliding: <A>(requestedCapacity: number) => STM.STM<TQueue<A>>;
/**
 * Takes the oldest value in the queue. If the queue is empty, this will return
 * a computation that resumes when an item has been added to the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const take: <A>(self: TDequeue<A>) => STM.STM<A>;
/**
 * Takes all the values in the queue and returns the values. If the queue is
 * empty returns an empty collection.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const takeAll: <A>(self: TDequeue<A>) => STM.STM<Array<A>>;
/**
 * Takes a number of elements from the queue between the specified minimum and
 * maximum. If there are fewer than the minimum number of elements available,
 * retries until at least the minimum number of elements have been collected.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const takeBetween: {
    /**
     * Takes a number of elements from the queue between the specified minimum and
     * maximum. If there are fewer than the minimum number of elements available,
     * retries until at least the minimum number of elements have been collected.
     *
     * @since 2.0.0
     * @category mutations
     */
    (min: number, max: number): <A>(self: TDequeue<A>) => STM.STM<Array<A>>;
    /**
     * Takes a number of elements from the queue between the specified minimum and
     * maximum. If there are fewer than the minimum number of elements available,
     * retries until at least the minimum number of elements have been collected.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TDequeue<A>, min: number, max: number): STM.STM<Array<A>>;
};
/**
 * Takes the specified number of elements from the queue. If there are fewer
 * than the specified number of elements available, it retries until they
 * become available.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const takeN: {
    /**
     * Takes the specified number of elements from the queue. If there are fewer
     * than the specified number of elements available, it retries until they
     * become available.
     *
     * @since 2.0.0
     * @category mutations
     */
    (n: number): <A>(self: TDequeue<A>) => STM.STM<Array<A>>;
    /**
     * Takes the specified number of elements from the queue. If there are fewer
     * than the specified number of elements available, it retries until they
     * become available.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TDequeue<A>, n: number): STM.STM<Array<A>>;
};
/**
 * Takes up to max number of values from the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const takeUpTo: {
    /**
     * Takes up to max number of values from the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    (max: number): <A>(self: TDequeue<A>) => STM.STM<Array<A>>;
    /**
     * Takes up to max number of values from the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TDequeue<A>, max: number): STM.STM<Array<A>>;
};
/**
 * Creates an unbounded queue.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unbounded: <A>() => STM.STM<TQueue<A>>;
//# sourceMappingURL=TQueue.d.ts.map