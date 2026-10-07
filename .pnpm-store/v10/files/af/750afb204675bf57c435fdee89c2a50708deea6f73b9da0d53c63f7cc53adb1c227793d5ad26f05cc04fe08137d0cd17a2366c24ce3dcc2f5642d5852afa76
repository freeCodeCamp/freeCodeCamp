import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
import { type TTuple } from './tuple.mjs';
import { type TInstantiate } from '../engine/instantiate.mjs';
export type StaticInstantiatedParameters<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Parameters extends TSchema[], Evaluated extends TSchema = TInstantiate<Context, TTuple<Parameters>>, Static extends unknown = StaticType<Stack, Direction, Context, This, Evaluated>, Result extends unknown[] = Static extends unknown[] ? Static : []> = Result;
export type StaticFunction<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Parameters extends TSchema[], ReturnType extends TSchema, StaticParameters extends unknown[] = StaticInstantiatedParameters<Stack, Direction, Context, This, Parameters>, StaticReturnType extends unknown = StaticType<Stack, Direction, Context, This, ReturnType>, Result = (...args: StaticParameters) => StaticReturnType> = Result;
/** Represents a Function type. */
export interface TFunction<Parameters extends TSchema[] = TSchema[], ReturnType extends TSchema = TSchema> extends TSchema {
    '~kind': 'Function';
    type: 'function';
    parameters: Parameters;
    returnType: ReturnType;
}
/** Creates a Function type. */
export declare function _Function_<Parameters extends TSchema[], ReturnType extends TSchema>(parameters: [...Parameters], returnType: ReturnType, options?: TSchemaOptions): TFunction<Parameters, ReturnType>;
export { _Function_ as Function };
/** Returns true if the given value is TFunction. */
export declare function IsFunction(value: unknown): value is TFunction;
/** Extracts options from a TFunction. */
export declare function FunctionOptions(type: TFunction): TSchemaOptions;
