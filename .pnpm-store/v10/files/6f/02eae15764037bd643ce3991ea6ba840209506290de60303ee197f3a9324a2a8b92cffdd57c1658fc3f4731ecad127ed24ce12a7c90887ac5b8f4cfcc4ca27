import {} from '../handlers/RequestHandler.mjs';
const executeHandlers = async ({
  request,
  requestId,
  handlers,
  resolutionContext
}) => {
  let matchingHandler = null;
  let result = null;
  for (const handler of handlers) {
    result = await handler.run({ request, requestId, resolutionContext });
    if (result !== null) {
      matchingHandler = handler;
    }
    if (result?.response) {
      break;
    }
  }
  if (matchingHandler) {
    return {
      handler: matchingHandler,
      parsedResult: result?.parsedResult,
      response: result?.response
    };
  }
  return null;
};
export {
  executeHandlers
};
//# sourceMappingURL=executeHandlers.mjs.map