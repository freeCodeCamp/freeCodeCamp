https-proxy-agent
================
### An HTTP(s) proxy `http.Agent` implementation for HTTPS

This module provides an `http.Agent` implementation that connects to a specified
HTTP or HTTPS proxy server, and can be used with the built-in `https` module.

Specifically, this `Agent` implementation connects to an intermediary "proxy"
server and issues the [CONNECT HTTP method][CONNECT], which tells the proxy to
open a direct TCP connection to the destination server.

Since this agent implements the CONNECT HTTP method, it also works with other
protocols that use this method when connecting over proxies (i.e. WebSockets).
See the "Examples" section below for more.

Examples
--------

#### `https` module example

```ts
import * as https from 'https';
import { HttpsProxyAgent } from 'https-proxy-agent';

const agent = new HttpsProxyAgent('http://168.63.76.32:3128');

https.get('https://example.com', { agent }, (res) => {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});
```

#### `ws` WebSocket connection example

```ts
import WebSocket from 'ws';
import { HttpsProxyAgent } from 'https-proxy-agent';

const agent = new HttpsProxyAgent('http://168.63.76.32:3128');
const socket = new WebSocket('ws://echo.websocket.org', { agent });

socket.on('open', function () {
  console.log('"open" event!');
  socket.send('hello world');
});

socket.on('message', function (data, flags) {
  console.log('"message" event! %j %j', data, flags);
  socket.close();
});
```

API
---

### new HttpsProxyAgent(proxy: string | URL, options?: HttpsProxyAgentOptions)

The `HttpsProxyAgent` class implements an `http.Agent` subclass that connects
to the specified "HTTP(s) proxy server" in order to proxy HTTPS and/or WebSocket
requests. This is achieved by using the [HTTP `CONNECT` method][CONNECT].

The `proxy` argument is the URL for the proxy server.

The `options` argument accepts the usual `http.Agent` constructor options, and
some additional properties:

 * `headers` - Object containing additional headers to send to the proxy server
   in the `CONNECT` request.

[CONNECT]: http://en.wikipedia.org/wiki/HTTP_tunnel#HTTP_CONNECT_Tunneling
