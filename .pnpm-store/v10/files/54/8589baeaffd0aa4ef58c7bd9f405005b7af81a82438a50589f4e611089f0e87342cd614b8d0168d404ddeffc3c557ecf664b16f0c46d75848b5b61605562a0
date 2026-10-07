'use strict'

const { test } = require('node:test')
const validator = require('is-my-json-valid')
const build = require('..')

test('schema with const string', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: 'bar' }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: 'bar'
  })

  t.assert.equal(output, '{"foo":"bar"}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const string and different input', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: 'bar' }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: 'baz'
  })

  t.assert.equal(output, '{"foo":"bar"}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const string and different type input', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: 'bar' }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: 1
  })

  t.assert.equal(output, '{"foo":"bar"}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const string and no input', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: 'bar' }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({})

  t.assert.equal(output, '{}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const string that contains \'', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: "'bar'" }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: "'bar'"
  })

  t.assert.equal(output, '{"foo":"\'bar\'"}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const number', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: 1 }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: 1
  })

  t.assert.equal(output, '{"foo":1}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const number and different input', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: 1 }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: 2
  })

  t.assert.equal(output, '{"foo":1}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const bool', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: true }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: true
  })

  t.assert.equal(output, '{"foo":true}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const number', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: 1 }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: 1
  })

  t.assert.equal(output, '{"foo":1}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const null', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: null }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: null
  })

  t.assert.equal(output, '{"foo":null}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const array', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: [1, 2, 3] }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: [1, 2, 3]
  })

  t.assert.equal(output, '{"foo":[1,2,3]}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const object', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: { bar: 'baz' } }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: { bar: 'baz' }
  })

  t.assert.equal(output, '{"foo":{"bar":"baz"}}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('schema with const and null as type', (t) => {
  t.plan(4)

  const schema = {
    type: 'object',
    properties: {
      foo: { type: ['string', 'null'], const: 'baz' }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: null
  })

  t.assert.equal(output, '{"foo":null}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')

  const output2 = stringify({ foo: 'baz' })
  t.assert.equal(output2, '{"foo":"baz"}')
  t.assert.ok(validate(JSON.parse(output2)), 'valid schema')
})

test('schema with const as nullable', (t) => {
  t.plan(4)

  const schema = {
    type: 'object',
    properties: {
      foo: { nullable: true, const: 'baz' }
    }
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify({
    foo: null
  })

  t.assert.equal(output, '{"foo":null}')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')

  const output2 = stringify({
    foo: 'baz'
  })
  t.assert.equal(output2, '{"foo":"baz"}')
  t.assert.ok(validate(JSON.parse(output2)), 'valid schema')
})

test('schema with const and invalid object', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      foo: { const: { foo: 'bar' } }
    },
    required: ['foo']
  }

  const validate = validator(schema)
  const stringify = build(schema)
  const result = stringify({
    foo: { foo: 'baz' }
  })

  t.assert.equal(result, '{"foo":{"foo":"bar"}}')
  t.assert.ok(validate(JSON.parse(result)), 'valid schema')
})
