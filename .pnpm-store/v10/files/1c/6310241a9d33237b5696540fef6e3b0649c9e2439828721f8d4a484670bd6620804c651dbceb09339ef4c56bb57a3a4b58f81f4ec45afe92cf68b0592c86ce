'use strict'

const Stream = require('stream')
if (Stream && process.env.READABLE_STREAM === 'disable') {
  const promises = Stream.promises

  // Explicit export naming is needed for ESM
  module.exports._uint8ArrayToBuffer = Stream._uint8ArrayToBuffer
  module.exports._isUint8Array = Stream._isUint8Array
  module.exports.isDisturbed = Stream.isDisturbed
  module.exports.isErrored = Stream.isErrored
  module.exports.isReadable = Stream.isReadable
  module.exports.Readable = Stream.Readable
  module.exports.Writable = Stream.Writable
  module.exports.Duplex = Stream.Duplex
  module.exports.Transform = Stream.Transform
  module.exports.PassThrough = Stream.PassThrough
  module.exports.addAbortSignal = Stream.addAbortSignal
  module.exports.finished = Stream.finished
  module.exports.destroy = Stream.destroy
  module.exports.pipeline = Stream.pipeline
  module.exports.compose = Stream.compose
  Object.defineProperty(Stream, 'promises', {
    configurable: true,
    enumerable: true,
    get() {
      return promises
    }
  })
  module.exports.Stream = Stream.Stream
} else {
  const CustomStream = require('../stream')
  const promises = require('../stream/promises')
  const originalDestroy = CustomStream.Readable.destroy
  module.exports = CustomStream.Readable

  // Explicit export naming is needed for ESM
  module.exports._uint8ArrayToBuffer = CustomStream._uint8ArrayToBuffer
  module.exports._isUint8Array = CustomStream._isUint8Array
  module.exports.isDisturbed = CustomStream.isDisturbed
  module.exports.isErrored = CustomStream.isErrored
  module.exports.isReadable = CustomStream.isReadable
  module.exports.Readable = CustomStream.Readable
  module.exports.Writable = CustomStream.Writable
  module.exports.Duplex = CustomStream.Duplex
  module.exports.Transform = CustomStream.Transform
  module.exports.PassThrough = CustomStream.PassThrough
  module.exports.addAbortSignal = CustomStream.addAbortSignal
  module.exports.finished = CustomStream.finished
  module.exports.destroy = CustomStream.destroy
  module.exports.destroy = originalDestroy
  module.exports.pipeline = CustomStream.pipeline
  module.exports.compose = CustomStream.compose
  Object.defineProperty(CustomStream, 'promises', {
    configurable: true,
    enumerable: true,
    get() {
      return promises
    }
  })
  module.exports.Stream = CustomStream.Stream
}

// Allow default importing
module.exports.default = module.exports
