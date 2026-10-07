<h1 align="center">Fastify</h1>

## Routes

The route methods configure the endpoints of the application. Routes can be
declared using the shorthand method or the full declaration.

- [Full declaration](#full-declaration)
- [Routes options](#routes-options)
- [Shorthand declaration](#shorthand-declaration)
- [Url building](#url-building)
- [Async Await](#async-await)
- [Promise resolution](#promise-resolution)
- [Route Prefixing](#route-prefixing)
  - [Handling of / route inside prefixed
    plugins](#handling-of--route-inside-prefixed-plugins)
- [Custom Log Level](#custom-log-level)
- [Custom Log Serializer](#custom-log-serializer)
- [Config](#config)
- [Constraints](#constraints)
  - [Version Constraints](#version-constraints)
  - [Host Constraints](#host-constraints)

### Full declaration
<a id="full-declaration"></a>

```js
fastify.route(options)
```

### Routes options
<a id="options"></a>

* `method`: currently it supports `GET`, `HEAD`, `TRACE`, `DELETE`,
  `OPTIONS`, `PATCH`, `PUT` and `POST`. To accept more methods,
  the [`addHttpMethod`](./Server.md#addHttpMethod) must be used.
  It could also be an array of methods.
* `url`: the path of the URL to match this route (alias: `path`).
* `schema`: an object containing the schemas for the request and response. They
  need to be in [JSON Schema](https://json-schema.org/) format, check
  [here](./Validation-and-Serialization.md) for more info.

  * `body`: validates the body of the request if it is a POST, PUT, PATCH,
    TRACE, SEARCH, PROPFIND, PROPPATCH or LOCK method.
  * `querystring` or `query`: validates the querystring. This can be a complete
    JSON Schema object, with the property `type` of `object` and `properties`
    object of parameters, or simply the values of what would be contained in the
    `properties` object as shown below.
  * `params`: validates the params.
  * `response`: filter and generate a schema for the response, setting a schema
    allows us to have 10-20% more throughput.
* `exposeHeadRoute`: creates a sibling `HEAD` route for any `GET` routes.
  Defaults to the value of [`exposeHeadRoutes`](./Server.md#exposeHeadRoutes)
  instance option. If you want a custom `HEAD` handler without disabling this
  option, make sure to define it before the `GET` route.
* `attachValidation`: attach `validationError` to request, if there is a schema
  validation error, instead of sending the error to the error handler. The
  default [error format](https://ajv.js.org/api.html#error-objects) is the Ajv
  one.
* `onRequest(request, reply, done)`: a [function](./Hooks.md#onrequest) called
  as soon as a request is received, it could also be an array of functions.
* `preParsing(request, reply, payload, done)`: a
  [function](./Hooks.md#preparsing) called before parsing the request, it could
  also be an array of functions.
* `preValidation(request, reply, done)`: a [function](./Hooks.md#prevalidation)
  called after the shared `preValidation` hooks, useful if you need to perform
  authentication at route level for example, it could also be an array of
  functions.
* `preHandler(request, reply, done)`: a [function](./Hooks.md#prehandler) called
  just before the request handler, it could also be an array of functions.
* `preSerialization(request, reply, payload, done)`: a
  [function](./Hooks.md#preserialization) called just before the serialization,
  it could also be an array of functions.
* `onSend(request, reply, payload, done)`: a [function](./Hooks.md#route-hooks)
  called right before a response is sent, it could also be an array of
  functions.
* `onResponse(request, reply, done)`: a [function](./Hooks.md#onresponse) called
  when a response has been sent, so you will not be able to send more data to
  the client. It could also be an array of functions.
* `onTimeout(request, reply, done)`: a [function](./Hooks.md#ontimeout) called
  when a request is timed out and the HTTP socket has been hung up.
* `onError(request, reply, error, done)`: a [function](./Hooks.md#onerror)
  called when an Error is thrown or sent to the client by the route handler.
* `handler(request, reply)`: the function that will handle this request. The
  [Fastify server](./Server.md) will be bound to `this` when the handler is
  called. Note: using an arrow function will break the binding of `this`.
* `errorHandler(error, request, reply)`: a custom error handler for the scope of
  the request. Overrides the default error global handler, and anything set by
  [`setErrorHandler`](./Server.md#seterrorhandler), for requests to the route.
  To access the default handler, you can access `instance.errorHandler`. Note
  that this will point to fastify's default `errorHandler` only if a plugin
  hasn't overridden it already.
* `childLoggerFactory(logger, binding, opts, rawReq)`: a custom factory function
  that will be called to produce a child logger instance for every request.
  See [`childLoggerFactory`](./Server.md#childloggerfactory) for more info.
  Overrides the default logger factory, and anything set by
  [`setChildLoggerFactory`](./Server.md#setchildloggerfactory), for requests to
  the route. To access the default factory, you can access
  `instance.childLoggerFactory`. Note that this will point to Fastify's default
  `childLoggerFactory` only if a plugin hasn't overridden it already.
* `validatorCompiler({ schema, method, url, httpPart })`: function that builds
  schemas for request validations. See the [Validation and
  Serialization](./Validation-and-Serialization.md#schema-validator)
  documentation.
* `serializerCompiler({ { schema, method, url, httpStatus, contentType } })`:
  function that builds schemas for response serialization. See the [Validation and
  Serialization](./Validation-and-Serialization.md#schema-serializer)
  documentation.
* `schemaErrorFormatter(errors, dataVar)`: function that formats the errors from
  the validation compiler. See the [Validation and
  Serialization](./Validation-and-Serialization.md#error-handling)
  documentation. Overrides the global schema error formatter handler, and
  anything set by `setSchemaErrorFormatter`, for requests to the route.
* `bodyLimit`: prevents the default JSON body parser from parsing request bodies
  larger than this number of bytes. Must be an integer. You may also set this
  option globally when first creating the Fastify instance with
  `fastify(options)`. Defaults to `1048576` (1 MiB).
* `handlerTimeout`: maximum number of milliseconds for the route's full
  lifecycle. Overrides the server-level
  [`handlerTimeout`](./Server.md#factory-handler-timeout). Must be a positive
  integer. When the timeout fires, `request.signal` is aborted and a 503 error
  is sent through the error handler (which can be customized per-route).
* `logLevel`: set log level for this route. See below.
* `logSerializers`: set serializers to log for this route.
* `config`: object used to store custom configuration.
* `version`: a [semver](https://semver.org/) compatible string that defined the
  version of the endpoint. [Example](#version-constraints).
* `constraints`: defines route restrictions based on request properties or
  values, enabling customized matching using
  [find-my-way](https://github.com/delvedor/find-my-way) constraints. Includes
  built-in `version` and `host` constraints, with support for custom constraint
  strategies.
* `prefixTrailingSlash`: string used to determine how to handle passing `/` as a
  route with a prefix.
  * `both` (default): Will register both `/prefix` and `/prefix/`.
  * `slash`: Will register only `/prefix/`.
  * `no-slash`: Will register only `/prefix`.

  Note: this option does not override `ignoreTrailingSlash` in
  [Server](./Server.md) configuration.

* `request` is defined in [Request](./Request.md).

* `reply` is defined in [Reply](./Reply.md).

> ℹ️ Note:
> The documentation for `onRequest`, `preParsing`, `preValidation`,
> `preHandler`, `preSerialization`, `onSend`, and `onResponse` is detailed in
> [Hooks](./Hooks.md). To send a response before the request is handled by the
> `handler`, see [Respond to a request from
> a hook](./Hooks.md#respond-to-a-request-from-a-hook).

Example:
```js
fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    querystring: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        excitement: { type: 'integer' }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
})
```

### Shorthand declaration
<a id="shorthand-declaration"></a>

The above route declaration is more *Hapi*-like, but if you prefer an
*Express/Restify* approach, we support it as well:

`fastify.get(path, [options], handler)`

`fastify.head(path, [options], handler)`

`fastify.post(path, [options], handler)`

`fastify.put(path, [options], handler)`

`fastify.delete(path, [options], handler)`

`fastify.options(path, [options], handler)`

`fastify.patch(path, [options], handler)`

Example:
```js
const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
}
fastify.get('/', opts, (request, reply) => {
  reply.send({ hello: 'world' })
})
```

`fastify.all(path, [options], handler)` will add the same handler to all the
supported methods.

The handler may also be supplied via the `options` object:
```js
const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
}
fastify.get('/', opts)
```

> ℹ️ Note:
> Specifying the handler in both `options` and as the third parameter to
> the shortcut method throws a duplicate `handler` error.

### Url building
<a id="url-building"></a>

Fastify supports both static and dynamic URLs.

To register a **parametric** path, use a *colon* before the parameter name. For
**wildcard**, use a *star*. Static routes are always checked before parametric
and wildcard routes.

```js
// parametric
fastify.get('/example/:userId', function (request, reply) {
  // curl ${app-url}/example/12345
  // userId === '12345'
  const { userId } = request.params;
  // your code here
})
fastify.get('/example/:userId/:secretToken', function (request, reply) {
  // curl ${app-url}/example/12345/abc.zHi
  // userId === '12345'
  // secretToken === 'abc.zHi'
  const { userId, secretToken } = request.params;
  // your code here
})

// wildcard
fastify.get('/example/*', function (request, reply) {})
```

Regular expression routes are supported, but slashes must be escaped.
Take note that RegExp is also very expensive in terms of performance!
```js
// parametric with regexp
fastify.get('/example/:file(^\\d+).png', function (request, reply) {
  // curl ${app-url}/example/12345.png
  // file === '12345'
  const { file } = request.params;
  // your code here
})
```

It is possible to define more than one parameter within the same couple of slash
("/"). Such as:
```js
fastify.get('/example/near/:lat-:lng/radius/:r', function (request, reply) {
  // curl ${app-url}/example/near/15°N-30°E/radius/20
  // lat === "15°N"
  // lng === "30°E"
  // r ==="20"
  const { lat, lng, r } = request.params;
  // your code here
})
```
*Remember in this case to use the dash ("-") as parameters separator.*

Finally, it is possible to have multiple parameters with RegExp:
```js
fastify.get('/example/at/:hour(^\\d{2})h:minute(^\\d{2})m', function (request, reply) {
  // curl ${app-url}/example/at/08h24m
  // hour === "08"
  // minute === "24"
  const { hour, minute } = request.params;
  // your code here
})
```
In this case as parameter separator it is possible to use whatever character is
not matched by the regular expression.

The last parameter can be made optional by adding a question mark ("?") to the
end of the parameter name.
```js
fastify.get('/example/posts/:id?', function (request, reply) {
  const { id } = request.params;
  // your code here
})
```
In this case, `/example/posts` and `/example/posts/1` are both valid. The
optional param will be `undefined` if not specified.

Having a route with multiple parameters may negatively affect performance.
Prefer a single parameter approach, especially on routes that are on the hot
path of your application. For more details, see
[find-my-way](https://github.com/delvedor/find-my-way).

To include a colon in a path without declaring a parameter, use a double colon.
For example:
```js
fastify.post('/name::verb') // will be interpreted as /name:verb
```

### Async Await
<a id="async-await"></a>

Are you an `async/await` user? We have you covered!
```js
fastify.get('/', options, async function (request, reply) {
  const data = await getData()
  const processed = await processData(data)
  return processed
})
```

As shown, `reply.send` is not called to send data back to the user. Simply
return the body and you are done!

If needed, you can also send data back with `reply.send`. In this case, do not
forget to `return reply` or `await reply` in your `async` handler to avoid race
conditions.

```js
fastify.get('/', options, async function (request, reply) {
  const data = await getData()
  const processed = await processData(data)
  return reply.send(processed)
})
```

If the route is wrapping a callback-based API that will call `reply.send()`
outside of the promise chain, it is possible to `await reply`:

```js
fastify.get('/', options, async function (request, reply) {
  setImmediate(() => {
    reply.send({ hello: 'world' })
  })
  await reply
})
```

Returning reply also works:

```js
fastify.get('/', options, async function (request, reply) {
  setImmediate(() => {
    reply.send({ hello: 'world' })
  })
  return reply
})
```

> ⚠ Warning:
> * When using both `return value` and `reply.send(value)`, the first one takes
>   precedence, the second is discarded, and a *warn* log is emitted.
> * Calling `reply.send()` outside of the promise is possible but requires special
>   attention. See [promise-resolution](#promise-resolution).
> * `undefined` cannot be returned. See [promise-resolution](#promise-resolution).

### Promise resolution
<a id="promise-resolution"></a>

If the handler is an `async` function or returns a promise, be aware of the
special behavior to support callback and promise control-flow. When the
handler's promise resolves, the reply is automatically sent with its value
unless you explicitly await or return `reply` in the handler.

1. If using `async/await` or promises but responding with `reply.send`:
    - **Do** `return reply` / `await reply`.
    - **Do not** forget to call `reply.send`.
2. If using `async/await` or promises:
    - **Do not** use `reply.send`.
    - **Do** return the value to send.

This approach supports both `callback-style` and `async-await` with minimal
trade-off. However, it is recommended to use only one style for consistent
error handling within your application.

> ℹ️ Note:
> Every async function returns a promise by itself.

### Route Prefixing
<a id="route-prefixing"></a>

Sometimes maintaining multiple versions of the same API is necessary. A common
approach is to prefix routes with the API version number, e.g., `/v1/user`.
Fastify offers a fast and smart way to create different versions of the same API
without changing all the route names by hand, called *route prefixing*. Here is
how it works:

```js
// server.js
const fastify = require('fastify')()

fastify.register(require('./routes/v1/users'), { prefix: '/v1' })
fastify.register(require('./routes/v2/users'), { prefix: '/v2' })

fastify.listen({ port: 3000 })
```

```js
// routes/v1/users.js
module.exports = function (fastify, opts, done) {
  fastify.get('/user', handler_v1)
  done()
}
```

```js
// routes/v2/users.js
module.exports = function (fastify, opts, done) {
  fastify.get('/user', handler_v2)
  done()
}
```
Fastify will not complain about using the same name for two different routes
because it handles the prefix automatically at compilation time. This ensures
performance is not affected.

Now clients will have access to the following routes:
- `/v1/user`
- `/v2/user`

This can be done multiple times and works for nested `register`. Route
parameters are also supported.

To use a prefix for all routes, place them inside a plugin:

```js
const fastify = require('fastify')()

const route = {
    method: 'POST',
    url: '/login',
    handler: () => {},
    schema: {},
}

fastify.register(function (app, _, done) {
  app.get('/users', () => {})
  app.route(route)

  done()
}, { prefix: '/v1' }) // global route prefix

await fastify.listen({ port: 3000 })
```

### Route Prefixing and fastify-plugin
<a id="fastify-plugin"></a>

If using [`fastify-plugin`](https://github.com/fastify/fastify-plugin) to wrap
routes, this option will not work. To make it work, wrap a plugin in a plugin:
```js
const fp = require('fastify-plugin')
const routes = require('./lib/routes')

module.exports = fp(async function (app, opts) {
  app.register(routes, {
    prefix: '/v1',
  })
}, {
  name: 'my-routes'
})
```

#### Handling of / route inside prefixed plugins

The `/` route behaves differently based on whether the prefix ends with `/`.
For example, with a prefix `/something/`, adding a `/` route matches only
`/something/`. With a prefix `/something`, adding a `/` route matches both
`/something` and `/something/`.

See the `prefixTrailingSlash` route option above to change this behavior.

### Custom Log Level
<a id="custom-log-level"></a>

Different log levels can be set for routes in Fastify by passing the `logLevel`
option to the plugin or route with the desired
[value](https://github.com/pinojs/pino/blob/main/docs/api.md#level-string).

Be aware that setting `logLevel` at the plugin level also affects
[`setNotFoundHandler`](./Server.md#setnotfoundhandler) and
[`setErrorHandler`](./Server.md#seterrorhandler).

```js
// server.js
const fastify = require('fastify')({ logger: true })

fastify.register(require('./routes/user'), { logLevel: 'warn' })
fastify.register(require('./routes/events'), { logLevel: 'debug' })

fastify.listen({ port: 3000 })
```

Or pass it directly to a route:
```js
fastify.get('/', { logLevel: 'warn' }, (request, reply) => {
  reply.send({ hello: 'world' })
})
```
*Remember that the custom log level applies only to routes, not to the global
Fastify Logger, accessible with `fastify.log`.*

### Custom Log Serializer
<a id="custom-log-serializer"></a>

In some contexts, logging a large object may waste resources. Define custom
[`serializers`](https://github.com/pinojs/pino/blob/main/docs/api.md#serializers-object)
and attach them in the appropriate context.

```js
const fastify = require('fastify')({ logger: true })

fastify.register(require('./routes/user'), {
  logSerializers: {
    user: (value) => `My serializer one - ${value.name}`
  }
})
fastify.register(require('./routes/events'), {
  logSerializers: {
    user: (value) => `My serializer two - ${value.name} ${value.surname}`
  }
})

fastify.listen({ port: 3000 })
```

Serializers can be inherited by context:

```js
const fastify = Fastify({
  logger: {
    level: 'info',
    serializers: {
      user (req) {
        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          host: req.host,
          remoteAddress: req.ip,
          remotePort: req.socket.remotePort
        }
      }
    }
  }
})

fastify.register(context1, {
  logSerializers: {
    user: value => `My serializer father - ${value}`
  }
})

async function context1 (fastify, opts) {
  fastify.get('/', (req, reply) => {
    req.log.info({ user: 'call father serializer', key: 'another key' })
    // shows: { user: 'My serializer father - call father  serializer', key: 'another key' }
    reply.send({})
  })
}

fastify.listen({ port: 3000 })
```

### Config
<a id="routes-config"></a>

Registering a new handler, you can pass a configuration object to it and
retrieve it in the handler.

```js
// server.js
const fastify = require('fastify')()

function handler (req, reply) {
  reply.send(reply.routeOptions.config.output)
}

fastify.get('/en', { config: { output: 'hello world!' } }, handler)
fastify.get('/it', { config: { output: 'ciao mondo!' } }, handler)

fastify.listen({ port: 3000 })
```

### Constraints
<a id="constraints"></a>

Fastify supports constraining routes to match certain requests based on
properties like the `Host` header or any other value via
[`find-my-way`](https://github.com/delvedor/find-my-way) constraints.
Constraints are specified in the `constraints` property of the route options.
Fastify has two built-in constraints: `version` and `host`. Custom constraint
strategies can be added to inspect other parts of a request to decide if a route
should be executed.

#### Version Constraints

You can provide a `version` key in the `constraints` option to a route.
Versioned routes allows multiple handlers to be declared for the same HTTP
route path, matched according to the request's `Accept-Version` header.
The `Accept-Version` header value should follow the
[semver](https://semver.org/) specification, and routes should be declared
with exact semver versions for matching.

Fastify will require a request `Accept-Version` header to be set if the route
has a version set, and will prefer a versioned route to a non-versioned route
for the same path. Advanced version ranges and pre-releases currently are not
supported.

> ℹ️ Note:
> Using this feature can degrade the router's performance.

```js
fastify.route({
  method: 'GET',
  url: '/',
  constraints: { version: '1.2.0' },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
})

fastify.inject({
  method: 'GET',
  url: '/',
  headers: {
    'Accept-Version': '1.x' // it could also be '1.2.0' or '1.2.x'
  }
}, (err, res) => {
  // { hello: 'world' }
})
```

> ⚠ Warning:
> Set a
> [`Vary`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)
> header in responses with the value used for versioning
> (e.g., `'Accept-Version'`) to prevent cache poisoning attacks.
> This can also be configured in a Proxy/CDN.
>
> ```js
> const append = require('vary').append
> fastify.addHook('onSend', (req, reply, payload, done) => {
>   if (req.headers['accept-version']) { // or the custom header being used
>     let value = reply.getHeader('Vary') || ''
>     const header = Array.isArray(value) ? value.join(', ') : String(value)
>     if ((value = append(header, 'Accept-Version'))) { // or the custom header being used
>       reply.header('Vary', value)
>     }
>   }
>  done()
> })
> ```

If multiple versions with the same major or minor are declared, Fastify will
always choose the highest compatible with the `Accept-Version` header value.

If the request lacks an `Accept-Version` header, a 404 error will be returned.

Custom version matching logic can be defined through the
[`constraints`](./Server.md#constraints) configuration when creating a Fastify
server instance.

#### Host Constraints

Provide a `host` key in the `constraints` route option to limit the route to
certain values of the request `Host` header. `host` constraint values can be
specified as strings for exact matches or RegExps for arbitrary host matching.

```js
fastify.route({
  method: 'GET',
  url: '/',
  constraints: { host: 'auth.fastify.example' },
  handler: function (request, reply) {
    reply.send('hello world from auth.fastify.example')
  }
})

fastify.inject({
  method: 'GET',
  url: '/',
  headers: {
    'Host': 'fastify.example'
  }
}, (err, res) => {
  // 404 because the host doesn't match the constraint
})

fastify.inject({
  method: 'GET',
  url: '/',
  headers: {
    'Host': 'auth.fastify.dev'
  }
}, (err, res) => {
  // => 'hello world from auth.fastify.dev'
})
```

RegExp `host` constraints can also be specified allowing constraining to hosts
matching wildcard subdomains (or any other pattern):

```js
fastify.route({
  method: 'GET',
  url: '/',
  constraints: { host: /.*\.fastify\.example/ }, // will match any subdomain of fastify.dev
  handler: function (request, reply) {
    reply.send('hello world from ' + request.headers.host)
  }
})
```

#### Asynchronous Custom Constraints

Custom constraints can be provided, and the `constraint` criteria can be
fetched from another source such as a database. Use asynchronous custom
constraints as a last resort, as they impact router performance.

```js
function databaseOperation(field, done) {
  done(null, field)
}

const secret = {
  // strategy name for referencing in the route handler `constraints` options
  name: 'secret',
  // storage factory for storing routes in the find-my-way route tree
  storage: function () {
    let handlers = {}
    return {
      get: (type) => { return handlers[type] || null },
      set: (type, store) => { handlers[type] = store }
    }
  },
  // function to get the value of the constraint from each incoming request
  deriveConstraint: (req, ctx, done) => {
    databaseOperation(req.headers['secret'], done)
  },
  // optional flag marking if handlers without constraints can match requests that have a value for this constraint
  mustMatchWhenDerived: true
}
```

> ⚠ Warning:
> When using asynchronous constraints, avoid returning errors inside the
> callback. If errors are unavoidable, provide a custom `frameworkErrors`
> handler to manage them. Otherwise, route selection may break or expose
> sensitive information.
>
> ```js
> const Fastify = require('fastify')
>
> const fastify = Fastify({
>   frameworkErrors: function (err, req, res) {
>     if (err instanceof Fastify.errorCodes.FST_ERR_ASYNC_CONSTRAINT) {
>       res.code(400)
>       return res.send("Invalid header provided")
>     } else {
>       res.send(err)
>     }
>   }
> })
> ```
