import { hasRefCounted } from './hasRefCounted'

it('returns true for objects with ref and unref methods', () => {
  expect(
    hasRefCounted({
      ref() {},
      unref() {},
    }),
  ).toBe(true)
})

it('returns false for a non-refcounted object', () => {
  expect(hasRefCounted({})).toBe(false)
  expect(hasRefCounted({ ref() {} })).toBe(false)
  expect(hasRefCounted({ unref() {} })).toBe(false)
})

it('returns false for non-object values', () => {
  expect(
    hasRefCounted(
      // @ts-expect-error Runtime value.
      null,
    ),
  ).toBe(false)
  expect(
    hasRefCounted(
      // @ts-expect-error Runtime value.
      123,
    ),
  ).toBe(false)
  expect(
    hasRefCounted(
      // @ts-expect-error Runtime value.
      'invalid',
    ),
  ).toBe(false)
})
