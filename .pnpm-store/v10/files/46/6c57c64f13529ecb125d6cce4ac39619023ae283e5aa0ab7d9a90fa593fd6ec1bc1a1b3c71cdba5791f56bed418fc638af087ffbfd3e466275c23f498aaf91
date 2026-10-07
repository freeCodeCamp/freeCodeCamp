/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js";
import type * as Equivalence from "./Equivalence.js";
import type { Inspectable } from "./Inspectable.js";
import type { Order } from "./Order.js";
import type { Pipeable } from "./Pipeable.js";
import type { Predicate } from "./Predicate.js";
import type { Invariant, NoInfer } from "./Types.js";
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
export interface SortedSet<in out A> extends Iterable<A>, Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: {
        readonly _A: Invariant<A>;
    };
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isSortedSet: {
    /**
     * @since 2.0.0
     * @category refinements
     */
    <A>(u: Iterable<A>): u is SortedSet<A>;
    /**
     * @since 2.0.0
     * @category refinements
     */
    (u: unknown): u is SortedSet<unknown>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <A>(O: Order<A>) => SortedSet<A>;
/**
 * Creates a new `SortedSet` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: {
    /**
     * Creates a new `SortedSet` from an iterable collection of values.
     *
     * @since 2.0.0
     * @category constructors
     */
    <B>(ord: Order<B>): <A extends B>(iterable: Iterable<A>) => SortedSet<A>;
    /**
     * Creates a new `SortedSet` from an iterable collection of values.
     *
     * @since 2.0.0
     * @category constructors
     */
    <A extends B, B>(iterable: Iterable<A>, ord: Order<B>): SortedSet<A>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <K>(ord: Order<K>) => <Entries extends ReadonlyArray<K>>(...entries: Entries) => SortedSet<Entries[number]>;
/**
 * @since 2.0.0
 * @category elements
 */
export declare const add: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A): (self: SortedSet<A>) => SortedSet<A>;
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(self: SortedSet<A>, value: A): SortedSet<A>;
};
/**
 * @since 2.0.0
 */
export declare const difference: {
    /**
     * @since 2.0.0
     */
    <A, B extends A>(that: Iterable<B>): (self: SortedSet<A>) => SortedSet<A>;
    /**
     * @since 2.0.0
     */
    <A, B extends A>(self: SortedSet<A>, that: Iterable<B>): SortedSet<A>;
};
/**
 * Check if a predicate holds true for every `SortedSet` element.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const every: {
    /**
     * Check if a predicate holds true for every `SortedSet` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: SortedSet<A>) => boolean;
    /**
     * Check if a predicate holds true for every `SortedSet` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: SortedSet<A>, predicate: Predicate<A>): boolean;
};
/**
 * @since 2.0.0
 * @category filtering
 */
export declare const filter: {
    /**
     * @since 2.0.0
     * @category filtering
     */
    <A, B extends A>(predicate: Predicate<B>): (self: SortedSet<A>) => SortedSet<A>;
    /**
     * @since 2.0.0
     * @category filtering
     */
    <A>(self: SortedSet<A>, predicate: Predicate<A>): SortedSet<A>;
};
/**
 * @since 2.0.0
 * @category sequencing
 */
export declare const flatMap: {
    /**
     * @since 2.0.0
     * @category sequencing
     */
    <B, A>(O: Order<B>, f: (a: A) => Iterable<B>): (self: SortedSet<A>) => SortedSet<B>;
    /**
     * @since 2.0.0
     * @category sequencing
     */
    <A, B>(self: SortedSet<A>, O: Order<B>, f: (a: A) => Iterable<B>): SortedSet<B>;
};
/**
 * @since 2.0.0
 * @category traversing
 */
export declare const forEach: {
    /**
     * @since 2.0.0
     * @category traversing
     */
    <A>(f: (a: A) => void): (self: SortedSet<A>) => void;
    /**
     * @since 2.0.0
     * @category traversing
     */
    <A>(self: SortedSet<A>, f: (a: A) => void): void;
};
/**
 * @since 2.0.0
 * @category elements
 */
export declare const has: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A): (self: SortedSet<A>) => boolean;
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(self: SortedSet<A>, value: A): boolean;
};
/**
 * @since 2.0.0
 */
export declare const intersection: {
    /**
     * @since 2.0.0
     */
    <A>(that: Iterable<A>): (self: SortedSet<A>) => SortedSet<A>;
    /**
     * @since 2.0.0
     */
    <A>(self: SortedSet<A>, that: Iterable<A>): SortedSet<A>;
};
/**
 * @since 2.0.0
 * @category elements
 */
export declare const isSubset: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(that: SortedSet<A>): (self: SortedSet<A>) => boolean;
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(self: SortedSet<A>, that: SortedSet<A>): boolean;
};
/**
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * @since 2.0.0
     * @category mapping
     */
    <B, A>(O: Order<B>, f: (a: A) => B): (self: SortedSet<A>) => SortedSet<B>;
    /**
     * @since 2.0.0
     * @category mapping
     */
    <B, A>(self: SortedSet<A>, O: Order<B>, f: (a: A) => B): SortedSet<B>;
};
/**
 * @since 2.0.0
 * @category filtering
 */
export declare const partition: {
    /**
     * @since 2.0.0
     * @category filtering
     */
    <A>(predicate: (a: NoInfer<A>) => boolean): (self: SortedSet<A>) => [excluded: SortedSet<A>, satisfying: SortedSet<A>];
    /**
     * @since 2.0.0
     * @category filtering
     */
    <A>(self: SortedSet<A>, predicate: (a: A) => boolean): [excluded: SortedSet<A>, satisfying: SortedSet<A>];
};
/**
 * @since 2.0.0
 * @category elements
 */
export declare const remove: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A): (self: SortedSet<A>) => SortedSet<A>;
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(self: SortedSet<A>, value: A): SortedSet<A>;
};
/**
 * @since 2.0.0
 * @category getters
 */
export declare const size: <A>(self: SortedSet<A>) => number;
/**
 * Check if a predicate holds true for some `SortedSet` element.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const some: {
    /**
     * Check if a predicate holds true for some `SortedSet` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(predicate: Predicate<A>): (self: SortedSet<A>) => boolean;
    /**
     * Check if a predicate holds true for some `SortedSet` element.
     *
     * @since 2.0.0
     * @category elements
     */
    <A>(self: SortedSet<A>, predicate: Predicate<A>): boolean;
};
/**
 * @since 2.0.0
 * @category elements
 */
export declare const toggle: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(value: A): (self: SortedSet<A>) => SortedSet<A>;
    /**
     * @since 2.0.0
     * @category elements
     */
    <A>(self: SortedSet<A>, value: A): SortedSet<A>;
};
/**
 * @since 2.0.0
 */
export declare const union: {
    /**
     * @since 2.0.0
     */
    <A>(that: Iterable<A>): (self: SortedSet<A>) => SortedSet<A>;
    /**
     * @since 2.0.0
     */
    <A>(self: SortedSet<A>, that: Iterable<A>): SortedSet<A>;
};
/**
 * @since 2.0.0
 * @category getters
 */
export declare const values: <A>(self: SortedSet<A>) => IterableIterator<A>;
/**
 * @since 2.0.0
 * @category equivalence
 */
export declare const getEquivalence: <A>() => Equivalence.Equivalence<SortedSet<A>>;
export {};
//# sourceMappingURL=SortedSet.d.ts.map