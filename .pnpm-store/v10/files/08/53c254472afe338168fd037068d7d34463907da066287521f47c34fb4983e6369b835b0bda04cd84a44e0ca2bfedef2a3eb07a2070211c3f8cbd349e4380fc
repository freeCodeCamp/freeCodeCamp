import type * as Option from "./Option.js";
import type * as Order from "./Order.js";
import type { Predicate } from "./Predicate.js";
import type * as STM from "./STM.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TArrayTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TArrayTypeId = typeof TArrayTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface TArray<in out A> extends TArray.Variance<A> {
}
/**
 * @since 2.0.0
 */
export declare namespace TArray {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in out A> {
        readonly [TArrayTypeId]: {
            readonly _A: Types.Invariant<A>;
        };
    }
}
/**
 * Finds the result of applying a partial function to the first value in its
 * domain.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const collectFirst: {
    /**
     * Finds the result of applying a partial function to the first value in its
     * domain.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(pf: (a: A) => Option.Option<B>): (self: TArray<A>) => STM.STM<Option.Option<B>>;
    /**
     * Finds the result of applying a partial function to the first value in its
     * domain.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(self: TArray<A>, pf: (a: A) => Option.Option<B>): STM.STM<Option.Option<B>>;
};
/**
 * Finds the result of applying an transactional partial function to the first
 * value in its domain.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const collectFirstSTM: {
    /**
     * Finds the result of applying an transactional partial function to the first
     * value in its domain.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B, E, R>(pf: (a: A) => Option.Option<STM.STM<B, E, R>>): (self: TArray<A>) => STM.STM<Option.Option<B>, E, R>;
    /**
     * Finds the result of applying an transactional partial function to the first
     * value in its domain.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B, E, R>(self: TArray<A>, pf: (a: A) => Option.Option<STM.STM<B, E, R>>): STM.STM<Option.Option<B>, E, R>;
};
/**
 * Determine if the array contains a specified value.
 *
 * @macro trace
 * @since 2.0.0
 * @category elements
 */
export declare const contains: {
    /**
     * Determine if the array contains a specified value.
     *
     * @macro trace
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A): (self: TArray<A>) => STM.STM<boolean>;
    /**
     * Determine if the array contains a specified value.
     *
     * @macro trace
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, value: A): STM.STM<boolean>;
};
/**
 * Count the values in the array matching a predicate.
 *
 * @macro trace
 * @since 2.0.0
 * @category folding
 */
export declare const count: {
    /**
     * Count the values in the array matching a predicate.
     *
     * @macro trace
     * @since 2.0.0
     * @category folding
     */
    <A>(predicate: Predicate<A>): (self: TArray<A>) => STM.STM<number>;
    /**
     * Count the values in the array matching a predicate.
     *
     * @macro trace
     * @since 2.0.0
     * @category folding
     */
    <A>(self: TArray<A>, predicate: Predicate<A>): STM.STM<number>;
};
/**
 * Count the values in the array matching a transactional predicate.
 *
 * @macro trace
 * @since 2.0.0
 * @category folding
 */
export declare const countSTM: {
    /**
     * Count the values in the array matching a transactional predicate.
     *
     * @macro trace
     * @since 2.0.0
     * @category folding
     */
    <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>): (self: TArray<A>) => STM.STM<number, E, R>;
    /**
     * Count the values in the array matching a transactional predicate.
     *
     * @macro trace
     * @since 2.0.0
     * @category folding
     */
    <A, R, E>(self: TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>): STM.STM<number, E, R>;
};
/**
 * Makes an empty `TArray`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <A>() => STM.STM<TArray<A>>;
/**
 * Atomically evaluate the conjunction of a predicate across the members of
 * the array.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const every: {
    /**
     * Atomically evaluate the conjunction of a predicate across the members of
     * the array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: TArray<A>) => STM.STM<boolean>;
    /**
     * Atomically evaluate the conjunction of a predicate across the members of
     * the array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, predicate: Predicate<A>): STM.STM<boolean>;
};
/**
 * Atomically evaluate the conjunction of a transactional predicate across the
 * members of the array.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const everySTM: {
    /**
     * Atomically evaluate the conjunction of a transactional predicate across the
     * members of the array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>): (self: TArray<A>) => STM.STM<boolean, E, R>;
    /**
     * Atomically evaluate the conjunction of a transactional predicate across the
     * members of the array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>): STM.STM<boolean, E, R>;
};
/**
 * Find the first element in the array matching the specified predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirst: {
    /**
     * Find the first element in the array matching the specified predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: TArray<A>) => STM.STM<Option.Option<A>>;
    /**
     * Find the first element in the array matching the specified predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, predicate: Predicate<A>): STM.STM<Option.Option<A>>;
};
/**
 * Get the first index of a specific value in the array.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirstIndex: {
    /**
     * Get the first index of a specific value in the array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A): (self: TArray<A>) => STM.STM<Option.Option<number>>;
    /**
     * Get the first index of a specific value in the array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, value: A): STM.STM<Option.Option<number>>;
};
/**
 * Get the first index of a specific value in the array starting from the
 * specified index.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirstIndexFrom: {
    /**
     * Get the first index of a specific value in the array starting from the
     * specified index.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A, from: number): (self: TArray<A>) => STM.STM<Option.Option<number>>;
    /**
     * Get the first index of a specific value in the array starting from the
     * specified index.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, value: A, from: number): STM.STM<Option.Option<number>>;
};
/**
 * Get the index of the first entry in the array matching a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirstIndexWhere: {
    /**
     * Get the index of the first entry in the array matching a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: TArray<A>) => STM.STM<Option.Option<number>>;
    /**
     * Get the index of the first entry in the array matching a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, predicate: Predicate<A>): STM.STM<Option.Option<number>>;
};
/**
 * Get the index of the first entry in the array starting from the specified
 * index, matching a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirstIndexWhereFrom: {
    /**
     * Get the index of the first entry in the array starting from the specified
     * index, matching a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>, from: number): (self: TArray<A>) => STM.STM<Option.Option<number>>;
    /**
     * Get the index of the first entry in the array starting from the specified
     * index, matching a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, predicate: Predicate<A>, from: number): STM.STM<Option.Option<number>>;
};
/**
 * Get the index of the next entry that matches a transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirstIndexWhereSTM: {
    /**
     * Get the index of the next entry that matches a transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>): (self: TArray<A>) => STM.STM<Option.Option<number>, E, R>;
    /**
     * Get the index of the next entry that matches a transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>): STM.STM<Option.Option<number>, E, R>;
};
/**
 * Starting at specified index, get the index of the next entry that matches a
 * transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirstIndexWhereFromSTM: {
    /**
     * Starting at specified index, get the index of the next entry that matches a
     * transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>, from: number): (self: TArray<A>) => STM.STM<Option.Option<number>, E, R>;
    /**
     * Starting at specified index, get the index of the next entry that matches a
     * transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>, from: number): STM.STM<Option.Option<number>, E, R>;
};
/**
 * Find the first element in the array matching a transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findFirstSTM: {
    /**
     * Find the first element in the array matching a transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>): (self: TArray<A>) => STM.STM<Option.Option<A>, E, R>;
    /**
     * Find the first element in the array matching a transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>): STM.STM<Option.Option<A>, E, R>;
};
/**
 * Find the last element in the array matching a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findLast: {
    /**
     * Find the last element in the array matching a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: TArray<A>) => STM.STM<Option.Option<A>>;
    /**
     * Find the last element in the array matching a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, predicate: Predicate<A>): STM.STM<Option.Option<A>>;
};
/**
 * Get the last index of a specific value in the array bounded above by a
 * specific index.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findLastIndex: {
    /**
     * Get the last index of a specific value in the array bounded above by a
     * specific index.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A): (self: TArray<A>) => STM.STM<Option.Option<number>>;
    /**
     * Get the last index of a specific value in the array bounded above by a
     * specific index.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, value: A): STM.STM<Option.Option<number>>;
};
/**
 * Get the last index of a specific value in the array bounded above by a
 * specific index.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findLastIndexFrom: {
    /**
     * Get the last index of a specific value in the array bounded above by a
     * specific index.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A, end: number): (self: TArray<A>) => STM.STM<Option.Option<number>>;
    /**
     * Get the last index of a specific value in the array bounded above by a
     * specific index.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, value: A, end: number): STM.STM<Option.Option<number>>;
};
/**
 * Find the last element in the array matching a transactional predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findLastSTM: {
    /**
     * Find the last element in the array matching a transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>): (self: TArray<A>) => STM.STM<Option.Option<A>, E, R>;
    /**
     * Find the last element in the array matching a transactional predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>): STM.STM<Option.Option<A>, E, R>;
};
/**
 * Atomically performs transactional effect for each item in array.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const forEach: {
    /**
     * Atomically performs transactional effect for each item in array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(f: (value: A) => STM.STM<void, E, R>): (self: TArray<A>) => STM.STM<void, E, R>;
    /**
     * Atomically performs transactional effect for each item in array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, f: (value: A) => STM.STM<void, E, R>): STM.STM<void, E, R>;
};
/**
 * Creates a new `TArray` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: <A>(iterable: Iterable<A>) => STM.STM<TArray<A>>;
/**
 * Extracts value from ref in array.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const get: {
    /**
     * Extracts value from ref in array.
     *
     * @since 2.0.0
     * @category elements
     */
    (index: number): <A>(self: TArray<A>) => STM.STM<A>;
    /**
     * Extracts value from ref in array.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, index: number): STM.STM<A>;
};
/**
 * The first entry of the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const headOption: <A>(self: TArray<A>) => STM.STM<Option.Option<A>>;
/**
 * The last entry in the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const lastOption: <A>(self: TArray<A>) => STM.STM<Option.Option<A>>;
/**
 * Makes a new `TArray` that is initialized with specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <Elements extends [any, ...Array<any>]>(...elements: Elements) => STM.STM<TArray<Elements[number]>>;
/**
 * Atomically compute the greatest element in the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const maxOption: {
    /**
     * Atomically compute the greatest element in the array, if it exists.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(order: Order.Order<A>): (self: TArray<A>) => STM.STM<Option.Option<A>>;
    /**
     * Atomically compute the greatest element in the array, if it exists.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, order: Order.Order<A>): STM.STM<Option.Option<A>>;
};
/**
 * Atomically compute the least element in the array, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const minOption: {
    /**
     * Atomically compute the least element in the array, if it exists.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(order: Order.Order<A>): (self: TArray<A>) => STM.STM<Option.Option<A>>;
    /**
     * Atomically compute the least element in the array, if it exists.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, order: Order.Order<A>): STM.STM<Option.Option<A>>;
};
/**
 * Atomically folds using a pure function.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const reduce: {
    /**
     * Atomically folds using a pure function.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, A>(zero: Z, f: (accumulator: Z, current: A) => Z): (self: TArray<A>) => STM.STM<Z>;
    /**
     * Atomically folds using a pure function.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, A>(self: TArray<A>, zero: Z, f: (accumulator: Z, current: A) => Z): STM.STM<Z>;
};
/**
 * Atomically reduce the array, if non-empty, by a binary operator.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const reduceOption: {
    /**
     * Atomically reduce the array, if non-empty, by a binary operator.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(f: (x: A, y: A) => A): (self: TArray<A>) => STM.STM<Option.Option<A>>;
    /**
     * Atomically reduce the array, if non-empty, by a binary operator.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, f: (x: A, y: A) => A): STM.STM<Option.Option<A>>;
};
/**
 * Atomically reduce the non-empty array using a transactional binary
 * operator.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const reduceOptionSTM: {
    /**
     * Atomically reduce the non-empty array using a transactional binary
     * operator.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(f: (x: A, y: A) => STM.STM<A, E, R>): (self: TArray<A>) => STM.STM<Option.Option<A>, E, R>;
    /**
     * Atomically reduce the non-empty array using a transactional binary
     * operator.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, f: (x: A, y: A) => STM.STM<A, E, R>): STM.STM<Option.Option<A>, E, R>;
};
/**
 * Atomically folds using a transactional function.
 *
 * @macro trace
 * @since 2.0.0
 * @category folding
 */
export declare const reduceSTM: {
    /**
     * Atomically folds using a transactional function.
     *
     * @macro trace
     * @since 2.0.0
     * @category folding
     */
    <Z, A, R, E>(zero: Z, f: (accumulator: Z, current: A) => STM.STM<Z, E, R>): (self: TArray<A>) => STM.STM<Z, E, R>;
    /**
     * Atomically folds using a transactional function.
     *
     * @macro trace
     * @since 2.0.0
     * @category folding
     */
    <Z, A, R, E>(self: TArray<A>, zero: Z, f: (accumulator: Z, current: A) => STM.STM<Z, E, R>): STM.STM<Z, E, R>;
};
/**
 * Returns the size of the `TArray`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <A>(self: TArray<A>) => number;
/**
 * Determine if the array contains a value satisfying a predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const some: {
    /**
     * Determine if the array contains a value satisfying a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: TArray<A>) => STM.STM<boolean>;
    /**
     * Determine if the array contains a value satisfying a predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, predicate: Predicate<A>): STM.STM<boolean>;
};
/**
 * Determine if the array contains a value satisfying a transactional
 * predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const someSTM: {
    /**
     * Determine if the array contains a value satisfying a transactional
     * predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(predicate: (value: A) => STM.STM<boolean, E, R>): (self: TArray<A>) => STM.STM<boolean, E, R>;
    /**
     * Determine if the array contains a value satisfying a transactional
     * predicate.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, predicate: (value: A) => STM.STM<boolean, E, R>): STM.STM<boolean, E, R>;
};
/**
 * Collects all elements into a chunk.
 *
 * @since 2.0.0
 * @since 2.0.0
 * @category destructors
 */
export declare const toArray: <A>(self: TArray<A>) => STM.STM<Array<A>>;
/**
 * Atomically updates all elements using a pure function.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const transform: {
    /**
     * Atomically updates all elements using a pure function.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(f: (value: A) => A): (self: TArray<A>) => STM.STM<void>;
    /**
     * Atomically updates all elements using a pure function.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, f: (value: A) => A): STM.STM<void>;
};
/**
 * Atomically updates all elements using a transactional effect.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const transformSTM: {
    /**
     * Atomically updates all elements using a transactional effect.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(f: (value: A) => STM.STM<A, E, R>): (self: TArray<A>) => STM.STM<void, E, R>;
    /**
     * Atomically updates all elements using a transactional effect.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, f: (value: A) => STM.STM<A, E, R>): STM.STM<void, E, R>;
};
/**
 * Updates element in the array with given function.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const update: {
    /**
     * Updates element in the array with given function.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(index: number, f: (value: A) => A): (self: TArray<A>) => STM.STM<void>;
    /**
     * Updates element in the array with given function.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: TArray<A>, index: number, f: (value: A) => A): STM.STM<void>;
};
/**
 * Atomically updates element in the array with given transactional effect.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const updateSTM: {
    /**
     * Atomically updates element in the array with given transactional effect.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(index: number, f: (value: A) => STM.STM<A, E, R>): (self: TArray<A>) => STM.STM<void, E, R>;
    /**
     * Atomically updates element in the array with given transactional effect.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, R, E>(self: TArray<A>, index: number, f: (value: A) => STM.STM<A, E, R>): STM.STM<void, E, R>;
};
//# sourceMappingURL=TArray.d.ts.map