'use strict'

const { test } = require('node:test')
const proxyaddr = require('..')

test('trust arg should be required', function (t) {
  t.assert.throws(proxyaddr.compile, /argument.*required/u)
})

test('trust arg should accept an array', function (t) {
  t.assert.strictEqual(typeof proxyaddr.compile([]), 'function')
})

test('trust arg should accept a string', function (t) {
  t.assert.strictEqual(typeof proxyaddr.compile('127.0.0.1'), 'function')
})

test('trust arg should reject a number', function (t) {
  t.assert.throws(proxyaddr.compile.bind(null, 42), /unsupported trust argument/u)
})

test('trust arg should accept IPv4', function (t) {
  t.assert.strictEqual(typeof proxyaddr.compile('127.0.0.1'), 'function')
})

test('trust arg should accept IPv6', function (t) {
  t.assert.strictEqual(typeof proxyaddr.compile('::1'), 'function')
})

test('trust arg should accept IPv4-style IPv6', function (t) {
  t.assert.strictEqual(typeof proxyaddr.compile('::ffff:127.0.0.1'), 'function')
})

test('trust arg should accept pre-defined names', function (t) {
  t.assert.strictEqual(typeof proxyaddr.compile('loopback'), 'function')
})

test('trust arg should accept pre-defined names in array', function (t) {
  t.assert.strictEqual(typeof proxyaddr.compile(['loopback', '10.0.0.1']), 'function')
})

test('trust arg should reject non-IP', function (t) {
  t.assert.throws(proxyaddr.compile.bind(null, 'blargh'), /invalid IP address/u)
  t.assert.throws(proxyaddr.compile.bind(null, '-1'), /invalid IP address/u)
})

test('trust arg should reject bad CIDR', function (t) {
  t.assert.throws(proxyaddr.compile.bind(null, '10.0.0.1/6000'), /invalid range on address/u)
  t.assert.throws(proxyaddr.compile.bind(null, '::1/6000'), /invalid range on address/u)
  t.assert.throws(proxyaddr.compile.bind(null, '::ffff:a00:2/136'), /invalid range on address/u)
  t.assert.throws(proxyaddr.compile.bind(null, '::ffff:a00:2/-46'), /invalid range on address/u)
})

test('trust arg should not alter input array', function (t) {
  const arr = ['loopback', '10.0.0.1']
  t.assert.strictEqual(typeof proxyaddr.compile(arr), 'function')
  t.assert.deepStrictEqual(arr, ['loopback', '10.0.0.1'])
})
