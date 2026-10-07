import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TOmitDeferred } from '../../action/omit.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TFromType } from './from_type.mjs';
export type TOmitAction<Type extends TSchema, Indexer extends TSchema, Result extends TSchema = TCanInstantiate<[Type, Indexer]> extends true ? TFromType<Type, Indexer> : TOmitDeferred<Type, Indexer>> = Result;
export declare function OmitAction<Type extends TSchema, Indexer extends TSchema>(type: Type, indexer: Indexer, options: TSchemaOptions): TOmitAction<Type, Indexer>;
export type TOmitInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, Indexer extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>, InstantiatedIndexer extends TSchema = TInstantiateType<Context, State, Indexer>> = TOmitAction<InstantiatedType, InstantiatedIndexer>;
export declare function OmitInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, Indexer extends TSchema>(context: Context, state: State, type: Type, indexer: Indexer, options: TSchemaOptions): TOmitInstantiate<Context, State, Type, Indexer>;
