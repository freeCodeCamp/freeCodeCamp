import crypto from 'crypto'
import { urlAlphabet } from './url-alphabet/index.js'
const POOL_SIZE_MULTIPLIER = 128
let pool, poolOffset
let fillPool = bytes => {
  if (bytes < 0 || bytes > 1024) throw new RangeError('Wrong ID size')
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)
    crypto.randomFillSync(pool)
    poolOffset = 0
  } else if (poolOffset + bytes > pool.length) {
    crypto.randomFillSync(pool)
    poolOffset = 0
  }
  poolOffset += bytes
}
let random = bytes => {
  fillPool((bytes |= 0))
  return pool.subarray(poolOffset - bytes, poolOffset)
}
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let i = step
      while (i--) {
        id += alphabet[bytes[i] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  fillPool((size |= 0))
  let id = ''
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63]
  }
  return id
}
export { nanoid, customAlphabet, customRandom, urlAlphabet, random }
