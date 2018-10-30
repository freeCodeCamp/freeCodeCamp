https-proxy-agent
================
### An HTTP(s) proxy `http.Agent` implementation for HTTPS
[![Build Status](https://travis-ci.org/TooTallNate/node-https-proxy-agent.svg?branch=master)](https://travis-ci.org/TooTallNate/node-https-proxy-agent)

This module provides an `http.Agent` implementation that connects to a specified
HTTP or HTTPS proxy server, and can be used with the built-in `https` module.

Specifically, this `Agent` implementation connects to an intermediary "proxy"
server and issues the [CONNECT HTTP method][CONNECT], which tells the proxy to
open a direct TCP connection to the destination server.

Since this agent implements the CONNECT HTTP method, it also works with other
protocols that use this method when connecting over proxies (i.e. WebSockets).
See the "Examples" section below for more.


Installation
------------

Install with `npm`:

``` bash
$ npm install https-proxy-agent
```


Examples
--------

#### `https` module example

``` js
var url = require('url');
var https = require('https');
var HttpsProxyAgent = require('https-proxy-agent');

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://168.63.76.32:3128';
console.log('using proxy server %j', proxy);

// HTTPS endpoint for the proxy to connect to
var endpoint = process.argv[2] || 'https://graph.facebook.com/tootallnate';
console.log('attempting to GET %j', endpoint);
var options = url.parse(endpoint);

// create an instance of the `HttpsProxyAgent` class with the proxy server information
var agent = new HttpsProxyAgent(proxy);
options.agent = agent;

https.get(options, function (res) {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});
```

#### `ws` WebSocket connection example

``` js
var url = require('url');
var WebSocket = require('ws');
var HttpsProxyAgent = require('https-proxy-agent');

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://168.63.76.32:3128';
console.log('using proxy server %j', proxy);

// WebSocket endpoint for the proxy to connect to
var endpoint = process.argv[2] || 'ws://echo.websocket.org';
var parsed = url.parse(endpoint);
console.log('attempting to connect to WebSocket %j', endpoint);

// create an instance of the `HttpsProxyAgent` class with the proxy server information
var options = url.parse(proxy);

var agent = new HttpsProxyAgent(options);

// finally, initiate the WebSocket connection
var socket = new WebSocket(endpoint, { agent: agent });

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

### new HttpsProxyAgent(Object options)

The `HttpsProxyAgent` class implements an `http.Agent` subclass that connects
to the specified "HTTP(s) proxy server" in order to proxy HTTPS and/or WebSocket
requests. This is achieved by using the [HTTP `CONNECT` method][CONNECT].

The `options` argument may either be a string URI of the proxy server to use, or an
"options" object with more specific properties:

  * `host` - String - Proxy host to connect to (may use `hostname` as well). Required.
  * `port` - Number - Proxy port to connect to. Required.
  * `secureProxy` - Boolean - If `true`, then use TLS to connect to the proxy. Defaults to `false`.
  * `headers` - Object - Additional HTTP headers to be sent on the HTTP CONNECT method.
  * Any other options given are passed to the `net.connect()`/`tls.connect()` functions.


License
-------

(The MIT License)

Copyright (c) 2013 Nathan Rajlich &lt;nathan@tootallnate.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[CONNECT]: http://en.wikipedia.org/wiki/HTTP_tunnel#HTTP_CONNECT_Tunneling
