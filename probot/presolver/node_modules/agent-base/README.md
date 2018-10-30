agent-base
==========
### Turn a function into an [`http.Agent`][http.Agent] instance
[![Build Status](https://travis-ci.org/TooTallNate/node-agent-base.svg?branch=master)](https://travis-ci.org/TooTallNate/node-agent-base)

This module provides an `http.Agent` generator. That is, you pass it an async
callback function, and it returns a new `http.Agent` instance that will invoke the
given callback function when sending outbound HTTP requests.

#### Some subclasses:

Here's some more interesting uses of `agent-base`.
Send a pull request to list yours!

 * [`http-proxy-agent`][http-proxy-agent]: An HTTP(s) proxy `http.Agent` implementation for HTTP endpoints
 * [`https-proxy-agent`][https-proxy-agent]: An HTTP(s) proxy `http.Agent` implementation for HTTPS endpoints
 * [`pac-proxy-agent`][pac-proxy-agent]: A PAC file proxy `http.Agent` implementation for HTTP and HTTPS
 * [`socks-proxy-agent`][socks-proxy-agent]: A SOCKS (v4a) proxy `http.Agent` implementation for HTTP and HTTPS


Installation
------------

Install with `npm`:

``` bash
$ npm install agent-base
```


Example
-------

Here's a minimal example that creates a new `net.Socket` connection to the server
for every HTTP request (i.e. the equivalent of `agent: false` option):

```js
var net = require('net');
var tls = require('tls');
var url = require('url');
var http = require('http');
var agent = require('agent-base');

var endpoint = 'http://nodejs.org/api/';
var parsed = url.parse(endpoint);

// This is the important part!
parsed.agent = agent(function (req, opts) {
  var socket;
  // `secureEndpoint` is true when using the https module
  if (opts.secureEndpoint) {
    socket = tls.connect(opts);
  } else {
    socket = net.connect(opts);
  }
  return socket;
});

// Everything else works just like normal...
http.get(parsed, function (res) {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});
```

Returning a Promise or using an `async` function is also supported:

```js
agent(async function (req, opts) {
  await sleep(1000);
  // etc…
});
```

Return another `http.Agent` instance to "pass through" the responsibility
for that HTTP request to that agent:

```js
agent(function (req, opts) {
  return opts.secureEndpoint ? https.globalAgent : http.globalAgent;
});
```


API
---

## Agent(Function callback[, Object options]) → [http.Agent][]

Creates a base `http.Agent` that will execute the callback function `callback`
for every HTTP request that it is used as the `agent` for. The callback function
is responsible for creating a `stream.Duplex` instance of some kind that will be
used as the underlying socket in the HTTP request.

The `options` object accepts the following properties:

  * `timeout` - Number - Timeout for the `callback()` function in milliseconds. Defaults to Infinity (optional).

The callback function should have the following signature:

### callback(http.ClientRequest req, Object options, Function cb) → undefined

The ClientRequest `req` can be accessed to read request headers and
and the path, etc. The `options` object contains the options passed
to the `http.request()`/`https.request()` function call, and is formatted
to be directly passed to `net.connect()`/`tls.connect()`, or however
else you want a Socket to be created. Pass the created socket to
the callback function `cb` once created, and the HTTP request will
continue to proceed.

If the `https` module is used to invoke the HTTP request, then the
`secureEndpoint` property on `options` _will be set to `true`_.


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

[http-proxy-agent]: https://github.com/TooTallNate/node-http-proxy-agent
[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent
[pac-proxy-agent]: https://github.com/TooTallNate/node-pac-proxy-agent
[socks-proxy-agent]: https://github.com/TooTallNate/node-socks-proxy-agent
[http.Agent]: https://nodejs.org/api/http.html#http_class_http_agent
