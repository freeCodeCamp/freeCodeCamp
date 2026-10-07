'use strict'

const tap = require('tap')
const splitPropertyKey = require('./split-property-key')

tap.test('splitPropertyKey does not change key', async t => {
  const result = splitPropertyKey('data1')
  t.same(result, ['data1'])
})

tap.test('splitPropertyKey splits nested key', async t => {
  const result = splitPropertyKey('data1.data2.data-3')
  t.same(result, ['data1', 'data2', 'data-3'])
})

tap.test('splitPropertyKey splits nested keys ending with a dot', async t => {
  const result = splitPropertyKey('data1.data2.data-3.')
  t.same(result, ['data1', 'data2', 'data-3'])
})

tap.test('splitPropertyKey splits nested escaped key', async t => {
  const result = splitPropertyKey('logging\\.domain\\.corp/operation.foo.bar-2')
  t.same(result, ['logging.domain.corp/operation', 'foo', 'bar-2'])
})

tap.test('splitPropertyKey splits nested escaped key with special characters', async t => {
  const result = splitPropertyKey('logging\\.domain\\.corp/operation.!\t@#$%^&*()_+=-<>.bar\\.2')
  t.same(result, ['logging.domain.corp/operation', '!\t@#$%^&*()_+=-<>', 'bar.2'])
})
