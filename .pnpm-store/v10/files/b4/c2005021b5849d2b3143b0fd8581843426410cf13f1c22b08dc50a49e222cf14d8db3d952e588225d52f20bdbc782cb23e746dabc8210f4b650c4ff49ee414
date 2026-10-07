import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TObject } from './object.mjs';
import { type TProperties } from './properties.mjs';
export type StaticThis<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties> = (StaticType<Stack, Direction, Context, This, TObject<This>>);
/** Represents a This type. */
export interface TThis extends TSchema {
    '~kind': 'This';
    $ref: '#';
}
/** Creates a This type. */
export declare function This(options?: TSchemaOptions): TThis;
/** Returns true if the given value is TThis. */
export declare function IsThis(value: unknown): value is TThis;
