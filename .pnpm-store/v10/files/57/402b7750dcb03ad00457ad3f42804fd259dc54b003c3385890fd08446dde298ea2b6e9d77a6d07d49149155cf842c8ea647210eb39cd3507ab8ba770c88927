import type { YAMLError, YAMLWarning } from '../errors';
import { Alias } from '../nodes/Alias';
import { NODE_TYPE } from '../nodes/identity';
import type { Node, NodeType, ParsedNode, Range } from '../nodes/Node';
import { Pair } from '../nodes/Pair';
import type { Scalar } from '../nodes/Scalar';
import type { YAMLMap } from '../nodes/YAMLMap';
import type { YAMLSeq } from '../nodes/YAMLSeq';
import type { CreateNodeOptions, DocumentOptions, ParseOptions, SchemaOptions, ToJSOptions, ToStringOptions } from '../options';
import { Schema } from '../schema/Schema';
import { Directives } from './directives';
export type Replacer = any[] | ((key: any, value: any) => unknown);
export declare namespace Document {
    /** @ts-ignore The typing of directives fails in TS <= 4.2 */
    interface Parsed<Contents extends ParsedNode = ParsedNode, Strict extends boolean = true> extends Document<Contents, Strict> {
        directives: Directives;
        range: Range;
    }
}
export declare class Document<Contents extends Node = Node, Strict extends boolean = true> {
    readonly [NODE_TYPE]: symbol;
    /** A comment before this Document */
    commentBefore: string | null;
    /** A comment immediately after this Document */
    comment: string | null;
    /** The document contents. */
    contents: Strict extends true ? Contents | null : Contents;
    directives: Strict extends true ? Directives | undefined : Directives;
    /** Errors encountered during parsing. */
    errors: YAMLError[];
    options: Required<Omit<ParseOptions & DocumentOptions, '_directives' | 'lineCounter' | 'version'>>;
    /**
     * The `[start, value-end, node-end]` character offsets for the part of the
     * source parsed into this document (undefined if not parsed). The `value-end`
     * and `node-end` positions are themselves not included in their respective
     * ranges.
     */
    range?: Range;
    /** The schema used with the document. Use `setSchema()` to change. */
    schema: Schema;
    /** Warnings encountered during parsing. */
    warnings: YAMLWarning[];
    /**
     * @param value - The initial value for the document, which will be wrapped
     *   in a Node container.
     */
    constructor(value?: any, options?: DocumentOptions & SchemaOptions & ParseOptions & CreateNodeOptions);
    constructor(value: any, replacer: null | Replacer, options?: DocumentOptions & SchemaOptions & ParseOptions & CreateNodeOptions);
    /**
     * Create a deep copy of this Document and its contents.
     *
     * Custom Node values that inherit from `Object` still refer to their original instances.
     */
    clone(): Document<Contents, Strict>;
    /** Adds a value to the document. */
    add(value: any): void;
    /** Adds a value to the document. */
    addIn(path: Iterable<unknown>, value: unknown): void;
    /**
     * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
     *
     * If `node` already has an anchor, `name` is ignored.
     * Otherwise, the `node.anchor` value will be set to `name`,
     * or if an anchor with that name is already present in the document,
     * `name` will be used as a prefix for a new unique anchor.
     * If `name` is undefined, the generated anchor will use 'a' as a prefix.
     */
    createAlias(node: Strict extends true ? Scalar | YAMLMap | YAMLSeq : Node, name?: string): Alias;
    /**
     * Convert any value into a `Node` using the current schema, recursively
     * turning objects into collections.
     */
    createNode<T = unknown>(value: T, options?: CreateNodeOptions): NodeType<T>;
    createNode<T = unknown>(value: T, replacer: Replacer | CreateNodeOptions | null, options?: CreateNodeOptions): NodeType<T>;
    /**
     * Convert a key and a value into a `Pair` using the current schema,
     * recursively wrapping all values as `Scalar` or `Collection` nodes.
     */
    createPair<K extends Node = Node, V extends Node = Node>(key: unknown, value: unknown, options?: CreateNodeOptions): Pair<K, V>;
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */
    delete(key: unknown): boolean;
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */
    deleteIn(path: Iterable<unknown> | null): boolean;
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    get(key: unknown, keepScalar?: boolean): Strict extends true ? unknown : any;
    /**
     * Returns item at `path`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    getIn(path: Iterable<unknown> | null, keepScalar?: boolean): Strict extends true ? unknown : any;
    /**
     * Checks if the document includes a value with the key `key`.
     */
    has(key: unknown): boolean;
    /**
     * Checks if the document includes a value at `path`.
     */
    hasIn(path: Iterable<unknown> | null): boolean;
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    set(key: any, value: unknown): void;
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    setIn(path: Iterable<unknown> | null, value: unknown): void;
    /**
     * Change the YAML version and schema used by the document.
     * A `null` version disables support for directives, explicit tags, anchors, and aliases.
     * It also requires the `schema` option to be given as a `Schema` instance value.
     *
     * Overrides all previously set schema options.
     */
    setSchema(version: '1.1' | '1.2' | 'next' | null, options?: SchemaOptions): void;
    /** A plain JavaScript representation of the document `contents`. */
    toJS(opt?: ToJSOptions & {
        [ignored: string]: unknown;
    }): any;
    /**
     * A JSON representation of the document `contents`.
     *
     * @param jsonArg Used by `JSON.stringify` to indicate the array index or
     *   property name.
     */
    toJSON(jsonArg?: string | null, onAnchor?: ToJSOptions['onAnchor']): any;
    /** A YAML representation of the document. */
    toString(options?: ToStringOptions): string;
}
