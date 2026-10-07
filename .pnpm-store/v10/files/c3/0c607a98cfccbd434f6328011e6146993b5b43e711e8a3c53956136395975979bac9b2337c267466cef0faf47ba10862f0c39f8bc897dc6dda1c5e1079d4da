[![Latest version](https://img.shields.io/npm/v/@mswjs/interceptors.svg)](https://www.npmjs.com/package/@mswjs/interceptors)

# `@mswjs/interceptors`

Low-level network interception library.

This library supports intercepting the following protocols:

- HTTP (via the `http` module, `XMLHttpRequest`, or `globalThis.fetch`);
- [WebSocket](#websocket-interception) (the `WebSocket` class in Undici and in the browser).

## Motivation

While there are a lot of network mocking libraries, they tend to use request interception as an implementation detail, giving you a high-level API that includes request matching, timeouts, recording, and so forth.

This library is a barebones implementation that provides as little abstraction as possible to execute arbitrary logic upon any request. It's primarily designed as an underlying component for high-level API mocking solutions such as [Mock Service Worker](https://github.com/mswjs/msw).

### How is this library different?

A traditional API mocking implementation in Node.js looks roughly like this:

```js
import http from 'node:http'

// Store the original request function.
const originalHttpRequest = http.request

// Override the request function entirely.
http.request = function (...args) {
  // Decide if the outgoing request matches a predicate.
  if (predicate(args)) {
    // If it does, never create a request, respond to it
    // using the mocked response from this blackbox.
    return coerceToResponse.bind(this, mock)
  }

  // Otherwise, construct the original request
  // and perform it as-is.
  return originalHttpRequest(...args)
}
```

The core philosophy of Interceptors is to _run as much of the underlying network code as possible_. Strange for a network mocking library, isn't it? Turns out, respecting the system's integrity and executing more of the network code leads to more resilient tests and also helps to uncover bugs in the code that would otherwise go unnoticed.

Interceptors heavily rely on _class extension_ instead of function and module overrides. By extending the native network code, it can surgically insert the interception and mocking pieces only where necessary, leaving the rest of the system intact.

```js
class XMLHttpRequestProxy extends XMLHttpRequest {
  async send() {
    // Call the request listeners and see if any of them
    // returns a mocked response for this request.
    const mockedResponse = await waitForRequestListeners({ request })

    // If there is a mocked response, use it. This actually
    // transitions the XMLHttpRequest instance into the correct
    // response state (below is a simplified illustration).
    if (mockedResponse) {
      // Handle the response headers.
      this.request.status = mockedResponse.status
      this.request.statusText = mockedResponse.statusText
      this.request.responseUrl = mockedResponse.url
      this.readyState = 2
      this.trigger('readystatechange')

      // Start streaming the response body.
      this.trigger('loadstart')
      this.readyState = 3
      this.trigger('readystatechange')
      await streamResponseBody(mockedResponse)

      // Finish the response.
      this.trigger('load')
      this.trigger('loadend')
      this.readyState = 4
      return
    }

    // Otherwise, perform the original "XMLHttpRequest.prototype.send" call.
    return super.send(...args)
  }
}
```

> The request interception algorithms differ dramatically based on the request API. Interceptors accommodate for them all, bringing the intercepted requests to a common ground—the Fetch API `Request` instance. The same applies for responses, where a Fetch API `Response` instance is translated to the appropriate response format.

This library aims to provide _full specification compliance_ with the APIs and protocols it extends.

## What this library does

This library extends the following native modules:

- `http.get`/`http.request`
- `https.get`/`https.request`
- `XMLHttpRequest`
- `fetch`
- `WebSocket`

Once extended, it intercepts and normalizes all requests to the Fetch API `Request` instances. This way, no matter the request source (`http.ClientRequest`, `XMLHttpRequest`, `window.Request`, etc), you always get a specification-compliant request instance to work with.

You can respond to the intercepted HTTP request by constructing a Fetch API Response instance. Instead of designing custom abstractions, this library respects the Fetch API specification and takes the responsibility to coerce a single response declaration to the appropriate response formats based on the request-issuing modules (like `http.OutgoingMessage` to respond to `http.ClientRequest`, or updating `XMLHttpRequest` response-related properties).

## What this library doesn't do

- Does **not** provide any request matching logic;
- Does **not** handle requests by default.

## Limitations

- Interceptors will hang indefinitely if you call `req.end()` in the `connect` event listener of the respective `socket`:

```ts
req.on('socket', (socket) => {
  socket.on('connect', () => {
    // ❌ While this is allowed in Node.js, this cannot be handled in Interceptors.
    req.end()
  })
})
```

> This limitation is intrinsic to the interception algorithm used by the library. In order for it to emit the `connect` event on the socket, the library must know if you've handled the request in any way (e.g. responded with a mocked response or errored it). For that, it emits the `request` event on the interceptor where you can handle the request. Since you can consume the request stream in the `request` event, it waits until the request body stream is complete (i.e. until `req.end()` is called). This creates a catch 22 that causes this limitation.

## Getting started

```bash
npm install @mswjs/interceptors
```

## Interceptors

To use this library you need to choose one or multiple interceptors to apply. There are different interceptors exported by this library to spy on respective request-issuing modules:

- `ClientRequestInterceptor` to spy on `http.ClientRequest` (`http.get`/`http.request`);
- `XMLHttpRequestInterceptor` to spy on `XMLHttpRequest`;
- `FetchInterceptor` to spy on `fetch`.

Use an interceptor by constructing it and attaching request/response listeners:

```js
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest'

const interceptor = new ClientRequestInterceptor()

// Enable the interception of requests.
interceptor.apply()

// Listen to any "http.ClientRequest" being dispatched,
// and log its method and full URL.
interceptor.on('request', ({ request, requestId }) => {
  console.log(request.method, request.url)
})

// Listen to any responses sent to "http.ClientRequest".
// Note that this listener is read-only and cannot affect responses.
interceptor.on(
  'response',
  ({ response, isMockedResponse, request, requestId }) => {
    console.log('response to %s %s was:', request.method, request.url, response)
  }
)
```

All HTTP request interceptors implement the same events:

- `request`, emitted whenever a request has been dispatched;
- `response`, emitted whenever any request receives a response.

### Using multiple interceptors

You can combine multiple interceptors to capture requests from different request-issuing modules at once.

```js
import { BatchInterceptor } from '@mswjs/interceptors'
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest'
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest'

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: [
    new ClientRequestInterceptor(),
    new XMLHttpRequestInterceptor(),
  ],
})

interceptor.apply()

// This "request" listener will be called on both
// "http.ClientRequest" and "XMLHttpRequest" being dispatched.
interceptor.on('request', listener)
```

> Note that you can use [pre-defined presets](#presets) that cover all the request sources for a given environment type.

## Presets

When using [`BatchInterceptor`](#batchinterceptor), you can provide a pre-defined preset to its "interceptors" option to capture all request for that environment.

### Node.js preset

This preset combines `ClientRequestInterceptor`, `XMLHttpRequestInterceptor` and is meant to be used in Node.js.

```js
import { BatchInterceptor } from '@mswjs/interceptors'
import nodeInterceptors from '@mswjs/interceptors/presets/node'

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: nodeInterceptors,
})

interceptor.apply()

interceptor.on('request', listener)
```

### Browser preset

This preset combines `XMLHttpRequestInterceptor` and `FetchInterceptor` and is meant to be used in a browser.

```js
import { BatchInterceptor } from '@mswjs/interceptors'
import browserInterceptors from '@mswjs/interceptors/presets/browser'

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: browserInterceptors,
})

interceptor.on('request', listener)
```

## Introspecting requests

All HTTP request interceptors emit a "request" event. In the listener to this event, they expose a `request` reference, which is a [Fetch API Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) instance.

> There are many ways to describe a request in Node.js but this library coerces different request definitions to a single specification-compliant `Request` instance to make the handling consistent.

```js
interceptor.on('request', ({ request, requestId, controller }) => {
  console.log(request.method, request.url)
})
```

Since the exposed `request` instance implements the Fetch API specification, you can operate with it just as you do with the regular browser request. For example, this is how you would read the request body as JSON:

```js
interceptor.on('request', async ({ request, requestId }) => {
  const json = await request.clone().json()
})
```

> **Do not forget to clone the request before reading its body!**

## Modifying requests

Request representations are readonly. You can, however, mutate the intercepted request's headers in the "request" listener:

```js
interceptor.on('request', ({ request }) => {
  request.headers.set('X-My-Header', 'true')
})
```

> This restriction is done so that the library wouldn't have to unnecessarily synchronize the actual request instance and its Fetch API request representation. As of now, this library is not meant to be used as a full-scale proxy.

## Mocking responses

Although this library can be used purely for request introspection purposes, you can also affect request resolution by responding to any intercepted request within the "request" event.

Access the `controller` object from the request event listener arguments and call its `controller.respondWith()` method, providing it with a mocked `Response` instance:

```js
interceptor.on('request', ({ request, controller }) => {
  controller.respondWith(
    new Response(
      JSON.stringify({
        firstName: 'John',
        lastName: 'Maverick',
      }),
      {
        status: 201,
        statusText: 'Created',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  )
})
```

> We use Fetch API `Response` class as the middle-ground for mocked response definition. This library then coerces the response instance to the appropriate response format (e.g. to `http.OutgoingMessage` in the case of `http.ClientRequest`).

**The `Response` class is built-in in since Node.js 18. Use a Fetch API-compatible polyfill, like `node-fetch`, for older versions of Node.js.`**

Note that a single request _can only be handled once_. You may want to introduce conditional logic, like routing, in your request listener but it's generally advised to use a higher-level library like [Mock Service Worker](https://github.com/mswjs/msw) that does request matching for you.

Requests must be responded to within the same tick as the request listener. This means you cannot respond to a request using `setTimeout`, as this will delegate the callback to the next tick. If you wish to introduce asynchronous side-effects in the listener, consider making it an `async` function, awaiting any side-effects you need.

```js
// Respond to all requests with a 500 response
// delayed by 500ms.
interceptor.on('request', async ({ controller }) => {
  await sleep(500)
  controller.respondWith(new Response(null, { status: 500 }))
})
```

### Mocking response errors

You can provide an instance of `Response.error()` to error the pending request.

```js
interceptor.on('request', ({ request, controller }) => {
  controller.respondWith(Response.error())
})
```

This will automatically translate to the appropriate request error based on the request client that issued the request. **Use this method to produce a generic network error**.

> Note that the standard `Response.error()` API does not accept an error message.

## Mocking errors

Use the `controller.errorWith()` method to error the request.

```js
interceptor.on('request', ({ request, controller }) => {
  controller.errorWith(new Error('reason'))
})
```

Unlike responding with `Response.error()`, you can provide an exact error reason to use to `.errorWith()`. **Use this method to error the request**.

> Note that it is up to the request client to respect your custom error. Some clients, like `ClientRequest` will use the provided error message, while others, like `fetch`, will produce a generic `TypeError: failed to fetch` responses. Interceptors will try to preserve the original error in the `cause` property of such generic errors.

## Observing responses

You can use the "response" event to transparently observe any incoming responses in your Node.js process.

```js
interceptor.on(
  'response',
  ({ response, isMockedResponse, request, requestId }) => {
    // react to the incoming response...
  }
)
```

> Note that the `isMockedResponse` property will only be set to `true` if you resolved this request in the "request" event listener using the `controller.respondWith()` method and providing a mocked `Response` instance.

## Error handling

By default, all unhandled exceptions thrown within the `request` listener are coerced to 500 error responses, emulating those exceptions occurring on the actual server. You can listen to the exceptions by adding the `unhandledException` listener to the interceptor:

```js
interceptor.on(
  'unhandledException',
  ({ error, request, requestId, controller }) => {
    console.log(error)
  }
)
```

To opt out from the default coercion of unhandled exceptions to server responses, you need to either:

1. Respond to the request with [a mocked response](#mocking-responses) (including error responses);
1. Propagate the error up by throwing it explicitly in the `unhandledException` listener.

Here's an example of propagating the unhandled exception up:

```js
interceptor.on('unhandledException', ({ error }) => {
  // Now, any unhandled exception will NOT be coerced to a 500 error response,
  // and instead will be thrown during the process execution as-is.
  throw error
})
```

## WebSocket interception

You can intercept a WebSocket communication using the `WebSocketInterceptor` class.

> [!IMPORTANT]
> This library only supports intercepting WebSocket connections created using the global WHATWG `WebSocket` class. Third-party transports, such as HTTP/XHR polling, are not supported by design due to their contrived nature.

```js
import { WebSocketInterceptor } from '@mswjs/interceptors/WebSocket'

const interceptor = new WebSocketInterceptor()
```

Unlike the HTTP-based interceptors that share the same `request`/`response` events, the WebSocket interceptor only emits the `connection` event and let's you handle the incoming/outgoing events in its listener.

### Important defaults

1. Intercepted WebSocket connections are _not opened_. To open the actual WebSocket connection, call [`server.connect()`](#connect) in the interceptor.
1. Once connected to the actual server, the outgoing client events are _forwarded to that server by default_. If you wish to prevent a client message from reaching the server, call `event.preventDefault()` for that client message event.
1. Once connected to the actual server, the incoming server events are _forwarded to the client by default_. If you wish to prevent a server message from reaching the client, call `event.preventDefault()` for the server message event.
1. Once connected to the actual server, the `close` event received from that server is _forwarded to the client by default_. If you wish to prevent that, call `event.preventDefault()` for that close event of the server.

### WebSocket connection

Whenever a WebSocket instance is constructed, the `connection` event is emitted on the WebSocket interceptor.

```js
intereceptor.on('connection', ({ client }) => {
  console.log(client.url)
})
```

The `connection` event exposes the following arguments:

| Name     | Type                                                      | Description                                                                         |
| -------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `client` | [`WebSocketClientConnection`](#websocketclientconnection) | An object representing a connected WebSocket client instance.                       |
| `server` | [`WebSocketServerConnection`](#websocketserverconnection) | An object representing the original WebSocket server connection.                    |
| `info`   | `object`                                                  | Additional WebSocket connection information (like the original client `protocols`). |

### `WebSocketClientConnection`

#### `.addEventListener(type, listener)`

- `type`, `string`
- `listener`, `EventListener`

Adds an event listener to the given event type of the WebSocket client.

```ts
interface WebSocketServerConnectionEventMap {
  // Dispatched when the WebSocket client sends data.
  message: (this: WebSocket, event: MessageEvent<WebSocketData>) => void

  // Dispatched when the WebSocket client is closed.
  close: (this: WebSocket, event: CloseEvent) => void
}
```

```js
client.addEventListener('message', (event) => {
  console.log('outgoing:', event.data)
})
```

#### `.removeEventListener(type, listener)`

- `type`, `string`
- `listener`, `EventListener`

Removes the listener for the given event type.

#### `.send(data)`

- `data`, `string | Blob | ArrayBuffer`

Sends the data to the intercepted WebSocket client.

```js
client.send('text')
client.send(new Blob(['blob']))
client.send(new TextEncoder().encode('array buffer'))
```

#### `.close(code, reason)`

- `code`, close [status code](https://www.rfc-editor.org/rfc/rfc6455#section-7.4.1).
- `reason`, [close reason](https://www.rfc-editor.org/rfc/rfc6455#section-7.1.6).

Closes the client connection. Unlike the regular `WebSocket.prototype.close()`, the `client.close()` method can accept a non-configurable status codes, such as 1001, 1003, etc.

```js
// Gracefully close the connection with the
// intercepted WebSocket client.
client.close()
```

```js
// Terminate the connection by emulating
// the server unable to process the received data.
client.close(1003)
```

### `WebSocketServerConnection`

#### `.connect()`

Establishes the connection to the original WebSocket server. Connection cannot be awaited. Any data sent via `server.send()` while connecting is buffered and flushed once the connection is open.

#### `.addEventListener(type, listener)`

- `type`, `string`
- `listener`, `EventListener`

Adds an event listener to the given event type of the WebSocket server.

```ts
interface WebSocketServerConnectionEventMap {
  // Dispatched when the server connection is open.
  open: (this: WebSocket, event: Event) => void

  // Dispatched when the server sends data to the client.
  message: (this: WebSocket, event: MessageEvent<WebSocketData>) => void

  // Dispatched when the server connection closes.
  close: (this: WebSocket, event: CloseEvent) => void
}
```

```js
server.addEventListener('message', (event) => {
  console.log('incoming:', event.data)
})
```

#### `.removeEventListener(type, listener)`

- `type`, `string`
- `listener`, `EventListener`

Removes the listener for the given event type.

#### `.send(data)`

- `data`, `string | Blob | ArrayBuffer`

Sends the data to the original WebSocket server. Useful in a combination with the client-sent events forwarding:

```js
client.addEventListener('message', (event) => {
  server.send(event.data)
})
```

#### `.close()`

Closes the connection with the original WebSocket server. Unlike `client.close()`, closing the server connection does not accept any arguments and always assumes a graceful closure. Sending data via `server.send()` after the connection has been closed will have no effect.

## API

### `Interceptor`

A generic class implemented by all interceptors. You do not interact with this class directly.

```ts
class Interceptor {
  // Applies the interceptor, enabling the interception of requests
  // in the current process.
  apply(): void

  // Listens to the public interceptor events.
  // For HTTP requests, these are "request' and "response" events.
  on(event, listener): void

  // Cleans up any side-effects introduced by the interceptor
  // and disables the interception of requests.
  dispose(): void
}
```

**For public consumption, use [interceptors](#interceptors) instead**.

### `BatchInterceptor`

Applies multiple request interceptors at the same time.

```js
import { BatchInterceptor } from '@mswjs/interceptors'
import nodeInterceptors from '@mswjs/interceptors/presets/node'

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: nodeInterceptors,
})

interceptor.apply()

interceptor.on('request', ({ request, requestId }) => {
  // Inspect the intercepted "request".
  // Optionally, return a mocked response.
})
```

> Using the `/presets/node` interceptors preset is the recommended way to ensure all requests get intercepted, regardless of their origin.

### `RemoteHttpInterceptor`

Enables request interception in the current process while delegating the response resolution logic to the _parent process_. **Requires the current process to be a child process**. Requires the parent process to establish a resolver by calling the `createRemoteResolver` function.

```js
// child.js
import { RemoteHttpInterceptor } from '@mswjs/interceptors/RemoteHttpInterceptor'
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest'

const interceptor = new RemoteHttpInterceptor({
  // Alternatively, you can use presets.
  interceptors: [new ClientRequestInterceptor()],
})

interceptor.apply()

process.on('disconnect', () => {
  interceptor.dispose()
})
```

You can still listen to and handle any requests in the child process via the `request` event listener. Keep in mind that a single request can only be responded to once.

### `RemoteHttpResolver`

Resolves an intercepted request in the given child `process`. Requires for that child process to enable request interception by calling the `createRemoteInterceptor` function.

```js
// parent.js
import { spawn } from 'child_process'
import { RemoteHttpResolver } from '@mswjs/interceptors/RemoteHttpInterceptor'

const appProcess = spawn('node', ['app.js'], {
  stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
})

const resolver = new RemoteHttpResolver({
  process: appProcess,
})

resolver.on('request', ({ request, requestId }) => {
  // Optionally, return a mocked response
  // for a request that occurred in the "appProcess".
})

resolver.apply()
```

## Special mention

The following libraries were used as an inspiration to write this low-level API:

- [`node`](https://github.com/nodejs/node)
- [`nock`](https://github.com/nock/nock)
- [`mock-xmlhttprequest`](https://github.com/berniegp/mock-xmlhttprequest)
