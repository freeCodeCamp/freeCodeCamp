agent-base
==========
### Turn a function into an [`http.Agent`][http.Agent] instance

This module is a thin wrapper around the base `http.Agent` class.

It provides an abstract class that must define a `connect()` function,
which is responsible for creating the underlying socket that the HTTP
client requests will use.

The `connect()` function may return an arbitrary `Duplex` stream, or
another `http.Agent` instance to delegate the request to, and may be
asynchronous (by defining an `async` function).

Instances of this agent can be used with the `http` and `https`
modules. To differentiate, the options parameter in the `connect()`
function includes a `secureEndpoint` property, which can be checked
to determine what type of socket should be returned.

#### Some subclasses:

Here are some more interesting uses of `agent-base`.
Send a pull request to list yours!

 * [`http-proxy-agent`][http-proxy-agent]: An HTTP(s) proxy `http.Agent` implementation for HTTP endpoints
 * [`https-proxy-agent`][https-proxy-agent]: An HTTP(s) proxy `http.Agent` implementation for HTTPS endpoints
 * [`pac-proxy-agent`][pac-proxy-agent]: A PAC file proxy `http.Agent` implementation for HTTP and HTTPS
 * [`socks-proxy-agent`][socks-proxy-agent]: A SOCKS proxy `http.Agent` implementation for HTTP and HTTPS

Example
-------

Here's a minimal example that creates a new `net.Socket` or `tls.Socket`
based on the `secureEndpoint` property. This agent can be used with both
the `http` and `https` modules.

```ts
import * as net from 'net';
import * as tls from 'tls';
import * as http from 'http';
import { Agent } from 'agent-base';

class MyAgent extends Agent {
  connect(req, opts) {
    // `secureEndpoint` is true when using the "https" module
    if (opts.secureEndpoint) {
      return tls.connect(opts);
    } else {
      return net.connect(opts);
    }
  }
});

// Keep alive enabled means that `connect()` will only be
// invoked when a new connection needs to be created
const agent = new MyAgent({ keepAlive: true });

// Pass the `agent` option when creating the HTTP request
http.get('http://nodejs.org/api/', { agent }, (res) => {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});
```

[http-proxy-agent]: ../http-proxy-agent
[https-proxy-agent]: ../https-proxy-agent
[pac-proxy-agent]: ../pac-proxy-agent
[socks-proxy-agent]: ../socks-proxy-agent
[http.Agent]: https://nodejs.org/api/http.html#http_class_http_agent
