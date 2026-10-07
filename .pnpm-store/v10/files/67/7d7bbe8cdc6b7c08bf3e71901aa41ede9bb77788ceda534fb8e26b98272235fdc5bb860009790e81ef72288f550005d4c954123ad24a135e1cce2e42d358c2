import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TToIndexableKeys } from '../indexable/to_indexable_keys.mjs';
import { type TToIndexable } from '../indexable/to_indexable.mjs';
type TNormalKeys<Keys extends string[], UnionKeys extends string = Keys[number], Result extends string | number = (UnionKeys extends `${infer Value extends number}` ? UnionKeys | Value : UnionKeys)> = Result;
type TFromKeys<Properties extends TProperties, Keys extends string[], Omitted extends TProperties = Omit<Properties, TNormalKeys<Keys>>, Result extends TProperties = {
    [Key in keyof Omitted]: Omitted[Key];
}> = Result;
export type TFromType<Type extends TSchema, Indexer extends TSchema, Indexable extends TProperties = TToIndexable<Type>, IndexableKeys extends string[] = TToIndexableKeys<Indexer>, Omitted extends TProperties = TFromKeys<Indexable, IndexableKeys>, Result extends TSchema = TObject<Omitted>> = Result;
export declare function FromType<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer): TFromType<Type, Indexer>;
export {};
