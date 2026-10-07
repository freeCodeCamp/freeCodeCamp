# V3 Migration Guide

This guide is intended to help with migration from Fastify v2 to v3.

Before beginning please ensure that any deprecation warnings from v2 are fixed.
All v2 deprecations have been removed and they will no longer work after
upgrading. ([#1750](https://github.com/fastify/fastify/pull/1750))

## Breaking changes

### Changed middleware support ([#2014](https://github.com/fastify/fastify/pull/2014))

From Fastify v3, middleware support does not come out-of-the-box with the
framework itself.

If you use Express middleware in your application, please install and register
the [`@fastify/express`](https://github.com/fastify/fastify-express) or
[`@fastify/middie`](https://github.com/fastify/middie) plugin before doing so.

**v2:**

```js
// Using the Express `cors` middleware in Fastify v2.
fastify.use(require('cors')());
```

**v3:**

```js
// Using the Express `cors` middleware in Fastify v3.
await fastify.register(require('@fastify/express'));
fastify.use(require('cors')());
```

### Changed logging serialization ([#2017](https://github.com/fastify/fastify/pull/2017))

The logging [Serializers](../Reference/Logging.md) have been updated to now
Fastify [`Request`](../Reference/Request.md) and
[`Reply`](../Reference/Reply.md) objects instead of native ones.

Any custom serializers must be updated if they rely upon `request` or `reply`
properties that are present on the native objects but not the Fastify objects.

**v2:**

```js
const fastify = require('fastify')({
  logger: {
    serializers: {
      res(res) {
        return {
          statusCode: res.statusCode,
          customProp: res.customProp
        };
      }
    }
  }
});
```

**v3:**

```js
const fastify = require('fastify')({
  logger: {
    serializers: {
      res(reply) {
        return {
          statusCode: reply.statusCode, // No change required
          customProp: reply.raw.customProp // Log custom property from res object
        };
      }
    }
  }
});
```

### Changed schema substitution ([#2023](https://github.com/fastify/fastify/pull/2023))

The non-standard `replace-way` shared schema support has been removed. This
feature has been replaced with JSON Schema specification compliant `$ref` based
substitution. To help understand this change read [Validation and Serialization
in Fastify
v3](https://dev.to/eomm/validation-and-serialization-in-fastify-v3-2e8l).

**v2:**

```js
const schema = {
  body: 'schemaId#'
};
fastify.route({ method, url, schema, handler });
```

**v3:**

```js
const schema = {
  body: {
    $ref: 'schemaId#'
  }
};
fastify.route({ method, url, schema, handler });
```

### Changed schema validation options ([#2023](https://github.com/fastify/fastify/pull/2023))

The `setSchemaCompiler` and `setSchemaResolver` options have been replaced with
the `setValidatorCompiler` to enable future tooling improvements. To help
understand this change read [Validation and Serialization in Fastify
v3](https://dev.to/eomm/validation-and-serialization-in-fastify-v3-2e8l).

**v2:**

```js
const fastify = Fastify();
const ajv = new AJV();
ajv.addSchema(schemaA);
ajv.addSchema(schemaB);

fastify.setSchemaCompiler(schema => ajv.compile(schema));
fastify.setSchemaResolver(ref => ajv.getSchema(ref).schema);
```

**v3:**

```js
const fastify = Fastify();
const ajv = new AJV();
ajv.addSchema(schemaA);
ajv.addSchema(schemaB);

fastify.setValidatorCompiler(({ schema, method, url, httpPart }) =>
  ajv.compile(schema)
);
```

### Changed preParsing hook behavior ([#2286](https://github.com/fastify/fastify/pull/2286))

From Fastify v3, the behavior of the `preParsing` hook will change slightly
to support request payload manipulation.

The hook now takes an additional argument, `payload`, and therefore the new hook
signature is `fn(request, reply, payload, done)` or `async fn(request, reply,
payload)`.

The hook can optionally return a new stream via `done(null, stream)` or
returning the stream in case of async functions.

If the hook returns a new stream, it will be used instead of the original one in
subsequent hooks. A sample use case for this is handling compressed requests.

The new stream should add the `receivedEncodedLength` property to the stream
that should reflect the actual data size received from the client. For instance,
in a compressed request it should be the size of the compressed payload. This
property can (and should) be dynamically updated during `data` events.

The old syntax of Fastify v2 without payload is supported but it is deprecated.

### Changed hooks behavior ([#2004](https://github.com/fastify/fastify/pull/2004))

From Fastify v3, the behavior of `onRoute` and `onRegister` hooks will change
slightly to support hook encapsulation.

- `onRoute` - The hook will be called asynchronously. The hook is now inherited
  when registering a new plugin within the same encapsulation scope. Thus, this
  hook should be registered _before_ registering any plugins.
- `onRegister` - Same as the onRoute hook. The only difference is that now the
  very first call will no longer be the framework itself, but the first
  registered plugin.

### Changed Content Type Parser syntax ([#2286](https://github.com/fastify/fastify/pull/2286))

In Fastify v3 the content type parsers now have a single signature for parsers.

The new signatures are `fn(request, payload, done)` or `async fn(request,
payload)`. Note that `request` is now a Fastify request, not an
`IncomingMessage`. The payload is, by default, a stream. If the `parseAs` option
is used in `addContentTypeParser`, then `payload` reflects the option value
(string or buffer).

The old signatures `fn(req, [done])` or `fn(req, payload, [done])` (where `req`
is `IncomingMessage`) are still supported but are deprecated.

### Changed TypeScript support

The type system was changed in Fastify version 3. The new type system introduces
generic constraining and defaulting, plus a new way to define schema types such
as a request body, querystring, and more!

**v2:**

```ts
interface PingQuerystring {
  foo?: number;
}

interface PingParams {
  bar?: string;
}

interface PingHeaders {
  a?: string;
}

interface PingBody {
  baz?: string;
}

server.get<PingQuerystring, PingParams, PingHeaders, PingBody>(
  '/ping/:bar',
  opts,
  (request, reply) => {
    console.log(request.query); // This is of type `PingQuerystring`
    console.log(request.params); // This is of type `PingParams`
    console.log(request.headers); // This is of type `PingHeaders`
    console.log(request.body); // This is of type `PingBody`
  }
);
```

**v3:**

```ts
server.get<{
  Querystring: PingQuerystring;
  Params: PingParams;
  Headers: PingHeaders;
  Body: PingBody;
}>('/ping/:bar', opts, async (request, reply) => {
  console.log(request.query); // This is of type `PingQuerystring`
  console.log(request.params); // This is of type `PingParams`
  console.log(request.headers); // This is of type `PingHeaders`
  console.log(request.body); // This is of type `PingBody`
});
```

### Manage uncaught exception ([#2073](https://github.com/fastify/fastify/pull/2073))

In sync route handlers, if an error was thrown the server crashed by design
without calling the configured `.setErrorHandler()`. This has changed and now
all unexpected errors in sync and async routes are managed.

**v2:**

```js
fastify.setErrorHandler((error, request, reply) => {
  // this is NOT called
  reply.send(error)
})
fastify.get('/', (request, reply) => {
  const maybeAnArray = request.body.something ? [] : 'I am a string'
  maybeAnArray.substr() // Thrown: [].substr is not a function and crash the server
})
```

**v3:**

```js
fastify.setErrorHandler((error, request, reply) => {
  // this IS called
  reply.send(error)
})
fastify.get('/', (request, reply) => {
  const maybeAnArray = request.body.something ? [] : 'I am a string'
  maybeAnArray.substr() // Thrown: [].substr is not a function, but it is handled
})
```

## Further additions and improvements

- Hooks now have consistent context regardless of how they are registered
  ([#2005](https://github.com/fastify/fastify/pull/2005))
- Deprecated `request.req` and `reply.res` for
  [`request.raw`](../Reference/Request.md) and
  [`reply.raw`](../Reference/Reply.md)
  ([#2008](https://github.com/fastify/fastify/pull/2008))
- Removed `modifyCoreObjects` option
  ([#2015](https://github.com/fastify/fastify/pull/2015))
- Added [`connectionTimeout`](../Reference/Server.md#factory-connection-timeout)
  option ([#2086](https://github.com/fastify/fastify/pull/2086))
- Added [`keepAliveTimeout`](../Reference/Server.md#factory-keep-alive-timeout)
  option ([#2086](https://github.com/fastify/fastify/pull/2086))
- Added async-await support for [plugins](../Reference/Plugins.md#async-await)
  ([#2093](https://github.com/fastify/fastify/pull/2093))
- Added the feature to throw object as error
  ([#2134](https://github.com/fastify/fastify/pull/2134))
