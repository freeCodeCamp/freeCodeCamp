"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toChunk = exports.toArray = exports.takeUpTo = exports.takeOption = exports.takeAll = exports.take = exports.size = exports.retainIf = exports.removeIf = exports.peekOption = exports.peek = exports.offerAll = exports.offer = exports.make = exports.isNonEmpty = exports.isEmpty = exports.fromIterable = exports.empty = exports.TPriorityQueueTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/stm/tPriorityQueue.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const TPriorityQueueTypeId = exports.TPriorityQueueTypeId = internal.TPriorityQueueTypeId;
/**
 * Constructs a new empty `TPriorityQueue` with the specified `Order`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Creates a new `TPriorityQueue` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = internal.fromIterable;
/**
 * Checks whether the queue is empty.
 *
 * @since 2.0.0
 * @category getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Checks whether the queue is not empty.
 *
 * @since 2.0.0
 * @category getters
 */
const isNonEmpty = exports.isNonEmpty = internal.isNonEmpty;
/**
 * Makes a new `TPriorityQueue` that is initialized with specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Offers the specified value to the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
const offer = exports.offer = internal.offer;
/**
 * Offers all of the elements in the specified collection to the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
const offerAll = exports.offerAll = internal.offerAll;
/**
 * Peeks at the first value in the queue without removing it, retrying until a
 * value is in the queue.
 *
 * @since 2.0.0
 * @category getters
 */
const peek = exports.peek = internal.peek;
/**
 * Peeks at the first value in the queue without removing it, returning `None`
 * if there is not a value in the queue.
 *
 * @since 2.0.0
 * @category getters
 */
const peekOption = exports.peekOption = internal.peekOption;
/**
 * Removes all elements from the queue matching the specified predicate.
 *
 * @since 2.0.0
 * @category getters
 */
const removeIf = exports.removeIf = internal.removeIf;
/**
 * Retains only elements from the queue matching the specified predicate.
 *
 * @since 2.0.0
 * @category getters
 */
const retainIf = exports.retainIf = internal.retainIf;
/**
 * Returns the size of the queue.
 *
 * @since 2.0.0
 * @category getters
 */
const size = exports.size = internal.size;
/**
 * Takes a value from the queue, retrying until a value is in the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
const take = exports.take = internal.take;
/**
 * Takes all values from the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
const takeAll = exports.takeAll = internal.takeAll;
/**
 * Takes a value from the queue, returning `None` if there is not a value in
 * the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
const takeOption = exports.takeOption = internal.takeOption;
/**
 * Takes up to the specified maximum number of elements from the queue.
 *
 * @since 2.0.0
 * @category mutations
 */
const takeUpTo = exports.takeUpTo = internal.takeUpTo;
/**
 * Collects all values into a `Chunk`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toChunk = exports.toChunk = internal.toChunk;
/**
 * Collects all values into an array.
 *
 * @since 2.0.0
 * @category destructors
 */
const toArray = exports.toArray = internal.toArray;
//# sourceMappingURL=TPriorityQueue.js.map