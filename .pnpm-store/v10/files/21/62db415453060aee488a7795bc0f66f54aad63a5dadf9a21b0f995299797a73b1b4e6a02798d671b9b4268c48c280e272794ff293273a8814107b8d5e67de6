// @vitest-environment node-websocket
import { ws } from './ws'

it('exports the "link()" method', () => {
  expect(ws).toHaveProperty('link')
  expect(ws.link).toBeInstanceOf(Function)
})

it('throws an error when calling "ws.link()" without a URL argument', () => {
  expect(() =>
    // @ts-expect-error Intentionally invalid call.
    ws.link(),
  ).toThrow('Expected a WebSocket server URL but got undefined')
})

it('throws an error when given a non-path argument to "ws.link()"', () => {
  expect(() =>
    // @ts-expect-error Intentionally invalid argument.
    ws.link(2),
  ).toThrow('Expected a WebSocket server URL to be a valid path but got number')
})
