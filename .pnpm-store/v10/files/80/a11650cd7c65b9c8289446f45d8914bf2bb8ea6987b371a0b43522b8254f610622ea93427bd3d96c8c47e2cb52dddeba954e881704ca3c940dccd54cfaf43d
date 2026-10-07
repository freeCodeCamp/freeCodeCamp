import {Buffer} from 'node:buffer';
import {Readable as ReadableStream} from 'node:stream';

export type Options = {
	/**
	The HTTP response status code.
	*/
	readonly statusCode: number;

	/**
	The HTTP headers object.

	Keys are in lowercase.
	*/
	readonly headers: Record<string, string>;

	/**
	The response body.

	The contents will be streamable but is also exposed directly as `response.body`.
	*/
	readonly body: Buffer;

	/**
	The request URL string.
	*/
	readonly url: string;
};

/**
Returns a streamable response object similar to a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage).

@example
```
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
*/
export default class Response extends ReadableStream {
	/**
	The HTTP response status code.
	*/
	readonly statusCode: number;

	/**
	The HTTP headers.

	Keys will be automatically lowercased.
	*/
	readonly headers: Record<string, string>;

	/**
	The response body.
	*/
	readonly body: Buffer;

	/**
	The request URL string.
	*/
	readonly url: string;

	constructor(options?: Options);
}
