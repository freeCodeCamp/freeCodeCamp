type AnySchema = NullSchema | BooleanSchema | NullableBooleanSchema | NumberSchema | NullableNumberSchema | StringSchema | NullableStringSchema | AnyEnumSchema | AnyArraySchema | AnyNullableArraySchema | AnyObjectSchema | AnyNullableObjectSchema | AnyAllOptionalObjectSchema | AnyNullableAllOptionalObjectSchema | AnyOneOfSchema
type StringKeys<T> = (keyof T) & string

interface NullSchema { type: 'null' }

interface BooleanSchema { type: 'boolean' }
interface NullableBooleanSchema { type: ('boolean' | 'null')[] }

interface NumberSchema { type: 'number' }
interface NullableNumberSchema { type: ('number' | 'null')[] }

interface StringSchema { type: 'string' }
interface NullableStringSchema { type: ('string' | 'null')[] }

interface AnyEnumSchema extends EnumSchema<any> {}
interface EnumSchema<Enum> { enum: Enum[] }

interface AnyArraySchema extends ArraySchema<AnySchema> {}
interface ArraySchema<ItemSchema extends AnySchema> { type: 'array', items: ItemSchema }

interface AnyNullableArraySchema extends NullableArraySchema<AnySchema> {}
interface NullableArraySchema<ItemSchema extends AnySchema> { type: ('array' | 'null')[], items: ItemSchema }

interface AnyObjectSchema extends ObjectSchema<Record<string, AnySchema>, string> {}
interface ObjectSchema<Properties extends Record<string, AnySchema>, Required extends StringKeys<Properties>> {
  additionalProperties?: boolean
  type: 'object'
  properties: Properties
  required: Required[]
}

interface AnyNullableObjectSchema extends NullableObjectSchema<Record<string, AnySchema>, string> {}
interface NullableObjectSchema<Properties extends Record<string, AnySchema>, Required extends StringKeys<Properties>> {
  additionalProperties?: boolean
  type: ('object' | 'null')[]
  properties: Properties
  required: Required[]
}

interface AnyAllOptionalObjectSchema extends AllOptionalObjectSchema<Record<string, AnySchema>> {}
interface AllOptionalObjectSchema<Properties extends Record<string, AnySchema>> {
  additionalProperties?: boolean
  type: 'object'
  properties: Properties
}

interface AnyNullableAllOptionalObjectSchema extends NullableAllOptionalObjectSchema<Record<string, AnySchema>> {}
interface NullableAllOptionalObjectSchema<Properties extends Record<string, AnySchema>> {
  additionalProperties?: boolean
  type: ('object' | 'null')[]
  properties: Properties
}

interface AnyOneOfSchema { oneOf: AnySchema[] }

interface ArrayFromSchema<ItemSchema extends AnySchema> extends Array<TypeFromSchema<ItemSchema>> {}

type ObjectFromSchema<Properties extends Record<string, AnySchema>, Required extends StringKeys<Properties>> = {
  [Key in keyof Properties]: (Key extends Required ? TypeFromSchema<Properties[Key]> : TypeFromSchema<Properties[Key]> | undefined)
}

type TypeFromSchema<Schema extends AnySchema> = (
    Schema extends EnumSchema<infer Enum> ? Enum
  : Schema extends NullSchema ? null
  : Schema extends BooleanSchema ? boolean
  : Schema extends NullableBooleanSchema ? (boolean | null)
  : Schema extends NumberSchema ? number
  : Schema extends NullableNumberSchema ? (number | null)
  : Schema extends StringSchema ? string
  : Schema extends NullableStringSchema ? (string | null)
  : Schema extends ArraySchema<infer ItemSchema> ? ArrayFromSchema<ItemSchema>
  : Schema extends NullableArraySchema<infer ItemSchema> ? (ArrayFromSchema<ItemSchema> | null)
  : Schema extends ObjectSchema<infer Properties, infer Required> ? ObjectFromSchema<Properties, Required>
  : Schema extends NullableObjectSchema<infer Properties, infer Required> ? (ObjectFromSchema<Properties, Required> | null)
  : Schema extends AllOptionalObjectSchema<infer Properties> ? ObjectFromSchema<Properties, never>
  : Schema extends NullableAllOptionalObjectSchema<infer Properties> ? (ObjectFromSchema<Properties, never> | null)
  : never
)

declare namespace factory {
  interface ValidationError {
    field: string
    message: string
    value: unknown
    type: string
  }
}

interface Validator<Schema extends AnySchema, Output = TypeFromSchema<Schema>> {
  (input: unknown, options?: any): input is Output
  errors: factory.ValidationError[]
  toJSON(): Schema
}

interface Filter<Schema extends AnySchema, Output = TypeFromSchema<Schema>> {
  (input: Output, options?: any): Output
}

interface Factory {
  /* One of object schema */
              <Properties1 extends Record<string, AnySchema>, Required1 extends StringKeys<Properties1>, Properties2 extends Record<string, AnySchema>, Required2 extends StringKeys<Properties2>> (schema: { oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>] }, options?: any): Validator<{ oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>] }, ObjectFromSchema<Properties1, Required1> | ObjectFromSchema<Properties2, Required2>>
  createFilter<Properties1 extends Record<string, AnySchema>, Required1 extends StringKeys<Properties1>, Properties2 extends Record<string, AnySchema>, Required2 extends StringKeys<Properties2>> (schema: { oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>] }, options?: any):    Filter<{ oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>] }, ObjectFromSchema<Properties1, Required1> | ObjectFromSchema<Properties2, Required2>>
              <Properties1 extends Record<string, AnySchema>, Required1 extends StringKeys<Properties1>, Properties2 extends Record<string, AnySchema>, Required2 extends StringKeys<Properties2>, Properties3 extends Record<string, AnySchema>, Required3 extends StringKeys<Properties3>> (schema: { oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>] }, options?: any): Validator<{ oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>] }, ObjectFromSchema<Properties1, Required1> | ObjectFromSchema<Properties2, Required2> | ObjectFromSchema<Properties3, Required3>>
  createFilter<Properties1 extends Record<string, AnySchema>, Required1 extends StringKeys<Properties1>, Properties2 extends Record<string, AnySchema>, Required2 extends StringKeys<Properties2>, Properties3 extends Record<string, AnySchema>, Required3 extends StringKeys<Properties3>> (schema: { oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>] }, options?: any):    Filter<{ oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>] }, ObjectFromSchema<Properties1, Required1> | ObjectFromSchema<Properties2, Required2> | ObjectFromSchema<Properties3, Required3>>
              <Properties1 extends Record<string, AnySchema>, Required1 extends StringKeys<Properties1>, Properties2 extends Record<string, AnySchema>, Required2 extends StringKeys<Properties2>, Properties3 extends Record<string, AnySchema>, Required3 extends StringKeys<Properties3>, Properties4 extends Record<string, AnySchema>, Required4 extends StringKeys<Properties4>> (schema: { oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>, ObjectSchema<Properties4, Required4>] }, options?: any): Validator<{ oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>, ObjectSchema<Properties4, Required4>] }, ObjectFromSchema<Properties1, Required1> | ObjectFromSchema<Properties2, Required2> | ObjectFromSchema<Properties3, Required3> | ObjectFromSchema<Properties4, Required4>>
  createFilter<Properties1 extends Record<string, AnySchema>, Required1 extends StringKeys<Properties1>, Properties2 extends Record<string, AnySchema>, Required2 extends StringKeys<Properties2>, Properties3 extends Record<string, AnySchema>, Required3 extends StringKeys<Properties3>, Properties4 extends Record<string, AnySchema>, Required4 extends StringKeys<Properties4>> (schema: { oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>, ObjectSchema<Properties4, Required4>] }, options?: any):    Filter<{ oneOf: [ObjectSchema<Properties1, Required1>, ObjectSchema<Properties2, Required2>, ObjectSchema<Properties3, Required3>, ObjectSchema<Properties4, Required4>] }, ObjectFromSchema<Properties1, Required1> | ObjectFromSchema<Properties2, Required2> | ObjectFromSchema<Properties3, Required3> | ObjectFromSchema<Properties4, Required4>>

  /* One of plain schema */
              <Schema1 extends AnySchema, Schema2 extends AnySchema> (schema: { oneOf: [Schema1, Schema2] }, options?: any): Validator<{ oneOf: [Schema1, Schema2] }, TypeFromSchema<Schema1> | TypeFromSchema<Schema2>>
  createFilter<Schema1 extends AnySchema, Schema2 extends AnySchema> (schema: { oneOf: [Schema1, Schema2] }, options?: any):    Filter<{ oneOf: [Schema1, Schema2] }, TypeFromSchema<Schema1> | TypeFromSchema<Schema2>>
              <Schema1 extends AnySchema, Schema2 extends AnySchema, Schema3 extends AnySchema> (schema: { oneOf: [Schema1, Schema2, Schema3] }, options?: any): Validator<{ oneOf: [Schema1, Schema2, Schema3] }, TypeFromSchema<Schema1> | TypeFromSchema<Schema2> | TypeFromSchema<Schema3>>
  createFilter<Schema1 extends AnySchema, Schema2 extends AnySchema, Schema3 extends AnySchema> (schema: { oneOf: [Schema1, Schema2, Schema3] }, options?: any):    Filter<{ oneOf: [Schema1, Schema2, Schema3] }, TypeFromSchema<Schema1> | TypeFromSchema<Schema2> | TypeFromSchema<Schema3>>
              <Schema1 extends AnySchema, Schema2 extends AnySchema, Schema3 extends AnySchema, Schema4 extends AnySchema> (schema: { oneOf: [Schema1, Schema2, Schema3, Schema4] }, options?: any): Validator<{ oneOf: [Schema1, Schema2, Schema3, Schema4] }, TypeFromSchema<Schema1> | TypeFromSchema<Schema2> | TypeFromSchema<Schema3> | TypeFromSchema<Schema4>>
  createFilter<Schema1 extends AnySchema, Schema2 extends AnySchema, Schema3 extends AnySchema, Schema4 extends AnySchema> (schema: { oneOf: [Schema1, Schema2, Schema3, Schema4] }, options?: any):    Filter<{ oneOf: [Schema1, Schema2, Schema3, Schema4] }, TypeFromSchema<Schema1> | TypeFromSchema<Schema2> | TypeFromSchema<Schema3> | TypeFromSchema<Schema4>>

  /* Object schema */
              <Properties extends Record<string, AnySchema>, Required extends StringKeys<Properties>> (schema: ObjectSchema<Properties, Required>, options?: any): Validator<ObjectSchema<Properties, Required>>
  createFilter<Properties extends Record<string, AnySchema>, Required extends StringKeys<Properties>> (schema: ObjectSchema<Properties, Required>, options?: any):    Filter<ObjectSchema<Properties, Required>>

  /* Plain schema */
              <Schema extends AnySchema> (schema: Schema, options?: any): Validator<Schema>
  createFilter<Schema extends AnySchema> (schema: Schema, options?: any):    Filter<Schema>
}

declare const factory: Factory

export = factory
