<h1 align="center">Fastify</h1>

## Logging

### Enable Logging
Logging is disabled by default. Enable it by passing `{ logger: true }` or
`{ logger: { level: 'info' } }` when creating a Fastify instance. Note that if
the logger is disabled, it cannot be enabled at runtime.
[abstract-logging](https://www.npmjs.com/package/abstract-logging) is used for
this purpose.

As Fastify is focused on performance, it uses
[pino](https://github.com/pinojs/pino) as its logger, with the default log
level set to `'info'` when enabled.

#### Basic logging setup
Enabling the production JSON logger:

```js
const fastify = require('fastify')({
  logger: true
})
```

#### Environment-Specific Configuration
Enabling the logger with appropriate configuration for local development,
production, and test environments requires more configuration:

```js
const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}
const fastify = require('fastify')({
  logger: envToLogger[environment] ?? true // defaults to true if no entry matches in the map
})
```
⚠️ `pino-pretty` needs to be installed as a dev dependency. It is not included
by default for performance reasons.

### Usage
The logger can be used in route handlers as follows:

```js
fastify.get('/', options, function (request, reply) {
  request.log.info('Some info about the current request')
  reply.send({ hello: 'world' })
})
```

Trigger new logs outside route handlers using the Pino instance from the Fastify
instance:
```js
fastify.log.info('Something important happened!');
```

#### Passing Logger Options
To pass options to the logger, provide them to Fastify. See the
[Pino documentation](https://github.com/pinojs/pino/blob/main/docs/api.md#options)
for available options. To specify a file destination, use:

```js
const fastify = require('fastify')({
  logger: {
    level: 'info',
    file: '/path/to/file' // Will use pino.destination()
  }
})

fastify.get('/', options, function (request, reply) {
  request.log.info('Some info about the current request')
  reply.send({ hello: 'world' })
})
```

To pass a custom stream to the Pino instance, add a `stream` field to the logger
object:

```js
const split = require('split2')
const stream = split(JSON.parse)

const fastify = require('fastify')({
  logger: {
    level: 'info',
    stream: stream
  }
})
```

### Advanced Logger Configuration

<a id="logging-request-id"></a>
#### Request ID Tracking
By default, Fastify adds an ID to every request for easier tracking. If the
`requestIdHeader` option is set and the corresponding header is present, its
value is used; otherwise, a new incremental ID is generated. See Fastify Factory
[`requestIdHeader`](./Server.md#factory-request-id-header) and Fastify Factory
[`genReqId`](./Server.md#genreqid) for customization options.

> ⚠ Warning:
> Enabling `requestIdHeader` allows any callers to set `reqId` to a
> value of their choosing.
> No validation is performed on `requestIdHeader`.

#### Serializers
The default logger uses standard serializers for objects with `req`, `res`, and
`err` properties. The `req` object is the Fastify [`Request`](./Request.md)
object, and the `res` object is the Fastify [`Reply`](./Reply.md) object. This
behavior can be customized with custom serializers.

```js
const fastify = require('fastify')({
  logger: {
    serializers: {
      req (request) {
        return { url: request.url }
      }
    }
  }
})
```
For example, the response payload and headers could be logged using the approach
below (not recommended):

```js
const fastify = require('fastify')({
  logger: {
    transport: {
      target: 'pino-pretty'
    },
    serializers: {
      res (reply) {
        // The default
        return {
          statusCode: reply.statusCode
        }
      },
      req (request) {
        return {
          method: request.method,
          url: request.url,
          path: request.routeOptions.url,
          parameters: request.params,
          // Including headers in the log could violate privacy laws,
          // e.g., GDPR. Use the "redact" option to remove sensitive
          // fields. It could also leak authentication data in the logs.
          headers: request.headers
        };
      }
    }
  }
});
```

> ℹ️ Note:
> In some cases, the [`Reply`](./Reply.md) object passed to the `res`
> serializer cannot be fully constructed. When writing a custom `res`
> serializer, check for the existence of any properties on `reply` aside from
> `statusCode`, which is always present. For example, verify the existence of
> `getHeaders` before calling it:

```js
const fastify = require('fastify')({
  logger: {
    transport: {
      target: 'pino-pretty'
    },
    serializers: {
      res (reply) {
        // The default
        return {
          statusCode: reply.statusCode,
          headers: typeof reply.getHeaders === 'function'
            ? reply.getHeaders()
            : {}
        }
      },
    }
  }
});
```

> ℹ️ Note:
> The body cannot be serialized inside a `req` method because the
> request is serialized when the child logger is created. At that time, the body
> is not yet parsed.

See the following approach to log `req.body`:

```js
app.addHook('preHandler', function (req, reply, done) {
  if (req.body) {
    req.log.info({ body: req.body }, 'parsed body')
  }
  done()
})
```

> ℹ️ Note:
> Ensure serializers never throw errors, as this can cause the Node
> process to exit. See the
> [Pino documentation](https://getpino.io/#/docs/api?id=opt-serializers) for more
> information.

*Any logger other than Pino will ignore this option.*

### Using Custom Loggers
A custom logger instance can be supplied by passing it as `loggerInstance`. The
logger must conform to the Pino interface, with methods: `info`, `error`,
`debug`, `fatal`, `warn`, `trace`, `silent`, `child`, and a string property
`level`.

Example:

```js
const log = require('pino')({ level: 'info' })
const fastify = require('fastify')({ loggerInstance: log })

log.info('does not have request information')

fastify.get('/', function (request, reply) {
  request.log.info('includes request information, but is the same logger instance as `log`')
  reply.send({ hello: 'world' })
})
```

*The logger instance for the current request is available in every part of the
[lifecycle](./Lifecycle.md).*

### Log Redaction

[Pino](https://getpino.io) supports low-overhead log redaction for obscuring
values of specific properties in recorded logs. For example, log all HTTP
headers except the `Authorization` header for security:

```js
const fastify = Fastify({
  logger: {
    stream: stream,
    redact: ['req.headers.authorization'],
    level: 'info',
    serializers: {
      req (request) {
        return {
          method: request.method,
          url: request.url,
          headers: request.headers,
          host: request.host,
          remoteAddress: request.ip,
          remotePort: request.socket.remotePort
        }
      }
    }
  }
})
```

See https://getpino.io/#/docs/redaction for more details.
