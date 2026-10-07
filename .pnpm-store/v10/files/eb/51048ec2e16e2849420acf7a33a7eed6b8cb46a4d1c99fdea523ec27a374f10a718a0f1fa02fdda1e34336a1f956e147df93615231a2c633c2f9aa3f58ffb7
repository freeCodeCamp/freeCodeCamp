'use strict'

const tap = require('tap')
const getPropertyValue = require('./get-property-value')

tap.test('getPropertyValue returns the value of the property', async t => {
  const result = getPropertyValue({
    foo: 'bar'
  }, 'foo')
  t.same(result, 'bar')
})

tap.test('getPropertyValue returns the value of the nested property', async t => {
  const result = getPropertyValue({ extra: { foo: { value: 'bar' } } }, 'extra.foo.value')
  t.same(result, 'bar')
})

tap.test('getPropertyValue returns the value of the nested property using the array of nested property keys', async t => {
  const result = getPropertyValue({ extra: { foo: { value: 'bar' } } }, ['extra', 'foo', 'value'])
  t.same(result, 'bar')
})

tap.test('getPropertyValue returns undefined for non-existing properties', async t => {
  const result = getPropertyValue({ extra: { foo: { value: 'bar' } } }, 'extra.foo.value-2')
  t.same(result, undefined)
})

tap.test('getPropertyValue returns undefined for non-existing properties using the array of nested property keys', async t => {
  const result = getPropertyValue({ extra: { foo: { value: 'bar' } } }, ['extra', 'foo', 'value-2'])
  t.same(result, undefined)
})
