import type { Inspectable } from "./Inspectable.js";
import type { Pipeable } from "./Pipeable.js";
declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category model
 */
export interface MutableList<out A> extends Iterable<A>, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
}
/**
 * Creates an empty `MutableList`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <A = never>() => MutableList<A>;
/**
 * Creates a new `MutableList` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: <A>(iterable: Iterable<A>) => MutableList<A>;
/**
 * Creates a new `MutableList` from the specified elements.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A>(...elements: ReadonlyArray<A>) => MutableList<A>;
/**
 * Returns `true` if the list contains zero elements, `false`, otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isEmpty: <A>(self: MutableList<A>) => boolean;
/**
 * Returns the length of the list.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const length: <A>(self: MutableList<A>) => number;
/**
 * Returns the last element of the list, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const tail: <A>(self: MutableList<A>) => A | undefined;
/**
 * Returns the first element of the list, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const head: <A>(self: MutableList<A>) => A | undefined;
/**
 * Executes the specified function `f` for each element in the list.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const forEach: {
    /**
     * Executes the specified function `f` for each element in the list.
     *
     * @since 2.0.0
     * @category traversing
     */
    <A>(f: (element: A) => void): (self: MutableList<A>) => void;
    /**
     * Executes the specified function `f` for each element in the list.
     *
     * @since 2.0.0
     * @category traversing
     */
    <A>(self: MutableList<A>, f: (element: A) => void): void;
};
/**
 * Removes all elements from the doubly-linked list.
 *
 * @since 2.0.0
 */
export declare const reset: <A>(self: MutableList<A>) => MutableList<A>;
/**
 * Appends the specified element to the end of the `MutableList`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const append: {
    /**
     * Appends the specified element to the end of the `MutableList`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A>(value: A): (self: MutableList<A>) => MutableList<A>;
    /**
     * Appends the specified element to the end of the `MutableList`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A>(self: MutableList<A>, value: A): MutableList<A>;
};
/**
 * Removes the first value from the list and returns it, if it exists.
 *
 * @since 0.0.1
 */
export declare const shift: <A>(self: MutableList<A>) => A | undefined;
/**
 * Removes the last value from the list and returns it, if it exists.
 *
 * @since 0.0.1
 */
export declare const pop: <A>(self: MutableList<A>) => A | undefined;
/**
 * Prepends the specified value to the beginning of the list.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prepend: {
    /**
     * Prepends the specified value to the beginning of the list.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A>(value: A): (self: MutableList<A>) => MutableList<A>;
    /**
     * Prepends the specified value to the beginning of the list.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A>(self: MutableList<A>, value: A): MutableList<A>;
};
export {};
//# sourceMappingURL=MutableList.d.ts.map