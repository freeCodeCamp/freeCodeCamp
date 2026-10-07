/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js";
import type * as Scope from "./Scope.js";
import type * as STM from "./STM.js";
import type * as TQueue from "./TQueue.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TPubSubTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TPubSubTypeId = typeof TPubSubTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface TPubSub<in out A> extends TQueue.TEnqueue<A> {
    readonly [TPubSubTypeId]: {
        readonly _A: Types.Invariant<A>;
    };
}
/**
 * Waits until the `TPubSub` is shutdown. The `STM` returned by this method will
 * not resume until the queue has been shutdown. If the `TPubSub` is already
 * shutdown, the `STM` will resume right away.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const awaitShutdown: <A>(self: TPubSub<A>) => STM.STM<void>;
/**
 * Creates a bounded `TPubSub` with the back pressure strategy. The `TPubSub` will retain
 * messages until they have been taken by all subscribers, applying back
 * pressure to publishers if the `TPubSub` is at capacity.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const bounded: <A>(requestedCapacity: number) => STM.STM<TPubSub<A>>;
/**
 * Returns the number of elements the `TPubSub` can hold.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const capacity: <A>(self: TPubSub<A>) => number;
/**
 * Creates a bounded `TPubSub` with the dropping strategy. The `TPubSub` will drop new
 * messages if the `TPubSub` is at capacity.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dropping: <A>(requestedCapacity: number) => STM.STM<TPubSub<A>>;
/**
 * Returns `true` if the `TPubSub` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isEmpty: <A>(self: TPubSub<A>) => STM.STM<boolean>;
/**
 * Returns `true` if the `TPubSub` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isFull: <A>(self: TPubSub<A>) => STM.STM<boolean>;
/**
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const shutdown: <A>(self: TPubSub<A>) => STM.STM<void>;
/**
 * Returns `true` if `shutdown` has been called, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isShutdown: <A>(self: TPubSub<A>) => STM.STM<boolean>;
/**
 * Publishes a message to the `TPubSub`, returning whether the message was published
 * to the `TPubSub`.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const publish: {
    /**
     * Publishes a message to the `TPubSub`, returning whether the message was published
     * to the `TPubSub`.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(value: A): (self: TPubSub<A>) => STM.STM<boolean>;
    /**
     * Publishes a message to the `TPubSub`, returning whether the message was published
     * to the `TPubSub`.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TPubSub<A>, value: A): STM.STM<boolean>;
};
/**
 * Publishes all of the specified messages to the `TPubSub`, returning whether they
 * were published to the `TPubSub`.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const publishAll: {
    /**
     * Publishes all of the specified messages to the `TPubSub`, returning whether they
     * were published to the `TPubSub`.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(iterable: Iterable<A>): (self: TPubSub<A>) => STM.STM<boolean>;
    /**
     * Publishes all of the specified messages to the `TPubSub`, returning whether they
     * were published to the `TPubSub`.
     *
     * @since 2.0.0
     * @category mutations
     */
    <A>(self: TPubSub<A>, iterable: Iterable<A>): STM.STM<boolean>;
};
/**
 * Retrieves the size of the `TPubSub`, which is equal to the number of elements
 * in the `TPubSub`. This may be negative if fibers are suspended waiting for
 * elements to be added to the `TPubSub`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <A>(self: TPubSub<A>) => STM.STM<number>;
/**
 * Creates a bounded `TPubSub` with the sliding strategy. The `TPubSub` will add new
 * messages and drop old messages if the `TPubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sliding: <A>(requestedCapacity: number) => STM.STM<TPubSub<A>>;
/**
 * Subscribes to receive messages from the `TPubSub`. The resulting subscription can
 * be evaluated multiple times to take a message from the `TPubSub` each time. The
 * caller is responsible for unsubscribing from the `TPubSub` by shutting down the
 * queue.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const subscribe: <A>(self: TPubSub<A>) => STM.STM<TQueue.TDequeue<A>>;
/**
 * Subscribes to receive messages from the `TPubSub`. The resulting subscription can
 * be evaluated multiple times within the scope to take a message from the `TPubSub`
 * each time.
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const subscribeScoped: <A>(self: TPubSub<A>) => Effect.Effect<TQueue.TDequeue<A>, never, Scope.Scope>;
/**
 * Creates an unbounded `TPubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unbounded: <A>() => STM.STM<TPubSub<A>>;
//# sourceMappingURL=TPubSub.d.ts.map