# responselike

> A response-like object for mocking a Node.js HTTP response stream

Returns a streamable response object similar to a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage). Useful for formatting cached responses so they can be consumed by code expecting a real response.

## Install

```sh
npm install responselike
```

## Usage

```js
import Response from 'responselike';

const response = new Response({
	statusCode: 200,
	headers: {
		foo: 'bar'
	},
	body: Buffer.from('Hi!'),
	url: 'https://example.com'
});

response.statusCode;
// 200

response.headers;
// {foo: 'bar'}

response.body;
// <Buffer 48 69 21>

response.url;
// 'https://example.com'

response.pipe(process.stdout);
// 'Hi!'
```

## API

### new Response(options?)

Returns a streamable response object similar to a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage).

#### options

Type: `object`

##### statusCode

Type: `number`

The HTTP response status code.

##### headers

Type: `object`

The HTTP headers. Keys will be automatically lowercased.

##### body

Type: `Buffer`

The response body. The Buffer contents will be streamable but is also exposed directly as `response.body`.

##### url

Type: `string`

The request URL string.
