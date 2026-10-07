import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TPartialDeferred } from '../../action/partial.mjs';
import { type TFromType } from './from_type.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
export type TPartialAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TFromType<Type> : TPartialDeferred<Type>> = Result;
export declare function PartialAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TPartialAction<Type>;
export type TPartialInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TPartialAction<InstantiatedType>;
export declare function PartialInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TPartialInstantiate<Context, State, Type>;
