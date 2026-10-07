let crypto = require('crypto')

let { urlAlphabet } = require('../url-alphabet/index.cjs')

// `crypto.randomFill()` is a little faster than `crypto.randomBytes()`,
// because it is possible to use in combination with `Buffer.allocUnsafe()`.
let random = bytes =>
  new Promise((resolve, reject) => {
    // `Buffer.allocUnsafe()` is faster because it doesn’t flush the memory.
    // Memory flushing is unnecessary since the buffer allocation itself resets
    // the memory with the new bytes.
    crypto.randomFill(Buffer.allocUnsafe(bytes), (err, buf) => {
      if (err) {
        reject(err)
      } else {
        resolve(buf)
      }
    })
  })

let customAlphabet = (alphabet, defaultSize = 21) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).
  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)

  let tick = (id, size = defaultSize) =>
    random(step).then(bytes => {
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let i = step
      while (i--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[i] & mask] || ''
        if (id.length >= size) return id
      }
      return tick(id, size)
    })

  return size => tick('', size)
}

let nanoid = (size = 21) =>
  random((size |= 0)).then(bytes => {
    let id = ''
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    while (size--) {
      // It is incorrect to use bytes exceeding the alphabet size.
      // The following mask reduces the random byte in the 0-255 value
      // range to the 0-63 value range. Therefore, adding hacks, such
      // as empty string fallback or magic numbers, is unneccessary because
      // the bitmask trims bytes down to the alphabet size.
      id += urlAlphabet[bytes[size] & 63]
    }
    return id
  })

module.exports = { nanoid, customAlphabet, random }
