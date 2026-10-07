'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

const noop = function () {}

test('issue-62', (t) => {
  t.plan(2)

  const findMyWay = FindMyWay({ allowUnsafeRegex: true })

  findMyWay.on('GET', '/foo/:id(([a-f0-9]{3},?)+)', noop)

  t.assert.ok(!findMyWay.find('GET', '/foo/qwerty'))
  t.assert.ok(findMyWay.find('GET', '/foo/bac,1ea'))
})

test('issue-62 - escape chars', (t) => {
  const findMyWay = FindMyWay()

  t.plan(2)

  findMyWay.get('/foo/:param(\\([a-f0-9]{3}\\))', noop)

  t.assert.ok(!findMyWay.find('GET', '/foo/abc'))
  t.assert.ok(findMyWay.find('GET', '/foo/(abc)', {}))
})
