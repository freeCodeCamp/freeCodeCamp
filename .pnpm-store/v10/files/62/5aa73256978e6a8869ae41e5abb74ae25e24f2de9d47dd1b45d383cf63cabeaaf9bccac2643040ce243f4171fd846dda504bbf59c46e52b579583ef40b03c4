"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeOffer = exports.unbounded = exports.takeUpTo = exports.takeN = exports.takeBetween = exports.takeAll = exports.take = exports.slidingStrategy = exports.sliding = exports.size = exports.shutdown = exports.poll = exports.offerAll = exports.offer = exports.make = exports.isShutdown = exports.isQueue = exports.isFull = exports.isEnqueue = exports.isEmpty = exports.isDequeue = exports.droppingStrategy = exports.dropping = exports.capacity = exports.bounded = exports.backPressureStrategy = exports.awaitShutdown = exports.QueueStrategyTypeId = exports.EnqueueTypeId = exports.DequeueTypeId = exports.BackingQueueTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/queue.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const EnqueueTypeId = exports.EnqueueTypeId = internal.EnqueueTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
const DequeueTypeId = exports.DequeueTypeId = internal.DequeueTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
const QueueStrategyTypeId = exports.QueueStrategyTypeId = internal.QueueStrategyTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
const BackingQueueTypeId = exports.BackingQueueTypeId = internal.BackingQueueTypeId;
/**
 * Returns `true` if the specified value is a `Queue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isQueue = exports.isQueue = internal.isQueue;
/**
 * Returns `true` if the specified value is a `Dequeue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isDequeue = exports.isDequeue = internal.isDequeue;
/**
 * Returns `true` if the specified value is a `Enqueue`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isEnqueue = exports.isEnqueue = internal.isEnqueue;
/**
 * @since 2.0.0
 * @category strategies
 */
const backPressureStrategy = exports.backPressureStrategy = internal.backPressureStrategy;
/**
 * @since 2.0.0
 * @category strategies
 */
const droppingStrategy = exports.droppingStrategy = internal.droppingStrategy;
/**
 * @since 2.0.0
 * @category strategies
 */
const slidingStrategy = exports.slidingStrategy = internal.slidingStrategy;
/**
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Makes a new bounded `Queue`. When the capacity of the queue is reached, any
 * additional calls to `offer` will be suspended until there is more room in
 * the queue.
 *
 * **Note**: When possible use only power of 2 capacities; this will provide
 * better performance by utilising an optimised version of the underlying
 * `RingBuffer`.
 *
 * @since 2.0.0
 * @category constructors
 */
const bounded = exports.bounded = internal.bounded;
/**
 * Makes a new bounded `Queue` with the dropping strategy.
 *
 * When the capacity of the queue is reached, new elements will be dropped and the
 * old elements will remain.
 *
 * **Note**: When possible use only power of 2 capacities; this will provide
 * better performance by utilising an optimised version of the underlying
 * `RingBuffer`.
 *
 * @since 2.0.0
 * @category constructors
 */
const dropping = exports.dropping = internal.dropping;
/**
 * Makes a new bounded `Queue` with the sliding strategy.
 *
 * When the capacity of the queue is reached, new elements will be added and the
 * old elements will be dropped.
 *
 * **Note**: When possible use only power of 2 capacities; this will provide
 * better performance by utilising an optimised version of the underlying
 * `RingBuffer`.
 *
 * @since 2.0.0
 * @category constructors
 */
const sliding = exports.sliding = internal.sliding;
/**
 * Creates a new unbounded `Queue`.
 *
 * @since 2.0.0
 * @category constructors
 */
const unbounded = exports.unbounded = internal.unbounded;
/**
 * Returns the number of elements the queue can hold.
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
 * Returns `true` if the `Queue` contains zero elements, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Returns `true` if the `Queue` contains at least one element, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isFull = exports.isFull = internal.isFull;
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
 * Interrupts any fibers that are suspended on `offer` or `take`. Future calls
 * to `offer*` and `take*` will be interrupted immediately.
 *
 * @since 2.0.0
 * @category utils
 */
const shutdown = exports.shutdown = internal.shutdown;
/**
 * Places one value in the queue.
 *
 * @since 2.0.0
 * @category utils
 */
const offer = exports.offer = internal.offer;
/**
 * Places one value in the queue.
 *
 * @since 2.0.0
 * @category utils
 */
const unsafeOffer = exports.unsafeOffer = internal.unsafeOffer;
/**
 * For Bounded Queue: uses the `BackPressure` Strategy, places the values in
 * the queue and always returns true. If the queue has reached capacity, then
 * the fiber performing the `offerAll` will be suspended until there is room
 * in the queue.
 *
 * For Unbounded Queue: Places all values in the queue and returns true.
 *
 * For Sliding Queue: uses `Sliding` Strategy If there is room in the queue,
 * it places the values otherwise it removes the old elements and enqueues the
 * new ones. Always returns true.
 *
 * For Dropping Queue: uses `Dropping` Strategy, It places the values in the
 * queue but if there is no room it will not enqueue them and return false.
 *
 * @since 2.0.0
 * @category utils
 */
const offerAll = exports.offerAll = internal.offerAll;
/**
 * Returns the first value in the `Queue` as a `Some<A>`, or `None` if the queue
 * is empty.
 *
 * @since 2.0.0
 * @category utils
 */
const poll = exports.poll = internal.poll;
/**
 * Takes the oldest value in the queue. If the queue is empty, this will return
 * a computation that resumes when an item has been added to the queue.
 *
 * @since 2.0.0
 * @category utils
 */
const take = exports.take = internal.take;
/**
 * Takes all the values in the queue and returns the values. If the queue is
 * empty returns an empty collection.
 *
 * @since 2.0.0
 * @category utils
 */
const takeAll = exports.takeAll = internal.takeAll;
/**
 * Takes up to max number of values from the queue.
 *
 * @since 2.0.0
 * @category utils
 */
const takeUpTo = exports.takeUpTo = internal.takeUpTo;
/**
 * Takes a number of elements from the queue between the specified minimum and
 * maximum. If there are fewer than the minimum number of elements available,
 * suspends until at least the minimum number of elements have been collected.
 *
 * @since 2.0.0
 * @category utils
 */
const takeBetween = exports.takeBetween = internal.takeBetween;
/**
 * Takes the specified number of elements from the queue. If there are fewer
 * than the specified number of elements available, it suspends until they
 * become available.
 *
 * @since 2.0.0
 * @category utils
 */
const takeN = exports.takeN = internal.takeN;
//# sourceMappingURL=Queue.js.map