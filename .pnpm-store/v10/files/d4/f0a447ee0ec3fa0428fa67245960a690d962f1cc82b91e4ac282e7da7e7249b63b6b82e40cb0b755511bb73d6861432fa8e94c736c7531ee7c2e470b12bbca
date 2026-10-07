import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TFunction } from '../../types/function.mjs';
import { type TTuple } from '../../types/tuple.mjs';
import { type TParametersDeferred } from '../../action/parameters.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TInstantiateElements } from '../instantiate.mjs';
type TParametersOperation<Type extends TSchema, Parameters extends TSchema[] = Type extends TFunction ? Type['parameters'] : [], InstantiatedParameters extends TSchema[] = TInstantiateElements<{}, {
    callstack: [];
}, Parameters>, Result extends TSchema = TTuple<InstantiatedParameters>> = Result;
export type TParametersAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TParametersOperation<Type> : TParametersDeferred<Type>> = Result;
export declare function ParametersAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TParametersAction<Type>;
export type TParametersInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TParametersAction<InstantiatedType>;
export declare function ParametersInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TParametersInstantiate<Context, State, Type>;
export {};
