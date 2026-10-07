export const createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
export const EXPIRATION_MS = 300000;
export const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
export const doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
export const memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === undefined) {
        return undefined;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
        if (!pending) {
            pending = normalizedProvider(options);
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider(options);
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
        }
        if (isConstant) {
            return resolved;
        }
        if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
        }
        return resolved;
    };
};
