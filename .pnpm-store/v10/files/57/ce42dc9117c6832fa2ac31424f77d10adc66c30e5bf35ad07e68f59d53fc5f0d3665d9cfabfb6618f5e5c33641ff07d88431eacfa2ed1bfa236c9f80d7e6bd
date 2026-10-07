import { createRequestId } from "@mswjs/interceptors";
import {
  executeHandlers
} from './utils/executeHandlers.mjs';
const getResponse = async (handlers, request, resolutionContext) => {
  const result = await executeHandlers({
    request,
    requestId: createRequestId(),
    handlers,
    resolutionContext
  });
  return result?.response;
};
export {
  getResponse
};
//# sourceMappingURL=getResponse.mjs.map