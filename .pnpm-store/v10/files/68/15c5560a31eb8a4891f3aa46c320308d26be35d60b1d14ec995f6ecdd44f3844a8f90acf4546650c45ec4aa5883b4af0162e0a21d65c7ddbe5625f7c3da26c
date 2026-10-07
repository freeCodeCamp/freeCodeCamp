import { it, expect } from 'vitest'
import { concatArrayBuffer } from './concatArrayBuffer'

const encoder = new TextEncoder()

it('concatenates two Uint8Array buffers', () => {
  const result = concatArrayBuffer(
    encoder.encode('hello'),
    encoder.encode('world')
  )
  expect(result).toEqual(encoder.encode('helloworld'))
})
