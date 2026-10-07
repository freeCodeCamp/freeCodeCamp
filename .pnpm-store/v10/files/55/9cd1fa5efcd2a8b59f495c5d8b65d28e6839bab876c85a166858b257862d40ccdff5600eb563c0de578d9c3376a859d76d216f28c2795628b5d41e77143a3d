import { endpointMiddlewareOptions } from "@smithy/middleware-endpoint";
import { httpAuthSchemeMiddleware } from "./httpAuthSchemeMiddleware";
export const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: endpointMiddlewareOptions.name,
};
export const getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    },
});
