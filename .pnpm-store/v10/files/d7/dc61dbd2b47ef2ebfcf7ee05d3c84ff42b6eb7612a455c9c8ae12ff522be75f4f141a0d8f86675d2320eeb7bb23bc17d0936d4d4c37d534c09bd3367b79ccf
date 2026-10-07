import { normalizeProvider } from "@smithy/util-middleware";
export const resolveCustomEndpointsConfig = (input) => {
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
    };
};
