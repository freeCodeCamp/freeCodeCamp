"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = exports.transformSTM = exports.transform = exports.toReadonlySet = exports.toHashSet = exports.toChunk = exports.toArray = exports.takeSomeSTM = exports.takeSome = exports.takeFirstSTM = exports.takeFirst = exports.size = exports.retainIf = exports.removeIf = exports.removeAll = exports.remove = exports.reduceSTM = exports.reduce = exports.make = exports.isEmpty = exports.intersection = exports.has = exports.fromIterable = exports.forEach = exports.empty = exports.difference = exports.add = exports.TSetTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/stm/tSet.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const TSetTypeId = exports.TSetTypeId = internal.TSetTypeId;
/**
 * Stores new element in the set.
 *
 * @since 2.0.0
 * @category mutations
 */
const add = exports.add = internal.add;
/**
 * Atomically transforms the set into the difference of itself and the
 * provided set.
 *
 * @since 2.0.0
 * @category mutations
 */
const difference = exports.difference = internal.difference;
/**
 * Makes an empty `TSet`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Atomically performs transactional-effect for each element in set.
 *
 * @since 2.0.0
 * @category elements
 */
const forEach = exports.forEach = internal.forEach;
/**
 * Creates a new `TSet` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = internal.fromIterable;
/**
 * Tests whether or not set contains an element.
 *
 * @since 2.0.0
 * @category elements
 */
const has = exports.has = internal.has;
/**
 * Atomically transforms the set into the intersection of itself and the
 * provided set.
 *
 * @since 2.0.0
 * @category mutations
 */
const intersection = exports.intersection = internal.intersection;
/**
 * Tests if the set is empty or not
 *
 * @since 2.0.0
 * @category getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Makes a new `TSet` that is initialized with specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Atomically folds using a pure function.
 *
 * @since 2.0.0
 * @category folding
 */
const reduce = exports.reduce = internal.reduce;
/**
 * Atomically folds using a transactional function.
 *
 * @since 2.0.0
 * @category folding
 */
const reduceSTM = exports.reduceSTM = internal.reduceSTM;
/**
 * Removes a single element from the set.
 *
 * @since 2.0.0
 * @category mutations
 */
const remove = exports.remove = internal.remove;
/**
 * Removes elements from the set.
 *
 * @since 2.0.0
 * @category mutations
 */
const removeAll = exports.removeAll = internal.removeAll;
/**
 * Removes entries from a `TSet` that satisfy the specified predicate and returns the removed entries
 * (or `void` if `discard = true`).
 *
 * @since 2.0.0
 * @category mutations
 */
const removeIf = exports.removeIf = internal.removeIf;
/**
 * Retains entries in a `TSet` that satisfy the specified predicate and returns the removed entries
 * (or `void` if `discard = true`).
 *
 * @since 2.0.0
 * @category mutations
 */
const retainIf = exports.retainIf = internal.retainIf;
/**
 * Returns the set's cardinality.
 *
 * @since 2.0.0
 * @category getters
 */
const size = exports.size = internal.size;
/**
 * Takes the first matching value, or retries until there is one.
 *
 * @since 2.0.0
 * @category mutations
 */
const takeFirst = exports.takeFirst = internal.takeFirst;
/**
 * Takes the first matching value, or retries until there is one.
 *
 * @since 2.0.0
 * @category mutations
 */
const takeFirstSTM = exports.takeFirstSTM = internal.takeFirstSTM;
/**
 * Takes all matching values, or retries until there is at least one.
 *
 * @since 2.0.0
 * @category mutations
 */
const takeSome = exports.takeSome = internal.takeSome;
/**
 * Takes all matching values, or retries until there is at least one.
 *
 * @since 2.0.0
 * @category mutations
 */
const takeSomeSTM = exports.takeSomeSTM = internal.takeSomeSTM;
/**
 * Collects all elements into a `Chunk`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toChunk = exports.toChunk = internal.toChunk;
/**
 * Collects all elements into a `HashSet`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toHashSet = exports.toHashSet = internal.toHashSet;
/**
 * Collects all elements into a `Array`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toArray = exports.toArray = internal.toArray;
/**
 * Collects all elements into a `ReadonlySet`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toReadonlySet = exports.toReadonlySet = internal.toReadonlySet;
/**
 * Atomically updates all elements using a pure function.
 *
 * @since 2.0.0
 * @category mutations
 */
const transform = exports.transform = internal.transform;
/**
 * Atomically updates all elements using a transactional function.
 *
 * @since 2.0.0
 * @category mutations
 */
const transformSTM = exports.transformSTM = internal.transformSTM;
/**
 * Atomically transforms the set into the union of itself and the provided
 * set.
 *
 * @since 2.0.0
 * @category mutations
 */
const union = exports.union = internal.union;
//# sourceMappingURL=TSet.js.map