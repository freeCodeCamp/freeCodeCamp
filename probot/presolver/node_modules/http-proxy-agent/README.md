http-proxy-agent
================
### An HTTP(s) proxy `http.Agent` implementation for HTTP
[![Build Status](https://travis-ci.org/TooTallNate/node-http-proxy-agent.svg?branch=master)](https://travis-ci.org/TooTallNate/node-http-proxy-agent)

This module provides an `http.Agent` implementation that connects to a specified
HTTP or HTTPS proxy server, and can be used with the built-in `http` module.

__Note:__ For HTTP proxy usage with the `https` module, check out
[`node-https-proxy-agent`](https://github.com/TooTallNate/node-https-proxy-agent).

Installation
------------

Install with `npm`:

``` bash
$ npm install http-proxy-agent
```


Example
-------

``` js
var url = require('url');
var http = require('http');
var HttpProxyAgent = require('http-proxy-agent');

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://168.63.76.32:3128';
console.log('using proxy server %j', proxy);

// HTTP endpoint for the proxy to connect to
var endpoint = process.argv[2] || 'http://nodejs.org/api/';
console.log('attempting to GET %j', endpoint);
var opts = url.parse(endpoint);

// create an instance of the `HttpProxyAgent` class with the proxy server information
var agent = new HttpProxyAgent(proxy);
opts.agent = agent;

http.get(opts, function (res) {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});
```


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
