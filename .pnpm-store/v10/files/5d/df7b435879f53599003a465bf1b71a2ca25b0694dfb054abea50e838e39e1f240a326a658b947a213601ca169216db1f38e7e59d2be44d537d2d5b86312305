<h1 align="center">Fastify</h1>

## Hooks

Hooks are registered with the `fastify.addHook` method and allow you to listen
to specific events in the application or request/response lifecycle. You have to
register a hook before the event is triggered, otherwise, the event is lost.

By using hooks you can interact directly with the lifecycle of Fastify. There
are Request/Reply hooks and application hooks:

- [Request/Reply Hooks](#requestreply-hooks)
  - [onRequest](#onrequest)
  - [preParsing](#preparsing)
  - [preValidation](#prevalidation)
  - [preHandler](#prehandler)
  - [preSerialization](#preserialization)
  - [onError](#onerror)
  - [onSend](#onsend)
  - [onResponse](#onresponse)
  - [onTimeout](#ontimeout)
  - [onRequestAbort](#onrequestabort)
  - [Manage Errors from a hook](#manage-errors-from-a-hook)
  - [Respond to a request from a hook](#respond-to-a-request-from-a-hook)
- [Application Hooks](#application-hooks)
  - [onReady](#onready)
  - [onListen](#onlisten)
  - [onClose](#onclose)
  - [preClose](#preclose)
  - [onRoute](#onroute)
  - [onRegister](#onregister)
- [Scope](#scope)
- [Route level hooks](#route-level-hooks)
- [Using Hooks to Inject Custom Properties](#using-hooks-to-inject-custom-properties)
- [Diagnostics Channel Hooks](#diagnostics-channel-hooks)

> ℹ️ Note:
> The `done` callback is not available when using `async`/`await` or
> returning a `Promise`. If you do invoke a `done` callback in this situation
> unexpected behavior may occur, e.g. duplicate invocation of handlers.

## Request/Reply Hooks

[Request](./Request.md) and [Reply](./Reply.md) are the core Fastify objects.

`done` is the function to continue with the [lifecycle](./Lifecycle.md).

It is easy to understand where each hook is executed by looking at the
[lifecycle page](./Lifecycle.md).

Hooks are affected by Fastify's encapsulation, and can thus be applied to
selected routes. See the [Scopes](#scope) section for more information.

There are eight different hooks that you can use in Request/Reply *(in order of
execution)*:

### onRequest
```js
fastify.addHook('onRequest', (request, reply, done) => {
  // Some code
  done()
})
```
Or `async/await`:
```js
fastify.addHook('onRequest', async (request, reply) => {
  // Some code
  await asyncMethod()
})
```

> ℹ️ Note:
> In the [onRequest](#onrequest) hook, `request.body` will always be
> `undefined`, because the body parsing happens before the
> [preValidation](#prevalidation) hook.

### preParsing

If you are using the `preParsing` hook, you can transform the request payload
stream before it is parsed. It receives the request and reply objects as other
hooks, and a stream with the current request payload.

If it returns a value (via `return` or via the callback function), it must
return a stream.

For instance, you can decompress the request body:

```js
fastify.addHook('preParsing', (request, reply, payload, done) => {
  // Some code
  done(null, newPayload)
})
```
Or `async/await`:
```js
fastify.addHook('preParsing', async (request, reply, payload) => {
  // Some code
  await asyncMethod()
  return newPayload
})
```

> ℹ️ Note:
> In the [preParsing](#preparsing) hook, `request.body` will always be
> `undefined`, because the body parsing happens before the
> [preValidation](#prevalidation) hook.

> ℹ️ Note:
> You should also add a `receivedEncodedLength` property to the
> returned stream. This property is used to correctly match the request payload
> with the `Content-Length` header value. Ideally, this property should be updated
> on each received chunk.

> ℹ️ Note:
> The size of the returned stream is checked to not exceed the limit
> set in [`bodyLimit`](./Server.md#bodylimit) option.

### preValidation

If you are using the `preValidation` hook, you can change the payload before it
is validated. For example:

```js
fastify.addHook('preValidation', (request, reply, done) => {
  request.body = { ...request.body, importantKey: 'randomString' }
  done()
})
```
Or `async/await`:
```js
fastify.addHook('preValidation', async (request, reply) => {
  const importantKey = await generateRandomString()
  request.body = { ...request.body, importantKey }
})
```

### preHandler

The `preHandler` hook allows you to specify a function that is executed before
a routes's handler.

```js
fastify.addHook('preHandler', (request, reply, done) => {
  // some code
  done()
})
```
Or `async/await`:
```js
fastify.addHook('preHandler', async (request, reply) => {
  // Some code
  await asyncMethod()
})
```
### preSerialization

If you are using the `preSerialization` hook, you can change (or replace) the
payload before it is serialized. For example:

```js
fastify.addHook('preSerialization', (request, reply, payload, done) => {
  const err = null
  const newPayload = { wrapped: payload }
  done(err, newPayload)
})
```
Or `async/await`:
```js
fastify.addHook('preSerialization', async (request, reply, payload) => {
  return { wrapped: payload }
})
```

> ℹ️ Note:
> The hook is NOT called if the payload is a `string`, a `Buffer`, a
> `stream`, or `null`.

### onError
```js
fastify.addHook('onError', (request, reply, error, done) => {
  // Some code
  done()
})
```
Or `async/await`:
```js
fastify.addHook('onError', async (request, reply, error) => {
  // Useful for custom error logging
  // You should not use this hook to update the error
})
```
This hook is useful if you need to do some custom error logging or add some
specific header in case of error.

It is not intended for changing the error, and calling `reply.send` will throw
an exception.

This hook will be executed before
the [Custom Error Handler set by `setErrorHandler`](./Server.md#seterrorhandler).

> ℹ️ Note:
> Unlike the other hooks, passing an error to the `done` function is not
> supported.

### onSend
If you are using the `onSend` hook, you can change the payload. For example:

```js
fastify.addHook('onSend', (request, reply, payload, done) => {
  const err = null;
  const newPayload = payload.replace('some-text', 'some-new-text')
  done(err, newPayload)
})
```
Or `async/await`:
```js
fastify.addHook('onSend', async (request, reply, payload) => {
  const newPayload = payload.replace('some-text', 'some-new-text')
  return newPayload
})
```

You can also clear the payload to send a response with an empty body by
replacing the payload with `null`:

```js
fastify.addHook('onSend', (request, reply, payload, done) => {
  reply.code(304)
  const newPayload = null
  done(null, newPayload)
})
```

> You can also send an empty body by replacing the payload with the empty string
> `''`, but be aware that this will cause the `Content-Length` header to be set
> to `0`, whereas the `Content-Length` header will not be set if the payload is
> `null`.

> ℹ️ Note:
> If you change the payload, you may only change it to a `string`, a
> `Buffer`, a `stream`, a `ReadableStream`, a `Response`, or `null`.


### onResponse
```js
fastify.addHook('onResponse', (request, reply, done) => {
  // Some code
  done()
})
```
Or `async/await`:
```js
fastify.addHook('onResponse', async (request, reply) => {
  // Some code
  await asyncMethod()
})
```

The `onResponse` hook is executed when a response has been sent, so you will not
be able to send more data to the client. It can however be useful for sending
data to external services, for example, to gather statistics.

> ℹ️ Note:
> Setting `disableRequestLogging` to `true` will disable any error log
> inside the `onResponse` hook. In this case use `try - catch` to log errors.

### onTimeout

```js
fastify.addHook('onTimeout', (request, reply, done) => {
  // Some code
  done()
})
```
Or `async/await`:
```js
fastify.addHook('onTimeout', async (request, reply) => {
  // Some code
  await asyncMethod()
})
```
`onTimeout` is useful if you need to monitor the request timed out in your
service (if the `connectionTimeout` property is set on the Fastify instance).
The `onTimeout` hook is executed when a request is timed out and the HTTP socket
has been hung up. Therefore, you will not be able to send data to the client.

> ℹ️ Note:
> The `onTimeout` hook is triggered by socket-level timeouts set via
> `connectionTimeout`. For application-level per-route timeouts, see the
> [`handlerTimeout`](./Server.md#factory-handler-timeout) option which uses
> `request.signal` for cooperative cancellation.

### onRequestAbort

```js
fastify.addHook('onRequestAbort', (request, done) => {
  // Some code
  done()
})
```
Or `async/await`:
```js
fastify.addHook('onRequestAbort', async (request) => {
  // Some code
  await asyncMethod()
})
```
The `onRequestAbort` hook is executed when a client closes the connection before
the entire request has been processed. Therefore, you will not be able to send
data to the client.

> ℹ️ Note:
> Client abort detection is not completely reliable.
> See: [`Detecting-When-Clients-Abort.md`](../Guides/Detecting-When-Clients-Abort.md)

### Manage Errors from a hook
If you get an error during the execution of your hook, just pass it to `done()`
and Fastify will automatically close the request and send the appropriate error
code to the user.

```js
fastify.addHook('onRequest', (request, reply, done) => {
  done(new Error('Some error'))
})
```

If you want to pass a custom error code to the user, just use `reply.code()`:
```js
fastify.addHook('preHandler', (request, reply, done) => {
  reply.code(400)
  done(new Error('Some error'))
})
```
*The error will be handled by [`Reply`](./Reply.md#errors).*

Or if you're using `async/await` you can just throw an error:
```js
fastify.addHook('onRequest', async (request, reply) => {
  throw new Error('Some error')
})
```

### Respond to a request from a hook

If needed, you can respond to a request before you reach the route handler, for
example when implementing an authentication hook. Replying from a hook implies
that the hook chain is __stopped__ and the rest of the hooks and handlers are
not executed. If the hook is using the callback approach, i.e. it is not an
`async` function or it returns a `Promise`, it is as simple as calling
`reply.send()` and avoiding calling the callback. If the hook is `async`,
`reply.send()` __must__ be called _before_ the function returns or the promise
resolves, otherwise, the request will proceed. When `reply.send()` is called
outside of the promise chain, it is important to `return reply` otherwise the
request will be executed twice.

It is important to __not mix callbacks and `async`/`Promise`__, otherwise the
hook chain will be executed twice.

If you are using `onRequest` or `preHandler` use `reply.send`.

```js
fastify.addHook('onRequest', (request, reply, done) => {
  reply.send('Early response')
})

// Works with async functions too
fastify.addHook('preHandler', async (request, reply) => {
  setTimeout(() => {
    reply.send({ hello: 'from prehandler' })
  })
  return reply // mandatory, so the request is not executed further
// Commenting the line above will allow the hooks to continue and fail with FST_ERR_REP_ALREADY_SENT
})
```

If you want to respond with a stream, you should avoid using an `async` function
for the hook. If you must use an `async` function, your code will need to follow
the pattern in
[test/hooks-async.js](https://github.com/fastify/fastify/blob/94ea67ef2d8dce8a955d510cd9081aabd036fa85/test/hooks-async.js#L269-L275).

```js
fastify.addHook('onRequest', (request, reply, done) => {
  const stream = fs.createReadStream('some-file', 'utf8')
  reply.send(stream)
})
```

If you are sending a response without `await` on it, make sure to always `return
reply`:

```js
fastify.addHook('preHandler', async (request, reply) => {
  setImmediate(() => { reply.send('hello') })

  // This is needed to signal the handler to wait for a response
  // to be sent outside of the promise chain
  return reply
})

fastify.addHook('preHandler', async (request, reply) => {
  // the @fastify/static plugin will send a file asynchronously,
  // so we should return reply
  reply.sendFile('myfile')
  return reply
})
```

## Application Hooks

You can hook into the application-lifecycle as well.

- [onReady](#onready)
- [onListen](#onlisten)
- [onClose](#onclose)
- [preClose](#preclose)
- [onRoute](#onroute)
- [onRegister](#onregister)

### onReady
Triggered before the server starts listening for requests and when `.ready()` is
invoked. It cannot change the routes or add new hooks. Registered hook functions
are executed serially. Only after all `onReady` hook functions have completed
will the server start listening for requests. Hook functions accept one
argument: a callback, `done`, to be invoked after the hook function is complete.
Hook functions are invoked with `this` bound to the associated Fastify instance.

```js
// callback style
fastify.addHook('onReady', function (done) {
  // Some code
  const err = null;
  done(err)
})

// or async/await style
fastify.addHook('onReady', async function () {
  // Some async code
  await loadCacheFromDatabase()
})
```

### onListen

Triggered when the server starts listening for requests. The hooks run one
after another. If a hook function causes an error, it is logged and
ignored, allowing the queue of hooks to continue. Hook functions accept one
argument: a callback, `done`, to be invoked after the hook function is
complete. Hook functions are invoked with `this` bound to the associated
Fastify instance.

This is an alternative to `fastify.server.on('listening', () => {})`.

```js
// callback style
fastify.addHook('onListen', function (done) {
  // Some code
  const err = null;
  done(err)
})

// or async/await style
fastify.addHook('onListen', async function () {
  // Some async code
})
```

> ℹ️ Note:
> This hook will not run when the server is started using
> `fastify.inject()` or `fastify.ready()`.

### onClose
<a id="on-close"></a>

Triggered when `fastify.close()` is invoked to stop the server. By the time
`onClose` hooks execute, the HTTP server has already stopped listening, all
in-flight HTTP requests have been completed, and connections have been drained.
This makes `onClose` the safe place for [plugins](./Plugins.md) to release
resources such as database connection pools, as no new requests will
arrive.

The hook function takes the Fastify instance as a first argument,
and a `done` callback for synchronous hook functions.
```js
// callback style
fastify.addHook('onClose', (instance, done) => {
  // Some code
  done()
})

// or async/await style
fastify.addHook('onClose', async (instance) => {
  // Some async code
  await closeDatabaseConnections()
})
```

#### Execution order

When multiple `onClose` hooks are registered across plugins, child-plugin hooks
execute before parent-plugin hooks. This means a database plugin's `onClose`
hook will run before the root-level `onClose` hooks:

```js
fastify.register(function dbPlugin (instance, opts, done) {
  instance.addHook('onClose', async (instance) => {
    // Runs first — close the database pool
    await instance.db.close()
  })
  done()
})

fastify.addHook('onClose', async (instance) => {
  // Runs second — after child plugins have cleaned up
})
```

See [`close`](./Server.md#close) for the full shutdown lifecycle.

### preClose
<a id="pre-close"></a>

Triggered when `fastify.close()` is invoked to stop the server. At this
point the server is already rejecting new requests with `503` (when
[`return503OnClosing`](./Server.md#factory-return-503-on-closing) is `true`),
but the HTTP server has not yet stopped listening and in-flight requests are
still being processed.

It is useful when [plugins](./Plugins.md) have set up state attached to the HTTP
server that would prevent the server from closing, such as open WebSocket
connections or Server-Sent Events streams that must be explicitly terminated for
`server.close()` to complete.
_It is unlikely you will need to use this hook_,
use the [`onClose`](#onclose) for the most common case.

```js
// callback style
fastify.addHook('preClose', (done) => {
  // Some code
  done()
})

// or async/await style
fastify.addHook('preClose', async () => {
  // Some async code
  await removeSomeServerState()
})
```

For example, closing WebSocket connections during shutdown:

```js
fastify.addHook('preClose', async () => {
  // Close all WebSocket connections so that server.close() can complete.
  // Without this, open connections would keep the server alive.
  for (const ws of activeWebSockets) {
    ws.close(1001, 'Server shutting down')
  }
})
```

### onRoute
<a id="on-route"></a>

Triggered when a new route is registered. Listeners are passed a [`routeOptions`](./Routes.md#routes-options)
object as the sole parameter. The interface is synchronous, and, as such, the
listeners are not passed a callback. This hook is encapsulated.

```js
fastify.addHook('onRoute', (routeOptions) => {
  //Some code
  routeOptions.method
  routeOptions.schema
  routeOptions.url // the complete URL of the route, it will include the prefix if any
  routeOptions.path // `url` alias
  routeOptions.routePath // the URL of the route without the prefix
  routeOptions.bodyLimit
  routeOptions.logLevel
  routeOptions.logSerializers
  routeOptions.prefix
})
```

If you are authoring a plugin and you need to customize application routes, like
modifying the options or adding new route hooks, this is the right place.

```js
fastify.addHook('onRoute', (routeOptions) => {
  function onPreSerialization(request, reply, payload, done) {
    // Your code
    done(null, payload)
  }
  // preSerialization can be an array or undefined
  routeOptions.preSerialization = [...(routeOptions.preSerialization || []), onPreSerialization]
})
```

To add more routes within an onRoute hook, the routes must
be tagged correctly. The hook will run into an infinite loop if
not tagged. The recommended approach is shown below.

```js
const kRouteAlreadyProcessed = Symbol('route-already-processed')

fastify.addHook('onRoute', function (routeOptions) {
  const { url, method } = routeOptions

  const isAlreadyProcessed = (routeOptions.custom && routeOptions.custom[kRouteAlreadyProcessed]) || false

  if (!isAlreadyProcessed) {
    this.route({
      url,
      method,
      custom: {
        [kRouteAlreadyProcessed]: true
      },
      handler: () => {}
    })
  }
})
```

For more details, see this [issue](https://github.com/fastify/fastify/issues/4319).

### onRegister
<a id="on-register"></a>

Triggered when a new plugin is registered and a new encapsulation context is
created. The hook will be executed **before** the registered code.

This hook can be useful if you are developing a plugin that needs to know when a
plugin context is formed, and you want to operate in that specific context, thus
this hook is encapsulated.

> ℹ️ Note:
> This hook will not be called if a plugin is wrapped inside
> [`fastify-plugin`](https://github.com/fastify/fastify-plugin).
```js
fastify.decorate('data', [])

fastify.register(async (instance, opts) => {
  instance.data.push('hello')
  console.log(instance.data) // ['hello']

  instance.register(async (instance, opts) => {
    instance.data.push('world')
    console.log(instance.data) // ['hello', 'world']
  }, { prefix: '/hola' })
}, { prefix: '/ciao' })

fastify.register(async (instance, opts) => {
  console.log(instance.data) // []
}, { prefix: '/hello' })

fastify.addHook('onRegister', (instance, opts) => {
  // Create a new array from the old one
  // but without keeping the reference
  // allowing the user to have encapsulated
  // instances of the `data` property
  instance.data = instance.data.slice()

  // the options of the new registered instance
  console.log(opts.prefix)
})
```

## Scope
<a id="scope"></a>

Except for [onClose](#onclose), all hooks are encapsulated. This means that you
can decide where your hooks should run by using `register` as explained in the
[plugins guide](../Guides/Plugins-Guide.md). If you pass a function, that
function is bound to the right Fastify context and from there you have full
access to the Fastify API.

```js
fastify.addHook('onRequest', function (request, reply, done) {
  const self = this // Fastify context
  done()
})
```

Note that the Fastify context in each hook is the same as the plugin where the
route was registered, for example:

```js
fastify.addHook('onRequest', async function (req, reply) {
  if (req.raw.url === '/nested') {
    assert.strictEqual(this.foo, 'bar')
  } else {
    assert.strictEqual(this.foo, undefined)
  }
})

fastify.get('/', async function (req, reply) {
  assert.strictEqual(this.foo, undefined)
  return { hello: 'world' }
})

fastify.register(async function plugin (fastify, opts) {
  fastify.decorate('foo', 'bar')

  fastify.get('/nested', async function (req, reply) {
    assert.strictEqual(this.foo, 'bar')
    return { hello: 'world' }
  })
})
```

Warn: if you declare the function with an [arrow
function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
the `this` will not be Fastify, but the one of the current scope.


## Route level hooks
<a id="route-hooks"></a>

You can declare one or more custom lifecycle hooks ([onRequest](#onrequest),
[onResponse](#onresponse), [preParsing](#preparsing),
[preValidation](#prevalidation), [preHandler](#prehandler),
[preSerialization](#preserialization), [onSend](#onsend),
[onTimeout](#ontimeout), and [onError](#onerror)) hook(s) that will be
**unique** for the route. If you do so, those hooks are always executed as the
last hook in their category.

This can be useful if you need to implement authentication, where the
[preParsing](#preparsing) or [preValidation](#prevalidation) hooks are exactly
what you need. Multiple route-level hooks can also be specified as an array.

```js
fastify.addHook('onRequest', (request, reply, done) => {
  // Your code
  done()
})

fastify.addHook('onResponse', (request, reply, done) => {
  // your code
  done()
})

fastify.addHook('preParsing', (request, reply, done) => {
  // Your code
  done()
})

fastify.addHook('preValidation', (request, reply, done) => {
  // Your code
  done()
})

fastify.addHook('preHandler', (request, reply, done) => {
  // Your code
  done()
})

fastify.addHook('preSerialization', (request, reply, payload, done) => {
  // Your code
  done(null, payload)
})

fastify.addHook('onSend', (request, reply, payload, done) => {
  // Your code
  done(null, payload)
})

fastify.addHook('onTimeout', (request, reply, done) => {
  // Your code
  done()
})

fastify.addHook('onError', (request, reply, error, done) => {
  // Your code
  done()
})

fastify.route({
  method: 'GET',
  url: '/',
  schema: { ... },
  onRequest: function (request, reply, done) {
    // This hook will always be executed after the shared `onRequest` hooks
    done()
  },
  // // Example with an async hook. All hooks support this syntax
  //
  // onRequest: async function (request, reply) {
  //  // This hook will always be executed after the shared `onRequest` hooks
  //  await ...
  // }
  onResponse: function (request, reply, done) {
    // this hook will always be executed after the shared `onResponse` hooks
    done()
  },
  preParsing: function (request, reply, done) {
    // This hook will always be executed after the shared `preParsing` hooks
    done()
  },
  preValidation: function (request, reply, done) {
    // This hook will always be executed after the shared `preValidation` hooks
    done()
  },
  preHandler: function (request, reply, done) {
    // This hook will always be executed after the shared `preHandler` hooks
    done()
  },
  // // Example with an array. All hooks support this syntax.
  //
  // preHandler: [function (request, reply, done) {
  //   // This hook will always be executed after the shared `preHandler` hooks
  //   done()
  // }],
  preSerialization: (request, reply, payload, done) => {
    // This hook will always be executed after the shared `preSerialization` hooks
    done(null, payload)
  },
  onSend: (request, reply, payload, done) => {
    // This hook will always be executed after the shared `onSend` hooks
    done(null, payload)
  },
  onTimeout: (request, reply, done) => {
    // This hook will always be executed after the shared `onTimeout` hooks
    done()
  },
  onError: (request, reply, error, done) => {
    // This hook will always be executed after the shared `onError` hooks
    done()
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
})
```

> ℹ️ Note:
> Both options also accept an array of functions.

## Using Hooks to Inject Custom Properties
<a id="using-hooks-to-inject-custom-properties"></a>

You can use a hook to inject custom properties into incoming requests.
This is useful for reusing processed data from hooks in controllers.

A very common use case is, for example, checking user authentication based
on their token and then storing their recovered data into
the [Request](./Request.md) instance. This way, your controllers can read it
easily with `request.authenticatedUser` or whatever you want to call it.
That's how it might look like:

```js
fastify.addHook('preParsing', async (request) => {
  request.authenticatedUser = {
    id: 42,
    name: 'Jane Doe',
    role: 'admin'
  }
})

fastify.get('/me/is-admin', async function (req, reply) {
  return { isAdmin: req.authenticatedUser?.role === 'admin' || false }
})
```

Note that `.authenticatedUser` could actually be any property name
chosen by yourself. Using your own custom property prevents you
from mutating existing properties, which
would be a dangerous and destructive operation. So be careful and
make sure your property is entirely new, also using this approach
only for very specific and small cases like this example.

Regarding TypeScript in this example, you'd need to update the
`FastifyRequest` core interface to include your new property typing
(for more about it, see [TypeScript](./TypeScript.md) page), like:

```ts
interface AuthenticatedUser { /* ... */ }

declare module 'fastify' {
  export interface FastifyRequest {
    authenticatedUser?: AuthenticatedUser;
  }
}
```

Although this is a very pragmatic approach, if you're trying to do
something more complex that changes these core objects, then
consider creating a custom [Plugin](./Plugins.md) instead.

## Diagnostics Channel Hooks

One [`diagnostics_channel`](https://nodejs.org/api/diagnostics_channel.html)
publish event, `'fastify.initialization'`, happens at initialization time. The
Fastify instance is passed into the hook as a property of the object passed in.
At this point, the instance can be interacted with to add hooks, plugins,
routes, or any other sort of modification.

For example, a tracing package might do something like the following (which is,
of course, a simplification). This would be in a file loaded in the
initialization of the tracking package, in the typical "require instrumentation
tools first" fashion.

```js
const tracer = /* retrieved from elsewhere in the package */
const dc = require('node:diagnostics_channel')
const channel = dc.channel('fastify.initialization')
const spans = new WeakMap()

channel.subscribe(function ({ fastify }) {
  fastify.addHook('onRequest', (request, reply, done) => {
    const span = tracer.startSpan('fastify.request.handler')
    spans.set(request, span)
    done()
  })

  fastify.addHook('onResponse', (request, reply, done) => {
    const span = spans.get(request)
    span.finish()
    done()
  })
})
```

> ℹ️ Note:
> The TracingChannel class API is currently experimental and may undergo
> breaking changes even in semver-patch releases of Node.js.

Five other events are published on a per-request basis following the
[Tracing Channel](https://nodejs.org/api/diagnostics_channel.html#class-tracingchannel)
nomenclature. The list of the channel names and the event they receive is:

- `tracing:fastify.request.handler:start`: Always fires
  - `{ request: Request, reply: Reply, route: { url, method } }`
- `tracing:fastify.request.handler:end`: Always fires
  - `{ request: Request, reply: Reply, route: { url, method }, async: Bool }`
- `tracing:fastify.request.handler:asyncStart`: Fires for promise/async handlers
  - `{ request: Request, reply: Reply, route: { url, method } }`
- `tracing:fastify.request.handler:asyncEnd`: Fires for promise/async handlers
  - `{ request: Request, reply: Reply, route: { url, method } }`
- `tracing:fastify.request.handler:error`: Fires when an error occurs
  - `{ request: Request, reply: Reply, route: { url, method }, error: Error }`

The object instance remains the same for all events associated with a given
request. All payloads include a `request` and `reply` property which are an
instance of Fastify's `Request` and `Reply` instances. They also include a
`route` property which is an object with the matched `url` pattern (e.g.
`/collection/:id`) and the `method` HTTP method (e.g. `GET`). The `:start` and
`:end` events always fire for requests. If a request handler is an `async`
function or one that returns a `Promise` then the `:asyncStart` and `:asyncEnd`
events also fire. Finally, the `:error` event contains an `error` property
associated with the request's failure.

These events can be received like so:

```js
const dc = require('node:diagnostics_channel')
const channel = dc.channel('tracing:fastify.request.handler:start')
channel.subscribe((msg) => {
  console.log(msg.request, msg.reply)
})
```
