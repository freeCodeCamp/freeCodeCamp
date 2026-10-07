import { it, beforeEach, afterEach, expect, vi } from 'vitest'
import { patchesRegistry } from './patchesRegistry'

declare global {
  var foo: { original: boolean }
}

const realGlobalPrototype = Object.getPrototypeOf(global)

beforeEach(() => {
  global.foo = { original: true }
})

afterEach(() => {
  Object.setPrototypeOf(global, realGlobalPrototype)
  patchesRegistry.restoreAllPatches()
})

it('replaces the global', () => {
  patchesRegistry.applyPatch(global, 'foo', () => ({ original: false }))
  expect(global.foo).toEqual({ original: false })
})

it('exposes the real value to the replacement callback', () => {
  patchesRegistry.applyPatch(global, 'foo', (realValue) => {
    expect(realValue).toEqual({ original: true })
    return { original: false }
  })
  expect(global.foo).toEqual({ original: false })
})

it('replaces the global set on the prototype', () => {
  function FakeGlobalScope() {}
  FakeGlobalScope.prototype.foo = { prototype: true }
  Object.setPrototypeOf(global, FakeGlobalScope.prototype)
  Reflect.deleteProperty(global, 'foo')

  expect(global.foo).toEqual({ prototype: true })
  expect(FakeGlobalScope.prototype.foo).toEqual({ prototype: true })

  patchesRegistry.applyPatch(global, 'foo', () => ({ original: false }))

  expect(global.foo).toEqual({ original: false })
  expect(FakeGlobalScope.prototype.foo, 'Preserves prototype value').toEqual({
    prototype: true,
  })
})

it('replaces the global after it was restored', () => {
  const restoreGlobal = patchesRegistry.applyPatch(global, 'foo', () => ({
    original: false,
  }))
  expect(global.foo).toEqual({ original: false })

  restoreGlobal()
  expect(global.foo).toEqual({ original: true })

  patchesRegistry.applyPatch(global, 'foo', () => ({ original: false }))
  expect(global.foo).toEqual({ original: false })
})

it('replaces a property on a custom owner', () => {
  const owner = { bar: { original: true } }
  const restoreGlobal = patchesRegistry.applyPatch(owner, 'bar', () => ({
    original: false,
  }))

  expect(owner.bar).toEqual({ original: false })
  expect(global.foo).toEqual({ original: true })

  restoreGlobal()
  expect(owner.bar).toEqual({ original: true })
})

it('tracks replacements per owner independently', () => {
  const ownerA = { shared: 'a-original' }
  const ownerB = { shared: 'b-original' }

  const restoreA = patchesRegistry.applyPatch(ownerA, 'shared', () => 'a-next')
  const restoreB = patchesRegistry.applyPatch(ownerB, 'shared', () => 'b-next')

  expect(ownerA.shared).toBe('a-next')
  expect(ownerB.shared).toBe('b-next')

  restoreA()
  expect(ownerA.shared).toBe('a-original')
  expect(ownerB.shared).toBe('b-next')

  restoreB()
  expect(ownerB.shared).toBe('b-original')
})

it('warns on replacing a non-existing global', () => {
  vi.spyOn(console, 'warn').mockImplementation(() => {})

  patchesRegistry.applyPatch(
    global,
    // @ts-expect-error Intentionally invalid value.
    'NON-EXISTING',
    () => ({ original: false })
  )
  expect(console.warn).toHaveBeenCalledExactlyOnceWith(
    'Failed to replace a global value at "NON-EXISTING": not a global value.'
  )
})

it('throws if replacing an already replaced global', () => {
  patchesRegistry.applyPatch(global, 'foo', () => ({ original: false }))
  expect(global.foo).toEqual({ original: false })

  expect(() =>
    patchesRegistry.applyPatch(global, 'foo', () => ({ original: false }))
  ).toThrow('Failed to replace a global value at "foo": already replaced.')
})

it('does nothing if restoring an already restored global', () => {
  const restoreGlobal = patchesRegistry.applyPatch(global, 'foo', () => ({
    original: false,
  }))

  expect(global.foo).toEqual({ original: false })

  restoreGlobal()
  expect(global.foo).toEqual({ original: true })

  restoreGlobal()
  expect(global.foo).toEqual({ original: true })
})

it('restores the global', () => {
  const restoreGlobal = patchesRegistry.applyPatch(global, 'foo', () => ({
    original: false,
  }))
  expect(global.foo).toEqual({ original: false })

  restoreGlobal()
  expect(global.foo).toEqual({ original: true })
})

it('restores the global set on the prototype', () => {
  function FakeGlobalScope() {}
  FakeGlobalScope.prototype.foo = { prototype: true }
  Object.setPrototypeOf(global, FakeGlobalScope.prototype)
  Reflect.deleteProperty(global, 'foo')

  expect(global.foo).toEqual({ prototype: true })

  const restoreGlobal = patchesRegistry.applyPatch(global, 'foo', () => ({
    original: false,
  }))

  expect(global.foo).toEqual({ original: false })

  restoreGlobal()
  expect(global.foo).toEqual({ prototype: true })
})

it('restores global to the original property descriptor', () => {
  const descriptor: PropertyDescriptor = {
    value: { original: true },
    enumerable: false,
    configurable: true,
    writable: false,
  }
  Object.defineProperty(global, 'foo', descriptor)
  expect(Object.getOwnPropertyDescriptor(global, 'foo')).toEqual(descriptor)

  const restoreGlobal = patchesRegistry.applyPatch(global, 'foo', () => ({
    original: false,
  }))

  expect(global.foo).toEqual({ original: false })
  expect(Object.getOwnPropertyDescriptor(global, 'foo')).toEqual({
    value: { original: false },
    enumerable: true,
    configurable: true,
    writable: false,
  })

  restoreGlobal()

  expect(global.foo).toEqual({ original: true })
  expect(Object.getOwnPropertyDescriptor(global, 'foo')).toEqual(descriptor)
})
