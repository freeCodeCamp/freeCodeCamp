'use strict'

const { test } = require('node:test')
const proxyaddr = require('..')

test('argument req should be required', function (t) {
  t.assert.throws(proxyaddr.all, /req.*required/u)
})

test('argument trustshould be optional', function (t) {
  const req = createReq('127.0.0.1')
  t.assert.doesNotThrow(proxyaddr.all.bind(null, req))
})

test('with no headers should return socket address', function (t) {
  const req = createReq('127.0.0.1')
  t.assert.deepStrictEqual(proxyaddr.all(req), ['127.0.0.1'])
})

test('with x-forwarded-for header should include x-forwarded-for', function (t) {
  const req = createReq('127.0.0.1', {
    'x-forwarded-for': '10.0.0.1'
  })
  t.assert.deepStrictEqual(proxyaddr.all(req), ['127.0.0.1', '10.0.0.1'])
})

test('with x-forwarded-for header should include x-forwarded-for in correct order', function (t) {
  const req = createReq('127.0.0.1', {
    'x-forwarded-for': '10.0.0.1, 10.0.0.2'
  })
  t.assert.deepStrictEqual(proxyaddr.all(req), ['127.0.0.1', '10.0.0.2', '10.0.0.1'])
})

test('with trust argument should stop at first untrusted', function (t) {
  const req = createReq('127.0.0.1', {
    'x-forwarded-for': '10.0.0.1, 10.0.0.2'
  })
  t.assert.deepStrictEqual(proxyaddr.all(req, '127.0.0.1'), ['127.0.0.1', '10.0.0.2'])
})

test('with trust argument should be only socket address for no trust', function (t) {
  const req = createReq('127.0.0.1', {
    'x-forwarded-for': '10.0.0.1, 10.0.0.2'
  })
  t.assert.deepStrictEqual(proxyaddr.all(req, []), ['127.0.0.1'])
})

function createReq (socketAddr, headers) {
  return {
    socket: {
      remoteAddress: socketAddr
    },
    headers: headers || {}
  }
}
