# ws: a Node.js WebSocket library

[![Version npm](https://img.shields.io/npm/v/ws.svg?logo=npm)](https://www.npmjs.com/package/ws)
[![CI](https://img.shields.io/github/actions/workflow/status/websockets/ws/ci.yml?branch=master&label=CI&logo=github)](https://github.com/websockets/ws/actions?query=workflow%3ACI+branch%3Amaster)
[![Coverage Status](https://img.shields.io/coveralls/websockets/ws/master.svg?logo=coveralls)](https://coveralls.io/github/websockets/ws)

ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and
server implementation.

Passes the quite extensive Autobahn test suite: [server][server-report],
[client][client-report].

**Note**: This module does not work in the browser. The client in the docs is a
reference to a backend with the role of a client in the WebSocket communication.
Browser clients must use the native
[`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
object. To make the same code work seamlessly on Node.js and the browser, you
can use one of the many wrappers available on npm, like
[isomorphic-ws](https://github.com/heineiuo/isomorphic-ws).

## Table of Contents

- [Protocol support](#protocol-support)
- [Installing](#installing)
  - [Opt-in for performance](#opt-in-for-performance)
    - [Legacy opt-in for performance](#legacy-opt-in-for-performance)
- [API docs](#api-docs)
- [WebSocket compression](#websocket-compression)
- [Usage examples](#usage-examples)
  - [Sending and receiving text data](#sending-and-receiving-text-data)
  - [Sending binary data](#sending-binary-data)
  - [Simple server](#simple-server)
  - [External HTTP/S server](#external-https-server)
  - [Multiple servers sharing a single HTTP/S server](#multiple-servers-sharing-a-single-https-server)
  - [Client authentication](#client-authentication)
  - [Server broadcast](#server-broadcast)
  - [Round-trip time](#round-trip-time)
  - [Use the Node.js streams API](#use-the-nodejs-streams-api)
  - [Other examples](#other-examples)
- [FAQ](#faq)
  - [How to get the IP address of the client?](#how-to-get-the-ip-address-of-the-client)
  - [How to detect and close broken connections?](#how-to-detect-and-close-broken-connections)
  - [How to connect via a proxy?](#how-to-connect-via-a-proxy)
- [Changelog](#changelog)
- [License](#license)

## Protocol support

- **HyBi drafts 07-12** (Use the option `protocolVersion: 8`)
- **HyBi drafts 13-17** (Current default, alternatively option
  `protocolVersion: 13`)

## Installing

```
npm install ws
```

### Opt-in for performance

[bufferutil][] is an optional module that can be installed alongside the ws
module:

```
npm install --save-optional bufferutil
```

This is a binary addon that improves the performance of certain operations such
as masking and unmasking the data payload of the WebSocket frames. Prebuilt
binaries are available for the most popular platforms, so you don't necessarily
need to have a C++ compiler installed on your machine.

To force ws to not use bufferutil, use the
[`WS_NO_BUFFER_UTIL`](./doc/ws.md#ws_no_buffer_util) environment variable. This
can be useful to enhance security in systems where a user can put a package in
the package search path of an application of another user, due to how the
Node.js resolver algorithm works.

#### Legacy opt-in for performance

If you are running on an old version of Node.js (prior to v18.14.0), ws also
supports the [utf-8-validate][] module:

```
npm install --save-optional utf-8-validate
```

This contains a binary polyfill for [`buffer.isUtf8()`][].

To force ws not to use utf-8-validate, use the
[`WS_NO_UTF_8_VALIDATE`](./doc/ws.md#ws_no_utf_8_validate) environment variable.

## API docs

See [`/doc/ws.md`](./doc/ws.md) for Node.js-like documentation of ws classes and
utility functions.

## WebSocket compression

ws supports the [permessage-deflate extension][permessage-deflate] which enables
the client and server to negotiate a compression algorithm and its parameters,
and then selectively apply it to the data payloads of each WebSocket message.

The extension is disabled by default on the server and enabled by default on the
client. It adds a significant overhead in terms of performance and memory
consumption so we suggest to enable it only if it is really needed.

Note that Node.js has a variety of issues with high-performance compression,
where increased concurrency, especially on Linux, can lead to [catastrophic
memory fragmentation][node-zlib-bug] and slow performance. If you intend to use
permessage-deflate in production, it is worthwhile to set up a test
representative of your workload and ensure Node.js/zlib will handle it with
acceptable performance and memory usage.

Tuning of permessage-deflate can be done via the options defined below. You can
also use `zlibDeflateOptions` and `zlibInflateOptions`, which is passed directly
into the creation of [raw deflate/inflate streams][node-zlib-deflaterawdocs].

See [the docs][ws-server-options] for more options.

```js
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  }
});
```

The client will only use the extension if it is supported and enabled on the
server. To always disable the extension on the client, set the
`perMessageDeflate` option to `false`.

```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path', {
  perMessageDeflate: false
});
```

## Usage examples

### Sending and receiving text data

```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path');

ws.on('error', console.error);

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});
```

### Sending binary data

```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path');

ws.on('error', console.error);

ws.on('open', function open() {
  const array = new Float32Array(5);

  for (var i = 0; i < array.length; ++i) {
    array[i] = i / 2;
  }

  ws.send(array);
});
```

### Simple server

```js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
```

### External HTTP/S server

```js
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { WebSocketServer } from 'ws';

const server = createServer({
  cert: readFileSync('/path/to/cert.pem'),
  key: readFileSync('/path/to/key.pem')
});
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

server.listen(8080);
```

### Multiple servers sharing a single HTTP/S server

```js
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const server = createServer();
const wss1 = new WebSocketServer({ noServer: true });
const wss2 = new WebSocketServer({ noServer: true });

wss1.on('connection', function connection(ws) {
  ws.on('error', console.error);

  // ...
});

wss2.on('connection', function connection(ws) {
  ws.on('error', console.error);

  // ...
});

server.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = new URL(request.url, 'wss://base.url');

  if (pathname === '/foo') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });
  } else if (pathname === '/bar') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(8080);
```

### Client authentication

```js
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

function onSocketError(err) {
  console.error(err);
}

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws, request, client) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log(`Received message ${data} from user ${client}`);
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  socket.on('error', onSocketError);

  // This function is not defined on purpose. Implement it with your own logic.
  authenticate(request, function next(err, client) {
    if (err || !client) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    socket.removeListener('error', onSocketError);

    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request, client);
    });
  });
});

server.listen(8080);
```

Also see the provided [example][session-parse-example] using `express-session`.

### Server broadcast

A client WebSocket broadcasting to all connected WebSocket clients, including
itself.

```js
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
```

A client WebSocket broadcasting to every other connected WebSocket clients,
excluding itself.

```js
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
```

### Round-trip time

```js
import WebSocket from 'ws';

const ws = new WebSocket('wss://websocket-echo.com/');

ws.on('error', console.error);

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function message(data) {
  console.log(`Round-trip time: ${Date.now() - data} ms`);

  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});
```

### Use the Node.js streams API

```js
import WebSocket, { createWebSocketStream } from 'ws';

const ws = new WebSocket('wss://websocket-echo.com/');

const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

duplex.on('error', console.error);

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);
```

### Other examples

For a full example with a browser client communicating with a ws server, see the
examples folder.

Otherwise, see the test cases.

## FAQ

### How to get the IP address of the client?

The remote IP address can be obtained from the raw socket.

```js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;

  ws.on('error', console.error);
});
```

When the server runs behind a proxy like NGINX, the de-facto standard is to use
the `X-Forwarded-For` header.

```js
wss.on('connection', function connection(ws, req) {
  const ip = req.headers['x-forwarded-for'].split(',')[0].trim();

  ws.on('error', console.error);
});
```

### How to detect and close broken connections?

Sometimes, the link between the server and the client can be interrupted in a
way that keeps both the server and the client unaware of the broken state of the
connection (e.g. when pulling the cord).

In these cases, ping messages can be used as a means to verify that the remote
endpoint is still responsive.

```js
import { WebSocketServer } from 'ws';

function heartbeat() {
  this.isAlive = true;
}

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.isAlive = true;
  ws.on('error', console.error);
  ws.on('pong', heartbeat);
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', function close() {
  clearInterval(interval);
});
```

Pong messages are automatically sent in response to ping messages as required by
the spec.

Just like the server example above, your clients might as well lose connection
without knowing it. You might want to add a ping listener on your clients to
prevent that. A simple implementation would be:

```js
import WebSocket from 'ws';

function heartbeat() {
  clearTimeout(this.pingTimeout);

  // Use `WebSocket#terminate()`, which immediately destroys the connection,
  // instead of `WebSocket#close()`, which waits for the close timer.
  // Delay should be equal to the interval at which your server
  // sends out pings plus a conservative assumption of the latency.
  this.pingTimeout = setTimeout(() => {
    this.terminate();
  }, 30000 + 1000);
}

const client = new WebSocket('wss://websocket-echo.com/');

client.on('error', console.error);
client.on('open', heartbeat);
client.on('ping', heartbeat);
client.on('close', function clear() {
  clearTimeout(this.pingTimeout);
});
```

### How to connect via a proxy?

Use a custom `http.Agent` implementation like [https-proxy-agent][] or
[socks-proxy-agent][].

## Changelog

We're using the GitHub [releases][changelog] for changelog entries.

## License

[MIT](LICENSE)

[`buffer.isutf8()`]: https://nodejs.org/api/buffer.html#bufferisutf8input
[bufferutil]: https://github.com/websockets/bufferutil
[changelog]: https://github.com/websockets/ws/releases
[client-report]: http://websockets.github.io/ws/autobahn/clients/
[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent
[node-zlib-bug]: https://github.com/nodejs/node/issues/8871
[node-zlib-deflaterawdocs]:
  https://nodejs.org/api/zlib.html#zlib_zlib_createdeflateraw_options
[permessage-deflate]: https://tools.ietf.org/html/rfc7692
[server-report]: http://websockets.github.io/ws/autobahn/servers/
[session-parse-example]: ./examples/express-session-parse
[socks-proxy-agent]: https://github.com/TooTallNate/node-socks-proxy-agent
[utf-8-validate]: https://github.com/websockets/utf-8-validate
[ws-server-options]: ./doc/ws.md#new-websocketserveroptions-callback
