import { normalizeProvider } from "@smithy/util-middleware";
import { getEndpointFromRegion } from "./utils/getEndpointFromRegion";
export const resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = normalizeProvider(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: endpoint
            ? normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    };
};
