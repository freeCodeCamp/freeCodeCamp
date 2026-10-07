import { type StaticType, type StaticDirection, type StaticEvaluate } from './static.mjs';
import { type TSchema } from './schema.mjs';
import { type TOptional } from './_optional.mjs';
import { type TReadonly } from './_readonly.mjs';
import { type TUnionToTuple } from '../engine/helpers/union.mjs';
type ReadonlyOptionalKeys<Properties extends TProperties, Result extends PropertyKey = {
    [Key in keyof Properties]: Properties[Key] extends TReadonly<TSchema> ? (Properties[Key] extends TOptional<Properties[Key]> ? Key : never) : never;
}[keyof Properties]> = Result;
type ReadonlyKeys<Properties extends TProperties, Result extends PropertyKey = {
    [Key in keyof Properties]: Properties[Key] extends TReadonly<TSchema> ? (Properties[Key] extends TOptional<Properties[Key]> ? never : Key) : never;
}[keyof Properties]> = Result;
type OptionalKeys<Properties extends TProperties, Result extends PropertyKey = {
    [Key in keyof Properties]: Properties[Key] extends TOptional<TSchema> ? (Properties[Key] extends TReadonly<Properties[Key]> ? never : Key) : never;
}[keyof Properties]> = Result;
type RequiredKeys<Properties extends TProperties, Result extends PropertyKey = keyof Omit<Properties, ReadonlyOptionalKeys<Properties> | ReadonlyKeys<Properties> | OptionalKeys<Properties>>> = Result;
type StaticPropertiesWithModifiers<Properties extends TProperties, PropertiesWithoutModifiers extends Record<PropertyKey, unknown>> = StaticEvaluate<Readonly<Partial<Pick<PropertiesWithoutModifiers, ReadonlyOptionalKeys<Properties>>>> & Readonly<Pick<PropertiesWithoutModifiers, ReadonlyKeys<Properties>>> & Partial<Pick<PropertiesWithoutModifiers, OptionalKeys<Properties>>> & Required<Pick<PropertiesWithoutModifiers, RequiredKeys<Properties>>>>;
type StaticPropertiesWithoutModifiers<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Properties extends TProperties, Result extends Record<PropertyKey, unknown> = {
    [Key in keyof Properties]: StaticType<Stack, Direction, Context, This, Properties[Key]>;
}> = Result;
export type StaticProperties<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Properties extends TProperties, PropertiesWithoutModifiers extends Record<PropertyKey, unknown> = StaticPropertiesWithoutModifiers<Stack, Direction, Context, This, Properties>, PropertiesWithModifiers extends Record<PropertyKey, unknown> = StaticPropertiesWithModifiers<Properties, PropertiesWithoutModifiers>, Result extends Record<PropertyKey, unknown> = {
    [Key in keyof PropertiesWithModifiers]: PropertiesWithModifiers[Key];
}> = Result;
/** Represents a Record<PropertyKey, TSchema> structure. */
export interface TProperties extends TSchema {
    [key: PropertyKey]: TSchema;
}
/** Creates a RequiredArray derived from the given TProperties value. */
export type TRequiredArray<Properties extends TProperties, RequiredProperties extends TProperties = {
    [Key in keyof Properties as Properties[Key] extends TOptional<Properties[Key]> ? never : Key]: Properties[Key];
}, RequiredKeys extends string[] = TUnionToTuple<Extract<keyof RequiredProperties, string>>, Result extends string[] | undefined = RequiredKeys extends [] ? undefined : RequiredKeys> = Result;
/** Creates a RequiredArray derived from the given TProperties value. */
export declare function RequiredArray<Properties extends TProperties>(properties: Properties): TRequiredArray<Properties>;
type TKeyToString<Key extends number | string> = `${Key}`;
/** Extracts a tuple of keys from a TProperties value. */
export type TPropertyKeys<Properties extends TProperties, ExtractKey extends number | string = Extract<keyof Properties, number | string>, StringKey extends string = TKeyToString<ExtractKey>, Result extends string[] = TUnionToTuple<StringKey>> = Result;
/** Extracts a tuple of keys from a TProperties value. */
export declare function PropertyKeys<Properties extends TProperties>(properties: Properties): TPropertyKeys<Properties>;
type TPropertyValuesReduce<Properties extends TProperties, Keys extends string[], Result extends TSchema[] = []> = Keys extends [infer Left extends string, ...infer Right extends string[]] ? Left extends keyof Properties ? TPropertyValuesReduce<Properties, Right, [...Result, Properties[Left]]> : TPropertyValuesReduce<Properties, Right, Result> : Result;
/** Extracts a tuple of property values from a TProperties value. */
export type TPropertyValues<Properties extends TProperties, Keys extends string[] = TPropertyKeys<Properties>, Result extends TSchema[] = TPropertyValuesReduce<Properties, Keys>> = Result;
/** Extracts a tuple of property values from a TProperties value. */
export declare function PropertyValues<Properties extends TProperties>(properties: Properties): TPropertyValues<Properties>;
export {};
