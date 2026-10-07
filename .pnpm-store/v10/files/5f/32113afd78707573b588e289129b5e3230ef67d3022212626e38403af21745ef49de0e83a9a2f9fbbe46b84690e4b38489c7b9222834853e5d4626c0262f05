import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TFromType } from './from_type.mjs';
import { type TRequiredDeferred } from '../../action/required.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
export type TRequiredAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TFromType<Type> : TRequiredDeferred<Type>> = Result;
export declare function RequiredAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TRequiredAction<Type>;
export type TRequiredInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TRequiredAction<InstantiatedType>;
export declare function RequiredInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TRequiredInstantiate<Context, State, Type>;
