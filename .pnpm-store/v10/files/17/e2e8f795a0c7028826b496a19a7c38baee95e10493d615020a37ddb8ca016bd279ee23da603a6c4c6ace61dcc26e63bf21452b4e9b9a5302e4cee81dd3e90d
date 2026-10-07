import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import { CredentialsProviderError } from "@smithy/property-provider";
import { checkUrl } from "./checkUrl";
import { createGetRequest, getCredentials } from "./requestHelpers";
import { retryWrapper } from "./retry-wrapper";
export const fromHttp = (options) => {
    options.logger?.debug("@aws-sdk/credential-provider-http", "fromHttp");
    let host;
    const full = options.credentialsFullUri;
    if (full) {
        host = full;
    }
    else {
        throw new CredentialsProviderError("No HTTP credential provider host provided.");
    }
    const url = new URL(host);
    checkUrl(url);
    const requestHandler = new FetchHttpHandler();
    return retryWrapper(async () => {
        const request = createGetRequest(url);
        if (options.authorizationToken) {
            request.headers.Authorization = options.authorizationToken;
        }
        const result = await requestHandler.handle(request);
        return getCredentials(result.response);
    }, options.maxRetries ?? 3, options.timeout ?? 1000);
};
