import { type StaticDirection } from './static.mjs';
import { type TSchema, type TObjectOptions } from './schema.mjs';
import { type TProperties, type TRequiredArray, type StaticProperties } from './properties.mjs';
export type StaticObject<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, _This extends TProperties, Properties extends TProperties, Result = keyof Properties extends never ? object : StaticProperties<Stack, Direction, Context, Properties, Properties>> = Result;
/** Represents an Object type. */
export interface TObject<Properties extends TProperties = TProperties> extends TSchema {
    '~kind': 'Object';
    type: 'object';
    properties: Properties;
    required: TRequiredArray<Properties>;
}
/** Creates an Object type. */
export declare function _Object_<Properties extends TProperties>(properties: Properties, options?: TObjectOptions): TObject<Properties>;
export { _Object_ as Object };
/** Returns true if the given value is TObject. */
export declare function IsObject(value: unknown): value is TObject;
/** Extracts options from a TObject. */
export declare function ObjectOptions(type: TObject): TObjectOptions;
