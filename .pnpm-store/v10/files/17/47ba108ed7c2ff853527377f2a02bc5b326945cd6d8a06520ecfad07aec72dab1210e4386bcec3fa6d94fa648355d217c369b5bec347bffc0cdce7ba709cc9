'use strict'

const { test } = require('node:test')
const build = require('..')

test('object with required field', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with required field',
    type: 'object',
    properties: {
      str: {
        type: 'string'
      },
      num: {
        type: 'integer'
      }
    },
    required: ['str']
  }
  const stringify = build(schema)

  t.assert.doesNotThrow(() => {
    stringify({
      str: 'string'
    })
  })

  t.assert.throws(() => {
    stringify({
      num: 42
    })
  }, { message: '"str" is required!' })
})

test('object with required field not in properties schema', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with required field',
    type: 'object',
    properties: {
      num: {
        type: 'integer'
      }
    },
    required: ['str']
  }
  const stringify = build(schema)

  t.assert.throws(() => {
    stringify({})
  }, { message: '"str" is required!' })

  t.assert.throws(() => {
    stringify({
      num: 42
    })
  }, { message: '"str" is required!' })
})

test('object with required field not in properties schema with additional properties true', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with required field',
    type: 'object',
    properties: {
      num: {
        type: 'integer'
      }
    },
    additionalProperties: true,
    required: ['str']
  }
  const stringify = build(schema)

  t.assert.throws(() => {
    stringify({})
  }, { message: '"str" is required!' })

  t.assert.throws(() => {
    stringify({
      num: 42
    })
  }, { message: '"str" is required!' })
})

test('object with multiple required field not in properties schema', (t) => {
  t.plan(3)

  const schema = {
    title: 'object with required field',
    type: 'object',
    properties: {
      num: {
        type: 'integer'
      }
    },
    additionalProperties: true,
    required: ['num', 'key1', 'key2']
  }
  const stringify = build(schema)

  t.assert.throws(() => {
    stringify({})
  }, { message: '"key1" is required!' })

  t.assert.throws(() => {
    stringify({
      key1: 42,
      key2: 42
    })
  }, { message: '"num" is required!' })

  t.assert.throws(() => {
    stringify({
      num: 42,
      key1: 'some'
    })
  }, { message: '"key2" is required!' })
})

test('object with required bool', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with required field',
    type: 'object',
    properties: {
      num: {
        type: 'integer'
      }
    },
    additionalProperties: true,
    required: ['bool']
  }
  const stringify = build(schema)

  t.assert.throws(() => {
    stringify({})
  }, { message: '"bool" is required!' })

  t.assert.doesNotThrow(() => {
    stringify({
      bool: false
    })
  })
})

test('required nullable', (t) => {
  t.plan(1)

  const schema = {
    title: 'object with required field',
    type: 'object',
    properties: {
      num: {
        type: ['integer']
      }
    },
    additionalProperties: true,
    required: ['null']
  }
  const stringify = build(schema)

  t.assert.doesNotThrow(() => {
    stringify({
      null: null
    })
  })
})

test('required numbers', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with required field',
    type: 'object',
    properties: {
      str: {
        type: 'string'
      },
      num: {
        type: 'integer'
      }
    },
    required: ['num']
  }
  const stringify = build(schema)

  t.assert.doesNotThrow(() => {
    stringify({
      num: 42
    })
  })

  t.assert.throws(() => {
    stringify({
      num: 'aaa'
    })
  }, { message: 'The value "aaa" cannot be converted to an integer.' })
})
