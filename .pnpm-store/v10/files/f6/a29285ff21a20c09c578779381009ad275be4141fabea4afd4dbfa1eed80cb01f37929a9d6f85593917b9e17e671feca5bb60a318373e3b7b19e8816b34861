import type { Schema } from '../schema/Schema';
import { NODE_TYPE } from './identity';
import { NodeBase } from './Node';
export declare function collectionFromPath(schema: Schema, path: unknown[], value: unknown): import('./Node').Node;
export declare const isEmptyPath: (path: Iterable<unknown> | null | undefined) => path is null | undefined;
export declare abstract class Collection extends NodeBase {
    schema: Schema | undefined;
    [NODE_TYPE]: symbol;
    items: unknown[];
    /** An optional anchor on this node. Used by alias nodes. */
    anchor?: string;
    /**
     * If true, stringify this and all child nodes using flow rather than
     * block styles.
     */
    flow?: boolean;
    constructor(type: symbol, schema?: Schema);
    /**
     * Create a copy of this collection.
     *
     * @param schema - If defined, overwrites the original's schema
     */
    clone(schema?: Schema): Collection;
    /** Adds a value to the collection. */
    abstract add(value: unknown): void;
    /**
     * Removes a value from the collection.
     * @returns `true` if the item was found and removed.
     */
    abstract delete(key: unknown): boolean;
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    abstract get(key: unknown, keepScalar?: boolean): unknown;
    /**
     * Checks if the collection includes a value with the key `key`.
     */
    abstract has(key: unknown): boolean;
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    abstract set(key: unknown, value: unknown): void;
    /**
     * Adds a value to the collection. For `!!map` and `!!omap` the value must
     * be a Pair instance or a `{ key, value }` object, which may not have a key
     * that already exists in the map.
     */
    addIn(path: Iterable<unknown>, value: unknown): void;
    /**
     * Removes a value from the collection.
     * @returns `true` if the item was found and removed.
     */
    deleteIn(path: Iterable<unknown>): boolean;
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    getIn(path: Iterable<unknown>, keepScalar?: boolean): unknown;
    hasAllNullValues(allowScalar?: boolean): boolean;
    /**
     * Checks if the collection includes a value with the key `key`.
     */
    hasIn(path: Iterable<unknown>): boolean;
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    setIn(path: Iterable<unknown>, value: unknown): void;
}
