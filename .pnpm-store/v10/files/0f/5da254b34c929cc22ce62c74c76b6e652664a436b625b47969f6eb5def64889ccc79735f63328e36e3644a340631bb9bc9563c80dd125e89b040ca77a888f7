import { it, expect } from 'vitest'
import { decodeBuffer, encodeBuffer } from './bufferUtils'

it('encodes utf-8 string', () => {
  const encoded = encodeBuffer('😁')
  expect(new Uint8Array(encoded)).toEqual(new Uint8Array([240, 159, 152, 129]))
})

it('decodes utf-8 string', () => {
  const array = new Uint8Array([240, 159, 152, 129])
  const decoded = decodeBuffer(array.buffer)
  expect(decoded).toEqual('😁')
})

it('decodes string with custom encoding', () => {
  const array = new Uint8Array([
    207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33,
  ])
  const decoded = decodeBuffer(array.buffer, 'windows-1251')
  expect(decoded).toEqual('Привет, мир!')
})
