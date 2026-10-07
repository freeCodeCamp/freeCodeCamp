function byteLength(string) {
  return string.length * 2
}

function toString(buffer) {
  const len = buffer.byteLength

  let result = ''

  for (let i = 0; i < len - 1; i += 2) {
    result += String.fromCharCode(buffer[i] + buffer[i + 1] * 256)
  }

  return result
}

function write(buffer, string) {
  const len = buffer.byteLength

  let units = len

  for (let i = 0; i < string.length; ++i) {
    if ((units -= 2) < 0) break

    const c = string.charCodeAt(i)
    const hi = c >> 8
    const lo = c % 256

    buffer[i * 2] = lo
    buffer[i * 2 + 1] = hi
  }

  return len
}

module.exports = {
  byteLength,
  toString,
  write
}
