import { DurationUnit, FractionUnit, InformationUnit } from './types/measurement';
export type RawAttributes<T> = T & ValidatedAttributes<T>;
export type RawAttribute<T> = T extends {
    value: any;
} | {
    unit: any;
} ? AttributeObject : T;
export type Attributes = Record<string, TypedAttributeValue>;
export type AttributeValueType = string | number | boolean | Array<string> | Array<number> | Array<boolean>;
type AttributeTypeMap = {
    string: string;
    integer: number;
    double: number;
    boolean: boolean;
    array: Array<string> | Array<number> | Array<boolean>;
};
type AttributeUnion = {
    [K in keyof AttributeTypeMap]: {
        value: AttributeTypeMap[K];
        type: K;
    };
}[keyof AttributeTypeMap];
export type TypedAttributeValue = AttributeUnion & {
    unit?: AttributeUnit;
};
export type AttributeObject = {
    value: unknown;
    unit?: AttributeUnit;
};
type AttributeUnit = DurationUnit | InformationUnit | FractionUnit;
export type ValidatedAttributes<T> = {
    [K in keyof T]: T[K] extends {
        value: any;
    } | {
        unit: any;
    } ? AttributeObject : unknown;
};
/**
 * Type-guard: The attribute object has the shape the official attribute object (value, type, unit).
 * https://develop.sentry.dev/sdk/telemetry/scopes/#setting-attributes
 */
export declare function isAttributeObject(maybeObj: unknown): maybeObj is AttributeObject;
/**
 * Converts an attribute value to a typed attribute value.
 *
 * For now, we support primitive values and arrays, either raw or inside attribute objects.
 * If @param useFallback is true, we stringify other non-primitive values to a string attribute
 * value. Otherwise we return `undefined` for unsupported values.
 *
 * @param value - The value of the passed attribute.
 * @param useFallback - If true, unsupported values will be stringified to a string attribute value.
 *                      Defaults to false. In this case, `undefined` is returned for unsupported values.
 * @returns The typed attribute.
 */
export declare function attributeValueToTypedAttributeValue(rawValue: unknown, useFallback?: boolean | 'skip-undefined'): TypedAttributeValue | void;
/**
 * Serializes raw attributes to typed attributes as expected in our envelopes.
 *
 * @param attributes The raw attributes to serialize.
 * @param fallback   If true, unsupported values will be stringified to a string attribute value.
 *                   Defaults to false. In this case, `undefined` is returned for unsupported values.
 *
 * @returns The serialized attributes.
 */
export declare function serializeAttributes<T>(attributes: RawAttributes<T> | undefined, fallback?: boolean | 'skip-undefined'): Attributes;
/**
 * Estimates the serialized byte size of {@link Attributes},
 * with a couple of heuristics for performance.
 */
export declare function estimateTypedAttributesSizeInBytes(attributes: Attributes | undefined): number;
export {};
//# sourceMappingURL=attributes.d.ts.map
