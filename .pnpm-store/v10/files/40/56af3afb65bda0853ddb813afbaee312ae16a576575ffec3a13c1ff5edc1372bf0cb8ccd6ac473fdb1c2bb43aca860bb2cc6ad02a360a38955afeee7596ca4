'use strict'

const { test } = require('node:test')
const build = require('..')

test('required property containing single quote, contains property', (t) => {
  t.plan(1)

  const stringify = build({
    type: 'object',
    properties: {
      '\'': { type: 'string' }
    },
    required: [
      '\''
    ]
  })

  t.assert.throws(() => stringify({}), new Error('"\'" is required!'))
})

test('required property containing double quote, contains property', (t) => {
  t.plan(1)

  const stringify = build({
    type: 'object',
    properties: {
      '"': { type: 'string' }
    },
    required: [
      '"'
    ]
  })

  t.assert.throws(() => stringify({}), new Error('""" is required!'))
})

test('required property containing single quote, does not contain property', (t) => {
  t.plan(1)

  const stringify = build({
    type: 'object',
    properties: {
      a: { type: 'string' }
    },
    required: [
      '\''
    ]
  })

  t.assert.throws(() => stringify({}), new Error('"\'" is required!'))
})

test('required property containing double quote, does not contain property', (t) => {
  t.plan(1)

  const stringify = build({
    type: 'object',
    properties: {
      a: { type: 'string' }
    },
    required: [
      '"'
    ]
  })

  t.assert.throws(() => stringify({}), new Error('""" is required!'))
})
