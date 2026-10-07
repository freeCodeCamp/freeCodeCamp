import { until } from "until-async";
import {
  executeHandlers
} from './executeHandlers.mjs';
import { onUnhandledRequest } from './request/onUnhandledRequest.mjs';
import { storeResponseCookies } from './request/storeResponseCookies.mjs';
async function handleRequest(request, requestId, handlers, options, emitter, handleRequestOptions) {
  emitter.emit("request:start", { request, requestId });
  if (request.headers.get("accept")?.includes("msw/passthrough")) {
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  const [lookupError, lookupResult] = await until(() => {
    return executeHandlers({
      request,
      requestId,
      handlers,
      resolutionContext: handleRequestOptions?.resolutionContext
    });
  });
  if (lookupError) {
    emitter.emit("unhandledException", {
      error: lookupError,
      request,
      requestId
    });
    throw lookupError;
  }
  if (!lookupResult) {
    await onUnhandledRequest(request, options.onUnhandledRequest);
    emitter.emit("request:unhandled", { request, requestId });
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  const { response } = lookupResult;
  if (!response) {
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  if (response.status === 302 && response.headers.get("x-msw-intention") === "passthrough") {
    emitter.emit("request:end", { request, requestId });
    handleRequestOptions?.onPassthroughResponse?.(request);
    return;
  }
  await storeResponseCookies(request, response);
  emitter.emit("request:match", { request, requestId });
  const requiredLookupResult = lookupResult;
  handleRequestOptions?.onMockedResponse?.(response, requiredLookupResult);
  emitter.emit("request:end", { request, requestId });
  return response;
}
export {
  handleRequest
};
//# sourceMappingURL=handleRequest.mjs.map