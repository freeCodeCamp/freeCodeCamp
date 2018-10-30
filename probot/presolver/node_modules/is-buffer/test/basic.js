var isBuffer = require('../')
var test = require('tape')

test('is-buffer', function (t) {
  t.equal(isBuffer(Buffer.alloc(4)), true, 'new Buffer(4)')
  t.equal(isBuffer(Buffer.allocUnsafeSlow(100)), true, 'SlowBuffer(100)')

  t.equal(isBuffer(undefined), false, 'undefined')
  t.equal(isBuffer(null), false, 'null')
  t.equal(isBuffer(''), false, 'empty string')
  t.equal(isBuffer(true), false, 'true')
  t.equal(isBuffer(false), false, 'false')
  t.equal(isBuffer(0), false, '0')
  t.equal(isBuffer(1), false, '1')
  t.equal(isBuffer(1.0), false, '1.0')
  t.equal(isBuffer('string'), false, 'string')
  t.equal(isBuffer({}), false, '{}')
  t.equal(isBuffer([]), false, '[]')
  t.equal(isBuffer(function foo () {}), false, 'function foo () {}')
  t.equal(isBuffer({ isBuffer: null }), false, '{ isBuffer: null }')
  t.equal(isBuffer({ isBuffer: function () { throw new Error() } }), false, '{ isBuffer: function () { throw new Error() } }')

  t.end()
})
