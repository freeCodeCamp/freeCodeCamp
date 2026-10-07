'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('wildcard (more complex test)', t => {
  t.plan(3)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '/test/*', (req, res, params) => {
    switch (params['*']) {
      case 'hello':
        t.assert.ok('correct parameter')
        break
      case 'hello/world':
        t.assert.ok('correct parameter')
        break
      case '':
        t.assert.ok('correct parameter')
        break
      default:
        t.assert.fail('wrong parameter: ' + params['*'])
    }
  })

  findMyWay.lookup(
    { method: 'GET', url: '/test/hello', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'GET', url: '/test/hello/world', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'GET', url: '/test/', headers: {} },
    null
  )
})

test('Wildcard inside a node with a static route but different method', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '/test/hello', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.lookup(
    { method: 'GET', url: '/test/hello', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test/hello', headers: {} },
    null
  )
})

test('Wildcard inside a node with a static route but different method (more complex case)', t => {
  t.plan(5)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      if (req.url === '/test/helloo' && req.method === 'GET') {
        t.assert.ok('Everything fine')
      } else {
        t.assert.fail('we should not be here, the url is: ' + req.url)
      }
    }
  })

  findMyWay.on('GET', '/test/hello', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.lookup(
    { method: 'GET', url: '/test/hello', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'GET', url: '/test/helloo', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test/', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test/helloo', headers: {} },
    null
  )
})

test('Wildcard edge cases', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '/test1/foo', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/test2/foo', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.equal(params['*'], 'test1/foo')
  })

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test1/foo', headers: {} },
    null
  )
})

test('Wildcard edge cases same method', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('OPTIONS', '/test1/foo', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.on('OPTIONS', '/test2/foo', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.equal(params['*'], 'test/foo')
  })

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test1/foo', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test/foo', headers: {} },
    null
  )
})

test('Wildcard and parametric edge cases', t => {
  t.plan(3)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('OPTIONS', '/test1/foo', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.on('OPTIONS', '/test2/foo', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/:test/foo', (req, res, params) => {
    t.assert.equal(params.test, 'example')
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.equal(params['*'], 'test/foo/hey')
  })

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test1/foo', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'OPTIONS', url: '/test/foo/hey', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'GET', url: '/example/foo', headers: {} },
    null
  )
})

test('Mixed wildcard and static with same method', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '/foo1/bar1/baz', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/bar2/baz', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo2/bar2/baz', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.equal(params['*'], '/foo1/bar1/kuux')
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo1/bar1/kuux', headers: {} },
    null
  )
})

test('Nested wildcards case - 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.equal(params['*'], 'bar1/kuux')
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo1/bar1/kuux', headers: {} },
    null
  )
})

test('Nested wildcards case - 2', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.equal(params['*'], 'bar1/kuux')
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo1/bar1/kuux', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.equal(params['*'], 'bar1/kuux')
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo4/param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo1/bar1/kuux', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 2', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.equal(params.param, 'bar1')
  })

  findMyWay.on('GET', '/foo4/param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo3/bar1', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 3', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo4/param', (req, res, params) => {
    t.assert.equal(req.url, '/foo4/param')
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo4/param', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 4', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/param', (req, res, params) => {
    t.assert.equal(req.url, '/foo1/param')
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo1/param', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 5', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.equal(params['*'], 'param/hello/test/long/routee')
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/param/hello/test/long/route', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo1/param/hello/test/long/routee', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 6', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.equal(params['*'], '/foo4/param/hello/test/long/routee')
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo4/param/hello/test/long/route', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo4/param/hello/test/long/routee', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 7', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.equal(params.param, 'hello')
  })

  findMyWay.on('GET', '/foo3/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo4/example/hello/test/long/route', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo3/hello', headers: {} },
    null
  )
})

test('Nested wildcards with parametric and static - 8', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo2/*', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/:param', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo3/*', (req, res, params) => {
    t.assert.equal(params['*'], 'hello/world')
  })

  findMyWay.on('GET', '/foo4/param/hello/test/long/route', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo3/hello/world', headers: {} },
    null
  )
})

test('Wildcard node with constraints', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', { constraints: { host: 'fastify.io' } }, (req, res, params) => {
    t.assert.equal(params['*'], '/foo1/foo3')
  })

  findMyWay.on('GET', '/foo1/*', { constraints: { host: 'something-else.io' } }, (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.on('GET', '/foo1/foo2', (req, res, params) => {
    t.assert.fail('we should not be here, the url is: ' + req.url)
  })

  findMyWay.lookup(
    { method: 'GET', url: '/foo1/foo3', headers: { host: 'fastify.io' } },
    null
  )
})

test('Wildcard must be the last character in the route', (t) => {
  t.plan(6)

  const expectedError = new Error('Wildcard must be the last character in the route')

  const findMyWay = FindMyWay()

  t.assert.throws(() => findMyWay.on('GET', '*1', () => {}), expectedError)
  t.assert.throws(() => findMyWay.on('GET', '*/', () => {}), expectedError)
  t.assert.throws(() => findMyWay.on('GET', '*?', () => {}), expectedError)

  t.assert.throws(() => findMyWay.on('GET', '/foo*123', () => {}), expectedError)
  t.assert.throws(() => findMyWay.on('GET', '/foo*?', () => {}), expectedError)
  t.assert.throws(() => findMyWay.on('GET', '/foo*/', () => {}), expectedError)
})
