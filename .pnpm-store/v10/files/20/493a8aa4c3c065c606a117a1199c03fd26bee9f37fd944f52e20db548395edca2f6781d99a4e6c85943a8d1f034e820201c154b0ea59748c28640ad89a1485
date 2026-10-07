<h1 style="text-align: center;">Fastify</h1>

# Testing
<a id="testing"></a>

Testing is one of the most important parts of developing an application. Fastify
is very flexible when it comes to testing and is compatible with most testing
frameworks (such as [Node Test Runner](https://nodejs.org/api/test.html),
which is used in the examples below).

## Application

Let's `cd` into a fresh directory called 'testing-example' and type `npm init
-y` in our terminal.

Run `npm i fastify && npm i pino-pretty -D`

### Separating concerns makes testing easy

First, we are going to separate our application code from our server code:

**app.js**:

```js
'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)
  app.get('/', async function (request, reply) {
    return { hello: 'world' }
  })

  return app
}

module.exports = build
```

**server.js**:

```js
'use strict'

const server = require('./app')({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty'
    }
  }
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
```

### Benefits of using fastify.inject()

Fastify comes with built-in support for fake HTTP injection thanks to
[`light-my-request`](https://github.com/fastify/light-my-request).

Before introducing any tests, we will use the `.inject` method to make a fake
request to our route:

**app.test.js**:

```js
'use strict'

const build = require('./app')

const test = async () => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  console.log('status code: ', response.statusCode)
  console.log('body: ', response.body)
}
test()
```

First, our code will run inside an asynchronous function, giving us access to
async/await.

`.inject` ensures all registered plugins have booted up and our application is
ready to test. Finally, we pass the request method we want to use and a route.
Using await we can store the response without a callback.



Run the test file in your terminal `node app.test.js`

```sh
status code:  200
body:  {"hello":"world"}
```



### Testing with HTTP injection

Now we can replace our `console.log` calls with actual tests!

In your `package.json` change the "test" script to:

`"test": "node --test --watch"`

**app.test.js**:

```js
'use strict'

const { test } = require('node:test')
const build = require('./app')

test('requests the "/" route', async t => {
  t.plan(1)
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })
  t.assert.strictEqual(response.statusCode, 200, 'returns a status code of 200')
})
```

Finally, run `npm test` in the terminal and see your test results!

The `inject` method can do much more than a simple GET request to a URL:
```js
fastify.inject({
  method: String,
  url: String,
  query: Object,
  payload: Object,
  headers: Object,
  cookies: Object
}, (error, response) => {
  // your tests
})
```

`.inject` methods can also be chained by omitting the callback function:

```js
fastify
  .inject()
  .get('/')
  .headers({ foo: 'bar' })
  .query({ foo: 'bar' })
  .end((err, res) => { // the .end call will trigger the request
    console.log(res.payload)
  })
```

or in the promisified version

```js
fastify
  .inject({
    method: String,
    url: String,
    query: Object,
    payload: Object,
    headers: Object,
    cookies: Object
  })
  .then(response => {
    // your tests
  })
  .catch(err => {
    // handle error
  })
```

Async await is supported as well!
```js
try {
  const res = await fastify.inject({ method: String, url: String, payload: Object, headers: Object })
  // your tests
} catch (err) {
  // handle error
}
```

#### Another Example:

**app.js**
```js
const Fastify = require('fastify')

function buildFastify () {
  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  return fastify
}

module.exports = buildFastify
```

**test.js**
```js
const { test } = require('node:test')
const buildFastify = require('./app')

test('GET `/` route', t => {
  t.plan(4)

  const fastify = buildFastify()

  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.after(() => fastify.close())

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, response) => {
    t.assert.ifError(err)
    t.assert.strictEqual(response.statusCode, 200)
    t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
    t.assert.deepStrictEqual(response.json(), { hello: 'world' })
  })
})
```

### Testing with a running server
Fastify can also be tested after starting the server with `fastify.listen()` or
after initializing routes and plugins with `fastify.ready()`.

#### Example:

Uses **app.js** from the previous example.

**test-listen.js** (testing with [`undici`](https://www.npmjs.com/package/undici))
```js
const { test } = require('node:test')
const { Client } = require('undici')
const buildFastify = require('./app')

test('should work with undici', async t => {
  t.plan(2)

  const fastify = buildFastify()

  await fastify.listen()

   const client = new Client(
    'http://localhost:' + fastify.server.address().port, {
      keepAliveTimeout: 10,
      keepAliveMaxTimeout: 10
    }
  )

  t.after(() => {
    fastify.close()
    client.close()
  })

  const response = await client.request({ method: 'GET', path: '/' })

  t.assert.strictEqual(await response.body.text(), '{"hello":"world"}')
  t.assert.strictEqual(response.statusCode, 200)
})
```

Alternatively, starting with Node.js 18,
[`fetch`](https://nodejs.org/docs/latest-v18.x/api/globals.html#fetch)
may be used without requiring any extra dependencies:

**test-listen.js**
```js
const { test } = require('node:test')
const buildFastify = require('./app')

test('should work with fetch', async t => {
  t.plan(3)

  const fastify = buildFastify()

  t.after(() => fastify.close())

  await fastify.listen()

  const response = await fetch(
    'http://localhost:' + fastify.server.address().port
  )

  t.assert.strictEqual(response.status, 200)
  t.assert.strictEqual(
    response.headers.get('content-type'),
    'application/json; charset=utf-8'
  )
  const jsonResult = await response.json()
  t.assert.strictEqual(jsonResult.hello, 'world')
})
```

**test-ready.js** (testing with
[`SuperTest`](https://www.npmjs.com/package/supertest))
```js
const { test } = require('node:test')
const supertest = require('supertest')
const buildFastify = require('./app')

test('GET `/` route', async (t) => {
  const fastify = buildFastify()

  t.after(() => fastify.close())

  await fastify.ready()

  const response = await supertest(fastify.server)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(response.body, { hello: 'world' })
})
```

### How to inspect node tests
1. Isolate your test by passing the `{only: true}` option
```javascript
test('should ...', {only: true}, t => ...)
```
2. Run `node --test`
```bash
> node --test --test-only --inspect-brk test/<test-file.test.js>
```
- `--test-only` specifies to run tests with the `only` option enabled
- `--inspect-brk` will launch the node debugger
3. In VS Code, create and launch a `Node.js: Attach` debug configuration. No
   modification should be necessary.

Now you should be able to step through your test file (and the rest of
`Fastify`) in your code editor.



## Plugins
Let's `cd` into a fresh directory called 'testing-plugin-example' and type
`npm init -y` in our terminal.

Run `npm i fastify fastify-plugin`

**plugin/myFirstPlugin.js**:

```js
const fP = require("fastify-plugin")

async function myPlugin(fastify, options) {
    fastify.decorateRequest("helloRequest", "Hello World")
    fastify.decorate("helloInstance", "Hello Fastify Instance")
}

module.exports = fP(myPlugin)
```

A basic example of a Plugin. See [Plugin Guide](./Plugins-Guide.md)

**test/myFirstPlugin.test.js**:

```js
const Fastify = require("fastify");
const { test } = require("node:test");
const myPlugin = require("../plugin/myFirstPlugin");

test("Test the Plugin Route", async t => {
    // Create a mock fastify application to test the plugin
    const fastify = Fastify()

    fastify.register(myPlugin)

    // Add an endpoint of your choice
    fastify.get("/", async (request, reply) => {
        return ({ message: request.helloRequest })
    })

    // Use fastify.inject to fake a HTTP Request
    const fastifyResponse = await fastify.inject({
        method: "GET",
        url: "/"
    })

  console.log('status code: ', fastifyResponse.statusCode)
  console.log('body: ', fastifyResponse.body)
})
```
Learn more about [```fastify.inject()```](#benefits-of-using-fastifyinject).
Run the test file in your terminal `node test/myFirstPlugin.test.js`

```sh
status code:  200
body:  {"message":"Hello World"}
```

Now we can replace our `console.log` calls with actual tests!

In your `package.json` change the "test" script to:

`"test": "node --test --watch"`

Create the test for the endpoint.

**test/myFirstPlugin.test.js**:

```js
const Fastify = require("fastify");
const { test } = require("node:test");
const myPlugin = require("../plugin/myFirstPlugin");

test("Test the Plugin Route", async t => {
    // Specifies the number of test
    t.plan(2)

    const fastify = Fastify()

    fastify.register(myPlugin)

    fastify.get("/", async (request, reply) => {
        return ({ message: request.helloRequest })
    })

    const fastifyResponse = await fastify.inject({
        method: "GET",
        url: "/"
    })

    t.assert.strictEqual(fastifyResponse.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(fastifyResponse.body), { message: "Hello World" })
})
```

Finally, run `npm test` in the terminal and see your test results!

Test the ```.decorate()``` and ```.decorateRequest()```.

**test/myFirstPlugin.test.js**:

```js
const Fastify = require("fastify");
const { test }= require("node:test");
const myPlugin = require("../plugin/myFirstPlugin");

test("Test the Plugin Route", async t => {
    t.plan(5)
    const fastify = Fastify()

    fastify.register(myPlugin)

    fastify.get("/", async (request, reply) => {
        // Testing the fastify decorators
        t.assert.ifError(request.helloRequest)
        t.assert.ok(request.helloRequest, "Hello World")
        t.assert.ok(fastify.helloInstance, "Hello Fastify Instance")
        return ({ message: request.helloRequest })
    })

    const fastifyResponse = await fastify.inject({
        method: "GET",
        url: "/"
    })
    t.assert.strictEqual(fastifyResponse.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(fastifyResponse.body), { message: "Hello World" })
})
```
