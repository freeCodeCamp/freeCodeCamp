"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.updateWith = exports.transformValuesSTM = exports.transformValues = exports.transformSTM = exports.transform = exports.toMap = exports.toHashMap = exports.toChunk = exports.toArray = exports.takeSomeSTM = exports.takeSome = exports.takeFirstSTM = exports.takeFirst = exports.size = exports.setIfAbsent = exports.set = exports.retainIf = exports.removeIf = exports.removeAll = exports.remove = exports.reduceSTM = exports.reduce = exports.merge = exports.make = exports.keys = exports.isEmpty = exports.has = exports.getOrElse = exports.get = exports.fromIterable = exports.forEach = exports.findSTM = exports.findAllSTM = exports.findAll = exports.find = exports.empty = exports.TMapTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/stm/tMap.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const TMapTypeId = exports.TMapTypeId = internal.TMapTypeId;
/**
 * Makes an empty `TMap`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Finds the key/value pair matching the specified predicate, and uses the
 * provided function to extract a value out of it.
 *
 * @since 2.0.0
 * @category elements
 */
const find = exports.find = internal.find;
/**
 * Finds the key/value pair matching the specified predicate, and uses the
 * provided effectful function to extract a value out of it.
 *
 * @since 2.0.0
 * @category elements
 */
const findSTM = exports.findSTM = internal.findSTM;
/**
 * Finds all the key/value pairs matching the specified predicate, and uses
 * the provided function to extract values out them.
 *
 * @since 2.0.0
 * @category elements
 */
const findAll = exports.findAll = internal.findAll;
/**
 * Finds all the key/value pairs matching the specified predicate, and uses
 * the provided effectful function to extract values out of them..
 *
 * @since 2.0.0
 * @category elements
 */
const findAllSTM = exports.findAllSTM = internal.findAllSTM;
/**
 * Atomically performs transactional-effect for each binding present in map.
 *
 * @since 2.0.0
 * @category elements
 */
const forEach = exports.forEach = internal.forEach;
/**
 * Creates a new `TMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = internal.fromIterable;
/**
 * Retrieves value associated with given key.
 *
 * @since 2.0.0
 * @category elements
 */
const get = exports.get = internal.get;
/**
 * Retrieves value associated with given key or default value, in case the key
 * isn't present.
 *
 * @since 2.0.0
 * @category elements
 */
const getOrElse = exports.getOrElse = internal.getOrElse;
/**
 * Tests whether or not map contains a key.
 *
 * @since 2.0.0
 * @category elements
 */
const has = exports.has = internal.has;
/**
 * Tests if the map is empty or not.
 *
 * @since 2.0.0
 * @category getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Collects all keys stored in map.
 *
 * @since 2.0.0
 * @category elements
 */
const keys = exports.keys = internal.keys;
/**
 * Makes a new `TMap` that is initialized with specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * If the key is not already associated with a value, stores the provided value,
 * otherwise merge the existing value with the new one using function `f` and
 * store the result.
 *
 * @since 2.0.0
 * @category mutations
 */
const merge = exports.merge = internal.merge;
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
 * Removes binding for given key.
 *
 * @since 2.0.0
 * @category mutations
 */
const remove = exports.remove = internal.remove;
/**
 * Deletes all entries associated with the specified keys.
 *
 * @since 2.0.0
 * @category mutations
 */
const removeAll = exports.removeAll = internal.removeAll;
/**
 * Removes entries from a `TMap` that satisfy the specified predicate and returns the removed entries
 * (or `void` if `discard = true`).
 *
 * @since 2.0.0
 * @category mutations
 */
const removeIf = exports.removeIf = internal.removeIf;
/**
 * Retains entries in a `TMap` that satisfy the specified predicate and returns the removed entries
 * (or `void` if `discard = true`).
 *
 * @since 2.0.0
 * @category mutations
 */
const retainIf = exports.retainIf = internal.retainIf;
/**
 * Stores new binding into the map.
 *
 * @since 2.0.0
 * @category mutations
 */
const set = exports.set = internal.set;
/**
 * Stores new binding in the map if it does not already exist.
 *
 * @since 2.0.0
 * @category mutations
 */
const setIfAbsent = exports.setIfAbsent = internal.setIfAbsent;
/**
 * Returns the number of bindings.
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
 * Collects all bindings into a `Chunk`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toChunk = exports.toChunk = internal.toChunk;
/**
 * Collects all bindings into a `HashMap`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toHashMap = exports.toHashMap = internal.toHashMap;
/**
 * Collects all bindings into an `Array`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toArray = exports.toArray = internal.toArray;
/**
 * Collects all bindings into a `Map`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toMap = exports.toMap = internal.toMap;
/**
 * Atomically updates all bindings using a pure function.
 *
 * @since 2.0.0
 * @category mutations
 */
const transform = exports.transform = internal.transform;
/**
 * Atomically updates all bindings using a transactional function.
 *
 * @since 2.0.0
 * @category mutations
 */
const transformSTM = exports.transformSTM = internal.transformSTM;
/**
 * Atomically updates all values using a pure function.
 *
 * @since 2.0.0
 * @category mutations
 */
const transformValues = exports.transformValues = internal.transformValues;
/**
 * Atomically updates all values using a transactional function.
 *
 * @since 2.0.0
 * @category mutations
 */
const transformValuesSTM = exports.transformValuesSTM = internal.transformValuesSTM;
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
const updateWith = exports.updateWith = internal.updateWith;
/**
 * Collects all values stored in map.
 *
 * @since 2.0.0
 * @category elements
 */
const values = exports.values = internal.values;
//# sourceMappingURL=TMap.js.map