'use strict'

process.env.TZ = 'UTC'

const tap = require('tap')
const isValidDate = require('./is-valid-date')

tap.test('returns true for valid dates', async t => {
  t.same(isValidDate(new Date()), true)
})

tap.test('returns false for non-dates and invalid dates', async t => {
  t.plan(2)
  t.same(isValidDate('20210621'), false)
  t.same(isValidDate(new Date('2021-41-99')), false)
})
