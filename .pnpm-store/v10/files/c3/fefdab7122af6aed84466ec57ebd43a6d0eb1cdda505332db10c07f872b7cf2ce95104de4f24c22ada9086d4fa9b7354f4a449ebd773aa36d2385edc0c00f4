"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.unsafeGet = exports.union = exports.toValues = exports.toEntries = exports.some = exports.size = exports.set = exports.removeMany = exports.remove = exports.reduce = exports.mutate = exports.modifyHash = exports.modifyAt = exports.modify = exports.map = exports.make = exports.keys = exports.keySet = exports.isHashMap = exports.isEmpty = exports.hasHash = exports.hasBy = exports.has = exports.getHash = exports.get = exports.fromIterable = exports.forEach = exports.flatMap = exports.findFirst = exports.filterMap = exports.filter = exports.every = exports.entries = exports.endMutation = exports.empty = exports.countBy = exports.compact = exports.beginMutation = void 0;
var HM = _interopRequireWildcard(require("./internal/hashMap.js"));
var keySet_ = _interopRequireWildcard(require("./internal/hashMap/keySet.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const TypeId = HM.HashMapTypeId;
/**
 * @since 2.0.0
 * @category refinements
 */
const isHashMap = exports.isHashMap = HM.isHashMap;
/**
 * Creates a new `HashMap`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = HM.empty;
/**
 * Constructs a new `HashMap` from an array of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = HM.make;
/**
 * Creates a new `HashMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = HM.fromIterable;
/**
 * Checks if the `HashMap` contains any entries.
 *
 * @since 2.0.0
 * @category elements
 */
const isEmpty = exports.isEmpty = HM.isEmpty;
/**
 * Safely lookup the value for the specified key in the `HashMap` using the
 * internal hashing function.
 *
 * @since 2.0.0
 * @category elements
 */
const get = exports.get = HM.get;
/**
 * Lookup the value for the specified key in the `HashMap` using a custom hash.
 *
 * @since 2.0.0
 * @category elements
 */
const getHash = exports.getHash = HM.getHash;
/**
 * Unsafely lookup the value for the specified key in the `HashMap` using the
 * internal hashing function.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeGet = exports.unsafeGet = HM.unsafeGet;
/**
 * Checks if the specified key has an entry in the `HashMap`.
 *
 * @since 2.0.0
 * @category elements
 */
const has = exports.has = HM.has;
/**
 * Checks if the specified key has an entry in the `HashMap` using a custom
 * hash.
 *
 * @since 2.0.0
 * @category elements
 */
const hasHash = exports.hasHash = HM.hasHash;
/**
 * Checks if an element matching the given predicate exists in the given `HashMap`.
 *
 * @example
 * ```ts
 * import { HashMap } from "effect"
 *
 * const hm = HashMap.make([1, 'a'])
 * HashMap.hasBy(hm, (value, key) => value === 'a' && key === 1); // -> true
 * HashMap.hasBy(hm, (value) => value === 'b'); // -> false
 *
 * ```
 *
 * @since 3.16.0
 * @category elements
 */
const hasBy = exports.hasBy = HM.hasBy;
/**
 * Sets the specified key to the specified value using the internal hashing
 * function.
 *
 * @since 2.0.0
 */
const set = exports.set = HM.set;
/**
 * Returns an `IterableIterator` of the keys within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
const keys = exports.keys = HM.keys;
/**
 * Returns a `HashSet` of keys within the `HashMap`.
 *
 * @since 2.0.0
 * @category getter
 */
const keySet = exports.keySet = keySet_.keySet;
/**
 * Returns an `IterableIterator` of the values within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
const values = exports.values = HM.values;
/**
 * Returns an `Array` of the values within the `HashMap`.
 *
 * @since 3.13.0
 * @category getters
 */
const toValues = self => Array.from(values(self));
/**
 * Returns an `IterableIterator` of the entries within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
exports.toValues = toValues;
const entries = exports.entries = HM.entries;
/**
 * Returns an `Array<[K, V]>` of the entries within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
const toEntries = self => Array.from(entries(self));
/**
 * Returns the number of entries within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
exports.toEntries = toEntries;
const size = exports.size = HM.size;
/**
 * Counts all the element of the given HashMap that pass the given predicate
 *
 * **Example**
 *
 * ```ts
 * import { HashMap } from "effect"
 *
 * const map = HashMap.make([1, "a"], [2, "b"], [3, "c"])
 * const result = HashMap.countBy(map, (_v, key) => key % 2 === 1)
 * console.log(result) // 2
 * ```
 *
 * @since 3.17.0
 * @category folding
 */
const countBy = exports.countBy = HM.countBy;
/**
 * Marks the `HashMap` as mutable.
 *
 * @since 2.0.0
 */
const beginMutation = exports.beginMutation = HM.beginMutation;
/**
 * Marks the `HashMap` as immutable.
 *
 * @since 2.0.0
 */
const endMutation = exports.endMutation = HM.endMutation;
/**
 * Mutates the `HashMap` within the context of the provided function.
 *
 * @since 2.0.0
 */
const mutate = exports.mutate = HM.mutate;
/**
 * Set or remove the specified key in the `HashMap` using the specified
 * update function. The value of the specified key will be computed using the
 * provided hash.
 *
 * The update function will be invoked with the current value of the key if it
 * exists, or `None` if no such value exists.
 *
 * @since 2.0.0
 */
const modifyAt = exports.modifyAt = HM.modifyAt;
/**
 * Alter the value of the specified key in the `HashMap` using the specified
 * update function. The value of the specified key will be computed using the
 * provided hash.
 *
 * The update function will be invoked with the current value of the key if it
 * exists, or `None` if no such value exists.
 *
 * This function will always either update or insert a value into the `HashMap`.
 *
 * @since 2.0.0
 */
const modifyHash = exports.modifyHash = HM.modifyHash;
/**
 * Updates the value of the specified key within the `HashMap` if it exists.
 *
 * @since 2.0.0
 */
const modify = exports.modify = HM.modify;
/**
 * Performs a union of this `HashMap` and that `HashMap`.
 *
 * @since 2.0.0
 */
const union = exports.union = HM.union;
/**
 * Remove the entry for the specified key in the `HashMap` using the internal
 * hashing function.
 *
 * @since 2.0.0
 */
const remove = exports.remove = HM.remove;
/**
 * Removes all entries in the `HashMap` which have the specified keys.
 *
 * @since 2.0.0
 */
const removeMany = exports.removeMany = HM.removeMany;
/**
 * Maps over the entries of the `HashMap` using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = HM.map;
/**
 * Chains over the entries of the `HashMap` using the specified function.
 *
 * **NOTE**: the hash and equal of both maps have to be the same.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flatMap = exports.flatMap = HM.flatMap;
/**
 * Applies the specified function to the entries of the `HashMap`.
 *
 * @since 2.0.0
 * @category traversing
 */
const forEach = exports.forEach = HM.forEach;
/**
 * Reduces the specified state over the entries of the `HashMap`.
 *
 * @since 2.0.0
 * @category folding
 */
const reduce = exports.reduce = HM.reduce;
/**
 * Filters entries out of a `HashMap` using the specified predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
const filter = exports.filter = HM.filter;
/**
 * Filters out `None` values from a `HashMap` of `Options`s.
 *
 * @since 2.0.0
 * @category filtering
 */
const compact = exports.compact = HM.compact;
/**
 * Maps over the entries of the `HashMap` using the specified partial function
 * and filters out `None` values.
 *
 * @since 2.0.0
 * @category filtering
 */
const filterMap = exports.filterMap = HM.filterMap;
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
const findFirst = exports.findFirst = HM.findFirst;
/**
 * Checks if any entry in a hashmap meets a specific condition.
 *
 * @since 3.13.0
 * @category elements
 */
const some = exports.some = HM.some;
/**
 * Checks if all entries in a hashmap meets a specific condition.
 *
 * @param self - The hashmap to check.
 * @param predicate - The condition to test entries (value, key).
 *
 * @since 3.14.0
 * @category elements
 */
const every = exports.every = HM.every;
//# sourceMappingURL=HashMap.js.map