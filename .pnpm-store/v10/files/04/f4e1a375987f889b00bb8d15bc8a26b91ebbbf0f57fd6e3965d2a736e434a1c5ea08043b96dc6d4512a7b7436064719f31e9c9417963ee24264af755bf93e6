"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toStream = exports.toChannel = exports.make = exports.isReadonlyMailbox = exports.isMailbox = exports.into = exports.fromStream = exports.TypeId = exports.ReadonlyTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/mailbox.js"));
var _Predicate = require("./Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
const TypeId = exports.TypeId = internal.TypeId;
/**
 * @since 3.8.0
 * @experimental
 * @category type ids
 */
const ReadonlyTypeId = exports.ReadonlyTypeId = internal.ReadonlyTypeId;
/**
 * @since 3.8.0
 * @experimental
 * @category guards
 */
const isMailbox = u => (0, _Predicate.hasProperty)(u, TypeId);
/**
 * @since 3.8.0
 * @experimental
 * @category guards
 */
exports.isMailbox = isMailbox;
const isReadonlyMailbox = u => (0, _Predicate.hasProperty)(u, ReadonlyTypeId);
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
exports.isReadonlyMailbox = isReadonlyMailbox;
const make = exports.make = internal.make;
/**
 * Run an `Effect` into a `Mailbox`, where success ends the mailbox and failure
 * fails the mailbox.
 *
 * @since 3.8.0
 * @experimental
 * @category combinators
 */
const into = exports.into = internal.into;
/**
 * Create a `Channel` from a `Mailbox`.
 *
 * @since 3.8.0
 * @experimental
 * @category conversions
 */
const toChannel = exports.toChannel = internal.toChannel;
/**
 * Create a `Stream` from a `Mailbox`.
 *
 * @since 3.8.0
 * @experimental
 * @category conversions
 */
const toStream = exports.toStream = internal.toStream;
/**
 * Create a `ReadonlyMailbox` from a `Stream`.
 *
 * @since 3.11.0
 * @experimental
 * @category conversions
 */
const fromStream = exports.fromStream = internal.fromStream;
//# sourceMappingURL=Mailbox.js.map