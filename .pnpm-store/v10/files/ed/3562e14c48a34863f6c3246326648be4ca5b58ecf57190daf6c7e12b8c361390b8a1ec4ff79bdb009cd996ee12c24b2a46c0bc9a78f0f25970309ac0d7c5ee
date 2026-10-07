import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
export type StaticPromise<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Type extends TSchema, Result = Promise<StaticType<Stack, Direction, Context, This, Type>>> = Result;
/** Represents a Promise type. */
export interface TPromise<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'Promise';
    type: 'promise';
    item: Type;
}
/**
 * Creates a Promise type.
 *
 * @deprecated This type is being removed in the next version of TypeBox. A fallback will be provided under examples.
 */
export declare function _Promise_<Type extends TSchema>(item: Type, options?: TSchemaOptions): TPromise<Type>;
export { _Promise_ as Promise };
/** Returns true if the given type is TPromise. */
export declare function IsPromise(value: unknown): value is TPromise;
/** Extracts options from a TPromise. */
export declare function PromiseOptions(type: TPromise): TSchemaOptions;
