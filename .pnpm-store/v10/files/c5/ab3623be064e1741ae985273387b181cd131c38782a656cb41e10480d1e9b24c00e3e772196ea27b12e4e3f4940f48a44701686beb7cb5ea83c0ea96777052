function byteLength(string) {
  return string.length >>> 1
}

function toString(buffer) {
  const len = buffer.byteLength

  buffer = new DataView(buffer.buffer, buffer.byteOffset, len)

  let result = ''
  let i = 0

  for (let n = len - (len % 4); i < n; i += 4) {
    result += buffer.getUint32(i).toString(16).padStart(8, '0')
  }

  for (; i < len; i++) {
    result += buffer.getUint8(i).toString(16).padStart(2, '0')
  }

  return result
}

function write(buffer, string) {
  const len = buffer.byteLength

  for (let i = 0; i < len; i++) {
    const a = hexValue(string.charCodeAt(i * 2))
    const b = hexValue(string.charCodeAt(i * 2 + 1))

    if (a === undefined || b === undefined) {
      return buffer.subarray(0, i)
    }

    buffer[i] = (a << 4) | b
  }

  return len
}

module.exports = {
  byteLength,
  toString,
  write
}

function hexValue(char) {
  if (char >= 0x30 && char <= 0x39) return char - 0x30
  if (char >= 0x41 && char <= 0x46) return char - 0x41 + 10
  if (char >= 0x61 && char <= 0x66) return char - 0x61 + 10
}
