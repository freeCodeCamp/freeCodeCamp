/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js";
import { type Inspectable } from "./Inspectable.js";
import * as Option from "./Option.js";
import type { Order } from "./Order.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Types from "./Types.js";
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
export interface SortedMap<in out K, out V> extends Iterable<[K, V]>, Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: {
        readonly _K: Types.Invariant<K>;
        readonly _V: Types.Covariant<V>;
    };
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isSortedMap: {
    /**
     * @since 2.0.0
     * @category refinements
     */
    <K, V>(u: Iterable<readonly [K, V]>): u is SortedMap<K, V>;
    /**
     * @since 2.0.0
     * @category refinements
     */
    (u: unknown): u is SortedMap<unknown, unknown>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <K, V = never>(ord: Order<K>) => SortedMap<K, V>;
/**
 * Creates a new `SortedMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: {
    /**
     * Creates a new `SortedMap` from an iterable collection of key/value pairs.
     *
     * @since 2.0.0
     * @category constructors
     */
    <B>(ord: Order<B>): <K extends B, V>(iterable: Iterable<readonly [K, V]>) => SortedMap<K, V>;
    /**
     * Creates a new `SortedMap` from an iterable collection of key/value pairs.
     *
     * @since 2.0.0
     * @category constructors
     */
    <K extends B, V, B>(iterable: Iterable<readonly [K, V]>, ord: Order<B>): SortedMap<K, V>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <K>(ord: Order<K>) => <Entries extends ReadonlyArray<readonly [K, any]>>(...entries: Entries) => SortedMap<K, Entries[number] extends (readonly [any, infer V]) ? V : never>;
/**
 * @since 2.0.0
 * @category predicates
 */
export declare const isEmpty: <K, V>(self: SortedMap<K, V>) => boolean;
/**
 * @since 2.0.0
 * @category predicates
 */
export declare const isNonEmpty: <K, V>(self: SortedMap<K, V>) => boolean;
/**
 * @since 2.0.0
 * @category elements
 */
export declare const get: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <K>(key: K): <V>(self: SortedMap<K, V>) => Option.Option<V>;
    /**
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: SortedMap<K, V>, key: K): Option.Option<V>;
};
/**
 * Gets the `Order<K>` that the `SortedMap<K, V>` is using.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const getOrder: <K, V>(self: SortedMap<K, V>) => Order<K>;
/**
 * @since 2.0.0
 * @category elements
 */
export declare const has: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <K>(key: K): <V>(self: SortedMap<K, V>) => boolean;
    /**
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: SortedMap<K, V>, key: K): boolean;
};
/**
 * @since 2.0.0
 * @category elements
 */
export declare const headOption: <K, V>(self: SortedMap<K, V>) => Option.Option<[K, V]>;
/**
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * @since 2.0.0
     * @category mapping
     */
    <A, K, B>(f: (a: A, k: K) => B): (self: SortedMap<K, A>) => SortedMap<K, B>;
    /**
     * @since 2.0.0
     * @category mapping
     */
    <K, A, B>(self: SortedMap<K, A>, f: (a: A, k: K) => B): SortedMap<K, B>;
};
/**
 * @since 2.0.0
 * @category folding
 */
export declare const reduce: {
    /**
     * @since 2.0.0
     * @category folding
     */
    <B, A, K>(zero: B, f: (acc: B, value: A, key: K) => B): (self: SortedMap<K, A>) => B;
    /**
     * @since 2.0.0
     * @category folding
     */
    <K, A, B>(self: SortedMap<K, A>, zero: B, f: (acc: B, value: A, key: K) => B): B;
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
    <K>(key: K): <V>(self: SortedMap<K, V>) => SortedMap<K, V>;
    /**
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: SortedMap<K, V>, key: K): SortedMap<K, V>;
};
/**
 * @since 2.0.0
 * @category elements
 */
export declare const set: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <K, V>(key: K, value: V): (self: SortedMap<K, V>) => SortedMap<K, V>;
    /**
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: SortedMap<K, V>, key: K, value: V): SortedMap<K, V>;
};
/**
 * @since 2.0.0
 * @category getters
 */
export declare const size: <K, V>(self: SortedMap<K, V>) => number;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const keys: <K, V>(self: SortedMap<K, V>) => IterableIterator<K>;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const values: <K, V>(self: SortedMap<K, V>) => IterableIterator<V>;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const entries: <K, V>(self: SortedMap<K, V>) => IterableIterator<[K, V]>;
/**
 * @since 3.1.0
 * @category elements
 */
export declare const lastOption: <K, V>(self: SortedMap<K, V>) => Option.Option<[K, V]>;
/**
 * @since 3.1.0
 * @category filtering
 */
export declare const partition: {
    /**
     * @since 3.1.0
     * @category filtering
     */
    <K, V>(predicate: (a: Types.NoInfer<K>) => boolean): (self: SortedMap<K, V>) => [excluded: SortedMap<K, V>, satisfying: SortedMap<K, V>];
    /**
     * @since 3.1.0
     * @category filtering
     */
    <K, V>(self: SortedMap<K, V>, predicate: (a: K) => boolean): [excluded: SortedMap<K, V>, satisfying: SortedMap<K, V>];
};
export {};
//# sourceMappingURL=SortedMap.d.ts.map