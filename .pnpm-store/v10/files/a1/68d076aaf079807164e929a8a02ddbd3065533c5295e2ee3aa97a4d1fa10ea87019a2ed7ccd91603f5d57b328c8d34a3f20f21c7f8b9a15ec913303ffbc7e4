import { chain, memoize, TokenProviderError } from "@smithy/property-provider";
import { fromSso } from "./fromSso";
export const nodeProvider = (init = {}) => memoize(chain(fromSso(init), async () => {
    throw new TokenProviderError("Could not load token from any providers", false);
}), (token) => token.expiration !== undefined && token.expiration.getTime() - Date.now() < 300000, (token) => token.expiration !== undefined);
