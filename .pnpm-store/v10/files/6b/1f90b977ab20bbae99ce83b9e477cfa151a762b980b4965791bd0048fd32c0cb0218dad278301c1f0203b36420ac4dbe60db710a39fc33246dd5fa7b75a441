/**
 * @since 2.0.0
 */
import * as Chunk from "./Chunk.js";
import { type Inspectable } from "./Inspectable.js";
import type { Pipeable } from "./Pipeable.js";
declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category symbol
 */
export declare const EmptyMutableQueue: unique symbol;
/**
 * @since 2.0.0
 * @category model
 */
export interface MutableQueue<out A> extends Iterable<A>, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
}
/**
 * @since 2.0.0
 */
export declare namespace MutableQueue {
    /**
     * @since 2.0.0
     */
    type Empty = typeof EmptyMutableQueue;
}
/**
 * Creates a new bounded `MutableQueue`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const bounded: <A>(capacity: number) => MutableQueue<A>;
/**
 * Creates a new unbounded `MutableQueue`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unbounded: <A>() => MutableQueue<A>;
/**
 * Returns the current number of elements in the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const length: <A>(self: MutableQueue<A>) => number;
/**
 * Returns `true` if the queue is empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isEmpty: <A>(self: MutableQueue<A>) => boolean;
/**
 * Returns `true` if the queue is full, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isFull: <A>(self: MutableQueue<A>) => boolean;
/**
 * The **maximum** number of elements that a queue can hold.
 *
 * **Note**: unbounded queues can still implement this interface with
 * `capacity = Infinity`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const capacity: <A>(self: MutableQueue<A>) => number;
/**
 * Offers an element to the queue.
 *
 * Returns whether the enqueue was successful or not.
 *
 * @since 2.0.0
 */
export declare const offer: {
    /**
     * Offers an element to the queue.
     *
     * Returns whether the enqueue was successful or not.
     *
     * @since 2.0.0
     */
    <A>(self: MutableQueue<A>, value: A): boolean;
    /**
     * Offers an element to the queue.
     *
     * Returns whether the enqueue was successful or not.
     *
     * @since 2.0.0
     */
    <A>(value: A): (self: MutableQueue<A>) => boolean;
};
/**
 * Enqueues a collection of values into the queue.
 *
 * Returns a `Chunk` of the values that were **not** able to be enqueued.
 *
 * @since 2.0.0
 */
export declare const offerAll: {
    /**
     * Enqueues a collection of values into the queue.
     *
     * Returns a `Chunk` of the values that were **not** able to be enqueued.
     *
     * @since 2.0.0
     */
    <A>(values: Iterable<A>): (self: MutableQueue<A>) => Chunk.Chunk<A>;
    /**
     * Enqueues a collection of values into the queue.
     *
     * Returns a `Chunk` of the values that were **not** able to be enqueued.
     *
     * @since 2.0.0
     */
    <A>(self: MutableQueue<A>, values: Iterable<A>): Chunk.Chunk<A>;
};
/**
 * Dequeues an element from the queue.
 *
 * Returns either an element from the queue, or the `def` param.
 *
 * **Note**: if there is no meaningful default for your type, you can always
 * use `poll(MutableQueue.EmptyMutableQueue)`.
 *
 * @since 2.0.0
 */
export declare const poll: {
    /**
     * Dequeues an element from the queue.
     *
     * Returns either an element from the queue, or the `def` param.
     *
     * **Note**: if there is no meaningful default for your type, you can always
     * use `poll(MutableQueue.EmptyMutableQueue)`.
     *
     * @since 2.0.0
     */
    <D>(def: D): <A>(self: MutableQueue<A>) => D | A;
    /**
     * Dequeues an element from the queue.
     *
     * Returns either an element from the queue, or the `def` param.
     *
     * **Note**: if there is no meaningful default for your type, you can always
     * use `poll(MutableQueue.EmptyMutableQueue)`.
     *
     * @since 2.0.0
     */
    <A, D>(self: MutableQueue<A>, def: D): A | D;
};
/**
 * Dequeues up to `n` elements from the queue.
 *
 * Returns a `List` of up to `n` elements.
 *
 * @since 2.0.0
 */
export declare const pollUpTo: {
    /**
     * Dequeues up to `n` elements from the queue.
     *
     * Returns a `List` of up to `n` elements.
     *
     * @since 2.0.0
     */
    (n: number): <A>(self: MutableQueue<A>) => Chunk.Chunk<A>;
    /**
     * Dequeues up to `n` elements from the queue.
     *
     * Returns a `List` of up to `n` elements.
     *
     * @since 2.0.0
     */
    <A>(self: MutableQueue<A>, n: number): Chunk.Chunk<A>;
};
export {};
//# sourceMappingURL=MutableQueue.d.ts.map