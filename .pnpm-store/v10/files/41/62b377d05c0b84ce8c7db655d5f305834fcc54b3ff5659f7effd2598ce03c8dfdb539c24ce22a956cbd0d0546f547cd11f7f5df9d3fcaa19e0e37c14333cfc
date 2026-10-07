'use strict'

const { test } = require('node:test')

test('asNumber should convert BigInt', (t) => {
  t.plan(1)
  const Serializer = require('../lib/serializer')
  const serializer = new Serializer()

  const number = serializer.asNumber(11753021440n)

  t.assert.equal(number, '11753021440')
})
