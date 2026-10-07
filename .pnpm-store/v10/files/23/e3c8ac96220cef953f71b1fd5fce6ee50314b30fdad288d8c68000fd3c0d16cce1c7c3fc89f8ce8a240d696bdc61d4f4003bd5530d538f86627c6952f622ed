import type { CreateNodeContext } from '../doc/createNode';
import type { BlockSequence, FlowCollection } from '../parse/cst';
import type { Schema } from '../schema/Schema';
import type { StringifyContext } from '../stringify/stringify';
import { Collection } from './Collection';
import type { ParsedNode, Range } from './Node';
import type { Pair } from './Pair';
import type { Scalar } from './Scalar';
import type { ToJSContext } from './toJS';
export declare namespace YAMLSeq {
    interface Parsed<T extends ParsedNode | Pair<ParsedNode, ParsedNode | null> = ParsedNode> extends YAMLSeq<T> {
        items: T[];
        range: Range;
        srcToken?: BlockSequence | FlowCollection;
    }
}
export declare class YAMLSeq<T = unknown> extends Collection {
    static get tagName(): 'tag:yaml.org,2002:seq';
    items: T[];
    constructor(schema?: Schema);
    add(value: T): void;
    /**
     * Removes a value from the collection.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     *
     * @returns `true` if the item was found and removed.
     */
    delete(key: unknown): boolean;
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     */
    get(key: unknown, keepScalar: true): Scalar<T> | undefined;
    get(key: unknown, keepScalar?: false): T | undefined;
    get(key: unknown, keepScalar?: boolean): T | Scalar<T> | undefined;
    /**
     * Checks if the collection includes a value with the key `key`.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     */
    has(key: unknown): boolean;
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     *
     * If `key` does not contain a representation of an integer, this will throw.
     * It may be wrapped in a `Scalar`.
     */
    set(key: unknown, value: T): void;
    toJSON(_?: unknown, ctx?: ToJSContext): unknown[];
    toString(ctx?: StringifyContext, onComment?: () => void, onChompKeep?: () => void): string;
    static from(schema: Schema, obj: unknown, ctx: CreateNodeContext): YAMLSeq;
}
