/* replacement start */

const { Buffer } = require('buffer')

/* replacement end */
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

;('use strict')
const { ObjectDefineProperty, ObjectKeys, ReflectApply } = require('./ours/primordials')
const {
  promisify: { custom: customPromisify }
} = require('./ours/util')
const { streamReturningOperators, promiseReturningOperators } = require('./internal/streams/operators')
const {
  codes: { ERR_ILLEGAL_CONSTRUCTOR }
} = require('./ours/errors')
const compose = require('./internal/streams/compose')
const { pipeline } = require('./internal/streams/pipeline')
const { destroyer } = require('./internal/streams/destroy')
const eos = require('./internal/streams/end-of-stream')
const internalBuffer = {}
const promises = require('./stream/promises')
const utils = require('./internal/streams/utils')
const Stream = (module.exports = require('./internal/streams/legacy').Stream)
Stream.isDisturbed = utils.isDisturbed
Stream.isErrored = utils.isErrored
Stream.isReadable = utils.isReadable
Stream.Readable = require('./internal/streams/readable')
for (const key of ObjectKeys(streamReturningOperators)) {
  const op = streamReturningOperators[key]
  function fn(...args) {
    if (new.target) {
      throw ERR_ILLEGAL_CONSTRUCTOR()
    }
    return Stream.Readable.from(ReflectApply(op, this, args))
  }
  ObjectDefineProperty(fn, 'name', {
    __proto__: null,
    value: op.name
  })
  ObjectDefineProperty(fn, 'length', {
    __proto__: null,
    value: op.length
  })
  ObjectDefineProperty(Stream.Readable.prototype, key, {
    __proto__: null,
    value: fn,
    enumerable: false,
    configurable: true,
    writable: true
  })
}
for (const key of ObjectKeys(promiseReturningOperators)) {
  const op = promiseReturningOperators[key]
  function fn(...args) {
    if (new.target) {
      throw ERR_ILLEGAL_CONSTRUCTOR()
    }
    return ReflectApply(op, this, args)
  }
  ObjectDefineProperty(fn, 'name', {
    __proto__: null,
    value: op.name
  })
  ObjectDefineProperty(fn, 'length', {
    __proto__: null,
    value: op.length
  })
  ObjectDefineProperty(Stream.Readable.prototype, key, {
    __proto__: null,
    value: fn,
    enumerable: false,
    configurable: true,
    writable: true
  })
}
Stream.Writable = require('./internal/streams/writable')
Stream.Duplex = require('./internal/streams/duplex')
Stream.Transform = require('./internal/streams/transform')
Stream.PassThrough = require('./internal/streams/passthrough')
Stream.pipeline = pipeline
const { addAbortSignal } = require('./internal/streams/add-abort-signal')
Stream.addAbortSignal = addAbortSignal
Stream.finished = eos
Stream.destroy = destroyer
Stream.compose = compose
ObjectDefineProperty(Stream, 'promises', {
  __proto__: null,
  configurable: true,
  enumerable: true,
  get() {
    return promises
  }
})
ObjectDefineProperty(pipeline, customPromisify, {
  __proto__: null,
  enumerable: true,
  get() {
    return promises.pipeline
  }
})
ObjectDefineProperty(eos, customPromisify, {
  __proto__: null,
  enumerable: true,
  get() {
    return promises.finished
  }
})

// Backwards-compat with node 0.4.x
Stream.Stream = Stream
Stream._isUint8Array = function isUint8Array(value) {
  return value instanceof Uint8Array
}
Stream._uint8ArrayToBuffer = function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
}
