import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TKeysToIndexer } from '../engine/helpers/keys_to_indexer.mjs';
import { type TIndexAction } from '../engine/indexed/instantiate.mjs';
/** Creates a deferred Index action. */
export type TIndexDeferred<Type extends TSchema, Indexer extends TSchema> = (TDeferred<'Index', [Type, Indexer]>);
/** Creates a deferred Index action. */
export declare function IndexDeferred<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options?: TSchemaOptions): TIndexDeferred<Type, Indexer>;
/** Applies a Index action using the given types. */
export type TIndex<Type extends TSchema, Indexer extends TSchema> = (TIndexAction<Type, Indexer>);
/** Applies a Index action using the given types. */
export declare function Index<Type extends TSchema, Indexer extends PropertyKey[]>(type: Type, indexer: readonly [...Indexer], options?: TSchemaOptions): TIndex<Type, TKeysToIndexer<Indexer>>;
/** Applies a Index action using the given types. */
export declare function Index<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options?: TSchemaOptions): TIndex<Type, Indexer>;
