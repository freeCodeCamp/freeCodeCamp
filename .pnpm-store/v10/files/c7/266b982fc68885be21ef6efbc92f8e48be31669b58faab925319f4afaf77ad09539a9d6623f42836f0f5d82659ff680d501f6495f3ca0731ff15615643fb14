import { type Inspectable } from "./Inspectable.js";
import * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
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
export interface MutableHashMap<out K, out V> extends Iterable<[K, V]>, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: <K = never, V = never>() => MutableHashMap<K, V>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <Entries extends Array<readonly [any, any]>>(...entries: Entries) => MutableHashMap<Entries[number] extends readonly [infer K, any] ? K : never, Entries[number] extends readonly [any, infer V] ? V : never>;
/**
 * Creates a new `MutableHashMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: <K, V>(entries: Iterable<readonly [K, V]>) => MutableHashMap<K, V>;
/**
 * @since 2.0.0
 * @category elements
 */
export declare const get: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <K>(key: K): <V>(self: MutableHashMap<K, V>) => Option.Option<V>;
    /**
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: MutableHashMap<K, V>, key: K): Option.Option<V>;
};
/**
 * @since 3.8.0
 * @category elements
 */
export declare const keys: <K, V>(self: MutableHashMap<K, V>) => Array<K>;
/**
 * @since 3.8.0
 * @category elements
 */
export declare const values: <K, V>(self: MutableHashMap<K, V>) => Array<V>;
/**
 * @since 2.0.0
 * @category elements
 */
export declare const has: {
    /**
     * @since 2.0.0
     * @category elements
     */
    <K>(key: K): <V>(self: MutableHashMap<K, V>) => boolean;
    /**
     * @since 2.0.0
     * @category elements
     */
    <K, V>(self: MutableHashMap<K, V>, key: K): boolean;
};
/**
 * @since 2.0.0
 */
export declare const set: {
    /**
     * @since 2.0.0
     */
    <K, V>(key: K, value: V): (self: MutableHashMap<K, V>) => MutableHashMap<K, V>;
    /**
     * @since 2.0.0
     */
    <K, V>(self: MutableHashMap<K, V>, key: K, value: V): MutableHashMap<K, V>;
};
/**
 * Updates the value of the specified key within the `MutableHashMap` if it exists.
 *
 * @since 2.0.0
 */
export declare const modify: {
    /**
     * Updates the value of the specified key within the `MutableHashMap` if it exists.
     *
     * @since 2.0.0
     */
    <K, V>(key: K, f: (v: V) => V): (self: MutableHashMap<K, V>) => MutableHashMap<K, V>;
    /**
     * Updates the value of the specified key within the `MutableHashMap` if it exists.
     *
     * @since 2.0.0
     */
    <K, V>(self: MutableHashMap<K, V>, key: K, f: (v: V) => V): MutableHashMap<K, V>;
};
/**
 * Set or remove the specified key in the `MutableHashMap` using the specified
 * update function.
 *
 * @since 2.0.0
 */
export declare const modifyAt: {
    /**
     * Set or remove the specified key in the `MutableHashMap` using the specified
     * update function.
     *
     * @since 2.0.0
     */
    <K, V>(key: K, f: (value: Option.Option<V>) => Option.Option<V>): (self: MutableHashMap<K, V>) => MutableHashMap<K, V>;
    /**
     * Set or remove the specified key in the `MutableHashMap` using the specified
     * update function.
     *
     * @since 2.0.0
     */
    <K, V>(self: MutableHashMap<K, V>, key: K, f: (value: Option.Option<V>) => Option.Option<V>): MutableHashMap<K, V>;
};
/**
 * @since 2.0.0
 */
export declare const remove: {
    /**
     * @since 2.0.0
     */
    <K>(key: K): <V>(self: MutableHashMap<K, V>) => MutableHashMap<K, V>;
    /**
     * @since 2.0.0
     */
    <K, V>(self: MutableHashMap<K, V>, key: K): MutableHashMap<K, V>;
};
/**
 * @since 2.0.0
 */
export declare const clear: <K, V>(self: MutableHashMap<K, V>) => MutableHashMap<K, V>;
/**
 * @since 2.0.0
 * @category elements
 */
export declare const size: <K, V>(self: MutableHashMap<K, V>) => number;
/**
 * @since 2.0.0
 */
export declare const isEmpty: <K, V>(self: MutableHashMap<K, V>) => boolean;
/**
 * @since 2.0.0
 */
export declare const forEach: {
    /**
     * @since 2.0.0
     */
    <K, V>(f: (value: V, key: K) => void): (self: MutableHashMap<K, V>) => void;
    /**
     * @since 2.0.0
     */
    <K, V>(self: MutableHashMap<K, V>, f: (value: V, key: K) => void): void;
};
export {};
//# sourceMappingURL=MutableHashMap.d.ts.map