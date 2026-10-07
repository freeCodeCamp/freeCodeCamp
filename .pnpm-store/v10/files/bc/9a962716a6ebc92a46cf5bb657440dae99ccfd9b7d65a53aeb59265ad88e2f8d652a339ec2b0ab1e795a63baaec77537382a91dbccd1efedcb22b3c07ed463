import { TokenProviderError } from "@smithy/property-provider";
import { REFRESH_MESSAGE } from "./constants";
export const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
    }
};
