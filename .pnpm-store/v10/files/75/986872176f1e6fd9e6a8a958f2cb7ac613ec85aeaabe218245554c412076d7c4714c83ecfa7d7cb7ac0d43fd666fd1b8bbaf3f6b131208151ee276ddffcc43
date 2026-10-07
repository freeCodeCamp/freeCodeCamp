const stream = require('streamx')
const { ReadableStream, WritableStream } = require('./web')

const defaultEncoding = 'utf8'

module.exports = exports = stream.Stream

exports.pipeline = stream.pipeline

exports.isStream = stream.isStream
exports.isEnding = stream.isEnding
exports.isEnded = stream.isEnded
exports.isFinishing = stream.isFinishing
exports.isFinished = stream.isFinished
exports.isDisturbed = stream.isDisturbed

exports.isErrored = function isErrored(stream) {
  return exports.getStreamError(stream) !== null
}

exports.isReadable = function isReadable(stream) {
  return stream.readable && !stream.destroying && !exports.isEnded(stream)
}

exports.isWritable = function isWritable(stream) {
  return stream.writable && !stream.destroying && !exports.isFinishing(stream)
}

exports.getStreamError = stream.getStreamError

exports.addAbortSignal = function addAbortSignal(signal, stream) {
  function onAbort() {
    stream.destroy(signal.reason)
  }

  if (signal.aborted) onAbort()
  else signal.addEventListener('abort', onAbort)

  return stream
}

exports.Stream = exports

exports.Readable = class Readable extends stream.Readable {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthReadable: null,
      map: null,
      mapReadable: null
    })

    if (this._construct) this._open = this._construct

    if (this._read !== stream.Readable.prototype._read) {
      this._read = read.bind(this, this._read)
    }

    if (this._destroy !== stream.Stream.prototype._destroy) {
      this._destroy = destroy.bind(this, this._destroy)
    }
  }

  get closed() {
    return !exports.isReadable(this)
  }

  get errored() {
    return stream.getStreamError(this)
  }

  push(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding || defaultEncoding)
    }

    return super.push(chunk)
  }

  unshift(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding || defaultEncoding)
    }

    super.unshift(chunk)
  }

  static fromWeb(readableStream, opts = {}) {
    const stream = readableStream._stream

    if (opts.encoding) stream.setEncoding(opts.encoding)
    if (opts.signal) exports.addAbortSignal(opts.signal, stream)

    return stream
  }

  static toWeb(readable, opts = {}) {
    return new ReadableStream(readable, opts.strategy)
  }

  async [Symbol.asyncDispose]() {
    if (!this.destroyed) this.destroy()

    await new Promise((resolve) => exports.finished(this, resolve))
  }
}

exports.Writable = class Writable extends stream.Writable {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthWritable,
      map: null,
      mapWritable: null
    })

    if (this._construct) this._open = this._construct

    if (this._write !== stream.Writable.prototype._write) {
      this._write = write.bind(this, this._write)
    }

    if (this._destroy !== stream.Stream.prototype._destroy) {
      this._destroy = destroy.bind(this, this._destroy)
    }
  }

  get closed() {
    return !exports.isWritable(this)
  }

  get errored() {
    return stream.getStreamError(this)
  }

  write(chunk, encoding, cb) {
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = Buffer.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result = super.write({ chunk, encoding })

    if (cb) stream.Writable.drained(this).then(() => cb(null), cb)

    return result
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') {
      cb = chunk
      chunk = null
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = Buffer.from(chunk, encoding || defaultEncoding)
    } else {
      encoding = 'buffer'
    }

    const result =
      chunk !== undefined && chunk !== null ? super.end({ chunk, encoding }) : super.end()

    if (cb) this.once('finish', () => cb(null))

    return result
  }

  static fromWeb(writableStream, opts = {}) {
    const stream = writableStream._stream

    if (opts.signal) exports.addAbortSignal(opts.signal, stream)

    return stream
  }

  static toWeb(writable) {
    return new WritableStream(writable)
  }

  async [Symbol.asyncDispose]() {
    if (!this.destroyed) this.destroy()

    await new Promise((resolve) => exports.finished(this, resolve))
  }
}

exports.Duplex = class Duplex extends stream.Duplex {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthReadable: null,
      byteLengthWritable,
      map: null,
      mapReadable: null,
      mapWritable: null
    })

    if (this._construct) this._open = this._construct

    if (this._read !== stream.Readable.prototype._read) {
      this._read = read.bind(this, this._read)
    }

    if (this._write !== stream.Duplex.prototype._write) {
      this._write = write.bind(this, this._write)
    }

    if (this._destroy !== stream.Stream.prototype._destroy) {
      this._destroy = destroy.bind(this, this._destroy)
    }
  }

  push(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding || defaultEncoding)
    }

    return super.push(chunk)
  }

  unshift(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding || defaultEncoding)
    }

    super.unshift(chunk)
  }

  write(chunk, encoding, cb) {
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = Buffer.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result = super.write({ chunk, encoding })

    if (cb) stream.Writable.drained(this).then(() => cb(null), cb)

    return result
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') {
      cb = chunk
      chunk = null
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = Buffer.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result =
      chunk !== undefined && chunk !== null ? super.end({ chunk, encoding }) : super.end()

    if (cb) this.once('finish', () => cb(null))

    return result
  }

  static fromWeb({ readable: readableStream, writable: writableStream }, opts) {
    const readable = exports.Readable.fromWeb(readableStream, opts)
    const writable = exports.Readable.fromWeb(writableStream, opts)

    const duplex = new exports.Duplex({
      write(data, encoding, cb) {
        writable.write(data, encoding, cb)
      }
    })

    readable
      .on('data', (data) => duplex.push(data))
      .on('end', () => duplex.push(null))
      .on('error', (err) => duplex.destroy(err))

    writable.on('finish', () => duplex.end()).on('error', (err) => duplex.destroy(err))

    return duplex
  }

  static toWeb(duplex) {
    const readableStream = exports.Readable.toWeb(duplex)
    const writableStream = exports.Writable.toWeb(duplex)

    return { readable: readableStream, writable: writableStream }
  }
}

class DuplexSide extends exports.Duplex {
  constructor(opts) {
    super(opts)

    this._otherSide = null
    this._cb = null
  }

  _read() {
    const cb = this._cb
    if (!cb) return

    this._cb = null
    cb()
  }

  _write(chunk, encoding, cb) {
    this._otherSide.push(chunk, encoding)
    this._otherSide._cb = cb
  }

  _final(cb) {
    this._otherSide.on('end', cb)
    this._otherSide.push(null)
  }
}

exports.duplexPair = function duplexPair(opts) {
  const sideA = new DuplexSide(opts)
  const sideB = new DuplexSide(opts)

  sideA._otherSide = sideB
  sideB._otherSide = sideA

  return [sideA, sideB]
}

exports.Transform = class Transform extends stream.Transform {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthReadable: null,
      byteLengthWritable,
      map: null,
      mapReadable: null,
      mapWritable: null
    })

    if (this._transform !== stream.Transform.prototype._transform) {
      this._transform = transform.bind(this, this._transform)
    } else {
      this._transform = passthrough
    }
  }

  push(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding || defaultEncoding)
    }

    return super.push(chunk)
  }

  unshift(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding || defaultEncoding)
    }

    super.unshift(chunk)
  }

  write(chunk, encoding, cb) {
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = Buffer.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result = super.write({ chunk, encoding })

    if (cb) stream.Writable.drained(this).then(() => cb(null), cb)

    return result
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') {
      cb = chunk
      chunk = null
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = Buffer.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result =
      chunk !== undefined && chunk !== null ? super.end({ chunk, encoding }) : super.end()

    if (cb) this.once('finish', () => cb(null))

    return result
  }
}

exports.PassThrough = class PassThrough extends exports.Transform {}

exports.finished = function finished(stream, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) opts = {}

  const { cleanup = false } = opts

  const done = () => {
    cb(exports.getStreamError(stream, { all: true }))

    if (cleanup) detach()
  }

  const detach = () => {
    stream.off('close', done)
    stream.off('error', noop)
  }

  if (stream.destroyed) {
    done()
  } else {
    stream.on('close', done)
    stream.on('error', noop)
  }

  return detach
}

function read(read, cb) {
  read.call(this, 65536)

  cb(null)
}

function write(write, data, cb) {
  write.call(this, data.chunk, data.encoding, cb)
}

function transform(transform, data, cb) {
  transform.call(this, data.chunk, data.encoding, cb)
}

function destroy(destroy, cb) {
  destroy.call(this, exports.getStreamError(this), cb)
}

function passthrough(data, cb) {
  cb(null, data.chunk)
}

function byteLengthWritable(data) {
  return data.chunk.byteLength
}

function noop() {}
