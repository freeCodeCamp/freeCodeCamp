function byteLength(string) {
  return string.length
}

function toString(buffer) {
  const len = buffer.byteLength

  let result = ''

  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buffer[i] & 0x7f)
  }

  return result
}

function write(buffer, string) {
  const len = buffer.byteLength

  for (let i = 0; i < len; i++) {
    buffer[i] = string.charCodeAt(i)
  }

  return len
}

module.exports = {
  byteLength,
  toString,
  write
}
