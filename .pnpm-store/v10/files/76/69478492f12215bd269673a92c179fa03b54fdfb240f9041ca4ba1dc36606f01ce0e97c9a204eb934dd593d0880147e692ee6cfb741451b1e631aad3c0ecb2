import { Memory } from '../../../system/memory/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TParameter } from '../../types/parameter.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TState, type TInstantiateType } from '../instantiate.mjs';
type TBindArgument<Context extends TProperties, State extends TState, Name extends string, Extends extends TSchema, Type extends TSchema, InstantiatedArgument extends TSchema = TInstantiateType<Context, State, Type>> = Memory.TAssign<Context, {
    [_ in Name]: InstantiatedArgument;
}>;
type TBindArguments<Context extends TProperties, State extends TState, ParameterLeft extends TParameter, ParameterRight extends TParameter[], Arguments extends TSchema[], InstantiatedExtends extends TSchema = TInstantiateType<Context, State, ParameterLeft['extends']>, InstantiatedEquals extends TSchema = TInstantiateType<Context, State, ParameterLeft['equals']>> = (Arguments extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TBindParameters<TBindArgument<Context, State, ParameterLeft['name'], InstantiatedExtends, Left>, State, ParameterRight, Right> : TBindParameters<TBindArgument<Context, State, ParameterLeft['name'], InstantiatedExtends, InstantiatedEquals>, State, ParameterRight, []>);
type TBindParameters<Context extends TProperties, State extends TState, Parameters extends TParameter[], Arguments extends TSchema[]> = (Parameters extends [infer Left extends TParameter, ...infer Right extends TParameter[]] ? TBindArguments<Context, State, Left, Right, Arguments> : Context);
export type TResolveArgumentsContext<Context extends TProperties, State extends TState, Parameters extends TParameter[], Arguments extends TSchema[], Result extends TProperties = TBindParameters<Context, State, Parameters, Arguments>> = Result;
export declare function ResolveArgumentsContext<Context extends TProperties, State extends TState, Parameters extends TParameter[], Arguments extends TSchema[]>(context: Context, state: State, parameters: [...Parameters], arguments_: [...Arguments]): TResolveArgumentsContext<Context, State, Parameters, Arguments>;
export {};
