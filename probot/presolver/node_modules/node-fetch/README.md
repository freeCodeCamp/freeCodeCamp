
node-fetch
==========

[![npm stable version][npm-image]][npm-url]
[![npm next version][npm-next-image]][npm-url]
[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]
[![install size][install-size-image]][install-size-url]

A light-weight module that brings `window.fetch` to Node.js


## Motivation

Instead of implementing `XMLHttpRequest` in Node.js to run browser-specific [Fetch polyfill](https://github.com/github/fetch), why not go from native `http` to `fetch` API directly? Hence `node-fetch`, minimal code for a `window.fetch` compatible API on Node.js runtime.

See Matt Andrews' [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) or Leonardo Quixada's [cross-fetch](https://github.com/lquixada/cross-fetch) for isomorphic usage (exports `node-fetch` for server-side, `whatwg-fetch` for client-side).


## Features

- Stay consistent with `window.fetch` API.
- Make conscious trade-off when following [whatwg fetch spec][whatwg-fetch] and [stream spec](https://streams.spec.whatwg.org/) implementation details, document known difference.
- Use native promise, but allow substituting it with [insert your favorite promise library].
- Use native stream for body, on both request and response.
- Decode content encoding (gzip/deflate) properly, convert `res.text()` output to UTF-8 optionally.
- Useful extensions such as timeout, redirect limit, response size limit, [explicit errors][ERROR-HANDLING.md] for troubleshooting.


## Difference from client-side fetch

- See [Known Differences][LIMITS.md] for details.
- If you happen to use a missing feature that `window.fetch` offers, feel free to open an issue.
- Pull requests are welcomed too!


## Install

Stable release (`2.x`)

```sh
$ npm install node-fetch --save
```

## Usage

Note that documentation below is up-to-date with `2.x` releases, [see `1.x` readme](https://github.com/bitinn/node-fetch/blob/1.x/README.md), [changelog](https://github.com/bitinn/node-fetch/blob/1.x/CHANGELOG.md) and [2.x upgrade guide][UPGRADE-GUIDE.md] if you want to find out the difference.

```javascript
import fetch from 'node-fetch';
// or
// const fetch = require('node-fetch');

// if you are using your own Promise library, set it through fetch.Promise. Eg.

// import Bluebird from 'bluebird';
// fetch.Promise = Bluebird;

// plain text or html

fetch('https://github.com/')
	.then(res => res.text())
	.then(body => console.log(body));

// json

fetch('https://api.github.com/users/github')
	.then(res => res.json())
	.then(json => console.log(json));

// catching network error
// 3xx-5xx responses are NOT network errors, and should be handled in then()
// you only need one catch() at the end of your promise chain

fetch('http://domain.invalid/')
	.catch(err => console.error(err));

// stream
// the node.js way is to use stream when possible

fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
	.then(res => {
		return new Promise((resolve, reject) => {
			const dest = fs.createWriteStream('./octocat.png');
			res.body.pipe(dest);
			res.body.on('error', err => {
				reject(err);
			});
			dest.on('finish', () => {
				resolve();
			});
			dest.on('error', err => {
				reject(err);
			});
		});
	});

// buffer
// if you prefer to cache binary data in full, use buffer()
// note that buffer() is a node-fetch only API

import fileType from 'file-type';

fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
	.then(res => res.buffer())
	.then(buffer => fileType(buffer))
	.then(type => { /* ... */ });

// meta

fetch('https://github.com/')
	.then(res => {
		console.log(res.ok);
		console.log(res.status);
		console.log(res.statusText);
		console.log(res.headers.raw());
		console.log(res.headers.get('content-type'));
	});

// post

fetch('http://httpbin.org/post', { method: 'POST', body: 'a=1' })
	.then(res => res.json())
	.then(json => console.log(json));

// post with stream from file

import { createReadStream } from 'fs';

const stream = createReadStream('input.txt');
fetch('http://httpbin.org/post', { method: 'POST', body: stream })
	.then(res => res.json())
	.then(json => console.log(json));

// post with JSON

var body = { a: 1 };
fetch('http://httpbin.org/post', { 
	method: 'POST',
	body:    JSON.stringify(body),
	headers: { 'Content-Type': 'application/json' },
})
	.then(res => res.json())
	.then(json => console.log(json));

// post form parameters (x-www-form-urlencoded)

import { URLSearchParams } from 'url';

const params = new URLSearchParams();
params.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: params })
	.then(res => res.json())
	.then(json => console.log(json));

// post with form-data (detect multipart)

import FormData from 'form-data';

const form = new FormData();
form.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: form })
	.then(res => res.json())
	.then(json => console.log(json));

// post with form-data (custom headers)
// note that getHeaders() is non-standard API

import FormData from 'form-data';

const form = new FormData();
form.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: form, headers: form.getHeaders() })
	.then(res => res.json())
	.then(json => console.log(json));

// node 7+ with async function

(async function () {
	const res = await fetch('https://api.github.com/users/github');
	const json = await res.json();
	console.log(json);
})();
```

See [test cases](https://github.com/bitinn/node-fetch/blob/master/test/test.js) for more examples.


## API

### fetch(url[, options])

- `url` A string representing the URL for fetching
- `options` [Options](#fetch-options) for the HTTP(S) request
- Returns: <code>Promise&lt;[Response](#class-response)&gt;</code>

Perform an HTTP(S) fetch.

`url` should be an absolute url, such as `http://example.com/`. A path-relative URL (`/file/under/root`) or protocol-relative URL (`//can-be-http-or-https.com/`) will result in a rejected promise.

<a id="fetch-options"></a>
#### Options

The default values are shown after each option key.

```js
{
	// These properties are part of the Fetch Standard
	method: 'GET',
	headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
	body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
	redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect

	// The following properties are node-fetch extensions
	follow: 20,         // maximum redirect count. 0 to not follow redirect
	timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
	compress: true,     // support gzip/deflate content encoding. false to disable
	size: 0,            // maximum response body size in bytes. 0 to disable
	agent: null         // http(s).Agent instance, allows custom proxy, certificate, lookup, family etc.
}
```

##### Default Headers

If no values are set, the following request headers will be sent automatically:

Header            | Value
----------------- | --------------------------------------------------------
`Accept-Encoding` | `gzip,deflate` _(when `options.compress === true`)_
`Accept`          | `*/*`
`Connection`      | `close` _(when no `options.agent` is present)_
`Content-Length`  | _(automatically calculated, if possible)_
`User-Agent`      | `node-fetch/1.0 (+https://github.com/bitinn/node-fetch)`

<a id="class-request"></a>
### Class: Request

An HTTP(S) request containing information about URL, method, headers, and the body. This class implements the [Body](#iface-body) interface.

Due to the nature of Node.js, the following properties are not implemented at this moment:

- `type`
- `destination`
- `referrer`
- `referrerPolicy`
- `mode`
- `credentials`
- `cache`
- `integrity`
- `keepalive`

The following node-fetch extension properties are provided:

- `follow`
- `compress`
- `counter`
- `agent`

See [options](#fetch-options) for exact meaning of these extensions.

#### new Request(input[, options])

<small>*(spec-compliant)*</small>

- `input` A string representing a URL, or another `Request` (which will be cloned)
- `options` [Options][#fetch-options] for the HTTP(S) request

Constructs a new `Request` object. The constructor is identical to that in the [browser](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request).

In most cases, directly `fetch(url, options)` is simpler than creating a `Request` object.

<a id="class-response"></a>
### Class: Response

An HTTP(S) response. This class implements the [Body](#iface-body) interface.

The following properties are not implemented in node-fetch at this moment:

- `Response.error()`
- `Response.redirect()`
- `type`
- `redirected`
- `trailer`

#### new Response([body[, options]])

<small>*(spec-compliant)*</small>

- `body` A string or [Readable stream][node-readable]
- `options` A [`ResponseInit`][response-init] options dictionary

Constructs a new `Response` object. The constructor is identical to that in the [browser](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response).

Because Node.js does not implement service workers (for which this class was designed), one rarely has to construct a `Response` directly.

#### response.ok

Convenience property representing if the request ended normally. Will evaluate to true if the response status was greater than or equal to 200 but smaller than 300.

<a id="class-headers"></a>
### Class: Headers

This class allows manipulating and iterating over a set of HTTP headers. All methods specified in the [Fetch Standard][whatwg-fetch] are implemented.

#### new Headers([init])

<small>*(spec-compliant)*</small>

- `init` Optional argument to pre-fill the `Headers` object

Construct a new `Headers` object. `init` can be either `null`, a `Headers` object, an key-value map object, or any iterable object.

```js
// Example adapted from https://fetch.spec.whatwg.org/#example-headers-class

const meta = {
  'Content-Type': 'text/xml',
  'Breaking-Bad': '<3'
};
const headers = new Headers(meta);

// The above is equivalent to
const meta = [
  [ 'Content-Type', 'text/xml' ],
  [ 'Breaking-Bad', '<3' ]
];
const headers = new Headers(meta);

// You can in fact use any iterable objects, like a Map or even another Headers
const meta = new Map();
meta.set('Content-Type', 'text/xml');
meta.set('Breaking-Bad', '<3');
const headers = new Headers(meta);
const copyOfHeaders = new Headers(headers);
```

<a id="iface-body"></a>
### Interface: Body

`Body` is an abstract interface with methods that are applicable to both `Request` and `Response` classes.

The following methods are not yet implemented in node-fetch at this moment:

- `formData()`

#### body.body

<small>*(deviation from spec)*</small>

* Node.js [`Readable` stream][node-readable]

The data encapsulated in the `Body` object. Note that while the [Fetch Standard][whatwg-fetch] requires the property to always be a WHATWG `ReadableStream`, in node-fetch it is a Node.js [`Readable` stream][node-readable].

#### body.bodyUsed

<small>*(spec-compliant)*</small>

* `Boolean`

A boolean property for if this body has been consumed. Per spec, a consumed body cannot be used again.

#### body.arrayBuffer()
#### body.blob()
#### body.json()
#### body.text()

<small>*(spec-compliant)*</small>

* Returns: <code>Promise</code>

Consume the body and return a promise that will resolve to one of these formats.

#### body.buffer()

<small>*(node-fetch extension)*</small>

* Returns: <code>Promise&lt;Buffer&gt;</code>

Consume the body and return a promise that will resolve to a Buffer.

#### body.textConverted()

<small>*(node-fetch extension)*</small>

* Returns: <code>Promise&lt;String&gt;</code>

Identical to `body.text()`, except instead of always converting to UTF-8, encoding sniffing will be performed and text converted to UTF-8, if possible.

<a id="class-fetcherror"></a>
### Class: FetchError

<small>*(node-fetch extension)*</small>

An operational error in the fetching process. See [ERROR-HANDLING.md][] for more info.

## License

MIT


## Acknowledgement

Thanks to [github/fetch](https://github.com/github/fetch) for providing a solid implementation reference.


[npm-image]: https://img.shields.io/npm/v/node-fetch.svg?style=flat-square
[npm-next-image]: https://img.shields.io/npm/v/node-fetch/next.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/node-fetch
[travis-image]: https://img.shields.io/travis/bitinn/node-fetch.svg?style=flat-square
[travis-url]: https://travis-ci.org/bitinn/node-fetch
[codecov-image]: https://img.shields.io/codecov/c/github/bitinn/node-fetch.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/bitinn/node-fetch
[install-size-image]: https://packagephobia.now.sh/badge?p=node-fetch
[install-size-url]: https://packagephobia.now.sh/result?p=node-fetch

[ERROR-HANDLING.md]: https://github.com/bitinn/node-fetch/blob/master/ERROR-HANDLING.md
[LIMITS.md]: https://github.com/bitinn/node-fetch/blob/master/LIMITS.md
[UPGRADE-GUIDE.md]: https://github.com/bitinn/node-fetch/blob/master/UPGRADE-GUIDE.md

[whatwg-fetch]: https://fetch.spec.whatwg.org/
[response-init]: https://fetch.spec.whatwg.org/#responseinit
[node-readable]: https://nodejs.org/api/stream.html#stream_readable_streams
