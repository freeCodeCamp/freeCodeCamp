/**
 * # MutableHashSet
 *
 * A mutable `MutableHashSet` provides a collection of unique values with
 * efficient lookup, insertion and removal. Unlike its immutable sibling
 * {@link module:HashSet}, a `MutableHashSet` can be modified in-place;
 * operations like add, remove, and clear directly modify the original set
 * rather than creating a new one. This mutability offers benefits like improved
 * performance in scenarios where you need to build or modify a set
 * incrementally.
 *
 * ## What Problem Does It Solve?
 *
 * `MutableHashSet` solves the problem of maintaining an unsorted collection
 * where each value appears exactly once, with fast operations for checking
 * membership and adding/removing values, in contexts where mutability is
 * preferred for performance or implementation simplicity.
 *
 * ## When to Use
 *
 * Use `MutableHashSet` when you need:
 *
 * - A collection with no duplicate values
 * - Efficient membership testing (**`O(1)`** average complexity)
 * - In-place modifications for better performance
 * - A set that will be built or modified incrementally
 * - Local mutability in otherwise immutable code
 *
 * ## Advanced Features
 *
 * MutableHashSet provides operations for:
 *
 * - Adding and removing elements with direct mutation
 * - Checking for element existence
 * - Clearing all elements at once
 * - Converting to/from other collection types
 *
 * ## Performance Characteristics
 *
 * - **Lookup** operations ({@link module:MutableHashSet.has}): **`O(1)`** average
 *   time complexity
 * - **Insertion** operations ({@link module:MutableHashSet.add}): **`O(1)`**
 *   average time complexity
 * - **Removal** operations ({@link module:MutableHashSet.remove}): **`O(1)`**
 *   average time complexity
 * - **Iteration**: **`O(n)`** where n is the size of the set
 *
 * The MutableHashSet data structure implements the following traits:
 *
 * - {@link Iterable}: allows iterating over the values in the set
 * - {@link Pipeable}: allows chaining operations with the pipe operator
 * - {@link Inspectable}: allows inspecting the contents of the set
 *
 * ## Operations Reference
 *
 * | Category     | Operation                                  | Description                         | Complexity |
 * | ------------ | ------------------------------------------ | ----------------------------------- | ---------- |
 * | constructors | {@link module:MutableHashSet.empty}        | Creates an empty MutableHashSet     | O(1)       |
 * | constructors | {@link module:MutableHashSet.fromIterable} | Creates a set from an iterable      | O(n)       |
 * | constructors | {@link module:MutableHashSet.make}         | Creates a set from multiple values  | O(n)       |
 * |              |                                            |                                     |            |
 * | elements     | {@link module:MutableHashSet.has}          | Checks if a value exists in the set | O(1) avg   |
 * | elements     | {@link module:MutableHashSet.add}          | Adds a value to the set             | O(1) avg   |
 * | elements     | {@link module:MutableHashSet.remove}       | Removes a value from the set        | O(1) avg   |
 * | elements     | {@link module:MutableHashSet.size}         | Gets the number of elements         | O(1)       |
 * | elements     | {@link module:MutableHashSet.clear}        | Removes all values from the set     | O(1)       |
 *
 * ## Notes
 *
 * ### Mutability Considerations:
 *
 * Unlike most data structures in the Effect ecosystem, `MutableHashSet` is
 * mutable. This means that operations like `add`, `remove`, and `clear` modify
 * the original set rather than creating a new one. This can lead to more
 * efficient code in some scenarios, but requires careful handling to avoid
 * unexpected side effects.
 *
 * ### When to Choose `MutableHashSet` vs {@link module:HashSet}:
 *
 * - Use `MutableHashSet` when you need to build or modify a set incrementally and
 *   performance is a priority
 * - Use `HashSet` when you want immutability guarantees and functional
 *   programming patterns
 * - Consider using {@link module:HashSet}'s bounded mutation context (via
 *   {@link module:HashSet.beginMutation}, {@link module:HashSet.endMutation}, and
 *   {@link module:HashSet.mutate} methods) when you need temporary mutability
 *   within an otherwise immutable context - this approach might be sufficient
 *   for many use cases without requiring a separate `MutableHashSet`
 * - `MutableHashSet` is often useful for local operations where the mutability is
 *   contained and doesn't leak into the broader application
 *
 * @module MutableHashSet
 * @since 2.0.0
 */
import * as Dual from "./Function.js"
import { format, type Inspectable, NodeInspectSymbol, toJSON } from "./Inspectable.js"
import * as MutableHashMap from "./MutableHashMap.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"

const TypeId: unique symbol = Symbol.for("effect/MutableHashSet") as TypeId

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface MutableHashSet<out V> extends Iterable<V>, Pipeable, Inspectable {
  readonly [TypeId]: TypeId

  /** @internal */
  readonly keyMap: MutableHashMap.MutableHashMap<V, boolean>
}

const MutableHashSetProto: Omit<MutableHashSet<unknown>, "keyMap"> = {
  [TypeId]: TypeId,
  [Symbol.iterator](this: MutableHashSet<unknown>): Iterator<unknown> {
    return Array.from(this.keyMap)
      .map(([_]) => _)[Symbol.iterator]()
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "MutableHashSet",
      values: Array.from(this).map(toJSON)
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const fromHashMap = <V>(
  keyMap: MutableHashMap.MutableHashMap<V, boolean>
): MutableHashSet<V> => {
  const set = Object.create(MutableHashSetProto)
  set.keyMap = keyMap
  return set
}

/**
 * Creates an empty mutable hash set.
 *
 * This function initializes and returns an empty `MutableHashSet` instance,
 * which allows for efficient storage and manipulation of unique elements.
 *
 * Time complexity: **`O(1)`**
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category constructors
 * @example
 *
 * ```ts
 * import { MutableHashSet } from "effect"
 *
 * type T = unknown // replace with your type
 *
 * // in places where the type can't be inferred, replace with your type
 * const set: MutableHashSet.MutableHashSet<T> = MutableHashSet.empty<T>()
 * ```
 *
 * @template K - The type of the elements to be stored in the hash set. Defaults
 *   to `never` if not specified.
 * @returns A new mutable instance of `MutableHashSet` containing no elements
 *   for the specified type `K`.
 * @see Other `MutableHashSet` constructors are {@link module:MutableHashSet.make} {@link module:MutableHashSet.fromIterable}
 */
export const empty = <K = never>(): MutableHashSet<K> => fromHashMap(MutableHashMap.empty())

/**
 * Creates a new `MutableHashSet` from an iterable collection of values.
 * Duplicate values are omitted.
 *
 * Time complexity: **`O(n)`** where n is the number of elements in the iterable
 *
 * Creating a `MutableHashSet` from an {@link Array}
 *
 * ```ts
 * import { MutableHashSet } from "effect"
 *
 * const array: Iterable<number> = [1, 2, 3, 4, 5, 1, 2, 3] // Array<T> is also Iterable<T>
 * const mutableHashSet: MutableHashSet.MutableHashSet<number> =
 *   MutableHashSet.fromIterable(array)
 *
 * console.log(
 *   // MutableHashSet.MutableHashSet<T> is also an Iterable<T>
 *   Array.from(mutableHashSet)
 * ) // Output: [1, 2, 3, 4, 5]
 * ```
 *
 * Creating a `MutableHashSet` from a {@link Set}
 *
 * ```ts
 * import { MutableHashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     // Set<string> is an Iterable<string>
 *     new Set(["apple", "banana", "orange", "apple"]),
 *     // constructs MutableHashSet from an Iterable Set
 *     MutableHashSet.fromIterable,
 *     // since MutableHashSet it is itself an Iterable, we can pass it to other functions expecting an Iterable
 *     Array.from
 *   )
 * ) // Output: ["apple", "banana", "orange"]
 * ```
 *
 * Creating a `MutableHashSet` from a {@link Generator}
 *
 * ```ts
 * import { MutableHashSet } from "effect"
 *
 * // Generator functions return iterables
 * function* fibonacci(n: number): Generator<number, void, never> {
 *   let [a, b] = [0, 1]
 *   for (let i = 0; i < n; i++) {
 *     yield a
 *     ;[a, b] = [b, a + b]
 *   }
 * }
 *
 * // Create a MutableHashSet from the first 10 Fibonacci numbers
 * const fibonacciSet = MutableHashSet.fromIterable(fibonacci(10))
 *
 * console.log(Array.from(fibonacciSet))
 * // Outputs: [0, 1, 2, 3, 5, 8, 13, 21, 34] but in unsorted order
 * ```
 *
 * Creating a `MutableHashSet` from another {@link module:MutableHashSet}
 *
 * ```ts
 * import { MutableHashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     MutableHashSet.make(1, 2, 3, 4),
 *     MutableHashSet.fromIterable,
 *     Array.from
 *   )
 * ) // Output: [1, 2, 3, 4]
 * ```
 *
 * Creating a `MutableHashSet` from an {@link module:HashSet}
 *
 * ```ts
 * import { HashSet, MutableHashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     HashSet.make(1, 2, 3, 4), // it works also with its immutable HashSet sibling
 *     MutableHashSet.fromIterable,
 *     Array.from
 *   )
 * ) // Output: [1, 2, 3, 4]
 * ```
 *
 * Creating a `MutableHashSet` from other Effect's data structures like
 * {@link Chunk}
 *
 * ```ts
 * import { Chunk, MutableHashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     Chunk.make(1, 2, 3, 4), //  Chunk is also an Iterable<T>
 *     MutableHashSet.fromIterable,
 *     Array.from
 *   )
 * ) // Outputs: [1, 2, 3, 4]
 * ```
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category constructors
 * @template K - The type of elements to be stored in the resulting
 *   `MutableHashSet`.
 * @param keys - An `Iterable` collection containing the keys to be added to the
 *   `MutableHashSet`.
 * @returns A new `MutableHashSet` containing just the unique elements from the
 *   provided iterable.
 * @see Other `MutableHashSet` constructors are {@link module:MutableHashSet.empty} {@link module:MutableHashSet.make}
 */
export const fromIterable = <K = never>(keys: Iterable<K>): MutableHashSet<K> =>
  fromHashMap(
    MutableHashMap.fromIterable(Array.from(keys).map((k) => [k, true]))
  )

/**
 * Construct a new `MutableHashSet` from a variable number of values.
 *
 * Time complexity: **`O(n)`** where n is the number of elements
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category constructors
 * @example
 *
 * ```ts
 * import { Equal, Hash, MutableHashSet } from "effect"
 * import assert from "node:assert/strict"
 *
 * class Character implements Equal.Equal {
 *   readonly name: string
 *   readonly trait: string
 *
 *   constructor(name: string, trait: string) {
 *     this.name = name
 *     this.trait = trait
 *   }
 *
 *   // Define equality based on name, and trait
 *   [Equal.symbol](that: Equal.Equal): boolean {
 *     if (that instanceof Character) {
 *       return (
 *         Equal.equals(this.name, that.name) &&
 *         Equal.equals(this.trait, that.trait)
 *       )
 *     }
 *     return false
 *   }
 *
 *   // Generate a hash code based on the sum of the character's name and trait
 *   [Hash.symbol](): number {
 *     return Hash.hash(this.name + this.trait)
 *   }
 *
 *   static readonly of = (name: string, trait: string): Character => {
 *     return new Character(name, trait)
 *   }
 * }
 *
 * const mutableCharacterHashSet = MutableHashSet.make(
 *   Character.of("Alice", "Curious"),
 *   Character.of("Alice", "Curious"),
 *   Character.of("White Rabbit", "Always late"),
 *   Character.of("Mad Hatter", "Tea enthusiast")
 * )
 *
 * assert.equal(
 *   MutableHashSet.has(
 *     mutableCharacterHashSet,
 *     Character.of("Alice", "Curious")
 *   ),
 *   true
 * )
 * assert.equal(
 *   MutableHashSet.has(
 *     mutableCharacterHashSet,
 *     Character.of("Fluffy", "Kind")
 *   ),
 *   false
 * )
 * ```
 *
 * @see Other `MutableHashSet` constructors are {@link module:MutableHashSet.fromIterable} {@link module:MutableHashSet.empty}
 */
export const make = <Keys extends ReadonlyArray<unknown>>(
  ...keys: Keys
): MutableHashSet<Keys[number]> => fromIterable(keys)

/**
 * **Checks** whether the `MutableHashSet` contains the given element, and
 * **adds** it if not.
 *
 * Time complexity: **`O(1)`** average
 *
 * **Syntax**
 *
 * ```ts
 * import { MutableHashSet, pipe } from "effect"
 *
 * // with data-last, a.k.a. pipeable API
 * pipe(
 *   MutableHashSet.empty(),
 *   MutableHashSet.add(0),
 *   MutableHashSet.add(0)
 * )
 *
 * // or piped with the pipe function
 * MutableHashSet.empty().pipe(MutableHashSet.add(0))
 *
 * // or with data-first API
 * MutableHashSet.add(MutableHashSet.empty(), 0)
 * ```
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category elements
 * @see Other `MutableHashSet` elements are {@link module:MutableHashSet.remove} {@link module:MutableHashSet.size} {@link module:MutableHashSet.clear} {@link module:MutableHashSet.has}
 */
export const add: {
  /**
   * `data-last` a.k.a. `pipeable` API
   *
   * ```ts
   * import { MutableHashSet, pipe } from "effect"
   * import assert from "node:assert/strict"
   *
   * const mutableHashSet = pipe(
   *   MutableHashSet.empty<number>(), // MutableHashSet.MutableHashSet<number>
   *   MutableHashSet.add(0),
   *   MutableHashSet.add(1),
   *   MutableHashSet.add(1),
   *   MutableHashSet.add(2)
   * )
   *
   * assert.deepStrictEqual(
   *   Array.from(mutableHashSet), // remember that MutableHashSet is also an Iterable
   *   Array.of(0, 1, 2)
   * )
   * ```
   *
   * @template V - The type of elements stored in the `MutableHashSet`.
   * @param key - The key to be added to the `MutableHashSet` if not already
   *   present.
   * @returns A function that accepts a `MutableHashSet` and returns the
   *   reference of the updated `MutableHashSet` including the key.
   */
  <V>(key: V): (self: MutableHashSet<V>) => MutableHashSet<V>

  /**
   * `data-first` API
   *
   * ```ts
   * import { MutableHashSet } from "effect"
   * import assert from "node:assert/strict"
   *
   * const empty = MutableHashSet.empty<number>()
   * const withZero = MutableHashSet.add(empty, 0)
   * const withOne = MutableHashSet.add(withZero, 1)
   * const withTwo = MutableHashSet.add(withOne, 2)
   * const withTwoTwo = MutableHashSet.add(withTwo, 2)
   *
   * assert(Object.is(withTwoTwo, empty)) // proof that it does mutate the original set
   *
   * assert.deepStrictEqual(
   *   Array.from(withTwoTwo), // remember that MutableHashSet is also an Iterable
   *   Array.of(0, 1, 2)
   * )
   * ```
   *
   * @template V - The type of elements stored in the `MutableHashSet`.
   * @param self - The `MutableHashSet` instance from which the key should be
   *   added to.
   * @param key - The key to be added to the `MutableHashSet` if not already
   *   present.
   * @returns The reference of the updated `MutableHashSet` including the key.
   */
  <V>(self: MutableHashSet<V>, key: V): MutableHashSet<V>
} = Dual.dual<
  <V>(key: V) => (self: MutableHashSet<V>) => MutableHashSet<V>,
  <V>(self: MutableHashSet<V>, key: V) => MutableHashSet<V>
>(2, (self, key) => (MutableHashMap.set(self.keyMap, key, true), self))

/**
 * Checks if the specified value exists in the `MutableHashSet`.
 *
 * Time complexity: `O(1)` average
 *
 * **Syntax**
 *
 * ```ts
 * import { MutableHashSet, pipe } from "effect"
 * import assert from "node:assert/strict"
 *
 * assert.equal(
 *   // with `data-last`, a.k.a. `pipeable` API
 *   pipe(MutableHashSet.make(0, 1, 2), MutableHashSet.has(3)),
 *   false
 * )
 *
 * assert.equal(
 *   // or piped with the pipe function
 *   MutableHashSet.make(0, 1, 2).pipe(MutableHashSet.has(3)),
 *   false
 * )
 *
 * assert.equal(
 *   // or with `data-first` API
 *   MutableHashSet.has(MutableHashSet.make(0, 1, 2), 3),
 *   false
 * )
 * ```
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category elements
 * @see Other `MutableHashSet` elements are {@link module:MutableHashSet.add} {@link module:MutableHashSet.remove} {@link module:MutableHashSet.size} {@link module:MutableHashSet.clear}
 */
export const has: {
  /**
   * `data-last` a.k.a. `pipeable` API
   *
   * ```ts
   * import * as assert from "node:assert/strict"
   * import { MutableHashSet, pipe } from "effect"
   *
   * const set = MutableHashSet.make(0, 1, 2)
   *
   * assert.equal(pipe(set, MutableHashSet.has(0)), true)
   * assert.equal(pipe(set, MutableHashSet.has(1)), true)
   * assert.equal(pipe(set, MutableHashSet.has(2)), true)
   * assert.equal(pipe(set, MutableHashSet.has(3)), false)
   * ```
   */
  <V>(key: V): (self: MutableHashSet<V>) => boolean

  /**
   * `data-first` API
   *
   * ```ts
   * import * as assert from "node:assert/strict"
   * import { MutableHashSet, pipe } from "effect"
   *
   * const set = MutableHashSet.make(0, 1, 2)
   *
   * assert.equal(MutableHashSet.has(set, 0), true)
   * assert.equal(MutableHashSet.has(set, 1), true)
   * assert.equal(MutableHashSet.has(set, 2), true)
   * assert.equal(MutableHashSet.has(set, 3), false)
   * ```
   */
  <V>(self: MutableHashSet<V>, key: V): boolean
} = Dual.dual<
  <V>(key: V) => (self: MutableHashSet<V>) => boolean,
  <V>(self: MutableHashSet<V>, key: V) => boolean
>(2, (self, key) => MutableHashMap.has(self.keyMap, key))

/**
 * Removes a value from the `MutableHashSet`.
 *
 * Time complexity: **`O(1)`** average
 *
 * **Syntax**
 *
 * ```ts
 * import { MutableHashSet, pipe } from "effect"
 * import assert from "node:assert/strict"
 *
 * assert.equal(
 *   // with `data-last`, a.k.a. `pipeable` API
 *   pipe(
 *     MutableHashSet.make(0, 1, 2),
 *     MutableHashSet.remove(0),
 *     MutableHashSet.has(0)
 *   ),
 *   false
 * )
 *
 * assert.equal(
 *   // or piped with the pipe function
 *   MutableHashSet.make(0, 1, 2).pipe(
 *     MutableHashSet.remove(0),
 *     MutableHashSet.has(0)
 *   ),
 *   false
 * )
 *
 * assert.equal(
 *   // or with `data-first` API
 *   MutableHashSet.remove(MutableHashSet.make(0, 1, 2), 0).pipe(
 *     MutableHashSet.has(0)
 *   ),
 *   false
 * )
 * ```
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category elements
 * @see Other `MutableHashSet` elements are {@link module:MutableHashSet.add} {@link module:MutableHashSet.has} {@link module:MutableHashSet.size} {@link module:MutableHashSet.clear}
 */
export const remove: {
  /**
   * `data-last` a.k.a. `pipeable` API
   *
   * ```ts
   * import { MutableHashSet, pipe } from "effect"
   * import assert from "node:assert/strict"
   *
   * const set: MutableHashSet.MutableHashSet<number> = MutableHashSet.make(
   *   0,
   *   1,
   *   2
   * )
   * const result: MutableHashSet.MutableHashSet<number> = pipe(
   *   set,
   *   MutableHashSet.remove(0)
   * )
   *
   * assert(Object.is(set, result)) // set and result have the same identity
   * assert.equal(pipe(result, MutableHashSet.has(0)), false) // it has correctly removed 0
   * assert.equal(pipe(set, MutableHashSet.has(0)), false) // another proof that we are mutating the original MutableHashSet
   * assert.equal(pipe(result, MutableHashSet.has(1)), true)
   * assert.equal(pipe(result, MutableHashSet.has(2)), true)
   * ```
   *
   * @template V - The type of the elements in the `MutableHashSet`.
   * @param key - The key to be removed from the `MutableHashSet`.
   * @returns A function that takes a `MutableHashSet` as input and returns the
   *   reference to the same `MutableHashSet` with the specified key removed.
   */
  <V>(key: V): (self: MutableHashSet<V>) => MutableHashSet<V>

  /**
   * `data-first` API
   *
   * ```ts
   * import { MutableHashSet, pipe } from "effect"
   * import assert from "node:assert/strict"
   *
   * const set = MutableHashSet.make(0, 1, 2)
   * const result = MutableHashSet.remove(set, 0)
   *
   * assert(Object.is(set, result)) // set and result have the same identity
   * assert.equal(MutableHashSet.has(result, 0), false) // it has correctly removed 0
   * assert.equal(MutableHashSet.has(set, 0), false) // it mutates the original MutableHashSet
   * assert.equal(MutableHashSet.has(result, 1), true)
   * assert.equal(MutableHashSet.has(result, 2), true)
   * ```
   *
   * @template V - The type of the elements in the `MutableHashSet`.
   * @param self - The `MutableHashSet` to which the key will be removed from.
   * @param key - The value to be removed from the `MutableHashSet` if present.
   * @returns The reference to the updated `MutableHashSet`.
   */
  <V>(self: MutableHashSet<V>, key: V): MutableHashSet<V>
} = Dual.dual<
  <V>(key: V) => (self: MutableHashSet<V>) => MutableHashSet<V>,
  <V>(self: MutableHashSet<V>, key: V) => MutableHashSet<V>
>(2, (self, key) => (MutableHashMap.remove(self.keyMap, key), self))

/**
 * Calculates the number of values in the `HashSet`.
 *
 * Time complexity: **`O(1)`**
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category elements
 * @example
 *
 * ```ts
 * import { MutableHashSet } from "effect"
 * import assert from "node:assert/strict"
 *
 * assert.equal(MutableHashSet.size(MutableHashSet.empty()), 0)
 *
 * assert.equal(
 *   MutableHashSet.size(MutableHashSet.make(1, 2, 2, 3, 4, 3)),
 *   4
 * )
 * ```
 *
 * @template V - The type of the elements to be stored in the `MutableHashSet`.
 * @param self - The `MutableHashSet` instance for which the size is to be
 *   determined.
 * @returns The total number of elements within the `MutableHashSet`.
 * @see Other `MutableHashSet` elements are {@link module:MutableHashSet.add} {@link module:MutableHashSet.has} {@link module:MutableHashSet.remove} {@link module:MutableHashSet.clear}
 */
export const size = <V>(self: MutableHashSet<V>): number => MutableHashMap.size(self.keyMap)

/**
 * Removes all values from the `MutableHashSet`.
 *
 * This function operates by delegating the clearing action to the underlying
 * key map associated with the given `MutableHashSet`. It ensures that the hash
 * set becomes empty while maintaining its existence and structure.
 *
 * @memberof MutableHashSet
 * @since 2.0.0
 * @category elements
 * @example
 *
 * ```ts
 * import { MutableHashSet, pipe } from "effect"
 * import assert from "node:assert/strict"
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     MutableHashSet.make(1, 2, 3, 4),
 *     MutableHashSet.clear,
 *     MutableHashSet.size
 *   ),
 *   0
 * )
 * ```
 *
 * @param self - The `MutableHashSet` to clear.
 * @returns The same `MutableHashSet` after all elements have been removed.
 * @see Other `MutableHashSet` elements are {@link module:MutableHashSet.add} {@link module:MutableHashSet.has} {@link module:MutableHashSet.remove} {@link module:MutableHashSet.size}
 */
export const clear = <V>(self: MutableHashSet<V>): MutableHashSet<V> => (
  MutableHashMap.clear(self.keyMap), self
)
