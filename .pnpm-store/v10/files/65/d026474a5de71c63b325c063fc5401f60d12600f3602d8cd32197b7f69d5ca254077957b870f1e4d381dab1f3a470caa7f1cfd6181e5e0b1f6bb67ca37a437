import type { XSchema } from '../types/schema.mjs';
import type { XRequired } from '../types/required.mjs';
import type { XStaticSchema } from './schema.mjs';
type XIsReadonly<Schema extends XSchema> = (Schema extends {
    readOnly: true;
} ? true : Schema extends {
    '~readonly': true;
} ? true : false);
type XRequiredArray<Schema extends XSchema, Result extends PropertyKey[] = Schema extends XRequired<infer Keys extends string[]> ? Keys : []> = Result;
type XReadonlyKeys<Properties extends Record<PropertyKey, XSchema>, ReadonlyProperties extends Record<PropertyKey, unknown> = {
    [Key in keyof Properties as XIsReadonly<Properties[Key]> extends true ? Key : never]: unknown;
}, Result extends PropertyKey = keyof ReadonlyProperties> = Result;
type XRequiredKeys<Properties extends Record<PropertyKey, XSchema>, RequiredArray extends string[], Result extends PropertyKey = RequiredArray extends [] ? never : Extract<keyof Properties, RequiredArray[number]>> = Result;
type XUnknownKeys<Properties extends Record<PropertyKey, XSchema>, RequiredArray extends string[], Result extends PropertyKey = Exclude<RequiredArray[number], keyof Properties>> = Result;
type XOptionalKeys<Properties extends Record<PropertyKey, XSchema>, RequiredArray extends string[], Result extends PropertyKey = RequiredArray extends [] ? keyof Properties : Exclude<keyof Properties, RequiredArray[number]>> = Result;
type XReadonlyOptionalProperties<Stack extends string[], Root extends XSchema, OptionalKeys extends PropertyKey, Properties extends Record<PropertyKey, XSchema>> = {
    readonly [Key in Extract<keyof Properties, OptionalKeys>]?: XStaticSchema<Stack, Root, Properties[Key]>;
};
type XReadonlyRequiredProperties<Stack extends string[], Root extends XSchema, RequiredKeys extends PropertyKey, Properties extends Record<PropertyKey, XSchema>> = {
    readonly [Key in Extract<keyof Properties, RequiredKeys>]: XStaticSchema<Stack, Root, Properties[Key]>;
};
type XOptionalProperties<Stack extends string[], Root extends XSchema, OptionalKeys extends PropertyKey, Properties extends Record<PropertyKey, XSchema>> = {
    [Key in Extract<keyof Properties, OptionalKeys>]?: XStaticSchema<Stack, Root, Properties[Key]>;
};
type XRequiredProperties<Stack extends string[], Root extends XSchema, RequiredKeys extends PropertyKey, Properties extends Record<PropertyKey, XSchema>> = {
    [Key in Extract<keyof Properties, RequiredKeys>]: XStaticSchema<Stack, Root, Properties[Key]>;
};
type XUnknownProperties<UnknownKeys extends PropertyKey> = {
    [Key in UnknownKeys]: unknown;
};
export type XStaticProperties<Stack extends string[], Root extends XSchema, Schema extends XSchema, Properties extends Record<PropertyKey, XSchema>, RequiredArray extends string[] = XRequiredArray<Schema>, ReadonlyKeys extends PropertyKey = XReadonlyKeys<Properties>, OptionalKeys extends PropertyKey = XOptionalKeys<Properties, RequiredArray>, RequiredKeys extends PropertyKey = XRequiredKeys<Properties, RequiredArray>, UnknownKeys extends PropertyKey = XUnknownKeys<Properties, RequiredArray>, ReadonlyOptionalProperties extends Record<PropertyKey, unknown> = XReadonlyOptionalProperties<Stack, Root, Extract<OptionalKeys, ReadonlyKeys>, Properties>, ReadonlyRequiredProperties extends Record<PropertyKey, unknown> = XReadonlyRequiredProperties<Stack, Root, Extract<RequiredKeys, ReadonlyKeys>, Properties>, OptionalProperties extends Record<PropertyKey, unknown> = XOptionalProperties<Stack, Root, Exclude<OptionalKeys, ReadonlyKeys>, Properties>, RequiredProperties extends Record<PropertyKey, unknown> = XRequiredProperties<Stack, Root, Exclude<RequiredKeys, ReadonlyKeys>, Properties>, UnknownProperties extends Record<PropertyKey, unknown> = XUnknownProperties<UnknownKeys>, Result extends Record<PropertyKey, unknown> = (ReadonlyOptionalProperties & ReadonlyRequiredProperties & OptionalProperties & RequiredProperties & UnknownProperties)> = Result;
export {};
