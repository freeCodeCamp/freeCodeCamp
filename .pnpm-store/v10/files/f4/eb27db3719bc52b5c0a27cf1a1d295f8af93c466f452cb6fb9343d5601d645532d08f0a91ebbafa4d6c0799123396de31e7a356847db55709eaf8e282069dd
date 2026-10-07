'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('pretty print - static routes', (t, done) => {
  t.plan(2)

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.get('/test', () => {})
  fastify.get('/test/hello', () => {})
  fastify.get('/hello/world', () => {})

  fastify.ready(() => {
    const tree = fastify.printRoutes()

    const expected = `\
└── /
    ├── test (GET)
    │   └── /hello (GET)
    └── hello/world (GET)
`

    t.assert.strictEqual(typeof tree, 'string')
    t.assert.strictEqual(tree, expected)
    done()
  })
})

test('pretty print - internal tree - static routes', (t, done) => {
  t.plan(4)

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.get('/test', () => {})
  fastify.get('/test/hello', () => {})
  fastify.get('/hello/world', () => {})

  fastify.put('/test', () => {})
  fastify.put('/test/foo', () => {})

  fastify.ready(() => {
    const getTree = fastify.printRoutes({ method: 'GET' })
    const expectedGetTree = `\
└── /
    ├── test (GET)
    │   └── /hello (GET)
    └── hello/world (GET)
`

    t.assert.strictEqual(typeof getTree, 'string')
    t.assert.strictEqual(getTree, expectedGetTree)

    const putTree = fastify.printRoutes({ method: 'PUT' })
    const expectedPutTree = `\
└── /
    └── test (PUT)
        └── /foo (PUT)
`

    t.assert.strictEqual(typeof putTree, 'string')
    t.assert.strictEqual(putTree, expectedPutTree)
    done()
  })
})

test('pretty print - parametric routes', (t, done) => {
  t.plan(2)

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.get('/test', () => {})
  fastify.get('/test/:hello', () => {})
  fastify.get('/hello/:world', () => {})

  fastify.ready(() => {
    const tree = fastify.printRoutes()

    const expected = `\
└── /
    ├── test (GET)
    │   └── /
    │       └── :hello (GET)
    └── hello/
        └── :world (GET)
`

    t.assert.strictEqual(typeof tree, 'string')
    t.assert.strictEqual(tree, expected)
    done()
  })
})

test('pretty print - internal tree - parametric routes', (t, done) => {
  t.plan(4)

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.get('/test', () => {})
  fastify.get('/test/:hello', () => {})
  fastify.get('/hello/:world', () => {})

  fastify.put('/test', () => {})
  fastify.put('/test/:hello', () => {})

  fastify.ready(() => {
    const getTree = fastify.printRoutes({ method: 'GET' })
    const expectedGetTree = `\
└── /
    ├── test (GET)
    │   └── /
    │       └── :hello (GET)
    └── hello/
        └── :world (GET)
`

    t.assert.strictEqual(typeof getTree, 'string')
    t.assert.strictEqual(getTree, expectedGetTree)

    const putTree = fastify.printRoutes({ method: 'PUT' })
    const expectedPutTree = `\
└── /
    └── test (PUT)
        └── /
            └── :hello (PUT)
`

    t.assert.strictEqual(typeof putTree, 'string')
    t.assert.strictEqual(putTree, expectedPutTree)
    done()
  })
})

test('pretty print - mixed parametric routes', (t, done) => {
  t.plan(2)

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.get('/test', () => {})
  fastify.get('/test/:hello', () => {})
  fastify.post('/test/:hello', () => {})
  fastify.get('/test/:hello/world', () => {})

  fastify.ready(() => {
    const tree = fastify.printRoutes()

    const expected = `\
└── /
    └── test (GET)
        └── /
            └── :hello (GET, POST)
                └── /world (GET)
`

    t.assert.strictEqual(typeof tree, 'string')
    t.assert.strictEqual(tree, expected)
    done()
  })
})

test('pretty print - wildcard routes', (t, done) => {
  t.plan(2)

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.get('/test', () => {})
  fastify.get('/test/*', () => {})
  fastify.get('/hello/*', () => {})

  fastify.ready(() => {
    const tree = fastify.printRoutes()

    const expected = `\
└── /
    ├── test (GET)
    │   └── /
    │       └── * (GET)
    └── hello/
        └── * (GET)
`

    t.assert.strictEqual(typeof tree, 'string')
    t.assert.strictEqual(tree, expected)
    done()
  })
})

test('pretty print - internal tree - wildcard routes', (t, done) => {
  t.plan(4)

  const fastify = Fastify({ exposeHeadRoutes: false })
  fastify.get('/test', () => {})
  fastify.get('/test/*', () => {})
  fastify.get('/hello/*', () => {})

  fastify.put('/*', () => {})
  fastify.put('/test/*', () => {})

  fastify.ready(() => {
    const getTree = fastify.printRoutes({ method: 'GET' })
    const expectedGetTree = `\
└── /
    ├── test (GET)
    │   └── /
    │       └── * (GET)
    └── hello/
        └── * (GET)
`

    t.assert.strictEqual(typeof getTree, 'string')
    t.assert.strictEqual(getTree, expectedGetTree)

    const putTree = fastify.printRoutes({ method: 'PUT' })
    const expectedPutTree = `\
└── /
    ├── test/
    │   └── * (PUT)
    └── * (PUT)
`

    t.assert.strictEqual(typeof putTree, 'string')
    t.assert.strictEqual(putTree, expectedPutTree)
    done()
  })
})

test('pretty print - empty plugins', (t, done) => {
  t.plan(2)

  const fastify = Fastify()
  fastify.ready(() => {
    const tree = fastify.printPlugins()
    t.assert.strictEqual(typeof tree, 'string')
    t.assert.match(tree, /root \d+ ms\n└── bound _after \d+ ms/m)
    done()
  })
})

test('pretty print - nested plugins', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  fastify.register(async function foo (instance) {
    instance.register(async function bar () {})
    instance.register(async function baz () {})
  })
  fastify.ready(() => {
    const tree = fastify.printPlugins()
    t.assert.strictEqual(typeof tree, 'string')
    t.assert.match(tree, /foo/)
    t.assert.match(tree, /bar/)
    t.assert.match(tree, /baz/)
    done()
  })
})

test('pretty print - commonPrefix', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  fastify.get('/hello', () => {})
  fastify.put('/hello', () => {})
  fastify.get('/helicopter', () => {})

  fastify.ready(() => {
    const radixTree = fastify.printRoutes()
    const flatTree = fastify.printRoutes({ commonPrefix: false })

    const radixExpected = `\
└── /
    └── hel
        ├── lo (GET, HEAD, PUT)
        └── icopter (GET, HEAD)
`
    const flatExpected = `\
├── /hello (GET, HEAD, PUT)
└── /helicopter (GET, HEAD)
`
    t.assert.strictEqual(typeof radixTree, 'string')
    t.assert.strictEqual(typeof flatTree, 'string')
    t.assert.strictEqual(radixTree, radixExpected)
    t.assert.strictEqual(flatTree, flatExpected)
    done()
  })
})

test('pretty print - includeMeta, includeHooks', (t, done) => {
  t.plan(6)

  const fastify = Fastify()
  const onTimeout = () => {}
  fastify.get('/hello', () => {})
  fastify.put('/hello', () => {})
  fastify.get('/helicopter', () => {})

  fastify.addHook('onRequest', () => {})
  fastify.addHook('onTimeout', onTimeout)

  fastify.ready(() => {
    const radixTree = fastify.printRoutes({ includeHooks: true, includeMeta: ['errorHandler'] })
    const flatTree = fastify.printRoutes({ commonPrefix: false, includeHooks: true, includeMeta: ['errorHandler'] })
    const hooksOnly = fastify.printRoutes({ commonPrefix: false, includeHooks: true })

    const radixExpected = `\
└── /
    └── hel
        ├── lo (GET, PUT)
        │   • (onTimeout) ["onTimeout()"]
        │   • (onRequest) ["anonymous()"]
        │   • (errorHandler) "defaultErrorHandler()"
        │   lo (HEAD)
        │   • (onTimeout) ["onTimeout()"]
        │   • (onRequest) ["anonymous()"]
        │   • (onSend) ["headRouteOnSendHandler()"]
        │   • (errorHandler) "defaultErrorHandler()"
        └── icopter (GET)
            • (onTimeout) ["onTimeout()"]
            • (onRequest) ["anonymous()"]
            • (errorHandler) "defaultErrorHandler()"
            icopter (HEAD)
            • (onTimeout) ["onTimeout()"]
            • (onRequest) ["anonymous()"]
            • (onSend) ["headRouteOnSendHandler()"]
            • (errorHandler) "defaultErrorHandler()"
`
    const flatExpected = `\
├── /hello (GET, PUT)
│   • (onTimeout) ["onTimeout()"]
│   • (onRequest) ["anonymous()"]
│   • (errorHandler) "defaultErrorHandler()"
│   /hello (HEAD)
│   • (onTimeout) ["onTimeout()"]
│   • (onRequest) ["anonymous()"]
│   • (onSend) ["headRouteOnSendHandler()"]
│   • (errorHandler) "defaultErrorHandler()"
└── /helicopter (GET)
    • (onTimeout) ["onTimeout()"]
    • (onRequest) ["anonymous()"]
    • (errorHandler) "defaultErrorHandler()"
    /helicopter (HEAD)
    • (onTimeout) ["onTimeout()"]
    • (onRequest) ["anonymous()"]
    • (onSend) ["headRouteOnSendHandler()"]
    • (errorHandler) "defaultErrorHandler()"
`

    const hooksOnlyExpected = `\
├── /hello (GET, PUT)
│   • (onTimeout) ["onTimeout()"]
│   • (onRequest) ["anonymous()"]
│   /hello (HEAD)
│   • (onTimeout) ["onTimeout()"]
│   • (onRequest) ["anonymous()"]
│   • (onSend) ["headRouteOnSendHandler()"]
└── /helicopter (GET)
    • (onTimeout) ["onTimeout()"]
    • (onRequest) ["anonymous()"]
    /helicopter (HEAD)
    • (onTimeout) ["onTimeout()"]
    • (onRequest) ["anonymous()"]
    • (onSend) ["headRouteOnSendHandler()"]
`
    t.assert.strictEqual(typeof radixTree, 'string')
    t.assert.strictEqual(typeof flatTree, 'string')
    t.assert.strictEqual(typeof hooksOnlyExpected, 'string')
    t.assert.strictEqual(radixTree, radixExpected)
    t.assert.strictEqual(flatTree, flatExpected)
    t.assert.strictEqual(hooksOnly, hooksOnlyExpected)
    done()
  })
})
