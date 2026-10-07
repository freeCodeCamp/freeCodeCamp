'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('route with matching regex', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.fail('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:id(^\\d+$)', () => {
    t.assert.ok('regex match')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/12', headers: {} }, null)
})

test('route without matching regex', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.ok('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:id(^\\d+$)', () => {
    t.assert.fail('regex match')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/test', headers: {} }, null)
})

test('route with an extension regex 2', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req) => {
      t.assert.fail(`route not matched: ${req.url}`)
    }
  })
  findMyWay.on('GET', '/test/S/:file(^\\S+).png', () => {
    t.assert.ok('regex match')
  })
  findMyWay.on('GET', '/test/D/:file(^\\D+).png', () => {
    t.assert.ok('regex match')
  })
  findMyWay.lookup({ method: 'GET', url: '/test/S/foo.png', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/D/foo.png', headers: {} }, null)
})

test('nested route with matching regex', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.fail('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:id(^\\d+$)/hello', () => {
    t.assert.ok('regex match')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/12/hello', headers: {} }, null)
})

test('mixed nested route with matching regex', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.fail('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:id(^\\d+$)/hello/:world', (req, res, params) => {
    t.assert.equal(params.id, '12')
    t.assert.equal(params.world, 'world')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/12/hello/world', headers: {} }, null)
})

test('mixed nested route with double matching regex', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.fail('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:id(^\\d+$)/hello/:world(^\\d+$)', (req, res, params) => {
    t.assert.equal(params.id, '12')
    t.assert.equal(params.world, '15')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/12/hello/15', headers: {} }, null)
})

test('mixed nested route without double matching regex', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.ok('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:id(^\\d+$)/hello/:world(^\\d+$)', (req, res, params) => {
    t.assert.fail('route mathed')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/12/hello/test', headers: {} }, null)
})

test('route with an extension regex', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.fail('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:file(^\\d+).png', () => {
    t.assert.ok('regex match')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/12.png', headers: {} }, null)
})

test('route with an extension regex - no match', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.ok('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:file(^\\d+).png', () => {
    t.assert.fail('regex match')
  })

  findMyWay.lookup({ method: 'GET', url: '/test/aa.png', headers: {} }, null)
})

test('safe decodeURIComponent', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.ok('route not matched')
    }
  })

  findMyWay.on('GET', '/test/:id(^\\d+$)', () => {
    t.assert.fail('we should not be here')
  })

  t.assert.deepEqual(
    findMyWay.find('GET', '/test/hel%"Flo', {}),
    null
  )
})

test('Should check if a regex is safe to use', t => {
  t.plan(13)

  const noop = () => {}

  // https://github.com/substack/safe-regex/blob/master/test/regex.js
  const good = [
    /\bOakland\b/,
    /\b(Oakland|San Francisco)\b/i,
    /^\d+1337\d+$/i,
    /^\d+(1337|404)\d+$/i,
    /^\d+(1337|404)*\d+$/i,
    RegExp(Array(26).join('a?') + Array(26).join('a'))
  ]

  const bad = [
    /^(a?){25}(a){25}$/,
    RegExp(Array(27).join('a?') + Array(27).join('a')),
    /(x+x+)+y/,
    /foo|(x+x+)+y/,
    /(a+){10}y/,
    /(a+){2}y/,
    /(.*){1,32000}[bc]/
  ]

  const findMyWay = FindMyWay()

  good.forEach(regex => {
    try {
      findMyWay.on('GET', `/test/:id(${regex.toString()})`, noop)
      t.assert.ok('ok')
      findMyWay.off('GET', `/test/:id(${regex.toString()})`)
    } catch (err) {
      t.assert.fail(err)
    }
  })

  bad.forEach(regex => {
    try {
      findMyWay.on('GET', `/test/:id(${regex.toString()})`, noop)
      t.assert.fail('should throw')
    } catch (err) {
      t.assert.ok(err)
    }
  })
})

test('Disable safe regex check', t => {
  t.plan(13)

  const noop = () => {}

  // https://github.com/substack/safe-regex/blob/master/test/regex.js
  const good = [
    /\bOakland\b/,
    /\b(Oakland|San Francisco)\b/i,
    /^\d+1337\d+$/i,
    /^\d+(1337|404)\d+$/i,
    /^\d+(1337|404)*\d+$/i,
    RegExp(Array(26).join('a?') + Array(26).join('a'))
  ]

  const bad = [
    /^(a?){25}(a){25}$/,
    RegExp(Array(27).join('a?') + Array(27).join('a')),
    /(x+x+)+y/,
    /foo|(x+x+)+y/,
    /(a+){10}y/,
    /(a+){2}y/,
    /(.*){1,32000}[bc]/
  ]

  const findMyWay = FindMyWay({ allowUnsafeRegex: true })

  good.forEach(regex => {
    try {
      findMyWay.on('GET', `/test/:id(${regex.toString()})`, noop)
      t.assert.ok('ok')
      findMyWay.off('GET', `/test/:id(${regex.toString()})`)
    } catch (err) {
      t.assert.fail(err)
    }
  })

  bad.forEach(regex => {
    try {
      findMyWay.on('GET', `/test/:id(${regex.toString()})`, noop)
      t.assert.ok('ok')
      findMyWay.off('GET', `/test/:id(${regex.toString()})`)
    } catch (err) {
      t.assert.fail(err)
    }
  })
})

test('prevent back-tracking', { timeout: 20 }, (t) => {
  t.plan(0)

  const findMyWay = FindMyWay({
    defaultRoute: () => {
      t.assert.fail('route not matched')
    }
  })

  findMyWay.on('GET', '/:foo-:bar-', (req, res, params) => {})
  findMyWay.find('GET', '/' + '-'.repeat(16000) + 'a', { host: 'fastify.io' })
})
