import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TReadonlyObjectDeferred } from '../../action/readonly_object.mjs';
import { type TFromType } from './from_type.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
export type TReadonlyObjectAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TFromType<Type> : TReadonlyObjectDeferred<Type>> = Result;
export declare function ReadonlyObjectAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TReadonlyObjectAction<Type>;
export type TReadonlyObjectInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiateType extends TSchema = TInstantiateType<Context, State, Type>> = TReadonlyObjectAction<InstantiateType>;
export declare function ReadonlyObjectInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TReadonlyObjectInstantiate<Context, State, Type>;
