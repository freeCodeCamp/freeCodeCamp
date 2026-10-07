# decompress-response [![Build Status](https://travis-ci.com/sindresorhus/decompress-response.svg?branch=master)](https://travis-ci.com/sindresorhus/decompress-response)

> Decompress a HTTP response if needed

Decompresses the [response](https://nodejs.org/api/http.html#http_class_http_incomingmessage) from [`http.request`](https://nodejs.org/api/http.html#http_http_request_options_callback) if it's gzipped, deflated or compressed with Brotli, otherwise just passes it through.

Used by [`got`](https://github.com/sindresorhus/got).

## Install

```
$ npm install decompress-response
```

## Usage

```js
const http = require('http');
const decompressResponse = require('decompress-response');

http.get('https://sindresorhus.com', response => {
	response = decompressResponse(response);
});
```

## API

### decompressResponse(response)

Returns the decompressed HTTP response stream.

#### response

Type: [`http.IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

The HTTP incoming stream with compressed data.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-decompress-response?utm_source=npm-decompress-response&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
