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
import * as Chunk from "./Chunk.js";
import * as Either from "./Either.js";
import * as Equal from "./Equal.js";
import * as Equivalence from "./Equivalence.js";
import { type Inspectable } from "./Inspectable.js";
import type { NonEmptyIterable } from "./NonEmptyIterable.js";
import * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
import { type Predicate, type Refinement } from "./Predicate.js";
import type { NoInfer } from "./Types.js";
/**
 * Represents an immutable linked list of elements of type `A`.
 *
 * A `List` is optimal for last-in-first-out (LIFO), stack-like access patterns.
 * If you need another access pattern, for example, random access or FIFO,
 * consider using a collection more suited for that other than `List`.
 *
 * @since 2.0.0
 * @category models
 */
export type List<A> = Cons<A> | Nil<A>;
/**
 * @since 2.0.0
 * @category symbol
 */
export declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Nil<out A> extends Iterable<A>, Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
    readonly _tag: "Nil";
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Cons<out A> extends NonEmptyIterable<A>, Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
    readonly _tag: "Cons";
    readonly head: A;
    readonly tail: List<A>;
}
/**
 * Converts the specified `List` to an `Array`.
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const toArray: <A>(self: List<A>) => Array<A>;
/**
 * @category equivalence
 * @since 2.0.0
 */
export declare const getEquivalence: <A>(isEquivalent: Equivalence.Equivalence<A>) => Equivalence.Equivalence<List<A>>;
/**
 * Returns `true` if the specified value is a `List`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isList: {
    /**
     * Returns `true` if the specified value is a `List`, `false` otherwise.
     *
     * @since 2.0.0
     * @category refinements
     */
    <A>(u: Iterable<A>): u is List<A>;
    /**
     * Returns `true` if the specified value is a `List`, `false` otherwise.
     *
     * @since 2.0.0
     * @category refinements
     */
    (u: unknown): u is List<unknown>;
};
/**
 * Returns `true` if the specified value is a `List.Nil<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isNil: <A>(self: List<A>) => self is Nil<A>;
/**
 * Returns `true` if the specified value is a `List.Cons<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isCons: <A>(self: List<A>) => self is Cons<A>;
/**
 * Returns the number of elements contained in the specified `List`
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <A>(self: List<A>) => number;
/**
 * Constructs a new empty `List<A>`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const nil: <A = never>() => List<A>;
/**
 * Constructs a new `List.Cons<A>` from the specified `head` and `tail` values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const cons: <A>(head: A, tail: List<A>) => Cons<A>;
/**
 * Constructs a new empty `List<A>`.
 *
 * Alias of {@link nil}.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <A = never>() => List<A>;
/**
 * Constructs a new `List<A>` from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const of: <A>(value: A) => Cons<A>;
/**
 * Creates a new `List` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: <A>(prefix: Iterable<A>) => List<A>;
/**
 * Constructs a new `List<A>` from the specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <Elements extends readonly [any, ...Array<any>]>(...elements: Elements) => Cons<Elements[number]>;
/**
 * Appends the specified element to the end of the `List`, creating a new `Cons`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const append: {
    /**
     * Appends the specified element to the end of the `List`, creating a new `Cons`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(element: B): <A>(self: List<A>) => Cons<A | B>;
    /**
     * Appends the specified element to the end of the `List`, creating a new `Cons`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: List<A>, element: B): Cons<A | B>;
};
/**
 * Concatenates two lists, combining their elements.
 * If either list is non-empty, the result is also a non-empty list.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { List } from "effect"
 *
 * assert.deepStrictEqual(
 *   List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
 *   [1, 2, "a", "b"]
 * )
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const appendAll: {
    /**
     * Concatenates two lists, combining their elements.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
     *   [1, 2, "a", "b"]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <S extends List<any>, T extends List<any>>(that: T): (self: S) => List.OrNonEmpty<S, T, List.Infer<S> | List.Infer<T>>;
    /**
     * Concatenates two lists, combining their elements.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
     *   [1, 2, "a", "b"]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: List<A>, that: Cons<B>): Cons<A | B>;
    /**
     * Concatenates two lists, combining their elements.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
     *   [1, 2, "a", "b"]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Cons<A>, that: List<B>): Cons<A | B>;
    /**
     * Concatenates two lists, combining their elements.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
     *   [1, 2, "a", "b"]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: List<A>, that: List<B>): List<A | B>;
};
/**
 * Prepends the specified element to the beginning of the list.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prepend: {
    /**
     * Prepends the specified element to the beginning of the list.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(element: B): <A>(self: List<A>) => Cons<A | B>;
    /**
     * Prepends the specified element to the beginning of the list.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: List<A>, element: B): Cons<A | B>;
};
/**
 * Prepends the specified prefix list to the beginning of the specified list.
 * If either list is non-empty, the result is also a non-empty list.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { List } from "effect"
 *
 * assert.deepStrictEqual(
 *   List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
 *   ["a", "b", 1, 2]
 * )
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prependAll: {
    /**
     * Prepends the specified prefix list to the beginning of the specified list.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
     *   ["a", "b", 1, 2]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <S extends List<any>, T extends List<any>>(that: T): (self: S) => List.OrNonEmpty<S, T, List.Infer<S> | List.Infer<T>>;
    /**
     * Prepends the specified prefix list to the beginning of the specified list.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
     *   ["a", "b", 1, 2]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: List<A>, that: Cons<B>): Cons<A | B>;
    /**
     * Prepends the specified prefix list to the beginning of the specified list.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
     *   ["a", "b", 1, 2]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Cons<A>, that: List<B>): Cons<A | B>;
    /**
     * Prepends the specified prefix list to the beginning of the specified list.
     * If either list is non-empty, the result is also a non-empty list.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { List } from "effect"
     *
     * assert.deepStrictEqual(
     *   List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
     *   ["a", "b", 1, 2]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: List<A>, that: List<B>): List<A | B>;
};
/**
 * Prepends the specified prefix list (in reverse order) to the beginning of the
 * specified list.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prependAllReversed: {
    /**
     * Prepends the specified prefix list (in reverse order) to the beginning of the
     * specified list.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(prefix: List<B>): <A>(self: List<A>) => List<A | B>;
    /**
     * Prepends the specified prefix list (in reverse order) to the beginning of the
     * specified list.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: List<A>, prefix: List<B>): List<A | B>;
};
/**
 * Drops the first `n` elements from the specified list.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const drop: {
    /**
     * Drops the first `n` elements from the specified list.
     *
     * @since 2.0.0
     * @category combinators
     */
    (n: number): <A>(self: List<A>) => List<A>;
    /**
     * Drops the first `n` elements from the specified list.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A>(self: List<A>, n: number): List<A>;
};
/**
 * Check if a predicate holds true for every `List` element.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const every: {
    /**
     * Check if a predicate holds true for every `List` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => self is List<B>;
    /**
     * Check if a predicate holds true for every `List` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: List<A>) => boolean;
    /**
     * Check if a predicate holds true for every `List` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): self is List<B>;
    /**
     * Check if a predicate holds true for every `List` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: List<A>, predicate: Predicate<A>): boolean;
};
/**
 * Check if a predicate holds true for some `List` element.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const some: {
    /**
     * Check if a predicate holds true for some `List` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => self is Cons<A>;
    /**
     * Check if a predicate holds true for some `List` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: List<A>, predicate: Predicate<A>): self is Cons<A>;
};
/**
 * Filters a list using the specified predicate.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const filter: {
    /**
     * Filters a list using the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => List<B>;
    /**
     * Filters a list using the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => List<A>;
    /**
     * Filters a list using the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): List<B>;
    /**
     * Filters a list using the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A>(self: List<A>, predicate: Predicate<A>): List<A>;
};
/**
 * Filters and maps a list using the specified partial function. The resulting
 * list may be smaller than the input list due to the possibility of the partial
 * function not being defined for some elements.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const filterMap: {
    /**
     * Filters and maps a list using the specified partial function. The resulting
     * list may be smaller than the input list due to the possibility of the partial
     * function not being defined for some elements.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(f: (a: A) => Option.Option<B>): (self: List<A>) => List<B>;
    /**
     * Filters and maps a list using the specified partial function. The resulting
     * list may be smaller than the input list due to the possibility of the partial
     * function not being defined for some elements.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(self: List<A>, f: (a: A) => Option.Option<B>): List<B>;
};
/**
 * Removes all `None` values from the specified list.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const compact: <A>(self: List<Option.Option<A>>) => List<A>;
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findFirst: {
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => Option.Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => Option.Option<A>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): Option.Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: List<A>, predicate: Predicate<A>): Option.Option<A>;
};
/**
 * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const flatMap: {
    /**
     * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <S extends List<any>, T extends List<any>>(f: (a: List.Infer<S>, i: number) => T): (self: S) => List.AndNonEmpty<S, T, List.Infer<T>>;
    /**
     * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, B>(self: Cons<A>, f: (a: A, i: number) => Cons<B>): Cons<B>;
    /**
     * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, B>(self: List<A>, f: (a: A, i: number) => List<B>): List<B>;
};
/**
 * Applies the specified function to each element of the `List`.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const forEach: {
    /**
     * Applies the specified function to each element of the `List`.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(f: (a: A) => B): (self: List<A>) => void;
    /**
     * Applies the specified function to each element of the `List`.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(self: List<A>, f: (a: A) => B): void;
};
/**
 * Returns the first element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const head: <A>(self: List<A>) => Option.Option<A>;
/**
 * Returns the last element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const last: <A>(self: List<A>) => Option.Option<A>;
/**
 * @since 2.0.0
 */
export declare namespace List {
    /**
     * @since 2.0.0
     */
    type Infer<S extends List<any>> = S extends List<infer A> ? A : never;
    /**
     * @since 2.0.0
     */
    type With<S extends List<any>, A> = S extends Cons<any> ? Cons<A> : List<A>;
    /**
     * @since 2.0.0
     */
    type OrNonEmpty<S extends List<any>, T extends List<any>, A> = S extends Cons<any> ? Cons<A> : T extends Cons<any> ? Cons<A> : List<A>;
    /**
     * @since 2.0.0
     */
    type AndNonEmpty<S extends List<any>, T extends List<any>, A> = S extends Cons<any> ? T extends Cons<any> ? Cons<A> : List<A> : List<A>;
}
/**
 * Applies the specified mapping function to each element of the list.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * Applies the specified mapping function to each element of the list.
     *
     * @since 2.0.0
     * @category mapping
     */
    <S extends List<any>, B>(f: (a: List.Infer<S>, i: number) => B): (self: S) => List.With<S, B>;
    /**
     * Applies the specified mapping function to each element of the list.
     *
     * @since 2.0.0
     * @category mapping
     */
    <S extends List<any>, B>(self: S, f: (a: List.Infer<S>, i: number) => B): List.With<S, B>;
};
/**
 * Partition a list into two lists, where the first list contains all elements
 * that did not satisfy the specified predicate, and the second list contains
 * all elements that did satisfy the specified predicate.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const partition: {
    /**
     * Partition a list into two lists, where the first list contains all elements
     * that did not satisfy the specified predicate, and the second list contains
     * all elements that did satisfy the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => [excluded: List<Exclude<A, B>>, satisfying: List<B>];
    /**
     * Partition a list into two lists, where the first list contains all elements
     * that did not satisfy the specified predicate, and the second list contains
     * all elements that did satisfy the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => [excluded: List<A>, satisfying: List<A>];
    /**
     * Partition a list into two lists, where the first list contains all elements
     * that did not satisfy the specified predicate, and the second list contains
     * all elements that did satisfy the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): [excluded: List<Exclude<A, B>>, satisfying: List<B>];
    /**
     * Partition a list into two lists, where the first list contains all elements
     * that did not satisfy the specified predicate, and the second list contains
     * all elements that did satisfy the specified predicate.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A>(self: List<A>, predicate: Predicate<A>): [excluded: List<A>, satisfying: List<A>];
};
/**
 * Partition a list into two lists, where the first list contains all elements
 * for which the specified function returned a `Left`, and the second list
 * contains all elements for which the specified function returned a `Right`.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const partitionMap: {
    /**
     * Partition a list into two lists, where the first list contains all elements
     * for which the specified function returned a `Left`, and the second list
     * contains all elements for which the specified function returned a `Right`.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B, C>(f: (a: A) => Either.Either<C, B>): (self: List<A>) => [left: List<B>, right: List<C>];
    /**
     * Partition a list into two lists, where the first list contains all elements
     * for which the specified function returned a `Left`, and the second list
     * contains all elements for which the specified function returned a `Right`.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B, C>(self: List<A>, f: (a: A) => Either.Either<C, B>): [left: List<B>, right: List<C>];
};
/**
 * Folds over the elements of the list using the specified function, using the
 * specified initial value.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const reduce: {
    /**
     * Folds over the elements of the list using the specified function, using the
     * specified initial value.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, A>(zero: Z, f: (b: Z, a: A) => Z): (self: List<A>) => Z;
    /**
     * Folds over the elements of the list using the specified function, using the
     * specified initial value.
     *
     * @since 2.0.0
     * @category folding
     */
    <A, Z>(self: List<A>, zero: Z, f: (b: Z, a: A) => Z): Z;
};
/**
 * Folds over the elements of the list using the specified function, beginning
 * with the last element of the list, using the specified initial value.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const reduceRight: {
    /**
     * Folds over the elements of the list using the specified function, beginning
     * with the last element of the list, using the specified initial value.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, A>(zero: Z, f: (accumulator: Z, value: A) => Z): (self: List<A>) => Z;
    /**
     * Folds over the elements of the list using the specified function, beginning
     * with the last element of the list, using the specified initial value.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, A>(self: List<A>, zero: Z, f: (accumulator: Z, value: A) => Z): Z;
};
/**
 * Returns a new list with the elements of the specified list in reverse order.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const reverse: <A>(self: List<A>) => List<A>;
/**
 * Splits the specified list into two lists at the specified index.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const splitAt: {
    /**
     * Splits the specified list into two lists at the specified index.
     *
     * @since 2.0.0
     * @category combinators
     */
    (n: number): <A>(self: List<A>) => [beforeIndex: List<A>, fromIndex: List<A>];
    /**
     * Splits the specified list into two lists at the specified index.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A>(self: List<A>, n: number): [beforeIndex: List<A>, fromIndex: List<A>];
};
/**
 * Returns the tail of the specified list, or `None` if the list is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const tail: <A>(self: List<A>) => Option.Option<List<A>>;
/**
 * Takes the specified number of elements from the beginning of the specified
 * list.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const take: {
    /**
     * Takes the specified number of elements from the beginning of the specified
     * list.
     *
     * @since 2.0.0
     * @category combinators
     */
    (n: number): <A>(self: List<A>) => List<A>;
    /**
     * Takes the specified number of elements from the beginning of the specified
     * list.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A>(self: List<A>, n: number): List<A>;
};
/**
 * Converts the specified `List` to a `Chunk`.
 *
 * @since 2.0.0
 * @category conversions
 */
export declare const toChunk: <A>(self: List<A>) => Chunk.Chunk<A>;
/**
 * Unsafely returns the first element of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeHead: <A>(self: List<A>) => A;
/**
 * Unsafely returns the last element of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeLast: <A>(self: List<A>) => A;
/**
 * Unsafely returns the tail of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeTail: <A>(self: List<A>) => List<A>;
//# sourceMappingURL=List.d.ts.map