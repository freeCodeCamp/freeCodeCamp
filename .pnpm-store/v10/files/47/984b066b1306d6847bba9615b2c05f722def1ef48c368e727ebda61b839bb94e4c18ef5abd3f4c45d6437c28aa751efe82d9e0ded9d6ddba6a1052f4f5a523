"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unbounded = exports.subscribeScoped = exports.subscribe = exports.sliding = exports.size = exports.shutdown = exports.publishAll = exports.publish = exports.isShutdown = exports.isFull = exports.isEmpty = exports.dropping = exports.capacity = exports.bounded = exports.awaitShutdown = exports.TPubSubTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/stm/tPubSub.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const TPubSubTypeId = exports.TPubSubTypeId = internal.TPubSubTypeId;
/**
 * Waits until the `TPubSub` is shutdown. The `STM` returned by this method will
 * not resume until the queue has been shutdown. If the `TPubSub` is already
 * shutdown, the `STM` will resume right away.
 *
 * @since 2.0.0
 * @category mutations
 */
const awaitShutdown = exports.awaitShutdown = internal.awaitShutdown;
/**
 * Creates a bounded `TPubSub` with the back pressure strategy. The `TPubSub` will retain
 * messages until they have been taken by all subscribers, applying back
 * pressure to publishers if the `TPubSub` is at capacity.
 *
 * @since 2.0.0
 * @category constructors
 */
const bounded = exports.bounded = internal.bounded;
/**
 * Returns the number of elements the `TPubSub` can hold.
 *
 * @since 2.0.0
 * @category getters
 */
const capacity = exports.capacity = internal.capacity;
/**
 * Creates a bounded `TPubSub` with the dropping strategy. The `TPubSub` will drop new
 * messages if the `TPubSub` is at capacity.
 *
 * @since 2.0.0
 * @category constructors
 */
const dropping = exports.dropping = internal.dropping;
/**
 * Returns `true` if the `TPubSub` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Returns `true` if the `TPubSub` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isFull = exports.isFull = internal.isFull;
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
 * Publishes a message to the `TPubSub`, returning whether the message was published
 * to the `TPubSub`.
 *
 * @since 2.0.0
 * @category mutations
 */
const publish = exports.publish = internal.publish;
/**
 * Publishes all of the specified messages to the `TPubSub`, returning whether they
 * were published to the `TPubSub`.
 *
 * @since 2.0.0
 * @category mutations
 */
const publishAll = exports.publishAll = internal.publishAll;
/**
 * Retrieves the size of the `TPubSub`, which is equal to the number of elements
 * in the `TPubSub`. This may be negative if fibers are suspended waiting for
 * elements to be added to the `TPubSub`.
 *
 * @since 2.0.0
 * @category getters
 */
const size = exports.size = internal.size;
/**
 * Creates a bounded `TPubSub` with the sliding strategy. The `TPubSub` will add new
 * messages and drop old messages if the `TPubSub` is at capacity.
 *
 * For best performance use capacities that are powers of two.
 *
 * @since 2.0.0
 * @category constructors
 */
const sliding = exports.sliding = internal.sliding;
/**
 * Subscribes to receive messages from the `TPubSub`. The resulting subscription can
 * be evaluated multiple times to take a message from the `TPubSub` each time. The
 * caller is responsible for unsubscribing from the `TPubSub` by shutting down the
 * queue.
 *
 * @since 2.0.0
 * @category mutations
 */
const subscribe = exports.subscribe = internal.subscribe;
/**
 * Subscribes to receive messages from the `TPubSub`. The resulting subscription can
 * be evaluated multiple times within the scope to take a message from the `TPubSub`
 * each time.
 *
 * @since 2.0.0
 * @category mutations
 */
const subscribeScoped = exports.subscribeScoped = internal.subscribeScoped;
/**
 * Creates an unbounded `TPubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
const unbounded = exports.unbounded = internal.unbounded;
//# sourceMappingURL=TPubSub.js.map