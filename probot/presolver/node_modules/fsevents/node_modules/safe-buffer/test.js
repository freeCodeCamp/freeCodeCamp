/* eslint-disable node/no-deprecated-api */

var test = require('tape')
var SafeBuffer = require('./').Buffer

test('new SafeBuffer(value) works just like Buffer', function (t) {
  t.deepEqual(new SafeBuffer('hey'), new Buffer('hey'))
  t.deepEqual(new SafeBuffer('hey', 'utf8'), new Buffer('hey', 'utf8'))
  t.deepEqual(new SafeBuffer('686579', 'hex'), new Buffer('686579', 'hex'))
  t.deepEqual(new SafeBuffer([1, 2, 3]), new Buffer([1, 2, 3]))
  t.deepEqual(new SafeBuffer(new Uint8Array([1, 2, 3])), new Buffer(new Uint8Array([1, 2, 3])))

  t.equal(typeof SafeBuffer.isBuffer, 'function')
  t.equal(SafeBuffer.isBuffer(new SafeBuffer('hey')), true)
  t.equal(Buffer.isBuffer(new SafeBuffer('hey')), true)
  t.notOk(SafeBuffer.isBuffer({}))

  t.end()
})

test('SafeBuffer.from(value) converts to a Buffer', function (t) {
  t.deepEqual(SafeBuffer.from('hey'), new Buffer('hey'))
  t.deepEqual(SafeBuffer.from('hey', 'utf8'), new Buffer('hey', 'utf8'))
  t.deepEqual(SafeBuffer.from('686579', 'hex'), new Buffer('686579', 'hex'))
  t.deepEqual(SafeBuffer.from([1, 2, 3]), new Buffer([1, 2, 3]))
  t.deepEqual(SafeBuffer.from(new Uint8Array([1, 2, 3])), new Buffer(new Uint8Array([1, 2, 3])))

  t.end()
})

test('SafeBuffer.alloc(number) returns zeroed-out memory', function (t) {
  for (var i = 0; i < 10; i++) {
    var expected1 = new Buffer(1000)
    expected1.fill(0)
    t.deepEqual(SafeBuffer.alloc(1000), expected1)

    var expected2 = new Buffer(1000 * 1000)
    expected2.fill(0)
    t.deepEqual(SafeBuffer.alloc(1000 * 1000), expected2)
  }
  t.end()
})

test('SafeBuffer.allocUnsafe(number)', function (t) {
  var buf = SafeBuffer.allocUnsafe(100) // unitialized memory
  t.equal(buf.length, 100)
  t.equal(SafeBuffer.isBuffer(buf), true)
  t.equal(Buffer.isBuffer(buf), true)
  t.end()
})

test('SafeBuffer.from() throws with number types', function (t) {
  t.plan(5)
  t.throws(function () {
    SafeBuffer.from(0)
  })
  t.throws(function () {
    SafeBuffer.from(-1)
  })
  t.throws(function () {
    SafeBuffer.from(NaN)
  })
  t.throws(function () {
    SafeBuffer.from(Infinity)
  })
  t.throws(function () {
    SafeBuffer.from(99)
  })
})

test('SafeBuffer.allocUnsafe() throws with non-number types', function (t) {
  t.plan(4)
  t.throws(function () {
    SafeBuffer.allocUnsafe('hey')
  })
  t.throws(function () {
    SafeBuffer.allocUnsafe('hey', 'utf8')
  })
  t.throws(function () {
    SafeBuffer.allocUnsafe([1, 2, 3])
  })
  t.throws(function () {
    SafeBuffer.allocUnsafe({})
  })
})

test('SafeBuffer.alloc() throws with non-number types', function (t) {
  t.plan(4)
  t.throws(function () {
    SafeBuffer.alloc('hey')
  })
  t.throws(function () {
    SafeBuffer.alloc('hey', 'utf8')
  })
  t.throws(function () {
    SafeBuffer.alloc([1, 2, 3])
  })
  t.throws(function () {
    SafeBuffer.alloc({})
  })
})
