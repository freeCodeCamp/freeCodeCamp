'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Parametric route, request.url contains dash', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:param/b', (req, res, params) => {
    t.assert.equal(params.param, 'foo-bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar/b', headers: {} }, null)
})

test('Parametric route with fixed suffix', t => {
  t.plan(6)
  const findMyWay = FindMyWay({
    defaultRoute: () => t.assert.fail('Should not be defaultRoute')
  })

  findMyWay.on('GET', '/a/:param-static', () => {})
  findMyWay.on('GET', '/b/:param.static', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/a/param-static', {}).params, { param: 'param' })
  t.assert.deepEqual(findMyWay.find('GET', '/b/param.static', {}).params, { param: 'param' })

  t.assert.deepEqual(findMyWay.find('GET', '/a/param-param-static', {}).params, { param: 'param-param' })
  t.assert.deepEqual(findMyWay.find('GET', '/b/param.param.static', {}).params, { param: 'param.param' })

  t.assert.deepEqual(findMyWay.find('GET', '/a/param.param-static', {}).params, { param: 'param.param' })
  t.assert.deepEqual(findMyWay.find('GET', '/b/param-param.static', {}).params, { param: 'param-param' })
})

test('Regex param exceeds max parameter length', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('route not matched')
    }
  })

  findMyWay.on('GET', '/a/:param(^\\w{3})', (req, res, params) => {
    t.assert.fail('regex match')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/fool', headers: {} }, null)
})

test('Parametric route with regexp and fixed suffix / 1', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('route not matched')
    }
  })

  findMyWay.on('GET', '/a/:param(^\\w{3})bar', (req, res, params) => {
    t.assert.fail('regex match')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/$mebar', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/a/foolol', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/a/foobaz', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/a/foolbar', headers: {} }, null)
})

test('Parametric route with regexp and fixed suffix / 2', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:param(^\\w{3})bar', (req, res, params) => {
    t.assert.equal(params.param, 'foo')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foobar', headers: {} }, null)
})

test('Parametric route with regexp and fixed suffix / 3', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:param(^\\w{3}-\\w{3})foo', (req, res, params) => {
    t.assert.equal(params.param, 'abc-def')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/abc-deffoo', headers: {} }, null)
})

test('Multi parametric route / 1', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1-:p2', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
  })

  findMyWay.on('GET', '/b/:p1.:p2', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.bar', headers: {} }, null)
})

test('Multi parametric route / 2', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1-:p2', (req, res, params) => {
    t.assert.equal(params.p1, 'foo-bar')
    t.assert.equal(params.p2, 'baz')
  })

  findMyWay.on('GET', '/b/:p1.:p2', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar-baz')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar-baz', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.bar-baz', headers: {} }, null)
})

test('Multi parametric route / 3', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p_1-:$p', (req, res, params) => {
    t.assert.equal(params.p_1, 'foo')
    t.assert.equal(params.$p, 'bar')
  })

  findMyWay.on('GET', '/b/:p_1.:$p', (req, res, params) => {
    t.assert.equal(params.p_1, 'foo')
    t.assert.equal(params.$p, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.bar', headers: {} }, null)
})

test('Multi parametric route / 4', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('Everything good')
    }
  })

  findMyWay.on('GET', '/a/:p1-:p2', (req, res, params) => {
    t.assert.fail('Should not match this route')
  })

  findMyWay.on('GET', '/b/:p1.:p2', (req, res, params) => {
    t.assert.fail('Should not match this route')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo', headers: {} }, null)
})

test('Multi parametric route with regexp / 1', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/at/:hour(^\\d+)h:minute(^\\d+)m', (req, res, params) => {
    t.assert.equal(params.hour, '0')
    t.assert.equal(params.minute, '42')
  })

  findMyWay.lookup({ method: 'GET', url: '/at/0h42m', headers: {} }, null)
})

test('Multi parametric route with colon separator', t => {
  t.plan(3)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/:param(.*)::suffix', (req, res, params) => {
    t.assert.equal(params.param, 'foo')
  })

  findMyWay.on('GET', '/:param1(.*)::suffix1-:param2(.*)::suffix2/static', (req, res, params) => {
    t.assert.equal(params.param1, 'foo')
    t.assert.equal(params.param2, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/foo:suffix', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/foo:suffix1-bar:suffix2/static', headers: {} }, null)
})

test('Multi parametric route with regexp / 2', t => {
  t.plan(8)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:uuid(^[\\d-]{19})-:user(^\\w+)', (req, res, params) => {
    t.assert.equal(params.uuid, '1111-2222-3333-4444')
    t.assert.equal(params.user, 'foo')
  })

  findMyWay.on('GET', '/a/:uuid(^[\\d-]{19})-:user(^\\w+)/account', (req, res, params) => {
    t.assert.equal(params.uuid, '1111-2222-3333-4445')
    t.assert.equal(params.user, 'bar')
  })

  findMyWay.on('GET', '/b/:uuid(^[\\d-]{19}).:user(^\\w+)', (req, res, params) => {
    t.assert.equal(params.uuid, '1111-2222-3333-4444')
    t.assert.equal(params.user, 'foo')
  })

  findMyWay.on('GET', '/b/:uuid(^[\\d-]{19}).:user(^\\w+)/account', (req, res, params) => {
    t.assert.equal(params.uuid, '1111-2222-3333-4445')
    t.assert.equal(params.user, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/1111-2222-3333-4444-foo', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/a/1111-2222-3333-4445-bar/account', headers: {} }, null)

  findMyWay.lookup({ method: 'GET', url: '/b/1111-2222-3333-4444.foo', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/1111-2222-3333-4445.bar/account', headers: {} }, null)
})

test('Multi parametric route with fixed suffix', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1-:p2-baz', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
  })

  findMyWay.on('GET', '/b/:p1.:p2-baz', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar-baz', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.bar-baz', headers: {} }, null)
})

test('Multi parametric route with regexp and fixed suffix', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1(^\\w+)-:p2(^\\w+)-kuux', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'barbaz')
  })

  findMyWay.on('GET', '/b/:p1(^\\w+).:p2(^\\w+)-kuux', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'barbaz')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-barbaz-kuux', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.barbaz-kuux', headers: {} }, null)
})

test('Multi parametric route with wildcard', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1-:p2/*', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
  })

  findMyWay.on('GET', '/b/:p1.:p2/*', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar/baz', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.bar/baz', headers: {} }, null)
})

test('Nested multi parametric route', t => {
  t.plan(6)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1-:p2/b/:p3', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
    t.assert.equal(params.p3, 'baz')
  })

  findMyWay.on('GET', '/b/:p1.:p2/b/:p3', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, 'bar')
    t.assert.equal(params.p3, 'baz')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar/b/baz', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.bar/b/baz', headers: {} }, null)
})

test('Nested multi parametric route with regexp / 1', t => {
  t.plan(6)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1(^\\w{3})-:p2(^\\d+)/b/:p3', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, '42')
    t.assert.equal(params.p3, 'bar')
  })

  findMyWay.on('GET', '/b/:p1(^\\w{3}).:p2(^\\d+)/b/:p3', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, '42')
    t.assert.equal(params.p3, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-42/b/bar', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.42/b/bar', headers: {} }, null)
})

test('Nested multi parametric route with regexp / 2', t => {
  t.plan(6)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1(^\\w{3})-:p2/b/:p3', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, '42')
    t.assert.equal(params.p3, 'bar')
  })

  findMyWay.on('GET', '/b/:p1(^\\w{3}).:p2/b/:p3', (req, res, params) => {
    t.assert.equal(params.p1, 'foo')
    t.assert.equal(params.p2, '42')
    t.assert.equal(params.p3, 'bar')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-42/b/bar', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/b/foo.42/b/bar', headers: {} }, null)
})
