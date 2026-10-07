import { toPublicUrl } from './toPublicUrl.mjs';
import { InternalError, devUtils } from '../internal/devUtils.mjs';
import { isCommonAssetRequest } from '../../isCommonAssetRequest.mjs';
async function onUnhandledRequest(request, strategy = "warn") {
  const url = new URL(request.url);
  const publicUrl = toPublicUrl(url) + url.search;
  const requestBody = request.method === "HEAD" || request.method === "GET" ? null : await request.clone().text();
  const messageDetails = `

  \u2022 ${request.method} ${publicUrl}

${requestBody ? `  \u2022 Request body: ${requestBody}

` : ""}`;
  const unhandledRequestMessage = `intercepted a request without a matching request handler:${messageDetails}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`;
  function applyStrategy(strategy2) {
    switch (strategy2) {
      case "error": {
        devUtils.error("Error: %s", unhandledRequestMessage);
        throw new InternalError(
          devUtils.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        );
      }
      case "warn": {
        devUtils.warn("Warning: %s", unhandledRequestMessage);
        break;
      }
      case "bypass":
        break;
      default:
        throw new InternalError(
          devUtils.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            strategy2
          )
        );
    }
  }
  if (typeof strategy === "function") {
    strategy(request, {
      warning: applyStrategy.bind(null, "warn"),
      error: applyStrategy.bind(null, "error")
    });
    return;
  }
  if (!isCommonAssetRequest(request)) {
    applyStrategy(strategy);
  }
}
export {
  onUnhandledRequest
};
//# sourceMappingURL=onUnhandledRequest.mjs.map