'use strict'

const test = require('tap').test
const { createWarning, createDeprecation } = require('..')

process.removeAllListeners('warning')

test('Create warning with zero parameter', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'Not available'
  })
  t.equal(warnItem.name, 'TestWarning')
  t.equal(warnItem.message, 'Not available')
  t.equal(warnItem.code, 'CODE')
})

test('Create error with 1 parameter', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'hey %s'
  })
  t.equal(warnItem.name, 'TestWarning')
  t.equal(warnItem.format('alice'), 'hey alice')
  t.equal(warnItem.code, 'CODE')
})

test('Create error with 2 parameters', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'hey %s, I like your %s'
  })
  t.equal(warnItem.name, 'TestWarning')
  t.equal(warnItem.format('alice', 'attitude'), 'hey alice, I like your attitude')
  t.equal(warnItem.code, 'CODE')
})

test('Create error with 3 parameters', t => {
  t.plan(3)

  const warnItem = createWarning({
    name: 'TestWarning',
    code: 'CODE',
    message: 'hey %s, I like your %s %s'
  })
  t.equal(warnItem.name, 'TestWarning')
  t.equal(warnItem.format('alice', 'attitude', 'see you'), 'hey alice, I like your attitude see you')
  t.equal(warnItem.code, 'CODE')
})

test('Creates a deprecation warning', t => {
  t.plan(3)

  const deprecationItem = createDeprecation({
    name: 'DeprecationWarning',
    code: 'CODE',
    message: 'hello %s'
  })
  t.equal(deprecationItem.name, 'DeprecationWarning')
  t.equal(deprecationItem.format('world'), 'hello world')
  t.equal(deprecationItem.code, 'CODE')
})

test('Should throw when error code has no name', t => {
  t.plan(1)
  t.throws(() => createWarning(), new Error('Warning name must not be empty'))
})

test('Should throw when error has no code', t => {
  t.plan(1)
  t.throws(() => createWarning({ name: 'name' }), new Error('Warning code must not be empty'))
})

test('Should throw when error has no message', t => {
  t.plan(1)
  t.throws(() => createWarning({
    name: 'name',
    code: 'code'
  }), new Error('Warning message must not be empty'))
})

test('Cannot set unlimited other than boolean', t => {
  t.plan(1)
  t.throws(() => createWarning({
    name: 'name',
    code: 'code',
    message: 'message',
    unlimited: 'unlimited'
  }), new Error('Warning opts.unlimited must be a boolean'))
})
