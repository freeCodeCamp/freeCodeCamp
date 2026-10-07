import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TKeysToIndexer } from '../engine/helpers/keys_to_indexer.mjs';
import { type TOmitAction } from '../engine/omit/instantiate.mjs';
/** Creates a deferred Omit action. */
export type TOmitDeferred<Type extends TSchema, Indexer extends TSchema> = (TDeferred<'Omit', [Type, Indexer]>);
/** Creates a deferred Omit action. */
export declare function OmitDeferred<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options?: TSchemaOptions): TOmitDeferred<Type, Indexer>;
/** Applies a Omit action using the given types. */
export type TOmit<Type extends TSchema, Indexer extends TSchema> = (TOmitAction<Type, Indexer>);
/** Applies a Omit action using the given types. */
export declare function Omit<Type extends TSchema, Indexer extends PropertyKey[]>(type: Type, indexer: readonly [...Indexer], options?: TSchemaOptions): TOmit<Type, TKeysToIndexer<Indexer>>;
/** Applies a Omit action using the given types. */
export declare function Omit<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options?: TSchemaOptions): TOmit<Type, Indexer>;
