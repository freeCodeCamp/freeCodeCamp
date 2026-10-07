import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TPickDeferred } from '../../action/pick.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TFromType } from './from_type.mjs';
export type TPickAction<Type extends TSchema, Indexer extends TSchema, Result extends TSchema = TCanInstantiate<[Type, Indexer]> extends true ? TFromType<Type, Indexer> : TPickDeferred<Type, Indexer>> = Result;
export declare function PickAction<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options: TSchemaOptions): TPickAction<Type, Indexer>;
export type TPickInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, Indexer extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>, InstantiatedIndexer extends TSchema = TInstantiateType<Context, State, Indexer>> = TPickAction<InstantiatedType, InstantiatedIndexer>;
export declare function PickInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, Indexer extends TSchema>(context: Context, state: State, type: Type, indexer: Indexer, options: TSchemaOptions): TPickInstantiate<Context, State, Type, Indexer>;
