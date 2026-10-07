const { Writable, Readable, getStreamError } = require('streamx')
const FIFO = require('fast-fifo')
const b4a = require('b4a')
const headers = require('./headers')

const EMPTY = b4a.alloc(0)

class BufferList {
  constructor () {
    this.buffered = 0
    this.shifted = 0
    this.queue = new FIFO()

    this._offset = 0
  }

  push (buffer) {
    this.buffered += buffer.byteLength
    this.queue.push(buffer)
  }

  shiftFirst (size) {
    return this._buffered === 0 ? null : this._next(size)
  }

  shift (size) {
    if (size > this.buffered) return null
    if (size === 0) return EMPTY

    let chunk = this._next(size)

    if (size === chunk.byteLength) return chunk // likely case

    const chunks = [chunk]

    while ((size -= chunk.byteLength) > 0) {
      chunk = this._next(size)
      chunks.push(chunk)
    }

    return b4a.concat(chunks)
  }

  _next (size) {
    const buf = this.queue.peek()
    const rem = buf.byteLength - this._offset

    if (size >= rem) {
      const sub = this._offset ? buf.subarray(this._offset, buf.byteLength) : buf
      this.queue.shift()
      this._offset = 0
      this.buffered -= rem
      this.shifted += rem
      return sub
    }

    this.buffered -= size
    this.shifted += size

    return buf.subarray(this._offset, (this._offset += size))
  }
}

class Source extends Readable {
  constructor (self, header, offset) {
    super()

    this.header = header
    this.offset = offset

    this._parent = self
  }

  _read (cb) {
    if (this.header.size === 0) {
      this.push(null)
    }
    if (this._parent._stream === this) {
      this._parent._update()
    }
    cb(null)
  }

  _predestroy () {
    this._parent.destroy(getStreamError(this))
  }

  _detach () {
    if (this._parent._stream === this) {
      this._parent._stream = null
      this._parent._missing = overflow(this.header.size)
      this._parent._update()
    }
  }

  _destroy (cb) {
    this._detach()
    cb(null)
  }
}

class Extract extends Writable {
  constructor (opts) {
    super(opts)

    if (!opts) opts = {}

    this._buffer = new BufferList()
    this._offset = 0
    this._header = null
    this._stream = null
    this._missing = 0
    this._longHeader = false
    this._callback = noop
    this._locked = false
    this._finished = false
    this._pax = null
    this._paxGlobal = null
    this._gnuLongPath = null
    this._gnuLongLinkPath = null
    this._filenameEncoding = opts.filenameEncoding || 'utf-8'
    this._allowUnknownFormat = !!opts.allowUnknownFormat
    this._unlockBound = this._unlock.bind(this)
  }

  _unlock (err) {
    this._locked = false

    if (err) {
      this.destroy(err)
      this._continueWrite(err)
      return
    }

    this._update()
  }

  _consumeHeader () {
    if (this._locked) return false

    this._offset = this._buffer.shifted

    try {
      this._header = headers.decode(this._buffer.shift(512), this._filenameEncoding, this._allowUnknownFormat)
    } catch (err) {
      this._continueWrite(err)
      return false
    }

    if (!this._header) return true

    switch (this._header.type) {
      case 'gnu-long-path':
      case 'gnu-long-link-path':
      case 'pax-global-header':
      case 'pax-header':
        this._longHeader = true
        this._missing = this._header.size
        return true
    }

    this._locked = true
    this._applyLongHeaders()

    if (this._header.size === 0 || this._header.type === 'directory') {
      this.emit('entry', this._header, this._createStream(), this._unlockBound)
      return true
    }

    this._stream = this._createStream()
    this._missing = this._header.size

    this.emit('entry', this._header, this._stream, this._unlockBound)
    return true
  }

  _applyLongHeaders () {
    if (this._gnuLongPath) {
      this._header.name = this._gnuLongPath
      this._gnuLongPath = null
    }

    if (this._gnuLongLinkPath) {
      this._header.linkname = this._gnuLongLinkPath
      this._gnuLongLinkPath = null
    }

    if (this._pax) {
      if (this._pax.path) this._header.name = this._pax.path
      if (this._pax.linkpath) this._header.linkname = this._pax.linkpath
      if (this._pax.size) this._header.size = parseInt(this._pax.size, 10)
      this._header.pax = this._pax
      this._pax = null
    }
  }

  _decodeLongHeader (buf) {
    switch (this._header.type) {
      case 'gnu-long-path':
        this._gnuLongPath = headers.decodeLongPath(buf, this._filenameEncoding)
        break
      case 'gnu-long-link-path':
        this._gnuLongLinkPath = headers.decodeLongPath(buf, this._filenameEncoding)
        break
      case 'pax-global-header':
        this._paxGlobal = headers.decodePax(buf)
        break
      case 'pax-header':
        this._pax = this._paxGlobal === null
          ? headers.decodePax(buf)
          : Object.assign({}, this._paxGlobal, headers.decodePax(buf))
        break
    }
  }

  _consumeLongHeader () {
    this._longHeader = false
    this._missing = overflow(this._header.size)

    const buf = this._buffer.shift(this._header.size)

    try {
      this._decodeLongHeader(buf)
    } catch (err) {
      this._continueWrite(err)
      return false
    }

    return true
  }

  _consumeStream () {
    const buf = this._buffer.shiftFirst(this._missing)
    if (buf === null) return false

    this._missing -= buf.byteLength
    const drained = this._stream.push(buf)

    if (this._missing === 0) {
      this._stream.push(null)
      if (drained) this._stream._detach()
      return drained && this._locked === false
    }

    return drained
  }

  _createStream () {
    return new Source(this, this._header, this._offset)
  }

  _update () {
    while (this._buffer.buffered > 0 && !this.destroying) {
      if (this._missing > 0) {
        if (this._stream !== null) {
          if (this._consumeStream() === false) return
          continue
        }

        if (this._longHeader === true) {
          if (this._missing > this._buffer.buffered) break
          if (this._consumeLongHeader() === false) return false
          continue
        }

        const ignore = this._buffer.shiftFirst(this._missing)
        if (ignore !== null) this._missing -= ignore.byteLength
        continue
      }

      if (this._buffer.buffered < 512) break
      if (this._stream !== null || this._consumeHeader() === false) return
    }

    this._continueWrite(null)
  }

  _continueWrite (err) {
    const cb = this._callback
    this._callback = noop
    cb(err)
  }

  _write (data, cb) {
    this._callback = cb
    this._buffer.push(data)
    this._update()
  }

  _final (cb) {
    this._finished = this._missing === 0 && this._buffer.buffered === 0
    cb(this._finished ? null : new Error('Unexpected end of data'))
  }

  _predestroy () {
    this._continueWrite(null)
  }

  _destroy (cb) {
    if (this._stream) this._stream.destroy(getStreamError(this))
    cb(null)
  }

  [Symbol.asyncIterator] () {
    let error = null

    let promiseResolve = null
    let promiseReject = null

    let entryStream = null
    let entryCallback = null

    const extract = this

    this.on('entry', onentry)
    this.on('error', (err) => { error = err })
    this.on('close', onclose)

    return {
      [Symbol.asyncIterator] () {
        return this
      },
      next () {
        return new Promise(onnext)
      },
      return () {
        return destroy(null)
      },
      throw (err) {
        return destroy(err)
      }
    }

    function consumeCallback (err) {
      if (!entryCallback) return
      const cb = entryCallback
      entryCallback = null
      cb(err)
    }

    function onnext (resolve, reject) {
      if (error) {
        return reject(error)
      }

      if (entryStream) {
        resolve({ value: entryStream, done: false })
        entryStream = null
        return
      }

      promiseResolve = resolve
      promiseReject = reject

      consumeCallback(null)

      if (extract._finished && promiseResolve) {
        promiseResolve({ value: undefined, done: true })
        promiseResolve = promiseReject = null
      }
    }

    function onentry (header, stream, callback) {
      entryCallback = callback
      stream.on('error', noop) // no way around this due to tick sillyness

      if (promiseResolve) {
        promiseResolve({ value: stream, done: false })
        promiseResolve = promiseReject = null
      } else {
        entryStream = stream
      }
    }

    function onclose () {
      consumeCallback(error)
      if (!promiseResolve) return
      if (error) promiseReject(error)
      else promiseResolve({ value: undefined, done: true })
      promiseResolve = promiseReject = null
    }

    function destroy (err) {
      extract.destroy(err)
      consumeCallback(err)
      return new Promise((resolve, reject) => {
        if (extract.destroyed) return resolve({ value: undefined, done: true })
        extract.once('close', function () {
          if (err) reject(err)
          else resolve({ value: undefined, done: true })
        })
      })
    }
  }
}

module.exports = function extract (opts) {
  return new Extract(opts)
}

function noop () {}

function overflow (size) {
  size &= 511
  return size && 512 - size
}
