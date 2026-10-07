/**
 * @since 2.0.0
 */
import type { Chunk } from "./Chunk.js";
import type { Equal } from "./Equal.js";
import type { Inspectable } from "./Inspectable.js";
import type { Option } from "./Option.js";
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
 * @category constants
 */
export declare const Direction: {
    readonly Forward: RedBlackTree.Direction;
    readonly Backward: RedBlackTree.Direction;
};
/**
 * A Red-Black Tree.
 *
 * @since 2.0.0
 * @category models
 */
export interface RedBlackTree<in out Key, out Value> extends Iterable<[Key, Value]>, Equal, Pipeable, Inspectable {
    readonly [TypeId]: {
        readonly _Key: Types.Invariant<Key>;
        readonly _Value: Types.Covariant<Value>;
    };
}
/**
 * @since 2.0.0
 */
export declare namespace RedBlackTree {
    /**
     * @since 2.0.0
     */
    type Direction = number & {
        readonly Direction: unique symbol;
    };
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isRedBlackTree: {
    /**
     * @since 2.0.0
     * @category refinements
     */
    <K, V>(u: Iterable<readonly [K, V]>): u is RedBlackTree<K, V>;
    /**
     * @since 2.0.0
     * @category refinements
     */
    (u: unknown): u is RedBlackTree<unknown, unknown>;
};
/**
 * Creates an empty `RedBlackTree`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <K, V = never>(ord: Order<K>) => RedBlackTree<K, V>;
/**
 * Creates a new `RedBlackTree` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: {
    /**
     * Creates a new `RedBlackTree` from an iterable collection of key/value pairs.
     *
     * @since 2.0.0
     * @category constructors
     */
    <B>(ord: Order<B>): <K extends B, V>(entries: Iterable<readonly [K, V]>) => RedBlackTree<K, V>;
    /**
     * Creates a new `RedBlackTree` from an iterable collection of key/value pairs.
     *
     * @since 2.0.0
     * @category constructors
     */
    <K extends B, V, B>(entries: Iterable<readonly [K, V]>, ord: Order<B>): RedBlackTree<K, V>;
};
/**
 * Constructs a new `RedBlackTree` from the specified entries.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <K>(ord: Order<K>) => <Entries extends Array<readonly [K, any]>>(...entries: Entries) => RedBlackTree<K, Entries[number] extends readonly [any, infer V] ? V : never>;
/**
 * Returns an iterator that points to the element at the specified index of the
 * tree.
 *
 * **Note**: The iterator will run through elements in order.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const at: {
    /**
     * Returns an iterator that points to the element at the specified index of the
     * tree.
     *
     * **Note**: The iterator will run through elements in order.
     *
     * @since 2.0.0
     * @category traversing
     */
    (index: number): <K, V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that points to the element at the specified index of the
     * tree.
     *
     * **Note**: The iterator will run through elements in order.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, index: number): Iterable<[K, V]>;
};
/**
 * Returns an iterator that points to the element at the specified index of the
 * tree.
 *
 * **Note**: The iterator will run through elements in reverse order.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const atReversed: {
    /**
     * Returns an iterator that points to the element at the specified index of the
     * tree.
     *
     * **Note**: The iterator will run through elements in reverse order.
     *
     * @since 2.0.0
     * @category traversing
     */
    (index: number): <K, V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that points to the element at the specified index of the
     * tree.
     *
     * **Note**: The iterator will run through elements in reverse order.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, index: number): Iterable<[K, V]>;
};
/**
 * Finds all values in the tree associated with the specified key.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findAll: {
    /**
     * Finds all values in the tree associated with the specified key.
     *
     * @since 2.0.0
     * @category elements
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Chunk<V>;
    /**
     * Finds all values in the tree associated with the specified key.
     *
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Chunk<V>;
};
/**
 * Finds the first value in the tree associated with the specified key, if it exists.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findFirst: {
    /**
     * Finds the first value in the tree associated with the specified key, if it exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Option<V>;
    /**
     * Finds the first value in the tree associated with the specified key, if it exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Option<V>;
};
/**
 * Returns the first entry in the tree, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const first: <K, V>(self: RedBlackTree<K, V>) => Option<[K, V]>;
/**
 * Returns the element at the specified index within the tree or `None` if the
 * specified index does not exist.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const getAt: {
    /**
     * Returns the element at the specified index within the tree or `None` if the
     * specified index does not exist.
     *
     * @since 2.0.0
     * @category elements
     */
    (index: number): <K, V>(self: RedBlackTree<K, V>) => Option<[K, V]>;
    /**
     * Returns the element at the specified index within the tree or `None` if the
     * specified index does not exist.
     *
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: RedBlackTree<K, V>, index: number): Option<[K, V]>;
};
/**
 * Gets the `Order<K>` that the `RedBlackTree<K, V>` is using.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const getOrder: <K, V>(self: RedBlackTree<K, V>) => Order<K>;
/**
 * Returns an iterator that traverse entries in order with keys greater than the
 * specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const greaterThan: {
    /**
     * Returns an iterator that traverse entries in order with keys greater than the
     * specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in order with keys greater than the
     * specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Returns an iterator that traverse entries in reverse order with keys greater
 * than the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const greaterThanReversed: {
    /**
     * Returns an iterator that traverse entries in reverse order with keys greater
     * than the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in reverse order with keys greater
     * than the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Returns an iterator that traverse entries in order with keys greater than or
 * equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const greaterThanEqual: {
    /**
     * Returns an iterator that traverse entries in order with keys greater than or
     * equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in order with keys greater than or
     * equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Returns an iterator that traverse entries in reverse order with keys greater
 * than or equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const greaterThanEqualReversed: {
    /**
     * Returns an iterator that traverse entries in reverse order with keys greater
     * than or equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in reverse order with keys greater
     * than or equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Finds the item with key, if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const has: {
    /**
     * Finds the item with key, if it exists.
     *
     * @since 2.0.0
     * @category elements
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => boolean;
    /**
     * Finds the item with key, if it exists.
     *
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): boolean;
};
/**
 * Insert a new item into the tree.
 *
 * @since 2.0.0
 */
export declare const insert: {
    /**
     * Insert a new item into the tree.
     *
     * @since 2.0.0
     */
    <K, V>(key: K, value: V): (self: RedBlackTree<K, V>) => RedBlackTree<K, V>;
    /**
     * Insert a new item into the tree.
     *
     * @since 2.0.0
     */
    <K, V>(self: RedBlackTree<K, V>, key: K, value: V): RedBlackTree<K, V>;
};
/**
 * Get all the keys present in the tree in order.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const keys: <K, V>(self: RedBlackTree<K, V>) => IterableIterator<K>;
/**
 * Get all the keys present in the tree in reverse order.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const keysReversed: <K, V>(self: RedBlackTree<K, V>) => IterableIterator<K>;
/**
 * Returns the last entry in the tree, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const last: <K, V>(self: RedBlackTree<K, V>) => Option<[K, V]>;
/**
 * Returns an iterator that traverse entries in order with keys less than the
 * specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const lessThan: {
    /**
     * Returns an iterator that traverse entries in order with keys less than the
     * specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in order with keys less than the
     * specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Returns an iterator that traverse entries in reverse order with keys less
 * than the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const lessThanReversed: {
    /**
     * Returns an iterator that traverse entries in reverse order with keys less
     * than the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in reverse order with keys less
     * than the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Returns an iterator that traverse entries in order with keys less than or
 * equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const lessThanEqual: {
    /**
     * Returns an iterator that traverse entries in order with keys less than or
     * equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in order with keys less than or
     * equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Returns an iterator that traverse entries in reverse order with keys less
 * than or equal to the specified key.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const lessThanEqualReversed: {
    /**
     * Returns an iterator that traverse entries in reverse order with keys less
     * than or equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
    /**
     * Returns an iterator that traverse entries in reverse order with keys less
     * than or equal to the specified key.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): Iterable<[K, V]>;
};
/**
 * Execute the specified function for each node of the tree, in order.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const forEach: {
    /**
     * Execute the specified function for each node of the tree, in order.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(f: (key: K, value: V) => void): (self: RedBlackTree<K, V>) => void;
    /**
     * Execute the specified function for each node of the tree, in order.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, f: (key: K, value: V) => void): void;
};
/**
 * Visit each node of the tree in order with key greater then or equal to max.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const forEachGreaterThanEqual: {
    /**
     * Visit each node of the tree in order with key greater then or equal to max.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(min: K, f: (key: K, value: V) => void): (self: RedBlackTree<K, V>) => void;
    /**
     * Visit each node of the tree in order with key greater then or equal to max.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, min: K, f: (key: K, value: V) => void): void;
};
/**
 * Visit each node of the tree in order with key lower then max.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const forEachLessThan: {
    /**
     * Visit each node of the tree in order with key lower then max.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(max: K, f: (key: K, value: V) => void): (self: RedBlackTree<K, V>) => void;
    /**
     * Visit each node of the tree in order with key lower then max.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, max: K, f: (key: K, value: V) => void): void;
};
/**
 * Visit each node of the tree in order with key lower than max and greater
 * than or equal to min.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const forEachBetween: {
    /**
     * Visit each node of the tree in order with key lower than max and greater
     * than or equal to min.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(options: {
        readonly min: K;
        readonly max: K;
        readonly body: (key: K, value: V) => void;
    }): (self: RedBlackTree<K, V>) => void;
    /**
     * Visit each node of the tree in order with key lower than max and greater
     * than or equal to min.
     *
     * @since 2.0.0
     * @category traversing
     */
    <K, V>(self: RedBlackTree<K, V>, options: {
        readonly min: K;
        readonly max: K;
        readonly body: (key: K, value: V) => void;
    }): void;
};
/**
 * Reduce a state over the entries of the tree.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const reduce: {
    /**
     * Reduce a state over the entries of the tree.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, V, K>(zero: Z, f: (accumulator: Z, value: V, key: K) => Z): (self: RedBlackTree<K, V>) => Z;
    /**
     * Reduce a state over the entries of the tree.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z, V, K>(self: RedBlackTree<K, V>, zero: Z, f: (accumulator: Z, value: V, key: K) => Z): Z;
};
/**
 * Removes the entry with the specified key, if it exists.
 *
 * @since 2.0.0
 */
export declare const removeFirst: {
    /**
     * Removes the entry with the specified key, if it exists.
     *
     * @since 2.0.0
     */
    <K>(key: K): <V>(self: RedBlackTree<K, V>) => RedBlackTree<K, V>;
    /**
     * Removes the entry with the specified key, if it exists.
     *
     * @since 2.0.0
     */
    <K, V>(self: RedBlackTree<K, V>, key: K): RedBlackTree<K, V>;
};
/**
 * Traverse the tree in reverse order.
 *
 * @since 2.0.0
 * @category traversing
 */
export declare const reversed: <K, V>(self: RedBlackTree<K, V>) => Iterable<[K, V]>;
/**
 * Returns the size of the tree.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: <K, V>(self: RedBlackTree<K, V>) => number;
/**
 * Get all values present in the tree in order.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const values: <K, V>(self: RedBlackTree<K, V>) => IterableIterator<V>;
/**
 * Get all values present in the tree in reverse order.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const valuesReversed: <K, V>(self: RedBlackTree<K, V>) => IterableIterator<V>;
export {};
//# sourceMappingURL=RedBlackTree.d.ts.map