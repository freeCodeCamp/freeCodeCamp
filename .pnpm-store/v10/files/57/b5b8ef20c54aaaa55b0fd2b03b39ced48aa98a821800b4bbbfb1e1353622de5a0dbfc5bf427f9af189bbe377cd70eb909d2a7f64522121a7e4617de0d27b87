import { TokenProviderError } from "@smithy/property-provider";
export const fromStatic = ({ token, logger }) => async () => {
    logger?.debug("@aws-sdk/token-providers", "fromStatic");
    if (!token || !token.token) {
        throw new TokenProviderError(`Please pass a valid token to fromStatic`, false);
    }
    return token;
};
