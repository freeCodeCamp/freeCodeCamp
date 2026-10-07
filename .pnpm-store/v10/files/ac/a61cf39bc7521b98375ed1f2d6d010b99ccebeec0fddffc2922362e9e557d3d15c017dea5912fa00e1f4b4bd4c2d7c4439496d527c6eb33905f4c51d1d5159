import { vi, beforeAll, afterEach, afterAll, it, expect } from 'vitest'
import { hasConfigurableGlobal } from './hasConfigurableGlobal'

let originalGlobalPrototype = Object.getPrototypeOf(globalThis)

beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.clearAllMocks()
  Object.setPrototypeOf(globalThis, originalGlobalPrototype)
})

afterAll(() => {
  vi.restoreAllMocks()
})

it('returns true if the global property exists and is configurable', () => {
  Object.defineProperty(global, '_existsAndConfigurable', {
    value: 'something',
    configurable: true,
  })

  expect(hasConfigurableGlobal('_existsAndConfigurable')).toBe(true)
})

it('returns false if the global property does not exist', () => {
  expect(hasConfigurableGlobal('_non-existing')).toBe(false)
})

it('returns false for existing global with undefined as a value', () => {
  Object.defineProperty(global, '_existsAndUndefined', {
    value: undefined,
    configurable: true,
  })
  expect(hasConfigurableGlobal('_existsAndUndefined')).toBe(false)
})

it('returns false for existing global with null as a value', () => {
  Object.defineProperty(global, '_existsAndNull', {
    value: null,
    configurable: true,
  })
  expect(hasConfigurableGlobal('_existsAndNull')).toBe(false)
})

it('returns false for existing global with a getter that returns undefined', () => {
  Object.defineProperty(global, '_existsGetterUndefined', {
    get: () => undefined,
    configurable: true,
  })
  expect(hasConfigurableGlobal('_existsGetterUndefined')).toBe(false)
})

it('returns false and prints an error for implicitly non-configurable global property', () => {
  Object.defineProperty(global, '_implicitlyNonConfigurable', {
    value: 'something',
  })

  expect(hasConfigurableGlobal('_implicitlyNonConfigurable')).toBe(false)
  expect(console.error).toHaveBeenCalledWith(
    '[MSW] Failed to apply interceptor: the global `_implicitlyNonConfigurable` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.'
  )
})

it('returns false and prints an error for explicitly non-configurable global property', () => {
  Object.defineProperty(global, '_explicitlyNonConfigurable', {
    value: 'something',
    configurable: false,
  })

  expect(hasConfigurableGlobal('_explicitlyNonConfigurable')).toBe(false)
  expect(console.error).toHaveBeenCalledWith(
    '[MSW] Failed to apply interceptor: the global `_explicitlyNonConfigurable` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.'
  )
})

it('returns false and prints an error for global property that only has a getter', () => {
  Object.defineProperty(global, '_onlyGetter', { get: () => 'something' })

  expect(hasConfigurableGlobal('_onlyGetter')).toBe(false)
  expect(console.error).toHaveBeenCalledWith(
    '[MSW] Failed to apply interceptor: the global `_onlyGetter` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.'
  )
})

it('returns true for a property on a global prototype', () => {
  function FakeGlobalScope() {}
  FakeGlobalScope.prototype._prototypeGlobal = 123
  Object.setPrototypeOf(globalThis, FakeGlobalScope.prototype)

  expect(hasConfigurableGlobal('_prototypeGlobal')).toBe(true)
})
