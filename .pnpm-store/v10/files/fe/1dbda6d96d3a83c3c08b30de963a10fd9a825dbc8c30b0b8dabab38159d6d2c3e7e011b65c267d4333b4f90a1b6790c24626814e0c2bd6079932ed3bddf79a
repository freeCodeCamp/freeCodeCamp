import { MAP, SCALAR, SEQ } from '../nodes/identity';
import type { Pair } from '../nodes/Pair';
import type { SchemaOptions, ToStringOptions } from '../options';
import type { CollectionTag, ScalarTag } from './types';
export declare class Schema {
    compat: Array<CollectionTag | ScalarTag> | null;
    knownTags: Record<string, CollectionTag | ScalarTag>;
    name: string;
    sortMapEntries: ((a: Pair, b: Pair) => number) | null;
    tags: Array<CollectionTag | ScalarTag>;
    toStringOptions: Readonly<ToStringOptions> | null;
    readonly [MAP]: CollectionTag;
    readonly [SCALAR]: ScalarTag;
    readonly [SEQ]: CollectionTag;
    constructor({ compat, customTags, merge, resolveKnownTags, schema, sortMapEntries, toStringDefaults }: SchemaOptions);
    clone(): Schema;
}
