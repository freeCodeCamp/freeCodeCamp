import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TState, type TInstantiateType } from '../instantiate.mjs';
import { type TEvaluateType } from './evaluate.mjs';
export type TEvaluateAction<Type extends TSchema, Result extends TSchema = TEvaluateType<Type>> = Result;
export declare function EvaluateAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TEvaluateAction<Type>;
export type TEvaluateInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TEvaluateAction<InstantiatedType>;
export declare function EvaluateInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TEvaluateInstantiate<Context, State, Type>;
