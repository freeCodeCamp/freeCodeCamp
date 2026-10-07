/**
 * @vitest-environment node
 */
import { it, expect } from 'vitest'
import { bindEvent } from './bindEvent'

it('sets the "target" on the given event', () => {
  class Target {}
  const target = new Target()
  const event = new Event('open')
  bindEvent(target, event)

  expect(event.type).toBe('open')
  expect(event.target).toEqual(target)
})

it('overrides existing "target" on the given event', () => {
  class Target {}
  const oldTarget = new Target()
  const newTarget = new Target()
  const event = new Event('open')
  bindEvent(oldTarget, event)
  bindEvent(newTarget, event)

  expect(event.type).toBe('open')
  expect(event.target).toEqual(newTarget)
})
