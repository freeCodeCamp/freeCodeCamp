/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Queue from "./Queue.js";
import type * as Scope from "./Scope.js";
/**
 * A `PubSub<A>` is an asynchronous message hub into which publishers can publish
 * messages of type `A` and subscribers can subscribe to take messages of type
 * `A`.
 *
 * @since 2.0.0
 * @category models
 */
export interface PubSub<in out A> extends Queue.Enqueue<A>, Pipeable {
    /**
     * Publishes a message to the `PubSub`, returning whether the message was published
     * to the `PubSub`.
     */
    publish(value: A): Effect.Effect<boolean>;
    /**
     * Publishes all of the specified messages to the `PubSub`, returning whether they
     * were published to the `PubSub`.
     */
    publishAll(elements: Iterable<A>): Effect.Effect<boolean>;
    /**
     * Subscribes to receive messages from the `PubSub`. The resulting subscription can
     * be evaluated multiple times within the scope to take a message from the `PubSub`
     * each time.
     */
    readonly subscribe: Effect.Effect<Queue.Dequeue<A>, never, Scope.Scope>;
}
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
export declare const bounded: <A>(capacity: number | {
    readonly capacity: number;
    readonly replay?: number | undefined;
}) => Effect.Effect<PubSub<A>>;
/**
 * Creates a bounded `PubSub` with the dropping strategy. The `PubSub` will drop new
 * messages if the `PubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dropping: <A>(capacity: number | {
    readonly capacity: number;
    readonly replay?: number | undefined;
}) => Effect.Effect<PubSub<A>>;
/**
 * Creates a bounded `PubSub` with the sliding strategy. The `PubSub` will add new
 * messages and drop old messages if the `PubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sliding: <A>(capacity: number | {
    readonly capacity: number;
    readonly replay?: number | undefined;
}) => Effect.Effect<PubSub<A>>;
/**
 * Creates an unbounded `PubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unbounded: <A>(options?: {
    readonly replay?: number | undefined;
}) => Effect.Effect<PubSub<A>>;
/**
 *  Returns the number of elements the queue can hold.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const capacity: <A>(self: PubSub<A>) => number;
/**
 * Retrieves the size of the queue, which is equal to the number of elements
 * in the queue. This may be negative if fibers are suspended waiting for
 * elements to be added to the queue.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <A>(self: PubSub<A>) => Effect.Effect<number>;
/**
 * Returns `true` if the `Queue` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isFull: <A>(self: PubSub<A>) => Effect.Effect<boolean>;
/**
 * Returns `true` if the `Queue` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isEmpty: <A>(self: PubSub<A>) => Effect.Effect<boolean>;
/**
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const shutdown: <A>(self: PubSub<A>) => Effect.Effect<void>;
/**
 * Returns `true` if `shutdown` has been called, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isShutdown: <A>(self: PubSub<A>) => Effect.Effect<boolean>;
/**
 * Waits until the queue is shutdown. The `Effect` returned by this method will
 * not resume until the queue has been shutdown. If the queue is already
 * shutdown, the `Effect` will resume right away.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const awaitShutdown: <A>(self: PubSub<A>) => Effect.Effect<void>;
/**
 * Publishes a message to the `PubSub`, returning whether the message was published
 * to the `PubSub`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const publish: {
    /**
     * Publishes a message to the `PubSub`, returning whether the message was published
     * to the `PubSub`.
     *
     * @since 2.0.0
     * @category utils
     */
    <A>(value: A): (self: PubSub<A>) => Effect.Effect<boolean>;
    /**
     * Publishes a message to the `PubSub`, returning whether the message was published
     * to the `PubSub`.
     *
     * @since 2.0.0
     * @category utils
     */
    <A>(self: PubSub<A>, value: A): Effect.Effect<boolean>;
};
/**
 * Publishes all of the specified messages to the `PubSub`, returning whether they
 * were published to the `PubSub`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const publishAll: {
    /**
     * Publishes all of the specified messages to the `PubSub`, returning whether they
     * were published to the `PubSub`.
     *
     * @since 2.0.0
     * @category utils
     */
    <A>(elements: Iterable<A>): (self: PubSub<A>) => Effect.Effect<boolean>;
    /**
     * Publishes all of the specified messages to the `PubSub`, returning whether they
     * were published to the `PubSub`.
     *
     * @since 2.0.0
     * @category utils
     */
    <A>(self: PubSub<A>, elements: Iterable<A>): Effect.Effect<boolean>;
};
/**
 * Subscribes to receive messages from the `PubSub`. The resulting subscription can
 * be evaluated multiple times within the scope to take a message from the `PubSub`
 * each time.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const subscribe: <A>(self: PubSub<A>) => Effect.Effect<Queue.Dequeue<A>, never, Scope.Scope>;
//# sourceMappingURL=PubSub.d.ts.map