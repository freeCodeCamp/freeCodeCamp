'use strict'

const assert = require('node:assert')
const { test } = require('node:test')
const serializer = require('../lib/err')
const { wrapErrorSerializer } = require('../')

test('serializes Error objects', () => {
  const serialized = serializer(Error('foo'))
  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo')
  assert.match(serialized.stack, /err\.test\.js:/)
})

test('serializes Error objects with extra properties', () => {
  const err = Error('foo')
  err.statusCode = 500
  const serialized = serializer(err)
  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo')
  assert.ok(serialized.statusCode)
  assert.strictEqual(serialized.statusCode, 500)
  assert.match(serialized.stack, /err\.test\.js:/)
})

test('serializes Error objects with subclass "type"', () => {
  class MyError extends Error {}
  const err = new MyError('foo')
  const serialized = serializer(err)
  assert.strictEqual(serialized.type, 'MyError')
})

test('serializes nested errors', () => {
  const err = Error('foo')
  err.inner = Error('bar')
  const serialized = serializer(err)
  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo')
  assert.match(serialized.stack, /err\.test\.js:/)
  assert.strictEqual(serialized.inner.type, 'Error')
  assert.strictEqual(serialized.inner.message, 'bar')
  assert.match(serialized.inner.stack, /Error: bar/)
  assert.match(serialized.inner.stack, /err\.test\.js:/)
})

test('serializes error causes', () => {
  for (const cause of [
    Error('bar'),
    { message: 'bar', stack: 'Error: bar: err.test.js:' }
  ]) {
    const err = Error('foo')
    err.cause = cause
    err.cause.cause = Error('abc')
    const serialized = serializer(err)
    assert.strictEqual(serialized.type, 'Error')
    assert.strictEqual(serialized.message, 'foo: bar: abc')
    assert.match(serialized.stack, /err\.test\.js:/)
    assert.match(serialized.stack, /Error: foo/)
    assert.match(serialized.stack, /Error: bar/)
    assert.match(serialized.stack, /Error: abc/)
    assert.ok(!serialized.cause)
  }
})

test('serializes error causes with VError support', function (t) {
  // Fake VError-style setup
  const err = Error('foo: bar')
  err.foo = 'abc'
  err.cause = function () {
    const err = Error('bar')
    err.cause = Error(this.foo)
    return err
  }
  const serialized = serializer(err)
  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo: bar: abc')
  assert.match(serialized.stack, /err\.test\.js:/)
  assert.match(serialized.stack, /Error: foo/)
  assert.match(serialized.stack, /Error: bar/)
  assert.match(serialized.stack, /Error: abc/)
})

test('keeps non-error cause', () => {
  const err = Error('foo')
  err.cause = 'abc'
  const serialized = serializer(err)
  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo')
  assert.strictEqual(serialized.cause, 'abc')
})

test('prevents infinite recursion', () => {
  const err = Error('foo')
  err.inner = err
  const serialized = serializer(err)
  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo')
  assert.match(serialized.stack, /err\.test\.js:/)
  assert.ok(!serialized.inner)
})

test('cleans up infinite recursion tracking', () => {
  const err = Error('foo')
  const bar = Error('bar')
  err.inner = bar
  bar.inner = err

  serializer(err)
  const serialized = serializer(err)

  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo')
  assert.match(serialized.stack, /err\.test\.js:/)
  assert.ok(serialized.inner)
  assert.strictEqual(serialized.inner.type, 'Error')
  assert.strictEqual(serialized.inner.message, 'bar')
  assert.match(serialized.inner.stack, /Error: bar/)
  assert.ok(!serialized.inner.inner)
})

test('err.raw is available', () => {
  const err = Error('foo')
  const serialized = serializer(err)
  assert.strictEqual(serialized.raw, err)
})

test('redefined err.constructor doesnt crash serializer', () => {
  function check (a, name) {
    assert.strictEqual(a.type, name)
    assert.strictEqual(a.message, 'foo')
  }

  const err1 = TypeError('foo')
  err1.constructor = '10'

  const err2 = TypeError('foo')
  err2.constructor = undefined

  const err3 = Error('foo')
  err3.constructor = null

  const err4 = Error('foo')
  err4.constructor = 10

  class MyError extends Error {}
  const err5 = new MyError('foo')
  err5.constructor = undefined

  check(serializer(err1), 'TypeError')
  check(serializer(err2), 'TypeError')
  check(serializer(err3), 'Error')
  check(serializer(err4), 'Error')
  // We do not expect 'MyError' because err5.constructor has been blown away.
  // `err5.name` is 'Error' from the base class prototype.
  check(serializer(err5), 'Error')
})

test('pass through anything that does not look like an Error', () => {
  function check (a) {
    assert.strictEqual(serializer(a), a)
  }

  check('foo')
  check({ hello: 'world' })
  check([1, 2])
})

test('can wrap err serializers', () => {
  const err = Error('foo')
  err.foo = 'foo'
  const serializer = wrapErrorSerializer(function (err) {
    delete err.foo
    err.bar = 'bar'
    return err
  })
  const serialized = serializer(err)
  assert.strictEqual(serialized.type, 'Error')
  assert.strictEqual(serialized.message, 'foo')
  assert.match(serialized.stack, /err\.test\.js:/)
  assert.ok(!serialized.foo)
  assert.strictEqual(serialized.bar, 'bar')
})

test('serializes aggregate errors', { skip: !global.AggregateError }, () => {
  const foo = new Error('foo')
  const bar = new Error('bar')
  for (const aggregate of [
    new AggregateError([foo, bar], 'aggregated message'), // eslint-disable-line no-undef
    { errors: [foo, bar], message: 'aggregated message', stack: 'err.test.js:' }
  ]) {
    const serialized = serializer(aggregate)
    assert.strictEqual(serialized.message, 'aggregated message')
    assert.strictEqual(serialized.aggregateErrors.length, 2)
    assert.strictEqual(serialized.aggregateErrors[0].message, 'foo')
    assert.strictEqual(serialized.aggregateErrors[1].message, 'bar')
    assert.match(serialized.aggregateErrors[0].stack, /^Error: foo/)
    assert.match(serialized.aggregateErrors[1].stack, /^Error: bar/)
    assert.match(serialized.stack, /err\.test\.js:/)
  }
})
