'use strict'

const tap = require('tap')
const createDate = require('./create-date')

const wanted = 1624450038567

tap.test('accepts arguments the Date constructor would accept', async t => {
  t.plan(2)
  t.same(createDate(1624450038567).getTime(), wanted)
  t.same(createDate('2021-06-23T12:07:18.567Z').getTime(), wanted)
})

tap.test('accepts epoch as a string', async t => {
  // If Date() accepts this argument, the createDate function is not needed
  // and can be replaced with Date()
  t.plan(2)
  t.notSame(new Date('16244500385-67').getTime(), wanted)
  t.same(createDate('1624450038567').getTime(), wanted)
})
