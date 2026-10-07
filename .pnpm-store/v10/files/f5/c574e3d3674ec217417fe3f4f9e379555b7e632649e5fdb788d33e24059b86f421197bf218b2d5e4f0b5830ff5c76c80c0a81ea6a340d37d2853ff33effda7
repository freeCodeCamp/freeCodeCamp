import type { ToJSContext } from '../../nodes/toJS';
import { YAMLMap } from '../../nodes/YAMLMap';
import { YAMLSeq } from '../../nodes/YAMLSeq';
import type { CreateNodeContext } from '../../util';
import type { Schema } from '../Schema';
import type { CollectionTag } from '../types';
export declare class YAMLOMap extends YAMLSeq {
    static tag: string;
    constructor();
    add: typeof YAMLMap.prototype.add;
    delete: typeof YAMLMap.prototype.delete;
    get: typeof YAMLMap.prototype.get;
    has: typeof YAMLMap.prototype.has;
    set: typeof YAMLMap.prototype.set;
    /**
     * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
     * but TypeScript won't allow widening the signature of a child method.
     */
    toJSON(_?: unknown, ctx?: ToJSContext): unknown[];
    static from(schema: Schema, iterable: unknown, ctx: CreateNodeContext): YAMLOMap;
}
export declare const omap: CollectionTag;
