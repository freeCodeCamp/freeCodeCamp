/**
 * @since 2.0.0
 */
import * as HM from "./internal/hashMap.js";
import * as keySet_ from "./internal/hashMap/keySet.js";
const TypeId = HM.HashMapTypeId;
/**
 * @since 2.0.0
 * @category refinements
 */
export const isHashMap = HM.isHashMap;
/**
 * Creates a new `HashMap`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty = HM.empty;
/**
 * Constructs a new `HashMap` from an array of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = HM.make;
/**
 * Creates a new `HashMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable = HM.fromIterable;
/**
 * Checks if the `HashMap` contains any entries.
 *
 * @since 2.0.0
 * @category elements
 */
export const isEmpty = HM.isEmpty;
/**
 * Safely lookup the value for the specified key in the `HashMap` using the
 * internal hashing function.
 *
 * @since 2.0.0
 * @category elements
 */
export const get = HM.get;
/**
 * Lookup the value for the specified key in the `HashMap` using a custom hash.
 *
 * @since 2.0.0
 * @category elements
 */
export const getHash = HM.getHash;
/**
 * Unsafely lookup the value for the specified key in the `HashMap` using the
 * internal hashing function.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeGet = HM.unsafeGet;
/**
 * Checks if the specified key has an entry in the `HashMap`.
 *
 * @since 2.0.0
 * @category elements
 */
export const has = HM.has;
/**
 * Checks if the specified key has an entry in the `HashMap` using a custom
 * hash.
 *
 * @since 2.0.0
 * @category elements
 */
export const hasHash = HM.hasHash;
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
export const hasBy = HM.hasBy;
/**
 * Sets the specified key to the specified value using the internal hashing
 * function.
 *
 * @since 2.0.0
 */
export const set = HM.set;
/**
 * Returns an `IterableIterator` of the keys within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
export const keys = HM.keys;
/**
 * Returns a `HashSet` of keys within the `HashMap`.
 *
 * @since 2.0.0
 * @category getter
 */
export const keySet = keySet_.keySet;
/**
 * Returns an `IterableIterator` of the values within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
export const values = HM.values;
/**
 * Returns an `Array` of the values within the `HashMap`.
 *
 * @since 3.13.0
 * @category getters
 */
export const toValues = self => Array.from(values(self));
/**
 * Returns an `IterableIterator` of the entries within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
export const entries = HM.entries;
/**
 * Returns an `Array<[K, V]>` of the entries within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
export const toEntries = self => Array.from(entries(self));
/**
 * Returns the number of entries within the `HashMap`.
 *
 * @since 2.0.0
 * @category getters
 */
export const size = HM.size;
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
export const countBy = HM.countBy;
/**
 * Marks the `HashMap` as mutable.
 *
 * @since 2.0.0
 */
export const beginMutation = HM.beginMutation;
/**
 * Marks the `HashMap` as immutable.
 *
 * @since 2.0.0
 */
export const endMutation = HM.endMutation;
/**
 * Mutates the `HashMap` within the context of the provided function.
 *
 * @since 2.0.0
 */
export const mutate = HM.mutate;
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
export const modifyAt = HM.modifyAt;
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
export const modifyHash = HM.modifyHash;
/**
 * Updates the value of the specified key within the `HashMap` if it exists.
 *
 * @since 2.0.0
 */
export const modify = HM.modify;
/**
 * Performs a union of this `HashMap` and that `HashMap`.
 *
 * @since 2.0.0
 */
export const union = HM.union;
/**
 * Remove the entry for the specified key in the `HashMap` using the internal
 * hashing function.
 *
 * @since 2.0.0
 */
export const remove = HM.remove;
/**
 * Removes all entries in the `HashMap` which have the specified keys.
 *
 * @since 2.0.0
 */
export const removeMany = HM.removeMany;
/**
 * Maps over the entries of the `HashMap` using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = HM.map;
/**
 * Chains over the entries of the `HashMap` using the specified function.
 *
 * **NOTE**: the hash and equal of both maps have to be the same.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap = HM.flatMap;
/**
 * Applies the specified function to the entries of the `HashMap`.
 *
 * @since 2.0.0
 * @category traversing
 */
export const forEach = HM.forEach;
/**
 * Reduces the specified state over the entries of the `HashMap`.
 *
 * @since 2.0.0
 * @category folding
 */
export const reduce = HM.reduce;
/**
 * Filters entries out of a `HashMap` using the specified predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filter = HM.filter;
/**
 * Filters out `None` values from a `HashMap` of `Options`s.
 *
 * @since 2.0.0
 * @category filtering
 */
export const compact = HM.compact;
/**
 * Maps over the entries of the `HashMap` using the specified partial function
 * and filters out `None` values.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterMap = HM.filterMap;
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
export const findFirst = HM.findFirst;
/**
 * Checks if any entry in a hashmap meets a specific condition.
 *
 * @since 3.13.0
 * @category elements
 */
export const some = HM.some;
/**
 * Checks if all entries in a hashmap meets a specific condition.
 *
 * @param self - The hashmap to check.
 * @param predicate - The condition to test entries (value, key).
 *
 * @since 3.14.0
 * @category elements
 */
export const every = HM.every;
//# sourceMappingURL=HashMap.js.map