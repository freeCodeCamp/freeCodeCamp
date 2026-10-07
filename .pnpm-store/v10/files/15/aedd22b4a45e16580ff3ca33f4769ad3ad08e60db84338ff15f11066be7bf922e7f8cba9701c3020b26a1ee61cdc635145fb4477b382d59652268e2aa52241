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

**Note:** The `timeout` option applies to HTTP/2 streams only. In order to set session timeout, pass an Agent with custom `timeout` option set.

### http2.auto(url, options, callback)

Performs [ALPN](https://nodejs.org/api/tls.html#tls_alpn_and_sni) negotiation.
Returns a Promise giving proper `ClientRequest` instance (depending on the ALPN).

**Note**: The `agent` option represents an object with `http`, `https` and `http2` properties.

```js
const http2 = require('http2-wrapper');

const options = {
	hostname: 'httpbin.org',
	protocol: 'http:', // Try changing this to https:
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

### http2.auto.createResolveProtocol(cache, queue, connect)

#### cache

Type: `Map<string, string>`

This is the store where cached ALPN protocols are put into.

#### queue

Type: `Map<string, Promise>`

This is the store that contains pending ALPN negotiation promises.

#### connect

Type: `(options, callback) => TLSSocket | Promise<TLSSocket>`

See https://github.com/szmarczak/resolve-alpn#connect

### http2.auto.resolveProtocol(options)

Returns a `Promise<{alpnProtocol: string}>`.

### http2.request(url, options, callback)

Same as [`https.request`](https://nodejs.org/api/https.html#https_https_request_options_callback).

##### options.h2session

Type: `Http2Session`<br>

The session used to make the actual request. If none provided, it will use `options.agent` to get one.

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
}, response => {
	response.on('data', chunk => console.log(`Received chunk of ${chunk.length} bytes`));
});
```

#### options

Each option is an `Agent` property and can be changed later.

##### timeout

Type: `number`<br>
Default: `0`

If there's no activity after `timeout` milliseconds, the session will be closed. If `0`, no timeout is applied.

##### maxSessions

Type: `number`<br>
Default: `Infinity`

The maximum amount of sessions in total.

##### maxEmptySessions

Type: `number`<br>
Default: `10`

The maximum amount of empty sessions in total. An empty session is a session with no pending requests.

##### maxCachedTlsSessions

Type: `number`<br>
Default: `100`

The maximum amount of cached TLS sessions.

#### agent.protocol

Type: `string`<br>
Default: `https:`

#### agent.settings

Type: `object`<br>
Default: `{enablePush: false}`

[Settings](https://nodejs.org/api/http2.html#http2_settings_object) used by the current agent instance.

#### agent.normalizeOptions([options](https://github.com/szmarczak/http2-wrapper/blob/master/source/agent.js))

Returns a string representing normalized options.

```js
Agent.normalizeOptions({servername: 'example.com'});
// => ':::::::::::::::::::::::::::::::::::::'
```

#### agent.getSession(origin, options)

##### [origin](https://nodejs.org/api/http2.html#http2_http2_connect_authority_options_listener)

Type: `string` `URL` `object`

Origin used to create new session.

##### [options](https://nodejs.org/api/http2.html#http2_http2_connect_authority_options_listener)

Type: `object`

Options used to create new session.

Returns a Promise giving free `Http2Session`. If no free sessions are found, a new one is created.

A session is considered free when pending streams count is less than max concurrent streams settings.

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

#### agent.closeEmptySessions(count)

##### count

Type: `number`
Default: `Number.POSITIVE_INFINITY`

Makes an attempt to close empty sessions. Only sessions with 0 concurrent streams will be closed.

#### agent.destroy(reason)

Destroys **all** sessions.

#### agent.emptySessionCount

Type: `number`

A number of empty sessions.

#### agent.pendingSessionCount

Type: `number`

A number of pending sessions.

#### agent.sessionCount

Type: `number`

A number of all sessions held by the Agent.

#### Event: 'session'

```js
agent.on('session', session => {
	// A new session has been created by the Agent.
});
```

## Proxy support

Currently `http2-wrapper` provides support for these proxies:

- `HttpOverHttp2`
- `HttpsOverHttp2`
- `Http2OverHttp2`
- `Http2OverHttp`
- `Http2OverHttps`

Any of the above can be accessed via `http2wrapper.proxies`. Check out the [`examples/proxies`](examples/proxies) directory to learn more.

**Note:** If you use the `http2.auto` function, the real IP address will leak. `http2wrapper` is not aware of the context. It will create a connection to the end server using your real IP address to get the ALPN protocol. Then it will create another connection using proxy. To migitate this, you need to pass a custom `resolveProtocol` function as an option:

```js
const resolveAlpnProxy = new URL('https://username:password@localhost:8000');
const connect = async (options, callback) => new Promise((resolve, reject) => {
	const host = `${options.host}:${options.port}`;

	(async () => {
		try {
			const request = await http2.auto(resolveAlpnProxy, {
				method: 'CONNECT',
				headers: {
					host
				},
				path: host,

				// For demo purposes only!
				rejectUnauthorized: false,
			});

			request.end();

			request.once('error', reject);

			request.once('connect', (response, socket, head) => {
				if (head.length > 0) {
					reject(new Error(`Unexpected data before CONNECT tunnel: ${head.length} bytes`));

					socket.destroy();
					return;
				}

				const tlsSocket = tls.connect({
					...options,
					socket
				}, callback);

				resolve(tlsSocket);
			});
		} catch (error) {
			reject(error);
		}
	})();
});

// This is required to prevent leaking real IP address on ALPN negotiation
const resolveProtocol = http2.auto.createResolveProtocol(new Map(), new Map(), connect);

const request = await http2.auto('https://httpbin.org/anything', {
	agent: {…},
	resolveProtocol
}, response => {
	// Read the response here
});

request.end();
```

See [`unknown-over-unknown.js`](examples/proxies/unknown-over-unknown.js) to learn more.

## Mirroring another server

See [`examples/proxies/mirror.js`](examples/proxies/mirror.js) for an example.

## [WebSockets over HTTP/2](https://tools.ietf.org/html/rfc8441)

See [`examples/ws`](examples/ws) for an example.

## Push streams

See [`examples/push-stream`](examples/push-stream) for an example.

## Related

- [`got`](https://github.com/sindresorhus/got) - Simplified HTTP requests
- [`http2-proxy`](https://github.com/nxtedition/node-http2-proxy) - A simple http/2 & http/1.1 spec compliant proxy helper for Node.

## License

MIT
