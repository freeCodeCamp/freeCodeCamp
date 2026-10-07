// @vitest-environment node
import { setupWorker } from './setup-worker'

test('returns an error when run in a Node.js environment', () => {
  expect(setupWorker).toThrow(
    '[MSW] Failed to execute `setupWorker` in a non-browser environment',
  )
})
