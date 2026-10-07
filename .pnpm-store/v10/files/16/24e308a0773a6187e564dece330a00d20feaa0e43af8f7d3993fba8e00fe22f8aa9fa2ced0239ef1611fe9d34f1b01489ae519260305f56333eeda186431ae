import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TIntersectOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
export type StaticIntersect<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Types extends TSchema[], Result extends unknown = unknown> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? StaticIntersect<Stack, Direction, Context, This, Right, Result & StaticType<Stack, Direction, Context, This, Left>> : Result);
/** Represents a logical Intersect type. */
export interface TIntersect<Types extends TSchema[] = TSchema[]> extends TSchema {
    '~kind': 'Intersect';
    allOf: Types;
}
/** Creates a Intersect type. */
export declare function Intersect<Types extends TSchema[]>(types: [...Types], options?: TIntersectOptions): TIntersect<Types>;
/** Returns true if the given value is TIntersect. */
export declare function IsIntersect(value: unknown): value is TIntersect;
/** Extracts options from a TIntersect. */
export declare function IntersectOptions(type: TIntersect): TIntersectOptions;
