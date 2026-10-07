'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('pretty print - empty tree', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  const tree = findMyWay.prettyPrint({ method: 'GET' })

  const expected = '(empty tree)'
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - static routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test/hello', () => {})
  findMyWay.on('GET', '/hello/world', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET' })
  const expected = `\
└── /
    ├── test (GET)
    │   └── /hello (GET)
    └── hello/world (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - parametric routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test/:hello', () => {})
  findMyWay.on('GET', '/hello/:world', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET' })
  const expected = `\
└── /
    ├── test (GET)
    │   └── /
    │       └── :hello (GET)
    └── hello/
        └── :world (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - parametric routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/static', () => {})
  findMyWay.on('GET', '/static/:param/suffix1', () => {})
  findMyWay.on('GET', '/static/:param(123)/suffix2', () => {})
  findMyWay.on('GET', '/static/:param(123).end/suffix3', () => {})
  findMyWay.on('GET', '/static/:param1(123).:param2(456)/suffix4', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET' })
  const expected = `\
└── /
    └── static (GET)
        └── /
            ├── :param(123).end
            │   └── /suffix3 (GET)
            ├── :param(123)
            │   └── /suffix2 (GET)
            ├── :param1(123).:param2(456)
            │   └── /suffix4 (GET)
            └── :param
                └── /suffix1 (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - parametric routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/static', () => {})
  findMyWay.on('GET', '/static/:param/suffix1', () => {})
  findMyWay.on('GET', '/static/:param(123)/suffix2', () => {})
  findMyWay.on('GET', '/static/:param(123).end/suffix3', () => {})
  findMyWay.on('GET', '/static/:param1(123).:param2(456)/suffix4', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET', commonPrefix: false })
  const expected = `\
└── /static (GET)
    ├── /:param(123).end/suffix3 (GET)
    ├── /:param(123)/suffix2 (GET)
    ├── /:param1(123).:param2(456)/suffix4 (GET)
    └── /:param/suffix1 (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - mixed parametric routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test/:hello', () => {})
  findMyWay.on('POST', '/test/:hello', () => {})
  findMyWay.on('GET', '/test/:hello/world', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET' })
  const expected = `\
└── /
    └── test (GET)
        └── /
            └── :hello (GET)
                └── /world (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - wildcard routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test/*', () => {})
  findMyWay.on('GET', '/hello/*', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET' })
  const expected = `\
└── /
    ├── test (GET)
    │   └── /
    │       └── * (GET)
    └── hello/
        └── * (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - parametric routes with same parent and followed by a static route which has the same prefix with the former routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test/hello/:id', () => {})
  findMyWay.on('POST', '/test/hello/:id', () => {})
  findMyWay.on('GET', '/test/helloworld', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET' })
  const expected = `\
└── /
    └── test (GET)
        └── /hello
            ├── /
            │   └── :id (GET)
            └── world (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - constrained parametric routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test', { constraints: { host: 'auth.fastify.io' } }, () => {})
  findMyWay.on('GET', '/test/:hello', () => {})
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '1.1.2' } }, () => {})
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '2.0.0' } }, () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET' })
  const expected = `\
└── /
    └── test (GET)
        test (GET) {"host":"auth.fastify.io"}
        └── /
            └── :hello (GET)
                :hello (GET) {"version":"1.1.2"}
                :hello (GET) {"version":"2.0.0"}
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print - multiple parameters are drawn appropriately', t => {
  t.plan(2)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/test', () => {})
  // routes with a nested parameter (i.e. no handler for the /:param) were breaking the display
  findMyWay.on('GET', '/test/:hello/there/:ladies', () => {})
  findMyWay.on('GET', '/test/:hello/there/:ladies/and/:gents', () => {})
  findMyWay.on('GET', '/test/are/:you/:ready/to/:rock', () => {})

  const tree = findMyWay.prettyPrint({ method: 'GET', commonPrefix: false })
  const expected = `\
└── /test (GET)
    ├── /are/:you/:ready/to/:rock (GET)
    └── /:hello/there/:ladies (GET)
        └── /and/:gents (GET)
`
  t.assert.equal(typeof tree, 'string')
  t.assert.equal(tree, expected)
})

test('pretty print commonPrefix - use routes array to draw flattened routes', t => {
  t.plan(4)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test/hello', () => {})
  findMyWay.on('GET', '/testing', () => {})
  findMyWay.on('GET', '/testing/:param', () => {})
  findMyWay.on('GET', '/update', () => {})

  const radixTree = findMyWay.prettyPrint({ method: 'GET', commonPrefix: true })
  const arrayTree = findMyWay.prettyPrint({ method: 'GET', commonPrefix: false })

  const radixExpected = `\
└── /
    ├── test (GET)
    │   ├── /hello (GET)
    │   └── ing (GET)
    │       └── /
    │           └── :param (GET)
    └── update (GET)
`

  const arrayExpected = `\
├── /test (GET)
│   ├── /hello (GET)
│   └── ing (GET)
│       └── /:param (GET)
└── /update (GET)
`

  t.assert.equal(typeof radixTree, 'string')
  t.assert.equal(radixTree, radixExpected)

  t.assert.equal(typeof arrayTree, 'string')
  t.assert.equal(arrayTree, arrayExpected)
})

test('pretty print commonPrefix - handle wildcard root', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '*', () => {})
  findMyWay.on('GET', '/test/hello', () => {})
  findMyWay.on('GET', '/testing', () => {})
  findMyWay.on('GET', '/testing/:param', () => {})
  findMyWay.on('PUT', '/update', () => {})

  const arrayTree = findMyWay.prettyPrint({ method: 'GET', commonPrefix: false })
  const arrayExpected = `\
├── /test/hello (GET)
├── /testing (GET)
│   └── /:param (GET)
└── * (GET)
`
  t.assert.equal(typeof arrayTree, 'string')
  t.assert.equal(arrayTree, arrayExpected)
})

test('pretty print commonPrefix - handle wildcard root', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '*', () => {})
  findMyWay.on('GET', '/test/hello', () => {})
  findMyWay.on('GET', '/testing', () => {})
  findMyWay.on('GET', '/testing/:param', () => {})
  findMyWay.on('PUT', '/update', () => {})

  const radixTree = findMyWay.prettyPrint({ method: 'GET' })
  const radixExpected = `\
└── (empty root node)
    ├── /
    │   └── test
    │       ├── /hello (GET)
    │       └── ing (GET)
    │           └── /
    │               └── :param (GET)
    └── * (GET)
`
  t.assert.equal(typeof radixTree, 'string')
  t.assert.equal(radixTree, radixExpected)
})

test('pretty print commonPrefix - handle constrained routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test', { constraints: { host: 'auth.fastify.io' } }, () => {})
  findMyWay.on('GET', '/test/:hello', () => {})
  findMyWay.on('PUT', '/test/:hello', () => {})
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '1.1.2' } }, () => {})
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '2.0.0' } }, () => {})

  const arrayTree = findMyWay.prettyPrint({ method: 'GET', commonPrefix: false })
  const arrayExpected = `\
└── /test (GET)
    /test (GET) {"host":"auth.fastify.io"}
    └── /:hello (GET)
        /:hello (GET) {"version":"1.1.2"}
        /:hello (GET) {"version":"2.0.0"}
`
  t.assert.equal(typeof arrayTree, 'string')
  t.assert.equal(arrayTree, arrayExpected)
})

test('pretty print includeMeta - commonPrefix: true', t => {
  t.plan(6)

  const findMyWay = FindMyWay()
  const namedFunction = () => {}
  const store = {
    onRequest: [() => {}, namedFunction],
    onTimeout: [() => {}],
    genericMeta: 'meta',
    mixedMeta: ['mixed items', { an: 'object' }],
    objectMeta: { one: '1', two: 2 },
    functionMeta: namedFunction
  }

  store[Symbol('symbolKey')] = Symbol('symbolValue')

  findMyWay.on('GET', '/test', () => {}, store)
  findMyWay.on('GET', '/test', { constraints: { host: 'auth.fastify.io' } }, () => {}, store)
  findMyWay.on('GET', '/testing/:hello', () => {}, store)
  findMyWay.on('PUT', '/tested/:hello', () => {}, store)
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '1.1.2' } }, () => {})
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '2.0.0' } }, () => {})

  const radixTree = findMyWay.prettyPrint({
    method: 'GET',
    commonPrefix: true,
    includeMeta: true
  })
  const radixTreeExpected = `\
└── /
    └── test (GET)
        • (onRequest) ["anonymous()","namedFunction()"]
        • (onTimeout) ["anonymous()"]
        • (genericMeta) "meta"
        • (mixedMeta) ["mixed items",{"an":"object"}]
        • (objectMeta) {"one":"1","two":2}
        • (functionMeta) "namedFunction()"
        • (Symbol(symbolKey)) "Symbol(symbolValue)"
        test (GET) {"host":"auth.fastify.io"}
        • (onRequest) ["anonymous()","namedFunction()"]
        • (onTimeout) ["anonymous()"]
        • (genericMeta) "meta"
        • (mixedMeta) ["mixed items",{"an":"object"}]
        • (objectMeta) {"one":"1","two":2}
        • (functionMeta) "namedFunction()"
        • (Symbol(symbolKey)) "Symbol(symbolValue)"
        ├── ing/
        │   └── :hello (GET)
        │       • (onRequest) ["anonymous()","namedFunction()"]
        │       • (onTimeout) ["anonymous()"]
        │       • (genericMeta) "meta"
        │       • (mixedMeta) ["mixed items",{"an":"object"}]
        │       • (objectMeta) {"one":"1","two":2}
        │       • (functionMeta) "namedFunction()"
        │       • (Symbol(symbolKey)) "Symbol(symbolValue)"
        └── /
            └── :hello (GET) {"version":"1.1.2"}
                :hello (GET) {"version":"2.0.0"}
`
  const radixTreeSpecific = findMyWay.prettyPrint({
    method: 'GET',
    commonPrefix: true,
    includeMeta: ['onTimeout', 'objectMeta', 'nonExistent']
  })
  const radixTreeSpecificExpected = `\
└── /
    └── test (GET)
        • (onTimeout) ["anonymous()"]
        • (objectMeta) {"one":"1","two":2}
        test (GET) {"host":"auth.fastify.io"}
        • (onTimeout) ["anonymous()"]
        • (objectMeta) {"one":"1","two":2}
        ├── ing/
        │   └── :hello (GET)
        │       • (onTimeout) ["anonymous()"]
        │       • (objectMeta) {"one":"1","two":2}
        └── /
            └── :hello (GET) {"version":"1.1.2"}
                :hello (GET) {"version":"2.0.0"}
`
  const radixTreeNoMeta = findMyWay.prettyPrint({
    method: 'GET',
    commonPrefix: true,
    includeMeta: false
  })
  const radixTreeNoMetaExpected = `\
└── /
    └── test (GET)
        test (GET) {"host":"auth.fastify.io"}
        ├── ing/
        │   └── :hello (GET)
        └── /
            └── :hello (GET) {"version":"1.1.2"}
                :hello (GET) {"version":"2.0.0"}
`
  t.assert.equal(typeof radixTree, 'string')
  t.assert.equal(radixTree, radixTreeExpected)

  t.assert.equal(typeof radixTreeSpecific, 'string')
  t.assert.equal(radixTreeSpecific, radixTreeSpecificExpected)

  t.assert.equal(typeof radixTreeNoMeta, 'string')
  t.assert.equal(radixTreeNoMeta, radixTreeNoMetaExpected)
})

test('pretty print includeMeta - commonPrefix: false', t => {
  t.plan(6)

  const findMyWay = FindMyWay()
  const namedFunction = () => {}
  const store = {
    onRequest: [() => {}, namedFunction],
    onTimeout: [() => {}],
    genericMeta: 'meta',
    mixedMeta: ['mixed items', { an: 'object' }],
    objectMeta: { one: '1', two: 2 },
    functionMeta: namedFunction
  }

  store[Symbol('symbolKey')] = Symbol('symbolValue')

  findMyWay.on('GET', '/test', () => {}, store)
  findMyWay.on('GET', '/test', { constraints: { host: 'auth.fastify.io' } }, () => {}, store)
  findMyWay.on('GET', '/testing/:hello', () => {}, store)
  findMyWay.on('PUT', '/tested/:hello', () => {}, store)
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '1.1.2' } }, () => {})
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '2.0.0' } }, () => {})

  const arrayTree = findMyWay.prettyPrint({
    method: 'GET',
    commonPrefix: false,
    includeMeta: true
  })
  const arrayExpected = `\
└── /test (GET)
    • (onRequest) ["anonymous()","namedFunction()"]
    • (onTimeout) ["anonymous()"]
    • (genericMeta) "meta"
    • (mixedMeta) ["mixed items",{"an":"object"}]
    • (objectMeta) {"one":"1","two":2}
    • (functionMeta) "namedFunction()"
    • (Symbol(symbolKey)) "Symbol(symbolValue)"
    /test (GET) {"host":"auth.fastify.io"}
    • (onRequest) ["anonymous()","namedFunction()"]
    • (onTimeout) ["anonymous()"]
    • (genericMeta) "meta"
    • (mixedMeta) ["mixed items",{"an":"object"}]
    • (objectMeta) {"one":"1","two":2}
    • (functionMeta) "namedFunction()"
    • (Symbol(symbolKey)) "Symbol(symbolValue)"
    ├── ing/:hello (GET)
    │   • (onRequest) ["anonymous()","namedFunction()"]
    │   • (onTimeout) ["anonymous()"]
    │   • (genericMeta) "meta"
    │   • (mixedMeta) ["mixed items",{"an":"object"}]
    │   • (objectMeta) {"one":"1","two":2}
    │   • (functionMeta) "namedFunction()"
    │   • (Symbol(symbolKey)) "Symbol(symbolValue)"
    └── /:hello (GET) {"version":"1.1.2"}
        /:hello (GET) {"version":"2.0.0"}
`
  const arraySpecific = findMyWay.prettyPrint({
    method: 'GET',
    commonPrefix: false,
    includeMeta: ['onRequest', 'mixedMeta', 'nonExistent']
  })
  const arraySpecificExpected = `\
└── /test (GET)
    • (onRequest) ["anonymous()","namedFunction()"]
    • (mixedMeta) ["mixed items",{"an":"object"}]
    /test (GET) {"host":"auth.fastify.io"}
    • (onRequest) ["anonymous()","namedFunction()"]
    • (mixedMeta) ["mixed items",{"an":"object"}]
    ├── ing/:hello (GET)
    │   • (onRequest) ["anonymous()","namedFunction()"]
    │   • (mixedMeta) ["mixed items",{"an":"object"}]
    └── /:hello (GET) {"version":"1.1.2"}
        /:hello (GET) {"version":"2.0.0"}
`
  const arrayNoMeta = findMyWay.prettyPrint({
    method: 'GET',
    commonPrefix: false,
    includeMeta: false
  })
  const arrayNoMetaExpected = `\
└── /test (GET)
    /test (GET) {"host":"auth.fastify.io"}
    ├── ing/:hello (GET)
    └── /:hello (GET) {"version":"1.1.2"}
        /:hello (GET) {"version":"2.0.0"}
`

  t.assert.equal(typeof arrayTree, 'string')
  t.assert.equal(arrayTree, arrayExpected)

  t.assert.equal(typeof arraySpecific, 'string')
  t.assert.equal(arraySpecific, arraySpecificExpected)

  t.assert.equal(typeof arrayNoMeta, 'string')
  t.assert.equal(arrayNoMeta, arrayNoMetaExpected)
})

test('pretty print includeMeta - buildPrettyMeta function', t => {
  t.plan(4)

  const findMyWay = FindMyWay({
    buildPrettyMeta: route => {
      return { metaKey: route.method === 'GET' ? route.path : 'not a GET route' }
    }
  })
  const namedFunction = () => {}
  const store = {
    onRequest: [() => {}, namedFunction],
    onTimeout: [() => {}],
    genericMeta: 'meta',
    mixedMeta: ['mixed items', { an: 'object' }],
    objectMeta: { one: '1', two: 2 },
    functionMeta: namedFunction
  }

  store[Symbol('symbolKey')] = Symbol('symbolValue')

  findMyWay.on('GET', '/test', () => {}, store)
  findMyWay.on('GET', '/test', { constraints: { host: 'auth.fastify.io' } }, () => {}, store)
  findMyWay.on('GET', '/test/:hello', () => {}, store)
  findMyWay.on('PUT', '/test/:hello', () => {}, store)
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '1.1.2' } }, () => {})
  findMyWay.on('GET', '/test/:hello', { constraints: { version: '2.0.0' } }, () => {})

  const arrayTree = findMyWay.prettyPrint({
    method: 'GET',
    commonPrefix: false,
    includeMeta: true
  })
  const arrayExpected = `\
└── /test (GET)
    • (metaKey) "/test"
    /test (GET) {"host":"auth.fastify.io"}
    • (metaKey) "/test"
    └── /:hello (GET)
        • (metaKey) "/test/:hello"
        /:hello (GET) {"version":"1.1.2"}
        • (metaKey) "/test/:hello"
        /:hello (GET) {"version":"2.0.0"}
        • (metaKey) "/test/:hello"
`
  const radixTree = findMyWay.prettyPrint({
    method: 'GET',
    includeMeta: true
  })
  const radixExpected = `\
└── /
    └── test (GET)
        • (metaKey) "/test"
        test (GET) {"host":"auth.fastify.io"}
        • (metaKey) "/test"
        └── /
            └── :hello (GET)
                • (metaKey) "/test/:hello"
                :hello (GET) {"version":"1.1.2"}
                • (metaKey) "/test/:hello"
                :hello (GET) {"version":"2.0.0"}
                • (metaKey) "/test/:hello"
`
  t.assert.equal(typeof arrayTree, 'string')
  t.assert.equal(arrayTree, arrayExpected)

  t.assert.equal(typeof radixTree, 'string')
  t.assert.equal(radixTree, radixExpected)
})
