import * as internal from "./internal/mailbox.js";
import { hasProperty } from "./Predicate.js";
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
export const TypeId = internal.TypeId;
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
export const ReadonlyTypeId = internal.ReadonlyTypeId;
/**
 * @since 3.8.0
 * @experimental
 * @category guards
 */
export const isMailbox = u => hasProperty(u, TypeId);
/**
 * @since 3.8.0
 * @experimental
 * @category guards
 */
export const isReadonlyMailbox = u => hasProperty(u, ReadonlyTypeId);
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
export const make = internal.make;
/**
 * Run an `Effect` into a `Mailbox`, where success ends the mailbox and failure
 * fails the mailbox.
 *
 * @since 3.8.0
 * @experimental
 * @category combinators
 */
export const into = internal.into;
/**
 * Create a `Channel` from a `Mailbox`.
 *
 * @since 3.8.0
 * @experimental
 * @category conversions
 */
export const toChannel = internal.toChannel;
/**
 * Create a `Stream` from a `Mailbox`.
 *
 * @since 3.8.0
 * @experimental
 * @category conversions
 */
export const toStream = internal.toStream;
/**
 * Create a `ReadonlyMailbox` from a `Stream`.
 *
 * @since 3.11.0
 * @experimental
 * @category conversions
 */
export const fromStream = internal.fromStream;
//# sourceMappingURL=Mailbox.js.map