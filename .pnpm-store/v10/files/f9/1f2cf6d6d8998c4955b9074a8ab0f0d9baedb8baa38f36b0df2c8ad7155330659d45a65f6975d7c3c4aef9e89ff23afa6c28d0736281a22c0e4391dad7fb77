export type Schema =
  | ObjectSchema
  | ArraySchema
  | StringSchema
  | NumberSchema
  | IntegerSchema
  | BooleanSchema
  | NullSchema;

// export type JsonType = "object" | "array" | "string" | "number" | "boolean" | "null" | "integer";

// export interface JSONSchema {
//   type?: string ;
//   $id?: string ;
//   id?: string ;
//   $schema?: string ;
//   $ref?: string ;
//   $anchor?: string ;
//   $defs?: { [key: string]: JSONSchema } ;
//   definitions?: { [key: string]: JSONSchema } ;
//   $comment?: string ;
//   title?: string ;
//   description?: string ;
//   default?: unknown ;
//   examples?: unknown[] ;
//   readOnly?: boolean ;
//   writeOnly?: boolean ;
//   deprecated?: boolean ;
//   allOf?: JSONSchema[] ;
//   anyOf?: JSONSchema[] ;
//   oneOf?: JSONSchema[] ;
//   not?: JSONSchema ;
//   if?: JSONSchema ;
//   then?: JSONSchema ;
//   else?: JSONSchema ;
//   enum?: Array<string | number | boolean | null> ;
//   const?: string | number | boolean | null ;
//   [k: string]: unknown;

//   /** A special key used as an intermediate representation of extends-style relationships. Omitted as a $ref with additional properties. */
//   // _ref?: JSONSchema;
//   _prefault?: unknown ;
// }

export type _JSONSchema = boolean | JSONSchema;
export type JSONSchema = {
  [k: string]: unknown;
  $schema?: "https://json-schema.org/draft/2020-12/schema" | "http://json-schema.org/draft-07/schema#";
  $id?: string;
  $anchor?: string;
  $ref?: string;
  $dynamicRef?: string;
  $dynamicAnchor?: string;
  $vocabulary?: Record<string, boolean>;
  $comment?: string;
  $defs?: Record<string, JSONSchema>;
  type?: "object" | "array" | "string" | "number" | "boolean" | "null" | "integer";
  additionalItems?: _JSONSchema;
  unevaluatedItems?: _JSONSchema;
  prefixItems?: _JSONSchema[];
  items?: _JSONSchema | _JSONSchema[];
  contains?: _JSONSchema;
  additionalProperties?: _JSONSchema;
  unevaluatedProperties?: _JSONSchema;
  properties?: Record<string, _JSONSchema>;
  patternProperties?: Record<string, _JSONSchema>;
  dependentSchemas?: Record<string, _JSONSchema>;
  propertyNames?: _JSONSchema;
  if?: _JSONSchema;
  then?: _JSONSchema;
  else?: _JSONSchema;
  allOf?: JSONSchema[];
  anyOf?: JSONSchema[];
  oneOf?: JSONSchema[];
  not?: _JSONSchema;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxContains?: number;
  minContains?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  dependentRequired?: Record<string, string[]>;
  enum?: Array<string | number | boolean | null>;
  const?: string | number | boolean | null;

  // metadata
  id?: string;
  title?: string;
  description?: string;
  default?: unknown;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  contentSchema?: JSONSchema;

  // internal
  _prefault?: unknown;
};

// for backwards compatibility
export type BaseSchema = JSONSchema;

export interface ObjectSchema extends JSONSchema {
  type: "object";
}

export interface ArraySchema extends JSONSchema {
  type: "array";
}

export interface StringSchema extends JSONSchema {
  type: "string";
}

export interface NumberSchema extends JSONSchema {
  type: "number";
}

export interface IntegerSchema extends JSONSchema {
  type: "integer";
}

export interface BooleanSchema extends JSONSchema {
  type: "boolean";
}

export interface NullSchema extends JSONSchema {
  type: "null";
}
