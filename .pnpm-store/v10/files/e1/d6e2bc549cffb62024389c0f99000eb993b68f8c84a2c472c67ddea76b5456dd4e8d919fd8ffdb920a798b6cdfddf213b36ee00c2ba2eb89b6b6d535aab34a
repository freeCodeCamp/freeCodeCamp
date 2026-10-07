<h1 align="center">Fastify</h1>

## Validation and Serialization
Fastify uses a schema-based approach. We recommend using
[JSON Schema](https://json-schema.org/) to validate routes and serialize outputs.
Fastify compiles the schema into a highly performant function.

Validation is only attempted if the content type is `application/json`,
unless the body schema uses the [`content`](#body-content-type-validation)
property to specify validation per content type. When the body schema defines
a `content` field, it must enumerate all possible content types the
application expects to handle with the associated handler.

All examples use the
[JSON Schema Draft 7](https://json-schema.org/draft-07)
specification.

> ⚠ Warning:
> Treat schema definitions as application code. Validation and serialization
> features use `new Function()`, which is unsafe with user-provided schemas. See
> [Ajv](https://www.npmjs.com/package/ajv) and
> [fast-json-stringify](https://www.npmjs.com/package/fast-json-stringify) for details.
>
> Whilst Fastify supports the
> [`$async` Ajv feature](https://ajv.js.org/guide/async-validation.html),
> it should not be used for initial validation. Accessing databases during
> validation may lead to Denial of Service attacks. Use
> [Fastify's hooks](./Hooks.md) like `preHandler` for `async` tasks after validation.
>
> When using custom validators with async `preValidation` hooks,
> validators **must return** `{error}` objects instead of throwing errors.
> Throwing errors from custom validators will cause unhandled promise rejections
> that crash the application when combined with async hooks. See the
> [custom validator examples](#using-other-validation-libraries) below for the
> correct pattern.

### Core concepts
Validation and serialization are handled by two customizable dependencies:
- [Ajv v8](https://www.npmjs.com/package/ajv) for request validation
- [fast-json-stringify](https://www.npmjs.com/package/fast-json-stringify) for
  response body serialization

These dependencies share only the JSON schemas added to Fastify's instance via
`.addSchema(schema)`.

#### Adding a shared schema
<a id="shared-schema"></a>

The `addSchema` API allows adding multiple schemas to the Fastify instance for
reuse throughout the application. This API is encapsulated.

Shared schemas can be reused with the JSON Schema
[**`$ref`**](https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-01#section-8)
keyword. Here is an overview of how references work:

+ `myField: { $ref: '#foo' }` searches for `$id: '#foo'` in the current schema
+ `myField: { $ref: '#/definitions/foo' }` searches for `definitions.foo` in the
  current schema
+ `myField: { $ref: 'http://url.com/sh.json#' }` searches for a shared schema
  with `$id: 'http://url.com/sh.json'`
+ `myField: { $ref: 'http://url.com/sh.json#/definitions/foo' }` searches for a
  shared schema with `$id: 'http://url.com/sh.json'` and uses `definitions.foo`
+ `myField: { $ref: 'http://url.com/sh.json#foo' }` searches for a shared schema
  with `$id: 'http://url.com/sh.json'` and looks for `$id: '#foo'` within it

**Simple usage:**

```js
fastify.addSchema({
  $id: 'http://fastify.example/',
  type: 'object',
  properties: {
    hello: { type: 'string' }
  }
})

fastify.post('/', {
  handler () {},
  schema: {
    body: {
      type: 'array',
      items: { $ref: 'http://fastify.example#/properties/hello' }
    }
  }
})
```

**`$ref` as root reference:**

```js
fastify.addSchema({
  $id: 'commonSchema',
  type: 'object',
  properties: {
    hello: { type: 'string' }
  }
})

fastify.post('/', {
  handler () {},
  schema: {
    body: { $ref: 'commonSchema#' },
    headers: { $ref: 'commonSchema#' }
  }
})
```

#### Retrieving the shared schemas
<a id="get-shared-schema"></a>

If the validator and serializer are customized, `.addSchema` is not useful since
Fastify no longer controls them. To access schemas added to the Fastify instance,
use `.getSchemas()`:

```js
fastify.addSchema({
  $id: 'schemaId',
  type: 'object',
  properties: {
    hello: { type: 'string' }
  }
})

const mySchemas = fastify.getSchemas()
const mySchema = fastify.getSchema('schemaId')
```

The `getSchemas` function is encapsulated and returns shared schemas available
in the selected scope:

```js
fastify.addSchema({ $id: 'one', my: 'hello' })
// will return only `one` schema
fastify.get('/', (request, reply) => { reply.send(fastify.getSchemas()) })

fastify.register((instance, opts, done) => {
  instance.addSchema({ $id: 'two', my: 'ciao' })
  // will return `one` and `two` schemas
  instance.get('/sub', (request, reply) => { reply.send(instance.getSchemas()) })

  instance.register((subinstance, opts, done) => {
    subinstance.addSchema({ $id: 'three', my: 'hola' })
    // will return `one`, `two` and `three`
    subinstance.get('/deep', (request, reply) => { reply.send(subinstance.getSchemas()) })
    done()
  })
  done()
})
```


### Validation
Route validation relies on [Ajv v8](https://www.npmjs.com/package/ajv), a
high-performance JSON Schema validator. To validate input, add the required
fields to the route schema.

Supported validations include:
- `body`: validates the request body for POST, PUT, or PATCH methods.
- `querystring` or `query`: validates the query string.
- `params`: validates the route parameters.
- `headers`: validates the request headers.

Validations can be a complete JSON Schema object with a `type` of `'object'` and
a `'properties'` object containing parameters, or a simpler variation listing
parameters at the top level.

> ℹ For using the latest Ajv (v8), refer to the
> [`schemaController`](./Server.md#schema-controller) section.

Example:
```js
const bodyJsonSchema = {
  type: 'object',
  required: ['requiredKey'],
  properties: {
    someKey: { type: 'string' },
    someOtherKey: { type: 'number' },
    requiredKey: {
      type: 'array',
      maxItems: 3,
      items: { type: 'integer' }
    },
    nullableKey: { type: ['number', 'null'] }, // or { type: 'number', nullable: true }
    multipleTypesKey: { type: ['boolean', 'number'] },
    multipleRestrictedTypesKey: {
      oneOf: [
        { type: 'string', maxLength: 5 },
        { type: 'number', minimum: 10 }
      ]
    },
    enumKey: {
      type: 'string',
      enum: ['John', 'Foo']
    },
    notTypeKey: {
      not: { type: 'array' }
    }
  }
}

const queryStringJsonSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    excitement: { type: 'integer' }
  }
}

const paramsJsonSchema = {
  type: 'object',
  properties: {
    par1: { type: 'string' },
    par2: { type: 'number' }
  }
}

const headersJsonSchema = {
  type: 'object',
  properties: {
    'x-foo': { type: 'string' }
  },
  required: ['x-foo']
}

const schema = {
  body: bodyJsonSchema,
  querystring: queryStringJsonSchema,
  params: paramsJsonSchema,
  headers: headersJsonSchema
}

fastify.post('/the/url', { schema }, handler)
```

#### Body Content-Type Validation
<a id="body-content-type-validation"></a>

For `body` schema, it is further possible to differentiate the schema per content
type by nesting the schemas inside `content` property. The schema validation
will be applied based on the `Content-Type` header in the request.

```js
fastify.post('/the/url', {
  schema: {
    body: {
      content: {
        'application/json': {
          schema: { type: 'object' }
        },
        'text/plain': {
          schema: { type: 'string' }
        }
        // Other content types will not be validated
      }
    }
  }
}, handler)
```

> ⚠ Warning:
> When using [custom content type parsers](./ContentTypeParser.md), the parsed
> body is validated **only** when the request content type matches a key in the
> schema `content` map.
>
> Schema selection uses an exact match on the request's
> [essence MIME type](https://mimesniff.spec.whatwg.org/#mime-type-miscellaneous)
> (for example, `application/json`). If a parser is registered with a regular
> expression (for example, `/^application\/.*json$/`), the parser can accept
> more content types than the `content` map covers. Requests in that gap are
> parsed but **not validated**.
>
> Ensure every content type accepted by the parser has a corresponding key in
> the `content` map, or use a catch-all body schema without `content` when
> strict per-content-type discrimination is not required.
>
> ```js
> // Add a custom parser for YAML
> fastify.addContentTypeParser('application/yaml', { parseAs: 'string' }, (req, body, done) => {
>   done(null, YAML.parse(body))
> })
>
> fastify.post('/the/url', {
>   schema: {
>     body: {
>       content: {
>         'application/json': {
>           schema: { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] }
>         },
>         // Without this entry, application/yaml requests will NOT be validated
>         'application/yaml': {
>           schema: { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] }
>         }
>       }
>     }
>   }
> }, handler)
> ```

Note that Ajv will try to [coerce](https://ajv.js.org/coercion.html) values to
the types specified in the schema `type` keywords, both to pass validation and
to use the correctly typed data afterwards.

The Ajv default configuration in Fastify supports coercing array parameters in
`querystring`. Example:

```js
const opts = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        ids: {
          type: 'array',
          default: []
        },
      },
    }
  }
}

fastify.get('/', opts, (request, reply) => {
  reply.send({ params: request.query }) // echo the querystring
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err
})
```

```sh
curl -X GET "http://localhost:3000/?ids=1

{"params":{"ids":["1"]}}
```

A custom schema validator can be specified for each parameter type (body,
querystring, params, headers).

For example, the following code disables type coercion only for the `body`
parameters, changing the Ajv default options:

```js
const schemaCompilers = {
  body: new Ajv({
    removeAdditional: false,
    coerceTypes: false,
    allErrors: true
  }),
  params: new Ajv({
    removeAdditional: false,
    coerceTypes: true,
    allErrors: true
  }),
  querystring: new Ajv({
    removeAdditional: false,
    coerceTypes: true,
    allErrors: true
  }),
  headers: new Ajv({
    removeAdditional: false,
    coerceTypes: true,
    allErrors: true
  })
}

server.setValidatorCompiler(req => {
    if (!req.httpPart) {
      throw new Error('Missing httpPart')
    }
    const compiler = schemaCompilers[req.httpPart]
    if (!compiler) {
      throw new Error(`Missing compiler for ${req.httpPart}`)
    }
    return compiler.compile(req.schema)
})
```

When type coercion is enabled, using `anyOf` with nullable primitive types
can produce unexpected results. For example, a value of `0` or `false` may be
coerced to `null` because Ajv evaluates `anyOf` schemas in order and applies
type coercion during matching. This means the `{ "type": "null" }` branch can
match before the intended type:

```json
{
  "anyOf": [
    { "type": "null" },
    { "type": "number" }
  ]
}
```

To avoid this, use the `nullable` keyword instead of `anyOf` for primitive
types:

```json
{
  "type": "number",
  "nullable": true
}
```

For more information, see [Ajv Coercion](https://ajv.js.org/coercion.html).

#### Ajv Plugins
<a id="ajv-plugins"></a>

A list of plugins can be provided for use with the default `ajv` instance.
Ensure the plugin is **compatible with the Ajv version shipped within Fastify**.

> Refer to [`ajv options`](./Server.md#ajv) to check plugins format.

```js
const fastify = require('fastify')({
  ajv: {
    plugins: [
      require('ajv-merge-patch')
    ]
  }
})

fastify.post('/', {
  handler (req, reply) { reply.send({ ok: 1 }) },
  schema: {
    body: {
      $patch: {
        source: {
          type: 'object',
          properties: {
            q: {
              type: 'string'
            }
          }
        },
        with: [
          {
            op: 'add',
            path: '/properties/q',
            value: { type: 'number' }
          }
        ]
      }
    }
  }
})

fastify.post('/foo', {
  handler (req, reply) { reply.send({ ok: 1 }) },
  schema: {
    body: {
      $merge: {
        source: {
          type: 'object',
          properties: {
            q: {
              type: 'string'
            }
          }
        },
        with: {
          required: ['q']
        }
      }
    }
  }
})
```

#### Validator Compiler
<a id="schema-validator"></a>

The `validatorCompiler` is a function that returns a function to validate the
body, URL parameters, headers, and query string. The default `validatorCompiler`
returns a function that implements the [ajv](https://ajv.js.org/) validation
interface. Fastify uses it internally to speed up validation.

Fastify's [baseline ajv
configuration](https://github.com/fastify/ajv-compiler#ajv-configuration) is:

```js
{
  coerceTypes: 'array', // change data type of data to match type keyword
  useDefaults: true, // replace missing properties and items with the values from corresponding default keyword
  removeAdditional: true, // remove additional properties if additionalProperties is set to false, see: https://ajv.js.org/guide/modifying-data.html#removing-additional-properties
  uriResolver: require('fast-uri'),
  addUsedSchema: false,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false
}
```

Modify the baseline configuration by providing
[`ajv.customOptions`](./Server.md#factory-ajv) to the Fastify factory.

To change or set additional config options, create a custom instance and
override the existing one:

```js
const fastify = require('fastify')()
const Ajv = require('ajv')
const ajv = new Ajv({
  removeAdditional: 'all',
  useDefaults: true,
  coerceTypes: 'array',
  // any other options
  // ...
})
fastify.setValidatorCompiler(({ schema, method, url, httpPart }) => {
  return ajv.compile(schema)
})
```

> ℹ️ Note:
> When using a custom validator instance, add schemas to the validator
> instead of Fastify. Fastify's `addSchema` method will not recognize the custom
> validator.

##### Using other validation libraries
<a id="using-other-validation-libraries"></a>

The `setValidatorCompiler` function allows substituting `ajv` with other
JavaScript validation libraries like [joi](https://github.com/hapijs/joi/) or
[yup](https://github.com/jquense/yup/), or a custom one:

```js
const Joi = require('joi')

fastify.setValidatorCompiler(({ schema }) => {
  return (data) => {
    try {
      const { error, value } = schema.validate(data)
      if (error) {
        return { error } // Return the error, do not throw it
      }
      return { value }
    } catch (e) {
      return { error: e } // Catch any unexpected errors too
    }
  }
})

fastify.post('/the/url', {
  schema: {
    body: Joi.object().keys({
      hello: Joi.string().required()
    }).required()
  }
}, handler)
```

```js
const yup = require('yup')
// Validation options to match ajv's baseline options used in Fastify
const yupOptions = {
  strict: false,
  abortEarly: false, // return all errors
  stripUnknown: true, // remove additional properties
  recursive: true
}

fastify.post('/the/url', {
  schema: {
    body: yup.object({
      age: yup.number().integer().required(),
      sub: yup.object().shape({
        name: yup.string().required()
      }).required()
    })
  },
  validatorCompiler: ({ schema, method, url, httpPart }) => {
    return function (data) {
      // with option strict = false, yup `validateSync` function returns the
      // coerced value if validation was successful, or throws if validation failed
      try {
        const result = schema.validateSync(data, yupOptions)
        return { value: result }
      } catch (e) {
        return { error: e }
      }
    }
  }
}, handler)
```

##### Custom Validator Best Practices

When implementing custom validators, follow these patterns to ensure compatibility
with all Fastify features:

**Always return objects, never throw:**
```js
return { value: validatedData }  // On success
return { error: validationError } // On failure
```

**Use try-catch for safety:**
```js
fastify.setValidatorCompiler(({ schema }) => {
  return (data) => {
    try {
      // Validation logic here
      const result = schema.validate(data)
      if (result.error) {
        return { error: result.error }
      }
      return { value: result.value }
    } catch (e) {
      // Catch any unexpected errors
      return { error: e }
    }
  }
})
```

This pattern ensures validators work correctly with both sync and async
`preValidation` hooks, preventing unhandled promise rejections that can crash
an application.

##### .statusCode property

All validation errors have a `.statusCode` property set to `400`, ensuring the
default error handler sets the response status code to `400`.

```js
fastify.setErrorHandler(function (error, request, reply) {
  request.log.error(error, `This error has status code ${error.statusCode}`)
  reply.status(error.statusCode).send(error)
})
```

##### Validation messages with other validation libraries

Fastify's validation error messages are tightly coupled to the default
validation engine: errors returned from `ajv` are eventually run through the
`schemaErrorFormatter` function which builds human-friendly error messages.
However, the `schemaErrorFormatter` function is written with `ajv` in mind.
This may result in odd or incomplete error messages when using other validation
libraries.

To circumvent this issue, there are two main options:

1. Ensure the validation function (returned by the custom `schemaCompiler`)
   returns errors in the same structure and format as `ajv`.
2. Use a custom `errorHandler` to intercept and format custom validation errors.

Fastify adds two properties to all validation errors to help write a custom
`errorHandler`:

* `validation`: the content of the `error` property of the object returned by
  the validation function (returned by the custom `schemaCompiler`)
* `validationContext`: the context (body, params, query, headers) where the
  validation error occurred

A contrived example of such a custom `errorHandler` handling validation errors
is shown below:

```js
const errorHandler = (error, request, reply) => {
  const statusCode = error.statusCode
  let response

  const { validation, validationContext } = error

  // check if we have a validation error
  if (validation) {
    response = {
      // validationContext will be 'body', 'params', 'headers', or 'query'
      message: `A validation error occurred when validating the ${validationContext}...`,
      // this is the result of the validation library...
      errors: validation
    }
  } else {
    response = {
      message: 'An error occurred...'
    }
  }

  // any additional work here, eg. log error
  // ...

  reply.status(statusCode).send(response)
}
```

### Serialization
<a id="serialization"></a>

Fastify uses [fast-json-stringify](https://www.npmjs.com/package/fast-json-stringify)
to send data as JSON if an output schema is provided in the route options. Using
an output schema can drastically increase throughput and help prevent accidental
disclosure of sensitive information.

Example:
```js
const schema = {
  response: {
    200: {
      type: 'object',
      properties: {
        value: { type: 'string' },
        otherValue: { type: 'boolean' }
      }
    }
  }
}

fastify.post('/the/url', { schema }, handler)
```

The response schema is based on the status code. To use the same schema for
multiple status codes, use `'2xx'` or `default`, for example:
```js
const schema = {
  response: {
    default: {
      type: 'object',
      properties: {
        error: {
          type: 'boolean',
          default: true
        }
      }
    },
    '2xx': {
      type: 'object',
      properties: {
        value: { type: 'string' },
        otherValue: { type: 'boolean' }
      }
    },
    201: {
      // the contract syntax
      value: { type: 'string' }
    }
  }
}

fastify.post('/the/url', { schema }, handler)
```
A specific response schema can be defined for different content types.
For example:
```js
const schema = {
  response: {
    200: {
      description: 'Response schema that support different content types'
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              image: { type: 'string' },
              address: { type: 'string' }
            }
          }
        },
        'application/vnd.v1+json': {
          schema: {
            type: 'array',
            items: { $ref: 'test' }
          }
        }
      }
    },
    '3xx': {
      content: {
        'application/vnd.v2+json': {
          schema: {
            type: 'object',
            properties: {
              fullName: { type: 'string' },
              phone: { type: 'string' }
            }
          }
        }
      }
    },
    default: {
      content: {
        // */* is match-all content-type
        '*/*': {
          schema: {
            type: 'object',
            properties: {
              desc: { type: 'string' }
            }
          }
        }
      }
    }
  }
}

fastify.post('/url', { schema }, handler)
```

#### Serializer Compiler
<a id="schema-serializer"></a>

The `serializerCompiler` returns a function that must return a string from an
input object. When defining a response JSON Schema, change the default
serialization method by providing a function to serialize each route.

```js
fastify.setSerializerCompiler(({ schema, method, url, httpStatus, contentType }) => {
  return data => JSON.stringify(data)
})

fastify.get('/user', {
  handler (req, reply) {
    reply.send({ id: 1, name: 'Foo', image: 'BIG IMAGE' })
  },
  schema: {
    response: {
      '2xx': {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' }
        }
      }
    }
  }
})
```

*To set a custom serializer in a specific part of the code, use
[`reply.serializer(...)`](./Reply.md#serializerfunc).*

### Error Handling
When schema validation fails for a request, Fastify will automatically return a
status 400 response including the result from the validator in the payload. For
example, if the following schema is used for a route:

```js
const schema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' }
    },
    required: ['name']
  }
}
```

If the request fails to satisfy the schema, the route will return a response
with the following payload:

```js
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "body should have required property 'name'"
}
```

> ⚠ Security Consideration: By default, validation error details from the schema
> are included in the response payload. If your organization requires sanitizing
> or customizing these error messages (e.g., to avoid exposing internal schema
> details), configure a custom error handler using
> [`setErrorHandler()`](./Server.md#seterrorhandler).

To handle errors inside the route, specify the `attachValidation` option. If
there is a validation error, the `validationError` property of the request will
contain the `Error` object with the raw validation result as shown below:

```js
const fastify = Fastify()

fastify.post('/', { schema, attachValidation: true }, function (req, reply) {
  if (req.validationError) {
    // `req.validationError.validation` contains the raw validation error
    reply.code(400).send(req.validationError)
  }
})
```

#### `schemaErrorFormatter`

To format errors, provide a sync function that returns an error as the
`schemaErrorFormatter` option when instantiating Fastify. The context function
will be the Fastify server instance.

`errors` is an array of Fastify schema errors `FastifySchemaValidationError`.
`dataVar` is the currently validated part of the schema (params, body,
querystring, headers).

```js
const fastify = Fastify({
  schemaErrorFormatter: (errors, dataVar) => {
    // ... my formatting logic
    return new Error(myErrorMessage)
  }
})

// or
fastify.setSchemaErrorFormatter(function (errors, dataVar) {
  this.log.error({ err: errors }, 'Validation failed')
  // ... my formatting logic
  return new Error(myErrorMessage)
})
```

Use [setErrorHandler](./Server.md#seterrorhandler) to define a custom response
for validation errors such as:

```js
fastify.setErrorHandler(function (error, request, reply) {
  if (error.validation) {
     reply.status(422).send(new Error('validation failed'))
  }
})
```

For custom error responses in the schema, see
[`ajv-errors`](https://github.com/ajv-validator/ajv-errors). Check out the
[example](https://github.com/fastify/example/blob/HEAD/validation-messages/custom-errors-messages.js)
usage.

> Install version 1.0.1 of `ajv-errors`, as later versions are not compatible
> with AJV v6 (the version shipped by Fastify v3).

Below is an example showing how to add **custom error messages for each
property** of a schema by supplying custom AJV options. Inline comments in the
schema describe how to configure it to show a different error message for each
case:

```js
const fastify = Fastify({
  ajv: {
    customOptions: {
      jsonPointers: true,
      // ⚠ Warning: Enabling this option may lead to this security issue https://www.cvedetails.com/cve/CVE-2020-8192/
      allErrors: true
    },
    plugins: [
      require('ajv-errors')
    ]
  }
})

const schema = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        errorMessage: {
          type: 'Bad name'
        }
      },
      age: {
        type: 'number',
        errorMessage: {
          type: 'Bad age', // specify custom message for
          min: 'Too young' // all constraints except required
        }
      }
    },
    required: ['name', 'age'],
    errorMessage: {
      required: {
        name: 'Why no name!', // specify error message for when the
        age: 'Why no age!' // property is missing from input
      }
    }
  }
}

fastify.post('/', { schema, }, (request, reply) => {
  reply.send({
    hello: 'world'
  })
})
```

To return localized error messages, see
[ajv-i18n](https://github.com/ajv-validator/ajv-i18n).

```js
const localize = require('ajv-i18n')

const fastify = Fastify()

const schema = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'number',
      }
    },
    required: ['name', 'age'],
  }
}

fastify.setErrorHandler(function (error, request, reply) {
  if (error.validation) {
    localize.ru(error.validation)
    reply.status(400).send(error.validation)
    return
  }
  reply.send(error)
})
```

### JSON Schema support

JSON Schema provides utilities to optimize schemas. Combined with Fastify's
shared schema, all schemas can be easily reused.

| Use Case                          | Validator | Serializer |
|-----------------------------------|-----------|------------|
| `$ref` to `$id`                   | ️️✔️ | ✔️ |
| `$ref` to `/definitions`          | ✔️ | ✔️ |
| `$ref` to shared schema `$id`          | ✔️ | ✔️ |
| `$ref` to shared schema `/definitions` | ✔️ | ✔️ |

#### Examples

##### Usage of `$ref` to `$id` in same JSON Schema

```js
const refToId = {
  type: 'object',
  definitions: {
    foo: {
      $id: '#address',
      type: 'object',
      properties: {
        city: { type: 'string' }
      }
    }
  },
  properties: {
    home: { $ref: '#address' },
    work: { $ref: '#address' }
  }
}
```


##### Usage of `$ref` to `/definitions` in same JSON Schema
```js
const refToDefinitions = {
  type: 'object',
  definitions: {
    foo: {
      $id: '#address',
      type: 'object',
      properties: {
        city: { type: 'string' }
      }
    }
  },
  properties: {
    home: { $ref: '#/definitions/foo' },
    work: { $ref: '#/definitions/foo' }
  }
}
```

##### Usage `$ref` to a shared schema `$id` as external schema
```js
fastify.addSchema({
  $id: 'http://foo/common.json',
  type: 'object',
  definitions: {
    foo: {
      $id: '#address',
      type: 'object',
      properties: {
        city: { type: 'string' }
      }
    }
  }
})

const refToSharedSchemaId = {
  type: 'object',
  properties: {
    home: { $ref: 'http://foo/common.json#address' },
    work: { $ref: 'http://foo/common.json#address' }
  }
}
```

##### Usage `$ref` to a shared schema `/definitions` as external schema
```js
fastify.addSchema({
  $id: 'http://foo/shared.json',
  type: 'object',
  definitions: {
    foo: {
      type: 'object',
      properties: {
        city: { type: 'string' }
      }
    }
  }
})

const refToSharedSchemaDefinitions = {
  type: 'object',
  properties: {
    home: { $ref: 'http://foo/shared.json#/definitions/foo' },
    work: { $ref: 'http://foo/shared.json#/definitions/foo' }
  }
}
```

### Resources
<a id="resources"></a>

- [JSON Schema](https://json-schema.org/)
- [Understanding JSON
  Schema](https://json-schema.org/understanding-json-schema/about)
- [fast-json-stringify
  documentation](https://github.com/fastify/fast-json-stringify)
- [Ajv documentation](https://github.com/ajv-validator/ajv/blob/master/README.md)
- [Ajv i18n](https://github.com/ajv-validator/ajv-i18n)
- [Ajv custom errors](https://github.com/ajv-validator/ajv-errors)
- Custom error handling with core methods with error file dumping
  [example](https://github.com/fastify/example/tree/main/validation-messages)
