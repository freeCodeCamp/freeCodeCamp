import { Memory } from '../../../system/memory/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TToIndexableKeys } from '../indexable/to_indexable_keys.mjs';
import { type TToIndexable } from '../indexable/to_indexable.mjs';
type TComparable<Indexable extends TProperties> = (keyof Indexable extends string | number ? `${keyof Indexable}` : never);
type TFromKeys<Indexable extends TProperties, Keys extends string[], Result extends TProperties = {}> = (Keys extends [infer Left extends string, ...infer Right extends string[]] ? Left extends TComparable<Indexable> ? TFromKeys<Indexable, Right, Memory.TAssign<Result, {
    [_ in Left]: Indexable[Left];
}>> : TFromKeys<Indexable, Right, Result> : Result);
export type TFromType<Type extends TSchema, Indexer extends TSchema, Indexable extends TProperties = TToIndexable<Type>, Keys extends string[] = TToIndexableKeys<Indexer>, Applied extends TProperties = TFromKeys<Indexable, Keys>, Result extends TSchema = TObject<Applied>> = Result;
export declare function FromType<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer): TFromType<Type, Indexer>;
export {};
