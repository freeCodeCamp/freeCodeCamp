'use strict'

const { test } = require('node:test')
const build = require('..')

test('patternProperties', (t) => {
  t.plan(1)
  const stringify = build({
    title: 'patternProperties',
    type: 'object',
    properties: {
      str: {
        type: 'string'
      }
    },
    patternProperties: {
      foo: {
        type: 'string'
      }
    }
  })

  const obj = { str: 'test', foo: 42, ofoo: true, foof: 'string', objfoo: { a: true }, notMe: false }
  t.assert.equal(stringify(obj), '{"str":"test","foo":"42","ofoo":"true","foof":"string","objfoo":"[object Object]"}')
})

test('patternProperties should not change properties', (t) => {
  t.plan(1)
  const stringify = build({
    title: 'patternProperties should not change properties',
    type: 'object',
    properties: {
      foo: {
        type: 'string'
      }
    },
    patternProperties: {
      foo: {
        type: 'number'
      }
    }
  })

  const obj = { foo: '42', ofoo: 42 }
  t.assert.equal(stringify(obj), '{"foo":"42","ofoo":42}')
})

test('patternProperties - string coerce', (t) => {
  t.plan(1)
  const stringify = build({
    title: 'check string coerce',
    type: 'object',
    properties: {},
    patternProperties: {
      foo: {
        type: 'string'
      }
    }
  })

  const obj = { foo: true, ofoo: 42, arrfoo: ['array', 'test'], objfoo: { a: 'world' } }
  t.assert.equal(stringify(obj), '{"foo":"true","ofoo":"42","arrfoo":"array,test","objfoo":"[object Object]"}')
})

test('patternProperties - number coerce', (t) => {
  t.plan(2)
  const stringify = build({
    title: 'check number coerce',
    type: 'object',
    properties: {},
    patternProperties: {
      foo: {
        type: 'number'
      }
    }
  })

  const coercibleValues = { foo: true, ofoo: '42' }
  t.assert.equal(stringify(coercibleValues), '{"foo":1,"ofoo":42}')

  const incoercibleValues = { xfoo: 'string', arrfoo: [1, 2], objfoo: { num: 42 } }
  try {
    stringify(incoercibleValues)
    t.fail('should throw an error')
  } catch (err) {
    t.assert.ok(err)
  }
})

test('patternProperties - boolean coerce', (t) => {
  t.plan(1)
  const stringify = build({
    title: 'check boolean coerce',
    type: 'object',
    properties: {},
    patternProperties: {
      foo: {
        type: 'boolean'
      }
    }
  })

  const obj = { foo: 'true', ofoo: 0, arrfoo: [1, 2], objfoo: { a: true } }
  t.assert.equal(stringify(obj), '{"foo":true,"ofoo":false,"arrfoo":true,"objfoo":true}')
})

test('patternProperties - object coerce', (t) => {
  t.plan(1)
  const stringify = build({
    title: 'check object coerce',
    type: 'object',
    properties: {},
    patternProperties: {
      foo: {
        type: 'object',
        properties: {
          answer: {
            type: 'number'
          }
        }
      }
    }
  })

  const obj = { objfoo: { answer: 42 } }
  t.assert.equal(stringify(obj), '{"objfoo":{"answer":42}}')
})

test('patternProperties - array coerce', (t) => {
  t.plan(2)
  const stringify = build({
    title: 'check array coerce',
    type: 'object',
    properties: {},
    patternProperties: {
      foo: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  })

  const coercibleValues = { arrfoo: [1, 2] }
  t.assert.equal(stringify(coercibleValues), '{"arrfoo":["1","2"]}')

  const incoercibleValues = { foo: 'true', ofoo: 0, objfoo: { tyrion: 'lannister' } }
  t.assert.throws(() => stringify(incoercibleValues))
})

test('patternProperties - fail on invalid regex, handled by ajv', (t) => {
  t.plan(1)

  t.assert.throws(() => build({
    title: 'check array coerce',
    type: 'object',
    properties: {},
    patternProperties: {
      'foo/\\': {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  }), new Error('schema is invalid: data/patternProperties must match format "regex"'))
})
