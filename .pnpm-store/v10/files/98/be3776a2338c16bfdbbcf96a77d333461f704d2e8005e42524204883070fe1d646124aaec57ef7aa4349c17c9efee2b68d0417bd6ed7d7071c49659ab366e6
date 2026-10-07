"use strict"

var wcwidth = require('../')
var test = require('tape')

test('handles regular strings', function(t) {
  t.strictEqual(wcwidth('abc'), 3)
  t.end()
})

test('handles multibyte strings', function(t) {
  t.strictEqual(wcwidth('字的模块'), 8)
  t.end()
})

test('handles multibyte characters mixed with regular characters', function(t) {
  t.strictEqual(wcwidth('abc 字的模块'), 12)
  t.end()
})

test('ignores control characters e.g. \\n', function(t) {
  t.strictEqual(wcwidth('abc\n字的模块\ndef'), 14)
  t.end()
})

test('ignores bad input', function(t) {
  t.strictEqual(wcwidth(''), 0)
  t.strictEqual(wcwidth(3), 0)
  t.strictEqual(wcwidth({}), 0)
  t.strictEqual(wcwidth([]), 0)
  t.strictEqual(wcwidth(), 0)
  t.end()
})

test('ignores nul (charcode 0)', function(t) {
  t.strictEqual(wcwidth(String.fromCharCode(0)), 0)
  t.end()
})

test('ignores nul mixed with chars', function(t) {
  t.strictEqual(wcwidth('a' + String.fromCharCode(0) + '\n字的'), 5)
  t.end()
})

test('can have custom value for nul', function(t) {
  t.strictEqual(wcwidth.config({
    nul: 10
  })(String.fromCharCode(0) + 'a字的'), 15)
  t.end()
})

test('can have custom control char value', function(t) {
  t.strictEqual(wcwidth.config({
    control: 1
  })('abc\n字的模块\ndef'), 16)
  t.end()
})

test('negative custom control chars == -1', function(t) {
  t.strictEqual(wcwidth.config({
    control: -1
  })('abc\n字的模块\ndef'), -1)
  t.end()
})
