import type { Document } from '../doc/Document';
import type { ToJSOptions } from '../options';
import type { Token } from '../parse/cst';
import type { StringifyContext } from '../stringify/stringify';
import type { Alias } from './Alias';
import { NODE_TYPE } from './identity';
import type { Scalar } from './Scalar';
import type { ToJSContext } from './toJS';
import type { MapLike, YAMLMap } from './YAMLMap';
import type { YAMLSeq } from './YAMLSeq';
export type Node<T = unknown> = Alias | Scalar<T> | YAMLMap<unknown, T> | YAMLSeq<T>;
/** Utility type mapper */
export type NodeType<T> = T extends string | number | bigint | boolean | null | undefined ? Scalar<T> : T extends Date ? Scalar<string | Date> : T extends Array<any> ? YAMLSeq<NodeType<T[number]>> : T extends {
    [key: string]: any;
} ? YAMLMap<NodeType<keyof T>, NodeType<T[keyof T]>> : T extends {
    [key: number]: any;
} ? YAMLMap<NodeType<keyof T>, NodeType<T[keyof T]>> : Node;
export type ParsedNode = Alias.Parsed | Scalar.Parsed | YAMLMap.Parsed | YAMLSeq.Parsed;
/** `[start, value-end, node-end]` */
export type Range = [number, number, number];
export declare abstract class NodeBase {
    readonly [NODE_TYPE]: symbol;
    /** A comment on or immediately after this */
    comment?: string | null;
    /** A comment before this */
    commentBefore?: string | null;
    /**
     * The `[start, value-end, node-end]` character offsets for the part of the
     * source parsed into this node (undefined if not parsed). The `value-end`
     * and `node-end` positions are themselves not included in their respective
     * ranges.
     */
    range?: Range | null;
    /** A blank line before this node and its commentBefore */
    spaceBefore?: boolean;
    /** The CST token that was composed into this node.  */
    srcToken?: Token;
    /** A fully qualified tag, if required */
    tag?: string;
    /**
     * Customize the way that a key-value pair is resolved.
     * Used for YAML 1.1 !!merge << handling.
     */
    addToJSMap?: (ctx: ToJSContext | undefined, map: MapLike, value: unknown) => void;
    /** A plain JS representation of this node */
    abstract toJSON(): any;
    abstract toString(ctx?: StringifyContext, onComment?: () => void, onChompKeep?: () => void): string;
    constructor(type: symbol);
    /** Create a copy of this node.  */
    clone(): NodeBase;
    /** A plain JavaScript representation of this node. */
    toJS(doc: Document<Node, boolean>, { mapAsMap, maxAliasCount, onAnchor, reviver }?: ToJSOptions): any;
}
