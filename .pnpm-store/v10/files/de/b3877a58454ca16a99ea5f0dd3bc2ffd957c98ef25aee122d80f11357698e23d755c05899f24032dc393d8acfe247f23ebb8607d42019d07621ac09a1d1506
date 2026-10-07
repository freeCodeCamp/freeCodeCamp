/**
 * @since 2.0.0
 */
export { 
/**
 * @since 2.0.0
 */
absurd, 
/**
 * @since 2.0.0
 */
flow, 
/**
 * @since 2.0.0
 */
hole, 
/**
 * @since 2.0.0
 */
identity, 
/**
 * @since 2.0.0
 */
pipe, 
/**
 * @since 2.0.0
 */
unsafeCoerce } from "./Function.js";
/**
 * @since 3.10.0
 */
export * as Arbitrary from "./Arbitrary.js";
/**
 * This module provides utility functions for working with arrays in TypeScript.
 *
 * @since 2.0.0
 */
export * as Array from "./Array.js";
/**
 * This module provides utility functions and type class instances for working with the `BigDecimal` type in TypeScript.
 * It includes functions for basic arithmetic operations, as well as type class instances for `Equivalence` and `Order`.
 *
 * A `BigDecimal` allows storing any real number to arbitrary precision; which avoids common floating point errors
 * (such as 0.1 + 0.2 ≠ 0.3) at the cost of complexity.
 *
 * Internally, `BigDecimal` uses a `BigInt` object, paired with a 64-bit integer which determines the position of the
 * decimal point. Therefore, the precision *is not* actually arbitrary, but limited to 2<sup>63</sup> decimal places.
 *
 * It is not recommended to convert a floating point number to a decimal directly, as the floating point representation
 * may be unexpected.
 *
 * @module BigDecimal
 * @since 2.0.0
 * @see {@link module:BigInt} for more similar operations on `bigint` types
 * @see {@link module:Number} for more similar operations on `number` types
 */
export * as BigDecimal from "./BigDecimal.js";
/**
 * This module provides utility functions and type class instances for working with the `bigint` type in TypeScript.
 * It includes functions for basic arithmetic operations, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @module BigInt
 * @since 2.0.0
 * @see {@link module:BigDecimal} for more similar operations on `BigDecimal` types
 * @see {@link module:Number} for more similar operations on `number` types
 */
export * as BigInt from "./BigInt.js";
/**
 * This module provides utility functions and type class instances for working with the `boolean` type in TypeScript.
 * It includes functions for basic boolean operations, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @since 2.0.0
 */
export * as Boolean from "./Boolean.js";
/**
 * This module provides types and utility functions to create and work with branded types,
 * which are TypeScript types with an added type tag to prevent accidental usage of a value in the wrong context.
 *
 * The `refined` and `nominal` functions are both used to create branded types in TypeScript.
 * The main difference between them is that `refined` allows for validation of the data, while `nominal` does not.
 *
 * The `nominal` function is used to create a new branded type that has the same underlying type as the input, but with a different name.
 * This is useful when you want to distinguish between two values of the same type that have different meanings.
 * The `nominal` function does not perform any validation of the input data.
 *
 * On the other hand, the `refined` function is used to create a new branded type that has the same underlying type as the input,
 * but with a different name, and it also allows for validation of the input data.
 * The `refined` function takes a predicate that is used to validate the input data.
 * If the input data fails the validation, a `BrandErrors` is returned, which provides information about the specific validation failure.
 *
 * @since 2.0.0
 */
export * as Brand from "./Brand.js";
/**
 * @since 2.0.0
 */
export * as Cache from "./Cache.js";
/**
 * The `Effect<A, E, R>` type is polymorphic in values of type `E` and we can
 * work with any error type that we want. However, there is a lot of information
 * that is not inside an arbitrary `E` value. So as a result, an `Effect` needs
 * somewhere to store things like unexpected errors or defects, stack and
 * execution traces, causes of fiber interruptions, and so forth.
 *
 * Effect-TS is very strict about preserving the full information related to a
 * failure. It captures all type of errors into the `Cause` data type. `Effect`
 * uses the `Cause<E>` data type to store the full story of failure. So its
 * error model is lossless. It doesn't throw information related to the failure
 * result. So we can figure out exactly what happened during the operation of
 * our effects.
 *
 * It is important to note that `Cause` is an underlying data type representing
 * errors occuring within an `Effect` workflow. Thus, we don't usually deal with
 * `Cause`s directly. Even though it is not a data type that we deal with very
 * often, the `Cause` of a failing `Effect` workflow can be accessed at any
 * time, which gives us total access to all parallel and sequential errors in
 * occurring within our codebase.
 *
 * @since 2.0.0
 */
export * as Cause from "./Cause.js";
/**
 * @since 2.0.0
 */
export * as Channel from "./Channel.js";
/**
 * @since 2.0.0
 */
export * as ChildExecutorDecision from "./ChildExecutorDecision.js";
/**
 * @since 2.0.0
 */
export * as Chunk from "./Chunk.js";
/**
 * @since 2.0.0
 */
export * as Clock from "./Clock.js";
/**
 * @since 2.0.0
 */
export * as Config from "./Config.js";
/**
 * @since 2.0.0
 */
export * as ConfigError from "./ConfigError.js";
/**
 * @since 2.0.0
 */
export * as ConfigProvider from "./ConfigProvider.js";
/**
 * @since 2.0.0
 */
export * as ConfigProviderPathPatch from "./ConfigProviderPathPatch.js";
/**
 * @since 2.0.0
 */
export * as Console from "./Console.js";
/**
 * This module provides a data structure called `Context` that can be used for dependency injection in effectful
 * programs. It is essentially a table mapping `Tag`s to their implementations (called `Service`s), and can be used to
 * manage dependencies in a type-safe way. The `Context` data structure is essentially a way of providing access to a set
 * of related services that can be passed around as a single unit. This module provides functions to create, modify, and
 * query the contents of a `Context`, as well as a number of utility types for working with tags and services.
 *
 * @since 2.0.0
 */
export * as Context from "./Context.js";
/**
 * @since 2.0.0
 */
export * as Cron from "./Cron.js";
/**
 * @since 2.0.0
 */
export * as Data from "./Data.js";
/**
 * @since 3.6.0
 */
export * as DateTime from "./DateTime.js";
/**
 * @since 2.0.0
 */
export * as DefaultServices from "./DefaultServices.js";
/**
 * @since 2.0.0
 */
export * as Deferred from "./Deferred.js";
/**
 * @since 2.0.0
 */
export * as Differ from "./Differ.js";
/**
 * @since 2.0.0
 */
export * as Duration from "./Duration.js";
/**
 * @since 2.0.0
 */
export * as Effect from "./Effect.js";
/**
 * @since 2.0.0
 */
export * as Effectable from "./Effectable.js";
/**
 * @since 2.0.0
 */
export * as Either from "./Either.js";
/**
 * This module provides encoding & decoding functionality for:
 *
 * - base64 (RFC4648)
 * - base64 (URL)
 * - hex
 *
 * @since 2.0.0
 */
export * as Encoding from "./Encoding.js";
/**
 * @since 2.0.0
 */
export * as Equal from "./Equal.js";
/**
 * This module provides an implementation of the `Equivalence` type class, which defines a binary relation
 * that is reflexive, symmetric, and transitive. In other words, it defines a notion of equivalence between values of a certain type.
 * These properties are also known in mathematics as an "equivalence relation".
 *
 * @since 2.0.0
 */
export * as Equivalence from "./Equivalence.js";
/**
 * @since 3.16.0
 * @experimental
 */
export * as ExecutionPlan from "./ExecutionPlan.js";
/**
 * @since 2.0.0
 */
export * as ExecutionStrategy from "./ExecutionStrategy.js";
/**
 * @since 2.0.0
 */
export * as Exit from "./Exit.js";
/**
 * @since 3.10.0
 */
export * as FastCheck from "./FastCheck.js";
/**
 * @since 2.0.0
 */
export * as Fiber from "./Fiber.js";
/**
 * @since 2.0.0
 */
export * as FiberHandle from "./FiberHandle.js";
/**
 * @since 2.0.0
 */
export * as FiberId from "./FiberId.js";
/**
 * @since 2.0.0
 */
export * as FiberMap from "./FiberMap.js";
/**
 * @since 2.0.0
 */
export * as FiberRef from "./FiberRef.js";
/**
 * @since 2.0.0
 */
export * as FiberRefs from "./FiberRefs.js";
/**
 * @since 2.0.0
 */
export * as FiberRefsPatch from "./FiberRefsPatch.js";
/**
 * @since 2.0.0
 */
export * as FiberSet from "./FiberSet.js";
/**
 * @since 2.0.0
 */
export * as FiberStatus from "./FiberStatus.js";
/**
 * @since 2.0.0
 */
export * as Function from "./Function.js";
/**
 * The `GlobalValue` module ensures that a single instance of a value is created globally,
 * even when modules are imported multiple times (e.g., due to mixing CommonJS and ESM builds)
 * or during hot-reloading in development environments like Next.js or Remix.
 *
 * It achieves this by using a versioned global store, identified by a unique `Symbol` tied to
 * the current version of the `effect` library. The store holds values that are keyed by an identifier,
 * allowing the reuse of previously computed instances across imports or reloads.
 *
 * This pattern is particularly useful in scenarios where frequent reloading can cause services or
 * single-instance objects to be recreated unnecessarily, such as in development environments with hot-reloading.
 *
 * @since 2.0.0
 */
export * as GlobalValue from "./GlobalValue.js";
/**
 * @experimental
 * @since 3.18.0
 */
export * as Graph from "./Graph.js";
/**
 * @since 2.0.0
 */
export * as GroupBy from "./GroupBy.js";
/**
 * @since 2.0.0
 */
export * as HKT from "./HKT.js";
/**
 * @since 2.0.0
 */
export * as Hash from "./Hash.js";
/**
 * @since 2.0.0
 */
export * as HashMap from "./HashMap.js";
/**
 * @since 3.19.0
 * @experimental
 */
export * as HashRing from "./HashRing.js";
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
export * as HashSet from "./HashSet.js";
/**
 * @since 2.0.0
 */
export * as Inspectable from "./Inspectable.js";
/**
 * This module provides utility functions for working with Iterables in TypeScript.
 *
 * @since 2.0.0
 */
export * as Iterable from "./Iterable.js";
/**
 * @since 3.10.0
 */
export * as JSONSchema from "./JSONSchema.js";
/**
 * @since 2.0.0
 */
export * as KeyedPool from "./KeyedPool.js";
/**
 * A `Layer<ROut, E, RIn>` describes how to build one or more services in your
 * application. Services can be injected into effects via
 * `Effect.provideService`. Effects can require services via `Effect.service`.
 *
 * Layer can be thought of as recipes for producing bundles of services, given
 * their dependencies (other services).
 *
 * Construction of services can be effectful and utilize resources that must be
 * acquired and safely released when the services are done being utilized.
 *
 * By default layers are shared, meaning that if the same layer is used twice
 * the layer will only be allocated a single time.
 *
 * Because of their excellent composition properties, layers are the idiomatic
 * way in Effect-TS to create services that depend on other services.
 *
 * @since 2.0.0
 */
export * as Layer from "./Layer.js";
/**
 * @since 3.14.0
 * @experimental
 */
export * as LayerMap from "./LayerMap.js";
/**
 * A data type for immutable linked lists representing ordered collections of elements of type `A`.
 *
 * This data type is optimal for last-in-first-out (LIFO), stack-like access patterns. If you need another access pattern, for example, random access or FIFO, consider using a collection more suited to this than `List`.
 *
 * **Performance**
 *
 * - Time: `List` has `O(1)` prepend and head/tail access. Most other operations are `O(n)` on the number of elements in the list. This includes the index-based lookup of elements, `length`, `append` and `reverse`.
 * - Space: `List` implements structural sharing of the tail list. This means that many operations are either zero- or constant-memory cost.
 *
 * @since 2.0.0
 */
export * as List from "./List.js";
/**
 * @since 2.0.0
 */
export * as LogLevel from "./LogLevel.js";
/**
 * @since 2.0.0
 */
export * as LogSpan from "./LogSpan.js";
/**
 * @since 2.0.0
 */
export * as Logger from "./Logger.js";
/**
 * @since 3.8.0
 * @experimental
 */
export * as Mailbox from "./Mailbox.js";
/**
 * @since 2.0.0
 */
export * as ManagedRuntime from "./ManagedRuntime.js";
/**
 * The `effect/match` module provides a type-safe pattern matching system for
 * TypeScript. Inspired by functional programming, it simplifies conditional
 * logic by replacing verbose if/else or switch statements with a structured and
 * expressive API.
 *
 * This module supports matching against types, values, and discriminated unions
 * while enforcing exhaustiveness checking to ensure all cases are handled.
 *
 * Although pattern matching is not yet a native JavaScript feature,
 * `effect/match` offers a reliable implementation that is available today.
 *
 * **How Pattern Matching Works**
 *
 * Pattern matching follows a structured process:
 *
 * - **Creating a matcher**: Define a `Matcher` that operates on either a
 *   specific `Match.type` or `Match.value`.
 *
 * - **Defining patterns**: Use combinators such as `Match.when`, `Match.not`,
 *   and `Match.tag` to specify matching conditions.
 *
 * - **Completing the match**: Apply a finalizer such as `Match.exhaustive`,
 *   `Match.orElse`, or `Match.option` to determine how unmatched cases should
 *   be handled.
 *
 * @since 1.0.0
 */
export * as Match from "./Match.js";
/**
 * @since 2.0.0
 */
export * as MergeDecision from "./MergeDecision.js";
/**
 * @since 2.0.0
 */
export * as MergeState from "./MergeState.js";
/**
 * @since 2.0.0
 */
export * as MergeStrategy from "./MergeStrategy.js";
/**
 * @since 2.0.0
 */
export * as Metric from "./Metric.js";
/**
 * @since 2.0.0
 */
export * as MetricBoundaries from "./MetricBoundaries.js";
/**
 * @since 2.0.0
 */
export * as MetricHook from "./MetricHook.js";
/**
 * @since 2.0.0
 */
export * as MetricKey from "./MetricKey.js";
/**
 * @since 2.0.0
 */
export * as MetricKeyType from "./MetricKeyType.js";
/**
 * @since 2.0.0
 */
export * as MetricLabel from "./MetricLabel.js";
/**
 * @since 2.0.0
 */
export * as MetricPair from "./MetricPair.js";
/**
 * @since 2.0.0
 */
export * as MetricPolling from "./MetricPolling.js";
/**
 * @since 2.0.0
 */
export * as MetricRegistry from "./MetricRegistry.js";
/**
 * @since 2.0.0
 */
export * as MetricState from "./MetricState.js";
/**
 * A lightweight alternative to the `Effect` data type, with a subset of the functionality.
 *
 * @since 3.4.0
 * @experimental
 */
export * as Micro from "./Micro.js";
/**
 * @since 2.0.0
 *
 * Enables low level framework authors to run on their own isolated effect version
 */
export * as ModuleVersion from "./ModuleVersion.js";
/**
 * @since 2.0.0
 */
export * as MutableHashMap from "./MutableHashMap.js";
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
export * as MutableHashSet from "./MutableHashSet.js";
/**
 * @since 2.0.0
 */
export * as MutableList from "./MutableList.js";
/**
 * @since 2.0.0
 */
export * as MutableQueue from "./MutableQueue.js";
/**
 * @since 2.0.0
 */
export * as MutableRef from "./MutableRef.js";
/**
 * @since 2.0.0
 */
export * as NonEmptyIterable from "./NonEmptyIterable.js";
/**
 * # Number
 *
 * This module provides utility functions and type class instances for working
 * with the `number` type in TypeScript. It includes functions for basic
 * arithmetic operations, as well as type class instances for `Equivalence` and
 * `Order`.
 *
 * ## Operations Reference
 *
 * | Category     | Operation                                  | Description                                             | Domain                         | Co-domain             |
 * | ------------ | ------------------------------------------ | ------------------------------------------------------- | ------------------------------ | --------------------- |
 * | constructors | {@link module:Number.parse}                | Safely parses a string to a number                      | `string`                       | `Option<number>`      |
 * |              |                                            |                                                         |                                |                       |
 * | math         | {@link module:Number.sum}                  | Adds two numbers                                        | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.sumAll}               | Sums all numbers in a collection                        | `Iterable<number>`             | `number`              |
 * | math         | {@link module:Number.subtract}             | Subtracts one number from another                       | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.multiply}             | Multiplies two numbers                                  | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.multiplyAll}          | Multiplies all numbers in a collection                  | `Iterable<number>`             | `number`              |
 * | math         | {@link module:Number.divide}               | Safely divides handling division by zero                | `number`, `number`             | `Option<number>`      |
 * | math         | {@link module:Number.unsafeDivide}         | Divides but misbehaves for division by zero             | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.remainder}            | Calculates remainder of division                        | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.increment}            | Adds 1 to a number                                      | `number`                       | `number`              |
 * | math         | {@link module:Number.decrement}            | Subtracts 1 from a number                               | `number`                       | `number`              |
 * | math         | {@link module:Number.sign}                 | Determines the sign of a number                         | `number`                       | `Ordering`            |
 * | math         | {@link module:Number.nextPow2}             | Finds the next power of 2                               | `number`                       | `number`              |
 * | math         | {@link module:Number.round}                | Rounds a number with specified precision                | `number`, `number`             | `number`              |
 * |              |                                            |                                                         |                                |                       |
 * | predicates   | {@link module:Number.between}              | Checks if a number is in a range                        | `number`, `{minimum, maximum}` | `boolean`             |
 * | predicates   | {@link module:Number.lessThan}             | Checks if one number is less than another               | `number`, `number`             | `boolean`             |
 * | predicates   | {@link module:Number.lessThanOrEqualTo}    | Checks if one number is less than or equal              | `number`, `number`             | `boolean`             |
 * | predicates   | {@link module:Number.greaterThan}          | Checks if one number is greater than another            | `number`, `number`             | `boolean`             |
 * | predicates   | {@link module:Number.greaterThanOrEqualTo} | Checks if one number is greater or equal                | `number`, `number`             | `boolean`             |
 * |              |                                            |                                                         |                                |                       |
 * | guards       | {@link module:Number.isNumber}             | Type guard for JavaScript numbers                       | `unknown`                      | `boolean`             |
 * |              |                                            |                                                         |                                |                       |
 * | comparison   | {@link module:Number.min}                  | Returns the minimum of two numbers                      | `number`, `number`             | `number`              |
 * | comparison   | {@link module:Number.max}                  | Returns the maximum of two numbers                      | `number`, `number`             | `number`              |
 * | comparison   | {@link module:Number.clamp}                | Restricts a number to a range                           | `number`, `{minimum, maximum}` | `number`              |
 * |              |                                            |                                                         |                                |                       |
 * | instances    | {@link module:Number.Equivalence}          | Equivalence instance for numbers                        |                                | `Equivalence<number>` |
 * | instances    | {@link module:Number.Order}                | Order instance for numbers                              |                                | `Order<number>`       |
 * |              |                                            |                                                         |                                |                       |
 * | errors       | {@link module:Number.DivisionByZeroError}  | Error thrown by unsafeDivide                            |                                |                       |
 *
 * ## Composition Patterns and Type Safety
 *
 * When building function pipelines, understanding how types flow through
 * operations is critical:
 *
 * ### Composing with type-preserving operations
 *
 * Most operations in this module are type-preserving (`number → number`),
 * making them easily composable in pipelines:
 *
 * ```ts
 * import { pipe } from "effect"
 * import * as Number from "effect/Number"
 *
 * const result = pipe(
 *   10,
 *   Number.increment, // number → number
 *   Number.multiply(2), // number → number
 *   Number.round(1) // number → number
 * ) // Result: number (21)
 * ```
 *
 * ### Working with Option results
 *
 * Operations that might fail (like division by zero) return Option types and
 * require Option combinators:
 *
 * ```ts
 * import { pipe, Option } from "effect"
 * import * as Number from "effect/Number"
 *
 * const result = pipe(
 *   10,
 *   Number.divide(0), // number → Option<number>
 *   Option.getOrElse(() => 0) // Option<number> → number
 * ) // Result: number (0)
 * ```
 *
 * ### Composition best practices
 *
 * - Chain type-preserving operations for maximum composability
 * - Use Option combinators when working with potentially failing operations
 * - Consider using Effect for operations that might fail with specific errors
 * - Remember that all operations maintain JavaScript's floating-point precision
 *   limitations
 *
 * @module Number
 * @since 2.0.0
 * @see {@link module:BigInt} for more similar operations on `bigint` types
 * @see {@link module:BigDecimal} for more similar operations on `BigDecimal` types
 */
export * as Number from "./Number.js";
/**
 * @since 2.0.0
 */
export * as Option from "./Option.js";
/**
 * This module provides an implementation of the `Order` type class which is used to define a total ordering on some type `A`.
 * An order is defined by a relation `<=`, which obeys the following laws:
 *
 * - either `x <= y` or `y <= x` (totality)
 * - if `x <= y` and `y <= x`, then `x == y` (antisymmetry)
 * - if `x <= y` and `y <= z`, then `x <= z` (transitivity)
 *
 * The truth table for compare is defined as follows:
 *
 * | `x <= y` | `x >= y` | Ordering |                       |
 * | -------- | -------- | -------- | --------------------- |
 * | `true`   | `true`   | `0`      | corresponds to x == y |
 * | `true`   | `false`  | `< 0`    | corresponds to x < y  |
 * | `false`  | `true`   | `> 0`    | corresponds to x > y  |
 *
 * @since 2.0.0
 */
export * as Order from "./Order.js";
/**
 * @since 2.0.0
 */
export * as Ordering from "./Ordering.js";
/**
 * @since 3.10.0
 */
export * as ParseResult from "./ParseResult.js";
/**
 * @since 3.19.4
 * @experimental
 */
export * as PartitionedSemaphore from "./PartitionedSemaphore.js";
/**
 * @since 2.0.0
 */
export * as Pipeable from "./Pipeable.js";
/**
 * @since 2.0.0
 */
export * as Pool from "./Pool.js";
/**
 * This module provides a collection of functions for working with predicates and refinements.
 *
 * A `Predicate<A>` is a function that takes a value of type `A` and returns a boolean.
 * It is used to check if a value satisfies a certain condition.
 *
 * A `Refinement<A, B>` is a special type of predicate that not only checks a condition
 * but also provides a type guard, allowing TypeScript to narrow the type of the input
 * value from `A` to a more specific type `B` within a conditional block.
 *
 * The module includes:
 * - Basic predicates and refinements for common types (e.g., `isString`, `isNumber`).
 * - Combinators to create new predicates from existing ones (e.g., `and`, `or`, `not`).
 * - Advanced combinators for working with data structures (e.g., `tuple`, `struct`).
 * - Type-level utilities for inspecting predicate and refinement types.
 *
 * @since 2.0.0
 */
export * as Predicate from "./Predicate.js";
/**
 * @since 3.10.0
 */
export * as Pretty from "./Pretty.js";
/**
 * @since 2.0.0
 */
export * as PrimaryKey from "./PrimaryKey.js";
/**
 * @since 2.0.0
 */
export * as PubSub from "./PubSub.js";
/**
 * @since 2.0.0
 */
export * as Queue from "./Queue.js";
/**
 * @since 2.0.0
 */
export * as Random from "./Random.js";
/**
 * Limits the number of calls to a resource to a maximum amount in some interval.
 *
 * @since 2.0.0
 */
export * as RateLimiter from "./RateLimiter.js";
/**
 * @since 3.5.0
 */
export * as RcMap from "./RcMap.js";
/**
 * @since 3.5.0
 */
export * as RcRef from "./RcRef.js";
/**
 * @since 2.0.0
 */
export * as Readable from "./Readable.js";
/**
 * This module provides utility functions for working with records in TypeScript.
 *
 * @since 2.0.0
 */
export * as Record from "./Record.js";
/**
 * @since 2.0.0
 */
export * as RedBlackTree from "./RedBlackTree.js";
/**
 * The Redacted module provides functionality for handling sensitive information
 * securely within your application. By using the `Redacted` data type, you can
 * ensure that sensitive values are not accidentally exposed in logs or error
 * messages.
 *
 * @since 3.3.0
 */
export * as Redacted from "./Redacted.js";
/**
 * @since 2.0.0
 */
export * as Ref from "./Ref.js";
/**
 * This module provides utility functions for working with RegExp in TypeScript.
 *
 * @since 2.0.0
 */
export * as RegExp from "./RegExp.js";
/**
 * @since 2.0.0
 */
export * as Reloadable from "./Reloadable.js";
/**
 * @since 2.0.0
 */
export * as Request from "./Request.js";
/**
 * @since 2.0.0
 */
export * as RequestBlock from "./RequestBlock.js";
/**
 * @since 2.0.0
 */
export * as RequestResolver from "./RequestResolver.js";
/**
 * @since 2.0.0
 */
export * as Resource from "./Resource.js";
/**
 * @since 2.0.0
 */
export * as Runtime from "./Runtime.js";
/**
 * @since 2.0.0
 */
export * as RuntimeFlags from "./RuntimeFlags.js";
/**
 * @since 2.0.0
 */
export * as RuntimeFlagsPatch from "./RuntimeFlagsPatch.js";
/**
 * @since 2.0.0
 */
export * as STM from "./STM.js";
/**
 * @since 2.0.0
 */
export * as Schedule from "./Schedule.js";
/**
 * @since 2.0.0
 */
export * as ScheduleDecision from "./ScheduleDecision.js";
/**
 * @since 2.0.0
 */
export * as ScheduleInterval from "./ScheduleInterval.js";
/**
 * @since 2.0.0
 */
export * as ScheduleIntervals from "./ScheduleIntervals.js";
/**
 * @since 2.0.0
 */
export * as Scheduler from "./Scheduler.js";
/**
 * @since 3.10.0
 */
export * as Schema from "./Schema.js";
/**
 * @since 3.10.0
 */
export * as SchemaAST from "./SchemaAST.js";
/**
 * @since 2.0.0
 */
export * as Scope from "./Scope.js";
/**
 * @since 2.0.0
 */
export * as ScopedCache from "./ScopedCache.js";
/**
 * @since 2.0.0
 */
export * as ScopedRef from "./ScopedRef.js";
/**
 * @since 2.0.0
 * @deprecated
 */
export * as Secret from "./Secret.js";
/**
 * @since 2.0.0
 */
export * as SingleProducerAsyncInput from "./SingleProducerAsyncInput.js";
/**
 * @since 2.0.0
 */
export * as Sink from "./Sink.js";
/**
 * @since 2.0.0
 */
export * as SortedMap from "./SortedMap.js";
/**
 * @since 2.0.0
 */
export * as SortedSet from "./SortedSet.js";
/**
 * @since 2.0.0
 */
export * as Stream from "./Stream.js";
/**
 * @since 2.0.0
 */
export * as StreamEmit from "./StreamEmit.js";
/**
 * @since 2.0.0
 */
export * as StreamHaltStrategy from "./StreamHaltStrategy.js";
/**
 * @since 2.0.0
 */
export * as Streamable from "./Streamable.js";
/**
 * This module provides utility functions and type class instances for working with the `string` type in TypeScript.
 * It includes functions for basic string manipulation, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @since 2.0.0
 */
export * as String from "./String.js";
/**
 * This module provides utility functions for working with structs in TypeScript.
 *
 * @since 2.0.0
 */
export * as Struct from "./Struct.js";
/**
 * @since 2.0.0
 */
export * as Subscribable from "./Subscribable.js";
/**
 * @since 2.0.0
 */
export * as SubscriptionRef from "./SubscriptionRef.js";
/**
 * A `Supervisor<T>` is allowed to supervise the launching and termination of
 * fibers, producing some visible value of type `T` from the supervision.
 *
 * @since 2.0.0
 */
export * as Supervisor from "./Supervisor.js";
/**
 * @since 2.0.0
 */
export * as Symbol from "./Symbol.js";
/**
 * @since 2.0.0
 */
export * as SynchronizedRef from "./SynchronizedRef.js";
/**
 * @since 2.0.0
 */
export * as TArray from "./TArray.js";
/**
 * @since 2.0.0
 */
export * as TDeferred from "./TDeferred.js";
/**
 * @since 2.0.0
 */
export * as TMap from "./TMap.js";
/**
 * @since 2.0.0
 */
export * as TPriorityQueue from "./TPriorityQueue.js";
/**
 * @since 2.0.0
 */
export * as TPubSub from "./TPubSub.js";
/**
 * @since 2.0.0
 */
export * as TQueue from "./TQueue.js";
/**
 * @since 2.0.0
 */
export * as TRandom from "./TRandom.js";
/**
 * @since 2.0.0
 */
export * as TReentrantLock from "./TReentrantLock.js";
/**
 * @since 2.0.0
 */
export * as TRef from "./TRef.js";
/**
 * @since 2.0.0
 */
export * as TSemaphore from "./TSemaphore.js";
/**
 * @since 2.0.0
 */
export * as TSet from "./TSet.js";
/**
 * @since 3.10.0
 */
export * as TSubscriptionRef from "./TSubscriptionRef.js";
/**
 * @since 2.0.0
 */
export * as Take from "./Take.js";
/**
 * @since 2.0.0
 */
export * as TestAnnotation from "./TestAnnotation.js";
/**
 * @since 2.0.0
 */
export * as TestAnnotationMap from "./TestAnnotationMap.js";
/**
 * @since 2.0.0
 */
export * as TestAnnotations from "./TestAnnotations.js";
/**
 * @since 2.0.0
 */
export * as TestClock from "./TestClock.js";
/**
 * @since 2.0.0
 */
export * as TestConfig from "./TestConfig.js";
/**
 * @since 2.0.0
 */
export * as TestContext from "./TestContext.js";
/**
 * @since 2.0.0
 */
export * as TestLive from "./TestLive.js";
/**
 * @since 2.0.0
 */
export * as TestServices from "./TestServices.js";
/**
 * @since 2.0.0
 */
export * as TestSized from "./TestSized.js";
/**
 * @since 2.0.0
 */
export * as Tracer from "./Tracer.js";
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
export * as Trie from "./Trie.js";
/**
 * This module provides utility functions for working with tuples in TypeScript.
 *
 * @since 2.0.0
 */
export * as Tuple from "./Tuple.js";
/**
 * A collection of types that are commonly used types.
 *
 * @since 2.0.0
 */
export * as Types from "./Types.js";
/**
 * @since 2.0.0
 */
export * as Unify from "./Unify.js";
/**
 * @since 2.0.0
 */
export * as UpstreamPullRequest from "./UpstreamPullRequest.js";
/**
 * @since 2.0.0
 */
export * as UpstreamPullStrategy from "./UpstreamPullStrategy.js";
/**
 * @since 2.0.0
 */
export * as Utils from "./Utils.js";
//# sourceMappingURL=index.d.ts.map