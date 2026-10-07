'use strict'
var Buffer = require('safe-buffer').Buffer
var Transform = require('stream').Transform
var inherits = require('inherits')

function HashBase (blockSize) {
  Transform.call(this)

  this._block = Buffer.allocUnsafe(blockSize)
  this._blockSize = blockSize
  this._blockOffset = 0
  this._length = [0, 0, 0, 0]

  this._finalized = false
}

inherits(HashBase, Transform)

HashBase.prototype._transform = function (chunk, encoding, callback) {
  var error = null
  try {
    this.update(chunk, encoding)
  } catch (err) {
    error = err
  }

  callback(error)
}

HashBase.prototype._flush = function (callback) {
  var error = null
  try {
    this.push(this.digest())
  } catch (err) {
    error = err
  }

  callback(error)
}

var useUint8Array = typeof Uint8Array !== 'undefined'
var useArrayBuffer = typeof ArrayBuffer !== 'undefined' &&
  typeof Uint8Array !== 'undefined' &&
  ArrayBuffer.isView &&
  (Buffer.prototype instanceof Uint8Array || Buffer.TYPED_ARRAY_SUPPORT)

function toBuffer (data, encoding) {
  // No need to do anything for exact instance
  // This is only valid when safe-buffer.Buffer === buffer.Buffer, i.e. when Buffer.from/Buffer.alloc existed
  if (data instanceof Buffer) return data

  // Convert strings to Buffer
  if (typeof data === 'string') return Buffer.from(data, encoding)

  /*
   * Wrap any TypedArray instances and DataViews
   * Makes sense only on engines with full TypedArray support -- let Buffer detect that
   */
  if (useArrayBuffer && ArrayBuffer.isView(data)) {
    if (data.byteLength === 0) return Buffer.alloc(0) // Bug in Node.js <6.3.1, which treats this as out-of-bounds
    var res = Buffer.from(data.buffer, data.byteOffset, data.byteLength)
    // Recheck result size, as offset/length doesn't work on Node.js <5.10
    // We just go to Uint8Array case if this fails
    if (res.byteLength === data.byteLength) return res
  }

  /*
   * Uint8Array in engines where Buffer.from might not work with ArrayBuffer, just copy over
   * Doesn't make sense with other TypedArray instances
   */
  if (useUint8Array && data instanceof Uint8Array) return Buffer.from(data)

  /*
   * Old Buffer polyfill on an engine that doesn't have TypedArray support
   * Also, this is from a different Buffer polyfill implementation then we have, as instanceof check failed
   * Convert to our current Buffer implementation
   */
  if (
    Buffer.isBuffer(data) &&
    data.constructor &&
    typeof data.constructor.isBuffer === 'function' &&
    data.constructor.isBuffer(data)
  ) {
    return Buffer.from(data)
  }

  throw new TypeError('The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.')
}

HashBase.prototype.update = function (data, encoding) {
  if (this._finalized) throw new Error('Digest already called')

  data = toBuffer(data, encoding) // asserts correct input type

  // consume data
  var block = this._block
  var offset = 0
  while (this._blockOffset + data.length - offset >= this._blockSize) {
    for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++]
    this._update()
    this._blockOffset = 0
  }
  while (offset < data.length) block[this._blockOffset++] = data[offset++]

  // update length
  for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
    this._length[j] += carry
    carry = (this._length[j] / 0x0100000000) | 0
    if (carry > 0) this._length[j] -= 0x0100000000 * carry
  }

  return this
}

HashBase.prototype._update = function () {
  throw new Error('_update is not implemented')
}

HashBase.prototype.digest = function (encoding) {
  if (this._finalized) throw new Error('Digest already called')
  this._finalized = true

  var digest = this._digest()
  if (encoding !== undefined) digest = digest.toString(encoding)

  // reset state
  this._block.fill(0)
  this._blockOffset = 0
  for (var i = 0; i < 4; ++i) this._length[i] = 0

  return digest
}

HashBase.prototype._digest = function () {
  throw new Error('_digest is not implemented')
}

module.exports = HashBase
