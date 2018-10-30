'use strict'

const assert = require('assert')
const Buffer = require('buffer').Buffer
const binding = process.binding('zlib')

const constants = exports.constants = require('./constants.js')
const MiniPass = require('minipass')

class ZlibError extends Error {
  constructor (msg, errno) {
    super('zlib: ' + msg)
    this.errno = errno
    this.code = codes.get(errno)
  }

  get name () {
    return 'ZlibError'
  }
}

// translation table for return codes.
const codes = new Map([
  [constants.Z_OK, 'Z_OK'],
  [constants.Z_STREAM_END, 'Z_STREAM_END'],
  [constants.Z_NEED_DICT, 'Z_NEED_DICT'],
  [constants.Z_ERRNO, 'Z_ERRNO'],
  [constants.Z_STREAM_ERROR, 'Z_STREAM_ERROR'],
  [constants.Z_DATA_ERROR, 'Z_DATA_ERROR'],
  [constants.Z_MEM_ERROR, 'Z_MEM_ERROR'],
  [constants.Z_BUF_ERROR, 'Z_BUF_ERROR'],
  [constants.Z_VERSION_ERROR, 'Z_VERSION_ERROR']
])

const validFlushFlags = new Set([
  constants.Z_NO_FLUSH,
  constants.Z_PARTIAL_FLUSH,
  constants.Z_SYNC_FLUSH,
  constants.Z_FULL_FLUSH,
  constants.Z_FINISH,
  constants.Z_BLOCK
])

const strategies = new Set([
  constants.Z_FILTERED,
  constants.Z_HUFFMAN_ONLY,
  constants.Z_RLE,
  constants.Z_FIXED,
  constants.Z_DEFAULT_STRATEGY
])

// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.
const _opts = Symbol('opts')
const _chunkSize = Symbol('chunkSize')
const _flushFlag = Symbol('flushFlag')
const _finishFlush = Symbol('finishFlush')
const _handle = Symbol('handle')
const _hadError = Symbol('hadError')
const _buffer = Symbol('buffer')
const _offset = Symbol('offset')
const _level = Symbol('level')
const _strategy = Symbol('strategy')
const _ended = Symbol('ended')
const _writeState = Symbol('writeState')

class Zlib extends MiniPass {
  constructor (opts, mode) {
    super(opts)
    this[_ended] = false
    this[_opts] = opts = opts || {}
    this[_chunkSize] = opts.chunkSize || constants.Z_DEFAULT_CHUNK
    if (opts.flush && !validFlushFlags.has(opts.flush)) {
      throw new TypeError('Invalid flush flag: ' + opts.flush)
    }
    if (opts.finishFlush && !validFlushFlags.has(opts.finishFlush)) {
      throw new TypeError('Invalid flush flag: ' + opts.finishFlush)
    }

    this[_flushFlag] = opts.flush || constants.Z_NO_FLUSH
    this[_finishFlush] = typeof opts.finishFlush !== 'undefined' ?
      opts.finishFlush : constants.Z_FINISH

    if (opts.chunkSize) {
      if (opts.chunkSize < constants.Z_MIN_CHUNK) {
        throw new RangeError('Invalid chunk size: ' + opts.chunkSize)
      }
    }

    if (opts.windowBits) {
      if (opts.windowBits < constants.Z_MIN_WINDOWBITS ||
          opts.windowBits > constants.Z_MAX_WINDOWBITS) {
        throw new RangeError('Invalid windowBits: ' + opts.windowBits)
      }
    }

    if (opts.level) {
      if (opts.level < constants.Z_MIN_LEVEL ||
          opts.level > constants.Z_MAX_LEVEL) {
        throw new RangeError('Invalid compression level: ' + opts.level)
      }
    }

    if (opts.memLevel) {
      if (opts.memLevel < constants.Z_MIN_MEMLEVEL ||
          opts.memLevel > constants.Z_MAX_MEMLEVEL) {
        throw new RangeError('Invalid memLevel: ' + opts.memLevel)
      }
    }

    if (opts.strategy && !(strategies.has(opts.strategy)))
      throw new TypeError('Invalid strategy: ' + opts.strategy)

    if (opts.dictionary) {
      if (!(opts.dictionary instanceof Buffer)) {
        throw new TypeError('Invalid dictionary: it should be a Buffer instance')
      }
    }

    this[_handle] = new binding.Zlib(mode)

    this[_hadError] = false
    this[_handle].onerror = (message, errno) => {
      // there is no way to cleanly recover.
      // continuing only obscures problems.
      this.close()
      this[_hadError] = true

      const error = new ZlibError(message, errno)
      this.emit('error', error)
    }

    const level = typeof opts.level === 'number' ? opts.level
                : constants.Z_DEFAULT_COMPRESSION

    var strategy = typeof opts.strategy === 'number' ? opts.strategy
                 : constants.Z_DEFAULT_STRATEGY

    this[_writeState] = new Uint32Array(2);
    const window = opts.windowBits || constants.Z_DEFAULT_WINDOWBITS
    const memLevel = opts.memLevel || constants.Z_DEFAULT_MEMLEVEL

    // API changed in node v9
    /* istanbul ignore next */
    if (/^v[0-8]\./.test(process.version)) {
      this[_handle].init(window,
                         level,
                         memLevel,
                         strategy,
                         opts.dictionary)
    } else {
      this[_handle].init(window,
                         level,
                         memLevel,
                         strategy,
                         this[_writeState],
                         () => {},
                         opts.dictionary)
    }

    this[_buffer] = Buffer.allocUnsafe(this[_chunkSize])
    this[_offset] = 0
    this[_level] = level
    this[_strategy] = strategy

    this.once('end', this.close)
  }

  close () {
    if (this[_handle]) {
      this[_handle].close()
      this[_handle] = null
      this.emit('close')
    }
  }

  params (level, strategy) {
    if (!this[_handle])
      throw new Error('cannot switch params when binding is closed')

    // no way to test this without also not supporting params at all
    /* istanbul ignore if */
    if (!this[_handle].params)
      throw new Error('not supported in this implementation')

    if (level < constants.Z_MIN_LEVEL ||
        level > constants.Z_MAX_LEVEL) {
      throw new RangeError('Invalid compression level: ' + level)
    }

    if (!(strategies.has(strategy)))
      throw new TypeError('Invalid strategy: ' + strategy)

    if (this[_level] !== level || this[_strategy] !== strategy) {
      this.flush(constants.Z_SYNC_FLUSH)
      assert(this[_handle], 'zlib binding closed')
      this[_handle].params(level, strategy)
      /* istanbul ignore else */
      if (!this[_hadError]) {
        this[_level] = level
        this[_strategy] = strategy
      }
    }
  }

  reset () {
    assert(this[_handle], 'zlib binding closed')
    return this[_handle].reset()
  }

  flush (kind) {
    if (kind === undefined)
      kind = constants.Z_FULL_FLUSH

    if (this.ended)
      return

    const flushFlag = this[_flushFlag]
    this[_flushFlag] = kind
    this.write(Buffer.alloc(0))
    this[_flushFlag] = flushFlag
  }

  end (chunk, encoding, cb) {
    if (chunk)
      this.write(chunk, encoding)
    this.flush(this[_finishFlush])
    this[_ended] = true
    return super.end(null, null, cb)
  }

  get ended () {
    return this[_ended]
  }

  write (chunk, encoding, cb) {
    // process the chunk using the sync process
    // then super.write() all the outputted chunks
    if (typeof encoding === 'function')
      cb = encoding, encoding = 'utf8'

    if (typeof chunk === 'string')
      chunk = new Buffer(chunk, encoding)

    let availInBefore = chunk && chunk.length
    let availOutBefore = this[_chunkSize] - this[_offset]
    let inOff = 0 // the offset of the input buffer
    const flushFlag = this[_flushFlag]
    let writeReturn = true

    assert(this[_handle], 'zlib binding closed')
    do {
      let res = this[_handle].writeSync(
        flushFlag,
        chunk, // in
        inOff, // in_off
        availInBefore, // in_len
        this[_buffer], // out
        this[_offset], //out_off
        availOutBefore // out_len
      )

      if (this[_hadError])
        break

      // API changed in v9
      /* istanbul ignore next */
      let availInAfter = res ? res[0] : this[_writeState][1]
      /* istanbul ignore next */
      let availOutAfter = res ? res[1] : this[_writeState][0]

      const have = availOutBefore - availOutAfter
      assert(have >= 0, 'have should not go down')

      if (have > 0) {
        const out = this[_buffer].slice(
          this[_offset], this[_offset] + have
        )

        this[_offset] += have
        // serve some output to the consumer.
        writeReturn = super.write(out) && writeReturn
      }

      // exhausted the output buffer, or used all the input create a new one.
      if (availOutAfter === 0 || this[_offset] >= this[_chunkSize]) {
        availOutBefore = this[_chunkSize]
        this[_offset] = 0
        this[_buffer] = Buffer.allocUnsafe(this[_chunkSize])
      }

      if (availOutAfter === 0) {
        // Not actually done.  Need to reprocess.
        // Also, update the availInBefore to the availInAfter value,
        // so that if we have to hit it a third (fourth, etc.) time,
        // it'll have the correct byte counts.
        inOff += (availInBefore - availInAfter)
        availInBefore = availInAfter
        continue
      }
      break
    } while (!this[_hadError])

    if (cb)
      cb()
    return writeReturn
  }
}

// minimal 2-byte header
class Deflate extends Zlib {
  constructor (opts) {
    super(opts, constants.DEFLATE)
  }
}

class Inflate extends Zlib {
  constructor (opts) {
    super(opts, constants.INFLATE)
  }
}

// gzip - bigger header, same deflate compression
class Gzip extends Zlib {
  constructor (opts) {
    super(opts, constants.GZIP)
  }
}

class Gunzip extends Zlib {
  constructor (opts) {
    super(opts, constants.GUNZIP)
  }
}

// raw - no header
class DeflateRaw extends Zlib {
  constructor (opts) {
    super(opts, constants.DEFLATERAW)
  }
}

class InflateRaw extends Zlib {
  constructor (opts) {
    super(opts, constants.INFLATERAW)
  }
}

// auto-detect header.
class Unzip extends Zlib {
  constructor (opts) {
    super(opts, constants.UNZIP)
  }
}

exports.Deflate = Deflate
exports.Inflate = Inflate
exports.Gzip = Gzip
exports.Gunzip = Gunzip
exports.DeflateRaw = DeflateRaw
exports.InflateRaw = InflateRaw
exports.Unzip = Unzip
