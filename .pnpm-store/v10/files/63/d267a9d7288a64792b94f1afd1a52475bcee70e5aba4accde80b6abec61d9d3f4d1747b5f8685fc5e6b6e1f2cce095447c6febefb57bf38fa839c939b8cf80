import { retryMiddlewareOptions } from "@smithy/middleware-retry";
import { httpSigningMiddleware } from "./httpSigningMiddleware";
export const httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: retryMiddlewareOptions.name,
};
export const getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
    },
});
