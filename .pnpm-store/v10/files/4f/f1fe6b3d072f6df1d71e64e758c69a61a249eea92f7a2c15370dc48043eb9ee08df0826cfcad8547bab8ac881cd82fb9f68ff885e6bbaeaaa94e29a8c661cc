import { toPublicUrl } from './toPublicUrl'
import { InternalError, devUtils } from '../internal/devUtils'
import { isCommonAssetRequest } from '../../isCommonAssetRequest'

export interface UnhandledRequestPrint {
  warning: () => void
  error: () => void
}

export type UnhandledRequestCallback = (
  request: Request,
  print: UnhandledRequestPrint,
) => void

export type UnhandledRequestStrategy =
  | 'bypass'
  | 'warn'
  | 'error'
  | UnhandledRequestCallback

export async function onUnhandledRequest(
  request: Request,
  strategy: UnhandledRequestStrategy = 'warn',
): Promise<void> {
  const url = new URL(request.url)
  const publicUrl = toPublicUrl(url) + url.search

  const requestBody =
    request.method === 'HEAD' || request.method === 'GET'
      ? null
      : await request.clone().text()
  const messageDetails = `\n\n  \u2022 ${request.method} ${publicUrl}\n\n${requestBody ? `  \u2022 Request body: ${requestBody}\n\n` : ''}`
  const unhandledRequestMessage = `intercepted a request without a matching request handler:${messageDetails}If you still wish to intercept this unhandled request, please create a request handler for it.\nRead more: https://mswjs.io/docs/http/intercepting-requests`

  function applyStrategy(strategy: UnhandledRequestStrategy) {
    switch (strategy) {
      case 'error': {
        // Print a developer-friendly error.
        devUtils.error('Error: %s', unhandledRequestMessage)

        // Throw an exception to halt request processing and not perform the original request.
        throw new InternalError(
          devUtils.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.',
          ),
        )
      }

      case 'warn': {
        devUtils.warn('Warning: %s', unhandledRequestMessage)
        break
      }

      case 'bypass':
        break

      default:
        throw new InternalError(
          devUtils.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            strategy,
          ),
        )
    }
  }

  if (typeof strategy === 'function') {
    strategy(request, {
      warning: applyStrategy.bind(null, 'warn'),
      error: applyStrategy.bind(null, 'error'),
    })
    return
  }

  // Ignore common static asset requests when using a built-in strategy.
  // There's a slight overhead here because this utility will create a request URL
  // instance again despite us having done so previously in this function.
  if (!isCommonAssetRequest(request)) {
    applyStrategy(strategy)
  }
}
