"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.union = exports.toggle = exports.toValues = exports.some = exports.size = exports.remove = exports.reduce = exports.partition = exports.mutate = exports.map = exports.make = exports.isSubset = exports.isHashSet = exports.intersection = exports.has = exports.fromIterable = exports.forEach = exports.flatMap = exports.filter = exports.every = exports.endMutation = exports.empty = exports.difference = exports.beginMutation = exports.add = void 0;
var HS = _interopRequireWildcard(require("./internal/hashSet.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * # HashSet
 *
 * An immutable `HashSet` provides a collection of unique values with efficient
 * lookup, insertion and removal. Once created, a `HashSet` cannot be modified;
 * any operation that would alter the set instead returns a new `HashSet` with
 * the changes. This immutability offers benefits like predictable state
 * management and easier reasoning about your code.
 *
 * ## What Problem Does It Solve?
 *
 * `HashSet` solves the problem of maintaining an unsorted collection where each
 * value appears exactly once, with fast operations for checking membership and
 * adding/removing values.
 *
 * ## When to Use
 *
 * Use `HashSet` when you need:
 *
 * - A collection with no duplicate values
 * - Efficient membership testing (**`O(1)`** average complexity)
 * - Set operations like union, intersection, and difference
 * - An immutable data structure that preserves functional programming patterns
 *
 * ## Advanced Features
 *
 * HashSet provides operations for:
 *
 * - Transforming sets with map and flatMap
 * - Filtering elements with filter
 * - Combining sets with union, intersection and difference
 * - Performance optimizations via mutable operations in controlled contexts
 *
 * ## Performance Characteristics
 *
 * - **Lookup** operations ({@link module:HashSet.has}): **`O(1)`** average time
 *   complexity
 * - **Insertion** operations ({@link module:HashSet.add}): **`O(1)`** average time
 *   complexity
 * - **Removal** operations ({@link module:HashSet.remove}): **`O(1)`** average
 *   time complexity
 * - **Set** operations ({@link module:HashSet.union},
 *   {@link module:HashSet.intersection}): **`O(n)`** where n is the size of the
 *   smaller set
 * - **Iteration**: **`O(n)`** where n is the size of the set
 *
 * The HashSet data structure implements the following traits:
 *
 * - {@link Iterable}: allows iterating over the values in the set
 * - {@link Equal}: allows comparing two sets for value-based equality
 * - {@link Pipeable}: allows chaining operations with the pipe operator
 * - {@link Inspectable}: allows inspecting the contents of the set
 *
 * ## Operations Reference
 *
 * | Category     | Operation                           | Description                                 | Complexity |
 * | ------------ | ----------------------------------- | ------------------------------------------- | ---------- |
 * | constructors | {@link module:HashSet.empty}        | Creates an empty HashSet                    | O(1)       |
 * | constructors | {@link module:HashSet.fromIterable} | Creates a HashSet from an iterable          | O(n)       |
 * | constructors | {@link module:HashSet.make}         | Creates a HashSet from multiple values      | O(n)       |
 * |              |                                     |                                             |            |
 * | elements     | {@link module:HashSet.has}          | Checks if a value exists in the set         | O(1) avg   |
 * | elements     | {@link module:HashSet.some}         | Checks if any element satisfies a predicate | O(n)       |
 * | elements     | {@link module:HashSet.every}        | Checks if all elements satisfy a predicate  | O(n)       |
 * | elements     | {@link module:HashSet.isSubset}     | Checks if a set is a subset of another      | O(n)       |
 * |              |                                     |                                             |            |
 * | getters      | {@link module:HashSet.values}       | Gets an iterator of all values              | O(1)       |
 * | getters      | {@link module:HashSet.toValues}     | Gets an array of all values                 | O(n)       |
 * | getters      | {@link module:HashSet.size}         | Gets the number of elements                 | O(1)       |
 * |              |                                     |                                             |            |
 * | mutations    | {@link module:HashSet.add}          | Adds a value to the set                     | O(1) avg   |
 * | mutations    | {@link module:HashSet.remove}       | Removes a value from the set                | O(1) avg   |
 * | mutations    | {@link module:HashSet.toggle}       | Toggles a value's presence                  | O(1) avg   |
 * |              |                                     |                                             |            |
 * | operations   | {@link module:HashSet.difference}   | Computes set difference (A - B)             | O(n)       |
 * | operations   | {@link module:HashSet.intersection} | Computes set intersection (A ∩ B)           | O(n)       |
 * | operations   | {@link module:HashSet.union}        | Computes set union (A ∪ B)                  | O(n)       |
 * |              |                                     |                                             |            |
 * | mapping      | {@link module:HashSet.map}          | Transforms each element                     | O(n)       |
 * |              |                                     |                                             |            |
 * | sequencing   | {@link module:HashSet.flatMap}      | Transforms and flattens elements            | O(n)       |
 * |              |                                     |                                             |            |
 * | traversing   | {@link module:HashSet.forEach}      | Applies a function to each element          | O(n)       |
 * |              |                                     |                                             |            |
 * | folding      | {@link module:HashSet.reduce}       | Reduces the set to a single value           | O(n)       |
 * |              |                                     |                                             |            |
 * | filtering    | {@link module:HashSet.filter}       | Keeps elements that satisfy a predicate     | O(n)       |
 * |              |                                     |                                             |            |
 * | partitioning | {@link module:HashSet.partition}    | Splits into two sets by a predicate         | O(n)       |
 *
 * ## Notes
 *
 * ### Composability with the Effect Ecosystem:
 *
 * This `HashSet` is designed to work seamlessly within the Effect ecosystem. It
 * implements the {@link Iterable}, {@link Equal}, {@link Pipeable}, and
 * {@link Inspectable} traits from Effect. This ensures compatibility with other
 * Effect data structures and functionalities. For example, you can easily use
 * Effect's `pipe` method to chain operations on the `HashSet`.
 *
 * **Equality of Elements with Effect's {@link Equal `Equal`} Trait:**
 *
 * This `HashSet` relies on Effect's {@link Equal} trait to determine the
 * uniqueness of elements within the set. The way equality is checked depends on
 * the type of the elements:
 *
 * - **Primitive Values:** For primitive JavaScript values like strings, numbers,
 *   booleans, `null`, and `undefined`, equality is determined by their value
 *   (similar to the `===` operator).
 * - **Objects and Custom Types:** For objects and other custom types, equality is
 *   determined by whether those types implement the {@link Equal} interface
 *   themselves. If an element type implements `Equal`, the `HashSet` will
 *   delegate to that implementation to perform the equality check. This allows
 *   you to define custom logic for determining when two instances of your
 *   objects should be considered equal based on their properties, rather than
 *   just their object identity.
 *
 * ```ts
 * import { Equal, Hash, HashSet } from "effect"
 *
 * class Person implements Equal.Equal {
 *   constructor(
 *     readonly id: number, // Unique identifier
 *     readonly name: string,
 *     readonly age: number
 *   ) {}
 *
 *   // Define equality based on id, name, and age
 *   [Equal.symbol](that: Equal.Equal): boolean {
 *     if (that instanceof Person) {
 *       return (
 *         Equal.equals(this.id, that.id) &&
 *         Equal.equals(this.name, that.name) &&
 *         Equal.equals(this.age, that.age)
 *       )
 *     }
 *     return false
 *   }
 *
 *   // Generate a hash code based on the unique id
 *   [Hash.symbol](): number {
 *     return Hash.hash(this.id)
 *   }
 * }
 *
 * // Creating a HashSet with objects that implement the Equal interface
 * const set = HashSet.empty().pipe(
 *   HashSet.add(new Person(1, "Alice", 30)),
 *   HashSet.add(new Person(1, "Alice", 30))
 * )
 *
 * // HashSet recognizes them as equal, so only one element is stored
 * console.log(HashSet.size(set))
 * // Output: 1
 * ```
 *
 * **Simplifying Equality and Hashing with `Data` and `Schema`:**
 *
 * Effect's {@link Data} and {@link Schema `Schema.Data`} modules offer powerful
 * ways to automatically handle the implementation of both the {@link Equal} and
 * {@link Hash} traits for your custom data structures.
 *
 * - **`Data` Module:** By using constructors like `Data.struct`, `Data.tuple`,
 *   `Data.array`, or `Data.case` to define your data types, Effect
 *   automatically generates the necessary implementations for value-based
 *   equality and consistent hashing. This significantly reduces boilerplate and
 *   ensures correctness.
 *
 * ```ts
 * import { HashSet, Data, Equal } from "effect"
 * import assert from "node:assert/strict"
 *
 * // Data.* implements the `Equal` traits for us
 * const person1 = Data.struct({ id: 1, name: "Alice", age: 30 })
 * const person2 = Data.struct({ id: 1, name: "Alice", age: 30 })
 *
 * assert(Equal.equals(person1, person2))
 *
 * const set = HashSet.empty().pipe(
 *   HashSet.add(person1),
 *   HashSet.add(person2)
 * )
 *
 * // HashSet recognizes them as equal, so only one element is stored
 * console.log(HashSet.size(set)) // Output: 1
 * ```
 *
 * - **`Schema` Module:** When defining data schemas using the {@link Schema}
 *   module, you can use `Schema.Data` to automatically include the `Equal` and
 *   `Hash` traits in the decoded objects. This is particularly important when
 *   working with `HashSet`. **For decoded objects to be correctly recognized as
 *   equal within a `HashSet`, ensure that the schema for those objects is
 *   defined using `Schema.Data`.**
 *
 * ```ts
 * import { Equal, HashSet, Schema } from "effect"
 * import assert from "node:assert/strict"
 *
 * // Schema.Data implements the `Equal` traits for us
 * const PersonSchema = Schema.Data(
 *   Schema.Struct({
 *     id: Schema.Number,
 *     name: Schema.String,
 *     age: Schema.Number
 *   })
 * )
 *
 * const Person = Schema.decode(PersonSchema)
 *
 * const person1 = Person({ id: 1, name: "Alice", age: 30 })
 * const person2 = Person({ id: 1, name: "Alice", age: 30 })
 *
 * assert(Equal.equals(person1, person2)) // Output: true
 *
 * const set = HashSet.empty().pipe(
 *   HashSet.add(person1),
 *   HashSet.add(person2)
 * )
 *
 * // HashSet thanks to Schema.Data implementation of the `Equal` trait, recognizes the two Person as equal, so only one element is stored
 * console.log(HashSet.size(set)) // Output: 1
 * ```
 *
 * ### Interoperability with the JavaScript Runtime:
 *
 * To interoperate with the regular JavaScript runtime, Effect's `HashSet`
 * provides methods to access its elements in formats readily usable by
 * JavaScript APIs: {@link values `HashSet.values`},
 * {@link toValues `HashSet.toValues`}
 *
 * ```ts
 * import { HashSet } from "effect"
 *
 * const hashSet: HashSet.HashSet<number> = HashSet.make(1, 2, 3)
 *
 * // Using HashSet.values to convert HashSet.HashSet<A> to IterableIterator<A>
 * const iterable: IterableIterator<number> = HashSet.values(hashSet)
 *
 * console.log(...iterable) // Logs:  1 2 3
 *
 * // Using HashSet.toValues to convert HashSet.HashSet<A> to Array<A>
 * const array: Array<number> = HashSet.toValues(hashSet)
 *
 * console.log(array) // Logs: [ 1, 2, 3 ]
 * ```
 *
 * Be mindful of performance implications (both time and space complexity) when
 * frequently converting between Effect's immutable HashSet and mutable
 * JavaScript data structures, especially for large collections.
 *
 * @module HashSet
 * @since 2.0.0
 */

const TypeId = HS.HashSetTypeId;
/**
 * @memberof HashSet
 * @since 2.0.0
 * @category refinements
 */
const isHashSet = exports.isHashSet = HS.isHashSet;
/**
 * Creates an empty `HashSet`.
 *
 * Time complexity: **`O(1)`**
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category constructors
 * @example
 *
 * ```ts
 * import { HashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     // Provide a type argument to create a HashSet of a specific type
 *     HashSet.empty<number>(),
 *     HashSet.add(1),
 *     HashSet.add(1), // Notice the duplicate
 *     HashSet.add(2),
 *     HashSet.toValues
 *   )
 * ) // Output: [1, 2]
 * ```
 *
 * @see Other `HashSet` constructors are {@link module:HashSet.make} {@link module:HashSet.fromIterable}
 */
const empty = exports.empty = HS.empty;
/**
 * Creates a new `HashSet` from an iterable collection of values.
 *
 * Time complexity: **`O(n)`** where n is the number of elements in the iterable
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category constructors
 * @example
 *
 * ```ts
 * // Creating a HashSet from an Array
 * import { HashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     [1, 2, 3, 4, 5, 1, 2, 3], // Array<number> is an Iterable<number>;  Note the duplicates.
 *     HashSet.fromIterable,
 *     HashSet.toValues
 *   )
 * ) // Output: [1, 2, 3, 4, 5]
 * ```
 *
 * @example
 *
 * ```ts
 * // Creating a HashSet from a Set
 * import { HashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     new Set(["apple", "banana", "orange", "apple"]), // Set<string> is an Iterable<string>
 *     HashSet.fromIterable,
 *     HashSet.toValues
 *   )
 * ) // Output: ["apple", "banana", "orange"]
 * ```
 *
 * @example
 *
 * ```ts
 * // Creating a HashSet from a Generator
 * import { HashSet } from "effect"
 *
 * // Generator functions return iterables
 * function* fibonacci(n: number): Generator<number, void, unknown> {
 *   let [a, b] = [0, 1]
 *   for (let i = 0; i < n; i++) {
 *     yield a
 *     ;[a, b] = [b, a + b]
 *   }
 * }
 *
 * // Create a HashSet from the first 10 Fibonacci numbers
 * const fibonacciSet = HashSet.fromIterable(fibonacci(10))
 *
 * console.log(HashSet.toValues(fibonacciSet))
 * // Outputs: [0, 1, 2, 3, 5, 8, 13, 21, 34] but in unsorted order
 * ```
 *
 * @example
 *
 * ```ts
 * //  Creating a HashSet from another HashSet
 * import { HashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     // since HashSet implements the Iterable interface, we can use it to create a new HashSet
 *     HashSet.make(1, 2, 3, 4),
 *     HashSet.fromIterable,
 *     HashSet.toValues // turns the HashSet back into an array
 *   )
 * ) // Output: [1, 2, 3, 4]
 * ```
 *
 * @example
 *
 * ```ts
 * // Creating a HashSet from other Effect's data structures like Chunk
 * import { Chunk, HashSet, pipe } from "effect"
 *
 * console.log(
 *   pipe(
 *     Chunk.make(1, 2, 3, 4), // Iterable<number>
 *     HashSet.fromIterable,
 *     HashSet.toValues // turns the HashSet back into an array
 *   )
 * ) // Outputs: [1, 2, 3, 4]
 * ```
 *
 * @see Other `HashSet` constructors are {@link module:HashSet.empty} {@link module:HashSet.make}
 */
const fromIterable = exports.fromIterable = HS.fromIterable;
/**
 * Construct a new `HashSet` from a variable number of values.
 *
 * Time complexity: **`O(n)`** where n is the number of elements
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category constructors
 * @example
 *
 * ```ts
 * import { Equal, Hash, HashSet, pipe } from "effect"
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
 * assert.strictEqual(
 *   Equal.equals(
 *     HashSet.make(
 *       Character.of("Alice", "Curious"),
 *       Character.of("Alice", "Curious"),
 *       Character.of("White Rabbit", "Always late"),
 *       Character.of("Mad Hatter", "Tea enthusiast")
 *     ),
 *     // Is the same as adding each character to an empty set
 *     pipe(
 *       HashSet.empty(),
 *       HashSet.add(Character.of("Alice", "Curious")),
 *       HashSet.add(Character.of("Alice", "Curious")), // Alice tried to attend twice!
 *       HashSet.add(Character.of("White Rabbit", "Always late")),
 *       HashSet.add(Character.of("Mad Hatter", "Tea enthusiast"))
 *     )
 *   ),
 *   true,
 *   "`HashSet.make` and `HashSet.empty() + HashSet.add()` should be equal"
 * )
 *
 * assert.strictEqual(
 *   Equal.equals(
 *     HashSet.make(
 *       Character.of("Alice", "Curious"),
 *       Character.of("Alice", "Curious"),
 *       Character.of("White Rabbit", "Always late"),
 *       Character.of("Mad Hatter", "Tea enthusiast")
 *     ),
 *     HashSet.fromIterable([
 *       Character.of("Alice", "Curious"),
 *       Character.of("Alice", "Curious"),
 *       Character.of("White Rabbit", "Always late"),
 *       Character.of("Mad Hatter", "Tea enthusiast")
 *     ])
 *   ),
 *   true,
 *   "`HashSet.make` and `HashSet.fromIterable` should be equal"
 * )
 * ```
 *
 * @see Other `HashSet` constructors are {@link module:HashSet.fromIterable} {@link module:HashSet.empty}
 */
const make = exports.make = HS.make;
/**
 * Checks if the specified value exists in the `HashSet`.
 *
 * Time complexity: **`O(1)`** average
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category elements
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(HashSet.make(0, 1, 2), HashSet.has(3)) // false
 *
 * // or piped with the pipe function
 * HashSet.make(0, 1, 2).pipe(HashSet.has(3)) // false
 *
 * // or with `data-first` API
 * HashSet.has(HashSet.make(0, 1, 2), 3) // false
 * ```
 *
 * @returns A `boolean` signaling the presence of the value in the HashSet
 * @see Other `HashSet` elements are {@link module:HashSet.some} {@link module:HashSet.every} {@link module:HashSet.isSubset}
 */
const has = exports.has = HS.has;
/**
 * Check if a predicate holds true for some `HashSet` element.
 *
 * Time complexity: **`O(n)`** where n is the number of elements in the set
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category elements
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * const set: HashSet.HashSet<number> = HashSet.make(0, 1, 2)
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   set,
 *   HashSet.some((n) => n > 0)
 * ) // true
 *
 * // or piped with the pipe function
 * set.pipe(HashSet.some((n) => n > 0)) // true
 *
 * // or with `data-first` API
 * HashSet.some(set, (n) => n > 0) // true
 * ```
 *
 * @see Other `HashSet` elements are {@link module:HashSet.has} {@link module:HashSet.every} {@link module:HashSet.isSubset}
 */
const some = exports.some = HS.some;
/**
 * Check if a predicate holds true for every `HashSet` element.
 *
 * Time complexity is **`O(n)`** as it needs to traverse the whole HashSet
 * collection
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category elements
 * @example
 *
 * ```ts
 * // Syntax with Refinement
 * import { HashSet, pipe, Predicate } from "effect"
 *
 * const numberOrString = HashSet.make(1, "1", "one", "uno")
 *
 * // with `data-last`, a.k.a. `pipeable` API and `Refinement`
 * pipe(
 *   numberOrString, // HashSet.HashSet<number | string>
 *   HashSet.every(Predicate.isString)
 * ) // HashSet.HashSet<string>
 *
 * // or piped with the pipe function and  `Refinement`
 * numberOrString // HashSet.HashSet<number | string>
 *   .pipe(HashSet.every(Predicate.isString)) // HashSet.HashSet<string>
 *
 * // or with `data-first` API and `Refinement`
 * HashSet.every(
 *   numberOrString, // HashSet.HashSet<number | string>
 *   Predicate.isString
 * ) // HashSet.HashSet<string>
 * ```
 *
 * @example
 *
 * ```ts
 * // Syntax with Predicate
 * import { HashSet, pipe } from "effect"
 *
 * const set = HashSet.make(1, 2, 3)
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   set,
 *   HashSet.every((n) => n >= 0)
 * ) // true
 *
 * // or piped with the pipe function
 * set.pipe(HashSet.every((n) => n >= 0)) // true
 *
 * // or with `data-first` API
 * HashSet.every(set, (n) => n >= 0) // true
 * ```
 *
 * @returns A boolean once it has evaluated that whole collection fulfill the
 *   Predicate function
 * @see Other `HashSet` elements are {@link module:HashSet.has} {@link module:HashSet.some} {@link module:HashSet.isSubset}
 */
const every = exports.every = HS.every;
/**
 * Returns `true` if and only if every element in the this `HashSet` is an
 * element of the second set,
 *
 * **NOTE**: the hash and equal of both sets must be the same.
 *
 * Time complexity analysis is of **`O(n)`**
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category elements
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * const set1 = HashSet.make(0, 1)
 * const set2 = HashSet.make(1, 2)
 * const set3 = HashSet.make(0, 1, 2)
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(set1, HashSet.isSubset(set2)) // false
 * pipe(set1, HashSet.isSubset(set3)) // true
 *
 * // or piped with the pipe function
 * set1.pipe(HashSet.isSubset(set2)) // false
 * set1.pipe(HashSet.isSubset(set3)) // true
 *
 * // or with `data-first` API
 * HashSet.isSubset(set1, set2) // false
 * HashSet.isSubset(set1, set3) // true)
 * ```
 *
 * @see Other `HashSet` elements are {@link module:HashSet.has} {@link module:HashSet.some} {@link module:HashSet.every}
 */
const isSubset = exports.isSubset = HS.isSubset;
/**
 * Returns an `IterableIterator` of the values in the `HashSet`.
 *
 * Time complexity: **`O(1)`**
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category getters
 * @example
 *
 * ```ts
 * import { HashSet, pipe } from "effect"
 *
 * const numberIterable = pipe(
 *   HashSet.make(0, 1, 1, 2), // HashSet.HashSet<number>
 *   HashSet.values // takes an HashSet<A> and returns an IterableIterator<A>
 * )
 *
 * for (const number of numberIterable) {
 *   console.log(number) // it will logs: 0, 1, 2
 * }
 * ```
 *
 * @see Other `HashSet` getters are {@link module:HashSet.toValues} {@link module:HashSet.size}
 */
const values = exports.values = HS.values;
/**
 * Returns an `Array` of the values within the `HashSet`.
 *
 * Time complexity: **`O(n)`** where n is the number of elements in the set
 *
 * @memberof HashSet
 * @since 3.13.0
 * @category getters
 * @example
 *
 * ```ts
 * import { HashSet, pipe } from "effect"
 * import { deepStrictEqual } from "node:assert/strict"
 *
 * deepStrictEqual(
 *   pipe(
 *     HashSet.make(0, 1, 1, 2), // HashSet<number>
 *     HashSet.toValues // takes an HashSet<A> and returns an Array<A>
 *   ),
 *   Array.of(0, 1, 2)
 * )
 * ```
 *
 * @see Other `HashSet` getters are {@link module:HashSet.values} {@link module:HashSet.size}
 */
const toValues = self => Array.from(values(self));
/**
 * Calculates the number of values in the `HashSet`.
 *
 * Time complexity: **`O(1)`**
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category getters
 * @example
 *
 * ```ts
 * import { HashSet, pipe } from "effect"
 * import assert from "node:assert/strict"
 *
 * assert.deepStrictEqual(pipe(HashSet.empty(), HashSet.size), 0)
 *
 * assert.deepStrictEqual(
 *   pipe(HashSet.make(1, 2, 2, 3, 4, 3), HashSet.size),
 *   4
 * )
 * ```
 *
 * @see Other `HashSet` getters are {@link module:HashSet.values} {@link module:HashSet.toValues}
 */
exports.toValues = toValues;
const size = exports.size = HS.size;
/**
 * Creates a new mutable version of the `HashSet`
 *
 * When a `HashSet` is mutable, operations like {@link add} and {@link remove}
 * modify the data structure in place instead of creating a new one, which is
 * more efficient when performing multiple operations.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * import { HashSet } from "effect"
 * import assert from "node:assert/strict"
 *
 * const UPPER_BOUND = 10_000
 *
 * const immutableSet = HashSet.empty<number>().pipe(HashSet.add(0))
 *
 * // Create a mutable version of the immutableSet
 * const mutableSet = HashSet.beginMutation(immutableSet)
 *
 * for (let i = 1; i < UPPER_BOUND; i++) {
 *   // Operations now modify the set in place instead of creating new instances
 *   // This is more efficient when making multiple changes
 *   const pointerToMutableSet = HashSet.add(mutableSet, i)
 *
 *   // the two sets have the same identity, hence `add` is mutating mutableSet and not returning a new HashSet instance
 *   assert(Object.is(mutableSet, pointerToMutableSet))
 *   assert.equal(HashSet.has(mutableSet, i), true) // `i` is in the mutableSet
 *   assert.equal(HashSet.has(immutableSet, i), false) // `i` is not in the immutableSet
 * }
 *
 * const next = UPPER_BOUND + 1
 * // When done, mark the set as immutable again
 * HashSet.endMutation(mutableSet).pipe(
 *   HashSet.add(next) // since this returns a new HashSet, it will not be logged as part of the mutableSet
 * )
 * assert.equal(HashSet.has(mutableSet, next), false)
 *
 * console.log(HashSet.toValues(immutableSet)) // [0]
 * console.log(HashSet.toValues(mutableSet).sort((a, b) => a - b)) // [0, 1, 2, 3, ...rest]
 * ```
 *
 * @see Other `HashSet` mutations are {@link module:HashSet.add} {@link module:HashSet.remove} {@link module:HashSet.toggle} {@link module:HashSet.endMutation} {@link module:HashSet.mutate}
 */
const beginMutation = exports.beginMutation = HS.beginMutation;
/**
 * Makes the `HashSet` immutable again.
 *
 * After calling `endMutation`, operations like {@link add} and {@link remove}
 * will create new instances of the `HashSet` instead of modifying the existing
 * one.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * import { HashSet } from "effect"
 * import assert from "node:assert/strict"
 *
 * // Create a mutable set
 * const mutableSet = HashSet.beginMutation(HashSet.empty<number>())
 *
 * // Add some elements to the mutable set
 * HashSet.add(mutableSet, 1)
 * HashSet.add(mutableSet, 2)
 *
 * // Before endMutation, operations modify the set in place
 * const sameSet = HashSet.add(mutableSet, 3)
 * assert(Object.is(mutableSet, sameSet)) // true - same object reference
 * assert.deepStrictEqual(HashSet.toValues(mutableSet).sort(), [1, 2, 3])
 *
 * // Make the set immutable again
 * const immutableSet = HashSet.endMutation(mutableSet)
 *
 * // endMutation returns the same set instance, now made immutable
 * assert(Object.is(mutableSet, immutableSet)) // true - same object reference
 *
 * // After endMutation, operations create new instances
 * const newSet = HashSet.add(immutableSet, 4)
 * assert(!Object.is(immutableSet, newSet)) // false - different object references
 *
 * // The original set remains unchanged
 * assert.deepStrictEqual(HashSet.toValues(immutableSet).sort(), [1, 2, 3])
 *
 * // The new set contains the added element
 * assert.deepStrictEqual(HashSet.toValues(newSet).sort(), [1, 2, 3, 4])
 * ```
 *
 * @see Other `HashSet` mutations are {@link module:HashSet.add} {@link module:HashSet.remove} {@link module:HashSet.toggle} {@link module:HashSet.beginMutation} {@link module:HashSet.mutate}
 */
const endMutation = exports.endMutation = HS.endMutation;
/**
 * Mutates the `HashSet` within the context of the provided function.
 *
 * You can consider it a functional abstraction on top of the lower-level
 * mutation primitives of {@link module:HashSet.beginMutation} `->` `mutable
 * context` `->` {@link HashSet.endMutation}.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with data-last, a.k.a. pipeable API
 * pipe(
 *   HashSet.make(1, 2, 3),
 *   HashSet.mutate((set) => {
 *     HashSet.add(set, 4)
 *     HashSet.remove(set, 1)
 *   })
 * )
 *
 * // or piped with the pipe function
 * HashSet.make(1, 2, 3).pipe(
 *   HashSet.mutate((set) => {
 *     HashSet.add(set, 4)
 *     HashSet.remove(set, 1)
 *   })
 * )
 *
 * // or with data-first API
 * HashSet.mutate(HashSet.make(1, 2, 3), (set) => {
 *   HashSet.add(set, 4)
 *   HashSet.remove(set, 1)
 * })
 * ```
 *
 * @see Other `HashSet` mutations are {@link module:HashSet.add} {@link module:HashSet.remove} {@link module:HashSet.toggle} {@link module:HashSet.beginMutation} {@link module:HashSet.endMutation}
 */
const mutate = exports.mutate = HS.mutate;
/**
 * Adds a value to the `HashSet`.
 *
 * Time complexity: **`O(1)`** average
 *
 * @remarks
 * Remember that a `HashSet` is a collection of unique values, so adding a value
 * that already exists in the `HashSet` will not add a duplicate.
 *
 * Remember that HashSet is an immutable data structure, so the `add` function,
 * like all other functions that modify the HashSet, will return a new HashSet
 * with the added value.
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with data-last, a.k.a. pipeable API
 * pipe(HashSet.empty(), HashSet.add(0), HashSet.add(0))
 *
 * // or piped with the pipe function
 * HashSet.empty().pipe(HashSet.add(0))
 *
 * // or with data-first API
 * HashSet.add(HashSet.empty(), 0)
 * ```
 *
 * @see Other `HashSet` mutations are {@link module:HashSet.remove} {@link module:HashSet.toggle} {@link module:HashSet.beginMutation} {@link module:HashSet.endMutation} {@link module:HashSet.mutate}
 */
const add = exports.add = HS.add;
/**
 * Removes a value from the `HashSet`.
 *
 * Time complexity: **`O(1)`** average
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(HashSet.make(0, 1, 2), HashSet.remove(0))
 *
 * // or piped with the pipe function
 * HashSet.make(0, 1, 2).pipe(HashSet.remove(0))
 *
 * // or with `data-first` API
 * HashSet.remove(HashSet.make(0, 1, 2), 0)
 * ```
 *
 * @see Other `HashSet` mutations are {@link module:HashSet.add} {@link module:HashSet.toggle} {@link module:HashSet.beginMutation} {@link module:HashSet.endMutation} {@link module:HashSet.mutate}
 */
const remove = exports.remove = HS.remove;
/**
 * Computes the set difference `(A - B)` between this `HashSet` and the
 * specified `Iterable<A>`.
 *
 * Time complexity: **`O(n)`** where n is the number of elements in the set
 *
 * **NOTE**: the hash and equal of the values in both the set and the iterable
 * must be the same; meaning we cannot compute a difference between a `HashSet
 * of bananas` and a `HashSet of elephants` as they are not the same type and
 * won't implement the Equal trait in the same way.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with data-last, a.k.a. pipeable API
 * pipe(HashSet.make(1, 2, 3), HashSet.difference(HashSet.make(3, 4, 5)))
 *
 * // or piped with the pipe function
 * HashSet.make(1, 2, 3).pipe(HashSet.difference(HashSet.make(3, 4, 5)))
 *
 * // or with data-first API
 * HashSet.difference(HashSet.make(1, 2, 3), HashSet.make(3, 4, 5))
 * ```
 *
 * @see Other `HashSet` operations are {@link module:HashSet.intersection} {@link module:HashSet.union}
 */
const difference = exports.difference = HS.difference;
/**
 * Returns a `HashSet` of values which are present in both this set and that
 * `Iterable<A>`. Computes set intersection (A ∩ B)
 *
 * Time complexity: **`O(n)`** where n is the number of elements in the smaller
 * set
 *
 * **NOTE**: the hash and equal of the values in both the set and the iterable
 * must be the same.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with data-last, a.k.a. pipeable API
 * pipe(HashSet.make(1, 2, 3), HashSet.intersection(HashSet.make(2, 3, 4)))
 *
 * // or piped with the pipe function
 * HashSet.make(1, 2, 3).pipe(HashSet.intersection(HashSet.make(2, 3, 4)))
 *
 * // or with data-first API
 * HashSet.intersection(HashSet.make(1, 2, 3), HashSet.make(2, 3, 4))
 * ```
 *
 * @see Other `HashSet` operations are {@link module:HashSet.difference} {@link module:HashSet.union}
 */
const intersection = exports.intersection = HS.intersection;
/**
 * Computes the set union `( self ∪ that )` between this `HashSet` and the
 * specified `Iterable<A>`.
 *
 * Time complexity: **`O(n)`** where n is the number of elements in the set
 *
 * **NOTE**: the hash and equal of the values in both the set and the iterable
 * must be the same.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with data-last, a.k.a. pipeable API
 * pipe(HashSet.make(1, 2, 3), HashSet.union(HashSet.make(3, 4, 5)))
 *
 * // or piped with the pipe function
 * HashSet.make(1, 2, 3).pipe(HashSet.union(HashSet.make(3, 4, 5)))
 *
 * // or with data-first API
 * HashSet.union(HashSet.make(1, 2, 3), HashSet.make(3, 4, 5))
 * ```
 *
 * @see Other `HashSet` operations are {@link module:HashSet.difference} {@link module:HashSet.intersection}
 */
const union = exports.union = HS.union;
/**
 * Checks if a value is present in the `HashSet`. If it is present, the value
 * will be removed from the `HashSet`, otherwise the value will be added to the
 * `HashSet`.
 *
 * Time complexity: **`O(1)`** average
 *
 * @memberof HashSet
 * @since 2.0.0
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(HashSet.make(0, 1, 2), HashSet.toggle(0))
 *
 * // or piped with the pipe function
 * HashSet.make(0, 1, 2).pipe(HashSet.toggle(0))
 *
 * // or with `data-first` API
 * HashSet.toggle(HashSet.make(0, 1, 2), 0)
 * ```
 *
 * @returns A new `HashSet` where the toggled value is being either added or
 *   removed based on the initial `HashSet` state.
 * @see Other `HashSet` mutations are {@link module:HashSet.add} {@link module:HashSet.remove} {@link module:HashSet.beginMutation} {@link module:HashSet.endMutation} {@link module:HashSet.mutate}
 */
const toggle = exports.toggle = HS.toggle;
/**
 * Maps over the values of the `HashSet` using the specified function.
 *
 * The time complexity is of **`O(n)`**.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category mapping
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   HashSet.make(0, 1, 2), // HashSet.HashSet<number>
 *   HashSet.map(String) // HashSet.HashSet<string>
 * )
 *
 * // or piped with the pipe method
 * HashSet.make(0, 1, 2).pipe(HashSet.map(String))
 *
 * // or with `data-first` API
 * HashSet.map(HashSet.make(0, 1, 2), String)
 * ```
 */
const map = exports.map = HS.map;
/**
 * Chains over the values of the `HashSet` using the specified function.
 *
 * The time complexity is of **`O(n)`**.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category sequencing
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   HashSet.make(0, 1, 2), // HashSet.HashSet<number>
 *   HashSet.flatMap((n) => Array.of(String(n))) // HashSet.HashSet<string>
 * )
 *
 * // or piped with the pipe method
 * HashSet.make(0, 1, 2) // HashSet.HashSet<number>
 *   .pipe(
 *     HashSet.flatMap((n) => Array.of(String(n))) // HashSet.HashSet<string>
 *   )
 *
 * // or with `data-first` API
 * HashSet.flatMap(HashSet.make(0, 1, 2), (n) => Array.of(String(n)))
 * ```
 */
const flatMap = exports.flatMap = HS.flatMap;
/**
 * Applies the specified function to the values of the `HashSet`.
 *
 * The time complexity is of **`O(n)`**.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category traversing
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(HashSet.make(0, 1, 2), HashSet.forEach(console.log)) // logs: 0 1 2
 *
 * // or piped with the pipe method
 * HashSet.make(0, 1, 2).pipe(HashSet.forEach(console.log)) // logs: 0 1 2
 *
 * // or with `data-first` API
 * HashSet.forEach(HashSet.make(0, 1, 2), console.log) // logs: 0 1 2
 * ```
 */
const forEach = exports.forEach = HS.forEach;
/**
 * Reduces the specified state over the values of the `HashSet`.
 *
 * The time complexity is of **`O(n)`**.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category folding
 * @example
 *
 * ```ts
 * // Syntax
 * import { HashSet, pipe } from "effect"
 *
 * const sum = (a: number, b: number): number => a + b
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(HashSet.make(0, 1, 2), HashSet.reduce(0, sum))
 *
 * // or with the pipe method
 * HashSet.make(0, 1, 2).pipe(HashSet.reduce(0, sum))
 *
 * // or with `data-first` API
 * HashSet.reduce(HashSet.make(0, 1, 2), 0, sum)
 * ```
 */
const reduce = exports.reduce = HS.reduce;
/**
 * Filters values out of a `HashSet` using the specified predicate.
 *
 * The time complexity is of **`O(n)`**.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category filtering
 * @example
 *
 * ```ts
 * // Syntax with  Predicate
 * import { HashSet, type Predicate, pipe } from "effect"
 *
 * const filterPositiveNumbers: Predicate.Predicate<number> = (n) => n > 0
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   HashSet.make(-2, -1, 0, 1, 2),
 *   HashSet.filter(filterPositiveNumbers)
 * )
 *
 * // or with the pipe method
 * HashSet.make(-2, -1, 0, 1, 2).pipe(HashSet.filter(filterPositiveNumbers))
 *
 * // or with `data-first` API
 * HashSet.filter(HashSet.make(-2, -1, 0, 1, 2), filterPositiveNumbers)
 * ```
 *
 * @example
 *
 * ```ts
 * /// Syntax with Refinement
 * import { HashSet, pipe } from "effect"
 *
 * const stringRefinement = (value: unknown): value is string =>
 *   typeof value === "string"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   HashSet.make(1, "unos", 2, "two", 3, "trois", 4, "vier"), // // HashSet.HashSet<number | string>
 *   HashSet.filter(stringRefinement)
 * ) // HashSet.HashSet<string>
 *
 * // or with the pipe method
 * HashSet.make(1, "unos", 2, "two", 3, "trois", 4, "vier") // HashSet.HashSet<number | string>
 *   .pipe(HashSet.filter(stringRefinement)) // HashSet.HashSet<string>
 *
 * // or with `data-first` API
 * HashSet.filter(
 *   HashSet.make(1, "unos", 2, "two", 3, "trois", 4, "vier"), // HashSet.HashSet<number | string>
 *   stringRefinement
 * ) // HashSet.HashSet<string>
 * ```
 */
const filter = exports.filter = HS.filter;
/**
 * Partition the values of a `HashSet` using the specified predicate.
 *
 * If a value matches the predicate, it will be placed into the `HashSet` on the
 * right side of the resulting `Tuple`, otherwise the value will be placed into
 * the left side.
 *
 * Time complexity is of **`O(n)`**.
 *
 * @memberof HashSet
 * @since 2.0.0
 * @category partitioning
 * @example
 *
 * ```ts
 * // Syntax with Predicate
 * import { HashSet, pipe, Predicate } from "effect"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   HashSet.make(0, 1, 2, 3, 4, 5),
 *   HashSet.partition((n) => n % 2 === 0)
 * )
 *
 * // or with the pipe method
 * HashSet.make(0, 1, 2, 3, 4, 5).pipe(
 *   HashSet.partition((n) => n % 2 === 0)
 * )
 *
 * // or with `data-first` API
 * HashSet.partition(HashSet.make(0, 1, 2, 3, 4, 5), (n) => n % 2 === 0)
 * ```
 *
 * @example
 *
 * ```ts
 * // Syntax with Refinement
 * import { HashSet, pipe, Predicate } from "effect"
 *
 * const stringRefinement: Predicate.Refinement<string | number, string> = (
 *   value
 * ) => typeof value === "string"
 *
 * // with `data-last`, a.k.a. `pipeable` API
 * pipe(
 *   HashSet.make(1, "unos", 2, "two", 3, "trois", 4, "vier"),
 *   HashSet.partition(stringRefinement)
 * )
 *
 * // or with the pipe method
 * HashSet.make(1, "unos", 2, "two", 3, "trois", 4, "vier").pipe(
 *   HashSet.partition(stringRefinement)
 * )
 *
 * // or with `data-first` API
 * HashSet.partition(
 *   HashSet.make(1, "unos", 2, "two", 3, "trois", 4, "vier"),
 *   stringRefinement
 * )
 * ```
 */
const partition = exports.partition = HS.partition;
//# sourceMappingURL=HashSet.js.map