import { it, expect } from 'vitest'
import { createRequestId } from './createRequestId'
import { REQUEST_ID_REGEXP } from '../test/helpers'

it('returns a request ID', () => {
  expect(createRequestId()).toMatch(REQUEST_ID_REGEXP)
})
