import { randomFillSync } from 'crypto'
import { urlAlphabet } from './url-alphabet/index.js'
export { urlAlphabet }
const POOL_SIZE_MULTIPLIER = 128
let pool, poolOffset
let fillPool = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)
    randomFillSync(pool)
    poolOffset = 0
  } else if (poolOffset + bytes > pool.length) {
    randomFillSync(pool)
    poolOffset = 0
  }
  poolOffset += bytes
}
export let random = bytes => {
  fillPool((bytes -= 0))
  return pool.subarray(poolOffset - bytes, poolOffset)
}
export let customRandom = (alphabet, defaultSize, getRandom) => {
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
export let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
export let nanoid = (size = 21) => {
  fillPool((size -= 0))
  let id = ''
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63]
  }
  return id
}
