# V5 Migration Guide

This guide is intended to help with migration from Fastify v4 to v5.

Before migrating to v5, please ensure that you have fixed all deprecation
warnings from v4. All v4 deprecations have been removed and will no longer
work after upgrading.

## Long Term Support Cycle

Fastify v5 will only support Node.js v20+. If you are using an older version of
Node.js, you will need to upgrade to a newer version to use Fastify v5.

Fastify v4 is still supported until June 30, 2025. If you are unable to upgrade,
you should consider buying an end-of-life support plan from HeroDevs.

### Why Node.js v20?

Fastify v5 will only support Node.js v20+ because it has significant differences
compared to v18, such as
better support for `node:test`. This allows us to provide a better developer
experience and streamline maintenance.

Node.js v18 will exit Long Term Support on April 30, 2025, so you should be planning
to upgrade to v20 anyway.

## Breaking Changes

### Full JSON Schema is now required for `querystring`, `params` and `body` and response schemas

Starting with v5, Fastify will require a full JSON schema for the `querystring`,
`params` and `body` schema. Note that the `jsonShortHand` option has been
removed as well.

If the default JSON Schema validator is used, you will need
to provide a full JSON schema for the
`querystring`, `params`, `body`, and `response` schemas,
including the `type` property.

```js
// v4
fastify.get('/route', {
  schema: {
    querystring: {
      name: { type: 'string' }
    }
  }
}, (req, reply) => {
  reply.send({ hello: req.query.name });
});
```

```js
// v5
fastify.get('/route', {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        name: { type: 'string' }
      },
      required: ['name']
    }
  }
}, (req, reply) => {
  reply.send({ hello: req.query.name });
});
```

See [#5586](https://github.com/fastify/fastify/pull/5586) for more details

Note that it's still possible to override the JSON Schema validator to
use a different format, such as Zod. This change simplifies that as well.

This change helps with integration of other tools, such as
[`@fastify/swagger`](https://github.com/fastify/fastify-swagger).

### New logger constructor signature

In Fastify v4, Fastify accepted the options to build a pino
logger in the `logger` option, as well as a custom logger instance.
This was the source of significant confusion.

As a result, the `logger` option will not accept a custom logger anymore in v5.
To use a custom logger, you should use the `loggerInstance` option instead:

```js
// v4
const logger = require('pino')();
const fastify = require('fastify')({
  logger
});
```

```js
// v5
const loggerInstance = require('pino')();
const fastify = require('fastify')({
  loggerInstance
});
```

### `useSemicolonDelimiter` false by default

Starting with v5, Fastify instances will no longer default to supporting the use
of semicolon delimiters in the query string as they did in v4.
This is due to it being non-standard
behavior and not adhering to [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986#section-3.4).

If you still wish to use semicolons as delimiters, you can do so by
setting `useSemicolonDelimiter: true` in the server configuration.

```js
const fastify = require('fastify')({
  useSemicolonDelimiter: true
});
```

### The parameters object no longer has a prototype

In v4, the `parameters` object had a prototype. This is no longer the case in v5.
This means that you can no longer access properties inherited from `Object` on
the `parameters` object, such as `toString` or `hasOwnProperty`.

```js
// v4
fastify.get('/route/:name', (req, reply) => {
  console.log(req.params.hasOwnProperty('name')); // true
  return { hello: req.params.name };
});
```

```js
// v5
fastify.get('/route/:name', (req, reply) => {
  console.log(Object.hasOwn(req.params, 'name')); // true
  return { hello: req.params.name };
});
```

This increases the security of the application by hardening against prototype
pollution attacks.

### Type Providers now differentiate between validator and serializer schemas

In v4, the type providers had the same types for both validation and serialization.
In v5, the type providers have been split into two separate types: `ValidatorSchema`
and `SerializerSchema`.

[`@fastify/type-provider-json-schema-to-ts`](https://github.com/fastify/fastify-type-provider-json-schema-to-ts)
and
[`@fastify/type-provider-typebox`](https://github.com/fastify/fastify-type-provider-typebox)
have already been updated: upgrade to the latest version to get the new types.
If you are using a custom type provider, you will need to modify it like
the following:

```
--- a/index.ts
+++ b/index.ts
@@ -11,7 +11,8 @@ import {
 import { FromSchema, FromSchemaDefaultOptions, FromSchemaOptions, JSONSchema } from 'json-schema-to-ts'

 export interface JsonSchemaToTsProvider<
   Options extends FromSchemaOptions = FromSchemaDefaultOptions
 > extends FastifyTypeProvider {
-  output: this['input'] extends JSONSchema ? FromSchema<this['input'], Options> : unknown;
+  validator: this['schema'] extends JSONSchema ? FromSchema<this['schema'], Options> : unknown;
+  serializer: this['schema'] extends JSONSchema ? FromSchema<this['schema'], Options> : unknown;
 }
 ```

### Changes to the .listen() method

The variadic argument signature of the `.listen()` method has been removed.
This means that you can no longer call `.listen()` with a variable number of arguments.

```js
// v4
fastify.listen(8000)
```

Will become:

```js
// v5
fastify.listen({ port: 8000 })
```

This was already deprecated in v4 as `FSTDEP011`, so you should have already updated
your code to use the new signature.

### Direct return of trailers has been removed

In v4, you could directly return trailers from a handler.
This is no longer possible in v5.

```js
// v4
fastify.get('/route', (req, reply) => {
  reply.trailer('ETag', function (reply, payload) {
    return 'custom-etag'
  })
  reply.send('')
});
```

```js
// v5
fastify.get('/route', (req, reply) => {
  reply.trailer('ETag', async function (reply, payload) {
    return 'custom-etag'
  })
  reply.send('')
});
```

A callback could also be used.
This was already deprecated in v4 as `FSTDEP013`,
so you should have already updated your code to use the new signature.

### Streamlined access to route definition

All deprecated properties relating to accessing the route definition have been removed
and are now accessed via `request.routeOptions`.

| Code | Description | How to solve | Discussion |
| ---- | ----------- | ------------ | ---------- |
| FSTDEP012 | You are trying to access the deprecated `request.context` property. | Use `request.routeOptions.config` or `request.routeOptions.schema`. | [#4216](https://github.com/fastify/fastify/pull/4216) [#5084](https://github.com/fastify/fastify/pull/5084) |
| FSTDEP015 | You are accessing the deprecated `request.routeSchema` property. | Use `request.routeOptions.schema`. | [#4470](https://github.com/fastify/fastify/pull/4470) |
| FSTDEP016 | You are accessing the deprecated `request.routeConfig` property. | Use `request.routeOptions.config`. | [#4470](https://github.com/fastify/fastify/pull/4470) |
| FSTDEP017 | You are accessing the deprecated `request.routerPath` property. | Use `request.routeOptions.url`. | [#4470](https://github.com/fastify/fastify/pull/4470) |
| FSTDEP018 | You are accessing the deprecated `request.routerMethod` property. | Use `request.routeOptions.method`. | [#4470](https://github.com/fastify/fastify/pull/4470) |
| FSTDEP019 | You are accessing the deprecated `reply.context` property. | Use `reply.routeOptions.config` or `reply.routeOptions.schema`. | [#5032](https://github.com/fastify/fastify/pull/5032) [#5084](https://github.com/fastify/fastify/pull/5084) |

See [#5616](https://github.com/fastify/fastify/pull/5616) for more information.

### `reply.redirect()` has a new signature

The `reply.redirect()` method has a new signature:
`reply.redirect(url: string, code?: number)`.

```js
// v4
reply.redirect(301, '/new-route')
```

Change it to:

```js
// v5
reply.redirect('/new-route', 301)
```

This was already deprecated in v4 as `FSTDEP021`, so you should have already
updated your code to use the new signature.


### Modifying `reply.sent` is now forbidden

In v4, you could modify the `reply.sent` property to prevent the response from
being sent.
This is no longer possible in v5, use `reply.hijack()` instead.

```js
// v4
fastify.get('/route', (req, reply) => {
  reply.sent = true;
  reply.raw.end('hello');
});
```

Change it to:

```js
// v5
fastify.get('/route', (req, reply) => {
  reply.hijack();
  reply.raw.end('hello');
});
```

This was already deprecated in v4 as `FSTDEP010`, so you should have already
updated your code to use the new signature.

### Constraints for route versioning signature changes

We changed the signature for route versioning constraints.
The `version` and `versioning` options have been removed and you should
use the `constraints` option instead.

| Code | Description | How to solve | Discussion |
| ---- | ----------- | ------------ | ---------- |
| FSTDEP008 | You are using route constraints via the route `{version: "..."}` option.  |  Use `{constraints: {version: "..."}}` option.  | [#2682](https://github.com/fastify/fastify/pull/2682) |
| FSTDEP009 | You are using a custom route versioning strategy via the server `{versioning: "..."}` option. |  Use `{constraints: {version: "..."}}` option.  | [#2682](https://github.com/fastify/fastify/pull/2682) |

### `HEAD` routes requires to register before `GET` when `exposeHeadRoutes: true`

We have a more strict requirement for custom `HEAD` route when
`exposeHeadRoutes: true`.

When you provides a custom `HEAD` route, you must either explicitly
set `exposeHeadRoutes` to `false`

```js
// v4
fastify.get('/route', {

}, (req, reply) => {
  reply.send({ hello: 'world' });
});

fastify.head('/route', (req, reply) => {
  // ...
});
```

```js
// v5
fastify.get('/route', {
  exposeHeadRoutes: false
}, (req, reply) => {
  reply.send({ hello: 'world' });
});

fastify.head('/route', (req, reply) => {
  // ...
});
```

or place the `HEAD` route before `GET`.

```js
// v5
fastify.head('/route', (req, reply) => {
  // ...
});

fastify.get('/route', {

}, (req, reply) => {
  reply.send({ hello: 'world' });
});
```

This was changed in [#2700](https://github.com/fastify/fastify/pull/2700),
and the old behavior was deprecated in v4 as `FSTDEP007`.

### Removed `request.connection`

The `request.connection` property has been removed in v5.
You should use `request.socket` instead.

```js
// v4
fastify.get('/route', (req, reply) => {
  console.log(req.connection.remoteAddress);
  return { hello: 'world' };
});
```

```js
// v5
fastify.get('/route', (req, reply) => {
  console.log(req.socket.remoteAddress);
  return { hello: 'world' };
});
```

This was already deprecated in v4 as `FSTDEP05`, so you should
have already updated your code to use the new signature.

### `reply.getResponseTime()` has been removed, use `reply.elapsedTime` instead

The `reply.getResponseTime()` method has been removed in v5.
You should use `reply.elapsedTime` instead.

```js
// v4
fastify.get('/route', (req, reply) => {
  console.log(reply.getResponseTime());
  return { hello: 'world' };
});
```

```js
// v5
fastify.get('/route', (req, reply) => {
  console.log(reply.elapsedTime);
  return { hello: 'world' };
});
```

This was already deprecated in v4 as `FSTDEP20`, so you should have already
updated your code to use the new signature.

### `fastify.hasRoute()` now matches the behavior of `find-my-way`

The `fastify.hasRoute()` method now matches the behavior of `find-my-way`
and requires the route definition to be passed as it is defined in the route.

```js
// v4
fastify.get('/example/:file(^\\d+).png', function (request, reply) { })

console.log(fastify.hasRoute({
  method: 'GET',
  url: '/example/12345.png'
)); // true
```

```js
// v5

fastify.get('/example/:file(^\\d+).png', function (request, reply) { })

console.log(fastify.hasRoute({
  method: 'GET',
  url: '/example/:file(^\\d+).png'
)); // true
```

### Removal of some non-standard HTTP methods

We have removed the following HTTP methods from Fastify:
- `PROPFIND`
- `PROPPATCH`
- `MKCOL`
- `COPY`
- `MOVE`
- `LOCK`
- `UNLOCK`
- `TRACE`
- `SEARCH`

It's now possible to add them back using the `addHttpMethod` method.

```js
const fastify = Fastify()

// add a new http method on top of the default ones:
fastify.addHttpMethod('REBIND')

// add a new HTTP method that accepts a body:
fastify.addHttpMethod('REBIND', { hasBody: true })

// reads the HTTP methods list:
fastify.supportedMethods // returns a string array
```

See [#5567](https://github.com/fastify/fastify/pull/5567) for more
information.

### Removed support from reference types in decorators

Decorating Request/Reply with a reference type (`Array`, `Object`)
is now prohibited as this reference is shared amongst all requests.

```js
// v4
fastify.decorateRequest('myObject', { hello: 'world' });
```

```js
// v5
fastify.decorateRequest('myObject');
fastify.addHook('onRequest', async (req, reply) => {
  req.myObject = { hello: 'world' };
});
```

or turn it into a function

```js
// v5
fastify.decorateRequest('myObject', () => ({ hello: 'world' }));
```

or as a getter

```js
// v5
fastify.decorateRequest('myObject', {
  getter () {
    return { hello: 'world' }
  }
});
```

See [#5462](https://github.com/fastify/fastify/pull/5462) for more information.

### Remove support for DELETE with a `Content-Type: application/json` header and an empty body

In v4, Fastify allowed `DELETE` requests with a `Content-Type: application/json`
header and an empty body was accepted.
This is no longer allowed in v5.

See [#5419](https://github.com/fastify/fastify/pull/5419) for more information.

### Plugins cannot mix callback/promise API anymore

In v4, plugins could mix the callback and promise API, leading to unexpected behavior.
This is no longer allowed in v5.

```js
// v4
fastify.register(async function (instance, opts, done) {
  done();
});
```

```js
// v5
fastify.register(async function (instance, opts) {
  return;
});
```

or

```js
// v5
fastify.register(function (instance, opts, done) {
  done();
});
```

### Requests now have `host`, `hostname`, and `port`, and `hostname` no longer includes the port number

In Fastify v4, `req.hostname` would include both the hostname and the
server’s port, so locally it might have the value `localhost:1234`.
With v5, we aligned to the Node.js URL object and now include `host`, `hostname`,
and `port` properties. `req.host` has the same value as `req.hostname` did in v4,
while `req.hostname` includes the hostname _without_ a port if a port is present,
and `req.port` contains just the port number.
See [#4766](https://github.com/fastify/fastify/pull/4766)
and [#4682](https://github.com/fastify/fastify/issues/4682) for more information.

### Removes `getDefaultRoute` and `setDefaultRoute` methods

The `getDefaultRoute` and `setDefaultRoute` methods have been removed in v5.

See [#4485](https://github.com/fastify/fastify/pull/4485)
and [#4480](https://github.com/fastify/fastify/pull/4480)
for more information.
This was already deprecated in v4 as `FSTDEP014`,
so you should have already updated your code.

### `time` and `date-time` formats enforce timezone

The updated AJV compiler updates `ajv-formats` which now
enforce the use of timezone in `time` and `date-time` format.
A workaround is to use `iso-time` and `iso-date-time` formats
which support an optional timezone for backwards compatibility.
See the
[full discussion](https://github.com/fastify/fluent-json-schema/issues/267).

## New Features

### Diagnostic Channel support

Fastify v5 now supports the [Diagnostics Channel](https://nodejs.org/api/diagnostics_channel.html)
API natively
and provides a way to trace the lifecycle of a request.

```js
'use strict'

const diagnostics = require('node:diagnostics_channel')
const Fastify = require('fastify')

diagnostics.subscribe('tracing:fastify.request.handler:start', (msg) => {
  console.log(msg.route.url) // '/:id'
  console.log(msg.route.method) // 'GET'
})

diagnostics.subscribe('tracing:fastify.request.handler:end', (msg) => {
  // msg is the same as the one emitted by the 'tracing:fastify.request.handler:start' channel
  console.log(msg)
})

diagnostics.subscribe('tracing:fastify.request.handler:error', (msg) => {
  // in case of error
})

const fastify = Fastify()
fastify.route({
  method: 'GET',
  url: '/:id',
  handler: function (req, reply) {
    return { hello: 'world' }
  }
})

fastify.listen({ port: 0 }, async function () {
  const result = await fetch(fastify.listeningOrigin + '/7')

  t.assert.ok(result.ok)
  t.assert.strictEqual(response.status, 200)
  t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
})
```

See the [documentation](https://github.com/fastify/fastify/blob/main/docs/Reference/Hooks.md#diagnostics-channel-hooks)
and [#5252](https://github.com/fastify/fastify/pull/5252) for additional details.

## Contributors

The complete list of contributors, across all of the core
Fastify packages, is provided below. Please consider
contributing to those that are capable of accepting sponsorships.

| Contributor | Sponsor Link | Packages |
| --- | --- | --- |
| 10xLaCroixDrinker | [❤️ sponsor](https://github.com/sponsors/10xLaCroixDrinker) | fastify-cli |
| Bram-dc |  | fastify; fastify-swagger |
| BrianValente |  | fastify |
| BryanAbate |  | fastify-cli |
| Cadienvan | [❤️ sponsor](https://github.com/sponsors/Cadienvan) | fastify |
| Cangit |  | fastify |
| Cyberlane |  | fastify-elasticsearch |
| Eomm | [❤️ sponsor](https://github.com/sponsors/Eomm) | ajv-compiler; fastify; fastify-awilix; fastify-diagnostics-channel; fastify-elasticsearch; fastify-hotwire; fastify-mongodb; fastify-nextjs; fastify-swagger-ui; under-pressure |
| EstebanDalelR | [❤️ sponsor](https://github.com/sponsors/EstebanDalelR) | fastify-cli |
| Fdawgs | [❤️ sponsor](https://github.com/sponsors/Fdawgs) | aws-lambda-fastify; csrf-protection; env-schema; fastify; fastify-accepts; fastify-accepts-serializer; fastify-auth; fastify-awilix; fastify-basic-auth; fastify-bearer-auth; fastify-caching; fastify-circuit-breaker; fastify-cli; fastify-cookie; fastify-cors; fastify-diagnostics-channel; fastify-elasticsearch; fastify-env; fastify-error; fastify-etag; fastify-express; fastify-flash; fastify-formbody; fastify-funky; fastify-helmet; fastify-hotwire; fastify-http-proxy; fastify-jwt; fastify-kafka; fastify-leveldb; fastify-mongodb; fastify-multipart; fastify-mysql; fastify-nextjs; fastify-oauth2; fastify-passport; fastify-plugin; fastify-postgres; fastify-rate-limit; fastify-redis; fastify-reply-from; fastify-request-context; fastify-response-validation; fastify-routes; fastify-routes-stats; fastify-schedule; fastify-secure-session; fastify-sensible; fastify-swagger-ui; fastify-url-data; fastify-websocket; fastify-zipkin; fluent-json-schema; forwarded; middie; point-of-view; process-warning; proxy-addr; safe-regex2; secure-json-parse; under-pressure |
| Gehbt |  | fastify-secure-session |
| Gesma94 |  | fastify-routes-stats |
| H4ad | [❤️ sponsor](https://github.com/sponsors/H4ad) | aws-lambda-fastify |
| JohanManders |  | fastify-secure-session |
| LiviaMedeiros |  | fastify |
| Momy93 |  | fastify-secure-session |
| MunifTanjim |  | fastify-swagger-ui |
| Nanosync |  | fastify-secure-session |
| RafaelGSS | [❤️ sponsor](https://github.com/sponsors/RafaelGSS) | fastify; under-pressure |
| Rantoledo |  | fastify |
| SMNBLMRR |  | fastify |
| SimoneDevkt |  | fastify-cli |
| Tony133 |  | fastify |
| Uzlopak | [❤️ sponsor](https://github.com/sponsors/Uzlopak) | fastify; fastify-autoload; fastify-diagnostics-channel; fastify-hotwire; fastify-nextjs; fastify-passport; fastify-plugin; fastify-rate-limit; fastify-routes; fastify-static; fastify-swagger-ui; point-of-view; under-pressure |
| Zamiell |  | fastify-secure-session |
| aadito123 |  | fastify |
| aaroncadillac | [❤️ sponsor](https://github.com/sponsors/aaroncadillac) | fastify |
| aarontravass |  | fastify |
| acro5piano | [❤️ sponsor](https://github.com/sponsors/acro5piano) | fastify-secure-session |
| adamward459 |  | fastify-cli |
| adrai | [❤️ sponsor](https://github.com/sponsors/adrai) | aws-lambda-fastify |
| alenap93 |  | fastify |
| alexandrucancescu |  | fastify-nextjs |
| anthonyringoet |  | aws-lambda-fastify |
| arshcodemod |  | fastify |
| autopulated |  | point-of-view |
| barbieri |  | fastify |
| beyazit |  | fastify |
| big-kahuna-burger | [❤️ sponsor](https://github.com/sponsors/big-kahuna-burger) | fastify-cli; fastify-compress; fastify-helmet |
| bilalshareef |  | fastify-routes |
| blue86321 |  | fastify-swagger-ui |
| bodinsamuel |  | fastify-rate-limit |
| busybox11 | [❤️ sponsor](https://github.com/sponsors/busybox11) | fastify |
| climba03003 |  | csrf-protection; fastify; fastify-accepts; fastify-accepts-serializer; fastify-auth; fastify-basic-auth; fastify-bearer-auth; fastify-caching; fastify-circuit-breaker; fastify-compress; fastify-cors; fastify-env; fastify-etag; fastify-flash; fastify-formbody; fastify-http-proxy; fastify-mongodb; fastify-swagger-ui; fastify-url-data; fastify-websocket; middie |
| dancastillo | [❤️ sponsor](https://github.com/sponsors/dancastillo) | fastify; fastify-basic-auth; fastify-caching; fastify-circuit-breaker; fastify-cors; fastify-helmet; fastify-passport; fastify-response-validation; fastify-routes; fastify-schedule |
| danny-andrews |  | fastify-kafka |
| davidcralph | [❤️ sponsor](https://github.com/sponsors/davidcralph) | csrf-protection |
| davideroffo |  | under-pressure |
| dhensby |  | fastify-cli |
| dmkng |  | fastify |
| domdomegg |  | fastify |
| faustman |  | fastify-cli |
| floridemai |  | fluent-json-schema |
| fox1t |  | fastify-autoload |
| giuliowaitforitdavide |  | fastify |
| gunters63 |  | fastify-reply-from |
| gurgunday |  | fastify; fastify-circuit-breaker; fastify-cookie; fastify-multipart; fastify-mysql; fastify-rate-limit; fastify-response-validation; fastify-sensible; fastify-swagger-ui; fluent-json-schema; middie; proxy-addr; safe-regex2; secure-json-parse |
| ildella |  | under-pressure |
| james-kaguru |  | fastify |
| jcbain |  | fastify-http-proxy |
| jdhollander |  | fastify-swagger-ui |
| jean-michelet |  | fastify; fastify-autoload; fastify-cli; fastify-mysql; fastify-sensible |
| johaven |  | fastify-multipart |
| jordanebelanger |  | fastify-plugin |
| jscheffner |  | fastify |
| jsprw |  | fastify-secure-session |
| jsumners | [❤️ sponsor](https://github.com/sponsors/jsumners) | ajv-compiler; avvio; csrf-protection; env-schema; fast-json-stringify; fastify; fastify-accepts; fastify-accepts-serializer; fastify-auth; fastify-autoload; fastify-awilix; fastify-basic-auth; fastify-bearer-auth; fastify-caching; fastify-circuit-breaker; fastify-compress; fastify-cookie; fastify-cors; fastify-env; fastify-error; fastify-etag; fastify-express; fastify-flash; fastify-formbody; fastify-funky; fastify-helmet; fastify-http-proxy; fastify-jwt; fastify-kafka; fastify-leveldb; fastify-multipart; fastify-mysql; fastify-oauth2; fastify-plugin; fastify-postgres; fastify-redis; fastify-reply-from; fastify-request-context; fastify-response-validation; fastify-routes; fastify-routes-stats; fastify-schedule; fastify-secure-session; fastify-sensible; fastify-static; fastify-swagger; fastify-swagger-ui; fastify-url-data; fastify-websocket; fastify-zipkin; fluent-json-schema; forwarded; light-my-request; middie; process-warning; proxy-addr; safe-regex2; secure-json-parse; under-pressure |
| karankraina |  | under-pressure |
| kerolloz | [❤️ sponsor](https://github.com/sponsors/kerolloz) | fastify-jwt |
| kibertoad |  | fastify-rate-limit |
| kukidon-dev |  | fastify-passport |
| kunal097 |  | fastify |
| lamweili |  | fastify-sensible |
| lemonclown |  | fastify-mongodb |
| liuhanqu |  | fastify |
| matthyk |  | fastify-plugin |
| mch-dsk |  | fastify |
| mcollina | [❤️ sponsor](https://github.com/sponsors/mcollina) | ajv-compiler; avvio; csrf-protection; fastify; fastify-accepts; fastify-accepts-serializer; fastify-auth; fastify-autoload; fastify-awilix; fastify-basic-auth; fastify-bearer-auth; fastify-caching; fastify-circuit-breaker; fastify-cli; fastify-compress; fastify-cookie; fastify-cors; fastify-diagnostics-channel; fastify-elasticsearch; fastify-env; fastify-etag; fastify-express; fastify-flash; fastify-formbody; fastify-funky; fastify-helmet; fastify-http-proxy; fastify-jwt; fastify-kafka; fastify-leveldb; fastify-multipart; fastify-mysql; fastify-oauth2; fastify-passport; fastify-plugin; fastify-postgres; fastify-rate-limit; fastify-redis; fastify-reply-from; fastify-request-context; fastify-response-validation; fastify-routes; fastify-routes-stats; fastify-schedule; fastify-secure-session; fastify-static; fastify-swagger; fastify-swagger-ui; fastify-url-data; fastify-websocket; fastify-zipkin; fluent-json-schema; light-my-request; middie; point-of-view; proxy-addr; secure-json-parse; under-pressure |
| melroy89 | [❤️ sponsor](https://github.com/sponsors/melroy89) | under-pressure |
| metcoder95 | [❤️ sponsor](https://github.com/sponsors/metcoder95) | fastify-elasticsearch |
| mhamann |  | fastify-cli |
| mihaur |  | fastify-elasticsearch |
| mikesamm |  | fastify |
| mikhael-abdallah |  | secure-json-parse |
| miquelfire | [❤️ sponsor](https://github.com/sponsors/miquelfire) | fastify-routes |
| miraries |  | fastify-swagger-ui |
| mohab-sameh |  | fastify |
| monish001 |  | fastify |
| moradebianchetti81 |  | fastify |
| mouhannad-sh |  | aws-lambda-fastify |
| multivoltage |  | point-of-view |
| muya | [❤️ sponsor](https://github.com/sponsors/muya) | under-pressure |
| mweberxyz |  | point-of-view |
| nflaig |  | fastify |
| nickfla1 |  | avvio |
| o-az |  | process-warning |
| ojeytonwilliams |  | csrf-protection |
| onosendi |  | fastify-formbody |
| philippviereck |  | fastify |
| pip77 |  | fastify-mongodb |
| puskin94 |  | fastify |
| remidewitte |  | fastify |
| rozzilla |  | fastify |
| samialdury |  | fastify-cli |
| sknetl |  | fastify-cors |
| sourcecodeit |  | fastify |
| synapse |  | env-schema |
| timursaurus |  | secure-json-parse |
| tlhunter |  | fastify |
| tlund101 |  | fastify-rate-limit |
| ttshivers |  | fastify-http-proxy |
| voxpelli | [❤️ sponsor](https://github.com/sponsors/voxpelli) | fastify |
| weixinwu |  | fastify-cli |
| zetaraku |  | fastify-cli |
