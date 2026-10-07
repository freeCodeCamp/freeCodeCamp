// @vitest-environment node
import { passthrough } from './passthrough'

it('creates a 302 response with the intention header', () => {
  const response = passthrough()

  expect(response).toBeInstanceOf(Response)
  expect(response.status).toBe(302)
  expect(response.statusText).toBe('Passthrough')
  expect(response.headers.get('x-msw-intention')).toBe('passthrough')
})
