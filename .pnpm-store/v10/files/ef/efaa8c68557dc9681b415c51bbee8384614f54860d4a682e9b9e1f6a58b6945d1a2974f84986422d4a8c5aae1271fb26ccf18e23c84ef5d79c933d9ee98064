import { HttpRequest } from "@smithy/protocol-http";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
import { getSmithyContext } from "@smithy/util-middleware";
const defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
};
const defaultSuccessHandler = (httpResponse, signingProperties) => { };
export const httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!HttpRequest.isInstance(args.request)) {
        return next(args);
    }
    const smithyContext = getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer, } = scheme;
    const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties),
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
};
