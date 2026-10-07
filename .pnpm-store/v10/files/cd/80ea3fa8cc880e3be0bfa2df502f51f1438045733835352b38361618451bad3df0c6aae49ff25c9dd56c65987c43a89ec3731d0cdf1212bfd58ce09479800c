import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
export type StaticIterator<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Type extends TSchema, Result = IterableIterator<StaticType<Stack, Direction, Context, This, Type>>> = Result;
/** Represents an Iterator. */
export interface TIterator<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'Iterator';
    type: 'iterator';
    iteratorItems: Type;
}
/**
 * Creates a Iterator type.
 *
 * @deprecated This type is being removed in the next version of TypeBox. A fallback will be provided under examples.
 */
export declare function Iterator<Type extends TSchema>(iteratorItems: Type, options?: TSchemaOptions): TIterator<Type>;
/** Returns true if the given value is TIterator. */
export declare function IsIterator(value: unknown): value is TIterator;
/** Extracts options from a TIterator. */
export declare function IteratorOptions(type: TIterator): TSchemaOptions;
