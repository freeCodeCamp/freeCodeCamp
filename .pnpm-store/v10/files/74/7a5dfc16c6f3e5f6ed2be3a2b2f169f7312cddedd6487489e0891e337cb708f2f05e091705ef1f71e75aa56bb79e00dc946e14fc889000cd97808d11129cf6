// ==================================================================================================
// JSON Schema Draft 04
// ==================================================================================================

/**
 * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
 */
export type JSONSchema4TypeName =
    | "string" //
    | "number"
    | "integer"
    | "boolean"
    | "object"
    | "array"
    | "null"
    | "any";

/**
 * @see https://tools.ietf.org/html/draft-zyp-json-schema-04#section-3.5
 */
export type JSONSchema4Type =
    | string //
    | number
    | boolean
    | JSONSchema4Object
    | JSONSchema4Array
    | null;

// Workaround for infinite type recursion
export interface JSONSchema4Object {
    [key: string]: JSONSchema4Type;
}

// Workaround for infinite type recursion
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface JSONSchema4Array extends Array<JSONSchema4Type> {}

/**
 * Meta schema
 *
 * Recommended values:
 * - 'http://json-schema.org/schema#'
 * - 'http://json-schema.org/hyper-schema#'
 * - 'http://json-schema.org/draft-04/schema#'
 * - 'http://json-schema.org/draft-04/hyper-schema#'
 * - 'http://json-schema.org/draft-03/schema#'
 * - 'http://json-schema.org/draft-03/hyper-schema#'
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-5
 */
export type JSONSchema4Version = string;

/**
 * JSON Schema V4
 * @see https://tools.ietf.org/html/draft-zyp-json-schema-04
 */
export interface JSONSchema4 {
    id?: string | undefined;
    $ref?: string | undefined;
    $schema?: JSONSchema4Version | undefined;

    /**
     * This attribute is a string that provides a short description of the
     * instance property.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.21
     */
    title?: string | undefined;

    /**
     * This attribute is a string that provides a full description of the of
     * purpose the instance property.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.22
     */
    description?: string | undefined;

    default?: JSONSchema4Type | undefined;
    multipleOf?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: boolean | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: boolean | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;

    /**
     * May only be defined when "items" is defined, and is a tuple of JSONSchemas.
     *
     * This provides a definition for additional items in an array instance
     * when tuple definitions of the items is provided.  This can be false
     * to indicate additional items in the array are not allowed, or it can
     * be a schema that defines the schema of the additional items.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.6
     */
    additionalItems?: boolean | JSONSchema4 | undefined;

    /**
     * This attribute defines the allowed items in an instance array, and
     * MUST be a schema or an array of schemas.  The default value is an
     * empty schema which allows any value for items in the instance array.
     *
     * When this attribute value is a schema and the instance value is an
     * array, then all the items in the array MUST be valid according to the
     * schema.
     *
     * When this attribute value is an array of schemas and the instance
     * value is an array, each position in the instance array MUST conform
     * to the schema in the corresponding position for this array.  This
     * called tuple typing.  When tuple typing is used, additional items are
     * allowed, disallowed, or constrained by the "additionalItems"
     * (Section 5.6) attribute using the same rules as
     * "additionalProperties" (Section 5.4) for objects.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.5
     */
    items?: JSONSchema4 | JSONSchema4[] | undefined;

    maxItems?: number | undefined;
    minItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    maxProperties?: number | undefined;
    minProperties?: number | undefined;

    /**
     * This attribute indicates if the instance must have a value, and not
     * be undefined. This is false by default, making the instance
     * optional.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.7
     */
    required?: boolean | string[] | undefined;

    /**
     * This attribute defines a schema for all properties that are not
     * explicitly defined in an object type definition. If specified, the
     * value MUST be a schema or a boolean. If false is provided, no
     * additional properties are allowed beyond the properties defined in
     * the schema. The default value is an empty schema which allows any
     * value for additional properties.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.4
     */
    additionalProperties?: boolean | JSONSchema4 | undefined;

    definitions?: {
        [k: string]: JSONSchema4;
    } | undefined;

    /**
     * This attribute is an object with property definitions that define the
     * valid values of instance object property values. When the instance
     * value is an object, the property values of the instance object MUST
     * conform to the property definitions in this object. In this object,
     * each property definition's value MUST be a schema, and the property's
     * name MUST be the name of the instance property that it defines.  The
     * instance property value MUST be valid according to the schema from
     * the property definition. Properties are considered unordered, the
     * order of the instance properties MAY be in any order.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.2
     */
    properties?: {
        [k: string]: JSONSchema4;
    } | undefined;

    /**
     * This attribute is an object that defines the schema for a set of
     * property names of an object instance. The name of each property of
     * this attribute's object is a regular expression pattern in the ECMA
     * 262/Perl 5 format, while the value is a schema. If the pattern
     * matches the name of a property on the instance object, the value of
     * the instance's property MUST be valid against the pattern name's
     * schema value.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.3
     */
    patternProperties?: {
        [k: string]: JSONSchema4;
    } | undefined;
    dependencies?: {
        [k: string]: JSONSchema4 | string[];
    } | undefined;

    /**
     * This provides an enumeration of all possible values that are valid
     * for the instance property. This MUST be an array, and each item in
     * the array represents a possible value for the instance value. If
     * this attribute is defined, the instance value MUST be one of the
     * values in the array in order for the schema to be valid.
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.19
     */
    enum?: JSONSchema4Type[] | undefined;

    /**
     * A single type, or a union of simple types
     */
    type?: JSONSchema4TypeName | JSONSchema4TypeName[] | undefined;

    allOf?: JSONSchema4[] | undefined;
    anyOf?: JSONSchema4[] | undefined;
    oneOf?: JSONSchema4[] | undefined;
    not?: JSONSchema4 | undefined;

    /**
     * The value of this property MUST be another schema which will provide
     * a base schema which the current schema will inherit from.  The
     * inheritance rules are such that any instance that is valid according
     * to the current schema MUST be valid according to the referenced
     * schema.  This MAY also be an array, in which case, the instance MUST
     * be valid for all the schemas in the array.  A schema that extends
     * another schema MAY define additional attributes, constrain existing
     * attributes, or add other constraints.
     *
     * Conceptually, the behavior of extends can be seen as validating an
     * instance against all constraints in the extending schema as well as
     * the extended schema(s).
     *
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.26
     */
    extends?: string | string[] | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-zyp-json-schema-04#section-5.6
     */
    [k: string]: any;

    format?: string | undefined;
}

// ==================================================================================================
// JSON Schema Draft 06
// ==================================================================================================

export type JSONSchema6TypeName =
    | "string" //
    | "number"
    | "integer"
    | "boolean"
    | "object"
    | "array"
    | "null"
    | "any";

export type JSONSchema6Type =
    | string //
    | number
    | boolean
    | JSONSchema6Object
    | JSONSchema6Array
    | null;

// Workaround for infinite type recursion
export interface JSONSchema6Object {
    [key: string]: JSONSchema6Type;
}

// Workaround for infinite type recursion
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface JSONSchema6Array extends Array<JSONSchema6Type> {}

/**
 * Meta schema
 *
 * Recommended values:
 * - 'http://json-schema.org/schema#'
 * - 'http://json-schema.org/hyper-schema#'
 * - 'http://json-schema.org/draft-06/schema#'
 * - 'http://json-schema.org/draft-06/hyper-schema#'
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-5
 */
export type JSONSchema6Version = string;

/**
 * JSON Schema V6
 * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01
 */
export type JSONSchema6Definition = JSONSchema6 | boolean;
export interface JSONSchema6 {
    $id?: string | undefined;
    $ref?: string | undefined;
    $schema?: JSONSchema6Version | undefined;

    /**
     * Must be strictly greater than 0.
     * A numeric instance is valid only if division by this keyword's value results in an integer.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.1
     */
    multipleOf?: number | undefined;

    /**
     * Representing an inclusive upper limit for a numeric instance.
     * This keyword validates only if the instance is less than or exactly equal to "maximum".
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.2
     */
    maximum?: number | undefined;

    /**
     * Representing an exclusive upper limit for a numeric instance.
     * This keyword validates only if the instance is strictly less than (not equal to) to "exclusiveMaximum".
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.3
     */
    exclusiveMaximum?: number | undefined;

    /**
     * Representing an inclusive lower limit for a numeric instance.
     * This keyword validates only if the instance is greater than or exactly equal to "minimum".
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.4
     */
    minimum?: number | undefined;

    /**
     * Representing an exclusive lower limit for a numeric instance.
     * This keyword validates only if the instance is strictly greater than (not equal to) to "exclusiveMinimum".
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.5
     */
    exclusiveMinimum?: number | undefined;

    /**
     * Must be a non-negative integer.
     * A string instance is valid against this keyword if its length is less than, or equal to, the value of this keyword.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.6
     */
    maxLength?: number | undefined;

    /**
     * Must be a non-negative integer.
     * A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.
     * Omitting this keyword has the same behavior as a value of 0.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.7
     */
    minLength?: number | undefined;

    /**
     * Should be a valid regular expression, according to the ECMA 262 regular expression dialect.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.8
     */
    pattern?: string | undefined;

    /**
     * This keyword determines how child instances validate for arrays, and does not directly validate the immediate instance itself.
     * Omitting this keyword has the same behavior as an empty schema.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.9
     */
    items?: JSONSchema6Definition | JSONSchema6Definition[] | undefined;

    /**
     * This keyword determines how child instances validate for arrays, and does not directly validate the immediate instance itself.
     * If "items" is an array of schemas, validation succeeds if every instance element
     * at a position greater than the size of "items" validates against "additionalItems".
     * Otherwise, "additionalItems" MUST be ignored, as the "items" schema
     * (possibly the default value of an empty schema) is applied to all elements.
     * Omitting this keyword has the same behavior as an empty schema.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.10
     */
    additionalItems?: JSONSchema6Definition | undefined;

    /**
     * Must be a non-negative integer.
     * An array instance is valid against "maxItems" if its size is less than, or equal to, the value of this keyword.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.11
     */
    maxItems?: number | undefined;

    /**
     * Must be a non-negative integer.
     * An array instance is valid against "maxItems" if its size is greater than, or equal to, the value of this keyword.
     * Omitting this keyword has the same behavior as a value of 0.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.12
     */
    minItems?: number | undefined;

    /**
     * If this keyword has boolean value false, the instance validates successfully.
     * If it has boolean value true, the instance validates successfully if all of its elements are unique.
     * Omitting this keyword has the same behavior as a value of false.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.13
     */
    uniqueItems?: boolean | undefined;

    /**
     * An array instance is valid against "contains" if at least one of its elements is valid against the given schema.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.14
     */
    contains?: JSONSchema6Definition | undefined;

    /**
     * Must be a non-negative integer.
     * An object instance is valid against "maxProperties" if its number of properties is less than, or equal to, the value of this keyword.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.15
     */
    maxProperties?: number | undefined;

    /**
     * Must be a non-negative integer.
     * An object instance is valid against "maxProperties" if its number of properties is greater than,
     * or equal to, the value of this keyword.
     * Omitting this keyword has the same behavior as a value of 0.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.16
     */
    minProperties?: number | undefined;

    /**
     * Elements of this array must be unique.
     * An object instance is valid against this keyword if every item in the array is the name of a property in the instance.
     * Omitting this keyword has the same behavior as an empty array.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.17
     */
    required?: string[] | undefined;

    /**
     * This keyword determines how child instances validate for objects, and does not directly validate the immediate instance itself.
     * Validation succeeds if, for each name that appears in both the instance and as a name within this keyword's value,
     * the child instance for that name successfully validates against the corresponding schema.
     * Omitting this keyword has the same behavior as an empty object.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.18
     */
    properties?: {
        [k: string]: JSONSchema6Definition;
    } | undefined;

    /**
     * This attribute is an object that defines the schema for a set of property names of an object instance.
     * The name of each property of this attribute's object is a regular expression pattern in the ECMA 262, while the value is a schema.
     * If the pattern matches the name of a property on the instance object, the value of the instance's property
     * MUST be valid against the pattern name's schema value.
     * Omitting this keyword has the same behavior as an empty object.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.19
     */
    patternProperties?: {
        [k: string]: JSONSchema6Definition;
    } | undefined;

    /**
     * This attribute defines a schema for all properties that are not explicitly defined in an object type definition.
     * If specified, the value MUST be a schema or a boolean.
     * If false is provided, no additional properties are allowed beyond the properties defined in the schema.
     * The default value is an empty schema which allows any value for additional properties.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.20
     */
    additionalProperties?: JSONSchema6Definition | undefined;

    /**
     * This keyword specifies rules that are evaluated if the instance is an object and contains a certain property.
     * Each property specifies a dependency.
     * If the dependency value is an array, each element in the array must be unique.
     * Omitting this keyword has the same behavior as an empty object.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.21
     */
    dependencies?: {
        [k: string]: JSONSchema6Definition | string[];
    } | undefined;

    /**
     * Takes a schema which validates the names of all properties rather than their values.
     * Note the property name that the schema is testing will always be a string.
     * Omitting this keyword has the same behavior as an empty schema.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.22
     */
    propertyNames?: JSONSchema6Definition | undefined;

    /**
     * This provides an enumeration of all possible values that are valid
     * for the instance property. This MUST be an array, and each item in
     * the array represents a possible value for the instance value. If
     * this attribute is defined, the instance value MUST be one of the
     * values in the array in order for the schema to be valid.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.23
     */
    enum?: JSONSchema6Type[] | undefined;

    /**
     * More readable form of a one-element "enum"
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.24
     */
    const?: JSONSchema6Type | undefined;

    /**
     * A single type, or a union of simple types
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.25
     */
    type?: JSONSchema6TypeName | JSONSchema6TypeName[] | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.26
     */
    allOf?: JSONSchema6Definition[] | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.27
     */
    anyOf?: JSONSchema6Definition[] | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.28
     */
    oneOf?: JSONSchema6Definition[] | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.29
     */
    not?: JSONSchema6Definition | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.1
     */
    definitions?: {
        [k: string]: JSONSchema6Definition;
    } | undefined;

    /**
     * This attribute is a string that provides a short description of the instance property.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.2
     */
    title?: string | undefined;

    /**
     * This attribute is a string that provides a full description of the of purpose the instance property.
     *
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.2
     */
    description?: string | undefined;

    /**
     * This keyword can be used to supply a default JSON value associated with a particular schema.
     * It is RECOMMENDED that a default value be valid against the associated schema.
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.3
     */
    default?: JSONSchema6Type | undefined;

    /**
     * Array of examples with no validation effect the value of "default" is usable as an example without repeating it under this keyword
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.4
     */
    examples?: JSONSchema6Type[] | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-8
     */
    format?: string | undefined;
}

// ==================================================================================================
// JSON Schema Draft 07
// ==================================================================================================
// https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
// --------------------------------------------------------------------------------------------------

/**
 * Primitive type
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1
 */
export type JSONSchema7TypeName =
    | "string" //
    | "number"
    | "integer"
    | "boolean"
    | "object"
    | "array"
    | "null";

/**
 * Primitive type
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1
 */
export type JSONSchema7Type =
    | string //
    | number
    | boolean
    | JSONSchema7Object
    | JSONSchema7Array
    | null;

// Workaround for infinite type recursion
export interface JSONSchema7Object {
    [key: string]: JSONSchema7Type;
}

// Workaround for infinite type recursion
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface JSONSchema7Array extends Array<JSONSchema7Type> {}

/**
 * Meta schema
 *
 * Recommended values:
 * - 'http://json-schema.org/schema#'
 * - 'http://json-schema.org/hyper-schema#'
 * - 'http://json-schema.org/draft-07/schema#'
 * - 'http://json-schema.org/draft-07/hyper-schema#'
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-5
 */
export type JSONSchema7Version = string;

/**
 * JSON Schema v7
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
 */
export type JSONSchema7Definition = JSONSchema7 | boolean;
export interface JSONSchema7 {
    $id?: string | undefined;
    $ref?: string | undefined;
    $schema?: JSONSchema7Version | undefined;
    $comment?: string | undefined;

    /**
     * @see https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
     * @see https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#appendix-A
     */
    $defs?: {
        [key: string]: JSONSchema7Definition;
    } | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1
     */
    type?: JSONSchema7TypeName | JSONSchema7TypeName[] | undefined;
    enum?: JSONSchema7Type[] | undefined;
    const?: JSONSchema7Type | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2
     */
    multipleOf?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3
     */
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4
     */
    items?: JSONSchema7Definition | JSONSchema7Definition[] | undefined;
    additionalItems?: JSONSchema7Definition | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    contains?: JSONSchema7Definition | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5
     */
    maxProperties?: number | undefined;
    minProperties?: number | undefined;
    required?: string[] | undefined;
    properties?: {
        [key: string]: JSONSchema7Definition;
    } | undefined;
    patternProperties?: {
        [key: string]: JSONSchema7Definition;
    } | undefined;
    additionalProperties?: JSONSchema7Definition | undefined;
    dependencies?: {
        [key: string]: JSONSchema7Definition | string[];
    } | undefined;
    propertyNames?: JSONSchema7Definition | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6
     */
    if?: JSONSchema7Definition | undefined;
    then?: JSONSchema7Definition | undefined;
    else?: JSONSchema7Definition | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7
     */
    allOf?: JSONSchema7Definition[] | undefined;
    anyOf?: JSONSchema7Definition[] | undefined;
    oneOf?: JSONSchema7Definition[] | undefined;
    not?: JSONSchema7Definition | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7
     */
    format?: string | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-8
     */
    contentMediaType?: string | undefined;
    contentEncoding?: string | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-9
     */
    definitions?: {
        [key: string]: JSONSchema7Definition;
    } | undefined;

    /**
     * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10
     */
    title?: string | undefined;
    description?: string | undefined;
    default?: JSONSchema7Type | undefined;
    readOnly?: boolean | undefined;
    writeOnly?: boolean | undefined;
    examples?: JSONSchema7Type | undefined;
}

export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
}

export interface ValidationError {
    property: string;
    message: string;
}

/**
 * To use the validator call JSONSchema.validate with an instance object and an optional schema object.
 * If a schema is provided, it will be used to validate. If the instance object refers to a schema (self-validating),
 * that schema will be used to validate and the schema parameter is not necessary (if both exist,
 * both validations will occur).
 */
export function validate(instance: {}, schema: JSONSchema4 | JSONSchema6 | JSONSchema7): ValidationResult;

/**
 * The checkPropertyChange method will check to see if an value can legally be in property with the given schema
 * This is slightly different than the validate method in that it will fail if the schema is readonly and it will
 * not check for self-validation, it is assumed that the passed in value is already internally valid.
 */
export function checkPropertyChange(
    value: any,
    schema: JSONSchema4 | JSONSchema6 | JSONSchema7,
    property: string,
): ValidationResult;

/**
 * This checks to ensure that the result is valid and will throw an appropriate error message if it is not.
 */
export function mustBeValid(result: ValidationResult): void;
