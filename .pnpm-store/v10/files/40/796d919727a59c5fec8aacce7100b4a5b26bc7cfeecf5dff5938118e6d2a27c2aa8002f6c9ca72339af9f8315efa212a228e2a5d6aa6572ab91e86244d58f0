# Web Frameworks

Since HTTP logging is a primary use case, Pino has first-class support for the Node.js
web framework ecosystem.

- [Web Frameworks](#web-frameworks)
  - [Pino with Fastify](#pino-with-fastify)
  - [Pino with Express](#pino-with-express)
  - [Pino with Hapi](#pino-with-hapi)
  - [Pino with Restify](#pino-with-restify)
  - [Pino with Koa](#pino-with-koa)
  - [Pino with Node core `http`](#pino-with-node-core-http)
  - [Pino with Nest](#pino-with-nest)
  - [Pino with H3](#pino-with-h3)
  - [Pino with Hono](#pino-with-hono)

<a id="fastify"></a>
## Pino with Fastify

The Fastify web framework comes bundled with Pino by default, simply set Fastify's
`logger` option to `true` and use `request.log` or `reply.log` for log messages that correspond
to each request:

```js
const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  request.log.info('something')
  return { hello: 'world' }
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

The `logger` option can also be set to an object, which will be passed through directly
as the [`pino` options object](/docs/api.md#options-object).

See the [fastify documentation](https://www.fastify.io/docs/latest/Reference/Logging/) for more information.

<a id="express"></a>
## Pino with Express

```sh
npm install pino-http
```

```js
const app = require('express')()
const pino = require('pino-http')()

app.use(pino)

app.get('/', function (req, res) {
  req.log.info('something')
  res.send('hello world')
})

app.listen(3000)
```

See the [pino-http README](https://npm.im/pino-http) for more info.

<a id="hapi"></a>
## Pino with Hapi

```sh
npm install hapi-pino
```

```js
'use strict'

const Hapi = require('@hapi/hapi')
const Pino = require('hapi-pino');

async function start () {
  // Create a server with a host and port
  const server = Hapi.server({
    host: 'localhost',
    port: 3000
  })

  // Add the route
  server.route({
    method: 'GET',
    path: '/',
    handler: async function (request, h) {
      // request.log is HAPI's standard way of logging
      request.log(['a', 'b'], 'Request into hello world')

      // a pino instance can also be used, which will be faster
      request.logger.info('In handler %s', request.path)

      return 'hello world'
    }
  })

  await server.register(Pino)

  // also as a decorated API
  server.logger.info('another way for accessing it')

  // and through Hapi standard logging system
  server.log(['subsystem'], 'third way for accessing it')

  await server.start()

  return server
}

start().catch((err) => {
  console.log(err)
  process.exit(1)
})
```

See the [hapi-pino README](https://npm.im/hapi-pino) for more info.

<a id="restify"></a>
## Pino with Restify

```sh
npm install restify-pino-logger
```

```js
const server = require('restify').createServer({name: 'server'})
const pino = require('restify-pino-logger')()

server.use(pino)

server.get('/', function (req, res) {
  req.log.info('something')
  res.send('hello world')
})

server.listen(3000)
```

See the [restify-pino-logger README](https://npm.im/restify-pino-logger) for more info.

<a id="koa"></a>
## Pino with Koa

```sh
npm install koa-pino-logger
```

```js
const Koa = require('koa')
const app = new Koa()
const pino = require('koa-pino-logger')()

app.use(pino)

app.use((ctx) => {
  ctx.log.info('something else')
  ctx.body = 'hello world'
})

app.listen(3000)
```

See the [koa-pino-logger README](https://github.com/pinojs/koa-pino-logger) for more info.

<a id="http"></a>
## Pino with Node core `http`

```sh
npm install pino-http
```

```js
const http = require('http')
const server = http.createServer(handle)
const logger = require('pino-http')()

function handle (req, res) {
  logger(req, res)
  req.log.info('something else')
  res.end('hello world')
}

server.listen(3000)
```

See the [pino-http README](https://npm.im/pino-http) for more info.


<a id="nest"></a>
## Pino with Nest

```sh
npm install nestjs-pino
```

```ts
import { NestFactory } from '@nestjs/core'
import { Controller, Get, Module } from '@nestjs/common'
import { LoggerModule, Logger } from 'nestjs-pino'

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}

  @Get()
  getHello() {
    this.logger.log('something')
    return `Hello world`
  }
}

@Module({
  controllers: [AppController],
  imports: [LoggerModule.forRoot()]
})
class MyModule {}

async function bootstrap() {
  const app = await NestFactory.create(MyModule)
  await app.listen(3000)
}
bootstrap()
```

See the [nestjs-pino README](https://npm.im/nestjs-pino) for more info.


<a id="h3"></a>
## Pino with H3

```sh
npm install pino-http h3
```

Save as `server.mjs`:

```js
import { createApp, createRouter, eventHandler, fromNodeMiddleware } from "h3";
import pino from 'pino-http'

export const app = createApp();

const router = createRouter();
app.use(router);
app.use(fromNodeMiddleware(pino()))

app.use(eventHandler((event) => {
  event.node.req.log.info('something')
  return 'hello world'
}))

router.get(
  "/",
  eventHandler((event) => {
    return { path: event.path, message: "Hello World!" };
  }),
);
```

Execute `npx --yes listhen -w --open ./server.mjs`.

See the [pino-http README](https://npm.im/pino-http) for more info.


<a id="hono"></a>
## Pino with Hono

```sh
npm install pino pino-http hono
```

```js
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { requestId } from 'hono/request-id';
import { pinoHttp } from 'pino-http';

const app = new Hono();
app.use(requestId());
app.use(async (c, next) => {
  // pass hono's request-id to pino-http
  c.env.incoming.id = c.var.requestId;

  // map express style middleware to hono
  await new Promise((resolve) => pinoHttp()(c.env.incoming, c.env.outgoing, () => resolve()));

  c.set('logger', c.env.incoming.log);

  await next();
});

app.get('/', (c) => {
  c.var.logger.info('something');

  return c.text('Hello Node.js!');
});

serve(app);
```

See the [pino-http README](https://npm.im/pino-http) for more info.
