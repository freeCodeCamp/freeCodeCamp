type JsonSchema = boolean | ArraySchema | ObjectSchema | NumberSchema | StringSchema;
type JsonType = 'array' | 'object' | 'string' | 'number' | 'integer' | 'boolean' | 'null';
interface CommonSchema {
    type?: JsonType | JsonType[];
    const?: unknown;
    enum?: unknown[];
    format?: string;
    allOf?: JsonSchema[];
    anyOf?: JsonSchema[];
    oneOf?: JsonSchema[];
    not?: JsonSchema;
    if?: JsonSchema;
    then?: JsonSchema;
    else?: JsonSchema;
    $id?: string;
    $defs?: Record<string, JsonSchema>;
    $anchor?: string;
    $dynamicAnchor?: string;
    $ref?: string;
    $dynamicRef?: string;
    $schema?: string;
    $vocabulary?: Record<string, boolean>;
    $comment?: string;
    default?: unknown;
    deprecated?: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    title?: string;
    description?: string;
    examples?: unknown[];
}
interface ArraySchema extends CommonSchema {
    prefixItems?: JsonSchema[];
    items?: JsonSchema;
    contains?: JsonSchema;
    unevaluatedItems?: JsonSchema;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxContains?: number;
    minContains?: number;
}
interface ObjectSchema extends CommonSchema {
    properties?: Record<string, JsonSchema>;
    patternProperties?: Record<string, JsonSchema>;
    additionalProperties?: JsonSchema;
    propertyNames?: JsonSchema;
    unevaluatedProperties?: JsonSchema;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    dependentRequired?: Record<string, string[]>;
    dependentSchemas?: Record<string, JsonSchema>;
}
interface StringSchema extends CommonSchema {
    maxLength?: number;
    minLength?: number;
    patter?: string;
    contentEncoding?: string;
    contentMediaType?: string;
    contentSchema?: JsonSchema;
}
interface NumberSchema extends CommonSchema {
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
}
