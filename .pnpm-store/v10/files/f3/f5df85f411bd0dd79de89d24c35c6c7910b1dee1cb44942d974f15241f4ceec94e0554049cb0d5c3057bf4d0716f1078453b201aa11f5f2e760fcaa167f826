"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valuesReversed = exports.values = exports.size = exports.reversed = exports.removeFirst = exports.reduce = exports.make = exports.lessThanReversed = exports.lessThanEqualReversed = exports.lessThanEqual = exports.lessThan = exports.last = exports.keysReversed = exports.keys = exports.isRedBlackTree = exports.insert = exports.has = exports.greaterThanReversed = exports.greaterThanEqualReversed = exports.greaterThanEqual = exports.greaterThan = exports.getOrder = exports.getAt = exports.fromIterable = exports.forEachLessThan = exports.forEachGreaterThanEqual = exports.forEachBetween = exports.forEach = exports.first = exports.findFirst = exports.findAll = exports.empty = exports.atReversed = exports.at = exports.Direction = void 0;
var RBT = _interopRequireWildcard(require("./internal/redBlackTree.js"));
var RBTI = _interopRequireWildcard(require("./internal/redBlackTree/iterator.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const TypeId = RBT.RedBlackTreeTypeId;
/**
 * @since 2.0.0
 * @category constants
 */
const Direction = exports.Direction = RBTI.Direction;
/**
 * @since 2.0.0
 * @category refinements
 */
const isRedBlackTree = exports.isRedBlackTree = RBT.isRedBlackTree;
/**
 * Creates an empty `RedBlackTree`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = RBT.empty;
/**
 * Creates a new `RedBlackTree` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = RBT.fromIterable;
/**
 * Constructs a new `RedBlackTree` from the specified entries.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = RBT.make;
/**
 * Returns an iterator that points to the element at the specified index of the
 * tree.
 *
 * **Note**: The iterator will run through elements in order.
 *
 * @since 2.0.0
 * @category traversing
 */
const at = exports.at = RBT.atForwards;
/**
 * Returns an iterator that points to the element at the specified index of the
 * tree.
 *
 * **Note**: The iterator will run through elements in reverse order.
 *
 * @since 2.0.0
 * @category traversing
 */
const atReversed = exports.atReversed = RBT.atBackwards;
/**
 * Finds all values in the tree associated with the specified key.
 *
 * @since 2.0.0
 * @category elements
 */
const findAll = exports.findAll = RBT.findAll;
/**
 * Finds the first value in the tree associated with the specified key, if it exists.
 *
 * @category elements
 * @since 2.0.0
 */
const findFirst = exports.findFirst = RBT.findFirst;
/**
 * Returns the first entry in the tree, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
const first = exports.first = RBT.first;
/**
 * Returns the element at the specified index within the tree or `None` if the
 * specified index does not exist.
 *
 * @since 2.0.0
 * @category elements
 */
const getAt = exports.getAt = RBT.getAt;
/**
 * Gets the `Order<K>` that the `RedBlackTree<K, V>` is using.
 *
 * @since 2.0.0
 * @category getters
 */
const getOrder = exports.getOrder = RBT.getOrder;
/**
 * Returns an iterator that traverse entries in order with keys greater than the
 * specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const greaterThan = exports.greaterThan = RBT.greaterThanForwards;
/**
 * Returns an iterator that traverse entries in reverse order with keys greater
 * than the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const greaterThanReversed = exports.greaterThanReversed = RBT.greaterThanBackwards;
/**
 * Returns an iterator that traverse entries in order with keys greater than or
 * equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const greaterThanEqual = exports.greaterThanEqual = RBT.greaterThanEqualForwards;
/**
 * Returns an iterator that traverse entries in reverse order with keys greater
 * than or equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const greaterThanEqualReversed = exports.greaterThanEqualReversed = RBT.greaterThanEqualBackwards;
/**
 * Finds the item with key, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
const has = exports.has = RBT.has;
/**
 * Insert a new item into the tree.
 *
 * @since 2.0.0
 */
const insert = exports.insert = RBT.insert;
/**
 * Get all the keys present in the tree in order.
 *
 * @since 2.0.0
 * @category getters
 */
const keys = exports.keys = RBT.keysForward;
/**
 * Get all the keys present in the tree in reverse order.
 *
 * @since 2.0.0
 * @category getters
 */
const keysReversed = exports.keysReversed = RBT.keysBackward;
/**
 * Returns the last entry in the tree, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
const last = exports.last = RBT.last;
/**
 * Returns an iterator that traverse entries in order with keys less than the
 * specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const lessThan = exports.lessThan = RBT.lessThanForwards;
/**
 * Returns an iterator that traverse entries in reverse order with keys less
 * than the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const lessThanReversed = exports.lessThanReversed = RBT.lessThanBackwards;
/**
 * Returns an iterator that traverse entries in order with keys less than or
 * equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const lessThanEqual = exports.lessThanEqual = RBT.lessThanEqualForwards;
/**
 * Returns an iterator that traverse entries in reverse order with keys less
 * than or equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
const lessThanEqualReversed = exports.lessThanEqualReversed = RBT.lessThanEqualBackwards;
/**
 * Execute the specified function for each node of the tree, in order.
 *
 * @since 2.0.0
 * @category traversing
 */
const forEach = exports.forEach = RBT.forEach;
/**
 * Visit each node of the tree in order with key greater then or equal to max.
 *
 * @since 2.0.0
 * @category traversing
 */
const forEachGreaterThanEqual = exports.forEachGreaterThanEqual = RBT.forEachGreaterThanEqual;
/**
 * Visit each node of the tree in order with key lower then max.
 *
 * @since 2.0.0
 * @category traversing
 */
const forEachLessThan = exports.forEachLessThan = RBT.forEachLessThan;
/**
 * Visit each node of the tree in order with key lower than max and greater
 * than or equal to min.
 *
 * @since 2.0.0
 * @category traversing
 */
const forEachBetween = exports.forEachBetween = RBT.forEachBetween;
/**
 * Reduce a state over the entries of the tree.
 *
 * @since 2.0.0
 * @category folding
 */
const reduce = exports.reduce = RBT.reduce;
/**
 * Removes the entry with the specified key, if it exists.
 *
 * @since 2.0.0
 */
const removeFirst = exports.removeFirst = RBT.removeFirst;
/**
 * Traverse the tree in reverse order.
 *
 * @since 2.0.0
 * @category traversing
 */
const reversed = exports.reversed = RBT.reversed;
/**
 * Returns the size of the tree.
 *
 * @since 2.0.0
 * @category getters
 */
const size = exports.size = RBT.size;
/**
 * Get all values present in the tree in order.
 *
 * @since 2.0.0
 * @category getters
 */
const values = exports.values = RBT.valuesForward;
/**
 * Get all values present in the tree in reverse order.
 *
 * @since 2.0.0
 * @category getters
 */
const valuesReversed = exports.valuesReversed = RBT.valuesBackward;
//# sourceMappingURL=RedBlackTree.js.map