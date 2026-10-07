'use strict'

const { Buffer } = require('buffer')
const symbol = Symbol.for('BufferList')

function BufferList (buf) {
  if (!(this instanceof BufferList)) {
    return new BufferList(buf)
  }

  BufferList._init.call(this, buf)
}

BufferList._init = function _init (buf) {
  Object.defineProperty(this, symbol, { value: true })

  this._bufs = []
  this.length = 0

  if (buf) {
    this.append(buf)
  }
}

BufferList.prototype._new = function _new (buf) {
  return new BufferList(buf)
}

BufferList.prototype._offset = function _offset (offset) {
  if (offset === 0) {
    return [0, 0]
  }

  let tot = 0

  for (let i = 0; i < this._bufs.length; i++) {
    const _t = tot + this._bufs[i].length
    if (offset < _t || i === this._bufs.length - 1) {
      return [i, offset - tot]
    }
    tot = _t
  }
}

BufferList.prototype._reverseOffset = function (blOffset) {
  const bufferId = blOffset[0]
  let offset = blOffset[1]

  for (let i = 0; i < bufferId; i++) {
    offset += this._bufs[i].length
  }

  return offset
}

BufferList.prototype.get = function get (index) {
  if (index > this.length || index < 0) {
    return undefined
  }

  const offset = this._offset(index)

  return this._bufs[offset[0]][offset[1]]
}

BufferList.prototype.slice = function slice (start, end) {
  if (typeof start === 'number' && start < 0) {
    start += this.length
  }

  if (typeof end === 'number' && end < 0) {
    end += this.length
  }

  return this.copy(null, 0, start, end)
}

BufferList.prototype.copy = function copy (dst, dstStart, srcStart, srcEnd) {
  if (typeof srcStart !== 'number' || srcStart < 0) {
    srcStart = 0
  }

  if (typeof srcEnd !== 'number' || srcEnd > this.length) {
    srcEnd = this.length
  }

  if (srcStart >= this.length) {
    return dst || Buffer.alloc(0)
  }

  if (srcEnd <= 0) {
    return dst || Buffer.alloc(0)
  }

  const copy = !!dst
  const off = this._offset(srcStart)
  const len = srcEnd - srcStart
  let bytes = len
  let bufoff = (copy && dstStart) || 0
  let start = off[1]

  // copy/slice everything
  if (srcStart === 0 && srcEnd === this.length) {
    if (!copy) {
      // slice, but full concat if multiple buffers
      return this._bufs.length === 1
        ? this._bufs[0]
        : Buffer.concat(this._bufs, this.length)
    }

    // copy, need to copy individual buffers
    for (let i = 0; i < this._bufs.length; i++) {
      this._bufs[i].copy(dst, bufoff)
      bufoff += this._bufs[i].length
    }

    return dst
  }

  // easy, cheap case where it's a subset of one of the buffers
  if (bytes <= this._bufs[off[0]].length - start) {
    return copy
      ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
      : this._bufs[off[0]].slice(start, start + bytes)
  }

  if (!copy) {
    // a slice, we need something to copy in to
    dst = Buffer.allocUnsafe(len)
  }

  for (let i = off[0]; i < this._bufs.length; i++) {
    const l = this._bufs[i].length - start

    if (bytes > l) {
      this._bufs[i].copy(dst, bufoff, start)
      bufoff += l
    } else {
      this._bufs[i].copy(dst, bufoff, start, start + bytes)
      bufoff += l
      break
    }

    bytes -= l

    if (start) {
      start = 0
    }
  }

  // safeguard so that we don't return uninitialized memory
  if (dst.length > bufoff) return dst.slice(0, bufoff)

  return dst
}

BufferList.prototype.shallowSlice = function shallowSlice (start, end) {
  start = start || 0
  end = typeof end !== 'number' ? this.length : end

  if (start < 0) {
    start += this.length
  }

  if (end < 0) {
    end += this.length
  }

  if (start === end) {
    return this._new()
  }

  const startOffset = this._offset(start)
  const endOffset = this._offset(end)
  const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1)

  if (endOffset[1] === 0) {
    buffers.pop()
  } else {
    buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1])
  }

  if (startOffset[1] !== 0) {
    buffers[0] = buffers[0].slice(startOffset[1])
  }

  return this._new(buffers)
}

BufferList.prototype.toString = function toString (encoding, start, end) {
  return this.slice(start, end).toString(encoding)
}

BufferList.prototype.consume = function consume (bytes) {
  // first, normalize the argument, in accordance with how Buffer does it
  bytes = Math.trunc(bytes)
  // do nothing if not a positive number
  if (Number.isNaN(bytes) || bytes <= 0) return this

  while (this._bufs.length) {
    if (bytes >= this._bufs[0].length) {
      bytes -= this._bufs[0].length
      this.length -= this._bufs[0].length
      this._bufs.shift()
    } else {
      this._bufs[0] = this._bufs[0].slice(bytes)
      this.length -= bytes
      break
    }
  }

  return this
}

BufferList.prototype.duplicate = function duplicate () {
  const copy = this._new()

  for (let i = 0; i < this._bufs.length; i++) {
    copy.append(this._bufs[i])
  }

  return copy
}

BufferList.prototype.append = function append (buf) {
  if (buf == null) {
    return this
  }

  if (buf.buffer) {
    // append a view of the underlying ArrayBuffer
    this._appendBuffer(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength))
  } else if (Array.isArray(buf)) {
    for (let i = 0; i < buf.length; i++) {
      this.append(buf[i])
    }
  } else if (this._isBufferList(buf)) {
    // unwrap argument into individual BufferLists
    for (let i = 0; i < buf._bufs.length; i++) {
      this.append(buf._bufs[i])
    }
  } else {
    // coerce number arguments to strings, since Buffer(number) does
    // uninitialized memory allocation
    if (typeof buf === 'number') {
      buf = buf.toString()
    }

    this._appendBuffer(Buffer.from(buf))
  }

  return this
}

BufferList.prototype._appendBuffer = function appendBuffer (buf) {
  this._bufs.push(buf)
  this.length += buf.length
}

BufferList.prototype.indexOf = function (search, offset, encoding) {
  if (encoding === undefined && typeof offset === 'string') {
    encoding = offset
    offset = undefined
  }

  if (typeof search === 'function' || Array.isArray(search)) {
    throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.')
  } else if (typeof search === 'number') {
    search = Buffer.from([search])
  } else if (typeof search === 'string') {
    search = Buffer.from(search, encoding)
  } else if (this._isBufferList(search)) {
    search = search.slice()
  } else if (Array.isArray(search.buffer)) {
    search = Buffer.from(search.buffer, search.byteOffset, search.byteLength)
  } else if (!Buffer.isBuffer(search)) {
    search = Buffer.from(search)
  }

  offset = Number(offset || 0)

  if (isNaN(offset)) {
    offset = 0
  }

  if (offset < 0) {
    offset = this.length + offset
  }

  if (offset < 0) {
    offset = 0
  }

  if (search.length === 0) {
    return offset > this.length ? this.length : offset
  }

  const blOffset = this._offset(offset)
  let blIndex = blOffset[0] // index of which internal buffer we're working on
  let buffOffset = blOffset[1] // offset of the internal buffer we're working on

  // scan over each buffer
  for (; blIndex < this._bufs.length; blIndex++) {
    const buff = this._bufs[blIndex]

    while (buffOffset < buff.length) {
      const availableWindow = buff.length - buffOffset

      if (availableWindow >= search.length) {
        const nativeSearchResult = buff.indexOf(search, buffOffset)

        if (nativeSearchResult !== -1) {
          return this._reverseOffset([blIndex, nativeSearchResult])
        }

        buffOffset = buff.length - search.length + 1 // end of native search window
      } else {
        const revOffset = this._reverseOffset([blIndex, buffOffset])

        if (this._match(revOffset, search)) {
          return revOffset
        }

        buffOffset++
      }
    }

    buffOffset = 0
  }

  return -1
}

BufferList.prototype._match = function (offset, search) {
  if (this.length - offset < search.length) {
    return false
  }

  for (let searchOffset = 0; searchOffset < search.length; searchOffset++) {
    if (this.get(offset + searchOffset) !== search[searchOffset]) {
      return false
    }
  }
  return true
}

;(function () {
  const methods = {
    readDoubleBE: 8,
    readDoubleLE: 8,
    readFloatBE: 4,
    readFloatLE: 4,
    readInt32BE: 4,
    readInt32LE: 4,
    readUInt32BE: 4,
    readUInt32LE: 4,
    readInt16BE: 2,
    readInt16LE: 2,
    readUInt16BE: 2,
    readUInt16LE: 2,
    readInt8: 1,
    readUInt8: 1,
    readIntBE: null,
    readIntLE: null,
    readUIntBE: null,
    readUIntLE: null
  }

  for (const m in methods) {
    (function (m) {
      if (methods[m] === null) {
        BufferList.prototype[m] = function (offset, byteLength) {
          return this.slice(offset, offset + byteLength)[m](0, byteLength)
        }
      } else {
        BufferList.prototype[m] = function (offset = 0) {
          return this.slice(offset, offset + methods[m])[m](0)
        }
      }
    }(m))
  }
}())

// Used internally by the class and also as an indicator of this object being
// a `BufferList`. It's not possible to use `instanceof BufferList` in a browser
// environment because there could be multiple different copies of the
// BufferList class and some `BufferList`s might be `BufferList`s.
BufferList.prototype._isBufferList = function _isBufferList (b) {
  return b instanceof BufferList || BufferList.isBufferList(b)
}

BufferList.isBufferList = function isBufferList (b) {
  return b != null && b[symbol]
}

module.exports = BufferList
