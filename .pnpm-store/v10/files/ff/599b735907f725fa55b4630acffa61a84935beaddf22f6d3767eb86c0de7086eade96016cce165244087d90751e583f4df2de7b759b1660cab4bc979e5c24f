const { test } = require('node:test')
const FindMyWay = require('..')
const proxyquire = require('proxyquire')
const HandlerStorage = require('../lib/handler-storage')
const Constrainer = require('../lib/constrainer')
const { safeDecodeURIComponent } = require('../lib/url-sanitizer')
const acceptVersionStrategy = require('../lib/strategies/accept-version')
const httpMethodStrategy = require('../lib/strategies/http-method')

test('FULL_PATH_REGEXP and OPTIONAL_PARAM_REGEXP should be considered safe', (t) => {
  t.plan(1)

  t.assert.doesNotThrow(() => require('..'))
})

test('should throw an error for unsafe FULL_PATH_REGEXP', (t) => {
  t.plan(1)

  t.assert.throws(() => proxyquire('..', {
    'safe-regex2': () => false
  }), new Error('the FULL_PATH_REGEXP is not safe, update this module'))
})

test('Should throw an error for unsafe OPTIONAL_PARAM_REGEXP', (t) => {
  t.plan(1)

  let callCount = 0
  t.assert.throws(() => proxyquire('..', {
    'safe-regex2': () => {
      return ++callCount < 2
    }
  }), new Error('the OPTIONAL_PARAM_REGEXP is not safe, update this module'))
})

test('double colon does not define parametric node', (t) => {
  t.plan(2)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/::id', () => {})
  const route1 = findMyWay.findRoute('GET', '/::id')
  t.assert.deepStrictEqual(route1.params, [])

  findMyWay.on('GET', '/:foo(\\d+)::bar', () => {})
  const route2 = findMyWay.findRoute('GET', '/:foo(\\d+)::bar')
  t.assert.deepStrictEqual(route2.params, ['foo'])
})

test('case insensitive static routes', (t) => {
  t.plan(3)

  const findMyWay = FindMyWay({
    caseSensitive: false
  })

  findMyWay.on('GET', '/foo', () => {})
  findMyWay.on('GET', '/foo/bar', () => {})
  findMyWay.on('GET', '/foo/bar/baz', () => {})

  t.assert.ok(findMyWay.findRoute('GET', '/FoO'))
  t.assert.ok(findMyWay.findRoute('GET', '/FOo/Bar'))
  t.assert.ok(findMyWay.findRoute('GET', '/fOo/Bar/bAZ'))
})

test('wildcard must be the last character in the route', (t) => {
  t.plan(3)

  const expectedError = new Error('Wildcard must be the last character in the route')

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '*', () => {})
  t.assert.throws(() => findMyWay.findRoute('GET', '*1'), expectedError)
  t.assert.throws(() => findMyWay.findRoute('GET', '*/'), expectedError)
  t.assert.throws(() => findMyWay.findRoute('GET', '*?'), expectedError)
})

test('does not find the route if maxParamLength is exceeded', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    maxParamLength: 2
  })

  findMyWay.on('GET', '/:id(\\d+)', () => {})

  t.assert.equal(findMyWay.find('GET', '/123'), null)
  t.assert.ok(findMyWay.find('GET', '/12'))
})

test('Should check if a regex is safe to use', (t) => {
  t.plan(1)

  const findMyWay = FindMyWay()

  // we must pass a safe regex to register the route
  // findRoute will still throws the expected assertion error if we try to access it with unsafe reggex
  findMyWay.on('GET', '/test/:id(\\d+)', () => {})

  const unSafeRegex = /(x+x+)+y/
  t.assert.throws(() => findMyWay.findRoute('GET', `/test/:id(${unSafeRegex.toString()})`), {
    message: "The regex '(/(x+x+)+y/)' is not safe!"
  })
})

test('Disable safe regex check', (t) => {
  t.plan(1)

  const findMyWay = FindMyWay({ allowUnsafeRegex: true })

  const unSafeRegex = /(x+x+)+y/
  findMyWay.on('GET', `/test2/:id(${unSafeRegex.toString()})`, () => {})
  t.assert.doesNotThrow(() => findMyWay.findRoute('GET', `/test2/:id(${unSafeRegex.toString()})`))
})

test('throws error if no strategy registered for constraint key', (t) => {
  t.plan(2)

  const constrainer = new Constrainer()
  const error = new Error('No strategy registered for constraint key invalid-constraint')
  t.assert.throws(() => constrainer.newStoreForConstraint('invalid-constraint'), error)
  t.assert.throws(() => constrainer.validateConstraints({ 'invalid-constraint': 'foo' }), error)
})

test('throws error if pass an undefined constraint value', (t) => {
  t.plan(1)

  const constrainer = new Constrainer()
  const error = new Error('Can\'t pass an undefined constraint value, must pass null or no key at all')
  t.assert.throws(() => constrainer.validateConstraints({ key: undefined }), error)
})

test('Constrainer.noteUsage', (t) => {
  t.plan(3)

  const constrainer = new Constrainer()
  t.assert.equal(constrainer.strategiesInUse.size, 0)

  constrainer.noteUsage()
  t.assert.equal(constrainer.strategiesInUse.size, 0)

  constrainer.noteUsage({ host: 'fastify.io' })
  t.assert.equal(constrainer.strategiesInUse.size, 1)
})

test('Cannot derive constraints without active strategies.', (t) => {
  t.plan(1)

  const constrainer = new Constrainer()
  const before = constrainer.deriveSyncConstraints
  constrainer._buildDeriveConstraints()
  t.assert.deepEqual(constrainer.deriveSyncConstraints, before)
})

test('getMatchingHandler should return null if not compiled', (t) => {
  t.plan(1)

  const handlerStorage = new HandlerStorage()
  t.assert.equal(handlerStorage.getMatchingHandler({ foo: 'bar' }), null)
})

test('safeDecodeURIComponent should replace %3x to null for every x that is not a valid lowchar', (t) => {
  t.plan(1)

  t.assert.equal(safeDecodeURIComponent('Hello%3xWorld'), 'HellonullWorld')
})

test('SemVerStore version should be a string', (t) => {
  t.plan(1)

  const Storage = acceptVersionStrategy.storage

  t.assert.throws(() => new Storage().set(1), new TypeError('Version should be a string'))
})

test('SemVerStore.maxMajor should increase automatically', (t) => {
  t.plan(3)

  const Storage = acceptVersionStrategy.storage
  const storage = new Storage()

  t.assert.equal(storage.maxMajor, 0)

  storage.set('2')
  t.assert.equal(storage.maxMajor, 2)

  storage.set('1')
  t.assert.equal(storage.maxMajor, 2)
})

test('SemVerStore.maxPatches should increase automatically', (t) => {
  t.plan(3)

  const Storage = acceptVersionStrategy.storage
  const storage = new Storage()

  storage.set('2.0.0')
  t.assert.deepEqual(storage.maxPatches, { '2.0': 0 })

  storage.set('2.0.2')
  t.assert.deepEqual(storage.maxPatches, { '2.0': 2 })

  storage.set('2.0.1')
  t.assert.deepEqual(storage.maxPatches, { '2.0': 2 })
})

test('Major version must be a numeric value', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  t.assert.throws(() => findMyWay.on('GET', '/test', { constraints: { version: 'x' } }, () => {}),
    new TypeError('Major version must be a numeric value'))
})

test('httpMethodStrategy storage handles set and get operations correctly', (t) => {
  t.plan(2)

  const storage = httpMethodStrategy.storage()

  t.assert.equal(storage.get('foo'), null)

  storage.set('foo', { bar: 'baz' })
  t.assert.deepStrictEqual(storage.get('foo'), { bar: 'baz' })
})

test('if buildPrettyMeta argument is undefined, will return an object', (t) => {
  t.plan(1)

  const findMyWay = FindMyWay()
  t.assert.deepEqual(findMyWay.buildPrettyMeta(), {})
})
