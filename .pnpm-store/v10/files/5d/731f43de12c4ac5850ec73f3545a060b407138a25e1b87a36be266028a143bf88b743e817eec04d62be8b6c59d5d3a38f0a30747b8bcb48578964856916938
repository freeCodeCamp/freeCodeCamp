# proxy-from-env

[![Build Status](https://travis-ci.org/Rob--W/proxy-from-env.svg?branch=master)](https://travis-ci.org/Rob--W/proxy-from-env)
[![Coverage Status](https://coveralls.io/repos/github/Rob--W/proxy-from-env/badge.svg?branch=master)](https://coveralls.io/github/Rob--W/proxy-from-env?branch=master)

`proxy-from-env` is a Node.js package that exports a function (`getProxyForUrl`)
that takes an input URL (a string or
[`url.parse`](https://nodejs.org/docs/latest/api/url.html#url_url_parsing)'s
return value) and returns the desired proxy URL (also a string) based on
standard proxy environment variables. If no proxy is set, an empty string is
returned.

It is your responsibility to actually proxy the request using the given URL.

Installation:

```sh
npm install proxy-from-env
```

## Example
This example shows how the data for a URL can be fetched via the
[`http` module](https://nodejs.org/api/http.html), in a proxy-aware way.

```javascript
var http = require('http');
var parseUrl = require('url').parse;
var getProxyForUrl = require('proxy-from-env').getProxyForUrl;

var some_url = 'http://example.com/something';

// // Example, if there is a proxy server at 10.0.0.1:1234, then setting the
// // http_proxy environment variable causes the request to go through a proxy.
// process.env.http_proxy = 'http://10.0.0.1:1234';
// 
// // But if the host to be proxied is listed in NO_PROXY, then the request is
// // not proxied (but a direct request is made).
// process.env.no_proxy = 'example.com';

var proxy_url = getProxyForUrl(some_url);  // <-- Our magic.
if (proxy_url) {
  // Should be proxied through proxy_url.
  var parsed_some_url = parseUrl(some_url);
  var parsed_proxy_url = parseUrl(proxy_url);
  // A HTTP proxy is quite simple. It is similar to a normal request, except the
  // path is an absolute URL, and the proxied URL's host is put in the header
  // instead of the server's actual host.
  httpOptions = {
    protocol: parsed_proxy_url.protocol,
    hostname: parsed_proxy_url.hostname,
    port: parsed_proxy_url.port,
    path: parsed_some_url.href,
    headers: {
      Host: parsed_some_url.host,  // = host name + optional port.
    },
  };
} else {
  // Direct request.
  httpOptions = some_url;
}
http.get(httpOptions, function(res) {
  var responses = [];
  res.on('data', function(chunk) { responses.push(chunk); });
  res.on('end', function() { console.log(responses.join(''));  });
});

```

## Environment variables
The environment variables can be specified in lowercase or uppercase, with the
lowercase name having precedence over the uppercase variant. A variable that is
not set has the same meaning as a variable that is set but has no value.

### NO\_PROXY

`NO_PROXY` is a list of host names (optionally with a port). If the input URL
matches any of the entries in `NO_PROXY`, then the input URL should be fetched
by a direct request (i.e. without a proxy).

Matching follows the following rules:

- `NO_PROXY=*` disables all proxies.
- Space and commas may be used to separate the entries in the `NO_PROXY` list.
- If `NO_PROXY` does not contain any entries, then proxies are never disabled.
- If a port is added after the host name, then the ports must match. If the URL
  does not have an explicit port name, the protocol's default port is used.
- Generally, the proxy is only disabled if the host name is an exact match for
  an entry in the `NO_PROXY` list. The only exceptions are entries that start
  with a dot or with a wildcard; then the proxy is disabled if the host name
  ends with the entry.

See `test.js` for examples of what should match and what does not.

### \*\_PROXY

The environment variable used for the proxy depends on the protocol of the URL.
For example, `https://example.com` uses the "https" protocol, and therefore the
proxy to be used is `HTTPS_PROXY` (_NOT_ `HTTP_PROXY`, which is _only_ used for
http:-URLs).

The library is not limited to http(s), other schemes such as
`FTP_PROXY` (ftp:),
`WSS_PROXY` (wss:),
`WS_PROXY` (ws:)
are also supported.

If present, `ALL_PROXY` is used as fallback if there is no other match.


## External resources
The exact way of parsing the environment variables is not codified in any
standard. This library is designed to be compatible with formats as expected by
existing software.
The following resources were used to determine the desired behavior:

- cURL:
  https://curl.haxx.se/docs/manpage.html#ENVIRONMENT  
  https://github.com/curl/curl/blob/4af40b3646d3b09f68e419f7ca866ff395d1f897/lib/url.c#L4446-L4514  
  https://github.com/curl/curl/blob/4af40b3646d3b09f68e419f7ca866ff395d1f897/lib/url.c#L4608-L4638  

- wget: 
  https://www.gnu.org/software/wget/manual/wget.html#Proxies  
  http://git.savannah.gnu.org/cgit/wget.git/tree/src/init.c?id=636a5f9a1c508aa39e35a3a8e9e54520a284d93d#n383  
  http://git.savannah.gnu.org/cgit/wget.git/tree/src/retr.c?id=93c1517c4071c4288ba5a4b038e7634e4c6b5482#n1278  

- W3:
  https://www.w3.org/Daemon/User/Proxies/ProxyClients.html  

- Python's urllib:
  https://github.com/python/cpython/blob/936135bb97fe04223aa30ca6e98eac8f3ed6b349/Lib/urllib/request.py#L755-L782  
  https://github.com/python/cpython/blob/936135bb97fe04223aa30ca6e98eac8f3ed6b349/Lib/urllib/request.py#L2444-L2479
