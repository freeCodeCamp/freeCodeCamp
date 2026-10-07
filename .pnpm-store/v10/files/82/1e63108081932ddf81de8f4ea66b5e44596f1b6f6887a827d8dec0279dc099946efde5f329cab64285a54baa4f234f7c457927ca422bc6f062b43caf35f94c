"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unbounded = exports.subscribe = exports.sliding = exports.size = exports.shutdown = exports.publishAll = exports.publish = exports.isShutdown = exports.isFull = exports.isEmpty = exports.dropping = exports.capacity = exports.bounded = exports.awaitShutdown = void 0;
var internal = _interopRequireWildcard(require("./internal/pubsub.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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
const bounded = exports.bounded = internal.bounded;
/**
 * Creates a bounded `PubSub` with the dropping strategy. The `PubSub` will drop new
 * messages if the `PubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
const dropping = exports.dropping = internal.dropping;
/**
 * Creates a bounded `PubSub` with the sliding strategy. The `PubSub` will add new
 * messages and drop old messages if the `PubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
const sliding = exports.sliding = internal.sliding;
/**
 * Creates an unbounded `PubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
const unbounded = exports.unbounded = internal.unbounded;
/**
 *  Returns the number of elements the queue can hold.
 *
 * @since 2.0.0
 * @category getters
 */
const capacity = exports.capacity = internal.capacity;
/**
 * Retrieves the size of the queue, which is equal to the number of elements
 * in the queue. This may be negative if fibers are suspended waiting for
 * elements to be added to the queue.
 *
 * @since 2.0.0
 * @category getters
 */
const size = exports.size = internal.size;
/**
 * Returns `true` if the `Queue` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isFull = exports.isFull = internal.isFull;
/**
 * Returns `true` if the `Queue` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category utils
 */
const shutdown = exports.shutdown = internal.shutdown;
/**
 * Returns `true` if `shutdown` has been called, otherwise returns `false`.
 *
 * @since 2.0.0
 * @category getters
 */
const isShutdown = exports.isShutdown = internal.isShutdown;
/**
 * Waits until the queue is shutdown. The `Effect` returned by this method will
 * not resume until the queue has been shutdown. If the queue is already
 * shutdown, the `Effect` will resume right away.
 *
 * @since 2.0.0
 * @category utils
 */
const awaitShutdown = exports.awaitShutdown = internal.awaitShutdown;
/**
 * Publishes a message to the `PubSub`, returning whether the message was published
 * to the `PubSub`.
 *
 * @since 2.0.0
 * @category utils
 */
const publish = exports.publish = internal.publish;
/**
 * Publishes all of the specified messages to the `PubSub`, returning whether they
 * were published to the `PubSub`.
 *
 * @since 2.0.0
 * @category utils
 */
const publishAll = exports.publishAll = internal.publishAll;
/**
 * Subscribes to receive messages from the `PubSub`. The resulting subscription can
 * be evaluated multiple times within the scope to take a message from the `PubSub`
 * each time.
 *
 * @since 2.0.0
 * @category utils
 */
const subscribe = exports.subscribe = internal.subscribe;
//# sourceMappingURL=PubSub.js.map