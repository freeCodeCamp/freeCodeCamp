export const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
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
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};
