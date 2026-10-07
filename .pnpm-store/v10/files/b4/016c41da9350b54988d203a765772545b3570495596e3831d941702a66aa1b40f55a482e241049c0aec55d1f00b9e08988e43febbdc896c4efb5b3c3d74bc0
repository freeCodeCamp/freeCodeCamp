# http2-wrapper
> HTTP/2 client, just with the familiar `https` API

[![Node CI](https://github.com/szmarczak/http2-wrapper/workflows/Node%20CI/badge.svg)](https://github.com/szmarczak/http2-wrapper/actions)
[![codecov](https://codecov.io/gh/szmarczak/http2-wrapper/branch/master/graph/badge.svg)](https://codecov.io/gh/szmarczak/http2-wrapper)
[![npm](https://img.shields.io/npm/dm/http2-wrapper.svg)](https://www.npmjs.com/package/http2-wrapper)
[![install size](https://packagephobia.now.sh/badge?p=http2-wrapper)](https://packagephobia.now.sh/result?p=http2-wrapper)

This package was created to support HTTP/2 without the need to rewrite your code.<br>
I recommend adapting to the [`http2`](https://nodejs.org/api/http2.html) module if possible - it's much simpler to use and has many cool features!

**Tip**: `http2-wrapper` is very useful when you rely on other modules that use the HTTP/1 API and you want to support HTTP/2.

**Pro Tip**: While the native `http2` doesn't have agents yet, you can use `http2-wrapper` Agents and still operate on the native HTTP/2 streams.

## Installation

> `$ npm install http2-wrapper`<br>
> `$ yarn add http2-wrapper`

## Usage
```js
const http2 = require('http2-wrapper');

const options = {
	hostname: 'nghttp2.org',
	protocol: 'https:',
	path: '/httpbin/post',
	method: 'POST',
	headers: {
		'content-length': 6
	}
};

const request = http2.request(options, response => {
	console.log('statusCode:', response.statusCode);
	console.log('headers:', response.headers);

	const body = [];
	response.on('data', chunk => {
		body.push(chunk);
	});
	response.on('end', () => {
		console.log('body:', Buffer.concat(body).toString());
	});
});

request.on('error', console.error);

request.write('123');
request.end('456');

// statusCode: 200
// headers: [Object: null prototype] {
//   ':status': 200,
//   date: 'Fri, 27 Sep 2019 19:45:46 GMT',
//   'content-type': 'application/json',
//   'access-control-allow-origin': '*',
//   'access-control-allow-credentials': 'true',
//   'content-length': '239',
//   'x-backend-header-rtt': '0.002516',
//   'strict-transport-security': 'max-age=31536000',
//   server: 'nghttpx',
//   via: '1.1 nghttpx',
//   'alt-svc': 'h3-23=":4433"; ma=3600',
//   'x-frame-options': 'SAMEORIGIN',
//   'x-xss-protection': '1; mode=block',
//   'x-content-type-options': 'nosniff'
// }
// body: {
//   "args": {},
//   "data": "123456",
//   "files": {},
//   "form": {},
//   "headers": {
//     "Content-Length": "6",
//     "Host": "nghttp2.org"
//   },
//   "json": 123456,
//   "origin": "xxx.xxx.xxx.xxx",
//   "url": "https://nghttp2.org/httpbin/post"
// }
```

## API

**Note:** The `session` option was renamed to `tlsSession` for better readability.

### http2.auto(url, options, callback)

Performs [ALPN](https://nodejs.org/api/tls.html#tls_alpn_and_sni) negotiation.
Returns a Promise giving proper `ClientRequest` instance (depending on the ALPN).

**Note**: The `agent` option represents an object with `http`, `https` and `http2` properties.

```js
const http2 = require('http2-wrapper');

const options = {
	hostname: 'httpbin.org',
	protocol: 'http:', // Note the `http:` protocol here
	path: '/post',
	method: 'POST',
	headers: {
		'content-length': 6
	}
};

(async () => {
	try {
		const request = await http2.auto(options, response => {
			console.log('statusCode:', response.statusCode);
			console.log('headers:', response.headers);

			const body = [];
			response.on('data', chunk => body.push(chunk));
			response.on('end', () => {
				console.log('body:', Buffer.concat(body).toString());
			});
		});

		request.on('error', console.error);

		request.write('123');
		request.end('456');
	} catch (error) {
		console.error(error);
	}
})();

// statusCode: 200
// headers: { connection: 'close',
//   server: 'gunicorn/19.9.0',
//   date: 'Sat, 15 Dec 2018 18:19:32 GMT',
//   'content-type': 'application/json',
//   'content-length': '259',
//   'access-control-allow-origin': '*',
//   'access-control-allow-credentials': 'true',
//   via: '1.1 vegur' }
// body: {
//   "args": {},
//   "data": "123456",
//   "files": {},
//   "form": {},
//   "headers": {
//     "Connection": "close",
//     "Content-Length": "6",
//     "Host": "httpbin.org"
//   },
//   "json": 123456,
//   "origin": "xxx.xxx.xxx.xxx",
//   "url": "http://httpbin.org/post"
// }
```

### http2.auto.protocolCache

An instance of [`quick-lru`](https://github.com/sindresorhus/quick-lru) used for ALPN cache.

There is a maximum of 100 entries. You can modify the limit through `protocolCache.maxSize` - note that the change will be visible globally.

### http2.request(url, options, callback)

Same as [`https.request`](https://nodejs.org/api/https.html#https_https_request_options_callback).

##### options.h2session

Type: `Http2Session`<br>

The session used to make the actual request. If none provided, it will use `options.agent`.

### http2.get(url, options, callback)

Same as [`https.get`](https://nodejs.org/api/https.html#https_https_get_options_callback).

### new http2.ClientRequest(url, options, callback)

Same as [`https.ClientRequest`](https://nodejs.org/api/https.html#https_class_https_clientrequest).

### new http2.IncomingMessage(socket)

Same as [`https.IncomingMessage`](https://nodejs.org/api/https.html#https_class_https_incomingmessage).

### new http2.Agent(options)

**Note:** this is **not** compatible with the classic `http.Agent`.

Usage example:

```js
const http2 = require('http2-wrapper');

class MyAgent extends http2.Agent {
	createConnection(origin, options) {
		console.log(`Connecting to ${http2.Agent.normalizeOrigin(origin)}`);
		return http2.Agent.connect(origin, options);
	}
}

http2.get({
	hostname: 'google.com',
	agent: new MyAgent()
}, res => {
	res.on('data', chunk => console.log(`Received chunk of ${chunk.length} bytes`));
});
```

#### options

Each option is assigned to each `Agent` instance and can be changed later.

##### timeout

Type: `number`<br>
Default: `60000`

If there's no activity after `timeout` milliseconds, the session will be closed.

##### maxSessions

Type: `number`<br>
Default: `Infinity`

The maximum amount of sessions in total.

##### maxFreeSessions

Type: `number`<br>
Default: `10`

The maximum amount of free sessions in total. This only applies to sessions with no pending requests.

**Note:** It is possible that the amount will be exceeded when sessions have at least 1 pending request.

##### maxCachedTlsSessions

Type: `number`<br>
Default: `100`

The maximum amount of cached TLS sessions.

#### Agent.normalizeOrigin(url)

Returns a string representing the origin of the URL.

#### agent.settings

Type: `object`<br>
Default: `{enablePush: false}`

[Settings](https://nodejs.org/api/http2.html#http2_settings_object) used by the current agent instance.

#### agent.normalizeOptions([options](https://github.com/szmarczak/http2-wrapper/blob/master/source/agent.js))

Returns a string representing normalized options.

```js
Agent.normalizeOptions({servername: 'example.com'});
// => ':example.com'
```

#### agent.getSession(origin, options)

##### [origin](https://nodejs.org/api/http2.html#http2_http2_connect_authority_options_listener)

Type: `string` `URL` `object`

An origin used to create new session.

##### [options](https://nodejs.org/api/http2.html#http2_http2_connect_authority_options_listener)

Type: `object`

The options used to create new session.

Returns a Promise giving free `Http2Session`. If no free sessions are found, a new one is created.

#### agent.getSession([origin](#origin), [options](options-1), listener)

##### listener

Type: `object`

```
{
	reject: error => void,
	resolve: session => void
}
```

If the `listener` argument is present, the Promise will resolve immediately. It will use the `resolve` function to pass the session.

#### agent.request([origin](#origin), [options](#options-1), [headers](https://nodejs.org/api/http2.html#http2_headers_object), [streamOptions](https://nodejs.org/api/http2.html#http2_clienthttp2session_request_headers_options))

Returns a Promise giving `Http2Stream`.

#### agent.createConnection([origin](#origin), [options](#options-1))

Returns a new `TLSSocket`. It defaults to `Agent.connect(origin, options)`.

#### agent.closeFreeSessions()

Makes an attempt to close free sessions. Only sessions with 0 concurrent streams will be closed.

#### agent.destroy(reason)

Destroys **all** sessions.

#### Event: 'session'

```js
agent.on('session', session => {
	// A new session has been created by the Agent.
});
```

## Proxy support

An example of a full-featured proxy server can be found [here](examples/proxy/server.js). It supports **mirroring, custom authorities and the CONNECT protocol**.

### Mirroring

To mirror another server we need to use only [`http2-proxy`](https://github.com/nxtedition/node-http2-proxy). We don't need the CONNECT protocol or custom authorities.

To see the result, just navigate to the server's address.

### HTTP/1 over HTTP/2

Since we don't care about mirroring, the server needs to support the CONNECT protocol in this case.

The client looks like this:

```js
const https = require('https');
const http2 = require('http2');

const session = http2.connect('https://localhost:8000', {
	// For demo purposes only!
	rejectUnauthorized: false
});

session.ref();

https.request('https://httpbin.org/anything', {
	createConnection: options => {
		return session.request({
			':method': 'CONNECT',
			':authority': `${options.host}:${options.port}`
		});
	}
}, response => {
	console.log('statusCode:', response.statusCode);
	console.log('headers:', response.headers);

	const body = [];
	response.on('data', chunk => {
		body.push(chunk);
	});
	response.on('end', () => {
		console.log('body:', Buffer.concat(body).toString());

		session.unref();
	});
}).end();
```

### HTTP/2 over HTTP/2

It's a tricky one! We cannot create an HTTP/2 session on top of an HTTP/2 stream. But... we can still specify the `:authority` header, no need to use the CONNECT protocol here.

The client looks like this:

```js
const http2 = require('../../source');
const {Agent} = http2;

class ProxyAgent extends Agent {
	constructor(url, options) {
		super(options);

		this.origin = url;
	}

	request(origin, sessionOptions, headers, streamOptions) {
		return super.request(this.origin, sessionOptions, {
			...headers,
			':authority': (new URL(origin)).host
		}, streamOptions);
	}
}

const request = http2.request({
	hostname: 'httpbin.org',
	protocol: 'https:',
	path: '/anything',
	agent: new ProxyAgent('https://localhost:8000'),
	// For demo purposes only!
	rejectUnauthorized: false
}, response => {
	console.log('statusCode:', response.statusCode);
	console.log('headers:', response.headers);

	const body = [];
	response.on('data', chunk => {
		body.push(chunk);
	});
	response.on('end', () => {
		console.log('body:', Buffer.concat(body).toString());
	});
});

request.on('error', console.error);

request.end();
```

## Notes

 - If you're interested in [WebSockets over HTTP/2](https://tools.ietf.org/html/rfc8441), then [check out this discussion](https://github.com/websockets/ws/issues/1458).
 - [HTTP/2 sockets cannot be malformed](https://github.com/nodejs/node/blob/cc8250fab86486632fdeb63892be735d7628cd13/lib/internal/http2/core.js#L725), therefore modifying the socket will have no effect.
 - You can make [a custom Agent](examples/push-stream/index.js) to support push streams.

## Benchmarks

CPU: Intel i7-7700k (governor: performance)<br>
Server: H2O v2.2.5 [`h2o.conf`](h2o.conf)<br>
Node: v14.5.0
Linux: 5.6.18-156.current

`auto` means `http2wrapper.auto`.

```
http2-wrapper                         x 12,181 ops/sec ±3.39% (75 runs sampled)
http2-wrapper - preconfigured session x 13,140 ops/sec ±2.51% (79 runs sampled)
http2-wrapper - auto                  x 11,412 ops/sec ±2.55% (78 runs sampled)
http2                                 x 16,050 ops/sec ±1.39% (86 runs sampled)
https         - auto - keepalive      x 12,288 ops/sec ±2.69% (79 runs sampled)
https                - keepalive      x 12,155 ops/sec ±3.32% (78 runs sampled)
https                                 x 1,604 ops/sec  ±2.03% (77 runs sampled)
http                                  x 6,041 ops/sec  ±3.82% (76 runs sampled)
Fastest is http2
```

`http2-wrapper`:
- 32% **less** performant than `http2`
- as performant as `https - keepalive`
- 100% **more** performant than `http`

`http2-wrapper - preconfigured session`:
- 22% **less** performant than `http2`
- 8% **more** performant than `https - keepalive`
- 118% **more** performant than `http`

`http2-wrapper - auto`:
- 41% **less** performant than `http2`
- 8% **less** performant than `https - keepalive`
- 89% **more** performant than `http`

`https - auto - keepalive`:
- 31% **less** performant than `http2`
- as performant as `https - keepalive`
- 103% **more** performant than `http`

## Related

 - [`got`](https://github.com/sindresorhus/got) - Simplified HTTP requests

## License

MIT
