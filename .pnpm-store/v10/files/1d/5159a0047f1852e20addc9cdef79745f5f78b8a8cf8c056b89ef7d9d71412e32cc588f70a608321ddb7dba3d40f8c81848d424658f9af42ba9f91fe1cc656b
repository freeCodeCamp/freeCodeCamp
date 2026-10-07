// @vitest-environment jsdom
import { getAbsoluteWorkerUrl } from './getAbsoluteWorkerUrl'

const rawLocation = window.location

afterAll(() => {
  Object.defineProperty(window, 'location', {
    value: rawLocation,
  })
})

it('returns absolute worker url relatively to the root', () => {
  expect(getAbsoluteWorkerUrl('./worker.js')).toBe('http://localhost/worker.js')
})

it('returns an absolute worker url relatively to the current path', () => {
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://localhost/path/to/page',
    },
  })

  expect(getAbsoluteWorkerUrl('./worker.js')).toBe(
    'http://localhost/path/to/worker.js',
  )

  // Leading slash must still resolve to the root.
  expect(getAbsoluteWorkerUrl('/worker.js')).toBe('http://localhost/worker.js')
})
