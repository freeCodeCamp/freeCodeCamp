/**
 * @since 3.10.0
 */
import type * as Schema from "./Schema.js";
import * as AST from "./SchemaAST.js";
type JsonValue = string | number | boolean | null | Array<JsonValue> | {
    [key: string]: JsonValue;
};
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchemaAnnotations {
    title?: string;
    description?: string;
    default?: JsonValue;
    examples?: Array<JsonValue>;
}
/**
 * @category model
 * @since 3.11.5
 */
export interface JsonSchema7Never extends JsonSchemaAnnotations {
    $id: "/schemas/never";
    not: {};
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Any extends JsonSchemaAnnotations {
    $id: "/schemas/any";
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Unknown extends JsonSchemaAnnotations {
    $id: "/schemas/unknown";
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Void extends JsonSchemaAnnotations {
    $id: "/schemas/void";
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7object extends JsonSchemaAnnotations {
    $id: "/schemas/object";
    anyOf: [
        {
            type: "object";
        },
        {
            type: "array";
        }
    ];
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7empty extends JsonSchemaAnnotations {
    $id: "/schemas/%7B%7D";
    anyOf: [
        {
            type: "object";
        },
        {
            type: "array";
        }
    ];
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Ref extends JsonSchemaAnnotations {
    $ref: string;
}
/**
 * @category model
 * @since 3.11.7
 */
export interface JsonSchema7Null extends JsonSchemaAnnotations {
    type: "null";
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7String extends JsonSchemaAnnotations {
    type: "string";
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;
    contentMediaType?: string;
    allOf?: Array<{
        minLength?: number;
        maxLength?: number;
        pattern?: string;
    }>;
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Numeric extends JsonSchemaAnnotations {
    minimum?: number;
    exclusiveMinimum?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
    allOf?: Array<{
        minimum?: number;
        exclusiveMinimum?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        multipleOf?: number;
    }>;
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Number extends JsonSchema7Numeric {
    type: "number";
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Integer extends JsonSchema7Numeric {
    type: "integer";
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Boolean extends JsonSchemaAnnotations {
    type: "boolean";
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Array extends JsonSchemaAnnotations {
    type: "array";
    items?: JsonSchema7 | Array<JsonSchema7> | false;
    prefixItems?: Array<JsonSchema7>;
    minItems?: number;
    maxItems?: number;
    additionalItems?: JsonSchema7 | boolean;
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Enum extends JsonSchemaAnnotations {
    type?: "string" | "number" | "boolean";
    enum: Array<string | number | boolean>;
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Enums extends JsonSchemaAnnotations {
    $comment: "/schemas/enums";
    anyOf: Array<{
        type: "string" | "number";
        title: string;
        enum: [string | number];
    }>;
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7AnyOf extends JsonSchemaAnnotations {
    anyOf: Array<JsonSchema7>;
}
/**
 * @category model
 * @since 3.10.0
 */
export interface JsonSchema7Object extends JsonSchemaAnnotations {
    type: "object";
    required: Array<string>;
    properties: Record<string, JsonSchema7>;
    additionalProperties?: boolean | JsonSchema7;
    patternProperties?: Record<string, JsonSchema7>;
    propertyNames?: JsonSchema7;
}
/**
 * @category model
 * @since 3.10.0
 */
export type JsonSchema7 = JsonSchema7Never | JsonSchema7Any | JsonSchema7Unknown | JsonSchema7Void | JsonSchema7object | JsonSchema7empty | JsonSchema7Ref | JsonSchema7Null | JsonSchema7String | JsonSchema7Number | JsonSchema7Integer | JsonSchema7Boolean | JsonSchema7Array | JsonSchema7Enum | JsonSchema7Enums | JsonSchema7AnyOf | JsonSchema7Object;
/**
 * @category model
 * @since 3.10.0
 */
export type JsonSchema7Root = JsonSchema7 & {
    $schema?: string;
    $defs?: Record<string, JsonSchema7>;
};
/**
 * Generates a JSON Schema from a schema.
 *
 * **Options**
 *
 * - `target`: The target JSON Schema version. Possible values are:
 *   - `"jsonSchema7"`: JSON Schema draft-07 (default behavior).
 *   - `"jsonSchema2019-09"`: JSON Schema draft-2019-09.
 *   - `"jsonSchema2020-12"`: JSON Schema draft-2020-12.
 *   - `"openApi3.1"`: OpenAPI 3.1.
 *
 * @category encoding
 * @since 3.10.0
 */
export declare const make: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: {
    readonly target?: Target | undefined;
}) => JsonSchema7Root;
type Target = "jsonSchema7" | "jsonSchema2019-09" | "openApi3.1" | "jsonSchema2020-12";
type TopLevelReferenceStrategy = "skip" | "keep";
type AdditionalPropertiesStrategy = "allow" | "strict";
/**
 * Returns a JSON Schema with additional options and definitions.
 *
 * **Warning**
 *
 * This function is experimental and subject to change.
 *
 * **Options**
 *
 * - `definitions`: A record of definitions that are included in the schema.
 * - `definitionPath`: The path to the definitions within the schema (defaults
 *   to "#/$defs/").
 * - `target`: Which spec to target. Possible values are:
 *   - `'jsonSchema7'`: JSON Schema draft-07 (default behavior).
 *   - `'jsonSchema2019-09'`: JSON Schema draft-2019-09.
 *   - `'openApi3.1'`: OpenAPI 3.1.
 * - `topLevelReferenceStrategy`: Controls the handling of the top-level
 *   reference. Possible values are:
 *   - `"keep"`: Keep the top-level reference (default behavior).
 *   - `"skip"`: Skip the top-level reference.
 * - `additionalPropertiesStrategy`: Controls the handling of additional properties. Possible values are:
 *   - `"strict"`: Disallow additional properties (default behavior).
 *   - `"allow"`: Allow additional properties.
 *
 * @category encoding
 * @since 3.11.5
 * @experimental
 */
export declare const fromAST: (ast: AST.AST, options: {
    readonly definitions: Record<string, JsonSchema7>;
    readonly definitionPath?: string | undefined;
    readonly target?: Target | undefined;
    readonly topLevelReferenceStrategy?: TopLevelReferenceStrategy | undefined;
    readonly additionalPropertiesStrategy?: AdditionalPropertiesStrategy | undefined;
}) => JsonSchema7;
export {};
//# sourceMappingURL=JSONSchema.d.ts.map