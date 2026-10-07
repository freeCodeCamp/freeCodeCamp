import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TTypeScriptEnumLike } from '../engine/enum/typescript_enum_to_enum_values.mjs';
import { type TTypeScriptEnumToEnumValues } from '../engine/enum/typescript_enum_to_enum_values.mjs';
export type StaticEnum<Values extends TEnumValue[]> = (Values[number]);
export type TEnumValue = string | number | null;
/** Represents an Enum type. */
export interface TEnum<Values extends TEnumValue[] = TEnumValue[]> extends TSchema {
    '~kind': 'Enum';
    enum: Values;
}
/** Creates an Enum type. */
export declare function Enum<Values extends TEnumValue[]>(values: readonly [...Values], options?: TSchemaOptions): TEnum<Values>;
/** Creates an Enum type from a TypeScript enum declaration. */
export declare function Enum<Enum extends TTypeScriptEnumLike>(value: Enum, options?: TSchemaOptions): TEnum<TTypeScriptEnumToEnumValues<Enum>>;
/** Returns true if the given value is a TEnum. */
export declare function IsEnum(value: unknown): value is TEnum;
