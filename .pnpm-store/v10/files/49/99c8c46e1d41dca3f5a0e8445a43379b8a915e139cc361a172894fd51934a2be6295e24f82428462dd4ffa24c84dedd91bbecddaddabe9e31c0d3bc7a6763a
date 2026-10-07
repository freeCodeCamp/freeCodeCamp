import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TKeysToIndexer } from '../engine/helpers/keys_to_indexer.mjs';
import { type TPickAction } from '../engine/pick/instantiate.mjs';
/** Creates a deferred Pick action. */
export type TPickDeferred<Type extends TSchema, Indexer extends TSchema> = (TDeferred<'Pick', [Type, Indexer]>);
/** Creates a deferred Pick action. */
export declare function PickDeferred<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options?: TSchemaOptions): TPickDeferred<Type, Indexer>;
/** Applies a Pick action using the given types. */
export type TPick<Type extends TSchema, Indexer extends TSchema> = (TPickAction<Type, Indexer>);
/** Applies a Pick action using the given types. */
export declare function Pick<Type extends TSchema, Indexer extends PropertyKey[]>(type: Type, indexer: readonly [...Indexer], options?: TSchemaOptions): TPick<Type, TKeysToIndexer<Indexer>>;
/** Applies a Pick action using the given types. */
export declare function Pick<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options?: TSchemaOptions): TPick<Type, Indexer>;
