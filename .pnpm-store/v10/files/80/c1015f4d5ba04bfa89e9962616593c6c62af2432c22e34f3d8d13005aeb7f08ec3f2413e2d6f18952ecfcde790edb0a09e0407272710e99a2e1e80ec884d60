'use strict'
const { test } = require('tap')
const { sink, once } = require('./helper')
const stdSerializers = require('pino-std-serializers')
const pino = require('../')

test('set the errorKey with error serializer', async ({ equal, same }) => {
  const stream = sink()
  const errorKey = 'error'
  const instance = pino({
    errorKey,
    serializers: { [errorKey]: stdSerializers.err }
  }, stream)
  instance.error(new ReferenceError('test'))
  const o = await once(stream, 'data')
  equal(typeof o[errorKey], 'object')
  equal(o[errorKey].type, 'ReferenceError')
  equal(o[errorKey].message, 'test')
  equal(typeof o[errorKey].stack, 'string')
})

test('set the errorKey without error serializer', async ({ equal, same }) => {
  const stream = sink()
  const errorKey = 'error'
  const instance = pino({
    errorKey
  }, stream)
  instance.error(new ReferenceError('test'))
  const o = await once(stream, 'data')
  equal(typeof o[errorKey], 'object')
  equal(o[errorKey].type, 'ReferenceError')
  equal(o[errorKey].message, 'test')
  equal(typeof o[errorKey].stack, 'string')
})
