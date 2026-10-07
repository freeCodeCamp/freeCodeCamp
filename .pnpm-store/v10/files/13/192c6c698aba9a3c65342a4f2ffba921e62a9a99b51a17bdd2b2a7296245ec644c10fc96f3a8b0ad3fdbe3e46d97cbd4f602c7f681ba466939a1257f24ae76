// @vitest-environment jsdom
import { TextEncoder } from 'util'
import { pruneGetRequestBody } from './pruneGetRequestBody'

test('sets empty GET request body to undefined', () => {
  expect(
    pruneGetRequestBody({
      method: 'GET',
    }),
  ).toBeUndefined()

  expect(
    pruneGetRequestBody({
      method: 'GET',
      // There's no such thing as a GET request with a body.
      body: new ArrayBuffer(5),
    }),
  ).toBeUndefined()
})

test('sets HEAD request body to undefined', () => {
  expect(
    pruneGetRequestBody({
      method: 'HEAD',
    }),
  ).toBeUndefined()

  expect(
    pruneGetRequestBody({
      method: 'HEAD',
      body: new ArrayBuffer(5),
    }),
  ).toBeUndefined()
})

test('ignores requests of the other methods than GET', () => {
  const body = new TextEncoder().encode('hello world')
  expect(
    pruneGetRequestBody({
      method: 'POST',
      body,
    }),
  ).toEqual(body)

  expect(
    pruneGetRequestBody({
      method: 'PUT',
      body,
    }),
  ).toEqual(body)
})
