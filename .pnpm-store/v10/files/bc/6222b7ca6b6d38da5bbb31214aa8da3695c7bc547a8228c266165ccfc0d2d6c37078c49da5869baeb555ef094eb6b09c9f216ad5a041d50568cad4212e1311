// @vitest-environment jsdom
import { it, expect } from 'vitest'
import { createEvent } from './createEvent'
import { EventPolyfill } from '../polyfills/EventPolyfill'

const request = new XMLHttpRequest()
request.open('POST', '/user')

it('returns an EventPolyfill instance with the given target set', () => {
  const event = createEvent(request, 'my-event')
  const target = event.target as XMLHttpRequest

  expect(event).toBeInstanceOf(EventPolyfill)
  expect(target).toBeInstanceOf(XMLHttpRequest)
})

it('returns the ProgressEvent instance', () => {
  const event = createEvent(request, 'load', {
    loaded: 100,
    total: 500,
  })

  expect(event).toBeInstanceOf(ProgressEvent)
  expect(event.loaded).toBe(100)
  expect(event.total).toBe(500)
})
