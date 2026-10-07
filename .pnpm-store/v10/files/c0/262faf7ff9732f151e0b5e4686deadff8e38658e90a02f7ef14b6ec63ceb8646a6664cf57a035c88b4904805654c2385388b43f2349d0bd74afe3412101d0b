'use strict'

const { test } = require('tap')
const { createPromise } = require('../../lib/create-promise')

test('createPromise() returns an object', (t) => {
  t.plan(3)
  t.type(createPromise(), 'object')
  t.equal(Array.isArray(createPromise()), false)
  t.notOk(Array.isArray(createPromise() !== null))
})

test('createPromise() returns an attribute with attribute resolve', (t) => {
  t.plan(1)
  t.ok('resolve' in createPromise())
})

test('createPromise() returns an attribute with attribute reject', (t) => {
  t.plan(1)
  t.ok('reject' in createPromise())
})

test('createPromise() returns an attribute with attribute createPromise', (t) => {
  t.plan(1)
  t.ok('promise' in createPromise())
})

test('when resolve is called, createPromise attribute is resolved', (t) => {
  t.plan(1)
  const p = createPromise()

  p.promise
    .then(() => {
      t.pass()
    })
    .catch(() => {
      t.fail()
    })
  p.resolve()
})

test('when reject is called, createPromise attribute is rejected', (t) => {
  t.plan(1)
  const p = createPromise()

  p.promise
    .then(() => {
      t.fail()
    })
    .catch(() => {
      t.pass()
    })

  p.reject()
})
