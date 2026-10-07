import Ajv, { Options as AjvOptions } from 'ajv'

type Build = typeof build

declare namespace build {
  interface BaseSchema {
    /**
     * Schema id
     */
    $id?: string
    /**
     * Schema title
     */
    title?: string;
    /**
     * Schema description
     */
    description?: string;
    /**
     * A comment to be added to the schema
     */
    $comment?: string;
    /**
     * Default value to be assigned when no value is given in the document
     */
    default?: any;
    /**
     * A list of example values that match this schema
     */
    examples?: any[];
    /**
     * Additional schema definition to reference from within the schema
     */
    definitions?: Record<string, Schema>
    /**
     * A set of schemas of which at least one must match
     */
    anyOf?: Partial<Schema>[];
    /**
     * A set of schemas which must all match
     */
    allOf?: Partial<Schema>[];
    /**
     * A conditional schema to check, controls schemas defined in `then` and `else`
     */
    if?: Partial<Schema>;
    /**
     * A schema to apply if the conditional schema from `if` passes
     */
    then?: Partial<Schema>;
    /**
     * A schema to apply if the conditional schema from `if` fails
     */
    else?: Partial<Schema>;
    /**
     * Open API 3.0 spec states that any value that can be null must be declared `nullable`
     * @default false
     */
    nullable?: boolean;
  }

  export interface RefSchema {
    /**
     * A json-pointer to a schema to use as a reference
     */
    $ref: string;
  }

  export interface AnySchema extends BaseSchema {
  }

  export interface StringSchema extends BaseSchema {
    type: 'string';
    format?: string;
  }

  export interface IntegerSchema extends BaseSchema {
    type: 'integer';
  }

  export interface NumberSchema extends BaseSchema {
    type: 'number';
  }

  export interface NullSchema extends BaseSchema {
    type: 'null';
  }

  export interface BooleanSchema extends BaseSchema {
    type: 'boolean';
  }

  export interface ArraySchema extends BaseSchema {
    type: 'array';
    /**
     * The schema for the items in the array
     */
    items: Schema | {}
  }

  export interface TupleSchema extends BaseSchema {
    type: 'array';
    /**
     * The schemas for the items in the tuple
     */
    items: Schema[];
  }

  type ObjectProperties = Record<string, Partial<Schema>> & {
    anyOf?: ObjectProperties[];
    allOf?: ObjectProperties[];
    if?: ObjectProperties;
    then?: ObjectProperties;
    else?: ObjectProperties;
  }

  export interface ObjectSchema extends BaseSchema {
    type: 'object';
    /**
     * Describe the properties of the object
     */
    properties?: ObjectProperties;
    /**
     * The required properties of the object
     */
    required?: string[];
    /**
     * Describe properties that have keys following a given pattern
     */
    patternProperties?: ObjectProperties;
    /**
     * Specifies whether additional properties on the object are allowed, and optionally what schema they should
     * adhere to
     * @default false
     */
    additionalProperties?: Schema | boolean;
  }

  export type Schema =
    | RefSchema
    | StringSchema
    | IntegerSchema
    | NumberSchema
    | NullSchema
    | BooleanSchema
    | ArraySchema
    | TupleSchema
    | ObjectSchema

  export interface Options {
    /**
     * Optionally add an external definition to reference from your schema
     */
    schema?: Record<string, Schema>
    /**
     * Configure Ajv, which is used to evaluate conditional schemas and combined (anyOf) schemas
     */
    ajv?: AjvOptions
    /**
     * Optionally configure how the integer will be rounded
     *
     * @default 'trunc'
     */
    rounding?: 'ceil' | 'floor' | 'round' | 'trunc'
    /**
     * @deprecated
     * Enable debug mode. Please use `mode: "debug"` instead
     */
    debugMode?: boolean
    /**
     * Running mode of fast-json-stringify
     */
    mode?: 'debug' | 'standalone'

    /**
     * Large arrays are defined as arrays containing, by default, `20000`
     * elements or more. That value can be adjusted via the option parameter
     * `largeArraySize`.
     *
     * @default 20000
     */
    largeArraySize?: number | string | BigInt

    /**
     * Specify the function on how large Arrays should be stringified.
     *
     * @default 'default'
     */
    largeArrayMechanism?: 'default' | 'json-stringify'
  }

  export const validLargeArrayMechanisms: string[]
  export function restore (value: <TDoc extends object = object>(doc: TDoc) => string): ReturnType<Build>

  export const build: Build
  export { build as default }
}

interface DebugOption extends build.Options {
  mode: 'debug'
}

interface DeprecateDebugOption extends build.Options {
  debugMode: true
}

interface StandaloneOption extends build.Options {
  mode: 'standalone'
}

type StringCoercible = string | Date | RegExp
type IntegerCoercible = number | BigInt

/**
 * Build a stringify function using a schema of the documents that should be stringified
 * @param schema The schema used to stringify values
 * @param options The options to use (optional)
 */
declare function build (schema: build.AnySchema, options: DebugOption): { code: string, ajv: Ajv }
declare function build (schema: build.AnySchema, options: DeprecateDebugOption): { code: string, ajv: Ajv }
declare function build (schema: build.AnySchema, options: StandaloneOption): string
declare function build (schema: build.AnySchema, options?: build.Options): <TDoc = any>(doc: TDoc) => any
declare function build (schema: build.StringSchema, options?: build.Options): <TDoc extends StringCoercible = StringCoercible>(doc: TDoc) => string
declare function build (schema: build.IntegerSchema | build.NumberSchema, options?: build.Options): <TDoc extends IntegerCoercible = IntegerCoercible>(doc: TDoc) => string
declare function build (schema: build.NullSchema, options?: build.Options): <TDoc extends null = null>(doc: TDoc) => 'null'
declare function build (schema: build.BooleanSchema, options?: build.Options): <TDoc extends boolean = boolean>(doc: TDoc) => string
declare function build (schema: build.ArraySchema | build.TupleSchema, options?: build.Options): <TDoc extends any[]= any[]>(doc: TDoc) => string
declare function build (schema: build.ObjectSchema, options?: build.Options): <TDoc extends object = object>(doc: TDoc) => string
declare function build (schema: build.Schema, options?: build.Options): <TDoc = object | any[] | string | number | boolean | null> (doc: TDoc) => string

export = build
