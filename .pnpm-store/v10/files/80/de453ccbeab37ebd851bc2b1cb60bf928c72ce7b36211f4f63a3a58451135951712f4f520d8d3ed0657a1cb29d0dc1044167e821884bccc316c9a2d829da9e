'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('should sanitize the url - query', t => {
  t.plan(2)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', (req, res, params, store, query) => {
    t.assert.deepEqual(query, { hello: 'world' })
    t.assert.ok('inside the handler')
  })

  findMyWay.lookup({ method: 'GET', url: '/test?hello=world', headers: {} }, null)
})

test('should sanitize the url - hash', t => {
  t.plan(2)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', (req, res, params, store, query) => {
    t.assert.deepEqual(query, { hello: '' })
    t.assert.ok('inside the handler')
  })

  findMyWay.lookup({ method: 'GET', url: '/test#hello', headers: {} }, null)
})

test('handles path and query separated by ; with useSemicolonDelimiter enabled', t => {
  t.plan(2)
  const findMyWay = FindMyWay({
    useSemicolonDelimiter: true
  })

  findMyWay.on('GET', '/test', (req, res, params, store, query) => {
    t.assert.deepEqual(query, { jsessionid: '123456' })
    t.assert.ok('inside the handler')
  })

  findMyWay.lookup({ method: 'GET', url: '/test;jsessionid=123456', headers: {} }, null)
})

test('handles path and query separated by ? using ; in the path', t => {
  t.plan(2)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test;jsessionid=123456', (req, res, params, store, query) => {
    t.assert.deepEqual(query, { foo: 'bar' })
    t.assert.ok('inside the handler')
  })

  findMyWay.lookup({ method: 'GET', url: '/test;jsessionid=123456?foo=bar', headers: {} }, null)
})
