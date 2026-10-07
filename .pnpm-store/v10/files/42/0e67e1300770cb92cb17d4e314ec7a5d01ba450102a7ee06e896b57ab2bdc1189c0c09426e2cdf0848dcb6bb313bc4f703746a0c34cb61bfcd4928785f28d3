import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type StaticInstantiatedParameters } from './function.mjs';
import { type TProperties } from './properties.mjs';
export type StaticConstructor<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Parameters extends TSchema[], InstanceType extends TSchema, StaticParameters extends unknown[] = StaticInstantiatedParameters<Stack, Direction, Context, This, Parameters>, StaticReturnType extends unknown = StaticType<Stack, Direction, Context, This, InstanceType>, Result = new (...args: StaticParameters) => StaticReturnType> = Result;
/** Represents a Constructor type. */
export interface TConstructor<Parameters extends TSchema[] = TSchema[], InstanceType extends TSchema = TSchema> extends TSchema {
    '~kind': 'Constructor';
    type: 'constructor';
    parameters: Parameters;
    instanceType: InstanceType;
}
/** Creates a Constructor type. */
export declare function Constructor<Parameters extends TSchema[], InstanceType extends TSchema>(parameters: [...Parameters], instanceType: InstanceType, options?: TSchemaOptions): TConstructor<Parameters, InstanceType>;
/** Returns true if the given value is a TConstructor. */
export declare function IsConstructor(value: unknown): value is TConstructor;
/** Extracts options from a TConstructor. */
export declare function ConstructorOptions(type: TConstructor): TSchemaOptions;
