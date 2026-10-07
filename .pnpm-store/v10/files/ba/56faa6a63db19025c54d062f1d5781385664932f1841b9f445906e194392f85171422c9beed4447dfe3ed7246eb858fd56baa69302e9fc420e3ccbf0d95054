import { NO_RETRY_INCREMENT, RETRY_COST, TIMEOUT_RETRY_COST } from "@smithy/util-retry";
export const getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = options?.noRetryIncrement ?? NO_RETRY_INCREMENT;
    const retryCost = options?.retryCost ?? RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};
