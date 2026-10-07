import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TConstructor } from '../../types/constructor.mjs';
import { type TTuple } from '../../types/tuple.mjs';
import { type TConstructorParametersDeferred } from '../../action/constructor_parameters.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TInstantiateElements } from '../instantiate.mjs';
type TConstructorParametersOperation<Type extends TSchema, Parameters extends TSchema[] = Type extends TConstructor ? Type['parameters'] : [], InstantiatedParameters extends TSchema[] = TInstantiateElements<{}, {
    callstack: [];
}, Parameters>, Result extends TSchema = TTuple<InstantiatedParameters>> = Result;
export type TConstructorParametersAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TConstructorParametersOperation<Type> : TConstructorParametersDeferred<Type>> = Result;
export declare function ConstructorParametersAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TConstructorParametersAction<Type>;
export type TConstructorParametersInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TConstructorParametersAction<InstantiatedType>;
export declare function ConstructorParametersInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TConstructorParametersInstantiate<Context, State, Type>;
export {};
