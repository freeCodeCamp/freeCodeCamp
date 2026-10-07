'use strict'

const { test } = require('node:test')
const build = require('..')

test('object with nested random property', (t) => {
  t.plan(4)

  const schema = {
    title: 'empty schema to allow any object',
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: {}
    }
  }
  const stringify = build(schema)

  t.assert.equal(stringify({
    id: 1, name: 'string'
  }), '{"id":1,"name":"string"}')

  t.assert.equal(stringify({
    id: 1, name: { first: 'name', last: 'last' }
  }), '{"id":1,"name":{"first":"name","last":"last"}}')

  t.assert.equal(stringify({
    id: 1, name: null
  }), '{"id":1,"name":null}')

  t.assert.equal(stringify({
    id: 1, name: ['first', 'last']
  }), '{"id":1,"name":["first","last"]}')
})

// reference: https://github.com/fastify/fast-json-stringify/issues/259
test('object with empty schema with $id: undefined set', (t) => {
  t.plan(1)

  const schema = {
    title: 'empty schema to allow any object with $id: undefined set',
    type: 'object',
    properties: {
      name: { $id: undefined }
    }
  }
  const stringify = build(schema)
  t.assert.equal(stringify({
    name: 'string'
  }), '{"name":"string"}')
})

test('array with random items', (t) => {
  t.plan(1)

  const schema = {
    title: 'empty schema to allow any object',
    type: 'array',
    items: {}
  }
  const stringify = build(schema)

  const value = stringify([1, 'string', null])
  t.assert.equal(value, '[1,"string",null]')
})

test('empty schema', (t) => {
  t.plan(7)

  const schema = { }

  const stringify = build(schema)

  t.assert.equal(stringify(null), 'null')
  t.assert.equal(stringify(1), '1')
  t.assert.equal(stringify(true), 'true')
  t.assert.equal(stringify('hello'), '"hello"')
  t.assert.equal(stringify({}), '{}')
  t.assert.equal(stringify({ x: 10 }), '{"x":10}')
  t.assert.equal(stringify([true, 1, 'hello']), '[true,1,"hello"]')
})

test('empty schema on nested object', (t) => {
  t.plan(7)

  const schema = {
    type: 'object',
    properties: {
      x: {}
    }
  }

  const stringify = build(schema)

  t.assert.equal(stringify({ x: null }), '{"x":null}')
  t.assert.equal(stringify({ x: 1 }), '{"x":1}')
  t.assert.equal(stringify({ x: true }), '{"x":true}')
  t.assert.equal(stringify({ x: 'hello' }), '{"x":"hello"}')
  t.assert.equal(stringify({ x: {} }), '{"x":{}}')
  t.assert.equal(stringify({ x: { x: 10 } }), '{"x":{"x":10}}')
  t.assert.equal(stringify({ x: [true, 1, 'hello'] }), '{"x":[true,1,"hello"]}')
})

test('empty schema on array', (t) => {
  t.plan(1)

  const schema = {
    type: 'array',
    items: {}
  }

  const stringify = build(schema)

  t.assert.equal(stringify([1, true, 'hello', [], { x: 1 }]), '[1,true,"hello",[],{"x":1}]')
})

test('empty schema on anyOf', (t) => {
  t.plan(4)

  // any on Foo codepath.
  const schema = {
    anyOf: [
      {
        type: 'object',
        properties: {
          kind: {
            type: 'string',
            enum: ['Foo']
          },
          value: {}
        }
      },
      {
        type: 'object',
        properties: {
          kind: {
            type: 'string',
            enum: ['Bar']
          },
          value: {
            type: 'number'
          }
        }
      }
    ]
  }

  const stringify = build(schema)

  t.assert.equal(stringify({ kind: 'Bar', value: 1 }), '{"kind":"Bar","value":1}')
  t.assert.equal(stringify({ kind: 'Foo', value: 1 }), '{"kind":"Foo","value":1}')
  t.assert.equal(stringify({ kind: 'Foo', value: true }), '{"kind":"Foo","value":true}')
  t.assert.equal(stringify({ kind: 'Foo', value: 'hello' }), '{"kind":"Foo","value":"hello"}')
})

test('should throw a TypeError with the path to the key of the invalid value /1', (t) => {
  t.plan(1)

  // any on Foo codepath.
  const schema = {
    anyOf: [
      {
        type: 'object',
        properties: {
          kind: {
            type: 'string',
            enum: ['Foo']
          },
          value: {}
        }
      },
      {
        type: 'object',
        properties: {
          kind: {
            type: 'string',
            enum: ['Bar']
          },
          value: {
            type: 'number'
          }
        }
      }
    ]
  }

  const stringify = build(schema)

  t.assert.throws(() => stringify({ kind: 'Baz', value: 1 }), new TypeError('The value of \'#\' does not match schema definition.'))
})

test('should throw a TypeError with the path to the key of the invalid value /2', (t) => {
  t.plan(1)

  // any on Foo codepath.
  const schema = {
    type: 'object',
    properties: {
      data: {
        anyOf: [
          {
            type: 'object',
            properties: {
              kind: {
                type: 'string',
                enum: ['Foo']
              },
              value: {}
            }
          },
          {
            type: 'object',
            properties: {
              kind: {
                type: 'string',
                enum: ['Bar']
              },
              value: {
                type: 'number'
              }
            }
          }
        ]
      }
    }
  }

  const stringify = build(schema)

  t.assert.throws(() => stringify({ data: { kind: 'Baz', value: 1 } }), new TypeError('The value of \'#/properties/data\' does not match schema definition.'))
})
