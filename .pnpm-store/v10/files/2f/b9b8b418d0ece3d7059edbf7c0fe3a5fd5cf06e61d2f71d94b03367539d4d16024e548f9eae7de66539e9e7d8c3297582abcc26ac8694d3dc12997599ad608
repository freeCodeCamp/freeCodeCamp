import type { BlockMap, FlowCollection } from '../parse/cst';
import type { Schema } from '../schema/Schema';
import type { StringifyContext } from '../stringify/stringify';
import type { CreateNodeContext } from '../util';
import { Collection } from './Collection';
import type { ParsedNode, Range } from './Node';
import { Pair } from './Pair';
import type { Scalar } from './Scalar';
import type { ToJSContext } from './toJS';
export type MapLike = Map<unknown, unknown> | Set<unknown> | Record<string | number | symbol, unknown>;
export declare function findPair<K = unknown, V = unknown>(items: Iterable<Pair<K, V>>, key: unknown): Pair<K, V> | undefined;
export declare namespace YAMLMap {
    interface Parsed<K extends ParsedNode = ParsedNode, V extends ParsedNode | null = ParsedNode | null> extends YAMLMap<K, V> {
        items: Pair<K, V>[];
        range: Range;
        srcToken?: BlockMap | FlowCollection;
    }
}
export declare class YAMLMap<K = unknown, V = unknown> extends Collection {
    static get tagName(): 'tag:yaml.org,2002:map';
    items: Pair<K, V>[];
    constructor(schema?: Schema);
    /**
     * A generic collection parsing method that can be extended
     * to other node classes that inherit from YAMLMap
     */
    static from(schema: Schema, obj: unknown, ctx: CreateNodeContext): YAMLMap;
    /**
     * Adds a value to the collection.
     *
     * @param overwrite - If not set `true`, using a key that is already in the
     *   collection will throw. Otherwise, overwrites the previous value.
     */
    add(pair: Pair<K, V> | {
        key: K;
        value: V;
    }, overwrite?: boolean): void;
    delete(key: unknown): boolean;
    get(key: unknown, keepScalar: true): Scalar<V> | undefined;
    get(key: unknown, keepScalar?: false): V | undefined;
    get(key: unknown, keepScalar?: boolean): V | Scalar<V> | undefined;
    has(key: unknown): boolean;
    set(key: K, value: V): void;
    /**
     * @param ctx - Conversion context, originally set in Document#toJS()
     * @param {Class} Type - If set, forces the returned collection type
     * @returns Instance of Type, Map, or Object
     */
    toJSON<T extends MapLike = Map<unknown, unknown>>(_?: unknown, ctx?: ToJSContext, Type?: {
        new (): T;
    }): any;
    toString(ctx?: StringifyContext, onComment?: () => void, onChompKeep?: () => void): string;
}
