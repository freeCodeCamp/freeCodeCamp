import { it, expect } from 'vitest'
import { getValueBySymbol } from './getValueBySymbol'

it('returns undefined given a non-existing symbol', () => {
  expect(getValueBySymbol('non-existing', {})).toBeUndefined()
})

it('returns value behind the given symbol', () => {
  const symbol = Symbol('kInternal')

  expect(getValueBySymbol('kInternal', { [symbol]: null })).toBe(null)
  expect(getValueBySymbol('kInternal', { [symbol]: true })).toBe(true)
  expect(getValueBySymbol('kInternal', { [symbol]: 'value' })).toBe('value')
})
