<h1 align="center">Fastify</h1>

## Factory
<a id="factory"></a>

The Fastify module exports a factory function that is used to create new
<code><b>Fastify server</b></code> instances. This factory function accepts an
options object which is used to customize the resulting instance. This document
describes the properties available in that options object.

- [Factory](#factory)
  - [`http`](#http)
  - [`http2`](#http2)
  - [`https`](#https)
  - [`connectionTimeout`](#connectiontimeout)
  - [`keepAliveTimeout`](#keepalivetimeout)
  - [`forceCloseConnections`](#forcecloseconnections)
  - [`maxRequestsPerSocket`](#maxrequestspersocket)
  - [`requestTimeout`](#requesttimeout)
  - [`bodyLimit`](#bodylimit)
  - [`onProtoPoisoning`](#onprotopoisoning)
  - [`onConstructorPoisoning`](#onconstructorpoisoning)
  - [`logger`](#logger)
  - [`loggerInstance`](#loggerinstance)
  - [`disableRequestLogging`](#disablerequestlogging)
  - [`serverFactory`](#serverfactory)
  - [`requestIdHeader`](#requestidheader)
  - [`requestIdLogLabel`](#requestidloglabel)
  - [`genReqId`](#genreqid)
  - [`trustProxy`](#trustproxy)
  - [`pluginTimeout`](#plugintimeout)
  - [`exposeHeadRoutes`](#exposeheadroutes)
  - [`return503OnClosing`](#return503onclosing)
  - [`ajv`](#ajv)
  - [`serializerOpts`](#serializeropts)
  - [`http2SessionTimeout`](#http2sessiontimeout)
  - [`frameworkErrors`](#frameworkerrors)
  - [`clientErrorHandler`](#clienterrorhandler)
  - [`rewriteUrl`](#rewriteurl)
  - [`allowErrorHandlerOverride`](#allowerrorhandleroverride)
  - [RouterOptions](#routeroptions)
    - [`allowUnsafeRegex`](#allowunsaferegex)
    - [`buildPrettyMeta`](#buildprettymeta)
    - [`caseSensitive`](#casesensitive)
    - [`constraints`](#constraints)
    - [`defaultRoute`](#defaultroute)
    - [`ignoreDuplicateSlashes`](#ignoreduplicateslashes)
    - [`ignoreTrailingSlash`](#ignoretrailingslash)
    - [`maxParamLength`](#maxparamlength)
    - [`onBadUrl`](#onbadurl)
    - [`querystringParser`](#querystringparser)
    - [`useSemicolonDelimiter`](#usesemicolondelimiter)
- [Instance](#instance)
  - [Server Methods](#server-methods)
    - [server](#server)
    - [after](#after)
    - [ready](#ready)
    - [listen](#listen)
    - [addresses](#addresses)
    - [routing](#routing)
    - [route](#route)
    - [hasRoute](#hasroute)
    - [findRoute](#findroute)
    - [close](#close)
    - [decorate\*](#decorate)
    - [register](#register)
    - [addHook](#addhook)
    - [prefix](#prefix)
    - [pluginName](#pluginname)
    - [hasPlugin](#hasplugin)
    - [listeningOrigin](#listeningorigin)
    - [log](#log)
    - [version](#version)
    - [inject](#inject)
    - [addHttpMethod](#addHttpMethod)
    - [addSchema](#addschema)
    - [getSchemas](#getschemas)
    - [getSchema](#getschema)
    - [setReplySerializer](#setreplyserializer)
    - [setValidatorCompiler](#setvalidatorcompiler)
    - [setSchemaErrorFormatter](#setschemaerrorformatter)
    - [setSerializerCompiler](#setserializercompiler)
    - [validatorCompiler](#validatorcompiler)
    - [serializerCompiler](#serializercompiler)
    - [schemaErrorFormatter](#schemaerrorformatter)
    - [schemaController](#schemacontroller)
    - [setNotFoundHandler](#setnotfoundhandler)
    - [setErrorHandler](#seterrorhandler)
    - [setChildLoggerFactory](#setchildloggerfactory)
    - [setGenReqId](#setgenreqid)
    - [addConstraintStrategy](#addconstraintstrategy)
    - [hasConstraintStrategy](#hasconstraintstrategy)
    - [printRoutes](#printroutes)
    - [printPlugins](#printplugins)
    - [addContentTypeParser](#addcontenttypeparser)
    - [hasContentTypeParser](#hascontenttypeparser)
    - [removeContentTypeParser](#removecontenttypeparser)
    - [removeAllContentTypeParsers](#removeallcontenttypeparsers)
    - [getDefaultJsonParser](#getdefaultjsonparser)
    - [defaultTextParser](#defaulttextparser)
    - [errorHandler](#errorhandler)
    - [childLoggerFactory](#childloggerfactory)
    - [Symbol.asyncDispose](#symbolasyncdispose)
    - [initialConfig](#initialconfig)

### `http`
<a id="factory-http"></a>

+ Default: `null`

An object used to configure the server's listening socket. The options
are the same as the Node.js core [`createServer`
method](https://nodejs.org/docs/latest-v20.x/api/http.html#httpcreateserveroptions-requestlistener).

This option is ignored if options [`http2`](#factory-http2) or
[`https`](#factory-https) are set.

### `http2`
<a id="factory-http2"></a>

+ Default: `false`

If `true` Node.js core's
[HTTP/2](https://nodejs.org/dist/latest-v20.x/docs/api/http2.html) module is
used for binding the socket.

### `https`
<a id="factory-https"></a>

+ Default: `null`

An object used to configure the server's listening socket for TLS. The options
are the same as the Node.js core [`createServer`
method](https://nodejs.org/dist/latest-v20.x/docs/api/https.html#https_https_createserver_options_requestlistener).
When this property is `null`, the socket will not be configured for TLS.

This option also applies when the [`http2`](#factory-http2) option is set.

### `connectionTimeout`
<a id="factory-connection-timeout"></a>

+ Default: `0` (no timeout)

Defines the server timeout in milliseconds. See documentation for
[`server.timeout`
property](https://nodejs.org/api/http.html#servertimeout) to understand
the effect of this option.

When `serverFactory` option is specified this option is ignored.

### `keepAliveTimeout`
<a id="factory-keep-alive-timeout"></a>

+ Default: `72000` (72 seconds)

Defines the server keep-alive timeout in milliseconds. See documentation for
[`server.keepAliveTimeout`
property](https://nodejs.org/api/http.html#serverkeepalivetimeout) to
understand the effect of this option. This option only applies when HTTP/1 is in
use.

When `serverFactory` option is specified this option is ignored.

### `forceCloseConnections`
<a id="forcecloseconnections"></a>

+ Default: `"idle"` if the HTTP server allows it, `false` otherwise

When set to `true`, upon [`close`](#close) the server will iterate the current
persistent connections and [destroy their
sockets](https://nodejs.org/dist/latest-v16.x/docs/api/net.html#socketdestroyerror).

When used with HTTP/2 server, it will also close all active HTTP/2 sessions.

> ℹ️ Note:
> Since Node.js v24 active sessions are closed by default


> ⚠ Warning:
> Connections are not inspected to determine if requests have
> been completed.

Fastify will prefer the HTTP server's
[`closeAllConnections`](https://nodejs.org/dist/latest-v18.x/docs/api/http.html#servercloseallconnections)
method if supported, otherwise, it will use internal connection tracking.

When set to `"idle"`, upon [`close`](#close) the server will iterate the current
persistent connections which are not sending a request or waiting for a response
and destroy their sockets. The value is only supported if the HTTP server
supports the
[`closeIdleConnections`](https://nodejs.org/dist/latest-v18.x/docs/api/http.html#servercloseidleconnections)
method, otherwise attempting to set it will throw an exception.

### `maxRequestsPerSocket`
<a id="factory-max-requests-per-socket"></a>

+ Default: `0` (no limit)

Defines the maximum number of requests a socket can handle before closing keep
alive connection. See [`server.maxRequestsPerSocket`
property](https://nodejs.org/dist/latest/docs/api/http.html#servermaxrequestspersocket)
to understand the effect of this option. This option only applies when HTTP/1.1
is in use. Also, when `serverFactory` option is specified, this option is
ignored.

> ℹ️ Note:
>  At the time of writing, only node >= v16.10.0 supports this option.

### `requestTimeout`
<a id="factory-request-timeout"></a>

+ Default: `0` (no limit)

Defines the maximum number of milliseconds for receiving the entire request from
the client. See [`server.requestTimeout`
property](https://nodejs.org/dist/latest/docs/api/http.html#servertimeout)
to understand the effect of this option.

When `serverFactory` option is specified, this option is ignored.
It must be set to a non-zero value (e.g. 120 seconds) to protect against potential
Denial-of-Service attacks in case the server is deployed without a reverse proxy
in front.

> ℹ️ Note:
>  At the time of writing, only node >= v14.11.0 supports this option

### `handlerTimeout`
<a id="factory-handler-timeout"></a>

+ Default: `0` (no timeout)

Defines the maximum number of milliseconds allowed for processing a request
through the entire route lifecycle (from routing through onRequest, parsing,
validation, handler execution, and serialization). If the response is not sent
within this time, a `503 Service Unavailable` error is returned and
`request.signal` is aborted.

Unlike `connectionTimeout` and `requestTimeout` (which operate at the socket
level), `handlerTimeout` is an application-level timeout that works correctly
with HTTP keep-alive connections. It can be overridden per-route via
[route options](./Routes.md#routes-options). When set at both levels, the
route-level value takes precedence. Routes without an explicit `handlerTimeout`
inherit the server default. Once a server-level timeout is set, individual
routes cannot opt out of it — they can only override it with a different
positive integer.

The timeout is **cooperative**: when it fires, Fastify sends the 503 error
response, but the handler's async work continues to run. Use
[`request.signal`](./Request.md) to detect cancellation and stop ongoing work
(database queries, HTTP requests, etc.). APIs that accept a `signal` option
(`fetch()`, database drivers, `stream.pipeline()`) will cancel automatically.

The timeout error (`FST_ERR_HANDLER_TIMEOUT`) is sent through the route's
[error handler](./Routes.md#routes-options), which can be customized per-route
to change the status code or response body.

When `reply.hijack()` is called, the timeout timer is cleared — the handler
takes full responsibility for the response lifecycle.

> ℹ️ Note:
> `handlerTimeout` does not apply to 404 handlers or custom not-found handlers
> set via `setNotFoundHandler()`, as they bypass the route handler lifecycle.

```js
const fastify = require('fastify')({
  handlerTimeout: 10000 // 10s default for all routes
})

// Override per-route
fastify.get('/slow-report', { handlerTimeout: 120000 }, async (request) => {
  // Use request.signal for cooperative cancellation
  const data = await db.query(longQuery, { signal: request.signal })
  return data
})

// Customize the timeout response
fastify.get('/custom-timeout', {
  handlerTimeout: 5000,
  errorHandler: (error, request, reply) => {
    if (error.code === 'FST_ERR_HANDLER_TIMEOUT') {
      reply.code(504).send({ error: 'Gateway Timeout' })
    } else {
      reply.send(error)
    }
  }
}, async (request) => {
  const result = await externalService.call({ signal: request.signal })
  return result
})
```

### `bodyLimit`
<a id="factory-body-limit"></a>

+ Default: `1048576` (1MiB)

Defines the maximum payload, in bytes, the server is allowed to accept.
The default body reader sends [`FST_ERR_CTP_BODY_TOO_LARGE`](./Errors.md#fst_err_ctp_body_too_large)
reply, if the size of the body exceeds this limit.
If [`preParsing` hook](./Hooks.md#preparsing) is provided, this limit is applied
to the size of the stream the hook returns (i.e. the size of "decoded" body).

### `onProtoPoisoning`
<a id="factory-on-proto-poisoning"></a>

+ Default: `'error'`

Defines what action the framework must take when parsing a JSON object with
`__proto__`. This functionality is provided by
[secure-json-parse](https://github.com/fastify/secure-json-parse). See
[Prototype Poisoning](../Guides/Prototype-Poisoning.md) for more details about
prototype poisoning attacks.

Possible values are `'error'`, `'remove'`, or `'ignore'`.

### `onConstructorPoisoning`
<a id="factory-on-constructor-poisoning"></a>

+ Default: `'error'`

Defines what action the framework must take when parsing a JSON object with
`constructor`. This functionality is provided by
[secure-json-parse](https://github.com/fastify/secure-json-parse). See
[Prototype Poisoning](../Guides/Prototype-Poisoning.md) for more details about
prototype poisoning attacks.

Possible values are `'error'`, `'remove'`, or `'ignore'`.

### `logger`
<a id="factory-logger"></a>

Fastify includes built-in logging via the [Pino](https://getpino.io/) logger.
This property is used to configure the internal logger instance.

The possible values this property may have are:

+ Default: `false`. The logger is disabled. All logging methods will point to a
null logger [abstract-logging](https://www.npmjs.com/package/abstract-logging) instance.

+ `object`: a standard Pino [options
  object](https://github.com/pinojs/pino/blob/c77d8ec5ce/docs/API.md#constructor).
  This will be passed directly to the Pino constructor. If the following
  properties are not present on the object, they will be added accordingly:
    * `level`: the minimum logging level. If not set, it will be set to
      `'info'`.
    * `serializers`: a hash of serialization functions. By default, serializers
      are added for `req` (incoming request objects), `res` (outgoing response
      objects), and `err` (standard `Error` objects). When a log method receives
      an object with any of these properties then the respective serializer will
      be used for that property. For example:
        ```js
        fastify.get('/foo', function (req, res) {
          req.log.info({req}) // log the serialized request object
          res.send('foo')
        })
        ```
      Any user-supplied serializer will override the default serializer of the
      corresponding property.

### `loggerInstance`
<a id="factory-logger-instance"></a>

+ Default: `null`

A custom logger instance. The logger must be a Pino instance or conform to the
Pino interface by having the following methods: `info`, `error`, `debug`,
`fatal`, `warn`, `trace`, `child`. For example:
  ```js
  const pino = require('pino')();

  const customLogger = {
    info: function (o, ...n) {},
    warn: function (o, ...n) {},
    error: function (o, ...n) {},
    fatal: function (o, ...n) {},
    trace: function (o, ...n) {},
    debug: function (o, ...n) {},
    child: function() {
      const child = Object.create(this);
      child.pino = pino.child(...arguments);
      return child;
    },
  };

  const fastify = require('fastify')({ loggerInstance: customLogger });
  ```

### `disableRequestLogging`
<a id="factory-disable-request-logging"></a>

+ Default: `false`

When logging is enabled, Fastify will issue an `info` level log
message when a request is received and when the response for that request has
been sent. By setting this option to `true`, these log messages will be
disabled. This allows for more flexible request start and end logging by
attaching custom `onRequest` and `onResponse` hooks.

This option can also be a function that receives the Fastify request object
and returns a boolean. This allows for conditional request logging based on the
request properties (e.g., URL, headers, decorations).

```js
const fastify = require('fastify')({
  logger: true,
  disableRequestLogging: (request) => {
    // Disable logging for health check endpoints
    return request.url === '/health' || request.url === '/ready'
  }
})
```

The other log entries that will be disabled are:
- an error log written by the default `onResponse` hook on reply callback errors
- the error and info logs written by the `defaultErrorHandler`
on error management
- the info log written by the `fourOhFour` handler when a
non existent route is requested

Other log messages emitted by Fastify will stay enabled,
like deprecation warnings and messages
emitted when requests are received while the server is closing.

```js
// Examples of hooks to replicate the disabled functionality.
fastify.addHook('onRequest', (req, reply, done) => {
  req.log.info({ url: req.raw.url, id: req.id }, 'received request')
  done()
})

fastify.addHook('onResponse', (req, reply, done) => {
  req.log.info({ url: req.raw.originalUrl, statusCode: reply.raw.statusCode }, 'request completed')
  done()
})
```

### `serverFactory`
<a id="custom-http-server"></a>

You can pass a custom HTTP server to Fastify by using the `serverFactory`
option.

`serverFactory` is a function that takes a `handler` parameter, which takes the
`request` and `response` objects as parameters, and an options object, which is
the same you have passed to Fastify.

```js
const serverFactory = (handler, opts) => {
  const server = http.createServer((req, res) => {
    handler(req, res)
  })

  return server
}

const fastify = Fastify({ serverFactory })

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 })
```

Internally Fastify uses the API of Node core HTTP server, so if you are using a
custom server you must be sure to have the same API exposed. If not, you can
enhance the server instance inside the `serverFactory` function before the
`return` statement.


### `requestIdHeader`
<a id="factory-request-id-header"></a>

+ Default: `'request-id'`

The header name used to set the request-id. See [the
request-id](./Logging.md#logging-request-id) section.
Setting `requestIdHeader` to `true` will set the `requestIdHeader` to
`"request-id"`.
Setting `requestIdHeader` to a non-empty string will use
the specified string as the `requestIdHeader`.
By default `requestIdHeader` is set to `false` and will immediately use [genReqId](#genreqid).
Setting `requestIdHeader` to an empty String (`""`) will set the
requestIdHeader to `false`.

+ Default: `false`

```js
const fastify = require('fastify')({
  requestIdHeader: 'x-custom-id', // -> use 'X-Custom-Id' header if available
  //requestIdHeader: false, // -> always use genReqId
})
```

> ⚠ Warning:
> Enabling this allows any callers to set `reqId` to a
> value of their choosing.
> No validation is performed on `requestIdHeader`.

### `requestIdLogLabel`
<a id="factory-request-id-log-label"></a>

+ Default: `'reqId'`

Defines the label used for the request identifier when logging the request.

### `genReqId`
<a id="factory-gen-request-id"></a>

+ Default: `value of 'request-id' header if provided or monotonically increasing
  integers`

Function for generating the request-id. It will receive the _raw_ incoming
request as a parameter. This function is expected to be error-free.

Especially in distributed systems, you may want to override the default ID
generation behavior as shown below. For generating `UUID`s you may want to check
out [hyperid](https://github.com/mcollina/hyperid).

> ℹ️ Note:
> `genReqId` will be not called if the header set in
> <code>[requestIdHeader](#requestidheader)</code> is available (defaults to
> 'request-id').

```js
let i = 0
const fastify = require('fastify')({
  genReqId: function (req) { return i++ }
})
```

### `trustProxy`
<a id="factory-trust-proxy"></a>

+ Default: `false`
+ `true/false`: Trust all proxies (`true`) or do not trust any proxies
  (`false`).
+ `string`: Trust only given IP/CIDR (e.g. `'127.0.0.1'`). May be a list of
  comma separated values (e.g. `'127.0.0.1,192.168.1.1/24'`).
+ `Array<string>`: Trust only given IP/CIDR list (e.g. `['127.0.0.1']`).
+ `number`: Trust the nth hop from the front-facing proxy server as the client.
+ `Function`: Custom trust function that takes `address` as first argument
    ```js
    function myTrustFn(address, hop) {
      return address === '1.2.3.4' || hop === 1
    }
    ```

By enabling the `trustProxy` option, Fastify will know that it is sitting behind
a proxy and that the `X-Forwarded-*` header fields may be trusted, which
otherwise may be easily spoofed.

```js
const fastify = Fastify({ trustProxy: true })
```

For more examples, refer to the
[`@fastify/proxy-addr`](https://www.npmjs.com/package/@fastify/proxy-addr) package.

You may access the `ip`, `ips`, `host` and `protocol` values on the
[`request`](./Request.md) object.

```js
fastify.get('/', (request, reply) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.host)
  console.log(request.protocol)
})
```

> ℹ️ Note:
> If a request contains multiple `x-forwarded-host` or `x-forwarded-proto`
> headers, it is only the last one that is used to derive `request.hostname`
> and `request.protocol`.

### `pluginTimeout`
<a id="plugin-timeout"></a>

+ Default: `10000`

The maximum amount of time in *milliseconds* in which a plugin can load. If not,
[`ready`](#ready) will complete with an `Error` with code
`'ERR_AVVIO_PLUGIN_TIMEOUT'`. When set to `0`, disables this check. This
controls [avvio](https://www.npmjs.com/package/avvio) 's `timeout` parameter.

### `querystringParser`
<a id="factory-querystring-parser"></a>

The default query string parser that Fastify uses is a more performant fork
of Node.js's core `querystring` module called
[`fast-querystring`](https://github.com/anonrig/fast-querystring).

You can use this option to use a custom parser, such as
[`qs`](https://www.npmjs.com/package/qs).

If you only want the keys (and not the values) to be case insensitive we
recommend using a custom parser to convert only the keys to lowercase.

```js
const qs = require('qs')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => qs.parse(str)
  }
})
```

You can also use Fastify's default parser but change some handling behavior,
like the example below for case insensitive keys and values:

```js
const querystring = require('fast-querystring')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => querystring.parse(str.toLowerCase())
  }
})
```

### `exposeHeadRoutes`
<a id="exposeHeadRoutes"></a>

+ Default: `true`

Automatically creates a sibling `HEAD` route for each `GET` route defined. If
you want a custom `HEAD` handler without disabling this option, make sure to
define it before the `GET` route.

### `return503OnClosing`
<a id="factory-return-503-on-closing"></a>

+ Default: `true`

When `true`, any request arriving after [`close`](#close) has been called will
receive a `503 Service Unavailable` response with `Connection: close` header
(HTTP/1.1). This lets load balancers detect that the server is shutting down and
stop routing traffic to it.

When `false`, requests arriving during the closing phase are routed and
processed normally. They will still receive a `Connection: close` header so that
clients do not attempt to reuse the connection.

### `ajv`
<a id="factory-ajv"></a>

Configure the Ajv v8 instance used by Fastify without providing a custom one.
The default configuration is explained in the
[#schema-validator](./Validation-and-Serialization.md#schema-validator) section.

```js
const fastify = require('fastify')({
  ajv: {
    customOptions: {
      removeAdditional: 'all' // Refer to [ajv options](https://ajv.js.org/options.html#removeadditional)
    },
    plugins: [
      require('ajv-merge-patch'),
      [require('ajv-keywords'), 'instanceof']
      // Usage: [plugin, pluginOptions] - Plugin with options
      // Usage: plugin - Plugin without options
    ],
    onCreate: (ajv) => {
      // Modify the ajv instance as you need.
      ajv.addFormat('myFormat', (data) => typeof data === 'string')
    }
  }
})
```

### `serializerOpts`
<a id="serializer-opts"></a>

Customize the options of the default
[`fast-json-stringify`](https://github.com/fastify/fast-json-stringify#options)
instance that serializes the response's payload:

```js
const fastify = require('fastify')({
  serializerOpts: {
    rounding: 'ceil'
  }
})
```

### `http2SessionTimeout`
<a id="http2-session-timeout"></a>

+ Default: `72000`

Set a default
[timeout](https://nodejs.org/api/http2.html#http2sessionsettimeoutmsecs-callback)
to every incoming HTTP/2 session in milliseconds. The session will be closed on
the timeout.

This option is needed to offer a graceful "close" experience when using
HTTP/2. The low default has been chosen to mitigate denial of service attacks.
When the server is behind a load balancer or can scale automatically this value
can be increased to fit the use case. Node core defaults this to `0`.

### `frameworkErrors`
<a id="framework-errors"></a>

+ Default: `null`

Fastify provides default error handlers for the most common use cases. It is
possible to override one or more of those handlers with custom code using this
option.

> ℹ️ Note:
> Only `FST_ERR_BAD_URL` and `FST_ERR_ASYNC_CONSTRAINT` are implemented at present.

```js
const fastify = require('fastify')({
  frameworkErrors: function (error, req, res) {
    if (error instanceof FST_ERR_BAD_URL) {
      res.code(400)
      return res.send("Provided url is not valid")
    } else if(error instanceof FST_ERR_ASYNC_CONSTRAINT) {
      res.code(400)
      return res.send("Provided header is not valid")
    } else {
      res.send(err)
    }
  }
})
```

### `clientErrorHandler`
<a id="client-error-handler"></a>

Set a
[clientErrorHandler](https://nodejs.org/api/http.html#event-clienterror)
that listens to `error` events emitted by client connections and responds with a
`400`.

It is possible to override the default `clientErrorHandler` using this option.

+ Default:
```js
function defaultClientErrorHandler (err, socket) {
  if (err.code === 'ECONNRESET') {
    return
  }

  const body = JSON.stringify({
    error: http.STATUS_CODES['400'],
    message: 'Client Error',
    statusCode: 400
  })
  this.log.trace({ err }, 'client error')

  if (socket.writable) {
    socket.end([
      'HTTP/1.1 400 Bad Request',
      `Content-Length: ${body.length}`,
      `Content-Type: application/json\r\n\r\n${body}`
    ].join('\r\n'))
  }
}
```

> ℹ️ Note:
> `clientErrorHandler` operates with raw sockets. The handler is expected to
> return a properly formed HTTP response that includes a status line, HTTP headers
> and a message body. Before attempting to write the socket, the handler should
> check if the socket is still writable as it may have already been destroyed.

```js
const fastify = require('fastify')({
  clientErrorHandler: function (err, socket) {
    const body = JSON.stringify({
      error: {
        message: 'Client error',
        code: '400'
      }
    })

    // `this` is bound to fastify instance
    this.log.trace({ err }, 'client error')

    // the handler is responsible for generating a valid HTTP response
    socket.end([
      'HTTP/1.1 400 Bad Request',
      `Content-Length: ${body.length}`,
      `Content-Type: application/json\r\n\r\n${body}`
    ].join('\r\n'))
  }
})
```

### `rewriteUrl`
<a id="rewrite-url"></a>

Set a sync callback function that must return a string that allows rewriting
URLs. This is useful when you are behind a proxy that changes the URL.
Rewriting a URL will modify the `url` property of the `req` object.

Note that `rewriteUrl` is called _before_ routing, it is not encapsulated and it
is an instance-wide configuration.

```js
// @param {object} req The raw Node.js HTTP request, not the `FastifyRequest` object.
// @this Fastify The root Fastify instance (not an encapsulated instance).
// @returns {string} The path that the request should be mapped to.
function rewriteUrl (req) {
  if (req.url === '/hi') {
    this.log.debug({ originalUrl: req.url, url: '/hello' }, 'rewrite url');
    return '/hello'
  } else {
    return req.url;
  }
}
```

## RouterOptions
<a id="routeroptions"></a>

Fastify uses [`find-my-way`](https://github.com/delvedor/find-my-way) for its
HTTP router. The `routerOptions` parameter allows passing
[`find-my-way` options](https://github.com/delvedor/find-my-way?tab=readme-ov-file#findmywayoptions)
to customize the HTTP router within Fastify.

### `allowUnsafeRegex`
<a id="allow-unsafe-regex"></a>

+ Default `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which is,
disabled by default, so routes only allow safe regular expressions. To use
unsafe expressions, set `allowUnsafeRegex` to `true`.

```js
fastify.get('/user/:id(^([0-9]+){4}$)', (request, reply) => {
  // Throws an error without allowUnsafeRegex = true
})
```


### `buildPrettyMeta`
<a id="build-pretty-meta"></a>

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which
supports, `buildPrettyMeta` where you can assign a `buildPrettyMeta`
function to sanitize a route's store object to use with the `prettyPrint`
functions. This function should accept a single object and return an object.

```js
fastify.get('/user/:username', (request, reply) => {
  routerOptions: {
    buildPrettyMeta: route => {
      const cleanMeta = Object.assign({}, route.store)

      // remove private properties
      Object.keys(cleanMeta).forEach(k => {
        if (typeof k === 'symbol') delete cleanMeta[k]
      })

      return cleanMeta // this will show up in the pretty print output!
    })
  }
})
```

### `caseSensitive`
<a id="case-sensitive"></a>

+ Default: `true`

When `true` routes are registered as case-sensitive. That is, `/foo`
is not equal to `/Foo`.
When `false` then routes are case-insensitive.

Please note that setting this option to `false` goes against
[RFC3986](https://datatracker.ietf.org/doc/html/rfc3986#section-6.2.2.1).

By setting `caseSensitive` to `false`, all paths will be matched as lowercase,
but the route parameters or wildcards will maintain their original letter
casing.
This option does not affect query strings, please refer to
[`querystringParser`](#querystringparser) to change their handling.

```js
fastify.get('/user/:username', (request, reply) => {
  // Given the URL: /USER/NodeJS
  console.log(request.params.username) // -> 'NodeJS'
})
```

### `constraints`
<a id="constraints"></a>

Fastify's built-in route constraints are provided by `find-my-way`, which
allows constraining routes by `version` or `host`. You can add new constraint
strategies, or override the built-in strategies, by providing a `constraints`
object with strategies for `find-my-way`. You can find more information on
constraint strategies in the
[find-my-way](https://github.com/delvedor/find-my-way) documentation.

```js
const customVersionStrategy = {
  storage: function () {
    const versions = {}
    return {
      get: (version) => { return versions[version] || null },
      set: (version, store) => { versions[version] = store }
    }
  },
  deriveVersion: (req, ctx) => {
    return req.headers['accept']
  }
}

const fastify = require('fastify')({
  routerOptions: {
    constraints: {
      version: customVersionStrategy
    }
  }
})
```

### `defaultRoute`
<a id="on-bad-url"></a>

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which supports,
can pass a default route with the option defaultRoute.

```js
const fastify = require('fastify')({
  routerOptions: {
    defaultRoute: (req, res) => {
      res.statusCode = 404
      res.end()
    }
  }
})
```

> ℹ️ Note:
> The `req` and `res` objects passed to `defaultRoute` are the raw Node.js
> `IncomingMessage` and `ServerResponse` instances. They do **not** expose the
> Fastify-specific methods available on `FastifyRequest`/`FastifyReply` (for
> example, `res.send`).

### `ignoreDuplicateSlashes`
<a id="factory-ignore-duplicate-slashes"></a>

+ Default: `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) to handle
routing. You can use `ignoreDuplicateSlashes` option to remove duplicate slashes
from the path. It removes duplicate slashes in the route path and the request
URL. This option applies to *all* route registrations for the resulting server
instance.

When `ignoreTrailingSlash` and `ignoreDuplicateSlashes` are both set
to `true` Fastify will remove duplicate slashes, and then trailing slashes,
meaning `//a//b//c//` will be converted to `/a/b/c`.

```js
const fastify = require('fastify')({
  routerOptions: {
    ignoreDuplicateSlashes: true
  }
})

// registers "/foo/bar/"
fastify.get('///foo//bar//', function (req, reply) {
  reply.send('foo')
})
```

### `ignoreTrailingSlash`
<a id="ignore-slash"></a>

+ Default: `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) to handle
routing. By default, Fastify will take into account the trailing slashes.
Paths like `/foo` and `/foo/` are treated as different paths. If you want to
change this, set this flag to `true`. That way, both `/foo` and `/foo/` will
point to the same route. This option applies to *all* route registrations for
the resulting server instance.

```js
const fastify = require('fastify')({
  routerOptions: {
    ignoreTrailingSlash: true
  }
})

// registers both "/foo" and "/foo/"
fastify.get('/foo/', function (req, reply) {
  reply.send('foo')
})

// registers both "/bar" and "/bar/"
fastify.get('/bar', function (req, reply) {
  reply.send('bar')
})
```

### `maxParamLength`
<a id="max-param-length"></a>

+ Default: `100`

You can set a custom length for parameters in parametric (standard, regex, and
multi) routes by using `maxParamLength` option; the default value is 100
characters. If the maximum length limit is reached, the not found route will
be invoked.

This can be useful especially if you have a regex-based route, protecting you
against [ReDoS
attacks](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS).


### `onBadUrl`
<a id="on-bad-url"></a>

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which supports,
the use case of a badly formatted url (eg: /hello/%world), by default find-my-way
will invoke the defaultRoute, unless you specify the onBadUrl option.

```js
const fastify = require('fastify')({
  routerOptions: {
    onBadUrl: (path, req, res) => {
      res.statusCode = 400
      res.end(`Bad path: ${path}`)
    }
  }
})
```

As with `defaultRoute`, `req` and `res` are the raw Node.js request/response
objects and do not provide Fastify's decorated helpers.

### `querystringParser`
<a id="querystringparser"></a>

The default query string parser that Fastify uses is the Node.js's core
`querystring` module.

You can use this option to use a custom parser, such as
[`qs`](https://www.npmjs.com/package/qs).

If you only want the keys (and not the values) to be case insensitive we
recommend using a custom parser to convert only the keys to lowercase.

```js
const qs = require('qs')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => qs.parse(str)
  }
})
```

You can also use Fastify's default parser but change some handling behavior,
like the example below for case insensitive keys and values:

```js
const querystring = require('node:querystring')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => querystring.parse(str.toLowerCase())
  }
})
```

### `useSemicolonDelimiter`
<a id="use-semicolon-delimiter"></a>

+ Default `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which supports,
separating the path and query string with a `;` character (code 59), e.g. `/dev;foo=bar`.
This decision originated from [delvedor/find-my-way#76]
(https://github.com/delvedor/find-my-way/issues/76). Thus, this option will support
backwards compatibility for the need to split on `;`. To enable support for splitting
on `;` set `useSemicolonDelimiter` to `true`.

```js
const fastify = require('fastify')({
  routerOptions: {
    useSemicolonDelimiter: true
  }
})

fastify.get('/dev', async (request, reply) => {
  // An example request such as `/dev;foo=bar`
  // Will produce the following query params result `{ foo = 'bar' }`
  return request.query
})
```

### `allowErrorHandlerOverride`
<a id="allow-error-handler-override"></a>

* **Default:** `true`

> ⚠ Warning:
> This option will be set to `false` by default
> in the next major release.

When set to `false`, it prevents `setErrorHandler` from being called
multiple times within the same scope, ensuring that the previous error
handler is not unintentionally overridden.

#### Example of incorrect usage:

```js
app.setErrorHandler(function freeSomeResources () {
  // Never executed, memory leaks
})

app.setErrorHandler(function anotherErrorHandler () {
  // Overrides the previous handler
})
```

## Instance

### Server Methods

#### server
<a id="server"></a>

`fastify.server`: The Node core
[server](https://nodejs.org/api/http.html#class-httpserver) object as
returned by the [**`Fastify factory function`**](#factory).

> ⚠ Warning:
> If utilized improperly, certain Fastify features could be disrupted.
> It is recommended to only use it for attaching listeners.

#### after
<a id="after"></a>

Invoked when the current plugin and all the plugins that have been registered
within it have finished loading. It is always executed before the method
`fastify.ready`.

```js
fastify
  .register((instance, opts, done) => {
    console.log('Current plugin')
    done()
  })
  .after(err => {
    console.log('After current plugin')
  })
  .register((instance, opts, done) => {
    console.log('Next plugin')
    done()
  })
  .ready(err => {
    console.log('Everything has been loaded')
  })
```

In case `after()` is called without a function, it returns a `Promise`:

```js
fastify.register(async (instance, opts) => {
  console.log('Current plugin')
})

await fastify.after()
console.log('After current plugin')

fastify.register(async (instance, opts) => {
  console.log('Next plugin')
})

await fastify.ready()

console.log('Everything has been loaded')
```

#### ready
<a id="ready"></a>

Function called when all the plugins have been loaded. It takes an error
parameter if something went wrong.
```js
fastify.ready(err => {
  if (err) throw err
})
```
If it is called without any arguments, it will return a `Promise`:

```js
fastify.ready().then(() => {
  console.log('successfully booted!')
}, (err) => {
  console.log('an error happened', err)
})
```

#### listen
<a id="listen"></a>

Starts the server and internally waits for the `.ready()` event. The signature
is `.listen([options][, callback])`. Both the `options` object and the
`callback` parameters extend the [Node.js
core](https://nodejs.org/api/net.html#serverlistenoptions-callback) options
object. Thus, all core options are available with the following additional
Fastify specific options:

* listenTextResolver: Set an optional resolver for the text to log after server
has been successfully started. It is possible to override the default
`Server listening at [address]` log entry using this option.

    ```js
    server.listen({
      port: 9080,
      listenTextResolver: (address) => { return `Prometheus metrics server is listening at ${address}` }
    })
    ```

By default, the server will listen on the address(es) resolved by `localhost`
when no specific host is provided. If listening on any available interface is
desired, then specifying `0.0.0.0` for the address will listen on all IPv4
addresses. The address argument provided above will then return the first such
IPv4 address. The following table details the possible values for `host` when
targeting `localhost`, and what the result of those values for `host` will be.

 Host          | IPv4 | IPv6
 --------------|------|-------
 `::`            | ✅<sup>*</sup> | ✅
 `::` + [`ipv6Only`](https://nodejs.org/api/net.html#serverlistenoptions-callback) | 🚫 | ✅
 `0.0.0.0`       | ✅ | 🚫
 `localhost`     | ✅ | ✅
 `127.0.0.1`     | ✅ | 🚫
 `::1`           | 🚫 | ✅

<sup>*</sup> Using `::` for the address will listen on all IPv6 addresses and,
depending on OS, may also listen on [all IPv4
addresses](https://nodejs.org/api/net.html#serverlistenport-host-backlog-callback).

Be careful when deciding to listen on all interfaces; it comes with inherent
[security
risks](https://web.archive.org/web/20170711105010/https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

The default is to listen on `port: 0` (which picks the first available open
port) and `host: 'localhost'`:

```js
fastify.listen((err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying an address is also supported:

```js
fastify.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If no callback is provided a Promise is returned:

```js
fastify.listen({ port: 3000 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

When deploying to a Docker, and potentially other, containers, it is advisable
to listen on `0.0.0.0` because they do not default to exposing mapped ports to
`localhost`:

```js
fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If the `port` is omitted (or is set to zero), a random available port is
automatically chosen (available via `fastify.server.address().port`).

The default options of listen are:

```js
fastify.listen({
  port: 0,
  host: 'localhost',
  exclusive: false,
  readableAll: false,
  writableAll: false,
  ipv6Only: false
}, (err) => {})
```

#### addresses
<a id="addresses"></a>

This method returns an array of addresses that the server is listening on. If
you call it before `listen()` is called or after the `close()` function, it will
return an empty array.

```js
await fastify.listen({ port: 8080 })
const addresses = fastify.addresses()
// [
//   { port: 8080, family: 'IPv6', address: '::1' },
//   { port: 8080, family: 'IPv4', address: '127.0.0.1' }
// ]
```

Note that the array contains the `fastify.server.address()` too.

#### routing
<a id="routing"></a>

Method to access the `lookup` method of the internal router and match the
request to the appropriate handler:

```js
fastify.routing(req, res)
```

#### route
<a id="route"></a>

Method to add routes to the server, it also has shorthand functions, check
[here](./Routes.md).

#### hasRoute
<a id="hasRoute"></a>

Method to check if a route is already registered to the internal router. It
expects an object as the payload. `url` and `method` are mandatory fields. It
is possible to also specify `constraints`. The method returns `true` if the
route is registered or `false` if not.

```js
const routeExists = fastify.hasRoute({
  url: '/',
  method: 'GET',
  constraints: { version: '1.0.0' } // optional
})

if (routeExists === false) {
  // add route
}
```

#### findRoute
<a id="findRoute"></a>

Method to retrieve a route already registered to the internal router. It
expects an object as the payload. `url` and `method` are mandatory fields. It
is possible to also specify `constraints`.
The method returns a route object or `null` if the route cannot be found.

```js
const route = fastify.findRoute({
  url: '/artists/:artistId',
  method: 'GET',
  constraints: { version: '1.0.0' } // optional
})

if (route !== null) {
  // perform some route checks
  console.log(route.params)   // `{artistId: ':artistId'}`
}
```


#### close
<a id="close"></a>

`fastify.close(callback)`: call this function to close the server instance and
run the [`'onClose'`](./Hooks.md#on-close) hook.

Calling `close` will also cause the server to respond to every new incoming
request with a `503` error and destroy that request. See [`return503OnClosing`
flags](#factory-return-503-on-closing) for changing this behavior.

If it is called without any arguments, it will return a Promise:

```js
fastify.close().then(() => {
  console.log('successfully closed!')
}, (err) => {
  console.log('an error happened', err)
})
```

##### Shutdown lifecycle

When `fastify.close()` is called, the following steps happen in order:

1. The server is flagged as **closing**. New incoming requests receive a
   `Connection: close` header (HTTP/1.1) and are handled according to
   [`return503OnClosing`](#factory-return-503-on-closing).
2. [`preClose`](./Hooks.md#pre-close) hooks execute. The server is still
   processing in-flight requests at this point.
3. **Connection draining** based on the
   [`forceCloseConnections`](#forcecloseconnections) option:
   - `"idle"` — idle keep-alive connections are closed; in-flight requests
     continue.
   - `true` — all persistent connections are destroyed immediately.
   - `false` — no forced closure; idle connections remain open until they time
     out naturally (see [`keepAliveTimeout`](#keepalivetimeout)).
4. The HTTP server **stops accepting** new TCP connections
   (`server.close()`). Node.js waits for all in-flight requests to complete
   before invoking the callback.
5. [`onClose`](./Hooks.md#on-close) hooks execute. All in-flight requests have
   completed and the server is no longer listening.
6. The `close` callback (or the returned Promise) resolves.

```
fastify.close() called
  │
  ├─▶ closing = true (new requests receive 503)
  │
  ├─▶ preClose hooks
  │     (in-flight requests still active)
  │
  ├─▶ Connection draining (forceCloseConnections)
  │
  ├─▶ server.close()
  │     (waits for in-flight requests to complete)
  │
  ├─▶ onClose hooks
  │     (server stopped, all requests done)
  │
  └─▶ close callback / Promise resolves
```

> ℹ️ Note:
> Upgraded connections (such as WebSocket) are not tracked by the HTTP
> server and will prevent `server.close()` from completing. Close them
> explicitly in a [`preClose`](./Hooks.md#pre-close) hook.

#### decorate*
<a id="decorate"></a>

Function useful if you need to decorate the fastify instance, Reply or Request,
check [here](./Decorators.md).

#### register
<a id="register"></a>

Fastify allows the user to extend its functionality with plugins. A plugin can
be a set of routes, a server decorator, or whatever, check [here](./Plugins.md).

#### addHook
<a id="addHook"></a>

Function to add a specific hook in the lifecycle of Fastify, check
[here](./Hooks.md).

#### prefix
<a id="prefix"></a>

The full path that will be prefixed to a route.

Example:

```js
fastify.register(function (instance, opts, done) {
  instance.get('/foo', function (request, reply) {
    // Will log "prefix: /v1"
    request.log.info('prefix: %s', instance.prefix)
    reply.send({ prefix: instance.prefix })
  })

  instance.register(function (instance, opts, done) {
    instance.get('/bar', function (request, reply) {
      // Will log "prefix: /v1/v2"
      request.log.info('prefix: %s', instance.prefix)
      reply.send({ prefix: instance.prefix })
    })

    done()
  }, { prefix: '/v2' })

  done()
}, { prefix: '/v1' })
```

#### pluginName
<a id="pluginName"></a>

Name of the current plugin. The root plugin is called `'fastify'`. There are
different ways to define a name (in order).

1. If you use [fastify-plugin](https://github.com/fastify/fastify-plugin) the
   metadata `name` is used.
2. If the exported plugin has the `Symbol.for('fastify.display-name')` property,
   then the value of that property is used.
   Example: `pluginFn[Symbol.for('fastify.display-name')] = "Custom Name"`
3. If you `module.exports` a plugin the filename is used.
4. If you use a regular [function
   declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions)
   the function name is used.

*Fallback*: The first two lines of your plugin will represent the plugin name.
Newlines are replaced by ` -- `. This will help to identify the root cause when
you deal with many plugins.

> ⚠ Warning:
> If you have to deal with nested plugins, the name differs with the usage of
> the [fastify-plugin](https://github.com/fastify/fastify-plugin) because
> no new scope is created and therefore we have no place to attach contextual
> data. In that case, the plugin name will represent the boot order of all
> involved plugins in the format of `fastify -> plugin-A -> plugin-B`.

#### hasPlugin
<a id="hasPlugin"></a>

Method to check if a specific plugin has been registered. Relies on the plugin
metadata name. Returns `true` if the plugin is registered. Otherwise, returns
`false`.

```js
const fastify = require('fastify')()
fastify.register(require('@fastify/cookie'), {
  secret: 'my-secret',
  parseOptions: {}
})

fastify.ready(() => {
  fastify.hasPlugin('@fastify/cookie') // true
})
```

#### listeningOrigin
<a id="listeningOrigin"></a>

The current origin the server is listening to.
For example, a TCP socket based server returns
a base address like `http://127.0.0.1:3000`,
and a Unix socket server will return the socket
path, e.g. `fastify.temp.sock`.

#### log
<a id="log"></a>

The logger instance, check [here](./Logging.md).

#### version
<a id="version"></a>

Fastify version of the instance. Used for plugin support. See
[Plugins](./Plugins.md#handle-the-scope) for information on how the version is
used by plugins.

#### inject
<a id="inject"></a>

Fake HTTP injection (for testing purposes)
[here](../Guides/Testing.md#benefits-of-using-fastifyinject).

#### addHttpMethod
<a id="addHttpMethod"></a>

Fastify supports the `GET`, `HEAD`, `TRACE`, `DELETE`, `OPTIONS`,
`PATCH`, `PUT` and `POST` HTTP methods by default.
The `addHttpMethod` method allows to add any non standard HTTP
methods to the server that are [supported by Node.js](https://nodejs.org/api/http.html#httpmethods).

```js
// Add a new HTTP method called 'MKCOL' that supports a request body
fastify.addHttpMethod('MKCOL', { hasBody: true,  })

// Add a new HTTP method called 'COPY' that does not support a request body
fastify.addHttpMethod('COPY')
```

After calling `addHttpMethod`, it is possible to use the route shorthand
methods to define routes for the new HTTP method:

```js
fastify.addHttpMethod('MKCOL', { hasBody: true })
fastify.mkcol('/', (req, reply) => {
  // Handle the 'MKCOL' request
})
```

> ⚠ Warning:
> `addHttpMethod` overrides existing methods.

#### addSchema
<a id="add-schema"></a>

`fastify.addSchema(schemaObj)`, adds a JSON schema to the Fastify instance. This
allows you to reuse it everywhere in your application just by using the standard
`$ref` keyword.

To learn more, read the [Validation and
Serialization](./Validation-and-Serialization.md) documentation.

#### getSchemas
<a id="get-schemas"></a>

`fastify.getSchemas()`, returns a hash of all schemas added via `.addSchema`.
The keys of the hash are the `$id`s of the JSON Schema provided.

#### getSchema
<a id="get-schema"></a>

`fastify.getSchema(id)`, return the JSON schema added with `.addSchema` and the
matching `id`. It returns `undefined` if it is not found.

#### setReplySerializer
<a id="set-reply-serializer"></a>

Set the reply serializer for all the routes. This will be used as default if a
[Reply.serializer(func)](./Reply.md#serializerfunc) has not been set. The
handler is fully encapsulated, so different plugins can set different error
handlers. Note: the function parameter is called only for status `2xx`. Check
out the [`setErrorHandler`](#seterrorhandler) for errors.

```js
fastify.setReplySerializer(function (payload, statusCode){
  // serialize the payload with a sync function
  return `my serialized ${statusCode} content: ${payload}`
})
```

#### setValidatorCompiler
<a id="set-validator-compiler"></a>

Set the schema validator compiler for all routes. See
[#schema-validator](./Validation-and-Serialization.md#schema-validator).

#### setSchemaErrorFormatter
<a id="set-schema-error-formatter"></a>

Set the schema error formatter for all routes. See
[#error-handling](./Validation-and-Serialization.md#schemaerrorformatter).

#### setSerializerCompiler
<a id="set-serializer-resolver"></a>

Set the schema serializer compiler for all routes. See
[#schema-serializer](./Validation-and-Serialization.md#schema-serializer).

> ℹ️ Note:
> [`setReplySerializer`](#set-reply-serializer) has priority if set!

#### validatorCompiler
<a id="validator-compiler"></a>

This property can be used to get the schema validator. If not set, it will be
`null` until the server starts, then it will be a function with the signature
`function ({ schema, method, url, httpPart })` that returns the input `schema`
compiled to a function for validating data. The input `schema` can access all
the shared schemas added with [`.addSchema`](#add-schema) function.

#### serializerCompiler
<a id="serializer-compiler"></a>

This property can be used to get the schema serializer. If not set, it will be
`null` until the server starts, then it will be a function with the signature
`function ({ schema, method, url, httpPart })` that returns the input `schema`
compiled to a function for validating data. The input `schema` can access all
the shared schemas added with [`.addSchema`](#add-schema) function.

#### schemaErrorFormatter
<a id="schema-error-formatter"></a>

This property can be used to set a function to format errors that happen while
the `validationCompiler` fails to validate the schema. See
[#error-handling](./Validation-and-Serialization.md#schemaerrorformatter).

#### schemaController
<a id="schema-controller"></a>

This property can be used to fully manage:
- `bucket`: where the schemas of your application will be stored
- `compilersFactory`: what module must compile the JSON schemas

It can be useful when your schemas are stored in another data structure that is
unknown to Fastify.

Another use case is to tweak all the schemas processing. Doing so it is possible
to use Ajv v8 JTD or Standalone feature. To use such as JTD or the Standalone
mode, refers to the [`@fastify/ajv-compiler`
documentation](https://github.com/fastify/ajv-compiler#usage).

```js
const fastify = Fastify({
  schemaController: {
    /**
     * This factory is called whenever `fastify.register()` is called.
     * It may receive as input the schemas of the parent context if some schemas have been added.
     * @param {object} parentSchemas these schemas will be returned by the
     * `getSchemas()` method function of the returned `bucket`.
     */
    bucket: function factory (parentSchemas) {
      return {
        add (inputSchema) {
          // This function must store the schema added by the user.
          // This function is invoked when `fastify.addSchema()` is called.
        },
        getSchema (schema$id) {
          // This function must return the raw schema requested by the `schema$id`.
          // This function is invoked when `fastify.getSchema(id)` is called.
          return aSchema
        },
        getSchemas () {
          // This function must return all the schemas referenced by the routes schemas' $ref
          // It must return a JSON where the property is the schema `$id` and the value is the raw JSON Schema.
          const allTheSchemaStored = {
            'schema$id1': schema1,
            'schema$id2': schema2
          }
          return allTheSchemaStored
        }
      }
    },

    /**
     * The compilers factory lets you fully control the validator and serializer
     * in the Fastify's lifecycle, providing the encapsulation to your compilers.
     */
    compilersFactory: {
      /**
       * This factory is called whenever a new validator instance is needed.
       * It may be called whenever `fastify.register()` is called only if new schemas have been added to the
       * encapsulation context.
       * It may receive as input the schemas of the parent context if some schemas have been added.
       * @param {object} externalSchemas these schemas will be returned by the
       * `bucket.getSchemas()`. Needed to resolve the external references $ref.
       * @param {object} ajvServerOption the server `ajv` options to build your compilers accordingly
       */
      buildValidator: function factory (externalSchemas, ajvServerOption) {
        // This factory function must return a schema validator compiler.
        // See [#schema-validator](./Validation-and-Serialization.md#schema-validator) for details.
        const yourAjvInstance = new Ajv(ajvServerOption.customOptions)
        return function validatorCompiler ({ schema, method, url, httpPart }) {
          return yourAjvInstance.compile(schema)
        }
      },

      /**
       * This factory is called whenever a new serializer instance is needed.
       * It may be called whenever `fastify.register()` is called only if new schemas have been added to the
       * encapsulation context.
       * It may receive as input the schemas of the parent context if some schemas have been added.
       * @param {object} externalSchemas these schemas will be returned by the
       * `bucket.getSchemas()`. Needed to resolve the external references $ref.
       * @param {object} serializerOptsServerOption the server `serializerOpts`
       * options to build your compilers accordingly
       */
      buildSerializer: function factory (externalSchemas, serializerOptsServerOption) {
        // This factory function must return a schema serializer compiler.
        // See [#schema-serializer](./Validation-and-Serialization.md#schema-serializer) for details.
        return function serializerCompiler ({ schema, method, url, httpStatus, contentType }) {
          return data => JSON.stringify(data)
        }
      }
    }
  }
});
```

#### setNotFoundHandler
<a id="set-not-found-handler"></a>

`fastify.setNotFoundHandler(handler(request, reply))`: set the 404 handler. This
call is encapsulated by prefix, so different plugins can set different not found
handlers if a different [`prefix` option](./Plugins.md#route-prefixing-option)
is passed to `fastify.register()`. The handler is treated as a regular route
handler so requests will go through the full [Fastify
lifecycle](./Lifecycle.md#lifecycle) for unexisting URLs.
*async-await* is supported as well.
Badly formatted URLs are sent to the [`onBadUrl`](#onbadurl)
handler instead.

You can also register [`preValidation`](./Hooks.md#route-hooks) and
[`preHandler`](./Hooks.md#route-hooks) hooks for the 404 handler.

> ℹ️ Note:
> The `preValidation` hook registered using this method will run for a
> route that Fastify does not recognize and **not** when a route handler manually
> calls [`reply.callNotFound`](./Reply.md#call-not-found). In which case, only
> preHandler will be run.


```js
fastify.setNotFoundHandler({
  preValidation: (req, reply, done) => {
    // your code
    done()
  },
  preHandler: (req, reply, done) => {
    // your code
    done()
  }
}, function (request, reply) {
    // Default not found handler with preValidation and preHandler hooks
})

fastify.register(function (instance, options, done) {
  instance.setNotFoundHandler(function (request, reply) {
    // Handle not found request without preValidation and preHandler hooks
    // to URLs that begin with '/v1'
  })
  done()
}, { prefix: '/v1' })
```

Fastify calls setNotFoundHandler to add a default 404 handler at startup before
plugins are registered. If you would like to augment the behavior of the default
404 handler, for example with plugins, you can call setNotFoundHandler with no
arguments `fastify.setNotFoundHandler()` within the context of these registered
plugins.

> ℹ️ Note:
> Some config properties from the request object will be
> undefined inside the custom not found handler. E.g.:
> `request.routeOptions.url`, `routeOptions.method` and `routeOptions.config`.
> This method design goal is to allow calling the common not found route.
> To return a per-route customized 404 response, you can do it in
> the response itself.

#### setErrorHandler
<a id="set-error-handler"></a>

`fastify.setErrorHandler(handler(error, request, reply))`: Set a function that
will be invoked whenever an exception is thrown during the request lifecycle.
The handler is bound to the Fastify instance and is fully encapsulated, so
different plugins can set different error handlers. *async-await* is
supported as well.

If the error `statusCode` is less than 400, Fastify will automatically
set it to 500 before calling the error handler.

`setErrorHandler` will ***not*** catch:
- exceptions thrown in an `onResponse` hook because the response has already been
  sent to the client. Use the `onSend` hook instead.
- not found (404) errors. Use [`setNotFoundHandler`](#set-not-found-handler)
  instead.
- Stream errors thrown during piping into the response socket, as
  headers/response were already sent to the client.
  Use custom in-stream data to signal such errors.

```js
fastify.setErrorHandler(function (error, request, reply) {
  // Log error
  this.log.error(error)
  // Send error response
  reply.status(409).send({ ok: false })
})
```

Fastify is provided with a default function that is called if no error handler
is set. It can be accessed using `fastify.errorHandler` and it logs the error
with respect to its `statusCode`.

```js
const statusCode = error.statusCode
if (statusCode >= 500) {
  log.error(error)
} else if (statusCode >= 400) {
  log.info(error)
} else {
  log.error(error)
}
```

> ⚠ Warning:
> Avoid calling setErrorHandler multiple times in the same scope.
> See [`allowErrorHandlerOverride`](#allowerrorhandleroverride).

##### Custom error handler for stream replies
<a id="set-error-handler-stream-replies"></a>

If `Content-Type` differs between the endpoint and error handler, explicitly
define it in both. For example, if the endpoint returns an `application/text`
stream and the error handler responds with `application/json`, the error handler
must explicitly set `Content-Type`. Otherwise, it will fail serialization with
a `500` status code. Alternatively, always respond with serialized data in the
error handler by manually calling a serialization method (e.g.,
`JSON.stringify`).

```js
fastify.setErrorHandler((err, req, reply) => {
  reply
    .code(400)
    .type('application/json')
    .send({ error: err.message })
})
```

```js
fastify.setErrorHandler((err, req, reply) => {
  reply
    .code(400)
    .send(JSON.stringify({ error: err.message }))
})
```

#### setChildLoggerFactory
<a id="set-child-logger-factory"></a>

`fastify.setChildLoggerFactory(factory(logger, bindings, opts, rawReq))`: Set a
function that will be called when creating a child logger instance for each request
which allows for modifying or adding child logger bindings and logger options, or
returning a custom child logger implementation.

Child logger bindings have a performance advantage over per-log bindings because
they are pre-serialized by Pino when the child logger is created.

The first parameter is the parent logger instance, followed by the default bindings
and logger options which should be passed to the child logger, and finally
the raw request (not a Fastify request object). The function is bound with `this`
being the Fastify instance.

For example:
```js
const fastify = require('fastify')({
  childLoggerFactory: function (logger, bindings, opts, rawReq) {
    // Calculate additional bindings from the request if needed
    bindings.traceContext = rawReq.headers['x-cloud-trace-context']
    return logger.child(bindings, opts)
  }
})
```

The handler is bound to the Fastify instance and is fully encapsulated, so
different plugins can set different logger factories.

#### setgenreqid
<a id="set-gen-req-id"></a>

`fastify.setGenReqId(function (rawReq))` Synchronous function for setting the request-id
for additional Fastify instances. It will receive the _raw_ incoming request as
a parameter. The provided function should not throw an Error in any case.

Especially in distributed systems, you may want to override the default ID
generation behavior to handle custom ways of generating different IDs in
order to handle different use cases. Such as observability or webhooks plugins.

For example:
```js
const fastify = require('fastify')({
  genReqId: (req) => {
    return 'base'
  }
})

fastify.register((instance, opts, done) => {
  instance.setGenReqId((req) => {
    // custom request ID for `/webhooks`
    return 'webhooks-id'
  })
  done()
}, { prefix: '/webhooks' })

fastify.register((instance, opts, done) => {
  instance.setGenReqId((req) => {
    // custom request ID for `/observability`
    return 'observability-id'
  })
  done()
}, { prefix: '/observability' })
```

The handler is bound to the Fastify instance and is fully encapsulated, so
different plugins can set a different request ID.

#### addConstraintStrategy
<a id="addConstraintStrategy"></a>

Function to add a custom constraint strategy. To register a new type of
constraint, you must add a new constraint strategy that knows how to match
values to handlers, and that knows how to get the constraint value from a
request.

Add a custom constraint strategy using the `fastify.addConstraintStrategy`
method:

```js
const customResponseTypeStrategy = {
  // strategy name for referencing in the route handler `constraints` options
  name: 'accept',
  // storage factory for storing routes in the find-my-way route tree
  storage: function () {
    let handlers = {}
    return {
      get: (type) => { return handlers[type] || null },
      set: (type, store) => { handlers[type] = store }
    }
  },
  // function to get the value of the constraint from each incoming request
  deriveConstraint: (req, ctx) => {
    return req.headers['accept']
  },
  // optional flag marking if handlers without constraints can match requests that have a value for this constraint
  mustMatchWhenDerived: true
}

const router = Fastify();
router.addConstraintStrategy(customResponseTypeStrategy);
```

#### hasConstraintStrategy
<a id="hasConstraintStrategy"></a>

The `fastify.hasConstraintStrategy(strategyName)` checks if there already exists
a custom constraint strategy with the same name.

#### printRoutes
<a id="print-routes"></a>

`fastify.printRoutes()`: Fastify router builds a tree of routes for each HTTP
method. If you call the prettyPrint without specifying an HTTP method, it will
merge all the trees into one and print it. The merged tree doesn't represent the
internal router structure. **Do not use it for debugging.**

*Remember to call it inside or after a `ready` call.*

```js
fastify.get('/test', () => {})
fastify.get('/test/hello', () => {})
fastify.get('/testing', () => {})
fastify.get('/testing/:param', () => {})
fastify.put('/update', () => {})

fastify.ready(() => {
  console.log(fastify.printRoutes())
  // └── /
  //     ├── test (GET)
  //     │   ├── /hello (GET)
  //     │   └── ing (GET)
  //     │       └── /
  //     │           └── :param (GET)
  //     └── update (PUT)
})
```

If you want to print the internal router tree, you should specify the `method`
param. Printed tree will represent the internal router structure.
**You can use it for debugging.**

```js
  console.log(fastify.printRoutes({ method: 'GET' }))
  // └── /
  //     └── test (GET)
  //         ├── /hello (GET)
  //         └── ing (GET)
  //             └── /
  //                 └── :param (GET)

  console.log(fastify.printRoutes({ method: 'PUT' }))
  // └── /
  //     └── update (PUT)
```

`fastify.printRoutes({ commonPrefix: false })` will print compressed trees. This
may be useful when you have a large number of routes with common prefixes.
It doesn't represent the internal router structure. **Do not use it for debugging.**

```js
  console.log(fastify.printRoutes({ commonPrefix: false }))
  // ├── /test (GET)
  // │   ├── /hello (GET)
  // │   └── ing (GET)
  // │       └── /:param (GET)
  // └── /update (PUT)
```

`fastify.printRoutes({ includeMeta: (true | []) })` will display properties from
the `route.store` object for each displayed route. This can be an `array` of
keys (e.g. `['onRequest', Symbol('key')]`), or `true` to display all properties.
A shorthand option, `fastify.printRoutes({ includeHooks: true })` will include
all [hooks](./Hooks.md).

```js
  fastify.get('/test', () => {})
  fastify.get('/test/hello', () => {})

  const onTimeout = () => {}

  fastify.addHook('onRequest', () => {})
  fastify.addHook('onTimeout', onTimeout)

  console.log(fastify.printRoutes({ includeHooks: true, includeMeta: ['errorHandler'] }))
  // └── /
  //     └── test (GET)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         • (errorHandler) "defaultErrorHandler()"
  //         test (HEAD)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         • (onSend) ["headRouteOnSendHandler()"]
  //         • (errorHandler) "defaultErrorHandler()"
  //         └── /hello (GET)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             • (errorHandler) "defaultErrorHandler()"
  //             /hello (HEAD)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             • (onSend) ["headRouteOnSendHandler()"]
  //             • (errorHandler) "defaultErrorHandler()"

  console.log(fastify.printRoutes({ includeHooks: true }))
  // └── /
  //     └── test (GET)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         test (HEAD)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         • (onSend) ["headRouteOnSendHandler()"]
  //         └── /hello (GET)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             /hello (HEAD)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             • (onSend) ["headRouteOnSendHandler()"]
```

#### printPlugins
<a id="print-plugins"></a>

`fastify.printPlugins()`: Prints the representation of the internal plugin tree
used by the avvio, useful for debugging require order issues.

*Remember to call it inside or after a `ready` call.*

```js
fastify.register(async function foo (instance) {
  instance.register(async function bar () {})
})
fastify.register(async function baz () {})

fastify.ready(() => {
  console.error(fastify.printPlugins())
  // will output the following to stderr:
  // └── root
  //     ├── foo
  //     │   └── bar
  //     └── baz
})
```

#### addContentTypeParser
<a id="addContentTypeParser"></a>

`fastify.addContentTypeParser(content-type, options, parser)` is used to pass
a custom parser for a given content type. Useful for adding parsers for custom
content types, e.g. `text/json, application/vnd.oasis.opendocument.text`.
`content-type` can be a string, string array or RegExp.

```js
// The two arguments passed to getDefaultJsonParser are for ProtoType poisoning
// and Constructor Poisoning configuration respectively. The possible values are
// 'ignore', 'remove', 'error'. ignore  skips all validations and it is similar
// to calling JSON.parse() directly. See the
// [`secure-json-parse` documentation](https://github.com/fastify/secure-json-parse#api) for more information.

fastify.addContentTypeParser('text/json', { asString: true }, fastify.getDefaultJsonParser('ignore', 'ignore'))
```

#### hasContentTypeParser
<a id="hasContentTypeParser"></a>

`fastify.hasContentTypeParser(contentType)` is used to check whether there is a
content type parser in the current context for the specified content type.

```js
fastify.hasContentTypeParser('text/json')

fastify.hasContentTypeParser(/^.+\/json$/)
```

#### removeContentTypeParser
<a id="removeContentTypeParser"></a>

`fastify.removeContentTypeParser(contentType)` is used to remove content type
parsers in the current context. This method allows for example to remove the
both built-in parsers for `application/json` and `text/plain`.

```js
fastify.removeContentTypeParser('application/json')

fastify.removeContentTypeParser(['application/json', 'text/plain'])
```

#### removeAllContentTypeParsers
<a id="removeAllContentTypeParsers"></a>

The `fastify.removeAllContentTypeParsers()` method allows all content type
parsers in the current context to be removed. A use case of this method is the
implementation of catch-all content type parser. Before adding this parser with
`fastify.addContentTypeParser()` one could call the
`removeAllContentTypeParsers` method.

For more details about the usage of the different content type parser APIs see
[here](./ContentTypeParser.md#usage).

#### getDefaultJsonParser
<a id="getDefaultJsonParser"></a>

`fastify.getDefaultJsonParser(onProtoPoisoning, onConstructorPoisoning)` takes
two arguments. First argument is ProtoType poisoning configuration and second
argument is constructor poisoning configuration. See the [`secure-json-parse`
documentation](https://github.com/fastify/secure-json-parse#api) for more
information.


#### defaultTextParser
<a id="defaultTextParser"></a>

`fastify.defaultTextParser()` can be used to parse content as plain text.

```js
fastify.addContentTypeParser('text/json', { asString: true }, fastify.defaultTextParser)
```

#### errorHandler
<a id="errorHandler"></a>

`fastify.errorHandler` can be used to handle errors using fastify's default
error handler.

```js
fastify.get('/', {
  errorHandler: (error, request, reply) => {
    if (error.code === 'SOMETHING_SPECIFIC') {
      reply.send({ custom: 'response' })
      return
    }

    fastify.errorHandler(error, request, response)
  }
}, handler)
```

#### childLoggerFactory
<a id="childLoggerFactory"></a>

`fastify.childLoggerFactory` returns the custom logger factory function for the
Fastify instance. See the [`childLoggerFactory` config option](#setchildloggerfactory)
for more info.

#### Symbol.asyncDispose
<a id="symbolAsyncDispose"></a>

`fastify[Symbol.asyncDispose]` is a symbol that can be used to define an
asynchronous function that will be called when the Fastify instance is closed.

It's commonly used alongside the `using` TypeScript keyword to ensure that
resources are cleaned up when the Fastify instance is closed.

This combines perfectly inside short lived processes or unit tests, where you must
close all Fastify resources after returning from inside the function.

```ts
test('Uses app and closes it afterwards', async () => {
  await using app = fastify();
  // do something with app.
})
```

In the above example, Fastify is closed automatically after the test finishes.

Read more about the
[ECMAScript Explicit Resource Management](https://tc39.es/proposal-explicit-resource-management/)
and the [using keyword](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/)
introduced in TypeScript 5.2.

#### initialConfig
<a id="initial-config"></a>

`fastify.initialConfig`: Exposes a frozen read-only object registering the
initial options passed down by the user to the Fastify instance.

The properties that can currently be exposed are:
- connectionTimeout
- keepAliveTimeout
- handlerTimeout
- bodyLimit
- caseSensitive
- http2
- https (it will return `false`/`true` or `{ allowHTTP1: true/false }` if
  explicitly passed)
- disableRequestLogging
- onProtoPoisoning
- onConstructorPoisoning
- pluginTimeout
- requestIdHeader
- requestIdLogLabel
- http2SessionTimeout
- routerOptions
  - allowUnsafeRegex
  - buildPrettyMeta
  - caseSensitive
  - constraints
  - defaultRoute
  - ignoreDuplicateSlashes
  - ignoreTrailingSlash
  - maxParamLength
  - onBadUrl
  - querystringParser
  - useSemicolonDelimiter

```js
const { readFileSync } = require('node:fs')
const Fastify = require('fastify')

const fastify = Fastify({
  https: {
    allowHTTP1: true,
    key: readFileSync('./fastify.key'),
    cert: readFileSync('./fastify.cert')
  },
  logger: { level: 'trace'},
  routerOptions: {
    ignoreTrailingSlash: true,
    maxParamLength: 200,
    caseSensitive: true,
  },
  trustProxy: '127.0.0.1,192.168.1.1/24',
})

console.log(fastify.initialConfig)
/*
will log :
{
  https: { allowHTTP1: true },
  routerOptions: {
    caseSensitive: true,
    ignoreTrailingSlash: true,
    maxParamLength: 200
  }
}
*/

fastify.register(async (instance, opts) => {
  instance.get('/', async (request, reply) => {
    return instance.initialConfig
    /*
    will return :
    {
      https: { allowHTTP1: true },
      routerOptions: {
        caseSensitive: true,
        ignoreTrailingSlash: true,
        maxParamLength: 200
      }
    }
    */
  })

  instance.get('/error', async (request, reply) => {
    // will throw an error because initialConfig is read-only
    // and can not be modified
    instance.initialConfig.https.allowHTTP1 = false

    return instance.initialConfig
  })
})

// Start listening.
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```
