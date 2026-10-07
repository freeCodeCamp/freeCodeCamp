# @fastify/accepts

[![CI](https://github.com/fastify/fastify-accepts/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify-accepts/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/accepts.svg?style=flat)](https://www.npmjs.com/package/@fastify/accepts)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Add an accepts parser to Fastify.

## Install

`npm i @fastify/accepts`

### Compatibility

| Plugin version | Fastify version |
| ---------------|-----------------|
| `>=5.x`        | `^5.x`          |
| `^4.x`         | `^4.x`          |
| `>=2.x <4.x`   | `^3.x`          |
| `^1.x`         | `^2.x`          |
| `^1.x`         | `^1.x`          |


Please note that if a Fastify version is out of support, then so are the corresponding versions of this plugin
in the table above.
See [Fastify's LTS policy](https://github.com/fastify/fastify/blob/main/docs/Reference/LTS.md) for more details.

## Usage

```js
const fastify = require('fastify')
const Boom = require('@hapi/boom')

fastify.register(require('@fastify/accepts'))

fastify.post('/', function (req, reply) {
  const accept = req.accepts() // Accepts object
  switch(accept.type(['json', 'html'])) {
    case 'json':
      reply.type('application/json').send({hello: 'world'})
      break
    case 'html':
      reply.type('text/html').send('<b>hello, world!</b>')
      break
    default:
      reply.send(Boom.notAcceptable('unacceptable'))
      break
  }
})
```

See [accepts package](https://www.npmjs.com/package/accepts) for all available APIs.

This plugin adds to `Request` object all `Accepts` object methods.

```js
fastify.post('/', function (req, reply) {
  req.charset(['utf-8'])
  req.charsets()
  req.encoding(['gzip', 'compress'])
  req.encodings()
  req.language(['es', 'en'])
  req.languages()
  req.type(['image/png', 'image/tiff'])
  req.types()
})
```

### Options

- `decorateReply` If `true`, the `Reply` object will be decorated with the `requestAccepts`, `requestTypes`, `requestCharsets`, `requestEncodings`, and `requestLanguages` methods, which will return the corresponding values from the `Request` object. Default: `false`.

## License

Licensed under [MIT](./LICENSE).
