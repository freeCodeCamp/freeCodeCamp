// vim: set nowrap:
var util = require('util')
var t = require('tap')
var LRU = require('../')

var l = LRU()

function inspect (str) {
  t.equal(util.inspect(l), str)
  t.equal(l.inspect(), str)
}

inspect('LRUCache {}')

l.max = 10
inspect('LRUCache {\n  max: 10\n}')

l.maxAge = 50
inspect('LRUCache {\n  max: 10,\n  maxAge: 50\n}')

l.set({ foo: 'bar' }, 'baz')
inspect("LRUCache {\n  max: 10,\n  maxAge: 50,\n\n  { foo: 'bar' } => { value: 'baz' }\n}")

l.maxAge = 0
l.set(1, {a: {b: {c: {d: {e: {f: {}}}}}}})
inspect("LRUCache {\n  max: 10,\n\n  1 => { value: { a: { b: [Object] } } },\n  { foo: 'bar' } => { value: 'baz', maxAge: 50 }\n}")

l.allowStale = true
inspect("LRUCache {\n  allowStale: true,\n  max: 10,\n\n  1 => { value: { a: { b: [Object] } } },\n  { foo: 'bar' } => { value: 'baz', maxAge: 50 }\n}")

setTimeout(function () {
  inspect("LRUCache {\n  allowStale: true,\n  max: 10,\n\n  1 => { value: { a: { b: [Object] } } },\n  { foo: 'bar' } => { value: 'baz', maxAge: 50, stale: true }\n}")

  // prune stale items
  l.forEach(function () {})
  inspect('LRUCache {\n  allowStale: true,\n  max: 10,\n\n  1 => { value: { a: { b: [Object] } } }\n}')

  l.lengthCalculator = function () { return 5 }
  inspect('LRUCache {\n  allowStale: true,\n  max: 10,\n  length: 5,\n\n  1 => { value: { a: { b: [Object] } }, length: 5 }\n}')

  l.max = 0
  inspect('LRUCache {\n  allowStale: true,\n  length: 5,\n\n  1 => { value: { a: { b: [Object] } }, length: 5 }\n}')

  l.maxAge = 100
  inspect('LRUCache {\n  allowStale: true,\n  maxAge: 100,\n  length: 5,\n\n  1 => { value: { a: { b: [Object] } }, maxAge: 0, length: 5 }\n}')
  l.allowStale = false
  inspect('LRUCache {\n  maxAge: 100,\n  length: 5,\n\n  1 => { value: { a: { b: [Object] } }, maxAge: 0, length: 5 }\n}')

  l.maxAge = 0
  inspect('LRUCache {\n  length: 5,\n\n  1 => { value: { a: { b: [Object] } }, length: 5 }\n}')

  l.lengthCalculator = null
  inspect('LRUCache {\n  1 => { value: { a: { b: [Object] } } }\n}')
}, 100)
