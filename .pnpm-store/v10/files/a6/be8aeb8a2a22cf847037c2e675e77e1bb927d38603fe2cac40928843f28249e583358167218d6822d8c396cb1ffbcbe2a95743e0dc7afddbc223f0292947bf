var exists = require('./')
var t = require('tap')
var touch = require('touch')
var rimraf = require('rimraf')

t.test('setup', function (t) {
  touch.sync('one')
  touch.sync('two')
  touch.sync('three')
  touch.sync('four')
  t.end()
})

t.test('existing file same way', function (t) {
  t.plan(4)
  t.ok(exists.sync('one'))
  t.ok(exists.sync('one'))
  exists('two', function (e) {
    t.ok(e)
    exists('two', t.ok)
  })
})

t.test('existing file different ways', function (t) {
  t.plan(4)
  t.ok(exists.sync('three'))
  t.ok(exists.sync('four'))
  exists('three', function (e) {
    t.ok(e)
    exists('four', t.ok)
  })
})

t.test('non-existing file same way', function (t) {
  t.plan(4)
  t.notOk(exists.sync('one-no'))
  t.notOk(exists.sync('one-no'))
  exists('two-no', function (e) {
    t.notOk(e)
    exists('two-no', t.notOk)
  })
})

t.test('non-existing file different ways', function (t) {
  t.plan(4)
  t.notOk(exists.sync('three-no'))
  t.notOk(exists.sync('four-no'))
  exists('three-no', function (e) {
    t.notOk(e)
    exists('four-no', t.notOk)
  })
})

t.test('cleanup', function (t) {
  rimraf.sync('one')
  rimraf.sync('two')
  rimraf.sync('three')
  rimraf.sync('four')
  t.end()
})
