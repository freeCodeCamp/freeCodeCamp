'use strict'

const { test } = require('tap')
const createError = require('..')

test('Create error with zero parameter', t => {
  t.plan(6)

  const NewError = createError('CODE', 'Not available')
  const err = new NewError()
  t.ok(err instanceof Error)
  t.equal(err.name, 'FastifyError')
  t.equal(err.message, 'Not available')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('Create error with 1 parameter', t => {
  t.plan(6)

  const NewError = createError('CODE', 'hey %s')
  const err = new NewError('alice')
  t.ok(err instanceof Error)
  t.equal(err.name, 'FastifyError')
  t.equal(err.message, 'hey alice')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('Create error with 1 parameter set to undefined', t => {
  t.plan(1)

  const NewError = createError('CODE', 'hey %s')
  const err = new NewError(undefined)
  t.equal(err.message, 'hey undefined')
})

test('Create error with 2 parameters', (t) => {
  t.plan(6)

  const NewError = createError('CODE', 'hey %s, I like your %s')
  const err = new NewError('alice', 'attitude')
  t.ok(err instanceof Error)
  t.equal(err.name, 'FastifyError')
  t.equal(err.message, 'hey alice, I like your attitude')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('Create error with 2 parameters set to undefined', t => {
  t.plan(1)

  const NewError = createError('CODE', 'hey %s, I like your %s')
  const err = new NewError(undefined, undefined)
  t.equal(err.message, 'hey undefined, I like your undefined')
})

test('Create error with 3 parameters', t => {
  t.plan(6)

  const NewError = createError('CODE', 'hey %s, I like your %s %s')
  const err = new NewError('alice', 'attitude', 'see you')
  t.ok(err instanceof Error)
  t.equal(err.name, 'FastifyError')
  t.equal(err.message, 'hey alice, I like your attitude see you')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('Create error with 3 parameters set to undefined', t => {
  t.plan(4)

  const NewError = createError('CODE', 'hey %s, I like your %s %s')
  const err = new NewError(undefined, undefined, undefined)
  t.equal(err.message, 'hey undefined, I like your undefined undefined')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('Create error with 4 parameters set to undefined', t => {
  t.plan(4)

  const NewError = createError('CODE', 'hey %s, I like your %s %s and %s')
  const err = new NewError(undefined, undefined, undefined, undefined)
  t.equal(err.message, 'hey undefined, I like your undefined undefined and undefined')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('Create error with no statusCode property', t => {
  t.plan(6)

  const NewError = createError('CODE', 'hey %s', 0)
  const err = new NewError('dude')
  t.ok(err instanceof Error)
  t.equal(err.name, 'FastifyError')
  t.equal(err.message, 'hey dude')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, undefined)
  t.ok(err.stack)
})

test('Should throw when error code has no fastify code', t => {
  t.plan(1)

  t.throws(() => createError(), new Error('Fastify error code must not be empty'))
})

test('Should throw when error code has no message', t => {
  t.plan(1)

  t.throws(() => createError('code'), new Error('Fastify error message must not be empty'))
})

test('Create error with different base', t => {
  t.plan(7)

  const NewError = createError('CODE', 'hey %s', 500, TypeError)
  const err = new NewError('dude')
  t.ok(err instanceof Error)
  t.ok(err instanceof TypeError)
  t.equal(err.name, 'FastifyError')
  t.equal(err.message, 'hey dude')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('FastifyError.toString returns code', t => {
  t.plan(1)

  const NewError = createError('CODE', 'foo')
  const err = new NewError()
  t.equal(err.toString(), 'FastifyError [CODE]: foo')
})

test('Create the error without the new keyword', t => {
  t.plan(6)

  const NewError = createError('CODE', 'Not available')
  const err = NewError()
  t.ok(err instanceof Error)
  t.equal(err.name, 'FastifyError')
  t.equal(err.message, 'Not available')
  t.equal(err.code, 'CODE')
  t.equal(err.statusCode, 500)
  t.ok(err.stack)
})

test('Create an error with cause', t => {
  t.plan(2)
  const cause = new Error('HEY')
  const NewError = createError('CODE', 'Not available')
  const err = NewError({ cause })

  t.ok(err instanceof Error)
  t.equal(err.cause, cause)
})

test('Create an error with cause and message', t => {
  t.plan(2)
  const cause = new Error('HEY')
  const NewError = createError('CODE', 'Not available: %s')
  const err = NewError('foo', { cause })

  t.ok(err instanceof Error)
  t.equal(err.cause, cause)
})

test('Create an error with last argument null', t => {
  t.plan(2)
  const cause = new Error('HEY')
  const NewError = createError('CODE', 'Not available')
  const err = NewError({ cause }, null)

  t.ok(err instanceof Error)
  t.notOk(err.cause)
})
