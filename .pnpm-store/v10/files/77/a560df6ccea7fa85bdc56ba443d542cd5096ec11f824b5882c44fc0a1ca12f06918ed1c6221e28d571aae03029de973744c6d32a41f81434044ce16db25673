import { HttpRequest } from "@smithy/protocol-http";
import { INVOCATION_ID_HEADER, REQUEST_HEADER } from "@smithy/util-retry";
export const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
        delete request.headers[INVOCATION_ID_HEADER];
        delete request.headers[REQUEST_HEADER];
    }
    return next(args);
};
export const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
export const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});
