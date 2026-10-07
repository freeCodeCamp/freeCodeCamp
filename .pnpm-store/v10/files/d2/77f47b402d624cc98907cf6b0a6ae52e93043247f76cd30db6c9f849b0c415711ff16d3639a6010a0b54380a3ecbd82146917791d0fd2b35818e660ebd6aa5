"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSTM = exports.update = exports.transformSTM = exports.transform = exports.toArray = exports.someSTM = exports.some = exports.size = exports.reduceSTM = exports.reduceOptionSTM = exports.reduceOption = exports.reduce = exports.minOption = exports.maxOption = exports.make = exports.lastOption = exports.headOption = exports.get = exports.fromIterable = exports.forEach = exports.findLastSTM = exports.findLastIndexFrom = exports.findLastIndex = exports.findLast = exports.findFirstSTM = exports.findFirstIndexWhereSTM = exports.findFirstIndexWhereFromSTM = exports.findFirstIndexWhereFrom = exports.findFirstIndexWhere = exports.findFirstIndexFrom = exports.findFirstIndex = exports.findFirst = exports.everySTM = exports.every = exports.empty = exports.countSTM = exports.count = exports.contains = exports.collectFirstSTM = exports.collectFirst = exports.TArrayTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/stm/tArray.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 * @category symbols
 */
const TArrayTypeId = exports.TArrayTypeId = internal.TArrayTypeId;
/**
 * Finds the result of applying a partial function to the first value in its
 * domain.
 *
 * @since 2.0.0
 * @category elements
 */
const collectFirst = exports.collectFirst = internal.collectFirst;
/**
 * Finds the result of applying an transactional partial function to the first
 * value in its domain.
 *
 * @since 2.0.0
 * @category elements
 */
const collectFirstSTM = exports.collectFirstSTM = internal.collectFirstSTM;
/**
 * Determine if the array contains a specified value.
 *
 * @macro trace
 * @since 2.0.0
 * @category elements
 */
const contains = exports.contains = internal.contains;
/**
 * Count the values in the array matching a predicate.
 *
 * @macro trace
 * @since 2.0.0
 * @category folding
 */
const count = exports.count = internal.count;
/**
 * Count the values in the array matching a transactional predicate.
 *
 * @macro trace
 * @since 2.0.0
 * @category folding
 */
const countSTM = exports.countSTM = internal.countSTM;
/**
 * Makes an empty `TArray`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Atomically evaluate the conjunction of a predicate across the members of
 * the array.
 *
 * @since 2.0.0
 * @category elements
 */
const every = exports.every = internal.every;
/**
 * Atomically evaluate the conjunction of a transactional predicate across the
 * members of the array.
 *
 * @since 2.0.0
 * @category elements
 */
const everySTM = exports.everySTM = internal.everySTM;
/**
 * Find the first element in the array matching the specified predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirst = exports.findFirst = internal.findFirst;
/**
 * Get the first index of a specific value in the array.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirstIndex = exports.findFirstIndex = internal.findFirstIndex;
/**
 * Get the first index of a specific value in the array starting from the
 * specified index.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirstIndexFrom = exports.findFirstIndexFrom = internal.findFirstIndexFrom;
/**
 * Get the index of the first entry in the array matching a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirstIndexWhere = exports.findFirstIndexWhere = internal.findFirstIndexWhere;
/**
 * Get the index of the first entry in the array starting from the specified
 * index, matching a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirstIndexWhereFrom = exports.findFirstIndexWhereFrom = internal.findFirstIndexWhereFrom;
/**
 * Get the index of the next entry that matches a transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirstIndexWhereSTM = exports.findFirstIndexWhereSTM = internal.findFirstIndexWhereSTM;
/**
 * Starting at specified index, get the index of the next entry that matches a
 * transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirstIndexWhereFromSTM = exports.findFirstIndexWhereFromSTM = internal.findFirstIndexWhereFromSTM;
/**
 * Find the first element in the array matching a transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findFirstSTM = exports.findFirstSTM = internal.findFirstSTM;
/**
 * Find the last element in the array matching a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findLast = exports.findLast = internal.findLast;
/**
 * Get the last index of a specific value in the array bounded above by a
 * specific index.
 *
 * @since 2.0.0
 * @category elements
 */
const findLastIndex = exports.findLastIndex = internal.findLastIndex;
/**
 * Get the last index of a specific value in the array bounded above by a
 * specific index.
 *
 * @since 2.0.0
 * @category elements
 */
const findLastIndexFrom = exports.findLastIndexFrom = internal.findLastIndexFrom;
/**
 * Find the last element in the array matching a transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findLastSTM = exports.findLastSTM = internal.findLastSTM;
/**
 * Atomically performs transactional effect for each item in array.
 *
 * @since 2.0.0
 * @category elements
 */
const forEach = exports.forEach = internal.forEach;
/**
 * Creates a new `TArray` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = internal.fromIterable;
/**
 * Extracts value from ref in array.
 *
 * @since 2.0.0
 * @category elements
 */
const get = exports.get = internal.get;
/**
 * The first entry of the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
const headOption = exports.headOption = internal.headOption;
/**
 * The last entry in the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
const lastOption = exports.lastOption = internal.lastOption;
/**
 * Makes a new `TArray` that is initialized with specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Atomically compute the greatest element in the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
const maxOption = exports.maxOption = internal.maxOption;
/**
 * Atomically compute the least element in the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
const minOption = exports.minOption = internal.minOption;
/**
 * Atomically folds using a pure function.
 *
 * @since 2.0.0
 * @category folding
 */
const reduce = exports.reduce = internal.reduce;
/**
 * Atomically reduce the array, if non-empty, by a binary operator.
 *
 * @since 2.0.0
 * @category elements
 */
const reduceOption = exports.reduceOption = internal.reduceOption;
/**
 * Atomically reduce the non-empty array using a transactional binary
 * operator.
 *
 * @since 2.0.0
 * @category elements
 */
const reduceOptionSTM = exports.reduceOptionSTM = internal.reduceOptionSTM;
/**
 * Atomically folds using a transactional function.
 *
 * @macro trace
 * @since 2.0.0
 * @category folding
 */
const reduceSTM = exports.reduceSTM = internal.reduceSTM;
/**
 * Returns the size of the `TArray`.
 *
 * @since 2.0.0
 * @category getters
 */
const size = exports.size = internal.size;
/**
 * Determine if the array contains a value satisfying a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const some = exports.some = internal.some;
/**
 * Determine if the array contains a value satisfying a transactional
 * predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const someSTM = exports.someSTM = internal.someSTM;
/**
 * Collects all elements into a chunk.
 *
 * @since 2.0.0
 * @since 2.0.0
 * @category destructors
 */
const toArray = exports.toArray = internal.toArray;
/**
 * Atomically updates all elements using a pure function.
 *
 * @since 2.0.0
 * @category elements
 */
const transform = exports.transform = internal.transform;
/**
 * Atomically updates all elements using a transactional effect.
 *
 * @since 2.0.0
 * @category elements
 */
const transformSTM = exports.transformSTM = internal.transformSTM;
/**
 * Updates element in the array with given function.
 *
 * @since 2.0.0
 * @category elements
 */
const update = exports.update = internal.update;
/**
 * Atomically updates element in the array with given transactional effect.
 *
 * @since 2.0.0
 * @category elements
 */
const updateSTM = exports.updateSTM = internal.updateSTM;
//# sourceMappingURL=TArray.js.map