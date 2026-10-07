/**
 * A `Trie` is used for locating specific `string` keys from within a set.
 *
 * It works similar to `HashMap`, but with keys required to be `string`.
 * This constraint unlocks some performance optimizations and new methods to get string prefixes (e.g. `keysWithPrefix`, `longestPrefixOf`).
 *
 * Prefix search is also the main feature that makes a `Trie` more suited than `HashMap` for certain usecases.
 *
 * A `Trie` is often used to store a dictionary (list of words) that can be searched
 * in a manner that allows for efficient generation of completion lists
 * (e.g. predict the rest of a word a user is typing).
 *
 * A `Trie` has O(n) lookup time where `n` is the size of the key,
 * or even less than `n` on search misses.
 *
 * @since 2.0.0
 */
import type { Equal } from "./Equal.js";
import type { Inspectable } from "./Inspectable.js";
import type { Option } from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
import type { Covariant, NoInfer } from "./Types.js";
declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Trie<out Value> extends Iterable<[string, Value]>, Equal, Pipeable, Inspectable {
    readonly [TypeId]: {
        readonly _Value: Covariant<Value>;
    };
}
/**
 * Creates an empty `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal } from "effect"
 *
 * const trie = Trie.empty<string>()
 *
 * assert.equal(Trie.size(trie), 0)
 * assert.deepStrictEqual(Array.from(trie), [])
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <V = never>() => Trie<V>;
/**
 * Creates a new `Trie` from an iterable collection of key/value pairs (e.g. `Array<[string, V]>`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal } from "effect"
 *
 * const iterable: Array<readonly [string, number]> = [["call", 0], ["me", 1], ["mind", 2], ["mid", 3]]
 * const trie = Trie.fromIterable(iterable)
 *
 * // The entries in the `Trie` are extracted in alphabetical order, regardless of the insertion order
 * assert.deepStrictEqual(Array.from(trie), [["call", 0], ["me", 1], ["mid", 3], ["mind", 2]])
 * assert.equal(Equal.equals(Trie.make(["call", 0], ["me", 1], ["mind", 2], ["mid", 3]), trie), true)
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: <V>(entries: Iterable<readonly [string, V]>) => Trie<V>;
/**
 * Constructs a new `Trie` from the specified entries (`[string, V]`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal } from "effect"
 *
 * const trie = Trie.make(["ca", 0], ["me", 1])
 *
 * assert.deepStrictEqual(Array.from(trie), [["ca", 0], ["me", 1]])
 * assert.equal(Equal.equals(Trie.fromIterable([["ca", 0], ["me", 1]]), trie), true)
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <Entries extends Array<readonly [string, any]>>(...entries: Entries) => Trie<Entries[number] extends readonly [any, infer V] ? V : never>;
/**
 * Insert a new entry in the `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie1 = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0)
 * )
 * const trie2 = trie1.pipe(Trie.insert("me", 1))
 * const trie3 = trie2.pipe(Trie.insert("mind", 2))
 * const trie4 = trie3.pipe(Trie.insert("mid", 3))
 *
 * assert.deepStrictEqual(Array.from(trie1), [["call", 0]])
 * assert.deepStrictEqual(Array.from(trie2), [["call", 0], ["me", 1]])
 * assert.deepStrictEqual(Array.from(trie3), [["call", 0], ["me", 1], ["mind", 2]])
 * assert.deepStrictEqual(Array.from(trie4), [["call", 0], ["me", 1], ["mid", 3], ["mind", 2]])
 * ```
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const insert: {
    /**
     * Insert a new entry in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie1 = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0)
     * )
     * const trie2 = trie1.pipe(Trie.insert("me", 1))
     * const trie3 = trie2.pipe(Trie.insert("mind", 2))
     * const trie4 = trie3.pipe(Trie.insert("mid", 3))
     *
     * assert.deepStrictEqual(Array.from(trie1), [["call", 0]])
     * assert.deepStrictEqual(Array.from(trie2), [["call", 0], ["me", 1]])
     * assert.deepStrictEqual(Array.from(trie3), [["call", 0], ["me", 1], ["mind", 2]])
     * assert.deepStrictEqual(Array.from(trie4), [["call", 0], ["me", 1], ["mid", 3], ["mind", 2]])
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V1>(key: string, value: V1): <V>(self: Trie<V>) => Trie<V | V1>;
    /**
     * Insert a new entry in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie1 = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0)
     * )
     * const trie2 = trie1.pipe(Trie.insert("me", 1))
     * const trie3 = trie2.pipe(Trie.insert("mind", 2))
     * const trie4 = trie3.pipe(Trie.insert("mid", 3))
     *
     * assert.deepStrictEqual(Array.from(trie1), [["call", 0]])
     * assert.deepStrictEqual(Array.from(trie2), [["call", 0], ["me", 1]])
     * assert.deepStrictEqual(Array.from(trie3), [["call", 0], ["me", 1], ["mind", 2]])
     * assert.deepStrictEqual(Array.from(trie4), [["call", 0], ["me", 1], ["mid", 3], ["mind", 2]])
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V1, V>(self: Trie<V>, key: string, value: V1): Trie<V | V1>;
};
/**
 * Returns an `IterableIterator` of the keys within the `Trie`.
 *
 * The keys are returned in alphabetical order, regardless of insertion order.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("cab", 0),
 *   Trie.insert("abc", 1),
 *   Trie.insert("bca", 2)
 * )
 *
 * const result = Array.from(Trie.keys(trie))
 * assert.deepStrictEqual(result, ["abc", "bca", "cab"])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const keys: <V>(self: Trie<V>) => IterableIterator<string>;
/**
 * Returns an `IterableIterator` of the values within the `Trie`.
 *
 * Values are ordered based on their key in alphabetical order, regardless of insertion order.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0),
 *   Trie.insert("me", 1),
 *   Trie.insert("and", 2)
 * )
 *
 * const result = Array.from(Trie.values(trie))
 * assert.deepStrictEqual(result, [2, 0, 1])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const values: <V>(self: Trie<V>) => IterableIterator<V>;
/**
 * Returns an `IterableIterator` of the entries within the `Trie`.
 *
 * The entries are returned by keys in alphabetical order, regardless of insertion order.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0),
 *   Trie.insert("me", 1)
 * )
 *
 * const result = Array.from(Trie.entries(trie))
 * assert.deepStrictEqual(result, [["call", 0], ["me", 1]])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const entries: <V>(self: Trie<V>) => IterableIterator<[string, V]>;
/**
 * Returns an `Array<[K, V]>` of the entries within the `Trie`.
 *
 * Equivalent to `Array.from(Trie.entries(trie))`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0),
 *   Trie.insert("me", 1)
 * )
 * const result = Trie.toEntries(trie)
 *
 * assert.deepStrictEqual(result, [["call", 0], ["me", 1]])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const toEntries: <V>(self: Trie<V>) => Array<[string, V]>;
/**
 * Returns an `IterableIterator` of the keys within the `Trie`
 * that have `prefix` as prefix (`prefix` included if it exists).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("she", 0),
 *   Trie.insert("shells", 1),
 *   Trie.insert("sea", 2),
 *   Trie.insert("shore", 3)
 * )
 *
 * const result = Array.from(Trie.keysWithPrefix(trie, "she"))
 * assert.deepStrictEqual(result, ["she", "shells"])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const keysWithPrefix: {
    /**
     * Returns an `IterableIterator` of the keys within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("she", 0),
     *   Trie.insert("shells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("shore", 3)
     * )
     *
     * const result = Array.from(Trie.keysWithPrefix(trie, "she"))
     * assert.deepStrictEqual(result, ["she", "shells"])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    (prefix: string): <V>(self: Trie<V>) => IterableIterator<string>;
    /**
     * Returns an `IterableIterator` of the keys within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("she", 0),
     *   Trie.insert("shells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("shore", 3)
     * )
     *
     * const result = Array.from(Trie.keysWithPrefix(trie, "she"))
     * assert.deepStrictEqual(result, ["she", "shells"])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    <V>(self: Trie<V>, prefix: string): IterableIterator<string>;
};
/**
 * Returns an `IterableIterator` of the values within the `Trie`
 * that have `prefix` as prefix (`prefix` included if it exists).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("she", 0),
 *   Trie.insert("shells", 1),
 *   Trie.insert("sea", 2),
 *   Trie.insert("shore", 3)
 * )
 *
 * const result = Array.from(Trie.valuesWithPrefix(trie, "she"))
 *
 * // 0: "she", 1: "shells"
 * assert.deepStrictEqual(result, [0, 1])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const valuesWithPrefix: {
    /**
     * Returns an `IterableIterator` of the values within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("she", 0),
     *   Trie.insert("shells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("shore", 3)
     * )
     *
     * const result = Array.from(Trie.valuesWithPrefix(trie, "she"))
     *
     * // 0: "she", 1: "shells"
     * assert.deepStrictEqual(result, [0, 1])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    (prefix: string): <V>(self: Trie<V>) => IterableIterator<V>;
    /**
     * Returns an `IterableIterator` of the values within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("she", 0),
     *   Trie.insert("shells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("shore", 3)
     * )
     *
     * const result = Array.from(Trie.valuesWithPrefix(trie, "she"))
     *
     * // 0: "she", 1: "shells"
     * assert.deepStrictEqual(result, [0, 1])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    <V>(self: Trie<V>, prefix: string): IterableIterator<V>;
};
/**
 * Returns an `IterableIterator` of the entries within the `Trie`
 * that have `prefix` as prefix (`prefix` included if it exists).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("she", 0),
 *   Trie.insert("shells", 1),
 *   Trie.insert("sea", 2),
 *   Trie.insert("shore", 3)
 * )
 *
 * const result = Array.from(Trie.entriesWithPrefix(trie, "she"))
 * assert.deepStrictEqual(result, [["she", 0], ["shells", 1]])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const entriesWithPrefix: {
    /**
     * Returns an `IterableIterator` of the entries within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("she", 0),
     *   Trie.insert("shells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("shore", 3)
     * )
     *
     * const result = Array.from(Trie.entriesWithPrefix(trie, "she"))
     * assert.deepStrictEqual(result, [["she", 0], ["shells", 1]])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    (prefix: string): <V>(self: Trie<V>) => IterableIterator<[string, V]>;
    /**
     * Returns an `IterableIterator` of the entries within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("she", 0),
     *   Trie.insert("shells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("shore", 3)
     * )
     *
     * const result = Array.from(Trie.entriesWithPrefix(trie, "she"))
     * assert.deepStrictEqual(result, [["she", 0], ["shells", 1]])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    <V>(self: Trie<V>, prefix: string): IterableIterator<[string, V]>;
};
/**
 * Returns `Array<[K, V]>` of the entries within the `Trie`
 * that have `prefix` as prefix (`prefix` included if it exists).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("sea", 2),
 *   Trie.insert("she", 3)
 * )
 *
 * const result = Trie.toEntriesWithPrefix(trie, "she")
 * assert.deepStrictEqual(result, [["she", 3], ["shells", 0]])
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const toEntriesWithPrefix: {
    /**
     * Returns `Array<[K, V]>` of the entries within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("she", 3)
     * )
     *
     * const result = Trie.toEntriesWithPrefix(trie, "she")
     * assert.deepStrictEqual(result, [["she", 3], ["shells", 0]])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    (prefix: string): <V>(self: Trie<V>) => Array<[string, V]>;
    /**
     * Returns `Array<[K, V]>` of the entries within the `Trie`
     * that have `prefix` as prefix (`prefix` included if it exists).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("sea", 2),
     *   Trie.insert("she", 3)
     * )
     *
     * const result = Trie.toEntriesWithPrefix(trie, "she")
     * assert.deepStrictEqual(result, [["she", 3], ["shells", 0]])
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    <V>(self: Trie<V>, prefix: string): Array<[string, V]>;
};
/**
 * Returns the longest key/value in the `Trie`
 * that is a prefix of that `key` if it exists, `None` otherwise.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Option } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "sell"), Option.none())
 * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "sells"), Option.some(["sells", 1]))
 * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "shell"), Option.some(["she", 2]))
 * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "shellsort"), Option.some(["shells", 0]))
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const longestPrefixOf: {
    /**
     * Returns the longest key/value in the `Trie`
     * that is a prefix of that `key` if it exists, `None` otherwise.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "sell"), Option.none())
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "sells"), Option.some(["sells", 1]))
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "shell"), Option.some(["she", 2]))
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "shellsort"), Option.some(["shells", 0]))
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    (key: string): <V>(self: Trie<V>) => Option<[string, V]>;
    /**
     * Returns the longest key/value in the `Trie`
     * that is a prefix of that `key` if it exists, `None` otherwise.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "sell"), Option.none())
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "sells"), Option.some(["sells", 1]))
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "shell"), Option.some(["she", 2]))
     * assert.deepStrictEqual(Trie.longestPrefixOf(trie, "shellsort"), Option.some(["shells", 0]))
     * ```
     *
     * @since 2.0.0
     * @category getters
     */
    <V>(self: Trie<V>, key: string): Option<[string, V]>;
};
/**
 * Returns the size of the `Trie` (number of entries in the `Trie`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("a", 0),
 *   Trie.insert("b", 1)
 * )
 *
 * assert.equal(Trie.size(trie), 2)
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <V>(self: Trie<V>) => number;
/**
 * Safely lookup the value for the specified key in the `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Option } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0),
 *   Trie.insert("me", 1),
 *   Trie.insert("mind", 2),
 *   Trie.insert("mid", 3)
 * )
 *
 * assert.deepStrictEqual(Trie.get(trie, "call"), Option.some(0))
 * assert.deepStrictEqual(Trie.get(trie, "me"), Option.some(1))
 * assert.deepStrictEqual(Trie.get(trie, "mind"), Option.some(2))
 * assert.deepStrictEqual(Trie.get(trie, "mid"), Option.some(3))
 * assert.deepStrictEqual(Trie.get(trie, "cale"), Option.none())
 * assert.deepStrictEqual(Trie.get(trie, "ma"), Option.none())
 * assert.deepStrictEqual(Trie.get(trie, "midn"), Option.none())
 * assert.deepStrictEqual(Trie.get(trie, "mea"), Option.none())
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export declare const get: {
    /**
     * Safely lookup the value for the specified key in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1),
     *   Trie.insert("mind", 2),
     *   Trie.insert("mid", 3)
     * )
     *
     * assert.deepStrictEqual(Trie.get(trie, "call"), Option.some(0))
     * assert.deepStrictEqual(Trie.get(trie, "me"), Option.some(1))
     * assert.deepStrictEqual(Trie.get(trie, "mind"), Option.some(2))
     * assert.deepStrictEqual(Trie.get(trie, "mid"), Option.some(3))
     * assert.deepStrictEqual(Trie.get(trie, "cale"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie, "ma"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie, "midn"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie, "mea"), Option.none())
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    (key: string): <V>(self: Trie<V>) => Option<V>;
    /**
     * Safely lookup the value for the specified key in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1),
     *   Trie.insert("mind", 2),
     *   Trie.insert("mid", 3)
     * )
     *
     * assert.deepStrictEqual(Trie.get(trie, "call"), Option.some(0))
     * assert.deepStrictEqual(Trie.get(trie, "me"), Option.some(1))
     * assert.deepStrictEqual(Trie.get(trie, "mind"), Option.some(2))
     * assert.deepStrictEqual(Trie.get(trie, "mid"), Option.some(3))
     * assert.deepStrictEqual(Trie.get(trie, "cale"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie, "ma"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie, "midn"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie, "mea"), Option.none())
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <V>(self: Trie<V>, key: string): Option<V>;
};
/**
 * Check if the given key exists in the `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0),
 *   Trie.insert("me", 1),
 *   Trie.insert("mind", 2),
 *   Trie.insert("mid", 3)
 * )
 *
 * assert.equal(Trie.has(trie, "call"), true)
 * assert.equal(Trie.has(trie, "me"), true)
 * assert.equal(Trie.has(trie, "mind"), true)
 * assert.equal(Trie.has(trie, "mid"), true)
 * assert.equal(Trie.has(trie, "cale"), false)
 * assert.equal(Trie.has(trie, "ma"), false)
 * assert.equal(Trie.has(trie, "midn"), false)
 * assert.equal(Trie.has(trie, "mea"), false)
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export declare const has: {
    /**
     * Check if the given key exists in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1),
     *   Trie.insert("mind", 2),
     *   Trie.insert("mid", 3)
     * )
     *
     * assert.equal(Trie.has(trie, "call"), true)
     * assert.equal(Trie.has(trie, "me"), true)
     * assert.equal(Trie.has(trie, "mind"), true)
     * assert.equal(Trie.has(trie, "mid"), true)
     * assert.equal(Trie.has(trie, "cale"), false)
     * assert.equal(Trie.has(trie, "ma"), false)
     * assert.equal(Trie.has(trie, "midn"), false)
     * assert.equal(Trie.has(trie, "mea"), false)
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    (key: string): <V>(self: Trie<V>) => boolean;
    /**
     * Check if the given key exists in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1),
     *   Trie.insert("mind", 2),
     *   Trie.insert("mid", 3)
     * )
     *
     * assert.equal(Trie.has(trie, "call"), true)
     * assert.equal(Trie.has(trie, "me"), true)
     * assert.equal(Trie.has(trie, "mind"), true)
     * assert.equal(Trie.has(trie, "mid"), true)
     * assert.equal(Trie.has(trie, "cale"), false)
     * assert.equal(Trie.has(trie, "ma"), false)
     * assert.equal(Trie.has(trie, "midn"), false)
     * assert.equal(Trie.has(trie, "mea"), false)
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <V>(self: Trie<V>, key: string): boolean;
};
/**
 * Checks if the `Trie` contains any entries.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>()
 * const trie1 = trie.pipe(Trie.insert("ma", 0))
 *
 * assert.equal(Trie.isEmpty(trie), true)
 * assert.equal(Trie.isEmpty(trie1), false)
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export declare const isEmpty: <V>(self: Trie<V>) => boolean;
/**
 * Unsafely lookup the value for the specified key in the `Trie`.
 *
 * `unsafeGet` will throw if the key is not found. Use `get` instead to safely
 * get a value from the `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0),
 *   Trie.insert("me", 1)
 * )
 *
 * assert.throws(() => Trie.unsafeGet(trie, "mae"))
 * ```
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeGet: {
    /**
     * Unsafely lookup the value for the specified key in the `Trie`.
     *
     * `unsafeGet` will throw if the key is not found. Use `get` instead to safely
     * get a value from the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1)
     * )
     *
     * assert.throws(() => Trie.unsafeGet(trie, "mae"))
     * ```
     *
     * @since 2.0.0
     * @category unsafe
     */
    (key: string): <V>(self: Trie<V>) => V;
    /**
     * Unsafely lookup the value for the specified key in the `Trie`.
     *
     * `unsafeGet` will throw if the key is not found. Use `get` instead to safely
     * get a value from the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1)
     * )
     *
     * assert.throws(() => Trie.unsafeGet(trie, "mae"))
     * ```
     *
     * @since 2.0.0
     * @category unsafe
     */
    <V>(self: Trie<V>, key: string): V;
};
/**
 * Remove the entry for the specified key in the `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Option } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("call", 0),
 *   Trie.insert("me", 1),
 *   Trie.insert("mind", 2),
 *   Trie.insert("mid", 3)
 * )
 *
 * const trie1 = trie.pipe(Trie.remove("call"))
 * const trie2 = trie1.pipe(Trie.remove("mea"))
 *
 * assert.deepStrictEqual(Trie.get(trie, "call"), Option.some(0))
 * assert.deepStrictEqual(Trie.get(trie1, "call"), Option.none())
 * assert.deepStrictEqual(Trie.get(trie2, "call"), Option.none())
 * ```
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const remove: {
    /**
     * Remove the entry for the specified key in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1),
     *   Trie.insert("mind", 2),
     *   Trie.insert("mid", 3)
     * )
     *
     * const trie1 = trie.pipe(Trie.remove("call"))
     * const trie2 = trie1.pipe(Trie.remove("mea"))
     *
     * assert.deepStrictEqual(Trie.get(trie, "call"), Option.some(0))
     * assert.deepStrictEqual(Trie.get(trie1, "call"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie2, "call"), Option.none())
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    (key: string): <V>(self: Trie<V>) => Trie<V>;
    /**
     * Remove the entry for the specified key in the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("call", 0),
     *   Trie.insert("me", 1),
     *   Trie.insert("mind", 2),
     *   Trie.insert("mid", 3)
     * )
     *
     * const trie1 = trie.pipe(Trie.remove("call"))
     * const trie2 = trie1.pipe(Trie.remove("mea"))
     *
     * assert.deepStrictEqual(Trie.get(trie, "call"), Option.some(0))
     * assert.deepStrictEqual(Trie.get(trie1, "call"), Option.none())
     * assert.deepStrictEqual(Trie.get(trie2, "call"), Option.none())
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V>(self: Trie<V>, key: string): Trie<V>;
};
/**
 * Reduce a state over the entries of the `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * assert.equal(
 *   trie.pipe(
 *     Trie.reduce(0, (acc, n) => acc + n)
 *   ),
 *   3
 * )
 * assert.equal(
 *   trie.pipe(
 *     Trie.reduce(10, (acc, n) => acc + n)
 *   ),
 *   13
 * )
 * assert.equal(
 *   trie.pipe(
 *     Trie.reduce("", (acc, _, key) => acc + key)
 *   ),
 *   "sellssheshells"
 * )
 * ```
 *
 * @since 2.0.0
 * @category folding
 */
export declare const reduce: {
    /**
     * Reduce a state over the entries of the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.equal(
     *   trie.pipe(
     *     Trie.reduce(0, (acc, n) => acc + n)
     *   ),
     *   3
     * )
     * assert.equal(
     *   trie.pipe(
     *     Trie.reduce(10, (acc, n) => acc + n)
     *   ),
     *   13
     * )
     * assert.equal(
     *   trie.pipe(
     *     Trie.reduce("", (acc, _, key) => acc + key)
     *   ),
     *   "sellssheshells"
     * )
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, V>(zero: Z, f: (accumulator: Z, value: V, key: string) => Z): (self: Trie<V>) => Z;
    /**
     * Reduce a state over the entries of the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.equal(
     *   trie.pipe(
     *     Trie.reduce(0, (acc, n) => acc + n)
     *   ),
     *   3
     * )
     * assert.equal(
     *   trie.pipe(
     *     Trie.reduce(10, (acc, n) => acc + n)
     *   ),
     *   13
     * )
     * assert.equal(
     *   trie.pipe(
     *     Trie.reduce("", (acc, _, key) => acc + key)
     *   ),
     *   "sellssheshells"
     * )
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, V>(self: Trie<V>, zero: Z, f: (accumulator: Z, value: V, key: string) => Z): Z;
};
/**
 * Maps over the entries of the `Trie` using the specified function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * const trieMapV = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 1),
 *   Trie.insert("sells", 2),
 *   Trie.insert("she", 3)
 * )
 *
 * const trieMapK = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 6),
 *   Trie.insert("sells", 5),
 *   Trie.insert("she", 3)
 * )
 *
 * assert.equal(Equal.equals(Trie.map(trie, (v) => v + 1), trieMapV), true)
 * assert.equal(Equal.equals(Trie.map(trie, (_, k) => k.length), trieMapK), true)
 * ```
 *
 * @since 2.0.0
 * @category folding
 */
export declare const map: {
    /**
     * Maps over the entries of the `Trie` using the specified function.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 1),
     *   Trie.insert("sells", 2),
     *   Trie.insert("she", 3)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 6),
     *   Trie.insert("sells", 5),
     *   Trie.insert("she", 3)
     * )
     *
     * assert.equal(Equal.equals(Trie.map(trie, (v) => v + 1), trieMapV), true)
     * assert.equal(Equal.equals(Trie.map(trie, (_, k) => k.length), trieMapK), true)
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    <A, V>(f: (value: V, key: string) => A): (self: Trie<V>) => Trie<A>;
    /**
     * Maps over the entries of the `Trie` using the specified function.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 1),
     *   Trie.insert("sells", 2),
     *   Trie.insert("she", 3)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 6),
     *   Trie.insert("sells", 5),
     *   Trie.insert("she", 3)
     * )
     *
     * assert.equal(Equal.equals(Trie.map(trie, (v) => v + 1), trieMapV), true)
     * assert.equal(Equal.equals(Trie.map(trie, (_, k) => k.length), trieMapK), true)
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    <V, A>(self: Trie<V>, f: (value: V, key: string) => A): Trie<A>;
};
/**
 * Filters entries out of a `Trie` using the specified predicate.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * const trieMapV = Trie.empty<number>().pipe(
 *   Trie.insert("she", 2)
 * )
 *
 * const trieMapK = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1)
 * )
 *
 * assert.equal(Equal.equals(Trie.filter(trie, (v) => v > 1), trieMapV), true)
 * assert.equal(Equal.equals(Trie.filter(trie, (_, k) => k.length > 3), trieMapK), true)
 * ```
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const filter: {
    /**
     * Filters entries out of a `Trie` using the specified predicate.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1)
     * )
     *
     * assert.equal(Equal.equals(Trie.filter(trie, (v) => v > 1), trieMapV), true)
     * assert.equal(Equal.equals(Trie.filter(trie, (_, k) => k.length > 3), trieMapK), true)
     * ```
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B extends A>(f: (a: NoInfer<A>, k: string) => a is B): (self: Trie<A>) => Trie<B>;
    /**
     * Filters entries out of a `Trie` using the specified predicate.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1)
     * )
     *
     * assert.equal(Equal.equals(Trie.filter(trie, (v) => v > 1), trieMapV), true)
     * assert.equal(Equal.equals(Trie.filter(trie, (_, k) => k.length > 3), trieMapK), true)
     * ```
     *
     * @since 2.0.0
     * @category filtering
     */
    <A>(f: (a: NoInfer<A>, k: string) => boolean): (self: Trie<A>) => Trie<A>;
    /**
     * Filters entries out of a `Trie` using the specified predicate.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1)
     * )
     *
     * assert.equal(Equal.equals(Trie.filter(trie, (v) => v > 1), trieMapV), true)
     * assert.equal(Equal.equals(Trie.filter(trie, (_, k) => k.length > 3), trieMapK), true)
     * ```
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B extends A>(self: Trie<A>, f: (a: A, k: string) => a is B): Trie<B>;
    /**
     * Filters entries out of a `Trie` using the specified predicate.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1)
     * )
     *
     * assert.equal(Equal.equals(Trie.filter(trie, (v) => v > 1), trieMapV), true)
     * assert.equal(Equal.equals(Trie.filter(trie, (_, k) => k.length > 3), trieMapK), true)
     * ```
     *
     * @since 2.0.0
     * @category filtering
     */
    <A>(self: Trie<A>, f: (a: A, k: string) => boolean): Trie<A>;
};
/**
 * Maps over the entries of the `Trie` using the specified partial function
 * and filters out `None` values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal, Option } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * const trieMapV = Trie.empty<number>().pipe(
 *   Trie.insert("she", 2)
 * )
 *
 * const trieMapK = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1)
 * )
 *
 * assert.equal(Equal.equals(Trie.filterMap(trie, (v) => v > 1 ? Option.some(v) : Option.none()), trieMapV), true)
 * assert.equal(
 *   Equal.equals(Trie.filterMap(trie, (v, k) => k.length > 3 ? Option.some(v) : Option.none()), trieMapK),
 *   true
 * )
 * ```
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const filterMap: {
    /**
     * Maps over the entries of the `Trie` using the specified partial function
     * and filters out `None` values.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1)
     * )
     *
     * assert.equal(Equal.equals(Trie.filterMap(trie, (v) => v > 1 ? Option.some(v) : Option.none()), trieMapV), true)
     * assert.equal(
     *   Equal.equals(Trie.filterMap(trie, (v, k) => k.length > 3 ? Option.some(v) : Option.none()), trieMapK),
     *   true
     * )
     * ```
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B>(f: (value: A, key: string) => Option<B>): (self: Trie<A>) => Trie<B>;
    /**
     * Maps over the entries of the `Trie` using the specified partial function
     * and filters out `None` values.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapV = Trie.empty<number>().pipe(
     *   Trie.insert("she", 2)
     * )
     *
     * const trieMapK = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1)
     * )
     *
     * assert.equal(Equal.equals(Trie.filterMap(trie, (v) => v > 1 ? Option.some(v) : Option.none()), trieMapV), true)
     * assert.equal(
     *   Equal.equals(Trie.filterMap(trie, (v, k) => k.length > 3 ? Option.some(v) : Option.none()), trieMapK),
     *   true
     * )
     * ```
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B>(self: Trie<A>, f: (value: A, key: string) => Option<B>): Trie<B>;
};
/**
 * Filters out `None` values from a `Trie` of `Options`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal, Option } from "effect"
 *
 * const trie = Trie.empty<Option.Option<number>>().pipe(
 *   Trie.insert("shells", Option.some(0)),
 *   Trie.insert("sells", Option.none()),
 *   Trie.insert("she", Option.some(2))
 * )
 *
 * const trieMapV = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("she", 2)
 * )
 *
 * assert.equal(Equal.equals(Trie.compact(trie), trieMapV), true)
 * ```
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const compact: <A>(self: Trie<Option<A>>) => Trie<A>;
/**
 * Applies the specified function to the entries of the `Trie`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie } from "effect"
 *
 * let value = 0
 *
 * Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2),
 *   Trie.forEach((n, key) => {
 *     value += n + key.length
 *   })
 * )
 *
 * assert.equal(value, 17)
 * ```
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const forEach: {
    /**
     * Applies the specified function to the entries of the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * let value = 0
     *
     * Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2),
     *   Trie.forEach((n, key) => {
     *     value += n + key.length
     *   })
     * )
     *
     * assert.equal(value, 17)
     * ```
     *
     * @since 2.0.0
     * @category traversing
     */
    <V>(f: (value: V, key: string) => void): (self: Trie<V>) => void;
    /**
     * Applies the specified function to the entries of the `Trie`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie } from "effect"
     *
     * let value = 0
     *
     * Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2),
     *   Trie.forEach((n, key) => {
     *     value += n + key.length
     *   })
     * )
     *
     * assert.equal(value, 17)
     * ```
     *
     * @since 2.0.0
     * @category traversing
     */
    <V>(self: Trie<V>, f: (value: V, key: string) => void): void;
};
/**
 * Updates the value of the specified key within the `Trie` if it exists.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal, Option } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * assert.deepStrictEqual(trie.pipe(Trie.modify("she", (v) => v + 10), Trie.get("she")), Option.some(12))
 *
 * assert.equal(Equal.equals(trie.pipe(Trie.modify("me", (v) => v)), trie), true)
 * ```
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const modify: {
    /**
     * Updates the value of the specified key within the `Trie` if it exists.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.deepStrictEqual(trie.pipe(Trie.modify("she", (v) => v + 10), Trie.get("she")), Option.some(12))
     *
     * assert.equal(Equal.equals(trie.pipe(Trie.modify("me", (v) => v)), trie), true)
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V1, V>(key: string, f: (v: V) => V1): (self: Trie<V>) => Trie<V1 | V>;
    /**
     * Updates the value of the specified key within the `Trie` if it exists.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal, Option } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.deepStrictEqual(trie.pipe(Trie.modify("she", (v) => v + 10), Trie.get("she")), Option.some(12))
     *
     * assert.equal(Equal.equals(trie.pipe(Trie.modify("me", (v) => v)), trie), true)
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V1, V>(self: Trie<V>, key: string, f: (v: V) => V1): Trie<V | V1>;
};
/**
 * Removes all entries in the `Trie` which have the specified keys.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * assert.equal(
 *   Equal.equals(trie.pipe(Trie.removeMany(["she", "sells"])), Trie.empty<number>().pipe(Trie.insert("shells", 0))),
 *   true
 * )
 * ```
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const removeMany: {
    /**
     * Removes all entries in the `Trie` which have the specified keys.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.equal(
     *   Equal.equals(trie.pipe(Trie.removeMany(["she", "sells"])), Trie.empty<number>().pipe(Trie.insert("shells", 0))),
     *   true
     * )
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    (keys: Iterable<string>): <V>(self: Trie<V>) => Trie<V>;
    /**
     * Removes all entries in the `Trie` which have the specified keys.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * assert.equal(
     *   Equal.equals(trie.pipe(Trie.removeMany(["she", "sells"])), Trie.empty<number>().pipe(Trie.insert("shells", 0))),
     *   true
     * )
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V>(self: Trie<V>, keys: Iterable<string>): Trie<V>;
};
/**
 * Insert multiple entries in the `Trie` at once.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Trie, Equal } from "effect"
 *
 * const trie = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insert("sells", 1),
 *   Trie.insert("she", 2)
 * )
 *
 * const trieInsert = Trie.empty<number>().pipe(
 *   Trie.insert("shells", 0),
 *   Trie.insertMany(
 *     [["sells", 1], ["she", 2]]
 *   )
 * )
 *
 * assert.equal(
 *   Equal.equals(trie, trieInsert),
 *   true
 * )
 * ```
 *
 * @since 2.0.0
 * @category mutations
 */
export declare const insertMany: {
    /**
     * Insert multiple entries in the `Trie` at once.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieInsert = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insertMany(
     *     [["sells", 1], ["she", 2]]
     *   )
     * )
     *
     * assert.equal(
     *   Equal.equals(trie, trieInsert),
     *   true
     * )
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V1>(iter: Iterable<[string, V1]>): <V>(self: Trie<V>) => Trie<V | V1>;
    /**
     * Insert multiple entries in the `Trie` at once.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Trie, Equal } from "effect"
     *
     * const trie = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insert("sells", 1),
     *   Trie.insert("she", 2)
     * )
     *
     * const trieInsert = Trie.empty<number>().pipe(
     *   Trie.insert("shells", 0),
     *   Trie.insertMany(
     *     [["sells", 1], ["she", 2]]
     *   )
     * )
     *
     * assert.equal(
     *   Equal.equals(trie, trieInsert),
     *   true
     * )
     * ```
     *
     * @since 2.0.0
     * @category mutations
     */
    <V1, V>(self: Trie<V>, iter: Iterable<[string, V1]>): Trie<V | V1>;
};
export {};
//# sourceMappingURL=Trie.d.ts.map