import { it, expect } from 'vitest'
import { findPropertySource } from './findPropertySource'

it('returns the source for objects without prototypes', () => {
  const obj = Object.create(null)
  obj.test = undefined
  const source = findPropertySource(obj, 'test')
  expect(source).toBe(obj)
})

it('returns the source for objects with prototypes', () => {
  const prototype = Object.create(null)
  prototype.test = undefined

  const obj = Object.create(prototype)

  const source = findPropertySource(obj, 'test')
  expect(source).toBe(prototype)
})

it('returns null if the prototype chain does not contain the property', () => {
  const prototype = Object.create(null)
  const obj = Object.create(prototype)

  const source = findPropertySource(obj, 'test')
  expect(source).toBeNull()
})
