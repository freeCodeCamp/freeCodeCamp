import type { CreateNodeContext } from '../doc/createNode';
import type { CollectionItem } from '../parse/cst';
import type { Schema } from '../schema/Schema';
import type { StringifyContext } from '../stringify/stringify';
import { addPairToJSMap } from './addPairToJSMap';
import { NODE_TYPE } from './identity';
import type { Node } from './Node';
import type { ToJSContext } from './toJS';
export declare function createPair(key: unknown, value: unknown, ctx: CreateNodeContext): Pair<Node, Node>;
export declare class Pair<K = unknown, V = unknown> {
    readonly [NODE_TYPE]: symbol;
    /** Always Node or null when parsed, but can be set to anything. */
    key: K;
    /** Always Node or null when parsed, but can be set to anything. */
    value: V | null;
    /** The CST token that was composed into this pair.  */
    srcToken?: CollectionItem;
    constructor(key: K, value?: V | null);
    clone(schema?: Schema): Pair<K, V>;
    toJSON(_?: unknown, ctx?: ToJSContext): ReturnType<typeof addPairToJSMap>;
    toString(ctx?: StringifyContext, onComment?: () => void, onChompKeep?: () => void): string;
}
