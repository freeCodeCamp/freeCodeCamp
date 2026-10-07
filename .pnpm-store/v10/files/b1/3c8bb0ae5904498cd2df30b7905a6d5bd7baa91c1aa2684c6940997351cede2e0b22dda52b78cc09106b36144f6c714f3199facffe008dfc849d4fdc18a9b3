/**
 * @since 3.8.0
 * @experimental
 */
import type { Cause, NoSuchElementException } from "./Cause.js";
import type { Channel } from "./Channel.js";
import type { Chunk } from "./Chunk.js";
import type { Effect } from "./Effect.js";
import type { Exit } from "./Exit.js";
import type { Inspectable } from "./Inspectable.js";
import type { Option } from "./Option.js";
import type { Scope } from "./Scope.js";
import type { Stream } from "./Stream.js";
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
export declare const TypeId: unique symbol;
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
export type TypeId = typeof TypeId;
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
export declare const ReadonlyTypeId: unique symbol;
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
export type ReadonlyTypeId = typeof ReadonlyTypeId;
/**
 * @since 3.8.0
 * @experimental
 * @category guards
 */
export declare const isMailbox: <A = unknown, E = unknown>(u: unknown) => u is Mailbox<A, E>;
/**
 * @since 3.8.0
 * @experimental
 * @category guards
 */
export declare const isReadonlyMailbox: <A = unknown, E = unknown>(u: unknown) => u is ReadonlyMailbox<A, E>;
/**
 * A `Mailbox` is a queue that can be signaled to be done or failed.
 *
 * @since 3.8.0
 * @experimental
 * @category models
 */
export interface Mailbox<in out A, in out E = never> extends ReadonlyMailbox<A, E> {
    readonly [TypeId]: TypeId;
    /**
     * Add a message to the mailbox. Returns `false` if the mailbox is done.
     */
    readonly offer: (message: A) => Effect<boolean>;
    /**
     * Add a message to the mailbox. Returns `false` if the mailbox is done.
     */
    readonly unsafeOffer: (message: A) => boolean;
    /**
     * Add multiple messages to the mailbox. Returns the remaining messages that
     * were not added.
     */
    readonly offerAll: (messages: Iterable<A>) => Effect<Chunk<A>>;
    /**
     * Add multiple messages to the mailbox. Returns the remaining messages that
     * were not added.
     */
    readonly unsafeOfferAll: (messages: Iterable<A>) => Chunk<A>;
    /**
     * Fail the mailbox with an error. If the mailbox is already done, `false` is
     * returned.
     */
    readonly fail: (error: E) => Effect<boolean>;
    /**
     * Fail the mailbox with a cause. If the mailbox is already done, `false` is
     * returned.
     */
    readonly failCause: (cause: Cause<E>) => Effect<boolean>;
    /**
     * Signal that the mailbox is complete. If the mailbox is already done, `false` is
     * returned.
     */
    readonly end: Effect<boolean>;
    /**
     * Signal that the mailbox is done. If the mailbox is already done, `false` is
     * returned.
     */
    readonly done: (exit: Exit<void, E>) => Effect<boolean>;
    /**
     * Signal that the mailbox is done. If the mailbox is already done, `false` is
     * returned.
     */
    readonly unsafeDone: (exit: Exit<void, E>) => boolean;
    /**
     * Shutdown the mailbox, canceling any pending operations.
     * If the mailbox is already done, `false` is returned.
     */
    readonly shutdown: Effect<boolean>;
}
/**
 * A `ReadonlyMailbox` represents a mailbox that can only be read from.
 *
 * @since 3.8.0
 * @experimental
 * @category models
 */
export interface ReadonlyMailbox<out A, out E = never> extends Effect<readonly [messages: Chunk<A>, done: boolean], E>, Inspectable {
    readonly [ReadonlyTypeId]: ReadonlyTypeId;
    /**
     * Take all messages from the mailbox, returning an empty Chunk if the mailbox
     * is empty or done.
     */
    readonly clear: Effect<Chunk<A>, E>;
    /**
     * Take all messages from the mailbox, or wait for messages to be available.
     *
     * If the mailbox is done, the `done` flag will be `true`. If the mailbox
     * fails, the Effect will fail with the error.
     */
    readonly takeAll: Effect<readonly [messages: Chunk<A>, done: boolean], E>;
    /**
     * Take a specified number of messages from the mailbox. It will only take
     * up to the capacity of the mailbox.
     *
     * If the mailbox is done, the `done` flag will be `true`. If the mailbox
     * fails, the Effect will fail with the error.
     */
    readonly takeN: (n: number) => Effect<readonly [messages: Chunk<A>, done: boolean], E>;
    /**
     * Take a single message from the mailbox, or wait for a message to be
     * available.
     *
     * If the mailbox is done, it will fail with `NoSuchElementException`. If the
     * mailbox fails, the Effect will fail with the error.
     */
    readonly take: Effect<A, E | NoSuchElementException>;
    /** Wait for the mailbox to be done. */
    readonly await: Effect<void, E>;
    /**
     * Check the size of the mailbox.
     *
     * If the mailbox is complete, it will return `None`.
     */
    readonly size: Effect<Option<number>>;
    /**
     * Check the size of the mailbox.
     *
     * If the mailbox is complete, it will return `None`.
     */
    readonly unsafeSize: () => Option<number>;
}
/**
 * A `Mailbox` is a queue that can be signaled to be done or failed.
 *
 * @since 3.8.0
 * @experimental
 * @category constructors
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, Mailbox } from "effect"
 *
 * Effect.gen(function*() {
 *   const mailbox = yield* Mailbox.make<number, string>()
 *
 *   // add messages to the mailbox
 *   yield* mailbox.offer(1)
 *   yield* mailbox.offer(2)
 *   yield* mailbox.offerAll([3, 4, 5])
 *
 *   // take messages from the mailbox
 *   const [messages, done] = yield* mailbox.takeAll
 *   assert.deepStrictEqual(messages, [1, 2, 3, 4, 5])
 *   assert.strictEqual(done, false)
 *
 *   // signal that the mailbox is done
 *   yield* mailbox.end
 *   const [messages2, done2] = yield* mailbox.takeAll
 *   assert.deepStrictEqual(messages2, [])
 *   assert.strictEqual(done2, true)
 *
 *   // signal that the mailbox has failed
 *   yield* mailbox.fail("boom")
 * })
 * ```
 */
export declare const make: <A, E = never>(capacity?: number | {
    readonly capacity?: number;
    readonly strategy?: "suspend" | "dropping" | "sliding";
} | undefined) => Effect<Mailbox<A, E>>;
/**
 * Run an `Effect` into a `Mailbox`, where success ends the mailbox and failure
 * fails the mailbox.
 *
 * @since 3.8.0
 * @experimental
 * @category combinators
 */
export declare const into: {
    /**
     * Run an `Effect` into a `Mailbox`, where success ends the mailbox and failure
     * fails the mailbox.
     *
     * @since 3.8.0
     * @experimental
     * @category combinators
     */
    <A, E>(self: Mailbox<A, E>): <AX, EX extends E, RX>(effect: Effect<AX, EX, RX>) => Effect<boolean, never, RX>;
    /**
     * Run an `Effect` into a `Mailbox`, where success ends the mailbox and failure
     * fails the mailbox.
     *
     * @since 3.8.0
     * @experimental
     * @category combinators
     */
    <AX, E, EX extends E, RX, A>(effect: Effect<AX, EX, RX>, self: Mailbox<A, E>): Effect<boolean, never, RX>;
};
/**
 * Create a `Channel` from a `Mailbox`.
 *
 * @since 3.8.0
 * @experimental
 * @category conversions
 */
export declare const toChannel: <A, E>(self: ReadonlyMailbox<A, E>) => Channel<Chunk<A>, unknown, E>;
/**
 * Create a `Stream` from a `Mailbox`.
 *
 * @since 3.8.0
 * @experimental
 * @category conversions
 */
export declare const toStream: <A, E>(self: ReadonlyMailbox<A, E>) => Stream<A, E>;
/**
 * Create a `ReadonlyMailbox` from a `Stream`.
 *
 * @since 3.11.0
 * @experimental
 * @category conversions
 */
export declare const fromStream: {
    /**
     * Create a `ReadonlyMailbox` from a `Stream`.
     *
     * @since 3.11.0
     * @experimental
     * @category conversions
     */
    (options?: {
        readonly capacity?: number | undefined;
        readonly strategy?: "suspend" | "dropping" | "sliding" | undefined;
    }): <A, E, R>(self: Stream<A, E, R>) => Effect<ReadonlyMailbox<A, E>, never, R | Scope>;
    /**
     * Create a `ReadonlyMailbox` from a `Stream`.
     *
     * @since 3.11.0
     * @experimental
     * @category conversions
     */
    <A, E, R>(self: Stream<A, E, R>, options?: {
        readonly capacity?: number | undefined;
        readonly strategy?: "suspend" | "dropping" | "sliding" | undefined;
    }): Effect<ReadonlyMailbox<A, E>, never, R | Scope>;
};
//# sourceMappingURL=Mailbox.d.ts.map