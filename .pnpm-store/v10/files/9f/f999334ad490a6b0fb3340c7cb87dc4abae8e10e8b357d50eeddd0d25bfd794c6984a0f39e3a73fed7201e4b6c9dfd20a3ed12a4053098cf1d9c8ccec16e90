export interface TSchema {
}
export declare function IsKind<Kind extends string>(value: unknown, kind: Kind): value is {
    ['~kind']: Kind;
};
export declare function IsSchema(value: unknown): value is TSchema;
export interface TSchemaOptions {
    /**
     * Allows for additional, unlisted properties to be included, typically for extensibility.
     */
    [key: PropertyKey]: unknown;
    /**
     * Specifies the URI of a JSON Schema that the current schema adheres to.
     */
    $schema?: string;
    /**
     * A URI that serves as a unique identifier for the schema.
     */
    $id?: string;
    /**
     * A short explanation about the purpose of the data described by the schema.
     */
    title?: string;
    /**
     * A detailed explanation of the data described by the schema.
     */
    description?: string;
    /**
     * A default value for the data, used when no value is provided.
     */
    default?: unknown;
    /**
     * Provides one or more examples of valid data conforming to the schema.
     */
    examples?: unknown;
    /**
     * Indicates that the data should only be readable and not modified.
     */
    readOnly?: boolean;
    /**
     * Indicates that the data should only be writable and not read back.
     */
    writeOnly?: boolean;
    /**
     * A schema to apply conditionally: if the data validates against this schema, 'then' applies.
     */
    if?: TSchema;
    /**
     * A schema to apply if the data validates against the 'if' schema.
     */
    then?: TSchema;
    /**
     * A schema to apply if the data does not validate against the 'if' schema.
     */
    else?: TSchema;
}
export interface TObjectOptions extends TSchemaOptions {
    /**
     * Defines whether additional properties are allowed beyond those explicitly defined in `properties`.
     */
    additionalProperties?: TSchema | boolean;
    /**
     * The minimum number of properties required in the object.
     */
    minProperties?: number;
    /**
     * The maximum number of properties allowed in the object.
     */
    maxProperties?: number;
    /**
     * Defines conditional requirements for properties.
     */
    dependencies?: Record<string, boolean | TSchema | string[]>;
    /**
     * Specifies properties that *must* be present if a given property is present.
     */
    dependentRequired?: Record<string, string[]>;
    /**
     * Defines schemas that apply if a specific property is present.
     */
    dependentSchemas?: Record<string, TSchema>;
    /**
     * Maps regular expressions to schemas properties matching a pattern must validate against the schema.
     */
    patternProperties?: Record<string, TSchema>;
    /**
     * A schema that all property names within the object must validate against.
     */
    propertyNames?: TSchema;
}
export interface TArrayOptions extends TSchemaOptions {
    /**
     * The minimum number of items allowed in the array.
     */
    minItems?: number;
    /**
     * The maximum number of items allowed in the array.
     */
    maxItems?: number;
    /**
     * A schema that at least one item in the array must validate against.
     */
    contains?: TSchema;
    /**
     * The minimum number of array items that must validate against the `contains` schema.
     */
    minContains?: number;
    /**
     * The maximum number of array items that may validate against the `contains` schema.
     */
    maxContains?: number;
    /**
     * An array of schemas, where each schema in `prefixItems` validates against items at corresponding positions from the beginning of the array.
     */
    prefixItems?: TSchema[];
    /**
     * If `true`, all items in the array must be unique.
     */
    uniqueItems?: boolean;
}
export interface TTupleOptions extends TArrayOptions {
    /**
     * A schema to apply to any items in the array that were not validated by `prefixItems` or `items`. If `false`, no additional items are allowed.
     */
    unevaluatedItems?: TSchema | boolean;
}
export interface TIntersectOptions extends TSchemaOptions {
    /**
     * A schema to apply to any properties in the object that were not validated by other keywords like `properties`, `patternProperties`, or `additionalProperties`. If `false`, no additional properties are allowed.
     */
    unevaluatedProperties?: TSchema | boolean;
}
export interface TNumberOptions extends TSchemaOptions {
    /**
     * Specifies an exclusive upper limit for the number (number must be less than this value).
     */
    exclusiveMaximum?: number | bigint;
    /**
     * Specifies an exclusive lower limit for the number (number must be greater than this value).
     */
    exclusiveMinimum?: number | bigint;
    /**
     * Specifies an inclusive upper limit for the number (number must be less than or equal to this value).
     */
    maximum?: number | bigint;
    /**
     * Specifies an inclusive lower limit for the number (number must be greater than or equal to this value).
     */
    minimum?: number | bigint;
    /**
     * Specifies that the number must be a multiple of this value.
     */
    multipleOf?: number | bigint;
}
export type TFormat = 'date-time' | 'date' | 'duration' | 'email' | 'hostname' | 'idn-email' | 'idn-hostname' | 'ipv4' | 'ipv6' | 'iri-reference' | 'iri' | 'json-pointer-uri-fragment' | 'json-pointer' | 'json-string' | 'regex' | 'relative-json-pointer' | 'time' | 'uri-reference' | 'uri-template' | 'uri' | 'url' | 'uuid' | ({} & string);
export interface TStringOptions extends TSchemaOptions {
    /**
     * Specifies the expected string format. May also be a custom format string.
     */
    format?: TFormat;
    /**
     * Specifies the minimum number of characters allowed in the string.
     * Must be a non-negative integer.
     */
    minLength?: number;
    /**
     * Specifies the maximum number of characters allowed in the string.
     * Must be a non-negative integer.
     */
    maxLength?: number;
    /**
     * Specifies a regular expression pattern that the string value must match.
     * Can be provided as a string (ECMA-262 regex syntax) or a `RegExp` object.
     */
    pattern?: string | RegExp;
}
