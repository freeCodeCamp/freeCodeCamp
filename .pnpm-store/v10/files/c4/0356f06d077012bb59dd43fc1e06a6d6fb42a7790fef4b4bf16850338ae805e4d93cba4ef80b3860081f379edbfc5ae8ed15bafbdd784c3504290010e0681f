import type { AnyHandler } from '../../experimental/handlers-controller'
import type { RequestHandler } from '../../handlers/RequestHandler'
import type { WebSocketHandler } from '../../handlers/WebSocketHandler'
import { isObject } from './isObject'

/**
 * A filter function that ensures that the provided argument
 * is a handler of the given kind. This helps differentiate
 * between different kinds of handlers, e.g. request and event handlers.
 */
export function isHandlerKind<K extends AnyHandler['kind']>(kind: K) {
  return (
    input: unknown,
  ): input is K extends 'websocket' ? WebSocketHandler : RequestHandler => {
    return isObject(input) && 'kind' in input && input.kind === kind
  }
}
