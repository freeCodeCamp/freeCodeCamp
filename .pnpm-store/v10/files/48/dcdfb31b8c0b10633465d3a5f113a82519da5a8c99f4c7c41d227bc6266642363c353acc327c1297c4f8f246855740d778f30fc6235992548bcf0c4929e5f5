<h1 align="center">Fastify</h1>

# Delay Accepting Requests

## Introduction

Fastify provides several [hooks](../Reference/Hooks.md) useful for a variety of
situations. One of them is the [`onReady`](../Reference/Hooks.md#onready) hook,
which is useful for executing tasks *right before* the server starts accepting
new requests. There isn't, though, a direct mechanism to handle scenarios in
which you'd like the server to start accepting **specific** requests and denying
all others, at least up to some point.

Say, for instance, your server needs to authenticate with an OAuth provider to
start serving requests. To do that it'd need to engage in the [OAuth
Authorization Code
Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow),
which would require it to listen to two requests from the authentication
provider:

1. the Authorization Code webhook
2. the tokens webhook

Until the authorization flow is done you wouldn't be able to serve customer
requests. What to do then?

There are several solutions for achieving that kind of behavior. Here we'll
introduce one of such techniques and, hopefully, you'll be able to get things
rolling asap!

## Solution

### Overview

The proposed solution is one of many possible ways of dealing with this scenario
and many similar to it. It relies solely on Fastify, so no fancy infrastructure
tricks or third-party libraries will be necessary.

To simplify things we won't be dealing with a precise OAuth flow but, instead,
simulate a scenario in which some key is needed to serve a request and that key
can only be retrieved in runtime by authenticating with an external provider.

The main goal here is to deny requests that would otherwise fail **as early as
possible** and with some **meaningful context**. That's both useful for the
server (fewer resources allocated to a bound-to-fail task) and for the client
(they get some meaningful information and don't need to wait long for it).

That will be achieved by wrapping into a custom plugin two main features:

1. the mechanism for authenticating with the provider
[decorating](../Reference/Decorators.md) the `fastify` object with the
authentication key (`magicKey` from here onward)
1. the mechanism for denying requests that would, otherwise, fail

### Hands-on

For this sample solution we'll be using the following:

- `node.js v16.14.2`
- `npm 8.5.0`
- `fastify 4.0.0-rc.1`
- `fastify-plugin 3.0.1`
- `undici 5.0.0`

Say we have the following base server set up at first:

```js
const Fastify = require('fastify')

const provider = require('./provider')

const server = Fastify({ logger: true })
const USUAL_WAIT_TIME_MS = 5000

server.get('/ping', function (request, reply) {
  reply.send({ error: false, ready: request.server.magicKey !== null })
})

server.post('/webhook', function (request, reply) {
  // It's good practice to validate webhook requests come from
  // who you expect. This is skipped in this sample for the sake
  // of simplicity

  const { magicKey } = request.body
  request.server.magicKey = magicKey
  request.log.info('Ready for customer requests!')

  reply.send({ error: false })
})

server.get('/v1*', async function (request, reply) {
  try {
    const data = await provider.fetchSensitiveData(request.server.magicKey)
    return { customer: true, error: false }
  } catch (error) {
    request.log.error({
      error,
      message: 'Failed at fetching sensitive data from provider',
    })

    reply.statusCode = 500
    return { customer: null, error: true }
  }
})

server.decorate('magicKey')

server.listen({ port: '1234' }, () => {
  provider.thirdPartyMagicKeyGenerator(USUAL_WAIT_TIME_MS)
    .catch((error) => {
      server.log.error({
        error,
        message: 'Got an error while trying to get the magic key!'
      })

      // Since we won't be able to serve requests, might as well wrap
      // things up
      server.close(() => process.exit(1))
    })
})
```

Our code is simply setting up a Fastify server with a few routes:

- a `/ping` route that specifies whether the service is ready or not to serve
requests by checking if the `magicKey` has been set up
- a `/webhook` endpoint for our provider to reach back to us when they're ready
to share the `magicKey`. The `magicKey` is, then, saved into the previously set
decorator on the `fastify` object
- a catchall `/v1*` route to simulate what would have been customer-initiated
requests. These requests rely on us having a valid `magicKey`

The `provider.js` file, simulating actions of an external provider, is as
follows:

```js
const { fetch } = require('undici')
const { setTimeout } = require('node:timers/promises')

const MAGIC_KEY = '12345'

const delay = setTimeout

exports.thirdPartyMagicKeyGenerator = async (ms) => {
  // Simulate processing delay
  await delay(ms)

  // Simulate webhook request to our server
  const { status } = await fetch(
    'http://localhost:1234/webhook',
    {
      body: JSON.stringify({ magicKey: MAGIC_KEY }),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    },
  )

  if (status !== 200) {
    throw new Error('Failed to fetch magic key')
  }
}

exports.fetchSensitiveData = async (key) => {
  // Simulate processing delay
  await delay(700)
  const data = { sensitive: true }

  if (key === MAGIC_KEY) {
    return data
  }

  throw new Error('Invalid key')
}
```

The most important snippet here is the `thirdPartyMagicKeyGenerator` function,
which will wait for 5 seconds and, then, make the POST request to our `/webhook`
endpoint.

When our server spins up we start listening to new connections without having
our `magicKey` set up. Until we receive the webhook request from our external
provider (in this example we're simulating a 5 second delay) all our requests
under the `/v1*` path (customer requests) will fail. Worse than that: they'll
fail after we've reached out to our provider with an invalid key and got an
error from them. That wasted time and resources for us and our customers.
Depending on the kind of application we're running and on the request rate we're
expecting this delay is not acceptable or, at least, very annoying.

Of course, that could be simply mitigated by checking whether or not the
`magicKey` has been set up before hitting the provider in the `/v1*` handler.
Sure, but that would lead to bloat in the code. And imagine we have dozens of
different routes, with different controllers, that require that key. Should we
repeatedly add that check to all of them? That's error-prone and there are more
elegant solutions.

What we'll do to improve this setup overall is create a
[`Plugin`](../Reference/Plugins.md) that'll be solely responsible for making
sure we both:

- do not accept requests that would otherwise fail until we're ready for them
- make sure we reach out to our provider as soon as possible

This way we'll make sure all our setup regarding this specific _business rule_
is placed on a single entity, instead of scattered all across our code base.

With the changes to improve this behavior, the code will look like this:

##### index.js

```js
const Fastify = require('fastify')

const customerRoutes = require('./customer-routes')
const { setup, delay } = require('./delay-incoming-requests')

const server = new Fastify({ logger: true })

server.register(setup)

// Non-blocked URL
server.get('/ping', function (request, reply) {
  reply.send({ error: false, ready: request.server.magicKey !== null })
})

// Webhook to handle the provider's response - also non-blocked
server.post('/webhook', function (request, reply) {
  // It's good practice to validate webhook requests really come from
  // whoever you expect. This is skipped in this sample for the sake
  // of simplicity

  const { magicKey } = request.body
  request.server.magicKey = magicKey
  request.log.info('Ready for customer requests!')

  reply.send({ error: false })
})

// Blocked URLs
// Mind we're building a new plugin by calling the `delay` factory with our
// customerRoutes plugin
server.register(delay(customerRoutes), { prefix: '/v1' })

server.listen({ port: '1234' })
```

##### provider.js

```js
const { fetch } = require('undici')
const { setTimeout } = require('node:timers/promises')

const MAGIC_KEY = '12345'

const delay = setTimeout

exports.thirdPartyMagicKeyGenerator = async (ms) => {
  // Simulate processing delay
  await delay(ms)

  // Simulate webhook request to our server
  const { status } = await fetch(
    'http://localhost:1234/webhook',
    {
      body: JSON.stringify({ magicKey: MAGIC_KEY }),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    },
  )

  if (status !== 200) {
    throw new Error('Failed to fetch magic key')
  }
}

exports.fetchSensitiveData = async (key) => {
  // Simulate processing delay
  await delay(700)
  const data = { sensitive: true }

  if (key === MAGIC_KEY) {
    return data
  }

  throw new Error('Invalid key')
}
```

##### delay-incoming-requests.js

```js
const fp = require('fastify-plugin')

const provider = require('./provider')

const USUAL_WAIT_TIME_MS = 5000

async function setup(fastify) {
  // As soon as we're listening for requests, let's work our magic
  fastify.server.on('listening', doMagic)

  // Set up the placeholder for the magicKey
  fastify.decorate('magicKey')

  // Our magic -- important to make sure errors are handled. Beware of async
  // functions outside `try/catch` blocks
  // If an error is thrown at this point and not captured it'll crash the
  // application
  function doMagic() {
    fastify.log.info('Doing magic!')

    provider.thirdPartyMagicKeyGenerator(USUAL_WAIT_TIME_MS)
      .catch((error) => {
        fastify.log.error({
          error,
          message: 'Got an error while trying to get the magic key!'
        })

        // Since we won't be able to serve requests, might as well wrap
        // things up
        fastify.close(() => process.exit(1))
      })
  }
}

const delay = (routes) =>
  function (fastify, opts, done) {
    // Make sure customer requests won't be accepted if the magicKey is not
    // available
    fastify.addHook('onRequest', function (request, reply, next) {
      if (!request.server.magicKey) {
        reply.statusCode = 503
        reply.header('Retry-After', USUAL_WAIT_TIME_MS)
        reply.send({ error: true, retryInMs: USUAL_WAIT_TIME_MS })
      }

      next()
    })

    // Register to-be-delayed routes
    fastify.register(routes, opts)

    done()
  }

module.exports = {
  setup: fp(setup),
  delay,
}
```

##### customer-routes.js

```js
const fp = require('fastify-plugin')

const provider = require('./provider')

module.exports = fp(async function (fastify) {
  fastify.get('*', async function (request ,reply) {
    try {
      const data = await provider.fetchSensitiveData(request.server.magicKey)
      return { customer: true, error: false }
    } catch (error) {
      request.log.error({
        error,
        message: 'Failed at fetching sensitive data from provider',
      })

      reply.statusCode = 500
      return { customer: null, error: true }
    }
  })
})
```

There is a very specific change on the previously existing files that is worth
mentioning: Beforehand we were using the `server.listen` callback to start the
authentication process with the external provider and we were decorating the
`server` object right before initializing the server. That was bloating our
server initialization setup with unnecessary code and didn't have much to do
with starting the Fastify server. It was a business logic that didn't have its
specific place in the code base.

Now we've implemented the `delayIncomingRequests` plugin in the
`delay-incoming-requests.js` file. That's, in truth, a module split into two
different plugins that will build up to a single use-case. That's the brains of
our operation. Let's walk through what the plugins do:

##### setup

The `setup` plugin is responsible for making sure we reach out to our provider
asap and store the `magicKey` somewhere available to all our handlers.

```js
  fastify.server.on('listening', doMagic)
```

As soon as the server starts listening (very similar behavior to adding a piece
of code to the `server.listen`'s callback function) a `listening` event is
emitted (for more info refer to
https://nodejs.org/api/net.html#event-listening). We use that to reach out to
our provider as soon as possible, with the `doMagic` function.

```js
  fastify.decorate('magicKey')
```

The `magicKey` decoration is also part of the plugin now. We initialize it with
a placeholder, waiting for the valid value to be retrieved.

##### delay

`delay` is not a plugin itself. It's actually a plugin *factory*. It expects a
Fastify plugin with `routes` and exports the actual plugin that'll handle
enveloping those routes with an `onRequest` hook that will make sure no requests
are handled until we're ready for them.

```js
const delay = (routes) =>
  function (fastify, opts, done) {
    // Make sure customer requests won't be accepted if the magicKey is not
    // available
    fastify.addHook('onRequest', function (request, reply, next) {
      if (!request.server.magicKey) {
        reply.statusCode = 503
        reply.header('Retry-After', USUAL_WAIT_TIME_MS)
        reply.send({ error: true, retryInMs: USUAL_WAIT_TIME_MS })
      }

      next()
    })

    // Register to-be-delayed routes
    fastify.register(routes, opts)

    done()
  }
```

Instead of updating every single controller that might use the `magicKey`, we
simply make sure that no route that's related to customer requests will be
served until we have everything ready. And there's more: we fail **FAST** and
have the possibility of giving the customer meaningful information, like how
long they should wait before retrying the request. Going even further, by
issuing a [`503` status
code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) we're
signaling to our infrastructure components (namely load balancers) that we're
still not ready to take incoming requests and they should redirect traffic to
other instances, if available. Additionally, we are providing a `Retry-After`
header with the time in milliseconds the client should wait before retrying.

It's noteworthy that we didn't use the `fastify-plugin` wrapper in the `delay`
factory. That's because we wanted the `onRequest` hook to only be set within
that specific scope and not to the scope that called it (in our case, the main
`server` object defined in `index.js`). `fastify-plugin` sets the
`skip-override` hidden property, which has a practical effect of making whatever
changes we make to our `fastify` object available to the upper scope. That's
also why we used it with the `customerRoutes` plugin: we wanted those routes to
be available to its calling scope, the `delay` plugin. For more info on that
subject refer to [Plugins](../Reference/Plugins.md#handle-the-scope).

Let's see how that behaves in action. If we fired our server up with `node
index.js` and made a few requests to test things out. These were the logs we'd
see (some bloat was removed to ease things up):

<!-- markdownlint-disable -->
```sh
{"time":1650063793316,"msg":"Doing magic!"}
{"time":1650063793316,"msg":"Server listening at http://127.0.0.1:1234"}
{"time":1650063795030,"reqId":"req-1","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51928},"msg":"incoming request"}
{"time":1650063795033,"reqId":"req-1","res":{"statusCode":503},"responseTime":2.5721680000424385,"msg":"request completed"}
{"time":1650063796248,"reqId":"req-2","req":{"method":"GET","url":"/ping","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51930},"msg":"incoming request"}
{"time":1650063796248,"reqId":"req-2","res":{"statusCode":200},"responseTime":0.4802369996905327,"msg":"request completed"}
{"time":1650063798377,"reqId":"req-3","req":{"method":"POST","url":"/webhook","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51932},"msg":"incoming request"}
{"time":1650063798379,"reqId":"req-3","msg":"Ready for customer requests!"}
{"time":1650063798379,"reqId":"req-3","res":{"statusCode":200},"responseTime":1.3567829988896847,"msg":"request completed"}
{"time":1650063799858,"reqId":"req-4","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51934},"msg":"incoming request"}
{"time":1650063800561,"reqId":"req-4","res":{"statusCode":200},"responseTime":702.4662979990244,"msg":"request completed"}
```
<!-- markdownlint-enable -->

Let's focus on a few parts:

```sh
{"time":1650063793316,"msg":"Doing magic!"}
{"time":1650063793316,"msg":"Server listening at http://127.0.0.1:1234"}
```

These are the initial logs we'd see as soon as the server started. We reach out
to the external provider as early as possible within a valid time window (we
couldn't do that before the server was ready to receive connections).

While the server is still not ready, a few requests are attempted:

<!-- markdownlint-disable -->
```sh
{"time":1650063795030,"reqId":"req-1","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51928},"msg":"incoming request"}
{"time":1650063795033,"reqId":"req-1","res":{"statusCode":503},"responseTime":2.5721680000424385,"msg":"request completed"}
{"time":1650063796248,"reqId":"req-2","req":{"method":"GET","url":"/ping","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51930},"msg":"incoming request"}
{"time":1650063796248,"reqId":"req-2","res":{"statusCode":200},"responseTime":0.4802369996905327,"msg":"request completed"}
```
<!-- markdownlint-enable -->

The first one (`req-1`) was a `GET /v1`, that failed (**FAST** - `responseTime`
is in `ms`) with our `503` status code and the meaningful information in the
response. Below is the response for that request:

```sh
HTTP/1.1 503 Service Unavailable
Connection: keep-alive
Content-Length: 31
Content-Type: application/json; charset=utf-8
Date: Fri, 15 Apr 2022 23:03:15 GMT
Keep-Alive: timeout=5
Retry-After: 5000

{
    "error": true,
    "retryInMs": 5000
}
```

Then we attempted a new request (`req-2`), which was a `GET /ping`. As expected,
since that was not one of the requests we asked our plugin to filter, it
succeeded. That could also be used as a means of informing an interested party
whether or not we were ready to serve requests with the `ready` field. Although
`/ping` is more commonly associated with *liveness* checks and that would be
the responsibility of a *readiness* check. The curious reader can get more info
on these terms in the article
["Kubernetes best practices: Setting up health checks with readiness and liveness probes"](
https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes).

Below is the response to that request:

```sh
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 29
Content-Type: application/json; charset=utf-8
Date: Fri, 15 Apr 2022 23:03:16 GMT
Keep-Alive: timeout=5

{
    "error": false,
    "ready": false
}
```

After that, there were more interesting log messages:

<!-- markdownlint-disable -->
```sh
{"time":1650063798377,"reqId":"req-3","req":{"method":"POST","url":"/webhook","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51932},"msg":"incoming request"}
{"time":1650063798379,"reqId":"req-3","msg":"Ready for customer requests!"}
{"time":1650063798379,"reqId":"req-3","res":{"statusCode":200},"responseTime":1.3567829988896847,"msg":"request completed"}
```
<!-- markdownlint-enable -->

This time it was our simulated external provider hitting us to let us know
authentication had gone well and telling us what our `magicKey` was. We saved
that into our `magicKey` decorator and celebrated with a log message saying we
were now ready for customers to hit us!

<!-- markdownlint-disable -->
```sh
{"time":1650063799858,"reqId":"req-4","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51934},"msg":"incoming request"}
{"time":1650063800561,"reqId":"req-4","res":{"statusCode":200},"responseTime":702.4662979990244,"msg":"request completed"}
```
<!-- markdownlint-enable -->

Finally, a final `GET /v1` request was made and, this time, it succeeded. Its
response was the following:

```sh
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 31
Content-Type: application/json; charset=utf-8
Date: Fri, 15 Apr 2022 23:03:20 GMT
Keep-Alive: timeout=5

{
    "customer": true,
    "error": false
}
```

## Conclusion

Specifics of the implementation will vary from one problem to another, but the
main goal of this guide was to show a very specific use case of an issue that
could be solved within Fastify's ecosystem.

This guide is a tutorial on the use of plugins, decorators, and hooks to solve
the problem of delaying serving specific requests on our application. It's not
production-ready, as it keeps local state (the `magicKey`) and it's not
horizontally scalable (we don't want to flood our provider, right?). One way of
improving it would be storing the `magicKey` somewhere else (perhaps a cache
database?).

The keywords here were [Decorators](../Reference/Decorators.md),
[Hooks](../Reference/Hooks.md), and [Plugins](../Reference/Plugins.md).
Combining what Fastify has to offer can lead to very ingenious and creative
solutions to a wide variety of problems. Let's be creative! :)
