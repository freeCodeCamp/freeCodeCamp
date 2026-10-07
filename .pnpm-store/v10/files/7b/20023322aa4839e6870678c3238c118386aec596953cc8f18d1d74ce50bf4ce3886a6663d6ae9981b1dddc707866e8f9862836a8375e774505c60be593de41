/**
 * @since 2.0.0
 */
import type * as Chunk from "./Chunk.js";
import type * as Option from "./Option.js";
import type * as Order from "./Order.js";
import type { Predicate } from "./Predicate.js";
import type * as STM from "./STM.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TPriorityQueueTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TPriorityQueueTypeId = typeof TPriorityQueueTypeId;
/**
 * A `TPriorityQueue` contains values of type `A` that an `Order` is defined
 * on. Unlike a `TQueue`, `take` returns the highest priority value (the value
 * that is first in the specified ordering) as opposed to the first value
 * offered to the queue. The ordering that elements with the same priority will
 * be taken from the queue is not guaranteed.
 *
 * @since 2.0.0
 * @category models
 */
export interface TPriorityQueue<in out A> extends TPriorityQueue.Variance<A> {
}
/**
 * @since 2.0.0
 */
export declare namespace TPriorityQueue {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in out A> {
        readonly [TPriorityQueueTypeId]: {
            readonly _A: Types.Invariant<A>;
        };
    }
}
/**
 * Constructs a new empty `TPriorityQueue` with the specified `Order`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <A>(order: Order.Order<A>) => STM.STM<TPriorityQueue<A>>;
/**
 * Creates a new `TPriorityQueue` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: <A>(order: Order.Order<A>) => (iterable: Iterable<A>) => STM.STM<TPriorityQueue<A>>;
/**
 * Checks whether the queue is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isEmpty: <A>(self: TPriorityQueue<A>) => STM.STM<boolean>;
/**
 * Checks whether the queue is not empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isNonEmpty: <A>(self: TPriorityQueue<A>) => STM.STM<boolean>;
/**
 * Makes a new `TPriorityQueue` that is initialized with specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A>(order: Order.Order<A>) => (...elements: Array<A>) => STM.STM<TPriorityQueue<A>>;
/**
 * Offers the specified value to the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const offer: {
    /**
     * Offers the specified value to the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(value: A): (self: TPriorityQueue<A>) => STM.STM<void>;
    /**
     * Offers the specified value to the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TPriorityQueue<A>, value: A): STM.STM<void>;
};
/**
 * Offers all of the elements in the specified collection to the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const offerAll: {
    /**
     * Offers all of the elements in the specified collection to the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(values: Iterable<A>): (self: TPriorityQueue<A>) => STM.STM<void>;
    /**
     * Offers all of the elements in the specified collection to the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TPriorityQueue<A>, values: Iterable<A>): STM.STM<void>;
};
/**
 * Peeks at the first value in the queue without removing it, retrying until a
 * value is in the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const peek: <A>(self: TPriorityQueue<A>) => STM.STM<A>;
/**
 * Peeks at the first value in the queue without removing it, returning `None`
 * if there is not a value in the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const peekOption: <A>(self: TPriorityQueue<A>) => STM.STM<Option.Option<A>>;
/**
 * Removes all elements from the queue matching the specified predicate.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const removeIf: {
    /**
     * Removes all elements from the queue matching the specified predicate.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(predicate: Predicate<A>): (self: TPriorityQueue<A>) => STM.STM<void>;
    /**
     * Removes all elements from the queue matching the specified predicate.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(self: TPriorityQueue<A>, predicate: Predicate<A>): STM.STM<void>;
};
/**
 * Retains only elements from the queue matching the specified predicate.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const retainIf: {
    /**
     * Retains only elements from the queue matching the specified predicate.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(predicate: Predicate<A>): (self: TPriorityQueue<A>) => STM.STM<void>;
    /**
     * Retains only elements from the queue matching the specified predicate.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(self: TPriorityQueue<A>, predicate: Predicate<A>): STM.STM<void>;
};
/**
 * Returns the size of the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <A>(self: TPriorityQueue<A>) => STM.STM<number>;
/**
 * Takes a value from the queue, retrying until a value is in the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const take: <A>(self: TPriorityQueue<A>) => STM.STM<A>;
/**
 * Takes all values from the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const takeAll: <A>(self: TPriorityQueue<A>) => STM.STM<Array<A>>;
/**
 * Takes a value from the queue, returning `None` if there is not a value in
 * the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const takeOption: <A>(self: TPriorityQueue<A>) => STM.STM<Option.Option<A>>;
/**
 * Takes up to the specified maximum number of elements from the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const takeUpTo: {
    /**
     * Takes up to the specified maximum number of elements from the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    (n: number): <A>(self: TPriorityQueue<A>) => STM.STM<Array<A>>;
    /**
     * Takes up to the specified maximum number of elements from the queue.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TPriorityQueue<A>, n: number): STM.STM<Array<A>>;
};
/**
 * Collects all values into a `Chunk`.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const toChunk: <A>(self: TPriorityQueue<A>) => STM.STM<Chunk.Chunk<A>>;
/**
 * Collects all values into an array.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const toArray: <A>(self: TPriorityQueue<A>) => STM.STM<Array<A>>;
//# sourceMappingURL=TPriorityQueue.d.ts.map