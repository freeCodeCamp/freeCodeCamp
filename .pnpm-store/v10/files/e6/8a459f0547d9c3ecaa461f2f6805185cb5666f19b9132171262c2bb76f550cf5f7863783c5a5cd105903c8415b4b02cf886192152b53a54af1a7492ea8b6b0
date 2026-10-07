/**
 * @since 2.0.0
 */
import * as RA from "./Array.js";
import type { NonEmptyReadonlyArray } from "./Array.js";
import type { Either } from "./Either.js";
import * as Equal from "./Equal.js";
import * as Equivalence from "./Equivalence.js";
import type { TypeLambda } from "./HKT.js";
import { type Inspectable } from "./Inspectable.js";
import type { NonEmptyIterable } from "./NonEmptyIterable.js";
import type { Option } from "./Option.js";
import * as Order from "./Order.js";
import type { Pipeable } from "./Pipeable.js";
import { type Predicate, type Refinement } from "./Predicate.js";
import type { Covariant, NoInfer } from "./Types.js";
declare const TypeId: unique symbol;
/**
 * @category symbol
 * @since 2.0.0
 */
export type TypeId = typeof TypeId;
/**
 * @category models
 * @since 2.0.0
 */
export interface Chunk<out A> extends Iterable<A>, Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: {
        readonly _A: Covariant<A>;
    };
    readonly length: number;
}
/**
 * @category model
 * @since 2.0.0
 */
export interface NonEmptyChunk<out A> extends Chunk<A>, NonEmptyIterable<A> {
}
/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface ChunkTypeLambda extends TypeLambda {
    readonly type: Chunk<this["Target"]>;
}
/**
 * Compares the two chunks of equal length using the specified function
 *
 * @category equivalence
 * @since 2.0.0
 */
export declare const getEquivalence: <A>(isEquivalent: Equivalence.Equivalence<A>) => Equivalence.Equivalence<Chunk<A>>;
/**
 * Checks if `u` is a `Chunk<unknown>`
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const isChunk: {
    /**
     * Checks if `u` is a `Chunk<unknown>`
     *
     * @category constructors
     * @since 2.0.0
     */
    <A>(u: Iterable<A>): u is Chunk<A>;
    /**
     * Checks if `u` is a `Chunk<unknown>`
     *
     * @category constructors
     * @since 2.0.0
     */
    (u: unknown): u is Chunk<unknown>;
};
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const empty: <A = never>() => Chunk<A>;
/**
 * Builds a `NonEmptyChunk` from an non-empty collection of elements.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const make: <As extends readonly [any, ...ReadonlyArray<any>]>(...as: As) => NonEmptyChunk<As[number]>;
/**
 * Builds a `NonEmptyChunk` from a single element.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const of: <A>(a: A) => NonEmptyChunk<A>;
/**
 * Creates a new `Chunk` from an iterable collection of values.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const fromIterable: <A>(self: Iterable<A>) => Chunk<A>;
/**
 * Converts a `Chunk` into an `Array`. If the provided `Chunk` is non-empty
 * (`NonEmptyChunk`), the function will return a `NonEmptyArray`, ensuring the
 * non-empty property is preserved.
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const toArray: <S extends Chunk<any>>(self: S) => S extends NonEmptyChunk<any> ? RA.NonEmptyArray<Chunk.Infer<S>> : Array<Chunk.Infer<S>>;
/**
 * Converts a `Chunk` into a `ReadonlyArray`. If the provided `Chunk` is
 * non-empty (`NonEmptyChunk`), the function will return a
 * `NonEmptyReadonlyArray`, ensuring the non-empty property is preserved.
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const toReadonlyArray: <S extends Chunk<any>>(self: S) => S extends NonEmptyChunk<any> ? RA.NonEmptyReadonlyArray<Chunk.Infer<S>> : ReadonlyArray<Chunk.Infer<S>>;
/**
 * Reverses the order of elements in a `Chunk`.
 * Importantly, if the input chunk is a `NonEmptyChunk`, the reversed chunk will also be a `NonEmptyChunk`.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const chunk = Chunk.make(1, 2, 3)
 * const result = Chunk.reverse(chunk)
 *
 * console.log(result)
 * // { _id: 'Chunk', values: [ 3, 2, 1 ] }
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export declare const reverse: <S extends Chunk<any>>(self: S) => Chunk.With<S, Chunk.Infer<S>>;
/**
 * This function provides a safe way to read a value at a particular index from a `Chunk`.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const get: {
    /**
     * This function provides a safe way to read a value at a particular index from a `Chunk`.
     *
     * @category elements
     * @since 2.0.0
     */
    (index: number): <A>(self: Chunk<A>) => Option<A>;
    /**
     * This function provides a safe way to read a value at a particular index from a `Chunk`.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, index: number): Option<A>;
};
/**
 * Wraps an array into a chunk without copying, unsafe on mutable arrays
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeFromArray: <A>(self: ReadonlyArray<A>) => Chunk<A>;
/**
 * Wraps an array into a chunk without copying, unsafe on mutable arrays
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeFromNonEmptyArray: <A>(self: NonEmptyReadonlyArray<A>) => NonEmptyChunk<A>;
/**
 * Gets an element unsafely, will throw on out of bounds
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeGet: {
    /**
     * Gets an element unsafely, will throw on out of bounds
     *
     * @since 2.0.0
     * @category unsafe
     */
    (index: number): <A>(self: Chunk<A>) => A;
    /**
     * Gets an element unsafely, will throw on out of bounds
     *
     * @since 2.0.0
     * @category unsafe
     */
    <A>(self: Chunk<A>, index: number): A;
};
/**
 * Appends the specified element to the end of the `Chunk`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const append: {
    /**
     * Appends the specified element to the end of the `Chunk`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A2>(a: A2): <A>(self: Chunk<A>) => NonEmptyChunk<A2 | A>;
    /**
     * Appends the specified element to the end of the `Chunk`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, A2>(self: Chunk<A>, a: A2): NonEmptyChunk<A | A2>;
};
/**
 * Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prepend: {
    /**
     * Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(elem: B): <A>(self: Chunk<A>) => NonEmptyChunk<B | A>;
    /**
     * Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, elem: B): NonEmptyChunk<A | B>;
};
/**
 * Takes the first up to `n` elements from the chunk
 *
 * @since 2.0.0
 */
export declare const take: {
    /**
     * Takes the first up to `n` elements from the chunk
     *
     * @since 2.0.0
     */
    (n: number): <A>(self: Chunk<A>) => Chunk<A>;
    /**
     * Takes the first up to `n` elements from the chunk
     *
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, n: number): Chunk<A>;
};
/**
 * Drops the first up to `n` elements from the chunk
 *
 * @since 2.0.0
 */
export declare const drop: {
    /**
     * Drops the first up to `n` elements from the chunk
     *
     * @since 2.0.0
     */
    (n: number): <A>(self: Chunk<A>) => Chunk<A>;
    /**
     * Drops the first up to `n` elements from the chunk
     *
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, n: number): Chunk<A>;
};
/**
 * Drops the last `n` elements.
 *
 * @since 2.0.0
 */
export declare const dropRight: {
    /**
     * Drops the last `n` elements.
     *
     * @since 2.0.0
     */
    (n: number): <A>(self: Chunk<A>) => Chunk<A>;
    /**
     * Drops the last `n` elements.
     *
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, n: number): Chunk<A>;
};
/**
 * Drops all elements so long as the predicate returns true.
 *
 * @since 2.0.0
 */
export declare const dropWhile: {
    /**
     * Drops all elements so long as the predicate returns true.
     *
     * @since 2.0.0
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Chunk<A>;
    /**
     * Drops all elements so long as the predicate returns true.
     *
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A>;
};
/**
 * Prepends the specified prefix chunk to the beginning of the specified chunk.
 * If either chunk is non-empty, the result is also a non-empty chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
 *
 * console.log(result)
 * // [ "a", "b", 1, 2 ]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prependAll: {
    /**
     * Prepends the specified prefix chunk to the beginning of the specified chunk.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ "a", "b", 1, 2 ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <S extends Chunk<any>, T extends Chunk<any>>(that: T): (self: S) => Chunk.OrNonEmpty<S, T, Chunk.Infer<S> | Chunk.Infer<T>>;
    /**
     * Prepends the specified prefix chunk to the beginning of the specified chunk.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ "a", "b", 1, 2 ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, that: NonEmptyChunk<B>): NonEmptyChunk<A | B>;
    /**
     * Prepends the specified prefix chunk to the beginning of the specified chunk.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ "a", "b", 1, 2 ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyChunk<A>, that: Chunk<B>): NonEmptyChunk<A | B>;
    /**
     * Prepends the specified prefix chunk to the beginning of the specified chunk.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ "a", "b", 1, 2 ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A | B>;
};
/**
 * Concatenates two chunks, combining their elements.
 * If either chunk is non-empty, the result is also a non-empty chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
 *
 * console.log(result)
 * // [ 1, 2, "a", "b" ]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const appendAll: {
    /**
     * Concatenates two chunks, combining their elements.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ 1, 2, "a", "b" ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <S extends Chunk<any>, T extends Chunk<any>>(that: T): (self: S) => Chunk.OrNonEmpty<S, T, Chunk.Infer<S> | Chunk.Infer<T>>;
    /**
     * Concatenates two chunks, combining their elements.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ 1, 2, "a", "b" ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, that: NonEmptyChunk<B>): NonEmptyChunk<A | B>;
    /**
     * Concatenates two chunks, combining their elements.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ 1, 2, "a", "b" ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyChunk<A>, that: Chunk<B>): NonEmptyChunk<A | B>;
    /**
     * Concatenates two chunks, combining their elements.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ 1, 2, "a", "b" ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A | B>;
};
/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const filterMap: {
    /**
     * Returns a filtered and mapped subset of the elements.
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B>(f: (a: A, i: number) => Option<B>): (self: Chunk<A>) => Chunk<B>;
    /**
     * Returns a filtered and mapped subset of the elements.
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B>(self: Chunk<A>, f: (a: A, i: number) => Option<B>): Chunk<B>;
};
/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const filter: {
    /**
     * Returns a filtered and mapped subset of the elements.
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Chunk<B>;
    /**
     * Returns a filtered and mapped subset of the elements.
     *
     * @since 2.0.0
     * @category filtering
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Chunk<A>;
    /**
     * Returns a filtered and mapped subset of the elements.
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Chunk<B>;
    /**
     * Returns a filtered and mapped subset of the elements.
     *
     * @since 2.0.0
     * @category filtering
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A>;
};
/**
 * Transforms all elements of the chunk for as long as the specified function returns some value
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const filterMapWhile: {
    /**
     * Transforms all elements of the chunk for as long as the specified function returns some value
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B>(f: (a: A) => Option<B>): (self: Chunk<A>) => Chunk<B>;
    /**
     * Transforms all elements of the chunk for as long as the specified function returns some value
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, B>(self: Chunk<A>, f: (a: A) => Option<B>): Chunk<B>;
};
/**
 * Filter out optional values
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const compact: <A>(self: Chunk<Option<A>>) => Chunk<A>;
/**
 * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const flatMap: {
    /**
     * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <S extends Chunk<any>, T extends Chunk<any>>(f: (a: Chunk.Infer<S>, i: number) => T): (self: S) => Chunk.AndNonEmpty<S, T, Chunk.Infer<T>>;
    /**
     * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, B>(self: NonEmptyChunk<A>, f: (a: A, i: number) => NonEmptyChunk<B>): NonEmptyChunk<B>;
    /**
     * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, B>(self: Chunk<A>, f: (a: A, i: number) => Chunk<B>): Chunk<B>;
};
/**
 * Iterates over each element of a `Chunk` and applies a function to it.
 *
 * **Details**
 *
 * This function processes every element of the given `Chunk`, calling the
 * provided function `f` on each element. It does not return a new value;
 * instead, it is primarily used for side effects, such as logging or
 * accumulating data in an external variable.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const forEach: {
    /**
     * Iterates over each element of a `Chunk` and applies a function to it.
     *
     * **Details**
     *
     * This function processes every element of the given `Chunk`, calling the
     * provided function `f` on each element. It does not return a new value;
     * instead, it is primarily used for side effects, such as logging or
     * accumulating data in an external variable.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(f: (a: A, index: number) => B): (self: Chunk<A>) => void;
    /**
     * Iterates over each element of a `Chunk` and applies a function to it.
     *
     * **Details**
     *
     * This function processes every element of the given `Chunk`, calling the
     * provided function `f` on each element. It does not return a new value;
     * instead, it is primarily used for side effects, such as logging or
     * accumulating data in an external variable.
     *
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(self: Chunk<A>, f: (a: A, index: number) => B): void;
};
/**
 * Flattens a chunk of chunks into a single chunk by concatenating all chunks.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const flatten: <S extends Chunk<Chunk<any>>>(self: S) => Chunk.Flatten<S>;
/**
 * Groups elements in chunks of up to `n` elements.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const chunksOf: {
    /**
     * Groups elements in chunks of up to `n` elements.
     *
     * @since 2.0.0
     * @category elements
     */
    (n: number): <A>(self: Chunk<A>) => Chunk<Chunk<A>>;
    /**
     * Groups elements in chunks of up to `n` elements.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: Chunk<A>, n: number): Chunk<Chunk<A>>;
};
/**
 * Creates a Chunk of unique values that are included in all given Chunks.
 *
 * The order and references of result values are determined by the Chunk.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const intersection: {
    /**
     * Creates a Chunk of unique values that are included in all given Chunks.
     *
     * The order and references of result values are determined by the Chunk.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(that: Chunk<A>): <B>(self: Chunk<B>) => Chunk<A & B>;
    /**
     * Creates a Chunk of unique values that are included in all given Chunks.
     *
     * The order and references of result values are determined by the Chunk.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A & B>;
};
/**
 * Determines if the chunk is empty.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const isEmpty: <A>(self: Chunk<A>) => boolean;
/**
 * Determines if the chunk is not empty.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const isNonEmpty: <A>(self: Chunk<A>) => self is NonEmptyChunk<A>;
/**
 * Returns the first element of this chunk if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const head: <A>(self: Chunk<A>) => Option<A>;
/**
 * Returns the first element of this chunk.
 *
 * It will throw an error if the chunk is empty.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeHead: <A>(self: Chunk<A>) => A;
/**
 * Returns the first element of this non empty chunk.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const headNonEmpty: <A>(self: NonEmptyChunk<A>) => A;
/**
 * Returns the last element of this chunk if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const last: <A>(self: Chunk<A>) => Option<A>;
/**
 * Returns the last element of this chunk.
 *
 * It will throw an error if the chunk is empty.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeLast: <A>(self: Chunk<A>) => A;
/**
 * Returns the last element of this non empty chunk.
 *
 * @since 3.4.0
 * @category elements
 */
export declare const lastNonEmpty: <A>(self: NonEmptyChunk<A>) => A;
/**
 * @since 2.0.0
 */
export declare namespace Chunk {
    /**
     * @since 2.0.0
     */
    type Infer<S extends Chunk<any>> = S extends Chunk<infer A> ? A : never;
    /**
     * @since 2.0.0
     */
    type With<S extends Chunk<any>, A> = S extends NonEmptyChunk<any> ? NonEmptyChunk<A> : Chunk<A>;
    /**
     * @since 2.0.0
     */
    type OrNonEmpty<S extends Chunk<any>, T extends Chunk<any>, A> = S extends NonEmptyChunk<any> ? NonEmptyChunk<A> : T extends NonEmptyChunk<any> ? NonEmptyChunk<A> : Chunk<A>;
    /**
     * @since 2.0.0
     */
    type AndNonEmpty<S extends Chunk<any>, T extends Chunk<any>, A> = S extends NonEmptyChunk<any> ? T extends NonEmptyChunk<any> ? NonEmptyChunk<A> : Chunk<A> : Chunk<A>;
    /**
     * @since 2.0.0
     */
    type Flatten<T extends Chunk<Chunk<any>>> = T extends NonEmptyChunk<NonEmptyChunk<infer A>> ? NonEmptyChunk<A> : T extends Chunk<Chunk<infer A>> ? Chunk<A> : never;
}
/**
 * Transforms the elements of a chunk using the specified mapping function.
 * If the input chunk is non-empty, the resulting chunk will also be non-empty.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
 *
 * console.log(result)
 * // { _id: 'Chunk', values: [ 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * Transforms the elements of a chunk using the specified mapping function.
     * If the input chunk is non-empty, the resulting chunk will also be non-empty.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
     *
     * console.log(result)
     * // { _id: 'Chunk', values: [ 2, 3 ] }
     * ```
     *
     * @since 2.0.0
     * @category mapping
     */
    <S extends Chunk<any>, B>(f: (a: Chunk.Infer<S>, i: number) => B): (self: S) => Chunk.With<S, B>;
    /**
     * Transforms the elements of a chunk using the specified mapping function.
     * If the input chunk is non-empty, the resulting chunk will also be non-empty.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
     *
     * console.log(result)
     * // { _id: 'Chunk', values: [ 2, 3 ] }
     * ```
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, B>(self: NonEmptyChunk<A>, f: (a: A, i: number) => B): NonEmptyChunk<B>;
    /**
     * Transforms the elements of a chunk using the specified mapping function.
     * If the input chunk is non-empty, the resulting chunk will also be non-empty.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
     *
     * console.log(result)
     * // { _id: 'Chunk', values: [ 2, 3 ] }
     * ```
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, B>(self: Chunk<A>, f: (a: A, i: number) => B): Chunk<B>;
};
/**
 * Statefully maps over the chunk, producing new elements of type `B`.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const mapAccum: {
    /**
     * Statefully maps over the chunk, producing new elements of type `B`.
     *
     * @since 2.0.0
     * @category folding
     */
    <S, A, B>(s: S, f: (s: S, a: A) => readonly [S, B]): (self: Chunk<A>) => [S, Chunk<B>];
    /**
     * Statefully maps over the chunk, producing new elements of type `B`.
     *
     * @since 2.0.0
     * @category folding
     */
    <S, A, B>(self: Chunk<A>, s: S, f: (s: S, a: A) => readonly [S, B]): [S, Chunk<B>];
};
/**
 * Separate elements based on a predicate that also exposes the index of the element.
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const partition: {
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Chunk<A>) => [excluded: Chunk<Exclude<A, B>>, satisfying: Chunk<B>];
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * @category filtering
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Chunk<A>) => [excluded: Chunk<A>, satisfying: Chunk<A>];
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(self: Chunk<A>, refinement: (a: A, i: number) => a is B): [excluded: Chunk<Exclude<A, B>>, satisfying: Chunk<B>];
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * @category filtering
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: (a: A, i: number) => boolean): [excluded: Chunk<A>, satisfying: Chunk<A>];
};
/**
 * Partitions the elements of this chunk into two chunks using f.
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const partitionMap: {
    /**
     * Partitions the elements of this chunk into two chunks using f.
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B, C>(f: (a: A) => Either<C, B>): (self: Chunk<A>) => [left: Chunk<B>, right: Chunk<C>];
    /**
     * Partitions the elements of this chunk into two chunks using f.
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B, C>(self: Chunk<A>, f: (a: A) => Either<C, B>): [left: Chunk<B>, right: Chunk<C>];
};
/**
 * Partitions the elements of this chunk into two chunks.
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const separate: <A, B>(self: Chunk<Either<B, A>>) => [Chunk<A>, Chunk<B>];
/**
 * Retireves the size of the chunk
 *
 * @since 2.0.0
 * @category elements
 */
export declare const size: <A>(self: Chunk<A>) => number;
/**
 * Sort the elements of a Chunk in increasing order, creating a new Chunk.
 *
 * @since 2.0.0
 * @category sorting
 */
export declare const sort: {
    /**
     * Sort the elements of a Chunk in increasing order, creating a new Chunk.
     *
     * @since 2.0.0
     * @category sorting
     */
    <B>(O: Order.Order<B>): <A extends B>(self: Chunk<A>) => Chunk<A>;
    /**
     * Sort the elements of a Chunk in increasing order, creating a new Chunk.
     *
     * @since 2.0.0
     * @category sorting
     */
    <A extends B, B>(self: Chunk<A>, O: Order.Order<B>): Chunk<A>;
};
/**
 * @since 2.0.0
 * @category sorting
 */
export declare const sortWith: {
    /**
     * @since 2.0.0
     * @category sorting
     */
    <A, B>(f: (a: A) => B, order: Order.Order<B>): (self: Chunk<A>) => Chunk<A>;
    /**
     * @since 2.0.0
     * @category sorting
     */
    <A, B>(self: Chunk<A>, f: (a: A) => B, order: Order.Order<B>): Chunk<A>;
};
/**
 *  Returns two splits of this chunk at the specified index.
 *
 * @since 2.0.0
 * @category splitting
 */
export declare const splitAt: {
    /**
     *  Returns two splits of this chunk at the specified index.
     *
     * @since 2.0.0
     * @category splitting
     */
    (n: number): <A>(self: Chunk<A>) => [beforeIndex: Chunk<A>, fromIndex: Chunk<A>];
    /**
     *  Returns two splits of this chunk at the specified index.
     *
     * @since 2.0.0
     * @category splitting
     */
    <A>(self: Chunk<A>, n: number): [beforeIndex: Chunk<A>, fromIndex: Chunk<A>];
};
/**
 * Splits a `NonEmptyChunk` into two segments, with the first segment containing a maximum of `n` elements.
 * The value of `n` must be `>= 1`.
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const splitNonEmptyAt: {
    /**
     * Splits a `NonEmptyChunk` into two segments, with the first segment containing a maximum of `n` elements.
     * The value of `n` must be `>= 1`.
     *
     * @category splitting
     * @since 2.0.0
     */
    (n: number): <A>(self: NonEmptyChunk<A>) => [beforeIndex: NonEmptyChunk<A>, fromIndex: Chunk<A>];
    /**
     * Splits a `NonEmptyChunk` into two segments, with the first segment containing a maximum of `n` elements.
     * The value of `n` must be `>= 1`.
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: NonEmptyChunk<A>, n: number): [beforeIndex: NonEmptyChunk<A>, fromIndex: Chunk<A>];
};
/**
 * Splits this chunk into `n` equally sized chunks.
 *
 * @since 2.0.0
 * @category splitting
 */
export declare const split: {
    /**
     * Splits this chunk into `n` equally sized chunks.
     *
     * @since 2.0.0
     * @category splitting
     */
    (n: number): <A>(self: Chunk<A>) => Chunk<Chunk<A>>;
    /**
     * Splits this chunk into `n` equally sized chunks.
     *
     * @since 2.0.0
     * @category splitting
     */
    <A>(self: Chunk<A>, n: number): Chunk<Chunk<A>>;
};
/**
 * Splits this chunk on the first element that matches this predicate.
 * Returns a tuple containing two chunks: the first one is before the match, and the second one is from the match onward.
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const splitWhere: {
    /**
     * Splits this chunk on the first element that matches this predicate.
     * Returns a tuple containing two chunks: the first one is before the match, and the second one is from the match onward.
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => [beforeMatch: Chunk<A>, fromMatch: Chunk<A>];
    /**
     * Splits this chunk on the first element that matches this predicate.
     * Returns a tuple containing two chunks: the first one is before the match, and the second one is from the match onward.
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): [beforeMatch: Chunk<A>, fromMatch: Chunk<A>];
};
/**
 * Returns every elements after the first.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const tail: <A>(self: Chunk<A>) => Option<Chunk<A>>;
/**
 * Returns every elements after the first.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const tailNonEmpty: <A>(self: NonEmptyChunk<A>) => Chunk<A>;
/**
 * Takes the last `n` elements.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const takeRight: {
    /**
     * Takes the last `n` elements.
     *
     * @since 2.0.0
     * @category elements
     */
    (n: number): <A>(self: Chunk<A>) => Chunk<A>;
    /**
     * Takes the last `n` elements.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: Chunk<A>, n: number): Chunk<A>;
};
/**
 * Takes all elements so long as the predicate returns true.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const takeWhile: {
    /**
     * Takes all elements so long as the predicate returns true.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Chunk<B>;
    /**
     * Takes all elements so long as the predicate returns true.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Chunk<A>;
    /**
     * Takes all elements so long as the predicate returns true.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Chunk<B>;
    /**
     * Takes all elements so long as the predicate returns true.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A>;
};
/**
 * Creates a Chunks of unique values, in order, from all given Chunks.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const union: {
    /**
     * Creates a Chunks of unique values, in order, from all given Chunks.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(that: Chunk<A>): <B>(self: Chunk<B>) => Chunk<A | B>;
    /**
     * Creates a Chunks of unique values, in order, from all given Chunks.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A | B>;
};
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const dedupe: <A>(self: Chunk<A>) => Chunk<A>;
/**
 * Deduplicates adjacent elements that are identical.
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const dedupeAdjacent: <A>(self: Chunk<A>) => Chunk<A>;
/**
 * Takes a `Chunk` of pairs and return two corresponding `Chunk`s.
 *
 * Note: The function is reverse of `zip`.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const unzip: <A, B>(self: Chunk<readonly [A, B]>) => [Chunk<A>, Chunk<B>];
/**
 * Zips this chunk pointwise with the specified chunk using the specified combiner.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipWith: {
    /**
     * Zips this chunk pointwise with the specified chunk using the specified combiner.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, B, C>(that: Chunk<B>, f: (a: A, b: B) => C): (self: Chunk<A>) => Chunk<C>;
    /**
     * Zips this chunk pointwise with the specified chunk using the specified combiner.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, B, C>(self: Chunk<A>, that: Chunk<B>, f: (a: A, b: B) => C): Chunk<C>;
};
/**
 * Zips this chunk pointwise with the specified chunk.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zip: {
    /**
     * Zips this chunk pointwise with the specified chunk.
     *
     * @since 2.0.0
     * @category zipping
     */
    <B>(that: Chunk<B>): <A>(self: Chunk<A>) => Chunk<[A, B]>;
    /**
     * Zips this chunk pointwise with the specified chunk.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<[A, B]>;
};
/**
 * Delete the element at the specified index, creating a new `Chunk`.
 *
 * @since 2.0.0
 */
export declare const remove: {
    /**
     * Delete the element at the specified index, creating a new `Chunk`.
     *
     * @since 2.0.0
     */
    (i: number): <A>(self: Chunk<A>) => Chunk<A>;
    /**
     * Delete the element at the specified index, creating a new `Chunk`.
     *
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, i: number): Chunk<A>;
};
/**
 * @since 3.16.0
 */
export declare const removeOption: {
    /**
     * @since 3.16.0
     */
    (i: number): <A>(self: Chunk<A>) => Option<Chunk<A>>;
    /**
     * @since 3.16.0
     */
    <A>(self: Chunk<A>, i: number): Option<Chunk<A>>;
};
/**
 * @since 2.0.0
 */
export declare const modifyOption: {
    /**
     * @since 2.0.0
     */
    <A, B>(i: number, f: (a: A) => B): (self: Chunk<A>) => Option<Chunk<A | B>>;
    /**
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, i: number, f: (a: A) => B): Option<Chunk<A | B>>;
};
/**
 * Apply a function to the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @since 2.0.0
 */
export declare const modify: {
    /**
     * Apply a function to the element at the specified index, creating a new `Chunk`,
     * or returning the input if the index is out of bounds.
     *
     * @since 2.0.0
     */
    <A, B>(i: number, f: (a: A) => B): (self: Chunk<A>) => Chunk<A | B>;
    /**
     * Apply a function to the element at the specified index, creating a new `Chunk`,
     * or returning the input if the index is out of bounds.
     *
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, i: number, f: (a: A) => B): Chunk<A | B>;
};
/**
 * Change the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @since 2.0.0
 */
export declare const replace: {
    /**
     * Change the element at the specified index, creating a new `Chunk`,
     * or returning the input if the index is out of bounds.
     *
     * @since 2.0.0
     */
    <B>(i: number, b: B): <A>(self: Chunk<A>) => Chunk<B | A>;
    /**
     * Change the element at the specified index, creating a new `Chunk`,
     * or returning the input if the index is out of bounds.
     *
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, i: number, b: B): Chunk<B | A>;
};
/**
 * @since 2.0.0
 */
export declare const replaceOption: {
    /**
     * @since 2.0.0
     */
    <B>(i: number, b: B): <A>(self: Chunk<A>) => Option<Chunk<B | A>>;
    /**
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, i: number, b: B): Option<Chunk<B | A>>;
};
/**
 * Return a Chunk of length n with element i initialized with f(i).
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const makeBy: {
    /**
     * Return a Chunk of length n with element i initialized with f(i).
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * @category constructors
     * @since 2.0.0
     */
    <A>(f: (i: number) => A): (n: number) => NonEmptyChunk<A>;
    /**
     * Return a Chunk of length n with element i initialized with f(i).
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * @category constructors
     * @since 2.0.0
     */
    <A>(n: number, f: (i: number) => A): NonEmptyChunk<A>;
};
/**
 * Create a non empty `Chunk` containing a range of integers, including both endpoints.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const range: (start: number, end: number) => NonEmptyChunk<number>;
/**
 * Returns a function that checks if a `Chunk` contains a given value using the default `Equivalence`.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const contains: {
    /**
     * Returns a function that checks if a `Chunk` contains a given value using the default `Equivalence`.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(a: A): (self: Chunk<A>) => boolean;
    /**
     * Returns a function that checks if a `Chunk` contains a given value using the default `Equivalence`.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, a: A): boolean;
};
/**
 * Returns a function that checks if a `Chunk` contains a given value using a provided `isEquivalent` function.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const containsWith: <A>(isEquivalent: (self: A, that: A) => boolean) => {
    (a: A): (self: Chunk<A>) => boolean;
    (self: Chunk<A>, a: A): boolean;
};
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
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Option<A>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): Option<A>;
};
/**
 * Return the first index for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findFirstIndex: {
    /**
     * Return the first index for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: Predicate<A>): (self: Chunk<A>) => Option<number>;
    /**
     * Return the first index for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): Option<number>;
};
/**
 * Find the last element for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findLast: {
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Option<B>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Option<A>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Option<B>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): Option<A>;
};
/**
 * Return the last index for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findLastIndex: {
    /**
     * Return the last index for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: Predicate<A>): (self: Chunk<A>) => Option<number>;
    /**
     * Return the last index for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): Option<number>;
};
/**
 * Check if a predicate holds true for every `Chunk` element.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const every: {
    /**
     * Check if a predicate holds true for every `Chunk` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => self is Chunk<B>;
    /**
     * Check if a predicate holds true for every `Chunk` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: Predicate<A>): (self: Chunk<A>) => boolean;
    /**
     * Check if a predicate holds true for every `Chunk` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): self is Chunk<B>;
    /**
     * Check if a predicate holds true for every `Chunk` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): boolean;
};
/**
 * Check if a predicate holds true for some `Chunk` element.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const some: {
    /**
     * Check if a predicate holds true for some `Chunk` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => self is NonEmptyChunk<A>;
    /**
     * Check if a predicate holds true for some `Chunk` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Chunk<A>, predicate: Predicate<A>): self is NonEmptyChunk<A>;
};
/**
 * Joins the elements together with "sep" in the middle.
 *
 * @category folding
 * @since 2.0.0
 */
export declare const join: {
    /**
     * Joins the elements together with "sep" in the middle.
     *
     * @category folding
     * @since 2.0.0
     */
    (sep: string): (self: Chunk<string>) => string;
    /**
     * Joins the elements together with "sep" in the middle.
     *
     * @category folding
     * @since 2.0.0
     */
    (self: Chunk<string>, sep: string): string;
};
/**
 * @category folding
 * @since 2.0.0
 */
export declare const reduce: {
    /**
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A, i: number) => B): (self: Chunk<A>) => B;
    /**
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, b: B, f: (b: B, a: A, i: number) => B): B;
};
/**
 * @category folding
 * @since 2.0.0
 */
export declare const reduceRight: {
    /**
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A, i: number) => B): (self: Chunk<A>) => B;
    /**
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Chunk<A>, b: B, f: (b: B, a: A, i: number) => B): B;
};
/**
 * Creates a `Chunk` of values not included in the other given `Chunk` using the provided `isEquivalent` function.
 * The order and references of result values are determined by the first `Chunk`.
 *
 * @since 3.2.0
 */
export declare const differenceWith: <A>(isEquivalent: (self: A, that: A) => boolean) => {
    (that: Chunk<A>): (self: Chunk<A>) => Chunk<A>;
    (self: Chunk<A>, that: Chunk<A>): Chunk<A>;
};
/**
 * Creates a `Chunk` of values not included in the other given `Chunk`.
 * The order and references of result values are determined by the first `Chunk`.
 *
 * @since 3.2.0
 */
export declare const difference: {
    /**
     * Creates a `Chunk` of values not included in the other given `Chunk`.
     * The order and references of result values are determined by the first `Chunk`.
     *
     * @since 3.2.0
     */
    <A>(that: Chunk<A>): (self: Chunk<A>) => Chunk<A>;
    /**
     * Creates a `Chunk` of values not included in the other given `Chunk`.
     * The order and references of result values are determined by the first `Chunk`.
     *
     * @since 3.2.0
     */
    <A>(self: Chunk<A>, that: Chunk<A>): Chunk<A>;
};
export {};
//# sourceMappingURL=Chunk.d.ts.map