import { vi, it, expect } from 'vitest'
import {
  RequestController,
  type RequestControllerSource,
} from './RequestController'
import { InterceptorError } from './InterceptorError'

const defaultSource = {
  passthrough() {},
  respondWith() {},
  errorWith() {},
} satisfies RequestControllerSource

it('has a pending state upon construction', () => {
  const controller = new RequestController(
    new Request('http://localhost'),
    defaultSource
  )

  expect(controller.handled).toBeInstanceOf(Promise)
  expect(controller.readyState).toBe(RequestController.PENDING)
})

it('handles a request when calling ".respondWith()" with a mocked response', async () => {
  const respondWith = vi.fn<RequestControllerSource['respondWith']>()
  const controller = new RequestController(new Request('http://localhost'), {
    ...defaultSource,
    respondWith,
  })

  await controller.respondWith(new Response('hello world'))

  expect(controller.readyState).toBe(RequestController.RESPONSE)
  await expect(controller.handled).resolves.toBeUndefined()

  expect(respondWith).toHaveBeenCalledOnce()
  const [response] = respondWith.mock.calls[0]

  expect(response).toBeInstanceOf(Response)
  expect(response.status).toBe(200)
  await expect(response.text()).resolves.toBe('hello world')
})

it('handles the request when calling ".errorWith()" with an error', async () => {
  const errorWith = vi.fn<RequestControllerSource['errorWith']>()
  const controller = new RequestController(new Request('http://localhost'), {
    ...defaultSource,
    errorWith,
  })

  const error = new Error('Oops!')
  await controller.errorWith(error)

  expect(controller.readyState).toBe(RequestController.ERROR)
  await expect(controller.handled).resolves.toBeUndefined()

  expect(errorWith).toHaveBeenCalledOnce()
  expect(errorWith).toHaveBeenCalledWith(error)
})

it('handles the request when calling ".errorWith()" with an arbitrary object', async () => {
  const errorWith = vi.fn<RequestControllerSource['errorWith']>()
  const controller = new RequestController(new Request('http://localhost'), {
    ...defaultSource,
    errorWith,
  })

  const error = { message: 'Oops!' }
  await controller.errorWith(error)

  expect(controller.readyState).toBe(RequestController.ERROR)
  await expect(controller.handled).resolves.toBeUndefined()

  expect(errorWith).toHaveBeenCalledOnce()
  expect(errorWith).toHaveBeenCalledWith(error)
})

it('throws when calling "respondWith" multiple times', async () => {
  const controller = new RequestController(
    new Request('http://localhost'),
    defaultSource
  )
  controller.respondWith(new Response('hello world'))

  expect(() => controller.respondWith(new Response('second response'))).toThrow(
    new InterceptorError(
      'Failed to respond to the "GET http://localhost/" request with "200 OK": the request has already been handled (2)'
    )
  )
})

it('throws when calling "errorWith" multiple times', async () => {
  const controller = new RequestController(
    new Request('http://localhost'),
    defaultSource
  )
  controller.errorWith(new Error('Oops!'))

  expect(() => controller.errorWith(new Error('second error'))).toThrow(
    new InterceptorError(
      'Failed to error the "GET http://localhost/" request with "Error: second error": the request has already been handled (3)'
    )
  )
})
