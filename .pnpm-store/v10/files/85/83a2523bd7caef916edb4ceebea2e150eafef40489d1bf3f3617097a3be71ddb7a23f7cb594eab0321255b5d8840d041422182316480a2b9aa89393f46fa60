import { type ServiceWorkerSourceOptions } from '../sources/service-worker-source'
import { shouldInvalidateWorker } from './should-invalidate-worker'

function createOptions(
  overrides: Partial<ServiceWorkerSourceOptions> = {},
): ServiceWorkerSourceOptions {
  return {
    serviceWorker: {
      url: '/mockServiceWorker.js',
      options: { scope: '/' },
    },
    ...overrides,
  }
}

it('returns true when the worker url differs', () => {
  expect(
    shouldInvalidateWorker(
      createOptions({
        serviceWorker: { url: '/a.js', options: { scope: '/' } },
      }),
      createOptions({
        serviceWorker: { url: '/b.js', options: { scope: '/' } },
      }),
    ),
  ).toBe(true)
})

it('returns true when the registration options differ', () => {
  expect(
    shouldInvalidateWorker(
      createOptions({
        serviceWorker: { url: '/sw.js', options: { scope: '/' } },
      }),
      createOptions({
        serviceWorker: { url: '/sw.js', options: { scope: '/app' } },
      }),
    ),
  ).toBe(true)
})

it('returns true when only one side has registration options', () => {
  expect(
    shouldInvalidateWorker(
      createOptions({ serviceWorker: { url: '/sw.js' } }),
      createOptions({
        serviceWorker: { url: '/sw.js', options: { scope: '/' } },
      }),
    ),
  ).toBe(true)
})

it('returns true when findWorker differs by reference', () => {
  expect(
    shouldInvalidateWorker(
      createOptions({ findWorker: () => true }),
      createOptions({ findWorker: () => true }),
    ),
  ).toBe(true)
})

it('returns true when findWorker is added on one side', () => {
  expect(
    shouldInvalidateWorker(
      createOptions(),
      createOptions({ findWorker: () => true }),
    ),
  ).toBe(true)
})

it('returns false for the same options reference', () => {
  const options = createOptions()
  expect(shouldInvalidateWorker(options, options)).toBe(false)
})

it('returns false for deeply equal options', () => {
  expect(
    shouldInvalidateWorker(
      createOptions({
        serviceWorker: { url: '/sw.js', options: { scope: '/' } },
      }),
      createOptions({
        serviceWorker: { url: '/sw.js', options: { scope: '/' } },
      }),
    ),
  ).toBe(false)
})

it('returns false for the same worker url without options', () => {
  expect(
    shouldInvalidateWorker(
      createOptions({ serviceWorker: { url: '/sw.js' } }),
      createOptions({ serviceWorker: { url: '/sw.js' } }),
    ),
  ).toBe(false)
})

it('returns false when findWorker is the same reference', () => {
  const findWorker = () => true
  expect(
    shouldInvalidateWorker(
      createOptions({ findWorker }),
      createOptions({ findWorker }),
    ),
  ).toBe(false)
})

it('returns false regardless of the "quiet" option', () => {
  expect(
    shouldInvalidateWorker(
      createOptions({ quiet: true }),
      createOptions({ quiet: true }),
    ),
  ).toBe(false)

  expect(
    shouldInvalidateWorker(
      createOptions({ quiet: false }),
      createOptions({ quiet: true }),
    ),
  ).toBe(false)
})
