import { invariant } from 'outvariant'
import { isCommonAssetRequest } from '../isCommonAssetRequest'
import { devUtils, InternalError } from '../utils/internal/devUtils'
import { HttpNetworkFrame } from './frames/http-frame'
import { type AnyNetworkFrame } from './frames/network-frame'

export type UnhandledFrameHandle =
  | UnhandledFrameStrategy
  | UnhandledFrameCallback

export type UnhandledFrameStrategy = 'bypass' | 'warn' | 'error'

export type UnhandledFrameCallback = (args: {
  frame: AnyNetworkFrame
  defaults: UnhandledFrameDefaults
}) => Promise<void> | void

export type UnhandledFrameDefaults = {
  warn: () => void
  error: () => void
}

export async function executeUnhandledFrameHandle(
  frame: AnyNetworkFrame,
  handle: UnhandledFrameHandle,
): Promise<void> {
  const printStrategyMessage = async (
    strategy: UnhandledFrameStrategy,
  ): Promise<void> => {
    if (strategy === 'bypass') {
      return
    }

    const message = await frame.getUnhandledMessage()

    switch (strategy) {
      case 'warn': {
        return devUtils.warn('Warning: %s', message)
      }

      case 'error': {
        return devUtils.error('Error: %s', message)
      }
    }
  }

  const applyStrategy = async (
    strategy: UnhandledFrameStrategy,
  ): Promise<void> => {
    invariant.as(
      InternalError,
      strategy === 'bypass' || strategy === 'warn' || strategy === 'error',
      /**
       * @fixme Rename "onUnhandledRequest" to "onUnhandledFrame" in the error message
       * with the next major release.
       */
      devUtils.formatMessage(
        'Failed to react to an unhandled network frame: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
        strategy,
      ),
    )

    if (strategy === 'bypass') {
      return
    }

    await printStrategyMessage(strategy)

    if (strategy === 'error') {
      return Promise.reject(
        new InternalError(
          devUtils.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.',
          ),
        ),
      )
    }
  }

  if (typeof handle === 'function') {
    return handle({
      frame,
      defaults: {
        warn: printStrategyMessage.bind(null, 'warn'),
        /**
         * @note The defaults only print the corresponding messages now.
         * They do not affect the frame resolution (e.g. do not error the frame).
         * That is only for backward compatibility reasons. In the future, these should
         * be an alias to `applyStrategy.bind(null, 'error')` instead.
         */
        error: printStrategyMessage.bind(null, 'error'),
      },
    })
  }

  /**
   * Ignore unhandled common HTTP assets.
   * @note Calling this here applies the common assets check
   * only to the scenarios when `onUnhandledFrame` was set to a predefined strategy.
   * When using a custom function, you need to check for common assets manually.
   */
  if (
    frame instanceof HttpNetworkFrame &&
    isCommonAssetRequest(frame.data.request)
  ) {
    return
  }

  return applyStrategy(handle)
}
