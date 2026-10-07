import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
export type StaticAsyncIterator<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Type extends TSchema, Result = AsyncIterableIterator<StaticType<Stack, Direction, Context, This, Type>>> = Result;
/** Represents a AsyncIterator. */
export interface TAsyncIterator<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'AsyncIterator';
    type: 'asyncIterator';
    iteratorItems: Type;
}
/**
 * Creates a AsyncIterator type.
 *
 * @deprecated This type is being removed in the next version of TypeBox. A fallback will be provided under examples.
 */
export declare function AsyncIterator<Type extends TSchema>(iteratorItems: Type, options?: TSchemaOptions): TAsyncIterator<Type>;
/** Returns true if the given value is a TAsyncIterator */
export declare function IsAsyncIterator(value: unknown): value is TAsyncIterator;
/** Extracts options from a TAsyncIterator. */
export declare function AsyncIteratorOptions(type: TAsyncIterator): TSchemaOptions;
