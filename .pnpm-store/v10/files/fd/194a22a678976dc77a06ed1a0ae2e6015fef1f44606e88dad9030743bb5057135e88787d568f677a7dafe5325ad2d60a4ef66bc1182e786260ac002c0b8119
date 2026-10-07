var concat = require('../')
var stream = require('stream')
var test = require('tape')

test('basic', function (t) {
  t.plan(2)
  var s = new stream.PassThrough()
  concat(s, function (err, buf) {
    t.error(err)
    t.deepEqual(buf, Buffer.from('abc123456789'))
  })
  s.write('abc')
  setTimeout(function () {
    s.write('123')
  }, 10)
  setTimeout(function () {
    s.write('456')
  }, 20)
  setTimeout(function () {
    s.end('789')
  }, 30)
})

test('error', function (t) {
  t.plan(2)
  var s = new stream.PassThrough()
  concat(s, function (err, buf) {
    t.ok(err, 'got expected error')
    t.ok(!buf)
  })
  s.write('abc')
  setTimeout(function () {
    s.write('123')
  }, 10)
  setTimeout(function () {
    s.write('456')
  }, 20)
  setTimeout(function () {
    s.emit('error', new Error('error'))
  }, 30)
})
