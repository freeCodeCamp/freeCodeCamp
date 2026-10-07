'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('path params match', (t) => {
  t.plan(24)

  const findMyWay = FindMyWay({ ignoreTrailingSlash: true, ignoreDuplicateSlashes: true })

  const b1Path = function b1StaticPath () {}
  const b2Path = function b2StaticPath () {}
  const cPath = function cStaticPath () {}
  const paramPath = function parameterPath () {}

  findMyWay.on('GET', '/ab1', b1Path)
  findMyWay.on('GET', '/ab2', b2Path)
  findMyWay.on('GET', '/ac', cPath)
  findMyWay.on('GET', '/:pam', paramPath)

  t.assert.equal(findMyWay.find('GET', '/ab1').handler, b1Path)
  t.assert.equal(findMyWay.find('GET', '/ab1/').handler, b1Path)
  t.assert.equal(findMyWay.find('GET', '//ab1').handler, b1Path)
  t.assert.equal(findMyWay.find('GET', '//ab1//').handler, b1Path)
  t.assert.equal(findMyWay.find('GET', '/ab2').handler, b2Path)
  t.assert.equal(findMyWay.find('GET', '/ab2/').handler, b2Path)
  t.assert.equal(findMyWay.find('GET', '//ab2').handler, b2Path)
  t.assert.equal(findMyWay.find('GET', '//ab2//').handler, b2Path)
  t.assert.equal(findMyWay.find('GET', '/ac').handler, cPath)
  t.assert.equal(findMyWay.find('GET', '/ac/').handler, cPath)
  t.assert.equal(findMyWay.find('GET', '//ac').handler, cPath)
  t.assert.equal(findMyWay.find('GET', '//ac//').handler, cPath)
  t.assert.equal(findMyWay.find('GET', '/foo').handler, paramPath)
  t.assert.equal(findMyWay.find('GET', '/foo/').handler, paramPath)
  t.assert.equal(findMyWay.find('GET', '//foo').handler, paramPath)
  t.assert.equal(findMyWay.find('GET', '//foo//').handler, paramPath)

  const noTrailingSlashRet = findMyWay.find('GET', '/abcdef')
  t.assert.equal(noTrailingSlashRet.handler, paramPath)
  t.assert.deepEqual(noTrailingSlashRet.params, { pam: 'abcdef' })

  const trailingSlashRet = findMyWay.find('GET', '/abcdef/')
  t.assert.equal(trailingSlashRet.handler, paramPath)
  t.assert.deepEqual(trailingSlashRet.params, { pam: 'abcdef' })

  const noDuplicateSlashRet = findMyWay.find('GET', '/abcdef')
  t.assert.equal(noDuplicateSlashRet.handler, paramPath)
  t.assert.deepEqual(noDuplicateSlashRet.params, { pam: 'abcdef' })

  const duplicateSlashRet = findMyWay.find('GET', '//abcdef')
  t.assert.equal(duplicateSlashRet.handler, paramPath)
  t.assert.deepEqual(duplicateSlashRet.params, { pam: 'abcdef' })
})
