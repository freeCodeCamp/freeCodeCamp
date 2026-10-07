<h1 align="center">Fastify</h1>

## Request
The first parameter of the handler function is `Request`.

Request is a core Fastify object containing the following fields:
- `query` - The parsed querystring, its format is specified by
  [`querystringParser`](./Server.md#querystringparser).
- `body` - The request payload, see [Content-Type Parser](./ContentTypeParser.md)
  for details on what request payloads Fastify natively parses and how to support
  other content types.
- `params` - The params matching the URL.
- [`headers`](#headers) - The headers getter and setter.
- `raw` - The incoming HTTP request from Node core.
- `server` - The Fastify server instance, scoped to the current
  [encapsulation context](./Encapsulation.md).
- `id` - The request ID.
- `log` - The logger instance of the incoming request.
- `ip` - The IP address of the incoming request.
- `ips` - An array of the IP addresses, ordered from closest to furthest, in the
  `X-Forwarded-For` header of the incoming request (only when the
  [`trustProxy`](./Server.md#factory-trust-proxy) option is enabled).
- `host` - The host of the incoming request (derived from `X-Forwarded-Host`
  header when the [`trustProxy`](./Server.md#factory-trust-proxy) option is
  enabled). For HTTP/2 compatibility, it returns `:authority` if no host header
  exists. The host header may return an empty string if `requireHostHeader` is
  `false`, not provided with HTTP/1.0, or removed by schema validation.
  ⚠ Security: this value comes from client-controlled headers; only trust it
  when you control proxy behavior and have validated or allow-listed hosts.
  No additional validation is performed beyond RFC parsing (see
  [RFC 9110, section 7.2](https://www.rfc-editor.org/rfc/rfc9110#section-7.2) and
  [RFC 3986, section 3.2.2](https://www.rfc-editor.org/rfc/rfc3986#section-3.2.2)).
- `hostname` - The hostname derived from the `host` property of the incoming request.
- `port` - The port from the `host` property, which may refer to the port the
  server is listening on.
- `protocol` - The protocol of the incoming request (`https` or `http`).
- `method` - The method of the incoming request.
- `url` - The URL of the incoming request.
- `originalUrl` - Similar to `url`, allows access to the original `url` in
  case of internal re-routing.
- `is404` - `true` if request is being handled by 404 handler, `false` otherwise.
- `socket` - The underlying connection of the incoming request.
- `signal` - An `AbortSignal` that aborts when the handler timeout
  fires or the client disconnects. Created lazily on first access, so
  there is zero overhead when not used. When
  [`handlerTimeout`](./Server.md#factory-handler-timeout) is configured,
  the signal is pre-created and also aborts on timeout. Pass it to
  `fetch()`, database queries, or any API accepting a `signal` option
  for cooperative cancellation. On timeout, `signal.reason` is the
  `FST_ERR_HANDLER_TIMEOUT` error; on client disconnect it is a generic
  `AbortError`. Check `signal.reason.code` to distinguish the two cases.
- `context` - Deprecated, use `request.routeOptions.config` instead. A Fastify
  internal object. Do not use or modify it directly. It is useful to access one
  special key:
  - `context.config` - The route [`config`](./Routes.md#routes-config) object.
- `routeOptions` - The route [`option`](./Routes.md#routes-options) object.
  - `bodyLimit` - Either server limit or route limit.
  - `handlerTimeout` - The handler timeout configured for this route.
  - `config` - The [`config`](./Routes.md#routes-config) object for this route.
  - `method` - The HTTP method for the route.
  - `url` - The path of the URL to match this route.
  - `handler` - The handler for this route.
  - `attachValidation` - Attach `validationError` to request (if there is
    a schema defined).
  - `logLevel` - Log level defined for this route.
  - `schema` - The JSON schemas definition for this route.
  - `version` - A semver compatible string that defines the version of the endpoint.
  - `exposeHeadRoute` - Creates a sibling HEAD route for any GET routes.
  - `prefixTrailingSlash` - String used to determine how to handle passing `/`
    as a route with a prefix.
- [.getValidationFunction(schema | httpPart)](#getvalidationfunction) -
  Returns a validation function for the specified schema or HTTP part, if
  set or cached.
- [.compileValidationSchema(schema, [httpPart])](#compilevalidationschema) -
  Compiles the specified schema and returns a validation function using the
  default (or customized) `ValidationCompiler`. The optional `httpPart` is
  forwarded to the `ValidationCompiler` if provided, defaults to `null`.
- [.validateInput(data, schema | httpPart, [httpPart])](#validate) -
  Validates the input using the specified schema and returns the serialized
  payload. If `httpPart` is provided, the function uses the serializer for
  that HTTP Status Code. Defaults to `null`.

### Headers

The `request.headers` is a getter that returns an object with the headers of the
incoming request. Set custom headers as follows:

```js
request.headers = {
  'foo': 'bar',
  'baz': 'qux'
}
```

This operation adds new values to the request headers, accessible via
`request.headers.bar`. Standard request headers remain accessible via
`request.raw.headers`.

For performance reasons, `Symbol('fastify.RequestAcceptVersion')` may be added
to headers on `not found` routes.

> ℹ️ Note:
> Schema validation may mutate the `request.headers` and
> `request.raw.headers` objects, causing the headers to become empty.

```js
fastify.post('/:params', options, function (request, reply) {
  console.log(request.body)
  console.log(request.query)
  console.log(request.params)
  console.log(request.headers)
  console.log(request.raw)
  console.log(request.server)
  console.log(request.id)
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.host)
  console.log(request.hostname)
  console.log(request.port)
  console.log(request.protocol)
  console.log(request.url)
  console.log(request.routeOptions.method)
  console.log(request.routeOptions.bodyLimit)
  console.log(request.routeOptions.method)
  console.log(request.routeOptions.url)
  console.log(request.routeOptions.attachValidation)
  console.log(request.routeOptions.logLevel)
  console.log(request.routeOptions.version)
  console.log(request.routeOptions.exposeHeadRoute)
  console.log(request.routeOptions.prefixTrailingSlash)
  console.log(request.routeOptions.logLevel)
  request.log.info('some info')
})
```
### .getValidationFunction(schema | httpPart)
<a id="getvalidationfunction"></a>

By calling this function with a provided `schema` or `httpPart`, it returns a
`validation` function to validate diverse inputs. It returns `undefined` if no
serialization function is found using the provided inputs.

This function has an `errors` property. Errors encountered during the last
validation are assigned to `errors`.

```js
const validate = request
                  .getValidationFunction({
                    type: 'object',
                    properties: {
                      foo: {
                        type: 'string'
                      }
                    }
                  })
console.log(validate({ foo: 'bar' })) // true
console.log(validate.errors) // null

// or

const validate = request
                  .getValidationFunction('body')
console.log(validate({ foo: 0.5 })) // false
console.log(validate.errors) // validation errors
```

See [.compileValidationSchema(schema, [httpStatus])](#compileValidationSchema)
for more information on compiling validation schemas.

### .compileValidationSchema(schema, [httpPart])
<a id="compilevalidationschema"></a>

This function compiles a validation schema and returns a function to validate data.
The returned function (a.k.a. _validation function_) is compiled using the provided
[`SchemaController#ValidationCompiler`](./Server.md#schema-controller). A `WeakMap`
is used to cache this, reducing compilation calls.

The optional parameter `httpPart`, if provided, is forwarded to the
`ValidationCompiler`, allowing it to compile the validation function if a custom
`ValidationCompiler` is provided for the route.

This function has an `errors` property. Errors encountered during the last
validation are assigned to `errors`.

```js
const validate = request
                  .compileValidationSchema({
                    type: 'object',
                    properties: {
                      foo: {
                        type: 'string'
                      }
                    }
                  })
console.log(validate({ foo: 'bar' })) // true
console.log(validate.errors) // null

// or

const validate = request
                  .compileValidationSchema({
                    type: 'object',
                    properties: {
                      foo: {
                        type: 'string'
                      }
                    }
                  }, 200)
console.log(validate({ hello: 'world' })) // false
console.log(validate.errors) // validation errors
```

Be careful when using this function, as it caches compiled validation functions
based on the provided schema. If schemas are mutated or changed, the validation
functions will not detect the alterations and will reuse the previously compiled
validation function, as the cache is based on the schema's reference.

If schema properties need to be changed, create a new schema object to benefit
from the cache mechanism.

Using the following schema as an example:
```js
const schema1 = {
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  }
}
```

*Not*
```js
const validate = request.compileValidationSchema(schema1)

// Later on...
schema1.properties.foo.type = 'integer'
const newValidate = request.compileValidationSchema(schema1)

console.log(newValidate === validate) // true
```

*Instead*
```js
const validate = request.compileValidationSchema(schema1)

// Later on...
const newSchema = Object.assign({}, schema1)
newSchema.properties.foo.type = 'integer'

const newValidate = request.compileValidationSchema(newSchema)

console.log(newValidate === validate) // false
```

### .validateInput(data, [schema | httpPart], [httpPart])
<a id="validate"></a>

This function validates the input based on the provided schema or HTTP part. If
both are provided, the `httpPart` parameter takes precedence.

If no validation function exists for a given `schema`, a new validation function
will be compiled, forwarding the `httpPart` if provided.

```js
request
  .validateInput({ foo: 'bar'}, {
    type: 'object',
    properties: {
      foo: {
        type: 'string'
      }
    }
  }) // true

// or

request
  .validateInput({ foo: 'bar'}, {
    type: 'object',
    properties: {
      foo: {
        type: 'string'
      }
    }
  }, 'body') // true

// or

request
  .validateInput({ hello: 'world'}, 'query') // false
```

See [.compileValidationSchema(schema, [httpStatus])](#compileValidationSchema)
for more information on compiling validation schemas.
