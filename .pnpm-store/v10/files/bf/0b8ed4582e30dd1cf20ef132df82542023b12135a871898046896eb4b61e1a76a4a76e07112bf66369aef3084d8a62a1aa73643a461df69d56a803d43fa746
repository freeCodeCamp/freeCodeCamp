<h1 align="center">Fastify</h1>

## Fluent Schema

The [Validation and
Serialization](../Reference/Validation-and-Serialization.md) documentation
outlines all parameters accepted by Fastify to set up JSON Schema Validation to
validate the input, and JSON Schema Serialization to optimize the output.

[`fluent-json-schema`](https://github.com/fastify/fluent-json-schema) can be
used to simplify this task while allowing the reuse of constants.

### Basic settings

```js
const S = require('fluent-json-schema')

// You can have an object like this, or query a DB to get the values
const MY_KEYS = {
  KEY1: 'ONE',
  KEY2: 'TWO'
}

const bodyJsonSchema = S.object()
  .prop('someKey', S.string())
  .prop('someOtherKey', S.number())
  .prop('requiredKey', S.array().maxItems(3).items(S.integer()).required())
  .prop('nullableKey', S.mixed([S.TYPES.NUMBER, S.TYPES.NULL]))
  .prop('multipleTypesKey', S.mixed([S.TYPES.BOOLEAN, S.TYPES.NUMBER]))
  .prop('multipleRestrictedTypesKey', S.oneOf([S.string().maxLength(5), S.number().minimum(10)]))
  .prop('enumKey', S.enum(Object.values(MY_KEYS)))
  .prop('notTypeKey', S.not(S.array()))

const queryStringJsonSchema = S.object()
  .prop('name', S.string())
  .prop('excitement', S.integer())

const paramsJsonSchema = S.object()
  .prop('par1', S.string())
  .prop('par2', S.integer())

const headersJsonSchema = S.object()
  .prop('x-foo', S.string().required())

// Note that there is no need to call `.valueOf()`!
const schema = {
  body: bodyJsonSchema,
  querystring: queryStringJsonSchema, // (or) query: queryStringJsonSchema
  params: paramsJsonSchema,
  headers: headersJsonSchema
}

fastify.post('/the/url', { schema }, handler)
```

### Reuse

With `fluent-json-schema`, you can manipulate your schemas more easily and
programmatically and then reuse them thanks to the `addSchema()` method. You can
refer to the schema in two different manners that are detailed in the
[Validation and
Serialization](../Reference/Validation-and-Serialization.md#adding-a-shared-schema)
documentation.

Here are some usage examples:

**`$ref-way`**: refer to an external schema.

```js
const addressSchema = S.object()
  .id('#address')
  .prop('line1').required()
  .prop('line2')
  .prop('country').required()
  .prop('city').required()
  .prop('zipcode').required()

const commonSchemas = S.object()
  .id('https://fastify/demo')
  .definition('addressSchema', addressSchema)
  .definition('otherSchema', otherSchema) // You can add any schemas you need

fastify.addSchema(commonSchemas)

const bodyJsonSchema = S.object()
  .prop('residence', S.ref('https://fastify/demo#address')).required()
  .prop('office', S.ref('https://fastify/demo#/definitions/addressSchema')).required()

const schema = { body: bodyJsonSchema }

fastify.post('/the/url', { schema }, handler)
```


**`replace-way`**: refer to a shared schema to replace before the validation
process.

```js
const sharedAddressSchema = {
  $id: 'sharedAddress',
  type: 'object',
  required: ['line1', 'country', 'city', 'zipcode'],
  properties: {
    line1: { type: 'string' },
    line2: { type: 'string' },
    country: { type: 'string' },
    city: { type: 'string' },
    zipcode: { type: 'string' }
  }
}
fastify.addSchema(sharedAddressSchema)

const bodyJsonSchema = {
  type: 'object',
  properties: {
    vacation: 'sharedAddress#'
  }
}

const schema = { body: bodyJsonSchema }

fastify.post('/the/url', { schema }, handler)
```

> ℹ️ Note:
> You can mix up the `$ref-way` and the `replace-way`
> when using `fastify.addSchema`.
