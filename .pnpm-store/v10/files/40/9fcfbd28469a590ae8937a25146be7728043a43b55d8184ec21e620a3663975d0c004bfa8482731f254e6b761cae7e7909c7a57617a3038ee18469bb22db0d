/**
 * Collection of helpers for bridging the compatibility between the old and the new APIs.
 */
import { invariant } from 'outvariant'
import { type UnhandledRequestStrategy } from '../utils/request/onUnhandledRequest'
import {
  executeUnhandledFrameHandle,
  type UnhandledFrameCallback,
} from './on-unhandled-frame'
import { HttpNetworkFrame } from './frames/http-frame'
import { WebSocketNetworkFrame } from './frames/websocket-frame'

export function fromLegacyOnUnhandledRequest(
  getLegacyValue: () => UnhandledRequestStrategy | undefined,
): UnhandledFrameCallback {
  return ({ frame, defaults }) => {
    const legacyOnUnhandledRequestStrategy = getLegacyValue()

    if (legacyOnUnhandledRequestStrategy == null) {
      return
    }

    if (typeof legacyOnUnhandledRequestStrategy === 'function') {
      const request =
        frame instanceof HttpNetworkFrame
          ? frame.data.request
          : frame instanceof WebSocketNetworkFrame
            ? new Request(frame.data.connection.client.url, {
                headers: {
                  connection: 'upgrade',
                  upgrade: 'websocket',
                },
              })
            : null

      invariant(
        request != null,
        'Failed to coerce a network frame to a legacy `onUnhandledRequest` strategy: unknown frame protocol "%s"',
        frame.protocol,
      )

      return legacyOnUnhandledRequestStrategy(request, {
        warning: defaults.warn,
        error: defaults.error,
      })
    }

    return executeUnhandledFrameHandle(frame, legacyOnUnhandledRequestStrategy)
  }
}
