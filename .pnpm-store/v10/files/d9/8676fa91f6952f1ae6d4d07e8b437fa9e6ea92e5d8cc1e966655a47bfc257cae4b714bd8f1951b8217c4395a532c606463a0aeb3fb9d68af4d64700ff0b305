'use strict'

const { test } = require('node:test')
const { createWarning, createDeprecation } = require('..')

process.removeAllListeners('warning')

test('Create warning with zero parameter', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'Not available'
  })
  t.assert.deepStrictEqual(warnItem.name, 'TestWarning')
  t.assert.deepStrictEqual(warnItem.message, 'Not available')
  t.assert.deepStrictEqual(warnItem.code, 'CODE')
})

test('Create error with 1 parameter', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'hey %s'
  })
  t.assert.deepStrictEqual(warnItem.name, 'TestWarning')
  t.assert.deepStrictEqual(warnItem.format('alice'), 'hey alice')
  t.assert.deepStrictEqual(warnItem.code, 'CODE')
})

test('Create error with 2 parameters', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'hey %s, I like your %s'
  })
  t.assert.deepStrictEqual(warnItem.name, 'TestWarning')
  t.assert.deepStrictEqual(warnItem.format('alice', 'attitude'), 'hey alice, I like your attitude')
  t.assert.deepStrictEqual(warnItem.code, 'CODE')
})

test('Create error with 3 parameters', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'hey %s, I like your %s %s'
  })
  t.assert.deepStrictEqual(warnItem.name, 'TestWarning')
  t.assert.deepStrictEqual(warnItem.format('alice', 'attitude', 'see you'), 'hey alice, I like your attitude see you')
  t.assert.deepStrictEqual(warnItem.code, 'CODE')
})

test('Creates a deprecation warning', t => {
  t.plan(3)

  const deprecationItem = createDeprecation({
    name: 'DeprecationWarning',
    code: 'CODE',
    message: 'hello %s'
  })
  t.assert.deepStrictEqual(deprecationItem.name, 'DeprecationWarning')
  t.assert.deepStrictEqual(deprecationItem.format('world'), 'hello world')
  t.assert.deepStrictEqual(deprecationItem.code, 'CODE')
})

test('Should throw when error code has no name', t => {
  t.plan(1)
  t.assert.throws(() => createWarning(), new Error('Warning name must not be empty'))
})

test('Should throw when error has no code', t => {
  t.plan(1)
  t.assert.throws(() => createWarning({ name: 'name' }), new Error('Warning code must not be empty'))
})

test('Should throw when error has no message', t => {
  t.plan(1)
  t.assert.throws(() => createWarning({
    name: 'name',
    code: 'code'
  }), new Error('Warning message must not be empty'))
})

test('Cannot set unlimited other than boolean', t => {
  t.plan(1)
  t.assert.throws(() => createWarning({
    name: 'name',
    code: 'code',
    message: 'message',
    unlimited: 'unlimited'
  }), new Error('Warning opts.unlimited must be a boolean'))
})
