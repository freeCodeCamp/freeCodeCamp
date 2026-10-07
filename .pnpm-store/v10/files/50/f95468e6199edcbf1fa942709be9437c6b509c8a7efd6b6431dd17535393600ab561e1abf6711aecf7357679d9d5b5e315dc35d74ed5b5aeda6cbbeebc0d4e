'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('issue-145', (t) => {
  t.plan(8)

  const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

  const fixedPath = function staticPath () {}
  const varPath = function parameterPath () {}
  findMyWay.on('GET', '/a/b', fixedPath)
  findMyWay.on('GET', '/a/:pam/c', varPath)

  t.assert.equal(findMyWay.find('GET', '/a/b').handler, fixedPath)
  t.assert.equal(findMyWay.find('GET', '/a/b/').handler, fixedPath)
  t.assert.equal(findMyWay.find('GET', '/a/b/c').handler, varPath)
  t.assert.equal(findMyWay.find('GET', '/a/b/c/').handler, varPath)
  t.assert.equal(findMyWay.find('GET', '/a/foo/c').handler, varPath)
  t.assert.equal(findMyWay.find('GET', '/a/foo/c/').handler, varPath)
  t.assert.ok(!findMyWay.find('GET', '/a/c'))
  t.assert.ok(!findMyWay.find('GET', '/a/c/'))
})
