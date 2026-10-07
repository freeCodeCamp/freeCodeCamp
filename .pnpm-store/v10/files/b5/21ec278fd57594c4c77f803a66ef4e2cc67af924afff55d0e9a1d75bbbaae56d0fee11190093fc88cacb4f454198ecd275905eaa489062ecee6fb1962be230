import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
export type StaticUnion<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Types extends TSchema[], Result extends unknown = never> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? StaticUnion<Stack, Direction, Context, This, Right, Result | StaticType<Stack, Direction, Context, This, Left>> : Result);
/** Represents a logical Union type. */
export interface TUnion<Types extends TSchema[] = TSchema[]> extends TSchema {
    '~kind': 'Union';
    anyOf: Types;
}
/** Creates a Union type. */
export declare function Union<Types extends TSchema[]>(anyOf: [...Types], options?: TSchemaOptions): TUnion<Types>;
/** Returns true if the given value is TUnion. */
export declare function IsUnion(value: unknown): value is TUnion;
/** Extracts options from a TUnion. */
export declare function UnionOptions(type: TUnion): TSchemaOptions;
