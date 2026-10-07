import { parseUrl } from "@smithy/url-parser";
export const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return parseUrl(endpoint.url);
        }
        return endpoint;
    }
    return parseUrl(endpoint);
};
