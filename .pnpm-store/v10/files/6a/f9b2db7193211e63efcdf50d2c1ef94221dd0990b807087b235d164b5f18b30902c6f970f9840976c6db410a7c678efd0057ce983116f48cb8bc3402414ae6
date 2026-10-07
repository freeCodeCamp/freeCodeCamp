import { it, expect } from 'vitest'
import { parseJson } from './parseJson'

it('parses a given string into JSON', () => {
  expect(parseJson('{"id":1}')).toEqual({ id: 1 })
})

it('returns null given invalid JSON string', () => {
  expect(parseJson('{"o:2\'')).toBeNull()
})
