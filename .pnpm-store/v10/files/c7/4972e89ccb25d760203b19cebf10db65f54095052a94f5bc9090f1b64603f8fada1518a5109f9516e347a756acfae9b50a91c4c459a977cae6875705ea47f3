# pino-std-serializers&nbsp;&nbsp;[![CI](https://github.com/pinojs/pino-std-serializers/workflows/CI/badge.svg)](https://github.com/pinojs/pino-std-serializers/actions?query=workflow%3ACI)

This module provides a set of standard object serializers for the
[Pino](https://getpino.io) logger.

## Serializers

### `exports.err(error)`
Serializes an `Error` like object. Returns an object:

```js
{
  type: 'string', // The name of the object's constructor.
  message: 'string', // The supplied error message.
  stack: 'string', // The stack when the error was generated.
  raw: Error  // Non-enumerable, i.e. will not be in the output, original
              // Error object. This is available for subsequent serializers
              // to use.
  [...any additional Enumerable property the original Error had]
}
```

Any other extra properties, e.g. `statusCode`, that have been attached to the
object will also be present on the serialized object.

If the error object has a [`cause`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause) property, the `cause`'s `message` and `stack` will be appended to the top-level `message` and `stack`. All other parameters that belong to the `error.cause` object will be omitted.

Example:

```js
const serializer = require('pino-std-serializers').err;

const innerError = new Error("inner error");
innerError.isInner = true;
const outerError = new Error("outer error", { cause: innerError });
outerError.isInner = false;

const serialized = serializer(outerError);
/* Result:
{
  "type": "Error",
  "message": "outer error: inner error",
  "isInner": false,
  "stack": "Error: outer error
        at <...omitted..>
    caused by: Error: inner error
        at <...omitted..>
}
 */
```

### `exports.errWithCause(error)`
Serializes an `Error` like object, including any `error.cause`. Returns an object:

```js
{
  type: 'string', // The name of the object's constructor.
  message: 'string', // The supplied error message.
  stack: 'string', // The stack when the error was generated.
  cause?: Error, // If the original error had an error.cause, it will be serialized here
  raw: Error  // Non-enumerable, i.e. will not be in the output, original
              // Error object. This is available for subsequent serializers
              // to use.
  [...any additional Enumerable property the original Error had]
}
```

Any other extra properties, e.g. `statusCode`, that have been attached to the object will also be present on the serialized object.

Example:
```javascript
const serializer = require('pino-std-serializers').errWithCause;

const innerError = new Error("inner error");
innerError.isInner = true;
const outerError = new Error("outer error", { cause: innerError });
outerError.isInner = false;

const serialized = serializer(outerError);
/* Result:
{
  "type": "Error",
  "message": "outer error",
  "isInner": false,
  "stack": "Error: outer error
    at <...omitted..>",
  "cause": {
    "type": "Error",
    "message": "inner error",
    "isInner": true,
    "stack": "Error: inner error
      at <...omitted..>"
  },
}
 */
```

### `exports.mapHttpResponse(response)`
Used internally by Pino for general response logging. Returns an object:

```js
{
  res: {}
}
```

Where `res` is the `response` as serialized by the standard response serializer.

### `exports.mapHttpRequest(request)`
Used internall by Pino for general request logging. Returns an object:

```js
{
  req: {}
}
```

Where `req` is the `request` as serialized by the standard request serializer.

### `exports.req(request)`
The default `request` serializer. Returns an object:

```js
{
  id: 'string', // Defaults to `undefined`, unless there is an `id` property
                // already attached to the `request` object or to the `request.info`
                // object. Attach a synchronous function
                // to the `request.id` that returns an identifier to have
                // the value filled.
  method: 'string',
  url: 'string', // the request pathname (as per req.url in core HTTP)
  query: 'object', // the request query (as per req.query in express or hapi)
  params: 'object', // the request params (as per req.params in express or hapi)
  headers: Object, // a reference to the `headers` object from the request
                   // (as per req.headers in core HTTP)
  remoteAddress: 'string',
  remotePort: Number,
  raw: Object // Non-enumerable, i.e. will not be in the output, original
              // request object. This is available for subsequent serializers
              // to use. In cases where the `request` input already has
              // a `raw` property this will replace the original `request.raw`
              // property
}
```

### `exports.res(response)`
The default `response` serializer. Returns an object:

```js
{
  statusCode: Number, // Response status code, will be null before headers are flushed
  headers: Object, // The headers to be sent in the response.
  raw: Object // Non-enumerable, i.e. will not be in the output, original
              // response object. This is available for subsequent serializers
              // to use.
}
```

### `exports.wrapErrorSerializer(customSerializer)`
A utility method for wrapping the default error serializer. This allows
custom serializers to work with the already serialized object.

The `customSerializer` accepts one parameter — the newly serialized error
object — and returns the new (or updated) error object.

### `exports.wrapRequestSerializer(customSerializer)`
A utility method for wrapping the default request serializer. This allows
custom serializers to work with the already serialized object.

The `customSerializer` accepts one parameter — the newly serialized request
object — and returns the new (or updated) request object.

### `exports.wrapResponseSerializer(customSerializer)`
A utility method for wrapping the default response serializer. This allows
custom serializers to work with the already serialized object.

The `customSerializer` accepts one parameter — the newly serialized response
object — and returns the new (or updated) response object.

## License

MIT License
