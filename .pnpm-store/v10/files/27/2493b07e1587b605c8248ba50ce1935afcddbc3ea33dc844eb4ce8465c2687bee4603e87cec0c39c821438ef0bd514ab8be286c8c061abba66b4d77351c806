const b4a = require('b4a')

/**
 * https://encoding.spec.whatwg.org/#utf-8-decoder
 */
module.exports = class UTF8Decoder {
  constructor() {
    this._reset()
  }

  get remaining() {
    return this.bytesSeen
  }

  decode(data) {
    if (data.byteLength === 0) return ''

    if (this.bytesNeeded === 0 && trailingIncomplete(data, 0) === 0) {
      this.bytesSeen = trailingBytesSeen(data)
      return b4a.toString(data, 'utf8')
    }

    let result = ''
    let start = 0

    if (this.bytesNeeded > 0) {
      while (start < data.byteLength) {
        const byte = data[start]

        if (byte < this.lowerBoundary || byte > this.upperBoundary) {
          result += '\ufffd'
          this._reset()
          break
        }

        this.lowerBoundary = 0x80
        this.upperBoundary = 0xbf
        this.codePoint = (this.codePoint << 6) | (byte & 0x3f)
        this.bytesSeen++
        start++

        if (this.bytesSeen === this.bytesNeeded) {
          result += String.fromCodePoint(this.codePoint)
          this._reset()
          break
        }
      }

      if (this.bytesNeeded > 0) return result
    }

    const trailing = trailingIncomplete(data, start)
    const end = data.byteLength - trailing

    if (end > start) result += b4a.toString(data, 'utf8', start, end)

    for (let i = end; i < data.byteLength; i++) {
      const byte = data[i]

      if (this.bytesNeeded === 0) {
        if (byte <= 0x7f) {
          this.bytesSeen = 0
          result += String.fromCharCode(byte)
        } else if (byte >= 0xc2 && byte <= 0xdf) {
          this.bytesNeeded = 2
          this.bytesSeen = 1
          this.codePoint = byte & 0x1f
        } else if (byte >= 0xe0 && byte <= 0xef) {
          if (byte === 0xe0) this.lowerBoundary = 0xa0
          else if (byte === 0xed) this.upperBoundary = 0x9f
          this.bytesNeeded = 3
          this.bytesSeen = 1
          this.codePoint = byte & 0xf
        } else if (byte >= 0xf0 && byte <= 0xf4) {
          if (byte === 0xf0) this.lowerBoundary = 0x90
          else if (byte === 0xf4) this.upperBoundary = 0x8f
          this.bytesNeeded = 4
          this.bytesSeen = 1
          this.codePoint = byte & 0x7
        } else {
          this.bytesSeen = 1
          result += '\ufffd'
        }

        continue
      }

      if (byte < this.lowerBoundary || byte > this.upperBoundary) {
        result += '\ufffd'
        i--
        this._reset()

        continue
      }

      this.lowerBoundary = 0x80
      this.upperBoundary = 0xbf

      this.codePoint = (this.codePoint << 6) | (byte & 0x3f)
      this.bytesSeen++

      if (this.bytesSeen === this.bytesNeeded) {
        result += String.fromCodePoint(this.codePoint)
        this._reset()
      }
    }

    return result
  }

  flush() {
    const result = this.bytesNeeded > 0 ? '\ufffd' : ''
    this._reset()
    return result
  }

  _reset() {
    this.codePoint = 0
    this.bytesNeeded = 0
    this.bytesSeen = 0
    this.lowerBoundary = 0x80
    this.upperBoundary = 0xbf
  }
}

function trailingIncomplete(data, start) {
  const len = data.byteLength
  if (len <= start) return 0

  const limit = Math.max(start, len - 4)

  let i = len - 1
  while (i > limit && (data[i] & 0xc0) === 0x80) i--

  if (i < start) return 0

  const byte = data[i]

  let needed
  if (byte <= 0x7f) return 0
  if (byte >= 0xc2 && byte <= 0xdf) needed = 2
  else if (byte >= 0xe0 && byte <= 0xef) needed = 3
  else if (byte >= 0xf0 && byte <= 0xf4) needed = 4
  else return 0

  const available = len - i
  return available < needed ? available : 0
}

function trailingBytesSeen(data) {
  const len = data.byteLength
  if (len === 0) return 0

  const last = data[len - 1]

  if (last <= 0x7f) return 0
  if ((last & 0xc0) !== 0x80) return 1

  const limit = Math.max(0, len - 4)

  let i = len - 2
  while (i >= limit && (data[i] & 0xc0) === 0x80) i--

  if (i < 0) return 1

  const first = data[i]

  let needed
  if (first >= 0xc2 && first <= 0xdf) needed = 2
  else if (first >= 0xe0 && first <= 0xef) needed = 3
  else if (first >= 0xf0 && first <= 0xf4) needed = 4
  else return 1

  if (len - i !== needed) return 1

  if (needed >= 3) {
    const second = data[i + 1]
    if (first === 0xe0 && second < 0xa0) return 1
    if (first === 0xed && second > 0x9f) return 1
    if (first === 0xf0 && second < 0x90) return 1
    if (first === 0xf4 && second > 0x8f) return 1
  }

  return 0
}
