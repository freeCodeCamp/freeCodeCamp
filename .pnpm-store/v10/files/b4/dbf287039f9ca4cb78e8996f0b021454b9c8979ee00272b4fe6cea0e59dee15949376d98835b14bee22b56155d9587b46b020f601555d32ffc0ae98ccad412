import type { WebSocketData } from '@mswjs/interceptors/WebSocket'
import { isObject } from '../../utils/internal/isObject'

/**
 * Returns the byte length of the given WebSocket message.
 * @example
 * getMessageLength('hello') // 5
 * getMessageLength(new Blob(['hello'])) // 5
 */
export function getMessageLength(data: WebSocketData): number {
  if (data instanceof Blob) {
    return data.size
  }

  if (isObject(data) && 'byteLength' in data) {
    return data.byteLength
  }

  return new Blob([data as any]).size
}
