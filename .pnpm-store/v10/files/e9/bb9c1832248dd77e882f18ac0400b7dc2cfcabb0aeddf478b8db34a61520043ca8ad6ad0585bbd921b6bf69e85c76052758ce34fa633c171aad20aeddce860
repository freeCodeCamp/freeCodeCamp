import { type TSchema } from '../../types/schema.mjs';
import { type TFromType } from './from_type.mjs';
export type TToIndexableKeys<Indexer extends TSchema, Result extends string[] = TFromType<Indexer>> = Result;
/**
 * Transforms a type meant as an Indexer into string[] array which is used by Indexable types
 * like Index, Pick and Omit to select from property keys. This function should only be used
 * for Object key selection, and not for Array / Tuple key selection as Array-Like structures
 * require TNumber indexing support.
 */
export declare function ToIndexableKeys<Indexer extends TSchema>(type: Indexer): TToIndexableKeys<Indexer>;
