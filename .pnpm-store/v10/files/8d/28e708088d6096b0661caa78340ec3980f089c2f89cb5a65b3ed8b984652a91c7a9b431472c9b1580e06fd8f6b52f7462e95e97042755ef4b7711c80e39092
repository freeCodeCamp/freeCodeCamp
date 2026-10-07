<h1 align="center">Fastify</h1>

# Detecting When Clients Abort

## Introduction

Fastify provides request events to trigger at certain points in a request's
lifecycle. However, there isn't a built-in mechanism to
detect unintentional client disconnection scenarios such as when the client's
internet connection is interrupted. This guide covers methods to detect if
and when a client intentionally aborts a request.

Keep in mind, Fastify's `clientErrorHandler` is not designed to detect when a
client aborts a request. This works in the same way as the standard Node HTTP
module, which triggers the `clientError` event when there is a bad request or
exceedingly large header data. When a client aborts a request, there is no
error on the socket and the `clientErrorHandler` will not be triggered.

## Solution

### Overview

The proposed solution is a possible way of detecting when a client
intentionally aborts a request, such as when a browser is closed or the HTTP
request is aborted from your client application. If there is an error in your
application code that results in the server crashing, you may require
additional logic to avoid a false abort detection.

The goal here is to detect when a client intentionally aborts a connection
so your application logic can proceed accordingly. This can be useful for
logging purposes or halting business logic.

### Hands-on

Say we have the following base server set up:

```js
import Fastify from 'fastify';

const sleep = async (time) => {
  return await new Promise(resolve => setTimeout(resolve, time || 1000));
}

const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
})

app.addHook('onRequest', async (request, reply) => {
  request.raw.on('close', () => {
    if (request.raw.aborted) {
      app.log.info('request closed')
    }
  })
})

app.get('/', async (request, reply) => {
  await sleep(3000)
  reply.code(200).send({ ok: true })
})

const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
```

Our code is setting up a Fastify server which includes the following
functionality:

- Accepting requests at `http://localhost:3000`, with a 3 second delayed response
of `{ ok: true }`.
- An onRequest hook that triggers when every request is received.
- Logic that triggers in the hook when the request is closed.
- Logging that occurs when the closed request property `aborted` is true.

Whilst the `aborted` property has been deprecated, `destroyed` is not a
suitable replacement as the
[Node.js documentation suggests](https://nodejs.org/api/http.html#requestaborted).
A request can be `destroyed` for various reasons, such as when the server closes
the connection. The `aborted` property is still the most reliable way to detect
when a client intentionally aborts a request.

You can also perform this logic outside of a hook, directly in a specific route.

```js
app.get('/', async (request, reply) => {
  request.raw.on('close', () => {
    if (request.raw.aborted) {
      app.log.info('request closed')
    }
  })
  await sleep(3000)
  reply.code(200).send({ ok: true })
})
```

At any point in your business logic, you can check if the request has been
aborted and perform alternative actions.

```js
app.get('/', async (request, reply) => {
  await sleep(3000)
  if (request.raw.aborted) {
    // do something here
  }
  await sleep(3000)
  reply.code(200).send({ ok: true })
})
```

A benefit to adding this in your application code is that you can log Fastify
details such as the reqId, which may be unavailable in lower-level code that
only has access to the raw request information.

### Testing

To test this functionality you can use an app like Postman and cancel your
request within 3 seconds. Alternatively, you can use Node to send an HTTP
request with logic to abort the request before 3 seconds. Example:

```js
const controller = new AbortController();
const signal = controller.signal;

(async () => {
   try {
      const response = await fetch('http://localhost:3000', { signal });
      const body = await response.text();
      console.log(body);
   } catch (error) {
      console.error(error);
   }
})();

setTimeout(() => {
   controller.abort()
}, 1000);
```

With either approach, you should see the Fastify log appear at the moment the
request is aborted.

## Conclusion

Specifics of the implementation will vary from one problem to another, but the
main goal of this guide was to show a very specific use case of an issue that
could be solved within Fastify's ecosystem.

You can listen to the request close event and determine if the request was
aborted or if it was successfully delivered. You can implement this solution
in an onRequest hook or directly in an individual route.

This approach will not trigger in the event of internet disruption, and such
detection would require additional business logic. If you have flawed backend
application logic that results in a server crash, then you could trigger a
false detection. The `clientErrorHandler`, either by default or with custom
logic, is not intended to handle this scenario and will not trigger when the
client aborts a request.
