<h1 align="center">Fastify</h1>

## `Content-Type` Parser
Fastify natively supports `'application/json'` and `'text/plain'` content types
with a default charset of `utf-8`. These default parsers can be changed or
removed.

Unsupported content types will throw an `FST_ERR_CTP_INVALID_MEDIA_TYPE` error.

To support other content types, use the `addContentTypeParser` API or an
existing [plugin](https://fastify.dev/ecosystem/).

As with other APIs, `addContentTypeParser` is encapsulated in the scope in which
it is declared. If declared in the root scope, it is available everywhere; if
declared in a plugin, it is available only in that scope and its children.

Fastify automatically adds the parsed request payload to the [Fastify
request](./Request.md) object, accessible via `request.body`.

> **Important:** When using a body schema with the
> [`content`](./Validation-and-Serialization.md#body-content-type-validation)
> property to validate per content type, only content types listed in the schema
> will be validated. If you add a custom content type parser but do not include
> its content type in the body schema's `content` property, the incoming data
> will be parsed but **not validated**.

Note that for `GET` and `HEAD` requests, the payload is never parsed. For
`OPTIONS` and `DELETE` requests, the payload is parsed only if a valid
`content-type` header is provided. Unlike `POST`, `PUT`, and `PATCH`, the
[catch-all](#catch-all) parser is not executed, and the payload is simply not
parsed.

> ⚠ Warning:
> When using regular expressions to detect `Content-Type`, it is important to
> ensure proper detection. For example, to match `application/*`, use
> `/^application\/([\w-]+);?/` to match the
> [essence MIME type](https://mimesniff.spec.whatwg.org/#mime-type-miscellaneous)
> only.
>
> Additionally, if the route uses per-content-type body validation via
> `schema.body.content`, the schema is selected by an **exact match** on the
> essence MIME type, not by the parser's regex. A regex parser that accepts
> content types with no matching key in the `content` schema map will result
> in those requests **not being validated**. Ensure every content type matched
> by the regex has a corresponding entry in the schema's `content` map. See
> [Validation and Serialization](./Validation-and-Serialization.md) for details.

### Usage
```js
fastify.addContentTypeParser('application/jsoff', function (request, payload, done) {
  jsoffParser(payload, function (err, body) {
    done(err, body)
  })
})

// Handle multiple content types with the same function
fastify.addContentTypeParser(['text/xml', 'application/xml'], function (request, payload, done) {
  xmlParser(payload, function (err, body) {
    done(err, body)
  })
})

// Async is also supported in Node versions >= 8.0.0
fastify.addContentTypeParser('application/jsoff', async function (request, payload) {
  const res = await jsoffParserAsync(payload)

  return res
})

// Handle all content types that matches RegExp
fastify.addContentTypeParser(/^image\/([\w-]+);?/, function (request, payload, done) {
  imageParser(payload, function (err, body) {
    done(err, body)
  })
})

// Can use default JSON/Text parser for different content Types
fastify.addContentTypeParser('text/json', { parseAs: 'string' }, fastify.getDefaultJsonParser('ignore', 'ignore'))
```

Fastify first tries to match a content-type parser with a `string` value before
trying to find a matching `RegExp`. For overlapping content types, it starts
with the last one configured and ends with the first (last in, first out).
To specify a general content type more precisely, first specify the general
type, then the specific one, as shown below.

```js
// Here only the second content type parser is called because its value also matches the first one
fastify.addContentTypeParser('application/vnd.custom+xml', (request, body, done) => {} )
fastify.addContentTypeParser('application/vnd.custom', (request, body, done) => {} )

// Here the desired behavior is achieved because fastify first tries to match the
// `application/vnd.custom+xml` content type parser
fastify.addContentTypeParser('application/vnd.custom', (request, body, done) => {} )
fastify.addContentTypeParser('application/vnd.custom+xml', (request, body, done) => {} )
```

### Using addContentTypeParser with fastify.register
When using `addContentTypeParser` with `fastify.register`, avoid `await`
when registering routes. Using `await` makes route registration asynchronous,
potentially registering routes before `addContentTypeParser` is set.

#### Correct Usage
```js
const fastify = require('fastify')();


fastify.register((fastify, opts) => {
  fastify.addContentTypeParser('application/json', function (request, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  fastify.get('/hello', async (req, res) => {});
});
```

In addition to `addContentTypeParser`, the `hasContentTypeParser`,
`removeContentTypeParser`, and `removeAllContentTypeParsers` APIs are available.

#### hasContentTypeParser

Use the `hasContentTypeParser` API to check if a specific content type parser
exists.

```js
if (!fastify.hasContentTypeParser('application/jsoff')){
  fastify.addContentTypeParser('application/jsoff', function (request, payload, done) {
    jsoffParser(payload, function (err, body) {
      done(err, body)
    })
  })
}
```

#### removeContentTypeParser

`removeContentTypeParser` can remove a single content type or an array of
content types, supporting both `string` and `RegExp`.

```js
fastify.addContentTypeParser('text/xml', function (request, payload, done) {
  xmlParser(payload, function (err, body) {
    done(err, body)
  })
})

// Removes the both built-in content type parsers so that only the content type parser for text/html is available
fastify.removeContentTypeParser(['application/json', 'text/plain'])
```

#### removeAllContentTypeParsers
The `removeAllContentTypeParsers` API removes all existing content type parsers
eliminating the need to specify each one individually. This API supports
encapsulation and is useful for registering a
[catch-all content type parser](#catch-all) that should be executed for every
content type, ignoring built-in parsers.

```js
fastify.removeAllContentTypeParsers()

fastify.addContentTypeParser('text/xml', function (request, payload, done) {
  xmlParser(payload, function (err, body) {
    done(err, body)
  })
})
```

> ℹ️ Note:
> `function(req, done)` and `async function(req)` are
> still supported but deprecated.

#### Body Parser
The request body can be parsed in two ways. First, add a custom content type
parser and handle the request stream. Or second, use the `parseAs` option in the
`addContentTypeParser` API, specifying `'string'` or `'buffer'`. Fastify will
handle the stream, check the [maximum size](./Server.md#factory-body-limit) of
the body, and the content length. If the limit is exceeded, the custom parser
will not be invoked.
```js
fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
  try {
    const json = JSON.parse(body)
    done(null, json)
  } catch (err) {
    err.statusCode = 400
    done(err, undefined)
  }
})
```

See
[`example/parser.js`](https://github.com/fastify/fastify/blob/main/examples/parser.js)
for an example.

##### Custom Parser Options
+ `parseAs` (string): `'string'` or `'buffer'` to designate how the incoming
  data should be collected. Default: `'buffer'`.
+ `bodyLimit` (number): The maximum payload size, in bytes, that the custom
  parser will accept. Defaults to the global body limit passed to the [`Fastify
  factory function`](./Server.md#bodylimit).

#### Catch-All
To catch all requests regardless of content type, use the `'*'` content type:
```js
fastify.addContentTypeParser('*', function (request, payload, done) {
  let data = ''
  payload.on('data', chunk => { data += chunk })
  payload.on('end', () => {
    done(null, data)
  })
})
```
All requests without a corresponding content type parser will be handled by
this function.

This is also useful for piping the request stream. Define a content parser like:

```js
fastify.addContentTypeParser('*', function (request, payload, done) {
  done()
})
```

And then access the core HTTP request directly for piping:

```js
app.post('/hello', (request, reply) => {
  reply.send(request.raw)
})
```

Here is a complete example that logs incoming [json
line](https://jsonlines.org/) objects:

```js
const split2 = require('split2')
const pump = require('pump')

fastify.addContentTypeParser('*', (request, payload, done) => {
  done(null, pump(payload, split2(JSON.parse)))
})

fastify.route({
  method: 'POST',
  url: '/api/log/jsons',
  handler: (req, res) => {
    req.body.on('data', d => console.log(d)) // log every incoming object
  }
})
 ```

For piping file uploads, check out
[`@fastify/multipart`](https://github.com/fastify/fastify-multipart).

To execute the content type parser on all content types, call
`removeAllContentTypeParsers` first.

```js
// Without this call, the request body with the content type application/json would be processed by the built-in JSON parser
fastify.removeAllContentTypeParsers()

fastify.addContentTypeParser('*', function (request, payload, done) {
  const data = ''
  payload.on('data', chunk => { data += chunk })
  payload.on('end', () => {
    done(null, data)
  })
})
```
