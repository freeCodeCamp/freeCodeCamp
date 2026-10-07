import * as internal from "./internal/stm/tMap.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const TMapTypeId = internal.TMapTypeId;
/**
 * Makes an empty `TMap`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty = internal.empty;
/**
 * Finds the key/value pair matching the specified predicate, and uses the
 * provided function to extract a value out of it.
 *
 * @since 2.0.0
 * @category elements
 */
export const find = internal.find;
/**
 * Finds the key/value pair matching the specified predicate, and uses the
 * provided effectful function to extract a value out of it.
 *
 * @since 2.0.0
 * @category elements
 */
export const findSTM = internal.findSTM;
/**
 * Finds all the key/value pairs matching the specified predicate, and uses
 * the provided function to extract values out them.
 *
 * @since 2.0.0
 * @category elements
 */
export const findAll = internal.findAll;
/**
 * Finds all the key/value pairs matching the specified predicate, and uses
 * the provided effectful function to extract values out of them..
 *
 * @since 2.0.0
 * @category elements
 */
export const findAllSTM = internal.findAllSTM;
/**
 * Atomically performs transactional-effect for each binding present in map.
 *
 * @since 2.0.0
 * @category elements
 */
export const forEach = internal.forEach;
/**
 * Creates a new `TMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable = internal.fromIterable;
/**
 * Retrieves value associated with given key.
 *
 * @since 2.0.0
 * @category elements
 */
export const get = internal.get;
/**
 * Retrieves value associated with given key or default value, in case the key
 * isn't present.
 *
 * @since 2.0.0
 * @category elements
 */
export const getOrElse = internal.getOrElse;
/**
 * Tests whether or not map contains a key.
 *
 * @since 2.0.0
 * @category elements
 */
export const has = internal.has;
/**
 * Tests if the map is empty or not.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty = internal.isEmpty;
/**
 * Collects all keys stored in map.
 *
 * @since 2.0.0
 * @category elements
 */
export const keys = internal.keys;
/**
 * Makes a new `TMap` that is initialized with specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
/**
 * If the key is not already associated with a value, stores the provided value,
 * otherwise merge the existing value with the new one using function `f` and
 * store the result.
 *
 * @since 2.0.0
 * @category mutations
 */
export const merge = internal.merge;
/**
 * Atomically folds using a pure function.
 *
 * @since 2.0.0
 * @category folding
 */
export const reduce = internal.reduce;
/**
 * Atomically folds using a transactional function.
 *
 * @since 2.0.0
 * @category folding
 */
export const reduceSTM = internal.reduceSTM;
/**
 * Removes binding for given key.
 *
 * @since 2.0.0
 * @category mutations
 */
export const remove = internal.remove;
/**
 * Deletes all entries associated with the specified keys.
 *
 * @since 2.0.0
 * @category mutations
 */
export const removeAll = internal.removeAll;
/**
 * Removes entries from a `TMap` that satisfy the specified predicate and returns the removed entries
 * (or `void` if `discard = true`).
 *
 * @since 2.0.0
 * @category mutations
 */
export const removeIf = internal.removeIf;
/**
 * Retains entries in a `TMap` that satisfy the specified predicate and returns the removed entries
 * (or `void` if `discard = true`).
 *
 * @since 2.0.0
 * @category mutations
 */
export const retainIf = internal.retainIf;
/**
 * Stores new binding into the map.
 *
 * @since 2.0.0
 * @category mutations
 */
export const set = internal.set;
/**
 * Stores new binding in the map if it does not already exist.
 *
 * @since 2.0.0
 * @category mutations
 */
export const setIfAbsent = internal.setIfAbsent;
/**
 * Returns the number of bindings.
 *
 * @since 2.0.0
 * @category getters
 */
export const size = internal.size;
/**
 * Takes the first matching value, or retries until there is one.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeFirst = internal.takeFirst;
/**
 * Takes the first matching value, or retries until there is one.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeFirstSTM = internal.takeFirstSTM;
/**
 * Takes all matching values, or retries until there is at least one.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeSome = internal.takeSome;
/**
 * Takes all matching values, or retries until there is at least one.
 *
 * @since 2.0.0
 * @category mutations
 */
export const takeSomeSTM = internal.takeSomeSTM;
/**
 * Collects all bindings into a `Chunk`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toChunk = internal.toChunk;
/**
 * Collects all bindings into a `HashMap`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toHashMap = internal.toHashMap;
/**
 * Collects all bindings into an `Array`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toArray = internal.toArray;
/**
 * Collects all bindings into a `Map`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toMap = internal.toMap;
/**
 * Atomically updates all bindings using a pure function.
 *
 * @since 2.0.0
 * @category mutations
 */
export const transform = internal.transform;
/**
 * Atomically updates all bindings using a transactional function.
 *
 * @since 2.0.0
 * @category mutations
 */
export const transformSTM = internal.transformSTM;
/**
 * Atomically updates all values using a pure function.
 *
 * @since 2.0.0
 * @category mutations
 */
export const transformValues = internal.transformValues;
/**
 * Atomically updates all values using a transactional function.
 *
 * @since 2.0.0
 * @category mutations
 */
export const transformValuesSTM = internal.transformValuesSTM;
/**
 * Updates the mapping for the specified key with the specified function,
 * which takes the current value of the key as an input, if it exists, and
 * either returns `Some` with a new value to indicate to update the value in
 * the map or `None` to remove the value from the map. Returns `Some` with the
 * updated value or `None` if the value was removed from the map.
 *
 * @since 2.0.0
 * @category mutations
 */
export const updateWith = internal.updateWith;
/**
 * Collects all values stored in map.
 *
 * @since 2.0.0
 * @category elements
 */
export const values = internal.values;
//# sourceMappingURL=TMap.js.map