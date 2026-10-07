'use strict'

const { test } = require('node:test')
const querystring = require('fast-querystring')
const FindMyWay = require('../')

test('Custom querystring parser', t => {
  t.plan(2)

  const findMyWay = FindMyWay({
    querystringParser: function (str) {
      t.assert.equal(str, 'foo=bar&baz=faz')
      return querystring.parse(str)
    }
  })
  findMyWay.on('GET', '/', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/?foo=bar&baz=faz').searchParams, { foo: 'bar', baz: 'faz' })
})

test('Custom querystring parser should be called also if there is nothing to parse', t => {
  t.plan(2)

  const findMyWay = FindMyWay({
    querystringParser: function (str) {
      t.assert.equal(str, '')
      return querystring.parse(str)
    }
  })
  findMyWay.on('GET', '/', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/').searchParams, {})
})

test('Querystring without value', t => {
  t.plan(2)

  const findMyWay = FindMyWay({
    querystringParser: function (str) {
      t.assert.equal(str, 'foo')
      return querystring.parse(str)
    }
  })
  findMyWay.on('GET', '/', () => {})
  t.assert.deepEqual(findMyWay.find('GET', '/?foo').searchParams, { foo: '' })
})
