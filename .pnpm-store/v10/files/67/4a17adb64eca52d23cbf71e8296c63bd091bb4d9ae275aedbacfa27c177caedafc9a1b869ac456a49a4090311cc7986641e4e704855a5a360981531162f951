import { GraphQLHandler } from '../../handlers/GraphQLHandler'
import { HttpHandler } from '../../handlers/HttpHandler'
import { RequestHandler } from '../../handlers/RequestHandler'
import { WebSocketHandler } from '../../handlers/WebSocketHandler'
import { isHandlerKind } from './isHandlerKind'

it('returns true if expected a request handler and given a request handler', () => {
  expect(isHandlerKind('request')(new HttpHandler('*', '*', () => {}))).toBe(
    true,
  )

  expect(
    isHandlerKind('request')(new GraphQLHandler('all', '*', '*', () => {})),
  ).toBe(true)
})

it('returns true if expected a request handler and given a custom request handler', () => {
  class MyHandler extends RequestHandler {
    constructor() {
      super({ info: { header: '*' }, resolver: () => {} })
    }
    predicate = () => false
    log() {}
  }

  expect(isHandlerKind('request')(new MyHandler())).toBe(true)
})

it('returns false if expected a request handler but given event handler', () => {
  expect(isHandlerKind('request')(new WebSocketHandler('*'))).toBe(false)
})

it('returns false if expected a request handler but given arbitrary object', () => {
  expect(isHandlerKind('request')(undefined)).toBe(false)
  expect(isHandlerKind('request')(null)).toBe(false)
  expect(isHandlerKind('request')({})).toBe(false)
  expect(isHandlerKind('request')([])).toBe(false)
  expect(isHandlerKind('request')(123)).toBe(false)
  expect(isHandlerKind('request')('hello')).toBe(false)
})

it('returns true if expected an event handler and given an event handler', () => {
  expect(isHandlerKind('websocket')(new WebSocketHandler('*'))).toBe(true)
})

it('returns true if expected an event handler and given a custom event handler', () => {
  class MyEventHandler extends WebSocketHandler {
    constructor() {
      super('*')
    }
  }
  expect(isHandlerKind('websocket')(new MyEventHandler())).toBe(true)
})

it('returns false if expected an event handler but given arbitrary object', () => {
  expect(isHandlerKind('websocket')(undefined)).toBe(false)
  expect(isHandlerKind('websocket')(null)).toBe(false)
  expect(isHandlerKind('websocket')({})).toBe(false)
  expect(isHandlerKind('websocket')([])).toBe(false)
  expect(isHandlerKind('websocket')(123)).toBe(false)
  expect(isHandlerKind('websocket')('hello')).toBe(false)
})
