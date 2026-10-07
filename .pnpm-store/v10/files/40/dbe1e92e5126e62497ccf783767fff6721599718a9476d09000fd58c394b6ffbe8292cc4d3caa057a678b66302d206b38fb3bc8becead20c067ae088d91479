const { Readable, Writable, Transform, getStreamError, isStreamx, isDisturbed } = require('streamx')
const tee = require('teex')

const readableKind = Symbol.for('bare.stream.readable.kind')
const writableKind = Symbol.for('bare.stream.writable.kind')
const transformKind = Symbol.for('bare.stream.transform.kind')

// https://streams.spec.whatwg.org/#readablestreamdefaultreader
exports.ReadableStreamDefaultReader = class ReadableStreamDefaultReader {
  constructor(stream) {
    this._stream = stream
    this._stream._stream.once('close', onclose).once('error', onerror)

    const closed = Promise.withResolvers()

    // Avoid unhandled exceptions
    closed.promise.catch(noop)

    this._closed = closed

    function onclose() {
      closed.resolve()
    }

    function onerror(err) {
      closed.reject(err)
    }
  }

  get closed() {
    return this._closed.promise
  }

  read() {
    const stream = this._stream._stream

    return new Promise((resolve, reject) => {
      const err = getStreamError(stream)

      if (err) return reject(err)

      if (stream.destroyed) {
        return resolve({ value: undefined, done: true })
      }

      const value = stream.read()

      if (value !== null) {
        return resolve({ value, done: false })
      }

      stream.once('readable', onreadable).once('close', onclose).once('error', onerror)

      function onreadable() {
        const value = stream.read()

        ondone(null, value === null ? { value: undefined, done: true } : { value, done: false })
      }

      function onclose() {
        ondone(null, { value: undefined, done: true })
      }

      function onerror(err) {
        ondone(err, null)
      }

      function ondone(err, value) {
        stream.off('readable', onreadable).off('close', onclose).off('error', onerror)

        if (err) reject(err)
        else resolve(value)
      }
    })
  }

  releaseLock() {
    this._closed.reject(new TypeError('Reader was released'))
    this._stream._releaseLock()
    this._stream = null
  }

  cancel(reason = new TypeError('Stream was cancelled')) {
    const stream = this._stream._stream

    if (stream.destroyed) return Promise.resolve()

    return new Promise((resolve) =>
      stream.once('close', resolve).once('error', noop).destroy(reason)
    )
  }
}

// https://streams.spec.whatwg.org/#readablestreamdefaultcontroller
exports.ReadableStreamDefaultController = class ReadableStreamDefaultController {
  constructor(stream) {
    this._stream = stream
  }

  get desiredSize() {
    const stream = this._stream._stream

    return stream._readableState.highWaterMark - stream._readableState.buffered
  }

  enqueue(data) {
    this._stream._stream.push(data)
  }

  close() {
    this._stream._stream.push(null)
  }

  error(err) {
    this._stream._stream.destroy(err)
  }
}

// https://streams.spec.whatwg.org/#readablestream
class ReadableStream {
  static get [readableKind]() {
    return 0 // Compatibility version
  }

  static from(iterable) {
    return new ReadableStream(Readable.from(iterable))
  }

  constructor(underlyingSource = {}, queuingStrategy) {
    if (isStreamx(underlyingSource)) {
      this._stream = underlyingSource
    } else {
      if (queuingStrategy === undefined) {
        queuingStrategy = new exports.CountQueuingStrategy()
      }

      const { start, pull, cancel } = underlyingSource
      const { highWaterMark = 1, size = defaultSize } = queuingStrategy

      this._stream = new Readable({ highWaterMark, byteLength: size })

      const controller = new exports.ReadableStreamDefaultController(this)

      if (start) {
        this._stream._open = this._open.bind(this, start.call(this, controller))
      }

      if (pull) {
        this._stream._read = this._read.bind(this, pull.bind(this, controller))
      }

      if (cancel) {
        this._stream.once('error', cancel)
      }
    }

    this._reader = null
  }

  get [readableKind]() {
    return ReadableStream[readableKind]
  }

  get locked() {
    return this._reader !== null
  }

  getReader() {
    if (this.locked) throw new TypeError('Stream is locked')

    this._reader = new exports.ReadableStreamDefaultReader(this)

    return this._reader
  }

  cancel(reason = new TypeError('Stream was cancelled')) {
    const stream = this._stream

    if (stream.destroyed) return Promise.resolve()

    if (this.locked) return Promise.reject(new TypeError('Stream is locked'))

    return new Promise((resolve) =>
      stream.once('close', resolve).once('error', noop).destroy(reason)
    )
  }

  tee() {
    const [a, b] = tee(this._stream)

    return [new ReadableStream(a), new ReadableStream(b)]
  }

  pipeTo(destination) {
    return new Promise((resolve, reject) =>
      this._stream.pipe(destination._stream, (err) => {
        err ? reject(err) : resolve()
      })
    )
  }

  [Symbol.asyncIterator]() {
    return this._stream[Symbol.asyncIterator]()
  }

  _releaseLock() {
    this._reader = null
  }

  async _open(starting, cb) {
    let err = null
    try {
      await starting
    } catch (e) {
      err = e
    }
    cb(err)
  }

  async _read(pull, cb) {
    let err = null
    try {
      await pull()
    } catch (e) {
      err = e
    }
    cb(err)
  }
}

function defaultSize() {
  return 1
}

exports.ReadableStream = ReadableStream

// https://streams.spec.whatwg.org/#countqueuingstrategy
exports.CountQueuingStrategy = class CountQueuingStrategy {
  constructor(opts = {}) {
    const { highWaterMark = 1 } = opts

    this.highWaterMark = highWaterMark
  }

  size(chunk) {
    return 1
  }
}

// https://streams.spec.whatwg.org/#bytelengthqueuingstrategy
exports.ByteLengthQueuingStrategy = class ByteLengthQueuingStrategy {
  constructor(opts = {}) {
    const { highWaterMark = 16384 } = opts

    this.highWaterMark = highWaterMark
  }

  size(chunk) {
    return chunk.byteLength
  }
}

exports.isReadableStream = function isReadableStream(value) {
  if (value instanceof ReadableStream) return true

  return (
    typeof value === 'object' &&
    value !== null &&
    value[readableKind] === ReadableStream[readableKind]
  )
}

// https://streams.spec.whatwg.org/#readablestream-errored
exports.isReadableStreamErrored = function isReadableStreamErrored(stream) {
  return getStreamError(stream._stream) !== null
}

// https://streams.spec.whatwg.org/#is-readable-stream-disturbed
exports.isReadableStreamDisturbed = function isReadableStreamDisturbed(stream) {
  return isDisturbed(stream._stream)
}

// https://streams.spec.whatwg.org/#writablestreamdefaultwriter
exports.WritableStreamDefaultWriter = class WritableStreamDefaultWriter {
  constructor(stream) {
    this._stream = stream
    this._stream._stream.once('close', onclose).once('error', onerror)

    const closed = Promise.withResolvers()

    // Avoid unhandled exceptions
    closed.promise.catch(noop)

    this._closed = closed

    function onclose() {
      closed.resolve()
    }

    function onerror(err) {
      closed.reject(err)
    }
  }

  get desiredSize() {
    const stream = this._stream._stream

    return stream._writableState.highWaterMark - stream._writableState.buffered
  }

  get closed() {
    return this._closed.promise
  }

  get ready() {
    const stream = this._stream._stream

    if (getStreamError(stream)) return Promise.reject()

    return Writable.drained(stream).then()
  }

  async write(chunk) {
    const stream = this._stream._stream

    let err = getStreamError(stream)
    if (err) return Promise.reject(err)

    stream.write(chunk)

    await Writable.drained(stream)

    err = getStreamError(stream)
    if (err) return Promise.reject(err)
  }

  releaseLock() {
    this._closed.reject(new TypeError('Writer was released'))
    this._stream._releaseLock()
    this._stream = null
  }

  close() {
    const stream = this._stream._stream

    if (stream.destroyed) return Promise.resolve()

    return new Promise((resolve) => stream.once('close', resolve).end())
  }

  abort(reason = new TypeError('Stream was aborted')) {
    const stream = this._stream._stream

    if (stream.destroyed) return Promise.resolve()

    return new Promise((resolve) => stream.once('close', resolve).destroy(reason))
  }
}

// https://streams.spec.whatwg.org/#writablestreamdefaultcontroller
exports.WritableStreamDefaultController = class WritableStreamDefaultController {
  constructor(stream) {
    this._stream = stream
  }

  error(err) {
    this._stream._stream.destroy(err)
  }
}

// https://streams.spec.whatwg.org/#writablestream
class WritableStream {
  static get [writableKind]() {
    return 0 // Compatibility version
  }

  constructor(underlyingSink = {}, queuingStrategy = {}) {
    if (isStreamx(underlyingSink)) {
      this._stream = underlyingSink
    } else {
      if (queuingStrategy === undefined) {
        queuingStrategy = new exports.CountQueuingStrategy()
      }

      const { start, write, close, abort } = underlyingSink
      const { highWaterMark = 1, size = defaultSize } = queuingStrategy

      this._stream = new Writable({ highWaterMark, byteLength: size })

      this._controller = new exports.WritableStreamDefaultController(this)

      if (start) {
        this._stream._open = this._open.bind(this, start.call(this, this._controller))
      }

      if (write) {
        this._stream._write = this._write.bind(this, write)
      }

      if (close) {
        this._stream._destroy = this._destroy.bind(this, close.call(this))
      }

      if (abort) {
        this._stream.once('error', abort)
      }
    }

    this._writer = null
  }

  get [writableKind]() {
    return WritableStream[writableKind]
  }

  get locked() {
    return this._writer !== null
  }

  getWriter() {
    if (this.locked) throw new TypeError('Stream is locked')

    this._writer = new exports.WritableStreamDefaultWriter(this)

    return this._writer
  }

  abort(reason = new TypeError('Stream was aborted')) {
    if (this._stream.destroyed) return Promise.resolve()

    if (this.locked) return Promise.reject(new TypeError('Stream is locked'))

    return new Promise((resolve) => this._stream.once('close', resolve).destroy(reason))
  }

  close() {
    if (this._stream.destroyed) return Promise.resolve()

    if (this.locked) return Promise.reject(new TypeError('Stream is locked'))

    return new Promise((resolve) => this._stream.once('close', resolve).end())
  }

  _releaseLock() {
    this._writer = null
  }

  async _open(starting, cb) {
    let err = null
    try {
      await starting
    } catch (e) {
      err = e
    }
    cb(err)
  }

  async _write(write, data, cb) {
    let err = null
    try {
      await write(data, this._controller)
    } catch (e) {
      err = e
    }
    cb(err)
  }

  async _destroy(closing, cb) {
    let err = null
    try {
      await closing
    } catch (e) {
      err = e
    }
    cb(err)
  }
}

exports.WritableStream = WritableStream

exports.isWritableStream = function isWritableStream(value) {
  if (value instanceof WritableStream) return true

  return (
    typeof value === 'object' &&
    value !== null &&
    value[writableKind] === WritableStream[writableKind]
  )
}

// https://streams.spec.whatwg.org/#transformstreamdefaultcontroller
exports.TransformStreamDefaultController = class TransformStreamDefaultController {
  constructor(stream) {
    this._stream = stream
  }

  get desiredSize() {
    const stream = this._stream._stream

    return stream._readableState.highWaterMark - stream._readableState.buffered
  }

  enqueue(data) {
    this._stream._stream.push(data)
  }

  error(err) {
    this._stream._stream.destroy(err)
  }

  terminate() {
    const stream = this._stream._stream

    stream.push(null)
    stream.destroy(new TypeError('Stream has been terminated'))
  }
}

// https://streams.spec.whatwg.org/#transformstream
class TransformStream {
  static get [transformKind]() {
    return 0 // Compatibility version
  }

  constructor(transformer = {}, writableStrategy = {}, readableStrategy = {}) {
    if (isStreamx(transformer)) {
      this._stream = transformer
    } else {
      const { start, transform, flush } = transformer

      this._stream = new Transform({ ...writableStrategy, ...readableStrategy })

      this._controller = new exports.TransformStreamDefaultController(this)

      if (start) {
        this._stream._open = this._open.bind(this, start.call(this, this._controller))
      }

      if (transform) {
        this._stream._write = this._transform.bind(this, transform)
      }

      if (flush) {
        this._stream._flush = this._flush.bind(this, flush.call(this, this._controller))
      }
    }

    this._writable = new WritableStream(this._stream)
    this._readable = new ReadableStream(this._stream)
  }

  get [transformKind]() {
    return TransformStream[transformKind]
  }

  get writable() {
    return this._writable
  }

  get readable() {
    return this._readable
  }

  async _open(starting, cb) {
    let err = null
    try {
      await starting
    } catch (e) {
      err = e
    }
    cb(err)
  }

  async _transform(transform, data, cb) {
    let err = null
    try {
      await transform(data, this._controller)
    } catch (e) {
      err = e
    }
    cb(err)
  }

  async _flush(flush, cb) {
    let err = null
    try {
      await flush
    } catch (e) {
      err = e
    }
    cb(err)
  }
}

exports.TransformStream = TransformStream

exports.isTransformStream = function isTransformStream(value) {
  if (value instanceof TransformStream) return true

  return (
    typeof value === 'object' &&
    value !== null &&
    value[transformKind] === TransformStream[transformKind]
  )
}

function noop() {}
