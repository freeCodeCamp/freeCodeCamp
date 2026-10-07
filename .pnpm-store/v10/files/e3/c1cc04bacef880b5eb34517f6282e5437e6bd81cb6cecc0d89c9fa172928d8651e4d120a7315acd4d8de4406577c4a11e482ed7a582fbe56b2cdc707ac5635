var test = require('tape')
var toBuffer = require('../')

test('convert to buffer from Uint8Array', function (t) {
  if (typeof Uint8Array !== 'undefined') {
    var arr = new Uint8Array([1, 2, 3])
    arr = toBuffer(arr)

    t.deepEqual(arr, Buffer.from([1, 2, 3]), 'contents equal')
    t.ok(Buffer.isBuffer(arr), 'is buffer')
    t.equal(arr.readUInt8(0), 1)
    t.equal(arr.readUInt8(1), 2)
    t.equal(arr.readUInt8(2), 3)
  } else {
    t.pass('browser lacks Uint8Array support, skip test')
  }
  t.end()
})

test('convert to buffer from another arrayview type (Uint32Array)', function (t) {
  if (typeof Uint32Array !== 'undefined' && Buffer.TYPED_ARRAY_SUPPORT !== false) {
    var arr = new Uint32Array([1, 2, 3])
    arr = toBuffer(arr)

    t.deepEqual(arr, Buffer.from([1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0]), 'contents equal')
    t.ok(Buffer.isBuffer(arr), 'is buffer')
    t.equal(arr.readUInt32LE(0), 1)
    t.equal(arr.readUInt32LE(4), 2)
    t.equal(arr.readUInt32LE(8), 3)
    t.equal(arr instanceof Uint8Array, true)
  } else {
    t.pass('browser lacks Uint32Array support, skip test')
  }
  t.end()
})

test('convert to buffer from ArrayBuffer', function (t) {
  if (typeof Uint32Array !== 'undefined' && Buffer.TYPED_ARRAY_SUPPORT !== false) {
    var arr = new Uint32Array([1, 2, 3]).subarray(1, 2)
    arr = toBuffer(arr)

    t.deepEqual(arr, Buffer.from([2, 0, 0, 0]), 'contents equal')
    t.ok(Buffer.isBuffer(arr), 'is buffer')
    t.equal(arr.readUInt32LE(0), 2)
    t.equal(arr instanceof Uint8Array, true)
  } else {
    t.pass('browser lacks ArrayBuffer support, skip test')
  }
  t.end()
})
